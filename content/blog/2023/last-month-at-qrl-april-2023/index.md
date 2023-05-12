---
layout: blog-post
slug: last-month-at-qrl-april-2023
date: 2023-05-12
author: "The QRL Core Contributors"
title: "Last Month at QRL - April 2023"
summary: "A substantial amount of effort has been invested in Zond (our forthcoming Proof-of-Stake/smart contract upgrade). Things touched include the consensus engine, validator client, chrome extension, and other tools, improving the system's overall efficiency, security, and developer friendliness"
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### Zond Development update

{{< image "./images/h.zond.png" >}}

In [March](/blog/last-month-at-qrl-march-2023/) we saw a lot of work go into [qrypto.js](https://github.com/theQRL/qrypto.js) and the cryptography portions of Zond, including the latest Dilithum5 library working on the node and browser. Since then, lots of work has gone into the consensus engine, validator client, chrome extension, and tooling.

#### Consensus Engine

One of the candidates for the NIST post-quantum cryptography project is the Dilithium5 cryptography standard. It is a digital signature scheme based on the difficulty of locating short vectors in lattices. It provides high security against both classical and quantum attacks. We have modernised the signature, public key, and random reveal size in our system to support this standard. This will improve the system's overall effectiveness as well as its level of safety.

We've also updated the grpc gateway library to generate.pb.go files for grpc-based servers and clients. These files contain code that can be used to generate code for various programming languages that can communicate with the grpc service. This will improve the interoperability and flexibility of our system. A further set of modifications to the consensus protocol, which is the mechanism that ensures all nodes in the network agree on the same system state, are currently under development by our team as well. The performance, scalability, and robustness of our protocol are all areas in which we want to see improvements. 

#### Tooling

Several changes and updates have been made to the tooling around Zond.

- Changes to the Remix IDE to make it compatible with the Zond Chrome Extension wallet to support contract deployment from the Chrome Extension Wallet and Remix IDE are in progress. Right now the Zond Chrome Extension Wallet works with the modified Remix IDE.
- The CLI to generate genesis block and the required number of validators using Dilithium cryptography for staking have been made

This required refactoring of not just the chrome-extension, but web3.js and qrypto.js to commonJS.

#### Validator client

A standalone validator client that is capable of supporting staking with the dilithium5 public key is currently under development. The validator client can now send attest transactions, create blocks, and detect the staking balance that has been deposited on the staking contract. In addition, there have been adjustments made to the Validator client API.

## Other Development Updates

### Progressive Web App (PWA)

Work on a progressive web app (PWA) wallet secure storage module. This will provide us with an alternative method of using a wallet on a mobile device.

## Quantum News

{{% qnews start="2023-04-01" end="2023-05-01" %}}

## Changelog

### theQRL/go-qrllib

**[Fix: NewDilithiumFromMnemonic & NewDilithiumFromHexSeed](https://github.com/theQRL/go-qrllib/pull/29)**
			
- [[41b7e](https://github.com/theQRL/go-qrllib/commit/063be7294ae3b4689db9f58b9b03e52b69941b7e)] Fix: NewDilithiumFromMnemonic & NewDilithiumFromHexSeed		

### theQRL/theqrl.org

**[Replaced Team with Partners for Mobile Menu](https://github.com/theQRL/theqrl.org/pull/344)**
			
- [[b4114](https://github.com/theQRL/theqrl.org/commit/fe00d5f742d52fa37efedab49c7e34c5a94b4114)] Replaced Team with Partners for Mobile Menu		


**[Last Month at QRL March 2023](https://github.com/theQRL/theqrl.org/pull/343)**
			
- [[e41fd](https://github.com/theQRL/theqrl.org/commit/f58dd732a7afa999b2f4e8af3dc7bb9f7c4e41fd)] Update quantum news		
- [[d6d8a](https://github.com/theQRL/theqrl.org/commit/6570a1e74b20e4490c50eb0aa0a3324abaad6d8a)] Add counterparty		
- [[4e79f](https://github.com/theQRL/theqrl.org/commit/154e079a761eb733a516ec7e5c39bf45e7a4e79f)] Last Month at QRL March 2023		
- [[5a4a4](https://github.com/theQRL/theqrl.org/commit/de7c789430f069db900b80c00a6637955495a4a4)] Remove erroneous update.md file		

**[Updated volt-development logo & website link](https://github.com/theQRL/theqrl.org/pull/342)**
			
- [[17ed1](https://github.com/theQRL/theqrl.org/commit/96db8ce7a12474cf35b2c09b63bcdc3a83c17ed1)] Updated volt-development logo & website link		


**[Fix: Typo & alignment of partner names](https://github.com/theQRL/theqrl.org/pull/341)**
			
- [[410e5](https://github.com/theQRL/theqrl.org/commit/e495239a9298f93530c5123577549504752410e5)] Fix: Typo & alignment of partner names		


**[Replaced Team page with Partners page](https://github.com/theQRL/theqrl.org/pull/340)**
			
- [[044f4](https://github.com/theQRL/theqrl.org/commit/b46e7526581a80396197745462976011cc4044f4)] Replaced Team page with Partners page		
- [[3c174](https://github.com/theQRL/theqrl.org/commit/257cf9e744d51b04222c4374919f941a12b3c174)] Replaced team in home page by partners		
- [[df2f4](https://github.com/theQRL/theqrl.org/commit/0086742986a6fe1b1333e5532da0dad18dbdf2f4)] Added link for partners in the homepage		


**[New blog release, announcing fusion post-quantum signatures](https://github.com/theQRL/theqrl.org/pull/339)**
			
- [[a483f](https://github.com/theQRL/theqrl.org/commit/098526e2ecc5f11b750f23221c8d2e8dcdba483f)] New release, announcing fusion post-quantum signatures		
- [[7a5cb](https://github.com/theQRL/theqrl.org/commit/010f05d7947c26d22b27d2b99bfc337d4d97a5cb)] Adjust categories		


**[Grasping the quantum threat with Mosca's Theorem](https://github.com/theQRL/theqrl.org/pull/338)**
			
- [[b328c](https://github.com/theQRL/theqrl.org/commit/07be241bac2a742d650c5e73590a2b097b1b328c)] Grasping the quantum threat with Mosca's Theorem		
- [[1ab6d](https://github.com/theQRL/theqrl.org/commit/e53b3f48050abdd75aad060f91ce2a4e1741ab6d)] Date fix		

### theQRL/wallet.js

**[Unit test fix & coverage CLI command for dev env](https://github.com/theQRL/wallet.js/pull/9)**
			
- [[f5006](https://github.com/theQRL/wallet.js/commit/b85b228e2fd7fa448e4910d079e5ca4a6f1f5006)] Add a CLI coverage script		
- [[3fe34](https://github.com/theQRL/wallet.js/commit/2450b9a3b952efd271cdebfa3fb9411b6b83fe34)] Fix unit test		


**[Add: utils for getting hexseed from mnemonic](https://github.com/theQRL/wallet.js/pull/8)**
			
- [[00619](https://github.com/theQRL/wallet.js/commit/b67de4fdb35d7ac3b492a30803fd387bd7200619)] Add: utils for getting hexseed from mnemonic		
- [[530a9](https://github.com/theQRL/wallet.js/commit/7ffb34628c7ec301960f0c213c07c9c3bcf530a9)] Fix: lint errors		
- [[9e0e0](https://github.com/theQRL/wallet.js/commit/ad06ba5020143268bd11435392aa79f3eb59e0e0)] Add: unit tests for edge conditionals		