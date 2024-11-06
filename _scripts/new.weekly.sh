echo "Current directory: $(pwd)"

# Check whether we're calling this from the root directory
if [ ! -f "config.toml" ]; then
	echo "ERROR: Make sure you call this from the root hugo directory"
	exit 1;
fi

year=$(date +%Y)

if [[ -z ${1} ]]; then
	lastweek=$(date +%V)
	echo "WARNING: Week Number is not set. Setting week $lastweek of $year"
else 
	lastweek=$1
fi

dir="content/weekly/$year/$year-W$lastweek"
file=$dir"/index.md"

mkdir -p $dir

_iso_date=$(date '+%Y-%m-%d')
_iso_date_start=$(date +%Y-%m-%d -d "14 days ago")
_date=$(date '+%Y-%B-%d')
_week=$(date +%U)

# Get week #

cat << EOF >| ${file}
---
layout: weekly-update
date: $_iso_date
author: "The QRL Core Contributors"
title: "QRL Weekly, $_date"
slug: "$_date"
---

## Weekly Development Snapshot

<!--more-->

## Quantum News

{{% qnews start="$_iso_date_start" end="$_iso_date" %}}
EOF

echo $content