---
layout: blog-post
slug: last-week-in-qrl-april-23-29
date: 2019-04-29T15:20:57.282Z
author: "Adam Koltun"
title: "Last Week in QRL April 23–29"
summary: "Development updates, introducing QIP 008"
featured_image: 17tteYuvNeH031NCEVMNX4Q.png
images:
  - 17tteYuvNeH031NCEVMNX4Q.png
  - 1nHS7PWvsegTG5qbGCrTDKQ.jpeg
  - 1bnwfORWLZwEHiWConYSRZQ.jpeg
categories:
  - technical
---

## Introduction

This past week saw continued debate and discussion around our latest QIP (blogged about [here](/blog/qip-007-support-tokenization-of-securities)), as well as another QIP being submitted (more on this below). In addition to this there has been the usual development efforts as well as some research into more forward-looking opportunities. As always, the best of what we can talk about is below.

## Development

{{< image "./images/1nHS7PWvsegTG5qbGCrTDKQ.jpeg" >}}

* **QRL Block Explorer:** Change to OTS Tracker colors to make them less harsh
* **theqrl.org:** Have the down arrow actually go somewhere (H/T to discord user [@kuantum](https://github.com/kuantum)#1776 for reporting this error)
* **Explorer-helpers:** Fix keybase signature hash display

## QIP 008: Ephemeral Message Format Proposal

{{< image "./images/1bnwfORWLZwEHiWConYSRZQ.jpeg" >}}

Barely a week out from the last [QRL Improvement Proposal (QIP)](https://github.com/theQRL/qips), and the next one arrives — we can only hope for more weeks with as many ideas coming to the fore as this one. Authored by Peter Waterland ([GitHub](https://github.com/surg0r)) and Kaushal Singh ([GitHub](https://github.com/cyyber)), here is the abstract:
> To extend functionality of the QRL beyond the ledger an off-chain network messaging system known as ‘ephemeral’ is proposed. These lifespan-limited internode broadcast messages may be relayed and stored optionally by agreeable qrl-nodes.
> A simple initial format with some DDOS protection is suggested, allowing custom implementations from users or applications wishing to interact with the QRL ledger/network.

The full text of the QIP can be found [here](https://github.com/theQRL/qips/blob/master/2.Proposals/1.%20Open/8%20-%20Ephemeral%20Message%20Format%20Proposal/8%20-%20ephemeral%20message%20format%20proposal.md). As always, we highly encourage anyone who is interested to go look at the discussion already occurring on GitHub, which can be found [here](https://github.com/theQRL/qips/pull/17). Alternatively, there is always an appetite for discussion on our [Discord](https://discord.gg/VR9kcs2) server. There will also be a blog specifically on the new QIP at a later date.

It has been almost 6 months to the day since the first QIP was published. We are currently tracking at a bit over 1 QIP per month, with the interval between QIPs shrinking over time. This is exactly the sort of feedback we were hoping for when creating the QIP system. It is one thing to make systems, it is entirely another thing to see those systems be put to proper and good use. Thank you to everyone who has submitted a QIP, commented on one, or simply discussed them.