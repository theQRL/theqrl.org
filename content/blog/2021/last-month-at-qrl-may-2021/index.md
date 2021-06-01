---
layout: blog-post
slug: last-month-at-qrl-may-2021
date: 2021-06-01
author: "Jack Matier"
title: "Last Month at QRL — May 2021"
summary: "Highlights: QRL transparency report 2020/2021, EnQlave smart contracts considered complete, the QRL show, and GlobalFoundries + PsiQuantum partnering on full-scale quantum computer"
featured_image: eom.may2021.png
categories:
  - technical
features:
  - enqlave
  - node
  - 
toc: true
---

## Highlights

### Annual QRL Foundation Transparency Report

{{< image "./images/highlight-report.png" >}}

We were happy to release the [Annual Project Transparency Report (PDF)](https://www.theqrl.org/reports/transparency-report--05-2021.pdf) which includes expenditures, financial runway, burn rate, recommendations, and a rundown on spending.

With extra funding, part of it will be put towards expanding our developer cohort with an expansion into UAE (United Arab Emirates). 

### Quantum News: GlobalFoundries and PsiQuantum partner on full-scale quantum computer

{{< image "./images/highlight-quantum.png" >}}

On May 5th, 2021 - [PsiQuantum](https://psiquantum.com/), the leading quantum computing company focused on delivering the first useful quantum computer, and [Globalfoundries](https://www.globalfoundries.com/), one of the three tier-one semiconductor manufacturing company, announced a partnership after four years of quiet collaboration to build the world’s first full-scale commercial quantum computer, known as Q1, which aims to deliver a commercially viable quantum computer with one million qubits.

From the [press release](https://globalfoundries.com/press-release/psiquantum-and-globalfoundries-build-worlds-first-full-scale-quantum-computer?utm_source=HomepageRotator&utm_medium=gf.com&utm_campaign=Quantum): 

> PsiQuantum’s Q1 system represents breakthroughs in silicon photonics, which the company believes is the only way to scale to 1 million-plus qubits and beyond and to deliver an **error-corrected, fault-tolerant, general-purpose** quantum computer.

As of the date of a recent [Forbes article](https://www.forbes.com/sites/moorinsights/2021/05/10/last-weeks-big-technology-reveal-psiquantums-previously-secret-q1-photonic-quantum-computer-with-globalfoundries/?sh=3ba6598c196d), Globalfoundries has processed over a thousand PsiQuantum 300-millimeter wafers already, the first-step that proves silicon photonics for quantum computers can be manufactured to scale. It concludes:

> In 13 months, PsiQuantum has covered much ground. It is much further along than most people realized, including myself. The combined efforts of PsiQuantum and Globalfoundries are impressive.  Still, there is a lot more to be done before it is proven that a fault-tolerant million-qubit quantum computer can be built. Admittedly, it appears that O'Brien and the team may have chosen the fastest path to make such a machine. By the middle of the decade, PsiQuantum and Globalfoundries hope to create all the manufacturing lines and processes needed to begin assembling the final quantum machine it envisioned. 

PsiQuantum CEO Jeremy O'Brien has outlined in a video how, by the middle of this decade, PsiQuantum will have completely stood up all the manufacturing lines to begin assembling a final machine: a fault-tolerant, error-corrected quantum computer with hundreds of logical qubits and billions of gates.

{{< youtube "WQRmSOKgMPA" >}}

This is all on the [tail of raising $215m](https://thequantumdaily.com/2020/04/07/psiquantum-quantum-computer-startup-raises-230-million-possibly-largest-qc-investment-to-date-2/). With Xanadu, (another photonic quantum computing company) raising $100m (See our quantum news section), it's clear investors have a lot of faith in this technology.

## Development updates

### EnQlave: Smart contract's considered complete

A few *months* ago, "[*Weeks, not months*](/blog/last-month-at-qrl-march-2021/)" was stated with regards to the timeline for EnQlave. While optimistic, work has continued and we've hit a *milestone* by reaching what can be considered a **release candidate** for the smart contract side of EnQlave. 

The solidity smart contract includes support for XMSS, hashchains and four different ERC token standards:

- [ERC20](https://eips.ethereum.org/EIPS/eip-20): The main Ethereum token standard
- [ERC721](https://eips.ethereum.org/EIPS/eip-721): Non-Fungible Tokens (NFT's)
- [ERC777](https://eips.ethereum.org/EIPS/eip-777): An advanced token standard similar to ERC20's
- [ERC1155](https://eips.ethereum.org/EIPS/eip-1155): Multi-token standard

The UI is in progress and was in development along with the work on the EnQlave smart contracts, but with the smart contract side considered complete, there's fewer moving API interfaces to contend with. 

The other two remaining components are the *bridge*, which includes Oracle and Uniswap, and finally, the audit, performed by x41 D-Sec.

### Node update v2.1.2 (+v2.1.0, 2.1.1)

Support for Ubuntu 20 & updates to various build dependencies (v2.1.0, 2.1.1, v2.1.2)

To update, first, stop your node, then run:
```
pip3 install qrl --upgrade
```
Then start your node again
```
start_qrl
```
When you run `qrl --version` it should say `QRL Command Line Interface, version 2.1.2 python`

### Explorer v1.2.0 released

- Added volt-mine pool
- Added pacificpool, fastpool, gntl.co.uk, pool-pay, pool2mine, and skypool,
- Increased node version (v7 -> v12), crypto-js v4.0.0 and updated other dependencies
- SHA512 fixed (through node update)

Web explorer: https://explorer.theqrl.org/
Github: https://github.com/theQRL/block-explorer

## Advocacy

### The QRL Show: Overview

One new thing we've been doing is broadcasting live show's through YouTube and Facebook, which aims to improve things a few key ways:

1. By providing another platform to interact with others on social media. 
2. Improve transparency by answering questions.
3. Allow for further discoverability due to platforms increased emphasis on encouraging live content.

### Bitcoin vs Gold vs Quantum Computers? | The QRL Show

{{< youtube "ow9UpQeVoWQ" >}}

- [[0:00]((https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=0s))] Intro
- [[0:24](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=24s)] Bitcoin vs Gold vs Quantum Computers
- [[1:26](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=86s)] What gives gold value?
- [[4:15](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=255s)] Opponents often cite that Bitcoin has NO intrinsic value
- [[13:13](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=793s)] So how does the Quantum Resistant Ledger tie into this?
- [[19:14](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=1154s)] Developing ecosystem with enQlave (post-quantum security).
- [[20:33](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=1233s)] Where’s a good place to start for those who want to “get their toes wet” regarding the Quantum Threat?
- [[23:13](https://www.youtube.com/watch?v=ow9UpQeVoWQ&t=1393s)] AMA with Strike/Ryan of QRL

### CBDC's, Crypto, & AMA w/ Michael Strike | The QRL Show

{{< youtube "dHu1_qqhX9A" >}}

- [[00:00](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=0s)] Introduction
- [[01:30](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=90s)] What are CBDC's (Central Bank Digital Currencies)?
- [[05:00](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=300s)] What is the impetus behind blockchain and is the ethos or system of values compatible with a CBDC?
- [[11:15](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=675s)] What are the positive sides of CBDC's?
- [[14:30](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=870s)] How will CBDCs affect the widespread use of cryptocurrencies or the need for crypto altogether?
- [[18:18](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=1098s)] Does the decline of physical cash in societies, and in turn anonymous payments, call for the need of CBDCs?
- [[19:30](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=1170s)] Will CBDCs protect the privacy of users?
- [[24:00](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=1440s)] What is the role of the Federal Reserve?
- [[28:42](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=1722s)] What is a World Reserve Currency?
- [[31:32](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=1892s)] How does QRL protect ones digital assets?
- [[34:20](https://www.youtube.com/watch?v=dHu1_qqhX9A&t=2060s)] QRL AMA

### Survey: Improving Advocacy and Outreach by Reducing Space (Results)

In all, there were 44 open ended responses. While we've read every answer given, they've also been tagged and tallied to give an aggregate idea about the information provided. 

We wanted to look at the difficulties people experience when introducing their friends, family, and acquaintances to QRL and get a sense of what can be done to close that gap.

The two questions were:

1. When introducing QRL to your friends, family, or coworkers, what prevented (or caused the most hesitation) from them getting into QRL?
2. What do you think would really help you the most to convince others of QRL?

The most notable difficulty has been exchanges, liquidity, price action and related issues, accounting for just over half of reluctance at 51%. On a related note, CMC rank and price also remains as a key hesitation. 

On the Education front (representing 33%), key blockers can generally be divided into 4 key areas: QRL, Blockchain, Quantum (Security, Computing, Threat), and content issues. For QRL, a lot of people struggle to understand its use cases or XMSS trees. Others have a hard time grasping why QRL would be needed when quantum computers would be powerful enough to break todays encryption.

The biggest area that can be improved in helping communicate is issues surrounding the quantum threat. That is, the quantum threat itself, along with its timeline, security, and some *misconceptions* around key issues such as: 

- The difficulty of updating existing blockchains to post-quantum cryptography.
- The misconception that if quantum computers exist, there's bigger issues (negligent that the industry is preparing!)

Finally, the lack of mainstream coverage causes some hesitation. And some need a few features to be fulfilled before considering QRL. The top two missing features are QRL smart contracts and private transactions.

While we're always open to suggestions, this survey was a more formal way to quantify things. *If you do* have suggestions, get in touch if there's anything we can do differently.

## QRL In the Media

### Breaking Bitcoin: ECDSA vs XMSS

> An ECDSA employs asymmetric encryption to generate public/private key pairs (what crypto users employ to send and receive coins). Consequently, a classical computer will require at least 10 billion years’ worth of brute-force computing time to derive a private key from a public key. 
>
> The advent of quantum computing, however, suggests that this encryption safeguard may soon be broken. 

https://www.benzinga.com/markets/cryptocurrency/21/05/21283700/breaking-bitcoin-ecdsa-vs-xmss

### Quantum and Cryptography. Do we need to worry about the rise of Quantum Computing?

> There is increasing interest in Quantum Secure schemes that can make it harder or impossible for Quantum algorithms to break. Already there are even some cryptocurrencies that are based around being Quantum secure or quantum-resistant technologies – one is named QRL for Quantum Resistant Ledger. QRL employs is a NIST-approved post-quantum secure digital signature scheme. Particularly as cryptocurrencies have taken hold especially among the public, there could be worries that coins or tokens are not fundamentally secure and therefore no surprise that schemes such as QRL with the token by the same name have emerged.

https://quantumzeitgeist.com/quantum-and-cryptography-do-we-need-to-worry-about-the-rise-of-quantum-computing/

## Quantum News

### Xanadu receives $100m (USD) series B investment

> Xanadu announced a Series B funding led by Bessemer Venture Partners, one of Silicon Valley’s oldest such firms. Funding to date for the five-year-old company now totals $145 million, said Christian Weedbrook, founder and chief executive of Xanadu.

https://www.wsj.com/articles/xanadu-lands-100-million-as-investments-pour-into-quantum-computing-11621944002

### Germany to invest €2B (2.4b USD) in quantum technologies

> In one of the biggest spending plans of its kind in the world, the government commits to develop country’s first quantum computer 

https://sciencebusiness.net/news/germany-invest-eu2b-quantum-technologies

### MIT turns “magic” material into versatile electronic devices

> MIT researchers and colleagues have turned a “magic” material composed of atomically thin layers of carbon into three useful electronic devices. Normally, such devices, all key to the quantum electronics industry, are created using a variety of materials that require multiple fabrication steps. The MIT approach automatically solves a variety of problems associated with those more complicated processes.
> 
> As a result, the work could usher in a new generation of quantum electronic devices for applications including quantum computing. Further, the devices can be superconducting, or conduct electricity without resistance. They do so, however, through an unconventional mechanism that, with further study, could give new insights into the physics of superconductivity. The researchers report their results in the May 3 issue of Nature Nanotechnology.

https://news.mit.edu/2021/mit-turns-magic-material-versatile-electronic-devices-0519

### Google Aims for Commercial-Grade Quantum Computer by 2029 

> Alphabet Inc.’s Google plans to spend several billion dollars to build a quantum computer by 2029 that can perform large-scale business and scientific calculations without errors, said Hartmut Neven, a distinguished scientist at Google who oversees the company’s Quantum AI program. The company recently opened an expanded California-based campus focused on the effort, he said.
>
> “We are at this inflection point,” said Dr. Neven, who has been researching quantum computing at Google since 2006. “We now have the important components in hand that make us confident. We know how to execute the road map.”

https://www.wsj.com/articles/google-aims-for-commercial-grade-quantum-computer-by-2029-11621359156

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/).