---
layout: blog-post
slug: last-week-in-qrl-feb-11-18-2019
date: 2019-02-18T16:42:14.360Z
author: "Adam Koltun"
title: "Last Week in QRL Feb 11–18 2019"
featured_image: 1MoR-8LV6oKiH7fp15_fgpA.png
images:
  - 1MoR-8LV6oKiH7fp15_fgpA.png
  - 1HwoygmrZ0lqp9nBbUmjyLg.jpeg
  - 1Z_ZjOpYV4iiy7ik3JM0Lvw.jpeg
  - 1XN3dz5ajWVr1xNjmFX8tUA.png
categories:
  - technical 
---

## Introduction

Last week was Valentine’s Day in the Western World, and tomorrow Adam and James head out to Oakland for DeveloperWeek 2019. Next week’s “Last Week in QRL” blog will likely be brief, as there will be a typical “Reflections” blog on DeveloperWeek out as well. We are starting off our conference attendance with a bang in 2019, as DeveloperWeek’s attendance will likely eclipse even that of Consensus last year, as well as covering a broader scope.

## Development

{{< image "./images/1HwoygmrZ0lqp9nBbUmjyLg.jpeg" >}}

* **Offline Wallet Generator: **fix: long-style v-on and v-bind
* **Mobile Wallet:** v1.0.8 update
* **Mobile Wallet:** Wallet creation test using Appium
* **Mobile Wallet:** Simple end-to-end test using Detox
* **API:** Adding Explorer API Documentation

## QIP 4: Multi-Signature Wallet

{{< image "./images/1Z_ZjOpYV4iiy7ik3JM0Lvw.jpeg" >}}

For those of you unfamiliar, our [QRL Improvement Protocol (QIP)](https://github.com/theQRL/qips) is the vehicle through which we hope to drive much of the serious discussion around specific feature development. To review, some of the first QIPs were regarding [Cryptonight V8](https://github.com/theQRL/qips/tree/master/2.Proposals/1.%20Open/1%20Cryptonote%20v8) and [A standard message encoding format to indicate encoded data](https://github.com/theQRL/qips/tree/master/2.Proposals/1.%20Open/2%20-%20MessageTransaction%20Encoded%20Message%20Standard). They live over on our [GitHub](https://github.com/theQRL/qips) and we encourage members of the community to comment, create and discuss them there.

The most recent QIP is [QIP4: Multi-Signature Wallets](https://github.com/theQRL/qips/blob/master/2.Proposals/1.%20Open/4%20Multi-signature%20wallet.md) — if you feel inclined to read it yourself, we highly encourage it! As the QIP states, multi-signature wallets, “allow multiple authorities to have a transaction from a single wallet once consent has been established.”

Generally speaking, multi-signature wallets allow for more complex uses of a wallet. One such example would be a team within a company, with 5 people, where 3 of the 5 needed to approve any expenditure for a given project. With a multi-signature wallet, they could ensure that in order for funds to be spent, 3 of the 5 signatures associated with the wallet would need to be employed.

## Upcoming Conference

{{< image "./images/1XN3dz5ajWVr1xNjmFX8tUA.png" >}}

Adam and James will be heading out to Oakland tomorrow to present at and attend DeveloperWeek 2019. You can see a preview of what Adam will be presenting [here](https://developerweek2019.sched.com/speaker/adam_koltun.1yz9ak9c). You can find all the details about DeveloperWeek 2019 and our involvement in [our preview blog](/blog/developerweek-2019-this-week). As always, we will have a reflections blog following the conference. Be on the lookout for the blog the week following their return from DeveloperWeek.