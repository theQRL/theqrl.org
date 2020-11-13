---
layout: blog-post
slug: announcing-ethereum-enqlave-quantum-security-for-the-ethereum-blockchain
date: 2020-04-01
author: "Jack Matier"
title: "Announcing Ethereum Enqlave -  Quantum Security for the Ethereum Blockchain"
featured_image: 1RDJkgBTNx61I5cRFQX6NsQ.png
images:
  - 1RDJkgBTNx61I5cRFQX6NsQ.png
  - 1wWUSZUze6tf3pYB2VjZwYw.png
features:
  - enqlave
categories:
  - technical
---

Back in 2017 we launched as an ERC20 token so that people can hold and trade a QRL while we built out our own quantum secure blockchain which successfully launched in Q2 of 2018.

Now we’re happy to announce that in the coming year, QRL will be releasing **Ethereum Enqlave**, a way to secure Ethereum wallets and all of its tokens from the ever evolving threat of quantum computers.

This will also make QRL multi-chain, **allowing QRL to move freely between Ethereum and QRL mainnet!**

## Overview

The Ethereum Enklave consists of three components. A master XMSS smart contract, a wallet service, and an oracle.

### Master XMSS smart contract

At a basic level, the master XMSS smart contract stores OTS indexes , verifies signatures, and checks if an Ethereum address is bound with a particular XMSS address.

### The wallet service

The wallet service gives the ability to secure the contents of your Ethereum address by adding the Enklave smart contract to it. After the Enklave smart contract is added, you can optionally choose what you’d like to make quantum secure.

**For tokens secured with Enklave**, to spend funds, you’ll need to provide both the XMSS Signature as well as Ethereum signature. To *receive* funds for tokens that are secured with Enklave, you’ll need to provide your XMSS address if you want them secured automatically. Funds and tokens received with the Ethereum address will need to be further Enklave’d manually.

**For tokens not secured with Enklave**, it’s just like how your Ethereum address normally works. To spend funds, you’ll only need to provide your Ethereum signature. To *receive* funds or tokens not secured with Enklave, you’ll need to provide your Ethereum address.

**As a note:** The gas prices for signature verification are quite enormous and so using the Enklave for frequent transactions wouldn’t make sense.

### The oracle

The oracle is there to track and count QRL moving between the QRL mainnet blockchain and Ethereum. This will be maintained and controlled by the QRL foundation.

This opens up QRL to be multi-chain. QRL will be able to move freely between the QRL mainnet blockchain and the Ethereum network. Some benefits include atomic multi-way asset exchanges and payments.

## The Enqlave Collective — the future of Enklave’s:

**Our mission** is provide the world’s most secure, open-source, post-quantum blockchain platform. **We’ve delivered, and continue to deliver.**

**We believe** that quantum computer technology will become one of the next great technological revolutions and present a paradigm shift to industries across the word. Our team is comprised of quantum-optimistic, forwarding-thinking professionals of various backgrounds from around the globe.

Unfortunately, while much of the industry leaders and government institutions are preparing for a time when such event will happen, the blockchain space is largely in disagreement — even going as far as calling *preparing* for such an epidemic as FUD. These industry leaders and institutions who are preparing include Google, Microsoft, Intel, Cloudflare, NIST, and the NSA.

At the QRL Foundation, **we’re in a position to do more**. Delivering our own quantum secure blockchain platform isn’t enough. The research and work done with Ethereum Enklave is just a precursor. We can extend this feature to most smart contract platforms such as Tezos, RSK, EOS, TRON, and Stellar.

Are you a blockchain project that **wants to give their users the option of quantum security?** (or have a favourite project that you wish were quantum secure?) Get in touch by emailing support@theqrl.org.