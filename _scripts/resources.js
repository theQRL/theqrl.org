#!/bin/bash

# Get medium blog
echo "Grabbing blog and putting into assets/medium.rss"
curl -o assets/medium.rss -s "https://medium.com/feed/the-quantum-resistant-ledger/"


echo "Grabbing contributor's and putting into _data/contributors.json"
# Get contributor URLS
repos=$(curl -s https://api.github.com/orgs/theqrl/repos | grep contributors | grep -oP "\Khttps://[a-zA-Z\/\-\.]+" )

contributors="["

# Concatenate
contributors+=$(echo $repos | while read x; do 
	curl -s $x | grep -vE '^(\]|\[)';
done)

# Remove last character
contributors="${contributors:0:-1}"
contributors+="]"

echo "$contributors" > "_data/contributors.json"