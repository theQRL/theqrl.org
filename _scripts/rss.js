const parser = require('rss-parser');
const fs = require("fs")

 
parser.parseURL('https://medium.com/feed/the-quantum-resistant-ledger/', function(err, parsed) {
	console.log(parsed.feed.title);

	parsed.feed.entries.forEach(function(entry) {
		console.log(entry.title + ':' + entry.link);
	});


	fs.writeFile("../_data/rss.json", parsed.feed.title, err => {
		if (err) throw err;
		console.log('File successfully written to disk');
    }) 
})