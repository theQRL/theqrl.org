---
layout: blog-post
slug: last-month-at-qrl-december-2020
date: 2021-01-01
author: "Jack Matier"
title: "Last Month at QRL — December 2020"
summary: "XMSS NIST Approved. QRL Website and Logo Refresh in Celebration. Merchandise Design Contest with new assets. Quantascan.io released: An analytics explorer. Two new videos. The QRL Foundation joins forces with the League of Entropy. Development updates: PoS, Zeus, qrl-cli"
featured_image: eom.december2020.png
images:
  - eom.december2020.png
categories:
  - technical
features:
  - proof-of-stake
  - zeus
  - qrl-cli
draft: false
toc: true
---

## 2020, at a glance

- **New website and brand refresh**: <https://www.theqrl.org/>
- **New explorer** from @12remember#3018: <https://quantascan.io/>
- **New director of marketing**: Ryan Malinowski
- **New status page**: <https://status.theqrl.org>
- **New library: go-libp2p-qrl** - a networking stack and library for large peer-to-peer networks and can be thought of as the successor to IPFS, now quantum secure with Dilithium (<https://github.com/theQRL/go-libp2p-qrl>)
- **New Korean & Chinese Social media ambassadors**
- **New YouTube channel and 21 new videos**: <https://youtube.com/c/QRLedger>
- **Project Zeus** - A platform to build high performance multi-platform apps with (mobile, web, and desktop) to make it easier for developers to expand the QRL ecosystem. WIP.
- **Project EnQlave** - Bringing post-quantum security to Ethereum, commences: Code complete, audit began Q42020
- **Project Zond** - Proof-of-Stake development commences: Roadmap released, code opened in Q42020
- **QRL Mainnet Bromine hardfork released**: Adds multi-signature addresses and transactions, lays the groundwork for ephemeral messaging.
- **Insight Researchers partners with the Quantum Resistant Ledger** to continue its leading post-quantum pioneering efforts in the blockchain space
- **The QRL Foundation joins forces with the League of Entropy** along with members such as CloudFlare, Kudelski Security, Protocol Labs, and the Ethereum Foundation
- **NIST formally approves XMSS** as a post-quantum secure signature scheme, making $QRL the only blockchain using a NIST approved post-quantum signature scheme

## The QRL Foundation joins forces with the League of Entropy

{{< image "./images/loelogo.png" >}}

The QRL Foundation is happy to join forces with the League of Entropy, a consortium of global organizations and individual members such as CloudFlare, Kudelski Security, Protocol Labs, and the Ethereum Foundation to create heroic levels of randomness which is highly available, unpredictable, unbiased, and verifiable. You can read more [about randomness and the league of entropy](https://www.theqrl.org/blog/the-qrl-foundation-joins-forces-with-the-league-of-entropy/) in a recent blog of ours.

## Quantascan.io released: An analytics website for the Quantum Resistant Ledger(QRL) blockchain

{{< image "./images/quantascan.png" >}}

Created by our Discord member @12remember, the QRL analytics platform gives a lot of insight by featuring a [QRL Richlist](https://quantascan.io/wallet-rich-list), [Number of Wallets](https://quantascan.io/wallet-number-of-wallets), [Transaction Count/Volume](https://quantascan.io/network-transactions), [Block Reward Decay](https://quantascan.io/block-reward-decay), [Average Block Size](https://quantascan.io/block-avg-block-size), [Quanta Distribution](https://quantascan.io/wallet-distribution), [Circulating Quanta](https://quantascan.io/network-total-circulating-quanta), [Number of Stakers](https://quantascan.io/block-reward-pos), and [Average Block Time](https://quantascan.io/block-avg-block-time).

Visit [quantascan.io](https://quantascan.io/)

## Development updates

### Proof-of-Stake

- Updated systems to go-qrlib-crypto & go-libp2p-qrl
- Display listen address with identity after server start
- Store node multiAddr, idientity & IP and use multiAddr to establish connection
- Add helper function IPFromMultiAddr
- go-libp2p-qrl: fix unmarshal functions
- go-libp2p-qrl: Dilithium crypto into go-libp2p

### Zeus

- Token balances
- Node v2.0.7 support

### qrl-cli

- New node handling logic & updates to all non-tx based commands

### QRL Mainnet v2.0.7

- Fix for GetAddressState & GetTokensByAddress API

## Website and logo refresh in celebration of NIST's approval of the XMSS signature scheme

{{< image "./images/newbrand.png" >}}

In celebration of NIST's approval of the XMSS signature scheme, we were proud to present a new website and logo refresh!

For our branding and refresh, we worked closely with cryptogang, a design agency that specializes in defining the design brand and identity of blockchain projects. We’d say the results speak for themselves.

Give [our refresh blog a read](/blog/new-qrl-website-and-logo-refresh-in-celebration-of-nists-approval-of-xmss/) to learn more about the significance of these events.

We've also updated teespring merchandise featuring our new design assets.

- North America: https://teespring.com/stores/quantum-resistant-ledger-na
- European Union/UK and Asia: https://teespring.com/stores/quantum-resistant-ledger-eu

## Merchandise Design Contest with new assets

{{< image "./images/merch.png" >}}

We are seeking passionate, skilled designers to create simple, yet dynamic designs related to the QRL that people would want to wear to extend our teespring merchandise. The winning designers will receive an award along with a link back to their own listing page (or store) for additional sales.

Contest ends on **January 15th, 2021**

**Entry Steps and Details**

1. Login or sign up on teespring: https://teespring.com/signup
2. After logging in, create a new listing: https://teespring.com/dashboard/campaigns
3. When you're done, show off your listing by posting to Discord, Twitter, or Reddit. You're welcome to accept sales right away!
4. Top designs will be selected by the QRL Core Contributors and awarded based on a ranking position:
	- 1st 5000 QRL
	- 2nd 2500 QRL
	- 3rd 1000 QRL
5. (Optional) If the winning design(s) are free from copyright infringement, we'll put one of the winning designs from your listing in our QRL store.

**Notes**

- Each teespring listing constitutes as one entry. There's allowed to be multiple entries per person. 
- Design assets can be found on <https://theqrl.org/presskit>

## QRL Multimedia

### No! You can't just Quantum Soft fork Bitcoin! Or can you ???

Will a quantum soft fork, hard fork, or patch resolve Bitcoin's vulnerability to the quantum computer threat? What really is the quantum threat about? How hard would this to be? Let's find out from the team at the Quantum Resistant Ledger!

{{< youtube "cbP2ejgSxcA" >}}

### Bitcoin and Quantum Computer Predictions 2021

Quantum computers, Bitcoin, and crypto have been through a year for the history books. What’s next for going into 2021?

{{< youtube "UVbV7uurJOM" >}}

## Quantum News

- Dec 3rd: Intel unveils its second-generation quantum computing control chip (https://venturebeat.com/2020/12/03/intel-unveils-its-second-generation-quantum-computing-control-chip/)
- Dec 3rd: IBM Achieves Quantum Volume of 128 (https://quantumcomputingreport.com/ibm-achieves-a-new-quantum-volume-level-of-128/)
- Dec 4th: China Stakes Its Claim to Quantum Supremacy (https://www.wired.com/story/china-stakes-claim-quantum-supremacy/)
- Dec 4th: Q-score: A New Competitor to Quantum Volume for Measuring Quantum Computer Performance (https://finance.yahoo.com/news/atos-announces-q-score-only-100000918.html)
- Dec 8th: Error-Prone Quantum Bits Could Correct Themselves, NIST Physicists Show (https://www.nist.gov/news-events/news/2020/12/error-prone-quantum-bits-could-correct-themselves-nist-physicists-show)
- Dec 9th: IonQ plans to launch a rack-mounted quantum computer for data centers in 2023 (https://techcrunch.com/2020/12/09/ionq-plans-to-launch-a-rack-mounted-quantum-computer-for-data-centers-in-2023/)
- Dec 9th: IonQ Unveils Its Hardware Roadmap and Another Quantum Computing Performance Metric (https://quantumcomputingreport.com/ionq-unveils-its-hardware-roadmap-and-another-quantum-computing-performance-metric/)
- Dec 14th: Researchers pinpoint more precise method for atomic-level manufacturing (https://phys.org/news/2020-12-precise-method-atomic-level.html)
- Dec 15th: Ultrasensitive Microwave Detector Developed – Enabling Technology for Next-Generation Quantum Computers (https://scitechdaily.com/ultrasensitive-microwave-detector-developed-enabling-technology-for-next-generation-quantum-computers/)
- Dec 15th: High-fidelity superconducting quantum processors via laser-annealing of transmon qubits (https://arxiv.org/abs/2012.08475)
- Dec 17th: Researchers create entangled photons 100 times more efficiently than previously possible (https://phys.org/news/2020-12-entangled-photons-efficiently-previously.html)
- Dec 21st: Engineers demonstrate the first flexible hardware platform for silicon spin qubit integration on 300 mm wafers (https://techxplore.com/news/2020-12-flexible-hardware-platform-silicon-qubit.html)
- Dec 25th: Quantum computer makers like their odds for big progress (https://www.cnet.com/news/quantum-computer-makers-like-their-odds-for-big-progress-soon/)

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)