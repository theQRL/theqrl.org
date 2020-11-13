---
layout: blog-post
slug: last-week-s-in-qrl-december-4th-17th-2018
date: 2018-12-10T21:45:26.254Z
author: "Jack Matier"
title: "Last week(s) in QRL -  December 4th — 17th, 2018"
subtitle: "Last Week(s) in QRL: December 4th — 17th, 2018"
featured_image: 1klBbafDPyPTSXB3pJiULfw.png
images:
  - 1Kv7G47q3znR9TZ4zemMHVQ.jpeg
  - 1klBbafDPyPTSXB3pJiULfw.png
  - 1awrKfdtjTwDU-KZ6DWYK9A.png
  - 16f9_bfwjzuJMR4kN1C7j8g.png
  - 1dhlNj5gdbpQ9vexXD-49hg.jpeg
  - 1DvAHSmqbjjes08TtT8C3Uw.png
  - 1B3AdBDdKJ3_Y1PGAKYCYjA.png
categories:
  - technical 
features:
  - ledger
---

## Ledger Nano S

{{< image "./images/1Kv7G47q3znR9TZ4zemMHVQ.jpeg" >}}

We are happy to report that the Ledger app is complete! We just need the web integration to be finished, and testing to commence, before we call ledger-qrl-js v1.0.0 ready for a full release. We will probably have a pre-release version of the app up on our GitHub before New Year’s Eve, for those who cannot wait and want to see our Ledger app in action ASAP.

We know how long many of you in the community have been waiting for this; it is close to being completely ready!

## Mobile app

{{< image "./images/1klBbafDPyPTSXB3pJiULfw.png" >}}

Mobile app is passing internal testing and should be going out to a hand-picked cohort of community members to do the first round of testing soon for iOS and Android users.

Features include:

* Transferring a wallet from the desktop to mobile through QR hexseed scanning
* PIN security
* Multiple wallets
* Sending to QR Code address
* Receiving with a QR Code address
* Seeing a history of transactions

## API & documentation

{{< image "./images/1awrKfdtjTwDU-KZ6DWYK9A.png" >}}*[https://api.theqrl.org/#qrl-api](https://api.theqrl.org/#qrl-api)*

New updates to `gettotalbalance` as a request from upbit is in place. Go-client documentation is in process to help facilitate community testing and those to want to run our [go-lang QRL node](https://github.com/theQRL/go-qrl).

## Cryptoblockcon

{{< image "./images/16f9_bfwjzuJMR4kN1C7j8g.png" >}}

Jack Matier and Adam Koltun were at [CryptoBlockCon](https://www.cryptoblockcon.com/) in Las Vegas, Nevada this week on the 11th and 12th. You can read more about it on the [blog penned by Adam Koltun](/blog/crypto-block-conference-this-week). But to briefly review; this was the 11th conference attended by QRL this year. QRL name recognition much higher than at start of 2018. Presentation was given on the 2nd day of the conference, video can be found [here](https://youtu.be/G7K5REE152w). CBC was our last conference of 2018.

## QIP-1 (to CNv1 or CNv2, that is the question)

{{< image "./images/1dhlNj5gdbpQ9vexXD-49hg.jpeg" >}}

Consensus of the team is that migration at this point would not be in the best interests of the project at this time. Reasons cited include:

* It would take time out of progress on other aspects of QRL, including PoS/Consensus upgrade.

* Every consensus upgrade involves backwards portability, meaning support for the life of the project.

* Whether or not ASICS help or hinder the security of a network is still a hot topic with no clear consensus in either direction, as far as security is concerned.

* There’s no firm evidence that there are ASICS in the wild, many of the claims surrounding it are conjecture.

As this was a discussion technical in nature, we didn’t open the vote up to the public,** QIP-1 has therefore been closed**, though not without some amazing (and respectful) discussion on both sides! You can read the discourse [here](https://github.com/theQRL/qips/pull/2). As with all technical matters, should to context meaningfully change we would be open to resuming discussion with the new context in mind.

## Nominations

{{< image "./images/1DvAHSmqbjjes08TtT8C3Uw.png" >}}

Nominations will be moved from weekly to monthly events with an increased award from 250 Quanta to 750 Quanta. This will be started immediately with the first award being announced by the end of January, 2019.

However, to wrap up the last two weeks of our Community Nominations we have discord users qrl_dude and Cryptographic for their contributions, insight, and thoughts.

## Explorer dark mode

{{< image "./images/1B3AdBDdKJ3_Y1PGAKYCYjA.png" >}}

JP Lomas has been at work putting together a dark mode to the QRL Explorer, which is currently being implemented and test in devnet, let us know what you think. To note, dark mode would be a *new* mode and not something available by toggling.

In addition to this, there will be a select few json methods available in the future available via REST (and curl) requests for easily parsing of data.

## **Bittrex**

In case it was missed, Bittrex has finished it’s migration of QRL ERC20 tokens to QRL’s mainnet Quanta. This establishes proper liquidity for the QRL ecosystem.