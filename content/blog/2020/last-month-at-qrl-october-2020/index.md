---
layout: blog-post
slug: last-month-at-qrl-october-2020
date: 2020-11-01
author: "Jack Matier"
title: "Last Month at QRL — October 2020"
summary: "Press — Insight Researchers Partners with the Quantum Resistant Ledger, QRL Node Update, Mobile Wallet v3 planning commences, Zeus-proxy, New Director of Advocacy — Ryan Malinowski, Quantum News, and QRL In the media."
featured_image: 1B-pAa0tbWJXG_i1qe_M-6Q.png
images:
  - 1B-pAa0tbWJXG_i1qe_M-6Q.png
  - 17dDZniLEBlCHiqRKqIzqzQ.png
  - 1WPDl88Z9u1V8lM9GkaE1sg.png
  - 1QfvtEisNuvH2PrxYXrlffg.png
  - 1Jh-038ZUPPKMMCuLBGBzYA.gif
  - 1Hj4Qs9jOCA8NjQPROT8hIg.png
  - 1wF5f4XukzUsSJ5im4NU_LA.png
  - 1Xq7gtbVQwhnMYx1zhVBygw.png
categories:
  - technical
features:
  - webwallet
---

## Press — Insight Researchers Partners with the Quantum Resistant Ledger

{{< image "./images/17dDZniLEBlCHiqRKqIzqzQ.png" >}}

***Zug, Switzerland, September 25th, 2020** — [The Quantum Resistant Ledger (QRL) Foundation](https://qrl.foundation/), creator of the world’s leading quantum-secure blockchain network and digital asset platform, has partnered with [Insight’s](https://insightfellows.com/) quantum cryptography research team to continue to set the global standard towards its quantum-secure Proof-of-Stake network, a progression of its quantum-secure Proof-of-Work network presently in place.*

The primary focus will be towards QRL’s Proof-of-Stake network with research into lattice cryptography and signature aggregation. These key elements will allow QRL to reduce the overall block-size, allowing for a higher number of validators per epoch, and improve its scalability.

Read our [release in more detail](/blog/insight-researchers-partners-with-the-quantum-resistant-ledger).

## QRL Node Update

{{< image "./images/1WPDl88Z9u1V8lM9GkaE1sg.png" >}}

Installing a node just got a whole lot easier with v2.0.6 which adds support for Ubuntu 20.04.x and removes a strict cmake v3.10.3 version dependency.

See our docs for updating your node: [https://docs.theqrl.org/node/QRLnode/#update-ubuntu-node](https://docs.theqrl.org/node/QRLnode/#update-ubuntu-node)

GitHub release: [https://github.com/theQRL/QRL/releases/tag/v2.0.6](https://github.com/theQRL/QRL/releases/tag/v2.0.6)

## QRL Mobile Wallet v3 planning commences

{{< image "./images/1QfvtEisNuvH2PrxYXrlffg.png" >}}

Work on planning for the next QRL Mobile Wallet (v3) for iOS and Android has begun! We did a call for feature requests and received many great suggestions such as:

* Require fingerprint/pin to open app
* Upon setting up the wallet require a user to backup mnemonic or hexseed. Ask for random words to confirm they wrote it down.
* Message transactions
* Address book
* Ephemeral Messaging Service (different from message transactions)
* Add option to pick or select a node on startup
* Ledger live app functionality
* Send and receive QRT (Quantum Resistant Tokens),
* and more!

While not every feature will make it in to the QRL Mobile Wallet v3, the development team are excited about putting some of the user requested features into our next major release.

## Zeus-proxy and node fixes

{{< image "./images/1Jh-038ZUPPKMMCuLBGBzYA.gif" >}}

**Zeus-proxy** is a proxy server which connects QRL’s custom GRPC to a REST proxy interface. The updated v3 wallet will take advantage of zeus-proxy. To help with *integrations*, one beneficial feature of zeus-proxy is an API explorer (seen in graphic). No longer will you need to buff up with `curls` to figure things out.

The **zeus-proxy** service will *also* resolve the issue of our server infrastructure being overloaded when we have an influx of users — which doesn’t lead to a great user experience. This influx of new users overwhelming infrastructure is exasperated by TCP connections not getting closed by the GRPC server if the client (wallet) disconnects abruptly. While this can cause application freezes and resulting in the webwallet being intermittently accessible, it should be noted that no funds are at risk.

## New Director of Advocacy — Ryan Malinowski

We are thrilled to announce the addition of Ryan Malinowski to The QRL Core Contributors team, bringing with him over a decade of digital marketing experience to The QRL.

He has previously led marketing efforts for an Inc 5000, was US Accounts Manager for Renowned & Co (blockchain consultancy), has built niche online businesses, and has held several other Head of Marketing positions. Ryan is passionate about blockchain technology and holds his B.S in Economics.

## Quantum News

### Oct 1st — IonQ Announces a 32 Qubit Ion Trap Computer with Low Qubit Gate Errors

{{< image "./images/1Hj4Qs9jOCA8NjQPROT8hIg.png" >}}
> IonQ says it has built the world’s most powerful [quantum computer](https://fortune.com/longform/business-quantum-computing/), as measured by a common industry metric.
> On a machine featuring 32 qubits — the quantum equivalent of classical computing’s bits — IonQ says it has achieved “an expected” quantum volume greater than 4 million. The figure vaults ahead of the previous record: a quantum volume of 128 [announced just one day prior](https://www.honeywell.com/en-us/newsroom/news/2020/09/achieving-quantum-volume-128-on-the-honeywell-quantum-computer) by [Honeywell](https://fortune.com/longform/honeywell-technology-quantum-computer-software-coronavirus-pandemic/), the industrial conglomerate.
[**Startup IonQ drastically ups the quantum computing ante**
*IonQ says it has built the world's most powerful quantum computer, as measured by a common industry metric. On a…*olv.duke.edu](https://olv.duke.edu/news/startup-ionq-drastically-ups-the-quantum-computing-ante/)

### Oct 10th — IBM Will Sponsor 5,000 Student for a Free, Eight-Month Online Quantum Computing Course

{{< image "./images/1wF5f4XukzUsSJ5im4NU_LA.png" >}}
> *IBM Quantum Will Sponsor 5,000 Students to Attend an Eight-Month Intensive Quantum Computing Course (And You Could Be One of Them)*
> Few things are more important to the IBM Quantum and Qiskit teams than making quantum computing education available and accessible to students around the world. Today, we’re announcing a collaboration with [The Coding School, ](https://www.the-cs.org/)where IBM will sponsor up to 5,000 students the chance to take an intensive eight-month Introduction to Quantum Computing online course. Students can apply [here](https://www.qubitbyqubit.org/register).
[**IBM and The Coding School to offer free online quantum computing course for 5,000 students | IBM…**
*IBM Quantum will sponsor 5,000 students to attend an eight-month intensive quantum coding course (and you could be one…*www.ibm.com](https://www.ibm.com/blogs/research/2020/10/quantum-coding-school/)

### Oct 26th — MIT Lincoln Laboratory Creates The First Trapped-Ion Quantum Chip With Integrated Photonics
> The largest number of trapped-ion qubits being used in a quantum computer today is 32. For quantum computers to be truly useful, millions of qubits are needed. Of course, that means many thousands of lasers will also be required to control and measure the millions of ion qubits. The problem becomes even larger when two types of ions are used, such as ytterbium and barium in Honeywell’s machine. The current method of controlling lasers makes it challenging to build trapped-ion quantum computers beyond a few hundred qubits.
> Rather than resorting to optics and bouncing lasers off mirrors to aim beams into the vacuum chamber, MIT researchers have developed another method. They have figured out how to use optical fibers and photonics to carry laser pulses directly into the chamber and focus them on individual ions on the chip.
[**MIT Lincoln Laboratory Creates The First Trapped-Ion Quantum Chip With Fully Integrated Photonics**
*Most experts agree that quantum computing is still in an experimental era. The current state of quantum technology has…*www.forbes.com](https://www.forbes.com/sites/moorinsights/2020/10/26/mit-lincoln-laboratory-creates-the-first-trapped-ion-quantum-chip-with-integrated-photonics/?sh=1ed02313126a)

### Oct 30th — Quantum-computing pioneer warns of complacency over Internet security

{{< image "./images/1Xq7gtbVQwhnMYx1zhVBygw.png" >}}
> When physicists first thought up quantum computers in the 1980s, they sounded like a nice theoretical idea, but one probably destined to remain on paper. Then in 1995, 25 years ago this month, applied mathematician Peter Shor published a paper[1](https://www.nature.com/articles/d41586-020-03068-9#ref-CR1) that changed that perception.
> Shor’s paper showed how quantum computers could overcome a crucial problem. The machines would process information as qubits — quantum versions of ordinary bits that can simultaneously be ‘0’ and ‘1’. But quantum states are notoriously vulnerable to noise, leading to loss of information. His error-correction technique — which detects errors caused by noise — showed how to make quantum information more robust.
[**Quantum-computing pioneer warns of complacency over Internet security**
*Nature talks to Peter Shor 25 years after he showed how to make quantum computations feasible - and how they could…*www.nature.com](https://www.nature.com/articles/d41586-020-03068-9)

## QRL In The Media

### Quantum Resistant Ledger Team Performs Proof of Stake Updates, Says “Massive Advances” were Recently Made in Quantum Computing
[**Quantum Resistant Ledger Team Performs Proof of Stake Updates, Says "Massive Advances" were…**
*The team at Quantum Resistant Ledger (QRL), which claims to be the "first-of-its-kind," post-quantum value store and…*www.crowdfundinsider.com](https://www.crowdfundinsider.com/2020/10/167551-quantum-resistant-ledger-team-performs-proof-of-stake-updates-says-massive-advances-were-recently-made-in-quantum-computing/)

### QRL’s Ethereum Powered Web Wallet Under Audit Scan
[**QRL's Ethereum Powered Web Wallet Under Audit Scan**
*The cryptocurrency security systems have been receiving constant threats from the emerging quantum computers, which…*www.cryptonewsz.com](https://www.cryptonewsz.com/qrls-ethereum-powered-web-wallet-under-audit-scan/)

## Be part of the Quantum Resistance

Join us in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb) to talk about everything from QRL to quantum computers and everything in-between.

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)