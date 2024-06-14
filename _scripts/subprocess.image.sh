#!/bin/bash

# Simply process input files of various ratios and sizes and output to various web optimized files
# 
# Hugo can do a lot of this as well, but this increases the overal process time for full site builds,
# and doesn't have the same amount of control.
# 
# usage: pconvert [input_folder] [output_folder]
# example pconvert in/ out/
# specific hugo example (run from site root):
# ./_scripts/process.image.sh assets/static/quantum_news/$(date +%Y)/source/ assets/static/quantum_news/$(date +%Y)/output/

# Todo: 
# - Integrate face detection

# User configurable
width=1200
quality=85
format='webp'

# Check for convert and basename
if ! command -v basename &> /dev/null
then
    echo "basename could not be found"
    exit
fi

if ! command -v convert &> /dev/null
then
    echo "convert could not be found"
    exit
fi

# Assign human understandable variable names
in=$1
out=$2

# Check to make sure both in and out are directories
if [ ! -d $in ]; then
    echo "Input needs to be a directory."
    exit 1
fi 

if [ ! -d $out ]; then
    echo "Output needs to be a directory."
    exit 1
fi

# Check to make sure both are appended with a forward slash. If not, append forward slash
if [[ "$in" != *\/ ]]; then
    in=$in"/"
fi 

if [[ "$out" != *\/ ]]; then
    out=$out"/"
fi

files=$in"*"

# mkdir -p "$out"source

# Find files modified in the last day to edit
find $files -type f -mtime -2 -print0 | while read -d $'\0' f
do
    # dir/filename.ext -> filename
    basename=$(basename "$f" | sed 's/\(.*\)\..*/\1/')

    # dir/filename.ext -> filename.ext
    filename=$(basename "$f")

    echo "Converting $f to $format with $basename as the base filename"
    magick $f -resize "$width"x -gravity center -crop 16:9 -quality $quality "$out""$basename"-full."$format"
    magick $f -resize "$width"x -gravity center -crop 20:5 -quality $quality "$out""$basename"-thin."$format"
    magick $f -resize "$width"x -gravity center -crop 1:1 -quality $quality "$out""$basename"-square."$format"
    
    # cp $f "$out"source/"$filename"
done