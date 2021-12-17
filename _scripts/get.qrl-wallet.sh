#!/bin/bash

# Check whether we're calling this from the root directory
if [ ! -f "config.toml" ]; then
	echo "ERROR: Make sure you call this from the root hugo directory"
	exit 1;
fi

# Check for jq and yq

filename="static/_data/downloads.json"

curl -s "https://api.github.com/repos/theQRL/qrl-wallet/releases" | jq .[0] > "$filename"
filesize_before=$(ls -lah $filename | awk -F " " {'print $5'})

# cat "assets/qrlwallet.json" | jq 'map(del(.. | .author?, .uploader?))' | tee "assets/qrlwallet.json"
mapfile -t downloads < <(cat $filename | grep "browser_download_url" | sed 's/\"browser_download_url\"://' | sed 's/"//g' | head -n6 )
downloads_json=$(printf '%s\n' ${downloads[@]} | jq -R . | jq -s .)

echo "Saved yml and json files"
echo "$downloads_json" > $filename

cat $filename | yq e -P - > "data/downloads.yml"


echo "Downloaded with file size:"
echo $filesize_before

echo "Modified filesize:"
ls -lah $filename | awk -F " " {'print $5'}