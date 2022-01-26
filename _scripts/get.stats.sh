#!/bin/bash
if [ ! -f "config.toml" ]; then
	echo "ERROR: Make sure you call this from the root hugo directory"
	exit 1;
fi

wget -O data/emission.json https://explorer.theqrl.org/api/emission
wget -O data/reward.json https://explorer.theqrl.org/api/reward
wget -O static/_data/networktx.json https://analytics.quantascan.io/api/network-transactions
wget -O static/_data/numberwallets.json https://analytics.quantascan.io/api/network-transactions
wget -O data/miningstats.json https://explorer.theqrl.org/api/miningstats
wget -O data/zeus_getstats.json https://zeus-proxy.automated.theqrl.org/grpc/mainnet/GetStats