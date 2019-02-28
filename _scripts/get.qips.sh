#!/bin/bash

echo "Removing current QIPS"
rm -rf _qips/

echo "Cloning repo and extracting qips through the header 'QIP: ' - sure hope this doesn't change."
mkdir _qips
git clone https://github.com/theQRL/qips/
grep -r 'QIP: ' qips/ | cut -d: -f1 | cat -n | while read n f; do 
	if [[ $f != *"TEMPLATE"* ]]; then
		cp "$f" `printf "_qips/%03d.md" $n`; 
	fi
done
rm -rf qips/

echo "Composing header into frontmatter"

echo "- changing frontmatter capitalization to lowercase"
find _qips -name '*.md' -exec sed -i 's/[\t\s]*[a-zA-Z-]*:/\L&/g' {} \;

IFS=$'\n'
for i in $(find _qips -name '*.md' ); 
do
	echo "- adding frontmatter '---' to $i"
	header=$(cat $i | grep -P '^([\t\s]+[a-zA-Z-]+:)');
	slug=$(cat $i | grep "title:" | sed -e 's/title/slug/g');
	# slug to lowercase
	commentsuri=$(cat $i | grep 'comments-uri' | grep -Eo '(http|https)://.*')
	comments=$(curl -s $commentsuri | grep -A 1 'conversation_tab_counter' | grep -P '[0-9]' | awk '{$1=$1;print}');
	comments="comments-count: $comments";
	body=$(cat $i | grep -vP '^([\t\s]+[a-zA-Z-]+:)');
	echo -e "---\n$header\n$comments\n$slug\n---\n$body" > $i;
done
unset IFS

# Note this should be done explicitely to the header!
echo "- Removing front tab and spaces"
find _qips -name '*.md' -exec sed -i 's/^\t*//g' {} \;
find _qips -name '*.md' -exec sed -i 's/^\s*//g' {} \;