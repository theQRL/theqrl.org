---
layout: blog-post
slug: last-month-at-qrl-july-2021
date: 2021-08-01
author: "Jack Matier"
title: "Last Month at QRL — July 2021"
summary: "For the month of July, 2021: The future of post-quantum cryptography with Geometry Labs, Kaushal lands in UAE to start developer HUB, QRL Wallets on Bittrex Global re-enabled, and fault-tolerant error correction quantum developments"
featured_image: eom.july2021.png
categories:
  - technical
features:
  - enqlave
toc: true
---

## Overview

[Geometry Labs](https://geometrylabs.io/), a decentralized finance and cryptography research and development lab who specializes in applied cryptography to blockchain systems, has been working closely with QRL on its post-quantum PoS implementation and related systems. They were first introduced [In a blog as Insight Researchers](/blog/insight-researchers-partners-with-the-quantum-resistant-ledger/), but have since formed as Geometry Labs, working with projects such as Polkadot, Monero, and of course, Quantum Resistant Ledger. 

Practically, this means they’ve been working on lattice based cryptography and related components, including everything from aggregate one-time adapter signatures, to cross chain atomic swaps (ETH <> QRL) and other efficiencies. Last month we were happy to sit down with them in a two part series to cover what they’ve been working on and what that means for QRL.

On the exchange front, Bittrex Global has re-enabled withdraws and deposits for QRL wallets on July 11th, 2021 after being in maintenance for a few months. A special thanks goes out to Bittrex Global for their continued efforts in resolving. 

The mascot program, though exciting for some, posed enough criticism to warrant re-evaluation and discussions with the team and community. QRL’s end-goal has always been on-chain governance, and in that spirit, we’ve opted not to push things forward on this front at the current moment in time.

And at long last, Kaushal has arrived in Dubai to establish the UAE hub there. This hub aims to create a hub for developers who want to collaborate with their QRL counterparts in the UAE and the rest of the world. As Kaushal gets settled in to kick off the development side, quantum computing progress remains at a steady pace, with PsiQuantum getting granted another $450 million dollars to fully realize the first commercially viable quantum computer. Important to this milestone would be real-time fault-tolerant quantum error correction, which has also been realized by the team at [Honeywell in a paper released on arxiv](https://www.arxiv-vanity.com/papers/2107.07505/).

## Highlights

### The Future of post-quantum cryptography with Geometry Labs

{{< image "./images/highlight-geometry.png" >}}

#### Part I + Reddit AMA

{{< youtube "x0mByWsZArI" >}}

The Reddit AMA can be found at the link "[[AMA] Research team prototyping new cryptography for QRL](https://www.reddit.com/r/QRL/comments/oghjft/ama_research_team_prototyping_new_cryptography/)"

#### Part II + Live AMA

{{< youtube "IWqIgk2Vv5A" >}}

## Developments

### Kaushal arrives in Dubai to begin UAE developer hub

After a long journey, Kaushal Kumar Singh, our lead blockchain developer has arrived in the United Arab Emirates to build out a UAE developer hub. Since arriving in Dubai, he has been settling in and ensuring all the paper work is in order. After that point, he will begin preliminary work on orchestrating the framework and ecosystem for developers with all of the necessary tools to make them, and the QRL foundational project, successful.

### QRL Wallets on Bittrex Global have been re-enabled

It's now possible to deposit and withdraw from the QRL wallet on Bittrex Global. 
https://global.bittrex.com/Market/Index?MarketName=BTC-QRL

We'd like to thank the Bittrex Global team for their continued efforts in communicating and resolving the momentary QRL wallet maintenance period to the highest security standards we come to expect. We also understand the frustration of existing users and the expectation to react quickly to ensure the best user experience possible, so a special thanks to the community for their continued patience and civility. 

While all wallet issues and balances should be accounted for, if there's anything that seems amiss, please submit a request to Bittrex Global's caring support team.
https://bittrexglobal.zendesk.com/hc/en-us/requests/new

### Changelog

- theqrl.org: [[Add ahrefs site verification for crawling speed improvement]](https://github.com/theQRL/theqrl.org/pull/234)
- EnQlave: Changes in contractListener to replay the missed events in case of network issue.
- EnQlave: Fork recovery support for the last 64 blocks
- EnQlave: UI Skeleton V2

## Advocacy/media

### Video: PoS vs PoW - Which is Superior?

{{< youtube "M4Sdus3Ct74" >}}

## Mentions

### Are they REALLY Quantum Resistant Cryptocurrencies? | QRL, IOTA, Mochimo, Cardano

{{< youtube "BfJBQzBIb_A" >}}

### Is Bitcoin (BTC) Safe from Grover's Algorithm?

> As you can see, the QRL team is thoroughly preparing for a post-quantum future. Their mission is an increasingly urgent one, as quantum computing continues to advance by leaps and bounds. - [benzinga](https://www.benzinga.com/markets/cryptocurrency/21/07/22200214/is-bitcoin-btc-safe-from-grovers-algorithm)

## Advances in quantum computing

### Honeywell Sets Another Record For Quantum Computing Performance

> The 10-qubit System Model H1 recently achieved a quantum volume of 1024, the highest measured to date.  It is the third time in 10 months the System Model H1 has eclipsed its own record for quantum volume, a measure of the overall capability and performance of a quantum computer. - [honeywell](https://www.honeywell.com/us/en/news/2021/07/honeywell-sets-another-record-for-quantum-computing-performance)


### Realization of real-time fault-tolerant quantum error correction

> Large-scale quantum computers promise to solve classically intractable problems in areas such as quantum simulation, prime factorization, and others. However, these complex quantum computations demand levels of precision that are currently unachievable due to imperfect control and noise in gate operations between physical qubits [...] Using a polynomially scaling number of physical qubits, the probability of a computation being corrupted can be suppressed exponentially, making arbitrarily precise quantum computation feasible. - [arxiv](https://www.arxiv-vanity.com/papers/2107.07505/)

### PsiQuantum Closes $450 Million Funding Round to Build the World’s First Commercially Viable Quantum Computer

> Company on track to build a fault-tolerant quantum computer ready to tackle breakthrough applications in climate, energy, life sciences and beyond. - [businesswire](https://www.businesswire.com/news/home/20210727005393/en/PsiQuantum-Closes-450-Million-Funding-Round-to-Build-the-World%E2%80%99s-First-Commercially-Viable-Quantum-Computer)

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)