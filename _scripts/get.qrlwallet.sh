#!/bin/bash
filename="assets/qrlwallet.json"

curl -o assets/qrlwallet.json "https://api.github.com/repos/theQRL/qrl-wallet/releases"
filesize_before=$(ls -lah $filename | awk -F " " {'print $5'})

# cat "assets/qrlwallet.json" | jq 'map(del(.. | .author?, .uploader?))' | tee "assets/qrlwallet.json"
mapfile -t downloads < <(cat $filename | grep "browser_download_url" | sed 's/\"browser_download_url\"://' | sed 's/"//g' | head -n6 )
downloads_json=$(printf '%s\n' ${downloads[@]} | jq -R . | jq -s .)
echo $downloads_json > $filename

echo "Downloaded with file size:"
echo $filesize_before

echo "Modified filesize:"
ls -lah $filename | awk -F " " {'print $5'}
