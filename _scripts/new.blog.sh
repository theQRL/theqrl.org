#!/bin/bash

echo "Current directory: $(pwd)"

# Check whether we're calling this from the root directory
if [ ! -f "config.toml" ]; then
	echo "ERROR: Make sure you call this from the root hugo directory"
	exit 1;
fi

blogtocopy="last-month-at-qrl-march-2022"
name=$1

if [[ -z ${1} ]]; then
	echo "ERROR: Blog name is not set"
	exit 1;
fi

slug=$(echo $name | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

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
cp -r assets/content/blog/2022/"$blogtocopy"/. "$assets_dir"
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