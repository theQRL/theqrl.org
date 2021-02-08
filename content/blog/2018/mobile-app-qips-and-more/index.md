---
layout: blog-post
slug: mobile-app-qips-and-more
date: 2018-07-31T17:53:17.290Z
author: "Jack Matier"
title: "Mobile app, QIPs, and More!"
summary: "TLDR — Mobile app technical side complete, the QIP process, In the Media Section, and a P2P exchange network listing commit."
featured_image: 1ATPZu7zBl6zry3KEqPZpAA.png
images:
  - 1ATPZu7zBl6zry3KEqPZpAA.png
  - 1WqnynBhXl8gG2bjMt3eZ3w.png
  - 1SIMv8AUWra64BKJ4jF3EwQ.png
  - 1Hz3zkVZskyV27dStSRAglA.png
  - 1ezM5CGWWoy1wk0mmAfvqLg.png
categories:
  - technical
---

*TLDR — Mobile app technical side complete, the QIP process, In the Media Section, and a P2P exchange network listing commit.*

[Last week](/blog/step-by-step-what-weve-been-up-to) we spoke about Ledger progress, mobile (web) improvements, API documentation, our new post-quantum notarisation feature, and a brief update on smart contracts!

This week, we’re now past 55,000 blocks, with a different set of updates.

### Mobile Application

The technical side of the mobile phone application is **complete**, which means it’s building out the aesthetic designs (shown below) made by Luke Hahn, our design lead.

As an overview, some of the components which are built and working on mobile are:

* [qrllib](https://github.com/theQRL/qrllib) (QRL Core Library)

* [shasha ](https://github.com/theQRL/qrllib/tree/master/src/shasha)(to support additional sha2 hash function)

* [Kyber](https://eprint.iacr.org/2017/634.pdf) & [Dilithium](https://cryptojedi.org/papers/dilithium-20170627.pdf) (used for ephemeral messaging)

Along with this is properly working bi-directional communication between react-native (JavaScript) and native code (Objective-C for iOS and Java for Android) using bridges.

Great work Adem Bilican!

{{< image "./images/1ATPZu7zBl6zry3KEqPZpAA.png" >}}

{{< image "./images/1WqnynBhXl8gG2bjMt3eZ3w.png" >}}

{{< image "./images/1SIMv8AUWra64BKJ4jF3EwQ.png" >}}

## QRL Improvement Proposals (QIPs)

With our main network launched it’s critical to maintain a stable and secure system for any integration's that would effect things at the network level, or are otherwise significant in nature.

This is where QIPs come in, which follows a formal process full of checks and balances. You can check out the [repository](https://github.com/theQRL/qips) and read more about the [process](https://github.com/theQRL/qips/tree/master/0.Process).

Soon to be released will be our first QIP for smart contracts with forth-like scripting. From this, anybody will be able to use it as an example and initiate their own QRL Improvement Proposal (QIP) process.

{{< image "./images/1Hz3zkVZskyV27dStSRAglA.png" >}}

### Website addition — In the media

Our new In the media tracks mentions as well as quantum-news and advancements. You can check it out on the website now at [theqrl.org/media](https://theqrl.org/media). Expect more updates to the site as we have a lot planned for it beyond the *In the Media* section.

{{< image "./images/1ezM5CGWWoy1wk0mmAfvqLg.png" >}}

### Bisq.network — P2P Exchange Network

While we are working with exchanges to list our main network coin, we have made a [commit](https://github.com/bisq-network/bisq-assets/pull/91) to be listed on the [bisq.network](https://bisq.network/) to help facilitate person to person trades. Bisq works a little different than other exchanges, and we have a video below, from Bisq, that explains it a bit. You can also check out their [FAQ.](https://bisq.network/faq/)
