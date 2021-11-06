---
layout: blog-post
slug: last-month-at-qrl-october-2021
date: 2021-11-05
author: "Jack Matier"
title: "Last Month at QRL — October 2021"
summary: "Seminal on-chain voting commences. Original developer, Charlie, resumes development on EnQlave, and UAE developer expansion kicks off"
featured_image: header.png
categories:
  - technical
features:
  - qrl-wallet
toc: true
---


## Seminal on-chain voting started for QIP-016 to reduce network emissions

{{< image "./images/hl.qip016.png" >}}

In August, QIP-016, a proposal to reduce network emissions emerged and established a great amount of *conversation* and some amount of controversy. As it had significant implications for the tokenomics of the QRL project, and the community deemed it as urgent to take it to a vote, work was halted on EnQlave and moved to on-chain voting as well as a proper [QRL Improvement Proposal restructure](https://github.com/theQRL/qips/pull/34) that would successfully work in conjunction with on-chain voting.

In late September, [on-chain voting was released](/blog/decentralized-on-chain-voting-enters-public-testing/) as part of our testpilot program, and later debuted as [vote-qrl](https://github.com/theQRL/vote-qrl/) for anyone to hold their own on-chain votes for whatever they wish.

If you haven't already participated, voting is still open until **November 16th, 2021** so vote if you can!

If you're not already familiar with QIP-016, you'll want to check out the [pre-vote synopsis first](/blog/qip016-reduce-emission-rate-of-the-network-prevote-synopsis/), and then head over to [vote.theqrl.org](https://vote.theqrl.org/) and make your selection by creating a message transaction with the indicated message field. More instructions can be found on our [guide to voting on QIP-016](/blog/guide-to-voting-on-qip-016/) blog.

## General updates

### EnQlave

Charlie Thompson, the person who first started work on EnQlave last year and brought its first iteration to an audit by the end of 2020, is resuming work on EnQlave. There will be a few weeks of becoming familiar with the fresh codebase involving not just XMSS, but hash-chains as well.

After that, development should resume.

### Developer expansion

After landing in the UAE and getting through the paperwork, work has commenced on finding developers. Over the last month we've started the expansion with several interviews and we'll need to further evaluate a few candidates before finally on-boarding into development. 

Right now we're looking to on-board three at a time, with an eventual development team size of 6-10 developers, depending on capacity and resources needed.

Key areas of focus initially will be Proof-of-Stake and Smart-Contracts, including a rewrite of the code-base to Golang.

### Proof-of-Stake

Designing a state-of-the-art post-quantum secure Proof-of-Stake network is no small feat. At this point, while there will always be more research to do in the blockchain space, certain areas of research are coming to fruition.

We're really looking forward to continuing work on our Proof-of-Stake protocol, which was last in [devnet](/blog/project-zond-qrls-proof-of-stake-code-is-released-to-the-public/).


## Changelog

### GitHub

#### [new repo] theQRL/vote-qrl

[theQRL/vote-qrl](https://github.com/theQRL/vote-qrl/) is the site deployed at https://vote.theqrl.org using nodejs and meteor.

#### [new repo] theQRL/votes

[theQRL/votes](https://github.com/theQRL/votes/) is a historical record of on-chain votes coordinated through The QRL Foundation.

#### theQRL/qips

- **[PR: 36 - QIP016 editorial edits/review and move from "Incomplete Draft" to "Open Proposal"](https://github.com/theQRL/qips/pull/36)**
- **[PR: 35 - QIP Fixes for localhost](https://github.com/theQRL/qips/pull/35)**
- **[PR: 34 - QIP Restructure](https://github.com/theQRL/qips/pull/34)**

#### theQRL/qrl-cli

- **[PR: 57 - Send quantity offline functionality](https://github.com/theQRL/qrl-cli/pull/57)**

#### theQRL/theqrl.org

- **[PR: 247 - New content: Youtube guest invite](https://github.com/theQRL/theqrl.org/pull/247)**
- **[PR: 246 - Clarify voting parameters, qip 015b](https://github.com/theQRL/theqrl.org/pull/246)**
- **[PR: 245 - Update vote end date. Add vote URI](https://github.com/theQRL/theqrl.org/pull/245)**
- **[PR: 244 - Add areas of discussion for blog release](https://github.com/theQRL/theqrl.org/pull/245)**
- **[PR: 243 - blog: QIP-016 pre-vote synopsis](https://github.com/theQRL/theqrl.org/pull/243)**
- **[PR: 242 - new content: Last Month at QRL - September 2021](https://github.com/theQRL/theqrl.org/pull/241)**

### Social

#### New Matrix server

For those that don't know, [Matrix](https://matrix.org/) an open network for secure, decentralized community, apache licensed and fully open source. 

Well, we're happy to say, with the thanks of our community, that QRL is now on [Matrix](https://matrix.org/) and is bridged with the main QRL channel in Discord! Come and [join](https://matrix.to/#/#theqrl:matrix.org) us for a friendly chat.

### Third-party

#### Peer 2 Peer Quanta Coffee Trades moves to opencart from ebay

Getting your QRL fresh daily has just improved by moving from ebay to opencart. Give them a try at [p2pq.trade/ct/](https://p2pq.trade/ct/index.php?route=product/category&path=59).

## Quantum news

### A New Quantum Computing Method Is 2,500 Percent More Efficient

> We just moved years closer to viable quantum computers.
>
> A company has revealed the results of benchmarking experiments that demonstrate how an advanced error-suppression method increased the probability of success for quantum computing algorithms to succeed on real hardware, according to a press release shared with Interesting Engineering via email.
>
> And the new method increased the likelihood of success by an unprecedented 2,500%.
> 
> \- [interestingengineering](https://interestingengineering.com/a-new-quantum-computing-method-is-2500-percent-more-efficient)

### Quantum computer maker Rigetti to go public via $1.5 bln SPAC deal

> OAKLAND, Calif., Oct 6 (Reuters) - Quantum computer maker Rigetti & Co Inc said on Wednesday it will go public through a merger with a blank-check firm in a deal that potentially values the combined company at $1.5 billion.
> 
> \- [reuters](https://www.reuters.com/technology/quantum-computer-maker-rigetti-go-public-via-15-bln-spac-deal-2021-10-06/)


### Scientists are one step closer to error-correcting quantum computers

> Mistakes happen — especially in quantum computers. The fragile quantum bits, or qubits, that make up the machines are notoriously error-prone, but now scientists have shown that they can fix the flubs.
> 
> Combining the power of multiple qubits into one can solve the error woes, researchers report October 4 in Nature. Scientists used nine qubits to make a single, improved qubit called a logical qubit, which, unlike the individual qubits from which it was made, can be probed to check for mistakes.
>
> \- [ScienceNews](https://www.sciencenews.org/article/quantum-computer-error-correction-multiple-qubits-detect-mistakes)

### China says it has a quantum computer a million times more powerful than Google’s 

> Researchers from the University of Science and Technology of China recently published a paper indicating they’ve created a quantum computer that’s one million times faster than Google’s Sycamore machine.
>
> According to a report from the Global Times, the Chinese system “is 10 million times faster than the current fastest supercomputer and its calculation complexity is more than 1 million times higher than Google’s Sycamore processor.”
> 
> \- [thenextweb](https://thenextweb.com/news/china-says-has-quantum-computer-1-million-times-more-powerful-googles)

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)