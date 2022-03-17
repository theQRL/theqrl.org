#!/usr/bin/php -f
<?php 
if(!getenv("GITHUB_OAUTH_TOKEN")) {
	echo "You're going to be limited to 60 calls per hour which this script comes close to. Please set environment variable GITHUB_OAUTH_TOKEN\n";
	exit;
} else {
	$github_token = getenv("GITHUB_OAUTH_TOKEN");
}

$orgs = ["theqrl","theqrl-community"];

function get_contributor_urls($org) {
	$context = stream_context_create(array(
		'http'=>array(
			'method'=>"GET",
			'header'=>"Accept-language: en\r\n" .
						"User-Agent: Github script in theqrl/theqrl.org for getting contributors \r\n" .
						"Authorization: token ".getenv("GITHUB_OAUTH_TOKEN")." \r\n"

		)
	));

	$contributors = json_decode(file_get_contents("https://api.github.com/orgs/".$org."/repos?per_page=100", false, $context));
	$contributor_urls = [];

	foreach ($contributors as $key => $value) {
		if($value->fork==false) {
			$contributor_urls[] = $value->contributors_url."?per_page=100";
            // $contributor_urls[] = "https://api.github.com/repos/".$value->full_name."/collaborators";
		}
	}

	return $contributor_urls;
}

function expand_contributor_urls($contributor_urls) {
	$context = stream_context_create(array(
		'http'=>array(
			'method'=>"GET",
			'header'=>"Accept-language: en\r\n" .
						"User-Agent: Github script in theqrl/theqrl.org for getting contributors \r\n" .
						"Authorization: token ".getenv("GITHUB_OAUTH_TOKEN")." \r\n"

		)
	));	

	$i = 0;
	foreach ($contributor_urls as $value) {
		echo $i.". ".$value."\n";
		$contributors_data[] = json_decode(file_get_contents($value, false, $context));
		$i++;
	}

	return $contributors_data;
}

function merge_contributor_data($contributor_data) {
	$stat["contributions"] = 0;
	$contributions = [];

	foreach ($contributor_data as $key=>$contributors_url_data) {
		foreach ($contributors_url_data as $contributor) {
			if(isset($contributions[$contributor->id])) {
				$total_contributions = $contributions[$contributor->id]["contributions"] + $contributor->contributions;
				echo $key.". ".$contributor->login.": ".$contributions[$contributor->id]["contributions"]." + ".$contributor->contributions." = ".$total_contributions."\n";
			} else {
				$total_contributions = $contributor->contributions;
				echo $key.". ".$contributor->login.": ".$contributor->contributions."\n";
			}

			$contributions[$contributor->id] = array(
				"contributions" => $total_contributions,
				"login" => $contributor->login
			);
			$stat["contributions"] += $contributor->contributions;	
		}
	}

	print "Total contributions: ".$stat["contributions"]."\n";

	// Run through each contribution
	foreach ($contributions as $key => $value) {
		$flat[]= array(
			"id"=>$key,
			"login"=>$value["login"],
			"contributions"=>$value["contributions"]
		);
	}

	return $flat;
}

$contributor_urls = [];

foreach ($orgs as $value) {
	$contributor_urls = array_merge($contributor_urls, get_contributor_urls($value));
}

$contributor_data = expand_contributor_urls($contributor_urls);

yaml_emit_file("data/contributions.yml", merge_contributor_data($contributor_data));