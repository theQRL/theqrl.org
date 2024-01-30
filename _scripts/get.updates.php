<?php

// -1 Produces output for LAST month
// 0 Produces output for THIS month
$month_offset = -1;

$start_date = date("Y-m-d", mktime(0, 0, 0, date("m")+($month_offset + 0), 1));
$end_date = date("Y-m-d", mktime(0, 0, 0, date("m")+($month_offset + 1), 0));

echo "$start_date to $end_date\n";

if(!getenv("GITHUB_OAUTH_TOKEN")) {
	echo "You're going to be limited to 60 calls per hour which this script comes close to. Please set environment variable GITHUB_OAUTH_TOKEN\n";
	exit;
} else {
	$github_token = getenv("GITHUB_OAUTH_TOKEN");
}

$gh_token = $github_token;

function p($content) {
	echo $content."\n";
}

function curl_get_contents($url)
{
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_USERAGENT,'script: pull-pr');
	curl_setopt($ch, CURLOPT_USERPWD, 'jackalyst' . ':' . getenv("GITHUB_OAUTH_TOKEN"));

	$result = curl_exec($ch);
	curl_close($ch);

	return $result;
}

function get_commits_from_pr($commit_api) {
	$commits = json_decode(curl_get_contents($commit_api));	

	echo "\n";
	foreach($commits as $key=>$commit) {
		?>
- [[<?php echo substr($commit->sha, -5) ?>](<?php echo $commit->html_url ?>)] <?php echo $commit->commit->message ?>
		<?php
        echo "\n";
	}
}

function getrepoprs($repo) {
	global $start_date, $end_date;
	// echo $end_date;

	// Get list of PR's
	$pr_content = curl_get_contents("https://api.github.com/repos/$repo/pulls?state=closed");
	$prs=json_decode($pr_content);

	echo "\n### $repo";

	// print_r($prs);

	foreach ($prs as $key => $pr) {
		// echo "\n $pr->title";

		if((strtotime($pr->merged_at) > strtotime($start_date)) && (strtotime($pr->merged_at) < strtotime($end_date))) {
            echo "\n\n"
			?>
**[<?php echo $pr->title ?>](<?php echo $pr->html_url ?>)**
			<?php
			get_commits_from_pr($pr->commits_url);
		}
	}
}

# TheQRL
getrepoprs("theQRL/api.theqrl.org");
getrepoprs("theQRL/block-explorer");
getrepoprs("theQRL/documentation");
getrepoprs("theQRL/electrify-qrl");
getrepoprs("theQRL/explorer-helpers");
getrepoprs("theQRL/grpc-gateway");
getrepoprs("theQRL/go-bitfield");
getrepoprs("theQRL/go-libp2p-qrl");
getrepoprs("theQRL/go-qrllib");
getrepoprs("theQRL/go-zond");
getrepoprs("theQRL/go-zond-wallet-encryptor-keystore");
getrepoprs("theQRL/go-proto-sha256");
getrepoprs("theQRL/integration_tests");
getrepoprs("theQRL/js-api-bridge");
getrepoprs("theQRL/ledger-qrl-js");
getrepoprs("theQRL/mobile-wallet");
getrepoprs("theQRL/nft-providers");
getrepoprs("theQRL/node-helpers");
getrepoprs("theQRL/offline-wallet-generator");
getrepoprs("theQRL/py-cryptonight");
getrepoprs("theQRL/QRL");
getrepoprs("theQRL/qips");
getrepoprs("theQRL/qrllib");
getrepoprs("theQRL/qrl-cli");
getrepoprs("theQRL/qrl-docker");
getrepoprs("theQRL/qrl-proto-sha256");
getrepoprs("theQRL/qrl-wallet");
getrepoprs("theQRL/qrllib");
getrepoprs("theQRL/qrllib-browserify");
getrepoprs("theQRL/qrl-rich-list-indexer");
getrepoprs("theQRL/qrl-provider");
getrepoprs("theQRL/qrysm");
getrepoprs("theQRL/qryptonight");
getrepoprs("theQRL/qrandomx");
getrepoprs("theQRL/qrypto.js");
getrepoprs("theQRL/security");
getrepoprs("theQRL/theqrl.org");
getrepoprs("theQRL/validate-qrl-address");
getrepoprs("theQRL/wallet-helpers");
getrepoprs("theQRL/wallet.js");
getrepoprs("theQRL/web3");
getrepoprs("theQRL/web3.js");
getrepoprs("theQRL/zond");
getrepoprs("theQRL/zond-contract-example");
getrepoprs("theQRL/zond-documentation");
?>