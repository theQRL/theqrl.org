#!/bin/bash
echo "Current directory: $(pwd)"
# exit
# Todo: Rewrite in python

# Check whether we're calling this from the root directory
if [ ! -f "config.toml" ]; then
	echo "ERROR: Make sure you call this from the root hugo directory"
	exit 1;
fi

blogtocopy="last-month-at-qrl-november-2021"
name=$1

if [[ -z ${1} ]]; then
	echo "ERROR: Blog file slug is not set"
	exit 1;
fi

echo "Creating blog by copying files from reference blog: $blogtocopy -> $name"
cp --verbose -r content/blog/2021/"$blogtocopy"/. content/blog/"$(date +%Y)"/"$name"/
cp --verbose -r assets/content/blog/2021/"$blogtocopy"/. assets/content/blog/"$(date +%Y)"/"$name"/

echo "Cleaning up"
# Remove images...
find assets/content/blog/"$(date +%Y)"/"$name"/images/ -type f -delete

