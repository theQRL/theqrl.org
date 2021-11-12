---
layout: blog-post
slug: last-week-in-qrl-august-27th-to-september-2nd
date: 2019-09-02T20:10:23.686Z
author: "Jack Matier"
title: "Last Week in QRL — August 27th to September 2nd"
summary: "Last Week in QRL — August 27th to September 2nd"
featured_image: 1pRbo9beNhPFGXbeF2_CywA.png
images:
  - 1pRbo9beNhPFGXbeF2_CywA.png
  - 1CbM90ui0EsEwp1FuR5X63w.png
  - 1iCyd8O1cnvyUaHCO-QDtJQ.png
  - 1osqj_ihls3BJylOML6BIIA.png
categories:
  - technical
---

### Mobile Wallet v2: Testers Needed! and API’s and spotlights: Apps wanted!

## Mobile Wallet version 2: Testers Needed!

{{< image "./images/1CbM90ui0EsEwp1FuR5X63w.png" >}}

{{< image "./images/1iCyd8O1cnvyUaHCO-QDtJQ.png" >}}*Sneak peak.*

Our iOS/Android version 1 wallet came with the ability to manage multiple wallets, send/receive Quanta, view your balance/transaction history, set a lock-screen, and instantiate a wallet from our web-wallet through a QR Code.

Since then, there’s been many feature requests that’s been segmented into [version 2](https://github.com/theQRL/mobile-wallet/issues?q=is%3Aopen+is%3Aissue+milestone%3Av2) and [version 3 and beyond](https://github.com/theQRL/mobile-wallet/milestone/2).

We’re pleased to announce that version 2 is ready for beta testing with the following updates:

* User can open existing wallet with mnemonic (only hexseed was supported so far)
* User can choose the OTS key index, just tap the OTS key index in the send view
* New settings page
* User can change the node (and port) to connect to. If not connected to a specific node (we can decide which one, the default will be mainnet-\*) a small warning icon is presented next to the Settings menu. If you want to try, for the test version the default node (the one without a warning) is: [testnet-4.automated.theqrl.org](http://testnet-4.automated.theqrl.org)
* The user can turn on/off the PIN security. If turned on, the app will always ask for the PIN when the user switches back to the wallet
* PIN is required if the user leaves the app for more than 15 seconds (I can change it if too short/long)
* Deleting a wallet has a better warning and asks for the PIN
* User can give a name to the wallets
* Corrected the QR code generated on the wallet section
* Date and Time are shown according to users’ general timezone preferences
* Additional UI/UX improvements

Before we release it to the general public however, proper testing is required.

### TestPilots required!

We have gone through internal testing, now we need your help!

**iOS users:** There is nothing you need to do, granted that you are already enrolled in the beta test through the apple store. Once the latest version hits the Apple store you will have the ability to update to the latest version.

If you would like to enroll in the iOS beta test, please send a DM to ‘@adem’ on Discord with the email address associated with your App store account.

**Android users:** Please send a **DM** to @adem on Discord with your **GMAIL Address** associated with your play store account so he can add you to the testing group in the play store. This will allow the same functionality as the apple store, pushing the latest changes to your device.

***As a reminder, this is a BETA test!!***

* The beta wallet uses our **Testnet**, no actual funds are used for this test.
* *OTS keys **MUST** never be re-used. Using the same wallet for `mainnet` and `testnet` is dangerous. Generate a new test wallet and don’t reuse across networks.*
* Things may break or become un-reliable while we update and make changes.
* You can’t use two different applications on your phone at the same time. If you’re planning on removing your current v1 application and installing the beta,** be sure to backup your current wallet and make sure you can recover it!!! We will not be responsible for lost funds.**
* If you need some **Testnet** funds, put out a message on one of our social media platforms with your testnet address and someone we’ll send you some.

**What We Expect Of You**

Try and break things! Hack them if you can, or simply think like a beginner. Can your parents/grandparents/kids/friends use this application? Is it easy? What could be improved?

Feedback and issues should be directed over at github, so we can keep things organized and track the changes requested: [https://github.com/theQRL/mobile-wallet/issues](https://github.com/theQRL/mobile-wallet/issues)

Please include this information GitHub for any issues you have found.

```
`Action:
Expected Result:
Actual Result:
Android/iOS version:
Android/iOS handset model:`
```


For feedback in the form of feature requests, check to see if it already exists and then write it as an issue, freeform. Be sure to use a descriptive title!

No feedback is bad feedback!

## APIs and Spotlights

{{< image "./images/1osqj_ihls3BJylOML6BIIA.png" >}}

We now have 5 different ways to work off of The QRL, with another on its way explicitly for EMS:

* [QRL API](https://api.theqrl.org/#qrl-api): Organized around GRPC which uses [protocol buffers](https://developers.google.com/protocol-buffers/docs/overview) for serializing structured data. If you’re working on an integrated application, this is what you want.
* [Explorer API](https://api.theqrl.org/#explorer-api): Great for quickly getting QRL address balances, population, and other such data.
* [Wallet API (requires node)](https://api.theqrl.org/#wallet-api): If you’re working with wallets (ie. exchanges and other services), this is recommended.
* [qrl command line (requires node)](https://docs.theqrl.org/wallet/wallet-cli/): Comes equipped with the python node, offers simpler functionality to the wallet API.
* [qrl-cli](https://github.com/theQRL/qrl-cli): Executable with mac, linux, and osx binaries, for interacting with the QRL blockchain via scripts and applications without requiring a full node.

### Apps Wanted!

The above functionality should be plenty to start developing your post-quantum secure blockchain application!

For those building QRL applications and wanting to showcase them, it’s encouraged to request to put them in our [theqrl-community](https://github.com/theqrl-community) github, which will allow projects to get some spotlight from the QRL community.

Need an idea? Head over to [#qrl-app-ideas](/discord) in our Discord and pick one. Stuck? Post in our [#development](/discord) channel for any help you may need, and finally, don’t forget our [documentation](https://docs.theqrl.org/).