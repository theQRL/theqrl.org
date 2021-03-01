---
layout: blog-post
slug: last-month-at-qrl-february-2021
date: 2021-03-01
author: "Jack Matier"
title: "Last Month at QRL — February 2021"
summary: "EQRT's have been successfully tested over Uniswap on the Ethereum Testnet! QRL-CLI: Added Generate-Shared-Keys for the Ephemeral Messaging System. Video: The QRL Show Ft. Ethan Hansen From Quantum Computing Now"
featured_image: eom.feb2021.png
images: 
  - eom.feb2021.png
categories:
  - technical
features:
  - walletd-rest-proxy
  - enqlave
  - zeus
  - qips
toc: true
---

## Development updates

### EnQlave: EQRT's have been successfully tested over Uniswap on the Ethereum Testnet!

Over the last month, we have successfully tested our Ethereum Wrapped Quantum Resistant QRL tokens (EQRT's) over Uniswap on the Ethereum Testnet!

In order to make EQRT's compatible with Uniswap and other DEX's, we have implemented a whitelisting feature. Addresses which are part of this whitelist don't have the same strict requirements to be post-quantum secure like other EQRT's, which allows for DEX specific ERC20 functions to work. 

For tokenswap functionality between the QRL mainnet network and Ethereum, work has begun on ensuring everything remains to be decentralized. A database for tracking an addresses XMSS public keys, hash chains & OTS keys, has also been added for a better UI experience.

### Changelog

- [walletd-rest-proxy](https://github.com/theQRL/walletd-rest-proxy): Regenerated qrl.pb.go file, a proxy service for wallet functionality
- [theqrl.org](https://github.com/theQRL/theqrl.org): Added subscription page to website + opengraph content
- [zeus-proxy](https://github.com/theQRL/zeus-proxy): Upgrade meteor to v2.0 + tidying
- [zeus](https://github.com/theQRL/zeus): OTS Bar, New Balance component and FAB-ed bookmarks
- [zeus](https://github.com/theQRL/zeus): Messages in TransferTx
- [qrl-cli](https://github.com/theQRL/qrl-cli): Add {generate-shared-keys} for Ephemeral Message Systems and additional cleanup
- [qips](https://github.com/theQRL/qips): QRL Improvement Proposal's Repo Maintenance & Tidy

Note: This changelog is not exhaustive! Be sure to check out our audited, MIT open-source, enterprise-grade codebase on github at [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/).

## Advocacy

### Video: Is Bitcoin a Ponzi Scheme?

{{< youtube "fMxiYDNZkS4" >}}

- [0:00](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=0s) Intro 
- [0:18](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=18s) Episode Overview
- [1:00](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=60s) Quick History Lesson + defining what a Ponzi Scheme is
- [2:48](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=168s) Is Bitcoin a Ponzi Scheme?
- [9:27](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=567s) If Bitcoin is not a Ponzi scheme, a pyramid scheme, etc....then what risks does it potentially face?
- [15:29](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=929s) What our project is about
- [16:45](https://www.youtube.com/watch?v=fMxiYDNZkS4&t=1005s) How to get started + learn more about The QRL

### Video: QRL Show featuring guest Ethan Hansen from "Quantum Computing Now" - Let's Talk Quantum/Blockchain!

{{< youtube "cEZgxWxANtE" >}}

- [0:00](https://www.youtube.com/watch?v=cEZgxWxANtE&t=0s) Intro 
- [0:19](https://www.youtube.com/watch?v=cEZgxWxANtE&t=19s) Episode Overview
- [1:09](https://www.youtube.com/watch?v=cEZgxWxANtE&t=69s) What do you know about the QRL?
- [4:10](https://www.youtube.com/watch?v=cEZgxWxANtE&t=250s) How did you get involved in the field of quantum computing? Ethan internship at IBM
- [6:21](https://www.youtube.com/watch?v=cEZgxWxANtE&t=381s) What is the Quantum Dunning Kruger Effect?
- [9:00](https://www.youtube.com/watch?v=cEZgxWxANtE&t=540s) What commonalities have you found across different quantum experts you’ve interviewed?
- [14:39](https://www.youtube.com/watch?v=cEZgxWxANtE&t=879s) Correlation to History regarding Quantum Computing
- [17:50](https://www.youtube.com/watch?v=cEZgxWxANtE&t=1070s) Take on the quantum threat
- [29:22](https://www.youtube.com/watch?v=cEZgxWxANtE&t=1762s) QRL Quick Fire
- [31:48](https://www.youtube.com/watch?v=cEZgxWxANtE&t=1908s) Where are you most excited about progress being made in the space?
- [33:09](https://www.youtube.com/watch?v=cEZgxWxANtE&t=1989s) Closing thoughts + learning more about The QRL

## Quantum News

### Feb 3rd: Microsoft opens its Azure quantum computer cloud service to the public

> Azure Quantum shows the growing commercial possibilities for the revolutionary form of computing.

https://www.cnet.com/news/microsoft-opens-its-azure-quantum-computer-cloud-service-to-the-public/

### Feb 5th: Breakthrough in quantum photonics promises a new era in optical circuits

> "This impressive growth and material science work stretches over three decades of dedicated effort before research activities in quantum information were in the mainstream," Pomrenke said. "Initial AFOSR funding and resources from other DoD agencies have been critical in realizing the challenging work and vision by Madhukar, his students, and collaborators. There is a great likelihood that the work will revolutionize the capabilities of data centers, medical diagnostics, defense and related technologies." 

https://phys.org/news/2021-02-breakthrough-quantum-photonics-era-optical.html

### Feb 16th: Making Quantum Computers a Reality: Unique Majorana Particles Found

> According to recent theories, unique particles called "Majorana fermions" can protect their quantum states against external perturbations and thus could be used to build stable quantum computers, provided these particles can be achieved in solid materials ... And, they have now succeeded—A study published in Nature Communications, led by Prof. Kwang-Yong Choi from Chung-Ang University, Korea, unveiled the existence of Majorana fermions in α-RuCl3, a graphene-like quantum magnetic material

https://www.prnewswire.com/news-releases/making-quantum-computers-a-reality-unique-majorana-particles-found-in-a-magnetic-material-shows-cau-301228461.html

### Feb 18th: D-Wave demonstrates performance advantage in quantum simulation

> D-Wave Systems Inc. today published a milestone study in collaboration with scientists at Google, demonstrating a computational performance advantage, increasing with both simulation size and problem hardness, to over 3 million times that of corresponding classical methods.

https://phys.org/news/2021-02-d-wave-advantage-quantum-simulation-exotic.html

### Feb 18th: IBM Reveals Five Year Quantum Development Roadmap

> [IBM is focused on improving in its quantum roadmap]: Quality, Capacity and Variety. IBM has been working to not only develop more quantum circuit capacity, but also with more capabilities, allowing a broader variety of circuits that can be run on IBM Quantum computers and to run those circuits faster.

https://www.forbes.com/sites/tiriasresearch/2021/02/18/ibm-reveals-five-year-quantum-development-roadmap/?sh=6811cc07774d

### Feb 25th: IBM’s Quantum computer links two quantum revolutions

> Using the IBM Q computer, physicists at EPFL have verified for the first time the tight relationship between quantum entanglement and wave-particle duality, showing that the former controls the latter in a quantum system.

https://scienceblog.com/521282/ibms-quantum-computer-links-two-quantum-revolutions/


## Staying up to date

Along with our monthly updates, we release weekly updates in our [newsletter](https://www.theqrl.org/subscribe/).

You can be sure to follow these updates in our communities as well on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Videos more you're thing? Be sure to follow us on [Youtube](https://www.youtube.com/c/QRLedger) or [Twitter](https://twitter.com/qrledger).

Only want more pertinent technical updates related to your production environment? Follow our status page at https://status.theqrl.org/.