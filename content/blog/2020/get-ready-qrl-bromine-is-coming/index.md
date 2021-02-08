---
layout: blog-post
slug: get-ready-qrl-bromine-is-coming
date: 2020-04-06
author: "Jack Matier"
title: "Get ready. QRL Bromine is coming"
summary: "In ~24 hours, QRL Bromine will be here. This is a brief overview and reminder of what actions you’ll want to take."
featured_image: 12HFOUkRsRLt3aIJtU5R2vg.png
images:
  - 12HFOUkRsRLt3aIJtU5R2vg.png
forks:
  - bromine
---

### In \~24 hours, QRL Bromine will be here. This is a brief overview and reminder of what actions you’ll want to take.

As of this post, QRL Bromine is going to hit ***in roughly 24 hours*** based on the current average blocktime. This blog contains a quick reminder of what actions you’ll want to (or need to) take depending on what group you find yourself in:

* [Everyone with QRL](#e82b)
* [Pool miners](#0bba)
* [Node operators](#dabe)

**Note: Even if you follow none of these procedures, remember, your funds are safe.**

## Everyone with QRL

### Update your wallet binaries

If you use either the binary desktop or mobile wallets, due to some minor API changes, you’ll need to update. Otherwise, use the online wallet. This update also allows you to take advantage of multisig addresses and transactions.

**Online**

* [https://wallet.theqrl.org/](https://wallet.theqrl.org/)

**Mobile**

* iOS: [https://apps.apple.com/us/app/qrl-wallet/id1458620542](https://apps.apple.com/us/app/qrl-wallet/id1458620542)
* Android (update 2.2.1 coming): [https://play.google.com/store/apps/details?id=com.theqrl](https://play.google.com/store/apps/details?id=com.theqrl)

**Desktop**

* Mac, Windows, Linux: [https://github.com/theQRL/qrl-wallet/releases/latest](https://github.com/theQRL/qrl-wallet/releases/latest)

## Pool Miners

### Setup xmrig with failover

There will be a transition from cryptonight to randomX, which means that you’ll want your client (in this case, xmrig) to successfully switch without downtime.

To assist with this, we setup an official pools list page with a complete working xmrig config.json configuration for each pool: [https://docs.theqrl.org/mining/pools/](https://docs.theqrl.org/mining/pools/)

## Node operators (Exchanges/pools/mining-nodes)

### Upgrade your nodes

**This can take several hours (~8) as it updates the state upon reinitializing the node, so needs to be done with time to spare *before* the hardfork.**

Take your node offline (ctrl+c) and update it:

```
pip3 install -U qrl
```

Then reinitialize your node

```
start_qrl
```


Nodes running QRL Node version lower than 2.0.0 will be automatically disconnected by the peers running QRL v2.0.0 or higher once the hardfork triggers.