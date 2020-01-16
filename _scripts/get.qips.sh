#!/bin/bash

echo "WAIT! This only works if all QIPS are merged to the main branch."
echo "- If you manually added a QIP, this WILL remove current QIPS and lead to broken links outside of theqrl.org ecosystem"
echo "- If they've been merged after, this could lead to a different url structure it's STRONGLY recommended double check the url structure first"

read -p "Are you sure you want to proceed? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

echo "Removing current QIPS"
rm -rf _qips/

echo "Cloning repo and extracting qips through the header 'QIP: ' - sure hope this doesn't change."
mkdir _qips
git clone https://github.com/theQRL/qips/

grep -lr 'QIP: ' qips/ | sort -r | cat -n | while read n f; do 
	if [[ $f != *"TEMPLATE"* ]]; then
		# Get QIP number
		qipid=$(cat "$f" | grep 'QIP:' | grep -Eo '[0-9]+')
		## trim all 0's
		qipid=$(echo $qipid | sed 's/^0*//')
		echo $qipid
		qipid=$(printf "%03d" "$qipid")

		# If there's no QIP Id...
		if [[ $qipid == "000" ]]; then
			qipid=$(cat "$f" | grep -i 'title:' | sed 's/.*://' | sed 's/^ //' | sed 's/\s/\_/g' | sed 's/.*/\L&/g')
		fi

		cp "$f" `printf "_qips/%s.md" $qipid`; 
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

fi