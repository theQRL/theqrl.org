---
layout: blog-post
slug: last-month-at-qrl-march-2021
date: 2021-04-01
author: "Jack Matier"
title: "Last Month at QRL — March 2021"
summary: "EnQlave, 'weeks, not months' away. The QRL Tipbot released! QIP014 - Quantum Secure non-fungible Tokens (NFT)'s on the QRL blockchain"
featured_image: eom.mar2021.png
images: 
  - eom.mar2021.png
  - highlight-tipbot.png
categories:
  - technical
features:
  - enqlave
  - qips
toc: true
---

## Highlights

### The QRL Tipbot

{{< image "./images/highlight-tipbot.png" >}}

After many long nights, lots of coffee, and countless rounds of testing by the QRL contributors, the Tipbot has been released to the QRL Discord (with more platforms on their way!)

The Tipbot's main goal is to foster a positive and rewarding atmosphere that supports those who contribute to the project, whether that's through a tweet, artwork ([are meme's art?](https://memefest.quanta.city)), or knocking out a few issues on GitHub from one of our countless repositories.

Along with full on-chain tipping functionality (as it should be), there's also a *faucet*, which allows anyone to withdraw from once a day.

Want to get started? Be sure to read more [QRL Tipbot introduction blog](/blog/introducing-the-new-qrl-tipbot), or head straight to our [Discord](/discord)'s #bot channel and create a wallet with the `+add` command.

### QIP014 - Quantum Secure Non-fungible token (NFT) support on the QRL blockchain

{{< image "./images/highlight-qip014.png" >}}

As a refresher, [QRL Improvement Proposal's (QIP's)](https://github.com/theQRL/qips) have been how we've made several improvements to QRL in the past and will remain as an important part of our governance in the future. Outside of our communities, it's the most tangible way to contribute your thoughts and ideas to move QRL forward.

What probably doesn't need a refresher is [Non-fungible Tokens (NFT)'s](https://en.wikipedia.org/wiki/Non-fungible_token), which has made the headlines recently with artwork going for as much as [$69.3 million](https://onlineonly.christies.com/s/first-open-beeple/beeple-b-1981-1/112924). 

NFT's are unique in that they're *unique* tokens that can't be broken apart. This makes it suitable for a wide range of applications such as collectibles, games, art, and of particular value, other real-world assets.

### Implementation

To enable QRL NFT support on the QRL blockchain with a soft-fork (no node changes required), the QRL's Quantum Resistant Token (QRT) `TOKEN_CREATE_TX` transaction subtype could be supplied with custom data which includes encoding.

This would require changes to the QRL Wallet and Explorer functionality and allow users and third-parties to build functionality into QRL immediately, with low fees and minimal network congestion.

- Read more: [QIP14](https://github.com/theQRL/qips/blob/master/2.Proposals/1.Open/QIP014.md)
- [Comment](https://github.com/theQRL/qips/pull/28)

## Development updates

### EnQlave

When? 

> "Weeks, not months." - Peter Waterland (Founder & Developer)

Work on enQlave continued untempered with us entering into the final stretch (finally).

As Ethereum transaction fees are still high we've enabled a secondary mode using hashchains and a timelock commit reveal scheme which is seeded through the BIP36 root. 

Last month consisted of implementing & testing the storage of commit & reveal enQlave transactions into MongoDB, with reorg revert support functions. The hashchain library was also rewritten as a [recyclable class](https://github.com/theQRL/hashchains) with a swappable hash function. 

With the base elements in place, UI re-work has begun to make things as clear as possible.

### Proof-of-Stake

[Geometry Labs](https://geometrylabs.io/) (Previously Insight Research) have been hard at work bringing *scalable* pq-signatures into our Proof-of-Stake code. 

At this point not much can be said on this but there's a blog coming out which will be detailing some of their technical advancements. 

## Advocacy / Education

### Creating a Quantum Resistant Multisig Wallet

{{< youtube "a4U8rwbqV7k">}}

- [0:00](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=0s) Intro 
- [0:19](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=19s) Episode Overview
- [1:21](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=81s) Defining Multisig 
- [2:20](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=140s) Multisig- Use Cases
- [3:59](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=239s) Creating a Multisig Wallet 
- [5:30](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=330s) Sending funds to the Multisig Address :repeat: 
- [6:22](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=382s) Create a Multisig Transaction
- [8:14](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=494s) Voting to verify transaction (approval)
- [9:41](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=581s) Multisig transaction success (threshold was met)
- [10:06](https://www.youtube.com/watch?v=a4U8rwbqV7k&t=606s) Closing thoughts (starting point for users, upcoming episodes, etc)

### How do you Create a Quantum Resistant Wallet? Full QRL Wallet Walkthrough

{{< youtube "Q8FeCdww34A" >}}

- [0:00](https://www.youtube.com/watch?v=Q8FeCdww34A&t=0s) Intro 
- [0:32](https://www.youtube.com/watch?v=Q8FeCdww34A&t=32s) Episode Overview
- [1:41](https://www.youtube.com/watch?v=Q8FeCdww34A&t=101s) Creating a QRL Web Wallet
- [6:45](https://www.youtube.com/watch?v=Q8FeCdww34A&t=405s) Creating a QRL Hardware Wallet 
- [13:30](https://www.youtube.com/watch?v=Q8FeCdww34A&t=810s) Sending QRL Transactions :repeat: 
- [18:34](https://www.youtube.com/watch?v=Q8FeCdww34A&t=1114s) Closing thoughts + upcoming episodes (multisig, guests, and more)

## Quantum News

### March 1st: Quantum computing: Believe the hype

> Quantum computing is now entering the commercial sphere, and given its potential impact on everything from climate change to medical research, no business can afford to ignore it.

https://investmentmonitor.ai/ict-and-internet-infrastructure/quantum-computing-believe-the-hype

### March 3rd: The Decade of Quantum Computing Is Upon Us, IBM Exec Says

> With business uses poised to accelerate, CIOs need to start tinkering with platforms, forming work groups and looking for problems the technology could address, says IBM Research’s Dario Gil 

https://www.wsj.com/articles/the-decade-of-quantum-computing-is-upon-us-ibm-exec-says-11614802190

### March 9th: Honeywell Quantum Computer Model H1 Sets A New Measured Quantum Volume Record Of 512

> This week, with a measured quantum volume of 512, Honeywell’s System Model H1 became the highest performing quantum computing system in the world in terms of measured performance.

https://www.forbes.com/sites/moorinsights/2021/03/09/honeywell-quantum-computer-model-h1-sets-a-new-measured-quantum-volume-record-of-512/?sh=20efa58d7813

### March 24th: Crucial Milestone for Scalable Quantum Technology: 2D Array of Semiconductor Qubits That Functions as a Quantum Processor 

> The heart of any computer, its central processing unit, is built using semiconductor technology, which is capable of putting billions of transistors onto a single chip. Now, researchers from the group of Menno Veldhorst at QuTech, a collaboration between TU Delft and TNO, have shown that this technology can be used to build a two-dimensional array of qubits to function as a quantum processor. 

https://scitechdaily.com/crucial-milestone-for-scalable-quantum-technology-2d-array-of-semiconductor-qubits-function-as-a-quantum-processor/

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)