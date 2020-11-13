---
layout: blog-post
slug: last-week-in-qrl-november-12-18
date: 2019-11-18T17:42:30.509Z
author: "Adam Koltun"
title: "Last Week in QRL November 12–18"
subtitle: "Development Updates, QIP 010 — Quanta emission change"
featured_image: 14btE0CL_8j1lxHSP7olcmQ.png
images:
  - 14btE0CL_8j1lxHSP7olcmQ.png
  - 14MJCD9OZqdufiNuy98_I_g.jpeg
  - 1usz5t3QLTvc62eSvcBvZVg.jpeg
categories:
  - technical 
---

## Introduction

Another week, another new QIP. With the second new QIP in as many weeks, we see another QIP that is targeted at the mining side of the blockchain. While more details are below, it is worth noting that changing the mining algorithm (as was proposed in QIP 009), or changing the emission schedule, as with QIP 010, are both fundamental changes to the blockchain that will likely require substantial debate and testing before any potential implementation.

We will also soon be asking for testers for multisignature wallets on testnet. If you have any interest, please feel free to reach out to myself (Puck342 on Discord) or Jack (Jackalyst on Discord) with interest.

## Development

{{< image "./images/14MJCD9OZqdufiNuy98_I_g.jpeg" >}}*Credit: Discord user Smith*

* **[qrl-cli](https://github.com/theQRL/qrl-cli/commit/fcc8f914c9bdcb534beaa59c1390641ca2c8086c):**Adding descriptions to commands
* **[docs.theqrl.org](https://github.com/theQRL/docs.theqrl.org/commit/251095a3d7e9826cecadce6cf4c3e4aab3812b1f):** Fixes to Node document and typo in Ledger Document
* **[qrandomx](https://github.com/theQRL/qrandomx/commit/2bca2fe13eeffe5227a05e18e167fa4ae236ea73):** Updated Swig Interface to expose ThreadedQRandomX instead of QRandomX
* **[qrl-wallet](https://github.com/theQRL/qrl-wallet/commit/093119ef0d9697fd6541bea0402476a751181dd0):** Add v1.1.15 to recognized versions

## QIP 010: Quanta emission change to 2 Quanta per minute

{{< image "./images/1usz5t3QLTvc62eSvcBvZVg.jpeg" >}}

Recently, GitHub user [Ottslayer ](https://github.com/Ottslayer)proposed [QIP 010](https://github.com/theQRL/qips/pull/21) — Quanta emission change to 2 Quanta per minute. Here is what he wrote:

> Emission is currently close to 6 Quanta per minute and will be exponentially reduced to 0 in approximately 200 years. Reducing the emission to 2 Quanta per minute will reduce the availability of Quanta.
> Lower emission rate will most likely increase demand of Quanta, the price, and people who are willing to point their mining rigs to qrl which will enlarge the network.

As of this writing, there are seven comments from four users on the QIP. The mining algorithm and emission schedule are two of the pillars upon which any blockchain is built upon. Change to either (or both) of these will probably have an effect on the relative desirability of mining a given chain, and as such can have direct effects on its hashrate and relative security, as well as its popularity in the mining community. It is therefore quite interesting that the last two QIPs have both dealt with these issues (QIP 009 being related to the mining algorithm).

As always, we would highly encourage any community members with opinions to voice them on the [GitHub page for QIP 010](https://github.com/theQRL/qips/pull/21). However, given the nature of the proposal, we would especially encourage anyone who is currently mining QRL, or who has experience mining in general, to weigh in as to how you feel the proposed changes would (or would not) affect the current mining situation for QRL. As always, we are deeply appreciative of the involvement of our community members, and there is no better way to get involved than creating and/or commenting on a QIP.

Remember — anyone can submit a QIP on GitHub. Have a great idea for QRL? [Submit a QIP](https://github.com/theQRL/qips)!