---
layout: blog-post
slug: qrl-mainnet-v2-0-1-is-released
date: 2020-03-30T16:14:53.207Z
author: "Jack Matier"
title: "QRL Mainnet v2.0.1 is Released"
summary: "Bug fixes for API GetVoteStats & GetOTS"
featured_image: 1sxQvfwrOPXPksMLZqbtJsA.png
images:
  - 1sxQvfwrOPXPksMLZqbtJsA.png
categories:
  - technical
---

Release link: [https://github.com/theQRL/QRL/releases/tag/v2.0.1](https://github.com/theQRL/QRL/releases/tag/v2.0.1)

* **For those already on the version 2.0 branch** (including exchanges & mining pools), there’s no need to update
* **If you’re still a QRL mainnet node version 1**, this is a good opportunity to remind everyone to update. 
You can find instructions in our previous blog, here: [/blog/the-qrl-hardfork-blockheight-has-been-set-bromine-code-is-released](/blog/the-qrl-hardfork-blockheight-has-been-set-bromine-code-is-released)
Keep in mind, you’ll need to set aside around 8 hours to update from version 1 to 2 so it’s pertinent that you update to version 2 *before* the hardfork in 7 days (as of this blog post)

## Updating your node

To update your python node, first stop your node with ctrl+c and then issue the update:

```bash
$ pip3 install -U qrl
```


Don’t forget to start your node again!

```bash
$ start_qrl
```
