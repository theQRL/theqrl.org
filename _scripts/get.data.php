#!/usr/bin/php -f
<?php
function getjson($file) {
    return json_decode(file_get_contents($file));
    sleep(1);
}

$stats = [];


// Run through network tx...
$networktx = getjson("https://analytics.quantascan.io/api/network-transactions");

$totaltr = 0;
$totaltx = 0;

foreach ($networktx->chart_data_point_list_transfer as $networktx_data) {
    $totaltx += $networktx_data->total_number_of_transactions;
    $totaltr += $networktx_data->total_amount_transfered;
}

$stats["volume"] = $totaltr * 10 ** -9;
$stats["transactions"] = $totaltx;

$getstats = getjson("https://zeus-proxy.automated.theqrl.org/grpc/mainnet/GetStats");

$stats["nodes"] = $getstats->node_info->num_known_peers;
$stats["block_height"] = $getstats->node_info->block_height;
$stats["coins_emitted"] = $getstats->coins_emitted * 10 ** -9;
$stats["block_reward"] = $getstats->block_last_reward * 10 ** -9;

$miningstats = getjson("https://explorer.theqrl.org/api/miningstats");

$stats["hashrate"] = $miningstats->hashrate / 60;

// To collect
$stats["repositories"] = 72;
$stats["contributors"] = 57;
$stats["commits"] = 12853;

$stats["miners"] = 312;
$stats["wallets"] = 13436;
$stats["pools"] = 12;
$stats["repos"] = 85;


yaml_emit_file("data/stats.yml", $stats);


// wget -O data/miningstats.json https://explorer.theqrl.org/api/miningstats
