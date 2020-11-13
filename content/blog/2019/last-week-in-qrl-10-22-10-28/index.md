---
layout: blog-post
slug: last-week-in-qrl-10-22-10-28
date: 2019-10-28T16:04:33.851Z
author: "Adam Koltun"
title: "Last Week in QRL 10/22–10/28"
subtitle: "Development Updates, Research Grants, New Exchange Listing, UpBit Update"
featured_image: 1u35SUx9jODupMG69nkwuQQ.png
images:
  - 1u35SUx9jODupMG69nkwuQQ.png
  - 1MPxCNIsWHyBWOq3dGuhA0g.jpeg
  - 1wIWG0qZhGrmTrRUqUY_W9g.jpeg
  - 121SQ2V05-0YalutBb4eeeQ.png
  - 1O1oJHaSTGlljxIabORBpKw.jpeg
categories:
  - technical
---

## Introduction

As we approach Halloween, there has been a recent flurry of activity in the Quantum Resistant space. Not all weeks are created equal, and this week saw more activity than most. Externally, there was a large announcement that [Google had confirmed its claims of Quantum Supremacy](https://www.theverge.com/2019/10/23/20928294/google-quantum-supremacy-sycamore-computer-qubit-milestone). This luckily coincided with our intention to announce the launch of [our first batch of research grants](https://theqrl.org/research/grants/), and on Friday [we did just that](https://www.pr.com/press-release/797923); announcing that we were launching four research grants into the field of Lattice-based threshold cryptography.

Additionally, another podcast interview was recorded (look for that to drop in about a month). Internally, we released multi-signature wallets on devnet, which we hope to be able to bring to testnet in a reasonable timeframe. Multisignature functionality will allow for wider and more varied uses for our wallet, and will help provide more useful elements for later second-layer application development.

## Development

{{< image "./images/1MPxCNIsWHyBWOq3dGuhA0g.jpeg" >}}

* **[explorer-helpers](https://github.com/theQRL/explorer-helpers/commit/ac088bfea6aea33a5883342ee84ee637ccb0905a):** Add support for multi_sig_create transaction type
* **[theqrl.org](https://github.com/theQRL/theqrl.org/commit/78963970f17fed4e84315dfe083150a854c8053d):** Add research grant
* **[block-explorer](https://github.com/theQRL/block-explorer/commit/3d197b7c1946d3700e0b0de7427e07729628c019):** Wallet address changed
* **[wallet-helpers](https://github.com/theQRL/wallet-helpers/commit/199f9e8b1cb59ae239d7984a34424f1bc6c17ce4):** Update handlebars version in development dependencies
* Multi-signature wallets are now live on devnet! We hope to be rolling them out to the testnet as soon as it is ready.

## QRL Research Grants

{{< image "./images/1wIWG0qZhGrmTrRUqUY_W9g.jpeg" >}}

As you can see on our [website](https://theqrl.org/research/grants/), we are now offering a Lattice-based threshold cryptography research grant with 4 positions. If you would like to apply for the research grant, please send all inquiries to hello@qrl.foundation. These grants represent an opportunity for QRL to help meaningfully advance not just the implementation of quantum resistant cryptography, but its exploration as well.

We recognize the role that we must play in this evolving niche of the blockchain world. As innovators on the cutting edge, it is incumbent upon us to help advance the technology both through supporting research, as well as through our own development efforts.

## New Exchange Listing — Vinex

{{< image "./images/121SQ2V05-0YalutBb4eeeQ.png" >}}

As you possibly saw earlier today in our [previous blog](/blog/new-exchange-listing-vinex), QRL is now listed on [Vinex ](https://vinex.network/)on the [QRL/BTC](https://vinex.network/market/BTC_QRL) and [QRL/USDT](https://vinex.network/market/USDT_QRL) pairings. Vinex is a Singapore-based exchange, primarily targeted at the Vietnamese market, but also targeted at the entire ASEAN (Association of Southeast Asian Nations) region. It also marks the first exchange to list a QRL/USDT pairing.

## Upbit Update

{{< image "./images/1O1oJHaSTGlljxIabORBpKw.jpeg" >}}

Today, Upbit [released a notice](https://sg.upbit.com/service_center/notice?id=2284) of 20 BTC pairings that would be re-enabled on October 29th. Included in that list is QRL/BTC. Upbit also released the following caveats in regards to the 20 re-opening pairings:

* For safe trading and accurate market information, ask orders will not be available for initial 5 minutes.

* Also, ask orders lower than 10% from the reference price will not be available.

* Reference price refers to 1) closing price on SGD market or 2) closing price on Bittrex, previous day.

* Market price could be volatile for initial period from listing. Please be careful when trading.