---
layout: blog-post
slug: last-week-in-qrl-june-4-10
date: 2019-06-06T19:36:05.567Z
author: "Adam Koltun"
title: "Last Week in QRL June 4–10"
summary: "Development Updates, Token Migration Reminder, Bittrex US Geofencing"
featured_image: 1NFSCc6BvXoQBC8RaKWa7Cg.png
images:
  - 1NFSCc6BvXoQBC8RaKWa7Cg.png
  - 1rcLJwEwLoBrJ9Fs95QZKRA.png
  - 1zAREr3w_wSv5wAPPZGD8gA.jpeg
  - 1x37t9zJwA4zcg7tH9XvxMg.jpeg
categories:
  - technical 
---

## Introduction

There is never a dull week in blockchain, and this past one was no exception. Bittrex announced that it was geofencing 32 crypto assets from United States customers Friday (more on this below), and significant progress has been made on further integrating Ledger. This is also the last “Last Week” blog before the end of Automatic Token Migration later this week on **June 15, 2019 3:00 pm UTC-05:00**, so we will have another reminder regarding that at the end of the blog.

## Development

{{< image "./images/1rcLJwEwLoBrJ9Fs95QZKRA.png" >}}

* **ledger-live:** Work on integration underway (more in [dev meeting notes](https://github.com/theQRL/dev-meetings/blob/master/2019/06/06.md))
* **ledger:** New BOLOS app (Nano S/X, multitree) with WebUSB-ready supporting library awaiting review by Ledger
* **wallet:** Pagination support underway: discussed adding this to explorer-helpers to allow recycling of code in explorer

## Community

We recognize that between the closure of automatic token migration at the end of the week (check out the [countdown](https://docs.theqrl.org/tokenmigration/countdown/)), and the recent Bittrex geofencing news (dedicated blog [here](/blog/geofencing-of-crypto-assets)), that a lot of information has been coming at the QRL community. We wanted to thank our community members for being so supportive of one another and quickly stepping up to disseminate information among one another.

This is probably most evident on Discord, where newcomers are oftentimes given a bevvy of information upon entering the server for the first time and asking some “What’s all this?” type questions. A coin is only ever as strong as its community, and it is encouraging to see so much passion from ours.

## Bittrex Geofencing of United States Customers

{{< image "./images/1zAREr3w_wSv5wAPPZGD8gA.jpeg" >}}

As we wrote in a [previous blog](/blog/geofencing-of-crypto-assets), Bittrex recently announced that it was geofencing 32 crypto assets, including QRL, from US customers on 2019–06–21.

Trading for non-US customers will continue unchanged on the Bittrex International platform.

You can read the full announcement [here](https://bittrex.zendesk.com/hc/en-us/articles/360028996652).

While this will not halt development progress on the project, the near term priority for the project will be procuring an additional listing on a major Asian exchange as soon as is practical.

## Automatic Token Migration

{{< image "./images/1x37t9zJwA4zcg7tH9XvxMg.jpeg" >}}

The current token migration process is **automatic **once you have started the process** **and **almost immediate**.

*After* **June 15, 2019 3:00 pm UTC-05:00**, however, the process for migrating ERC20s will be **manual,** and may take an **indeterminate amount of time**. *Additionally*, each manual migration will be evaluated on a **case-by-case basis**.

It’s *strongly* recommended that any and all users who still have QRL ERC20’s to migrate them **BEFORE** the closure of automatic migration on June 15th, 2019.

We have also outlined this on our [documentation page](https://docs.theqrl.org/tokenmigration/countdown/) to help keep everything in one spot and ensure everyone is on the same page with migration.

The process of token migration thusfar has been a successful and relatively smooth one. The overwhelming majority of QRL ERC20 tokens have been migrated. There are only a few unmigrated tokens left, and hopefully, there will be hardly any left once automatic token migration closes.