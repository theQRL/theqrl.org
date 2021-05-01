---
layout: blog-post
slug: last-month-at-qrl-april-2021
date: 2021-05-01
author: "Jack Matier"
title: "Last Month at QRL — April 2021"
summary: " --- "
featured_image: eom.april2021.png
images: 
  - eom.april2021.png
categories:
  - technical
features:
  - enqlave
toc: true
---

## Highlights

### Development: EnQlave

- Changes with the contract Listener to support the three stages of transactions
- Mobile application side of enQlave is nearly release-ready.
- Support for ERC20 ERC223 ERC721 ERC777 ERC1155 are being integrated.
- Continued improvements to the QRL mobile app
- Updated functions that allows initialization of PQAccounts with multiple HashChains & XMSS PK
- Added metadata such as Identifier and Index for XMSS PK(Metadata will be used by the UI to track the appropriate XMSS PK for an Ethereum address based on the Mnemonic or recovery phrase)
- Add experimental ABIEncoderV2 to support emission of event for adding multiple XMSS PKs.
- More refactoring & updated all Unit tests

### Podcast: Bitcoin may be doomed. What can we learn from The Quantum Resistant Ledger?

Will continued quantum advancements threaten Bitcoin and other altcoin transactions? 

Listen as we discuss The Quantum Resistant Ledger (QRL) a cryptocurrency taking a post-quantum safe approach to blockchain. While BTC’s value may plummet at even the threat of quantum tampering, QRLs should remain immune. Can Bitcoin learn a thing or two and adapt? Will the value of QRL go up with the growing quantum industry?

https://www.protiviti.com/US-en/insights/podcast-bitcoin-may-be-doomed-what-can-we-learn-quantum-resistant-ledger

### How to Mine QRL In Depth with RandomX | Updated Walkthrough for Windows

{{< youtube 4HNhSlU3tKo >}}

**Contents**

- Basics/Getting Started
- What is RandomX?
- Requirements
- Brief notes 
- Get the latest BIOS 
- Overclocking observations/defaults
- ClockTuner
- Importance of doing a Memory Stress Test
- RandomX recap- top 3 components
- How to Install the miner & make it run (xmrig)
- Checking antivirus software
- Extract xmrig
- Configuration
- Creating QRL Wallet Address to use
- Important note on running xmrig for the 1st time (run as Admin)
- We are now mining 
- GPU performance comparison on screen
- How do I test if I'm mining? (answer to a question brought up in Discord)
- QRL Payout settings - changing default

## Quantum News

### Goldman Sachs predicts quantum computing 5 years away from use in markets

{{< image "./images/qn.goldmansachs.png" >}} 
https://www.ft.com/content/bbff5dfd-caa3-4481-a111-c79f0d38d486

### Cryptographers Are Racing Against Quantum Computers

{{< image "./images/qn.racing.png" >}}
https://builtin.com/cybersecurity/post-quantum-cryptography

### AWS reveals a new method to build a more accurate quantum computer

{{< image "./images/qn.awsreveals.png" >}}
https://www.zdnet.com/article/aws-reveals-a-new-method-to-build-a-more-accurate-quantum-computer/

### Honeywell Just Released Details About How Its Quantum Computer Works

{{< image "./images/qn.honeywell.png" >}}
https://singularityhub.com/2021/04/19/honeywell-just-released-details-about-how-its-quantum-computer-works/