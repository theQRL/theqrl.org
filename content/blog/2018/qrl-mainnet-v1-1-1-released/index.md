---
layout: blog-post
slug: qrl-mainnet-v1-1-1-released
date: 2018-08-10T14:45:12.806Z
author: "Jack Matier"
title: "QRL Mainnet v1.1.1 Released"
subtitle: "TLDR — QRL mainnet v1.1.1 is released and brings a wallet API, wallet daemon, greater stability, and other improvements."
featured_image: 1jFvqV54R7sQhhQfWBoxdig.png
images:
  - 1jFvqV54R7sQhhQfWBoxdig.png
categories:
  - technical
---

*TLDR — QRL mainnet v1.1.1 is released and brings a wallet API, wallet daemon, greater stability, and other improvements.*

At roughly 65,000 blocks after genesis, [QRL mainnet v1.1.1](https://github.com/theQRL/QRL/releases/tag/v1.1.1) was born, and with it comes back end non-breaking improvements. If you’re running a node you can update today:

```
pip3 install qrl --upgrade
```


### Improvements are

* Added support for Wallet API & Wallet Daemon
* Fix for state validation of stale transaction in mempool ( [#1538](https://github.com/theQRL/QRL/issues/1538) )
* Mining Address are displayed properly during node start
* CLI token_list now shows token name & symbol
* Added more unit tests
* Update cryptography module to 2.3
* Removed wallet.json from repo
* Removed pycrypto module from test_requirements.txt

### Wallet API & Daemon

One of the new features is the Wallet Daemon & Wallet API which allows for extensive manipulation of [wallet functions](https://api.theqrl.org/#wallet-api) through our [gRPC API](https://api.theqrl.org/#qrl-api), an important feature for exchange integration.

After the update, you can run the wallet daemon (there is no response when you do so)

```
$ qrl_walletd
```


From there you can go over and install the [walletd-rest-proxy](https://github.com/theQRL/walletd-rest-proxy) on github. Be sure to use golang &gt;1.8.

```
`go get github.com/theQRL/walletd-rest-proxy
cd $GOPATH/src/github.com/theQRL/walletd-rest-proxy
go build
./walletd-rest-proxy -serverIPPort 127.0.0.1:5359 -walletServiceEndpoint 127.0.0.1:19010`
```


This opens access to our [wallet API](https://api.theqrl.org/#wallet-api) with *a lot* of things a person can do.

{{< image "./images/1jFvqV54R7sQhhQfWBoxdig.png" >}}

### Open Source Contribution Guide (decentralized improvements)

We would welcome your help and support as we move to further decentralize this project as one of our longstanding goals.

For that we are preparing a contribution guide which will be released shortly. While you’re waiting, you can check out some of our [issues with the label “Help Wanted”](http://These 'help wanted' labels are for the public? https://github.com/theQRL/QRL/issues?q=is%3Aissue+is%3Aopen+label%3A%22Help+Wanted%22), read our [Documentation](https://docs.theqrl.org), and ask questions in our [Discord](https://discord.gg/RX5SWPN) or [Reddit](https://www.reddit.com/r/QRL/) community to become more familiar with everything.