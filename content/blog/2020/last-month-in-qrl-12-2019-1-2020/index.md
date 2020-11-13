---
layout: blog-post
slug: last-month-in-qrl-12-2019-1-2020
date: 2020-01-07T16:50:48.262Z
author: "Adam Koltun"
title: "Last Month in QRL 12/2019–1/2020"
subtitle: "Development Updates, Developer Summit, Hard Fork News"
featured_image: 18gRonUdQo1443PCCJBQ85A.png
images:
  - 18gRonUdQo1443PCCJBQ85A.png
  - 1z_DehZcA2vi3DwIPrtehCQ.jpeg
  - 1eK6lo3akAk7DISzNU-CfQw.jpeg
  - 1-nNQCz8N12ry2Zr-hwI-pA.png
categories:
  - technical
features:
  - qrlcli
  - multisig
---

## Introduction

Happy New Year! This marks the first blog in the new monthly format. We have switched to this format to allow for these blogs to contain more information, be more meaningful, and to make it easier to follow along with each and every blog.

Since our last entry, the holidays have come and gone, and already there has been news on the Quantum Computing front. IBM and Daimler have [announced a partnership](https://www.cnet.com/roadshow/news/ibm-daimler-ces-2020-quantum-computer-solid-state-batteries-lithium-sulfur/) to develop new lithium-sulfur batteries using quantum computers, [new benchmarks for quantum computers](https://phys.org/news/2020-01-advance-benchmark-quantum.html) have been developed by researchers at the US Department of Energy, and [Intel has developed a new type of hardware chip](https://www.eetimes.com/intel-cryogenic-chip-for-quantum-computing/) for quantum computers called Horse Ridge. 2020 has barely begun, and already it is looking like it will be a big year for quantum computing.

## Development

{{< image "./images/1z_DehZcA2vi3DwIPrtehCQ.jpeg" >}}*Credit: Discord user Smith*

* [qrandomx](https://github.com/theQRL/qrandomx/commit/c9cac9e1c5f9d1ce260fc9605dbd4df947ade807): Fix - Process all items on eventQueue to avoid deadlock
* [api.theqrl.org](https://github.com/theQRL/api.theqrl.org/commit/26111a862f70465c34a8235b8496abacaa988e74): API Patches (New API)
* [block-explorer](https://github.com/theQRL/block-explorer/pull/331): Use latest explorer-helpers module
* [explorer-helpers](https://github.com/theQRL/explorer-helpers/commit/700dd2f29a298368869df50ae3692c30e07d4f5e): build(deps): bump handlebars from 4.1.2 to 4.5.3
* [qrl-cli](https://github.com/theQRL/qrl-cli/commit/6b82388f8c506b4b624e7e9a591f4cf3c8a82784): feat: Add create-lattice and get-keys functions
* [qrl-wallet](https://github.com/theQRL/qrl-wallet/commit/24aaf86ec33645bbf82b86750e6ac9c38830ed14): Fix some UI issues and spend bug

## Upcoming Amsterdam Dev Summit

{{< image "./images/1eK6lo3akAk7DISzNU-CfQw.jpeg" >}}

As many of you are aware, the developers for QRL will be meeting in Amsterdam this week to collaborate in person on the most important technical developments for the QRL network. Being able to work in the same place (to say nothing of the same timezone) can be invaluable to the development process. First in line for this particular summit is the upcoming hard fork — what is will contain (more on that below), implementation, optimization, and testing.

Look for more announcements regarding the developer summit and all it has accomplished once it has been completed.

## The Hard Fork

{{< image "./images/1-nNQCz8N12ry2Zr-hwI-pA.png" >}}

While more information will come out regarding the hard fork on the other side of the developer summit, and as we approach the date of the fork, for now we can give you some of what will be included, as well as some information regarding the timing of the hard fork:

**Dates**

- CODE FREEZE: 10th February
- RELEASE: 11th February 
- FORK DATE: 25th February — Block height TBA

**Features**

* RandomX mining Algorithm
* Multisig addresses & transactions
* LatticeTX (ephemeral messaging stub)

There will be more information regarding the hard fork as we approach the dates for code freeze and ultimately, the fork itself. Watch this space as well as our [Twitter](http://@QRLedger), [Discord](https://discord.gg/BheKAZb), and our [subreddit](https://www.reddit.com/r/QRL/) for more information.