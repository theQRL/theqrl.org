---
layout: blog-post
slug: last-month-at-qrl-february-2022
date: 2022-02-28
author: "Jack Matier"
title: "Last Month at QRL — February 2022"
summary: "QRL Mainnet v3 landed successfully! Geometry Labs were pleased to release 'lattice-algebra', an elegant, high-performance cryptographic library."
featured_image: header.png
categories:
  - technical
features:
  - proof-of-stake
toc: true
---

## Highlights

### Lattice Algebra

{{< image "./images/hi.lattice.png" >}}

Presently, the Quantum Resistant Ledger (QRL) is a pioneering layer-1 blockchain protocol and decentralized communication layer. With long-term sustainability as a core value, QRL will be moving from Proof-of-Work to Proof-of-Stake along with capable smart-contracts, ensuring a long and safe future for the world's transactional data.

While we've made our Proof-of-Stake codebase "project Zond" [public](https://github.com/theQRL/zond), we're committed to not just succeeding on implementing Proof-of-Stake, but to do so with improved efficiency. This has required additional fundamental research around improving several critical crypto-systems, such as signature aggregation. 

With that in mind, The QRL Foundation partnered with [Geometry Labs](https://geometrylabs.io/), who are now pleased to announce "[lattice-algebra](https://github.com/geometry-labs/lattice-algebra)", an elegant, high-performance, cryptographic library on GitHub for use in blockchain systems integrating post-quantum security. This "[lattice-algebra](https://github.com/geometry-labs/lattice-algebra)" library will be used to prototype a variety of new features for the Quantum Resistant Ledger (QRL) protocol, such as lattice-based Proof-of-Stake signatures, trustless cross-chain atomic swaps (QRL↔BTC, QRL↔ETH, etc), and "lightning network" style payment channels.

More can be read on our [Introducing lattice-algebra blog](/blog/lattice-algebra-library/).

### QRL Mainnet v3

{{< image "./images/hi.mainnet.png" >}}

We're pleased to announced that the **QRL Mainnet Version 3 (codenamed Cesium) hard fork has been successful!**

This mainnet release is the result of [QRL Improvement Proposal #16 (QIP-016)](/qips/qip016/) which proposed to reduce QRL emissions in order to improve the network. As part of the QIP process, many of the [positive and negative considerations](/blog/qip016-reduce-emission-rate-of-the-network-prevote-synopsis/) were discussed at length before being put to our first on-chain vote resulting in the QIPs approval. The final determination can be found on the [QIP GitHub discussion page](https://github.com/theQRL/qips/pull/32#issuecomment-975645693).

More can be read about in our [release blog](/blog/qrl-mainnet-v3-successful/)

## Changelog

### theQRL/qrl-nft-microlinter (new repo)

As there's no proper way to do in-memory eslint-ing of JSON, the QRL NFT Microlinter was created to temporarily write to a file which is linted and cleaned up. Also now integrated into a dev version of the wallet.

Repository can be found at https://github.com/theQRL/qrl-nft-microlinter

### theQRL/nft-providers (new repo)

The providers repo is used by services within the QRL ecosystem (eg. wallet, explorer) to identify NFT providers utilizing the QRL blockchain.

Identities are available on a first-come / first-served basis for projects building post-quantum secure NFT solutions.

**[Add code generator](https://github.com/theQRL/nft-providers/pull/1)**

*   [[c7287](https://github.com/theQRL/nft-providers/commit/a388dde76ecc624e15b47de29ba5a3bc662c7287)] Add base setup
*   [[2e2c8](https://github.com/theQRL/nft-providers/commit/f913addb261e662cc6fc213d163984cc3552e2c8)] Merge branch 'theQRL:main' into main
*   [[c6d54](https://github.com/theQRL/nft-providers/commit/f3c3ca44eff23ebc8036a352a9eb34e5ac5c6d54)] Add providers.yml and code generator
*   [[9f306](https://github.com/theQRL/nft-providers/commit/9cc92583bd06c6b07afba28f0e39605445c9f306)] Add README

### theQRL/theqrl.org

**[QRL Mainnet Release v3 blog](https://github.com/theQRL/theqrl.org/pull/276)**

*   [[32a42](https://github.com/theQRL/theqrl.org/commit/e36d1917226f6bf43fdc4c7dd4b2dc4dabd32a42)] QRL Mainnet Release v3 blog
*   [[31653](https://github.com/theQRL/theqrl.org/commit/9930a011b8a1f49cff724be999ec9b5897e31653)] Minor roadmap changes
*   [[5be0a](https://github.com/theQRL/theqrl.org/commit/eda4054a9cedc56ddfdef9abfe65c9e4c695be0a)] Countdown changes (will be removed next update)
*   [[49e56](https://github.com/theQRL/theqrl.org/commit/24a2ef075a49919ce6ae205d5c7a5ded2a249e56)] Add geometry labs profile
*   [[eaa60](https://github.com/theQRL/theqrl.org/commit/f928891063e6699600c77b54080a60fcdf6eaa60)] Part of roadmap adjustments.

**[New lattice-algebra blog](https://github.com/theQRL/theqrl.org/pull/275)**

*   [[e2cdb](https://github.com/theQRL/theqrl.org/commit/61ac0776dd024bdb4cc4d32528e06b75028e2cdb)] Lattice algebra blog
*   [[e0f2c](https://github.com/theQRL/theqrl.org/commit/dd27e39718a80f0d0f2b159afa28f586e26e0f2c)] Countdown to mainnet v3 counter
*   [[131fd](https://github.com/theQRL/theqrl.org/commit/b3cb20c63afab6a5af76753f82672e71687131fd)] Repository count change
*   [[05b10](https://github.com/theQRL/theqrl.org/commit/0a4b026382fb38838f8784bba8bf3140c5605b10)] Additional citation (thanks to Quack from Discord)
*   [[f5773](https://github.com/theQRL/theqrl.org/commit/8f09dd8bd4e8f85cadd2b690e90d1f5d37ff5773)] Lattice algebra blog updates
*   [[9028c](https://github.com/theQRL/theqrl.org/commit/b54554f8446b48eb0dc17f431f3efc5a7489028c)] Proof-of-Stake stub

**[Last Month at QRL - January 2022](https://github.com/theQRL/theqrl.org/pull/274)**

*   [[c55ad](https://github.com/theQRL/theqrl.org/commit/fd5949d82d86de2270c333543c57c1d6eb1c55ad)] Update QIPs
*   [[211cf](https://github.com/theQRL/theqrl.org/commit/c5a0de563f28b57111669689f0cdf273c73211cf)] Last Month at QRL - January 2022
*   [[4687a](https://github.com/theQRL/theqrl.org/commit/9a44e32c9da1150838f4286e1beb44b43fb4687a)] A few changes

## Community Initiatives

### Generate QRL bootstrap files with a live node

*Tired of waiting for your node to sync?*

The QRL blockchain is a public ledger of all transactions that have ever been executed. It is constantly growing as 'completed' blocks are added to it with a new set of recordings. There's been some initiatives such as [qrl.co.in](https://qrl.co.in) that saves a bootstrap file, but this requires stopping the node, backing that up, before resuming the node again. This is an old practice done to prevent corrupt backups. Discord user 0xFF found a way to save QRL's blockchain data in a stable way while QRL node is running. 

It's now more easy to create bootstrap files and share it to help the community.

Code is here: https://github.com/0xFF0/QRL_bootstrap

## Media

### The World's 1st Steampunk Quantum Computer Resistant Blockchain Node

{{< youtube "-h7qayMZSK8" >}}

Michael Strike from the core QRL team gives us a full walkthrough of the custom node he's built. Not only is it creative and functioning, but it's also the the world's 1st steampunk Quantum Computer Resistant blockchain node.

## Quantum Computing News

### The Race to Build a Fault-Tolerant Superconducting Quantum Computer

> Quantum computers are theoretically far more powerful than classical computers on important tasks such as investigating novel battery designs or discovering new drugs, but they are currently too error prone for practical use. Now Amazon, Google, IBM, and others are pursuing a bevy of innovative strategies to develop fault-tolerant quantum computers based on superconducting circuits. - [IEEE](https://spectrum.ieee.org/fault-tolerant-quantum-computing)

### Quantinuum H1 Quantum Computer Beats Classical System at Game Designed To Test Quantum Mechanics

> Of the technologies tested, only the Quantinuum System Model H1-1, Powered by Honeywell, outperformed the classical results. Dalla Torre said classical computers return the correct answer only 87.5 percent of the time. The H1-1 returned the correct answer 97 percent of the time. (The team also tested the game on the now-retired System Model H0, which achieved 85 percent.) - [scitechdaily](https://scitechdaily.com/quantinuum-h1-quantum-computer-beats-classical-system-at-game-designed-to-test-quantum-mechanics/)

###  Quantum Machines claims unique ability to perform real-time quantum error correction 

> Quantum Machines Ltd., a startup with a hardware platform that makes quantum computers easier to build and operate, today said its latest Pulse Processor Unit, called “Hadamard,” is now generally available. - [siliconANGLE](https://siliconangle.com/2022/02/24/quantum-machines-claims-unique-ability-perform-real-time-quantum-error-correction/)


## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)