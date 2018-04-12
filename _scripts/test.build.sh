#!/bin/bash

# Because `bundle exec jekyll serve` isn't the same as `bundle exec jekyll build` - apparently.
bundle exec jekyll build --watch & php -S localhost:4000 -t _site/ && fg