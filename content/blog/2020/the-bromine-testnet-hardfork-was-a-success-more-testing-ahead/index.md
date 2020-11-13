---
layout: blog-post
slug: the-bromine-testnet-hardfork-was-a-success-more-testing-ahead
date: 2020-03-09T17:35:54.476Z
author: "Jack Matier"
title: "The Bromine testnet hardfork was a success! — More testing ahead"
subtitle: "Only you can help prevent bugs on mainnet… by testing on testnet!"
images:
  - 1_eq8iUPNgLv1Iof9dhAuEQ.jpeg
  - 1ke98j6kA_OAk0ocZzHs1Jw.jpeg
  - 1KWwTBG-tvrBOVtVz8MwATA.png
  - 1Y1XmGDGIrhDdlovwZ8daWQ.jpeg
categories:
  - technical
forks:
  - bromine
---

### Only you can help prevent bugs on mainnet… by testing on testnet!

**The Bromine testnet hardfork at testnet blockheight 10,500 (March 7th) has been a resounding success! **Which means after further testing, we’ll be happy to announce the *mainnet hardfork* *date*. This will be announced after a period of time in which we determine everything to be ***secure & well-tested — so stay tuned.***

Being well-tested t is something **you can help with** to move things further along. **We’re looking for people to roll up their sleeves and test out the new features on testnet.**

Break things (on testnet) and let us know by creating an issue on [github](https://github.com/theQRL/). We would love to know when things work too so our ego’s aren’t completely destroyed (and more importantly, so we have an idea of when something has been tested).

{{< image "./images/1_eq8iUPNgLv1Iof9dhAuEQ.jpeg" >}}*Testing the QRL*

## Upcoming features found only in testnet (and some tests we’re doing and looking for)

External testing is an important step to ensuring high quality in product release cycles, as it allows a product to undergo more realistic real world scenarios that its creators might not have thought of.

The more our community helps us test, the more confident we can be about a release.

### 1. RandomX

{{< image "./images/1ke98j6kA_OAk0ocZzHs1Jw.jpeg" >}}

**Things you can do**

* [novice] Mine to a *testnet* pool with mining software such as xmrig.

* [intermediate] Mine as a node

* [advanced] Run your own pool

**Where/how to do it**

* To mine to a pool, look at [xmrig.com](https://xmrig.com/docs). You can use our *testnet* pool at [http://136.244.104.146/](http://136.244.104.146/)

* For mining as a node, follow our guide on setting up a node and enabling it for mining: [https://docs.theqrl.org/node/testnetNode/](https://docs.theqrl.org/node/testnetNode/#mining-testnet)

* To run your own pool, take a look at the documentation (will be updated in the following days for RandomX): [https://docs.theqrl.org/mining/pool/](https://docs.theqrl.org/mining/pool/) — in the meantime, you can look at the Kaushal’s github repository: [https://github.com/cyyber/cryptonote-nodejs-pool/](https://github.com/cyyber/cryptonote-nodejs-pool/)

### 2. Multisignature Transactions

{{< image "./images/1KWwTBG-tvrBOVtVz8MwATA.png" >}}

**Things you can do**

* [intermediate] Create multisignature address

* [novice] Send funds to a multisignature address

* [novice] Create a multisignature spend proposal transaction

* [intermediate] Let a multisignature spend expire without reaching vote threshold

* [expert] Try to spend more funds than is in a multisignature address

**Where/how you to do it**

* Use the testnet wallet: [https://testnet-wallet.theqrl.org/](https://testnet-wallet.theqrl.org/)

* Create more than one wallet on testnet for testing (multisignature requres 2 or more parties.

* In tools, you’ll find *multisignature* transactions.

* From there go through the process of creating a multisig address, sending Quanta to it, proposing to spend, and vote

* For the last part, think of creative ways to make it send more Quanta than it has.

### 3. Ephemeral Messaging

{{< image "./images/1Y1XmGDGIrhDdlovwZ8daWQ.jpeg" >}}

**Things you can do**

* [expert] Create latticeTX

**Where/how you can do it**

* Go to qrl-cli and use it to create a latticeTX

* Take the steps from Adem’s gist for more guidance:
[https://gist.github.com/ademcan/95cf4fdae6539c5cae08ac1f7a02bc5e](https://gist.github.com/ademcan/95cf4fdae6539c5cae08ac1f7a02bc5e) — all of which are expert-level really

## Other things to test

* [expert] Send a transaction with a message

* [expert] Send a message via message transaction with optional field of address_to

* [Genius] Find a bug and report it on GitHub.

## What to do if you get stuck?

If you think it’s a *bug *or *issue*, report it to its specific repository at https://github.com/theQRL/.

If you don’t have github or don’t want one you can always head over to our [discord](https://discord.gg/jBT6BEp) or [reddit](https://reddit.com/r/qrl) community and post there.

Finally, if you’re scratching your head trying to figure something out, give us a shout as well. Some bugs might be just in the way we convey something, and we’d like to be as clear as possible.