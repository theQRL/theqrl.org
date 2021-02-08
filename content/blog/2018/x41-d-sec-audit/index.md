---
layout: blog-post
slug: x41-d-sec-audit
date: 2018-08-27T15:36:44.370Z
author: "Jack Matier"
title: "x41 d-sec audit"
summary: "Project Update"
images:
  - 1EhOqRFAO3PkLna9YzujHWg.png
  - 1BhOu6u5wiJlvbH0cAEzHNQ.gif
  - 1UVxlRS2HOdrllPDYb0OwnQ.png
  - 1SpqBxGHiRkKsoCBRNoCfIw.png
categories:
  - technical
draft: true
---

### Project Update

*TLDR — x41 D-Sec audit has commenced, mobile wallet updates, wallet API improvements, OTC market opens, tipbots, and basic concepts videos*

Our team is global, with members currently residing in The United States of America, Canada, United Kingdom, Australia, and India. There’s usually one person alive *and* awake every hour of the day, working on improving every aspect of this project.

{{< image "./images/1EhOqRFAO3PkLna9YzujHWg.png" >}}

### x41 D-Sec — Our second Auditor after Red4Sec

A foundational part of QRL is a sustained commitment to enterprise grade security and bringing on third party auditors.

Keeping in-line with this commitment, starting last *Monday*, the [x41 D-Sec](https://www.x41-dsec.de/) team has begun an audit in earnest and is currently boring into our QRL code. This audit is shorter than our last at 2–3 weeks and covers the cryptography portion (ie XMSS) of our codebase, including Ledger code, and its implementation.

To give an idea of x41’s capabilities, some recent vulnerabilities discovered by x41 D-Sec involve [smartcards](https://www.x41-dsec.de/lab/blog/smartcards/), [PSFTPd](https://www.x41-dsec.de/lab/advisories/x41-2017-006-psftpd/), [Kernal Fuzzing in Userspace,](https://www.x41-dsec.de/lab/blog/kernel_userspace/) and [more](https://www.x41-dsec.de/lab/advisories/).

{{< image "./images/1BhOu6u5wiJlvbH0cAEzHNQ.gif" >}}

### Mobile Wallet Views

Recently we spoke about the core backend of the mobile wallet being complete and it’s just working on the views to ensure a slick experience.

Thus far the main view and backup view is complete, with only a few more key views remaining.

As a reminder, there will be both iOS and Android versions.

Like everything at QRL, this is under an MIT license and can be found on [GitHub](https://github.com/theQRL/mobile-wallet).

### Wallet Daemon API

Further improvements have been made to our Wallet Daemon API which automates things like Slave Transactions so that exchanges can more easily integrate QRL.

### OTC Market on Discord Opens

Until our mainnet coin is listed on an exchange, we have opened an OTC (Over the Counter) trading channel with the kind assistance of our Butler.

It should be emphasized that doing *any* OTC trading is at your own risk, however, much of this can be mitigated by selecting a trustworthy escrow (third party to hold both parties funds and release them upon agreement).

If you would like to take part in trading your Quanta, you can [join](https://discord.gg/vqCwVqH) and do so today.

{{< image "./images/1UVxlRS2HOdrllPDYb0OwnQ.png" >}}

### More Improvements

**Tipbots and Faucets**

Work is being initiated on our tipbot and faucet. It’s still in the very early stages so if you have seen a faucet or tipbot that you like, let us know on [Reddit](https://www.reddit.com/r/qrl) or [Discord](https://discord.gg/jBT6BEp).

{{< image "./images/1SpqBxGHiRkKsoCBRNoCfIw.png" >}}

**Basic Concepts Videos**

Basics concepts videos would explain certain aspects of QRL to everyday folks. We have established a few that people would be interested in.

* Sending coins to QRL wallet

* Making a wallet

* CLI wallet use: sending / balance / etc

* Explorer explanation

* OTS Keys

* Token use

What would you like to see first? Have a different suggestion for a Basic Concepts video, let us know on [Reddit](https://www.reddit.com/r/qrl) or [Discord](https://discord.gg/jBT6BEp).