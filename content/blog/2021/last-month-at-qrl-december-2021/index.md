---
layout: blog-post
slug: last-month-at-qrl-december-2021
date: 2022-01-01
author: "Jack Matier"
title: "Last Month at QRL — December 2021"
summary: "The QRL Winter Hackathon. On-chain NFT's coming to QRL. QIP-017 (wallet v3 format), wallet v1.8 release, and a lot more!"
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### NFT's are coming to QRL

{{< image "./images/highlight.nft.png" >}}

Preliminary support for non-fungible tokens (NFT's) on the QRL blockchain is here on devnet with a **full NFT launch expected in 2022**.

In preparation for our NFT launch, **we're looking for any and all NFT artists who would like to have the first NFT's minted on the QRL blockchain**, and as it stands, **the first post-quantum secure NFT's in existence** live on mainnet! If you *are* an NFT artist, send an email to [info@theqrl.org](mailto:info@theqrl.org?subject=NFT%20Artist) expressing your interest. If you know someone who is one, send them this way!

As a quick primer, non-fungible tokens are assets that have attributes which determine a unique 'use-value'. For NFT-art, this is often correlated with rarity, but other use-cases for NFT's includes real-estate and gaming marketplaces. Taking it further, it's possible to offer fractional values of a non-fungible tokens allowing for distributed ownership of any asset. 

Because a huge component of NFT's is with proving ownership of assets, it's critical that the security that underlies NFT's is unforgiving. This *isn't* the case with other NFT projects as it stands, which represents an estimated value of [22bn](https://www.theguardian.com/technology/2021/dec/16/nfts-market-hits-22bn-as-craze-turns-digital-images-into-assets) that's open to theft for anyone with a powerful enough quantum computer.

Be sure to read more in our [previous blog](/blog/announcing-preliminary-quantum-secure-nfts-and-cta/)!

### 2021 Winter Hackathon

{{< image "./images/highlight.hackathon.png" >}}

Last month we also launched a [QRL Winter hackathon](/blog/qrl-winter-hackathon-2021/) which will be giving away over 10,000 QRL in the form of daily hackathon rewards and a final prize amount. So far, over 1500 QRL has been distributed!

Projects have included:

1. Getting QRL to running a raspberry Pi, lead by 0xFF
2. QRL Awareness / Bridging the gap with, lead by ompanime
3. Kvantumo Holidays background, lead by happysmash
4. QRL on Android, lead by 0xFF
5. QRL on Windows, lead by 0xFF

Check out the projects and their current status from our [QRL Winter Hackathon 2021 Projects Overview](/blog/qrl-winter-hackathon-2021-projects/) blog. For those that participated in the hackathon in the form of a project, the QRL team will be trying everything out for the final prize distribution! Stay tuned for a hackathon summary blog!

We couldn't be more happy with the work that everyone has put in over the holidays and what has been accomplished! If you missed out, we will be looking to do this again in the future! If you have *ideas* to improve the next hackathon, we're all ears (and eyes) and would love to hear about them.

{{< image "./images/rasp2.png" >}}

## Other developments

### QIP-017: A Proposed v3 Wallet Format & Use of scrypt/AES-256-GCM

This QIP proposes a ‘version 3’ wallet file format with enhancements to the encryption to reduce the risk of funds loss when an encrypted wallet file is publicly exposed.

Be sure to read the [full breakdown](/qips/qip017/), and if you have any thoughts and considerations, we'd ask for you to please [contribute your thoughts on GitHub](https://github.com/theQRL/qips/pull/37).

### QRL Wallet Release version 1.8

QRL Wallet Release v1.8 comes with both additional platform support and extra token functionality. 

For platform support, this now includes Windows 11 and Apple Silicon. Included with this is the ability to filter tokens while keeping a local state of what tokens you decide to filter. 

As always, you can download the release from our [downloads page](/downloads/).

### Changelog

- [Implement Dilithium Rust implementation and switch Kyber to use existing crate # 175](https://github.com/theQRL/qrllib/pull/175)
- [Add shasha Rust implementation](https://github.com/theQRL/qrllib/pull/176)
- [Fix for Ledger Set XMSS/OTS index & version display #509](https://github.com/theQRL/qrl-wallet/pull/509/files) 
- [Add style improvements to QIPS #265](https://github.com/theQRL/theqrl.org/pull/265) 

## Community initiatives

### QRLLight wallet release v1.4

Qrllight is a community created lightweight and minimalistic desktop QRL wallet developed by runforest and currently supported on the Linux platform. It features mainnet/testnet, adjustable fees, multi-output transactions and [more](/blog/community-qrllight-wallet-release-version-1.4/#whats-new-in-this-release).

To be expanded are additional platforms such as Apple Silicon as the QRLlib allows.

More information and screenshots can be found on the [announcement blog](/blog/community-qrllight-wallet-release-version-1.4/).

### QRL Coins!

Most of the first batch of QRL coins (spearheaded by James P) have been claimed. If you would like a coin, be sure to contact James P in [Discord](/discord).

Claimed Numbers:
1-14, 16-67, 69, 77, 80, 88, 93, 96, 99, 100

Unclaimed numbers:
15, 68, 70-76, 78-79, 81-87, 89-92, 94-95, 97-9

{{< image "./images/coin.png" >}}


### Russian article campaign

One of Mike Z's (known as 4d5a's) initiatives have been expanding the reach of QRL to other regions. This month Russia was targeted with two different articles published on bits.media (a popular Russian cryptocurrency news site).

But articles *are* in russian, but can be translated using one of the many online translation tools available.

#### First article: QRL Blockchain: Post-Quantum Cryptography and Security of Cryptoassets

Блокчейн QRL: постквантовая криптография и безопасность криптоактивов
- https://bits.media/pr/blokcheyn-qrl-postkvantovaya-kriptografiya-i-bezopasnost-kriptoaktivov/

#### Second article: Decentralized voting system launched on QRL blockchain mainnet (english translated title)

В основной сети блокчейна QRL запущена система децентрализованного голосования
- https://bits.media/pr/v-osnovnoy-seti-blokcheyna-qrl-zapushchena-sistema-detsentralizovannogo-golosovaniya/

## New media

### Video: Understanding Quantum Technologies with author Olivier Ezratty

Olivier Ezratty is the mastermind who put together a cohesive 800 page e-book on "Understanding Quantum Technologies" which covers everything from the history of quantum computing, to quantum technology, software, and cryptography, including the organisations involved. Think you might be interested? Well it's [free to give it a read](https://www.oezratty.net/wordpress/2021/understanding-quantum-technologies-2021/)!

Before or after reading, do enjoy an interview with the man himself.

{{< youtube "gyRBwGUIR20" >}}

### Video: The QRL Show - Community Edition w/ 4d5a | Quantum Threat, Bitcoin Early Days, & more

Mike Z, (known as 4d5a), probably doesn't need an introduction to many who are involved in the community [Discord](/Discord). 

For those unfamiliar, he is a Principal Threat Intelligence Researcher at Advintel and community contributor to the QRL working on areas to improve the educational outreach to the project. In this episode, @4d5a shares with us his background, what attracted him to the QRL project, the quantum threat, communicating to accredited investors/technologists and different groups, and predictions on how Y2Q will go down.

{{< youtube "xMV-lY9u_yc" >}}

## Quantum computing news

### Quantum computing heavyweight arrives as merger creates Quantinuum

> "Honeywell Quantum Solutions and Cambridge Quantum, two big companies in the nascent but potentially revolutionary quantum computing technology, completed merger plans to become a new company called Quantinuum on Tuesday. The new 400-employee company is a bigger competitor to tech giants like Google, IBM, Intel and Microsoft that also hope to cash in on quantum computing." - [cnet](https://www.cnet.com/tech/computing/quantum-computing-heavyweight-arrives-as-merger-creates-quantinuum/)

### Real-Time Error Correction for Quantum Computing

> "Random errors incurred during computation are one of the biggest obstacles to unleashing the full power of quantum computers. Researchers have now demonstrated a technique that allows errors to be detected and corrected in real time as the computation proceeds. It also allows error correction to be conducted several times on a single quantum bit (qubit) during the calculation [1]. Both features are needed to make the basic elements—the logical qubits—of a fully error-tolerant quantum computer that can be scaled up and used for applications beyond the specialized ones that these machines have tackled so far." - [APS Physics](https://physics.aps.org/articles/v14/184)


### Quantum computing use cases are getting real — what you need to know 

> "Accelerating advances in quantum computing are serving as powerful reminders that the technology is rapidly advancing toward commercial viability. In just the past few months, for example, a research center in Japan announced a breakthrough in entangling qubits (the basic unit of information in quantum, akin to bits in conventional computers) that could improve error correction in quantum systems and potentially make large-scale quantum computers possible. 1 And one company in Australia has developed software that has shown in experiments to improve the performance of any quantum-computing hardware" - [McKinsey Digital](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/quantum-computing-use-cases-are-getting-real-what-you-need-to-know)


## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)