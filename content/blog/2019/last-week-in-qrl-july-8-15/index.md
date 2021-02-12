---
layout: blog-post
slug: last-week-in-qrl-july-8-15
date: 2019-07-15T14:36:38.002Z
author: "Adam Koltun"
title: "Last Week in QRL July 8–15"
summary: "Development Updates, The QRL Contributors"
featured_image: 1eo9zWl1NAd6U76bdB837WA.png
images:
  - 1eo9zWl1NAd6U76bdB837WA.png
  - 1ElH1TzAM8c0S2OegFB2XoQ.jpeg
  - 1W97RMZ6AjIn5x6_UzzrOHg.jpeg
  - 13JjoFZrEnSWZyEQzUoXdjg.png
categories:
  - technical 
---

## Introduction

This past week saw lots of activity behind-the-scenes at QRL, specifically in the realm of planning. Unfortunately, we cannot intimately discuss most of what those plans entail, aside from saying that we have taken in the feedback we have received of late, including the AMA, and are working to address much of it. Indeed, efforts were already underway in regards to some of the concerns, just not in a manner that we could explicitly disclose. The best of what we can discuss is below.

## Development

{{< image "./images/1ElH1TzAM8c0S2OegFB2XoQ.jpeg" >}}

* **mobile-wallet:** Improvements for mobile wallet v2
* **go-qrl:** [MongoDB] Fix Transfer Token Transaction
* **theqrl.org:** Mention XMSS yields reusable addresses

## The QRL Contributors

{{< image "./images/1W97RMZ6AjIn5x6_UzzrOHg.jpeg" >}}

The [QRL Contributors](/blog/the-qrl-contributors) consists primarily of roles, working groups, and projects. Like last week, we’d like to offer a glimpse into something from the server in today’s blog. Today we will be featuring a project, which are supposed to draw on one or multiple working groups to see them to their conclusion.

### Project: Tip Bot

{{< image "./images/13JjoFZrEnSWZyEQzUoXdjg.png" >}}

**Scope**

Build a system that will interface with multiple social media platform API interfaces, to create a bridge to a working QRL node and wallet, allowing a user to send a tip to another user on the platform. The system should create a new address for a user even if they have not interacted with the bot. The bot would notify the user via DM that they have funds waiting and give clear instructions on how to withdraw.

**Main Goals**

* Allow users to tip
* Stores multiple social media accounts to the same address for a single user
* Allows the user to deposit and withdraw using social media platform
* Reports stats to the user when requested ie: balance, total tipped, total received
* Server that stores private keys should be secure and fully backed up. Bonus if somehow the data was stored on-chain and was able to be rebuilt upon catastrophe.
* Web interface and domain to log into and interact with the bot to withdraw, deposit, check stats and tip users via Email?
* Something similar to how keybase.io have integrated stellar to a keybase username. Allowing a user to tip via chat.

We are very excited for when The QRL Contributors fully launches, as we believe it will make the path to supporting QRL clearer, to those who are interested.