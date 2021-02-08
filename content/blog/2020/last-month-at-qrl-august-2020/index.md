---
layout: blog-post
slug: last-month-at-qrl-august-2020
date: 2020-08-31
author: "Jack Matier"
title: "Last Month at QRL — August 2020"
summary: "EnQlave audit firm selected: x41 D-Sec, QRL AMA 4 part series complete, QRL Quick Qlips Contest, New Korean Social Media Ambassador, Proof-of-Stake devnet approaches: updates, new QRL pool integration, and quantum news updates."
featured_image: 1jGQaWd9oszSsI4Zmlz_Ucg.png
images:
  - 1jGQaWd9oszSsI4Zmlz_Ucg.png
  - 1QsglEv4uZXFDq7X12W4Wog.png
  - 1kN_lwmzOyPeUOtuXZhqfRQ.png
  - 1_NrwAmaEhXuxIUTsgFtuRQ.png
  - 1Or1kpwozMIxnc2yPYlT-iw.png
  - 1Yy1zzvgHkfUPMAGsgtwvkQ.png
  - 1tE9pYI2qAwkPo3GCvj4-dg.png
categories:
  - technical
features:
  - enqlave
  - proof-of-stake
---

## EnQlave audit firm selected: x41 D-Sec

We are happy to announce that [x41 D-Sec](https://www.x41-dsec.de/) has been contracted to audit project [enQlave](https://enqlave.io/), an Ethereum webwallet which allows any user to secure their ether or ERC20 token balances from quantum theft.

[x41 D-Sec](https://www.x41-dsec.de/) was one of the two external auditors involved with auditing cryptographic portions of our QRL codebase ([report here](https://github.com/theQRL/audits/blob/master/X41-theQRL-Review-2018-Final-Report.pdf)), so their expertise is fitting for auditing the smart contract code for any possible issues as well. Audits, along with code review and testing coverage, will continue to play a vital role in ensuring the security fundamentals that underpin our codebase.

The audit will start in the coming months and is expected to last a few weeks, though more details will emerge when they start.

## Proof-of-Stake: Devnet Approaches, update

We are weeks away from a devnet (I know we’ve been saying that), which after some testing by the QRL team, will result in a public testnet! If you haven’t already, our lead core developer, Kaushal Kumar Singh, did an AMA special about PoS, which can be found on youtube in our latest video [“QRL Ask Me Anything #4 with QRL Lead Developer Kaushal Singh — E12”](https://www.youtube.com/watch?v=i1Mp71D2xF0)

### Progress over the last month

1. State management has been finished, which supports multiple forks at a time, and allows switching from one fork to another quickly.
1. Consensus protocol, such as allotment of block proposer (a.k.a slot leader) and attestors for each slot number has been done.
1. Currently we have a fixed reward for both block proposer and attestor. The algorithm for reward will change after the successful test of devnet
1. Basic Wallet CLI that allows generating wallet, genesis block, Dilithium keys, stake transactions.
1. We have four transactions, namely — Transfer Transaction, Stake Transaction, Attest Transaction & CoinBase Transaction.
1. Message, Slave Transaction and Transfer Transaction has been merged together as a single Transaction known as Transfer Transaction.
1. Network ID has been added into all transactions. This helps to differentiate a transaction signed for a different network. So devnet, mainnet, testnet all will have a different network id. In case any transaction is received by a different network, it will be rejected.
1. Dilithium cryptography support has been added which allows you to stake on the network.
1. Fields such as block header hash has been removed from Block and transaction hash has been removed from Transaction. These fields are no more stored into the message itself, as it can itself be derived from the other data fields provided in the transaction hash.
1. Currently the P2P is in progress

## QRL AMA 4 part series complete

{{< image "./images/1QsglEv4uZXFDq7X12W4Wog.png" >}}

### Part 1

Link: [https://www.youtube.com/watch?v=pVabWOop-iQ](https://www.youtube.com/watch?v=pVabWOop-iQ)

**Topics covered**

* What is QRL?
* How did the QRL get started?
* Minimum staking requirements for Proof-of-Stake
* Ethereum 2.0 and sharding
* Verifiable Delay Funcations and random Consensus

### Part 2

Link: [https://www.youtube.com/watch?v=YQ9RUcNArp4](https://www.youtube.com/watch?v=YQ9RUcNArp4)

**Topics covered**

* Proof-of-Stake protocol changes
* OCAML smart-contracts
* Project enQlave
* Ephemeral messaging, and
* Move to golang with GO-QRL

### Part 3

Link: [https://www.youtube.com/watch?v=g2xRuOa3Nos](https://www.youtube.com/watch?v=g2xRuOa3Nos)

**Topics covered**

* When will the financial report come out?
* How long can QRL continue to develop with existing funds?
* Exchanges, what is the barrier of entry?
* Did the foundation get a legal opinion if QRL can be considered a security?
* The QRL team is so small, how has it achieved so much with comparatively fewer resources?
* How will QRL deal with the potential claims for migrating unmigrated tokens?

### Part 4

Link: [https://www.youtube.com/watch?v=i1Mp71D2xF0](https://www.youtube.com/watch?v=i1Mp71D2xF0)

**Topics covered**

* 100% PoS or Hybrid (ie. PoS/PoW)?
* Will there be masternodes?
* Can multisig addresses stake?
* Will we be able to stake on a Raspberry Pi?
* Are you considering using an external quantum secure randomness beacon like the one from the League of Entropy to construct the robust QRL PoS?
* Will the Foundation be staking its Quanta?

### Final text overview

As a followup to this audio AMA, a supplemental article which summarizes everything that was covered in the 4 part series will be made available for easy reference.

## QRL Quick Qlips Contest

{{< image "./images/1kN_lwmzOyPeUOtuXZhqfRQ.png" >}}

We now have our own youtube channel name!
[https://www.youtube.com/c/QRLedger](https://www.youtube.com/c/QRLedger)

In celebration, and for conveying quick content on social media, we’re holding a **QRL Quick Qlips contest**!

**Instructions**

1. Watch our youtube videos! Found at [https://www.youtube.com/c/QRLedger](https://www.youtube.com/c/QRLedger)
1. Find up to 5 clips you like the most and note the subject, video, start, and end time (and/or duration). Not a hard requirement, but try to keep duration to 1 minute or less!
1. Post this information to any of our social media channels (Discord, Twitter, Reddit, etc) by Sunday, September 6th, 2020 2300 UTC
1. The qlips will be watched and evaluated by the team, and the participants final position will be based off of their best rated clip.
1. 500 Quanta will be distributed to the top 10 participants.
1. Top \~5 clips will be made into its own video for easy content that can be linked to on social media (Twitter, etc)

**Example submissions**

* Another option for Ethereum [https://youtu.be/UH5skbUBfOU?t=76](https://youtu.be/UH5skbUBfOU?t=76), 42s
* Another option for Ethereum [https://youtu.be/UH5skbUBfOU](https://youtu.be/UH5skbUBfOU), 1:16–1:58

**Notes**

* Qlips which have the same content and similar times will be considered the same, and only the first Qlip will be accepted
* Participation is open to everyone, including team members, but awards are only available to the community.
* Those who win will have 90 days (\~3 months) to claim the reward, after which the funds will be forfeited to the tipbot and/or faucet (or earmarked for such)

## New Korean Social Media Ambassador

Rolling Cryptos has been selected as our Korean social media ambassador!

They will be joining jdfreshman as our second social media ambassador on our journey towards truly reaching out to a global audience.

Welcome aboard!

## Integrations

### New mining Pool: Project Quorletha

{{< image "./images/1_NrwAmaEhXuxIUTsgFtuRQ.png" >}}

*Project Quorletha is a QRL mining pool created by cp3o, LLC.*

Pool: [https://quorletha.cp3o.com/](https://quorletha.cp3o.com/)
Website: [https://cp3o.com/](https://cp3o.com/)
LinkedIn: [https://www.linkedin.com/in/cp3odotcom/](https://www.linkedin.com/in/cp3odotcom/)
Facebook: [https://www.facebook.com/Charles.cp3o.Parks.III](https://www.facebook.com/Charles.cp3o.Parks.III)
Twitter: [https://twitter.com/cp3oDOTcom](https://twitter.com/cp3oDOTcom)
Instagram: [https://www.instagram.com/cp3odotcom/](https://www.instagram.com/cp3odotcom/)

## Quantum News

### Google and collaborators achieve largest Quantum Chemical Simulations to Date

Link: [https://phys.org/news/2020-08-google-largest-chemical-simulation-quantum.html](https://phys.org/news/2020-08-google-largest-chemical-simulation-quantum.html)

{{< image "./images/1Or1kpwozMIxnc2yPYlT-iw.png" >}}

### IBM Reaches Quantum Volume 64

Link: [https://newsroom.ibm.com/2020-08-20-IBM-Delivers-Its-Highest-Quantum-Volume-to-Date-Expanding-the-Computational-Power-of-its-IBM-Cloud-Accessible-Quantum-Computers](https://newsroom.ibm.com/2020-08-20-IBM-Delivers-Its-Highest-Quantum-Volume-to-Date-Expanding-the-Computational-Power-of-its-IBM-Cloud-Accessible-Quantum-Computers)

{{< image "./images/1Yy1zzvgHkfUPMAGsgtwvkQ.png" >}}

### Amazon AWS Announces General Availability of their Quantum Cloud Service

Link: [https://www.businesswire.com/news/home/20200813005776/en/AWS-Announces-General-Availability-Amazon-Braket](https://www.businesswire.com/news/home/20200813005776/en/AWS-Announces-General-Availability-Amazon-Braket)

{{< image "./images/1tE9pYI2qAwkPo3GCvj4-dg.png" >}}