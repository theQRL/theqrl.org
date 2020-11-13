---
layout: blog-post
slug: last-week-in-qrl-may-21st-27th
date: 2019-05-27T17:49:57.520Z
author: "Jack Matier"
title: "Last Week in QRL -  May 21st — 27th"
featured_image: 1YC7mOXZuW6t1w05bsD8tWA.png
images:
  - 1YC7mOXZuW6t1w05bsD8tWA.png
  - 1RaBpMhJiT-dBCNLLO9oOiQ.png
  - 1ulnXyfVdRyMPmNOIlLmGrQ.png
categories: 
  - technical 
---

This week, we will be covering our mobile wallet release and some of the amazing feedback that we’ve had and what to expect for our version 2 release.

Also covered will be Ledger U2F timeout issue, its potential solutions (linked to), and the current workaround.

## Mobile wallet released

{{< image "./images/1RaBpMhJiT-dBCNLLO9oOiQ.png" >}}

Last week our mobile wallet was released to the world! You can read more about it in our blog [The QRL Mobile Wallet is Officially Launched!](/blog/the-qrl-mobile-wallet-is-officially-launched) This completes our ecosystem with:

* [Hardware wallet](https://support.ledger.com/hc/en-us/articles/360019184453) (Ledger Nano)
* [Desktop Wallets](https://github.com/theQRL/qrl-wallet/releases) (Windows, Mac, Linux)
* [Web wallet](https://wallet.theqrl.org)
* [Offline wallet](https://github.com/theQRL/offline-wallet-generator/releases)
* Mobile wallets ([iOS](https://itunes.apple.com/us/app/qrl-wallet/id1458620542?ls=1&mt=8), [Android](https://play.google.com/store/apps/details?id=com.theqrl))

Since then, there’s been a outpouring of amazing *and *constructive feedback on the mobile wallet. We can’t emphasize how much *constructive* feedback means to us, and how important it is to this project as a whole, if we are to improve.

JP and Adem have been busy working out what issues will be tackled for the next v2 or v3+ release, which can be seen on our [milestones page](https://github.com/theQRL/mobile-wallet/milestones). Some things *most likely* slated for our next released are(all subject to change):

* [Ask for PIN when removing wallet](https://github.com/theQRL/mobile-wallet/issues/63)
* [Ask pin at every access](https://github.com/theQRL/mobile-wallet/issues/61)
* [Allow adding a tag to the wallets](https://github.com/theQRL/mobile-wallet/issues/57)
* [Feature request: Add a link to the explorer on transaction details view](https://github.com/theQRL/mobile-wallet/issues/55)
* [Feature request: Add a “copy address” button on the wallet details view (when tapping the QR code icon)](https://github.com/theQRL/mobile-wallet/issues/54)
* [Feature request: Add option to open existing wallet with mnemonic.](https://github.com/theQRL/mobile-wallet/issues/50)

Don’t see your request on either the [milestones](https://github.com/theQRL/mobile-wallet/milestones) or [issues](https://github.com/theQRL/mobile-wallet/issues) pages? We would love for your to submit it on GitHub directly, or ask a community/team member with access to GitHub to do so on your behalf! Again, big props to the community for such productive feedback to this project over the years.

Haven’t downloaded the QRL mobile wallet yet? Do so for [Android](https://play.google.com/store/apps/details?id=com.theqrl) or [iOS](https://itunes.apple.com/us/app/qrl-wallet/id1458620542?ls=1&mt=8).

## U2F timeout issue

{{< image "./images/1ulnXyfVdRyMPmNOIlLmGrQ.png" >}}

Ledger devices have been using the U2F protocol for easy and cryptographically secure second factor mechanism with the web browser since 2016.

Lately, U2F timeouts have been enforced more aggressively — which you may have noticed if you’ve ever experienced a “U2F timeout” warning. Previously, we’ve recommended using another browser or playing browser bingo. ***The new current recommended action is to use our desktop wallets, which can be found on the [front page of our website](https://theqrl.org/) and our [github releases page](https://github.com/theQRL/qrl-wallet/releases/latest/).***

You can read more about the development of U2F tunnel transport for Ledger devices in their blog [Windows 10 Update: Sunsetting U2F tunnel transport for Ledger devices](https://www.ledger.com/2019/05/17/windows-10-update-sunsetting-u2f-tunnel-transport-for-ledger-devices/) and read [troubleshooting advice](https://support.ledger.com/hc/en-us/articles/360023518653) on their support site.

As progress is made on this, we will of course keep you abreast of any events.