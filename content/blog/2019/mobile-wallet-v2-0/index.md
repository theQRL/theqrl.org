---
layout: blog-post
slug: mobile-wallet-v2-0
date: 2019-09-02T17:19:12.182Z
author: "Jack Matier"
title: "Mobile Wallet v2.0"
featured_image: 1B-9gXEIyEmOglGtTq_MeBA.png
images:
  - 1B-9gXEIyEmOglGtTq_MeBA.png
  - 1qoBnBaKavGSo2wn9Qz3aLQ.png
  - 1CbM90ui0EsEwp1FuR5X63w.png
  - 1tnv16XferZFDDpkF66XT0g.png
  - 1TjQLxily8fFyQwOqhmaU5A.png
  - 1iCyd8O1cnvyUaHCO-QDtJQ.png
  - 11Uo5llHN4nFq3hVRrjQe-w.png
  - 1iYZWGa9wA7pqhuqBaMHj-A.png
  - 1LRET8zMBLTeuoVkfTFJcRg.png
categories:
  - technical
---

The QRL mobile wallet [Version 1.0](/blog/the-qrl-mobile-wallet-is-officially-launched) was released in 5 months ago to the iOS and Android platforms as the first usable quantum-secure blockchain wallet. Needless to say, it was met with a positive response, and a flurry of suggestions.

Those suggestions were appreciated, and Adem Bilican has been hard at work bringing most of those suggestions to materialization. Below are the results of his labours.

**Before we get into that, for those that can’t wait to get started, you can get the [iOS](https://apps.apple.com/us/app/qrl-wallet/id1458620542?ls=1) or [Android](https://play.google.com/store/apps/details?id=com.theqrl) wallet at their respective stores.**

## Better wallet management

Now you can set different names of wallets. Deleting a wallet has a better warning and asks for the PIN. Also corrected is the QR code generated on the wallet section.

{{< image "./images/1qoBnBaKavGSo2wn9Qz3aLQ.png" >}}

{{< image "./images/1CbM90ui0EsEwp1FuR5X63w.png" >}}

{{< image "./images/1tnv16XferZFDDpkF66XT0g.png" >}}

## More fine-tuned transactions

You can now choose the OTS key index by just tapping the “OTS key index” in the send view. In addition to that the transaction details page has been refined to include more helpful information without having to view things in the external block explorer.

{{< image "./images/1TjQLxily8fFyQwOqhmaU5A.png" >}}

{{< image "./images/1iCyd8O1cnvyUaHCO-QDtJQ.png" >}}

## New: Settings page

A new settings page will allow you to change the node (and port) to connect to. If anything but the default node is selected, a small warning icon is presented next to the settings menu to let you know that you know you’re not connecting to the default node. If there’s connection issues a message will be displayed on the transaction list page.

You can also turn on or off PIN security depending on your circumstances (it’s generally suggested to leave it on if in doubt!). If turned on, the app will always ask for the PIN when the user switches back to the wallet or if the application is left idle for more than 15 seconds.

{{< image "./images/11Uo5llHN4nFq3hVRrjQe-w.png" >}}

## Better login/create page

It’s now possible to open an existing wallet with a mnemonic. Previously, only the hexseed was supported, now you can open up an existing wallet with either the mnemonic or hexseed. This can be accessed from the login / create page, which can in turn be found when you’re adding a new wallet from the wallet management screen.

{{< image "./images/1iYZWGa9wA7pqhuqBaMHj-A.png" >}}

{{< image "./images/1LRET8zMBLTeuoVkfTFJcRg.png" >}}

## Other fixes

- Date and Time are shown according to users’ general timezone preferences

- Smoother and more responsive transitions between views

- Additional UI/UX improvements

## Version 3.0 and beyond

With version 2.0 released, you may have some other feature request or change you’d like to see, or, you may have noticed that maybe your request didn’t make it into version 2.0.

First, check to see if your request isn’t already slated for version 3 and beyond by checking out github: [https://github.com/theQRL/mobile-wallet/milestone/2](https://github.com/theQRL/mobile-wallet/milestone/2)

If it’s not there, then feel free to make a request/bug report on the mobile wallet issues page: [https://github.com/theQRL/mobile-wallet/issues/](https://github.com/theQRL/mobile-wallet/issues/)

Finally, a big shoutout to the community members that graciously tested the mobile wallet, broke it, and made a bug report. Truly unsung heroes that don’t get thanked enough.