#!/bin/bash
PORT=4000

re='^[0-9]+$'
if [[ -n "$1" ]]; then
	if ! [[ "$1" =~ $re ]] ; then
	   echo "Port needs to be a number" >&2; exit 1
	fi

	PORT="$1"
fi

curl -o assets/medium.rss "https://medium.com/feed/the-quantum-resistant-ledger/"

# Because `bundle exec jekyll serve` isn't the same as `bundle exec jekyll build` - apparently.
bundle exec jekyll build --watch & php -S localhost:"$PORT" -t _site/ && fg