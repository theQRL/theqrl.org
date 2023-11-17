#!/bin/bash

# Script uses environment variables
#
# Set HACKMD_BEARER_TOKEN in ~/.bashrc
# Set REMOTE_IP in ~/.bashrc as well
echo "Current directory: $(pwd)"

# Check whether we're calling this from the root directory
if [ ! -f "config.toml" ]; then
	echo "ERROR: Make sure you call this from the root hugo directory"
	exit 1;
fi

blogtocopy="qrl-monthly-feat-the-history-of-cryptography-may-2023"
name=$1

if [[ -z ${1} ]]; then
	echo "ERROR: Blog name is not set"
	exit 1;
fi

slug=$(echo $name | tr '[:upper:]' '[:lower:]' | tr -cd '[:alnum:] _' | tr -s ' ' | tr ' ' '-')

# File locations
assets_dir=assets/content/blog/"$(date +%Y)"/"$slug"/
content_dir=content/blog/"$(date +%Y)"/"$slug"/
post_file="$content_dir"index.md

# Frontmatter...
_layout="blog-post"
_slug="$slug"
_date=$(date +'%Y-%m-%d')
_title="$name"
_author="Jack Matier"
_summary=""

echo "... copying assets from: $blogtocopy -> $name"
cp -r assets/content/blog/2023/"$blogtocopy"/. "$assets_dir"
sleep 1

echo "... removing images except for header.png"
find "$assets_dir"/images/ -type f -not -name "header.png" -delete
sleep 1

echo "... creating content directory"
mkdir -p $content_dir
sleep 1

echo "... writing to file:"
echo "- date: $_date"
echo "- title: $_title"
echo "- slug: $_slug"


content=$(cat << EOF
---
layout: $_layout
slug: $_slug
date: $_date
author: "$_author"
title: "$_title"
summary: "$_summary"
featured_image: header.png
categories:
  - technical
features:
  - nfts
toc: true
---

###### tags: \`blog\` \`staging\`

Testing $_title
EOF
)

contentdata=$(echo -n "$content" | sed -e '$ ! s/$/\\n/' | sed 's/"/\\"/g' | tr -d \\n)

gencontent() 
{
cat <<EOF
{
	"content": "$contentdata",
	"commentPermission": "everyone",
	"readPermission": "guest",
	"writePermission": "guest"
}
EOF
}

cat << EOF >| ${post_file}
---
layout: $_layout
slug: $_slug
date: $_date
author: "$_author"
title: "$_title"
summary: "$_summary"
featured_image: header.png
categories:
  - technical
features:
  - nfts
toc: true
---
EOF




postdata=$(curl -s -H 'Authorization: Bearer '$HACKMD_BEARER_TOKEN'' -H 'Content-Type: application/json' --location 'https://api.hackmd.io/v1/notes' -d "$(gencontent)")

resultid=$(echo "$postdata" | jq -r .id)

echo "$(cat <<EOF
Title: $_title
Blog: http://$REMOTE_IP:1313/blog/$_slug
Edit: https://hackmd.io/$resultid

# Add to blog.csv
echo "$resultid,$_slug,TRUE" >> blog.csv
EOF
)"
