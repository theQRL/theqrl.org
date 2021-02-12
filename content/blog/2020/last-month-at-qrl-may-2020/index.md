---
layout: blog-post
slug: last-month-at-qrl-may-2020
date: 2020-05-01
author: "Jack Matier"
title: "Last month at QRL — May 2020"
summary: "EnQlave: Quantum Secure Ethereum Wallets, QRL v2.0.5, qrl-cli updates, OCAML Smart Contracts & QIP012"
featured_image: 14nLD110a9ccjJyUpX4yGeg.png
images:
  - 14nLD110a9ccjJyUpX4yGeg.png
  - 1jbJbWfN7g66Df-PsnHuYYQ.png
  - 1nsXsE3hN0t1kYXKFEb5mYQ.png
categories:
  - technical
---

## Legend

* [Development progress at a glance](#46a8)
* [EnQlave: The Quantum Safe for your Crypto Assets](#7989)
* [QRL v2.0.5 release](#cf79)
* [qrl-cli updates](#5d6d)
* [Secure smart addresses language foundation chosen: OCAML](#72a0)
* [QIP012: Suggestion for transaction replay protection](#e895)

## Development progress at a glance

As we’re approaching our two year anniversary, it’s a good time to take an honest look back at what we said we’d accomplish to what we have accomplished. Between Genesis and the Bromine hard-fork, we delivered on 13 different core features and 6 ecosystem features. Of the 3 that were deferred, we’re at various stages of two of them and are *committed* to the completion of all*.*

{{< image "./images/1jbJbWfN7g66Df-PsnHuYYQ.png" >}}

### Genesis/Actinium

**Delivered**

* [Quantum secure blockchain using XMSS](https://qrl.foundation/assets/QRLF-PR-20180626.pdf) with a 100% pq-secure address space
* [GUI wallet for Mac, Windows, and Linux](https://github.com/theQRL/qrl-wallet)
* [Full block explorer functionality](https://github.com/theQRL/block-explorer)
* [Quantum Resistant Tokens (QRT’s)](https://docs.theqrl.org/wallet/create-tokens/)
* [Notarisation](https://docs.theqrl.org/tools/notarisation/)
* Multiple external audits [red4sec](/blog/red4sec-security-audit-concludes-a-summary) and [x41 D-sec](https://www.x41-dsec.de/)
* [Extensible address format](https://docs.theqrl.org/developers/address/)
* [Multi-platform QRL node release](https://github.com/theQRL/QRL)
* Cryptonight Proof-of-Work

### Hardfork/Bromine

**Delivered**

* [Multisignature transactions](/blog/the-qrl-bromine-hardfork-a-look-inside#3065)
* [RandomX](https://github.com/tevador/RandomX)
* Backwards compatible state upgrades
* [Ephemeral Messaging System (EMS)](https://github.com/theQRL/ephemeral) Stub and [Tooling](https://github.com/theQRL/qrl-cli/)

### Hardfork/Cesium

**In progress**

* OCAML Based Smart Contracts

### Hardfork/D-\*

**Pending Research**

* Proof-of-stake

### Ecosystem

**Delivered**

* [Keybase Integration](/blog/qrl-and-keybase)
* [Multiple API’s](https://api.theqrl.org)
* [Hardware wallet support with Ledger Nano S/X](https://support.ledger.com/hc/en-us/articles/360019184453-Quantum-Resistant-Ledger-QRL-)
* Mobile wallets for [iOS](https://apps.apple.com/ca/app/qrl-wallet/id1458620542) and [Android](/blog/the-qrl-mobile-wallet-is-officially-launched)
* [Offline wallet generator](https://github.com/theQRL/offline-wallet-generator)
* [Docker QRL Node Support](https://docs.theqrl.org/node/docker/)

**In Progress**

* [enQlave: The quantum safe for your crypto assets](https://www.enqlave.io)
* [GO-QRL](https://github.com/theQRL/go-qrl)
* QRL Tipbot

### What we deferred, and where we’re at with each

* **Proof-of-Stake**
Likely the most notable thing on a lot of people’s minds.
Developed with a working testnet but deferred as more key research is needed, which is outlined from our [research grants](https://theqrl.org/research/grants/). 
Right now we’re optimistic that research will commence around August, and upon completion of that research, integration should be quick.

* **Ephemeral Messaging System (EMS)**
Deferred from genesis due to python not having suitable threading to meet the stability requirements of releasing a stable open-source enterprise-grade post-quantum blockchain. 
*Since then*, we’ve had an Ephemeral Messaging System (EMS) stub and tooling created, allowing anyone to create their own post-quantum secure messaging service, today — though using their own network. 
The decentralized node based network is still slated, and depends on GO-QRL.

* **Decentralized on-chain poll support**
Deferred for more testing and to further ensure that we cover a wide breadth of governance scenarios.

## EnQlave: The Quantum Safe for your Crypto Assets

{{< image "./images/1nsXsE3hN0t1kYXKFEb5mYQ.png" >}}

[The Quantum Resistant Ledger (QRL) Foundation](https://qrl.foundation/) announced last month, [enQlave](https://www.enqlave.io), the worlds *first* Ethereum based post-quantum secure digital wallet.

If you didn’t catch it already, you can read an [introduction to enQlave](/blog/enqlave-the-quantum-safe-for-your-crypto-assets) by Peter Waterland or get more in depth with [Bringing Post-Quantum Security to Ethereum](/blog/the-qrl-enklave-project-bringing-post-quantum-security-to-ethereum-and-other-blockchain-platforms) by Charlie Thompson who summarizes it well with:
> # QRL enQlave will bring the post-quantum security of XMSS ([eXtended Merkle Signature Scheme](https://tools.ietf.org/html/rfc8391)) to mainnet Ethereum, and eventually to any other blockchain platform with sufficiently expressive smart contract capabilities.

Beyond bringing the ability for any of the almost 100 million [ethereum](https://twitter.com/ethereumproject) unique addresses representing 31 billion in value in ETH alone post-quantum security, enQlave has the possibility to bring post-quantum security to the users of platforms such as [Tezos](https://twitter.com/tezos) and [eosio](https://medium.com/@eosio) with enough interest and sufficiently expressive smart-contract capabilities.

### Progress continues: Smart contract audit not far behind

Right now there’s a working interface which allows you to sign transactions, add and replace any number of keys, and create Ethereum Quantum Resistant Tokens (eQRT).

The smart contract is just going through some final touches and is getting closer to a final review, which will be followed with an audit.

## QRL v2.0.5 release

Release can be [found on github](https://github.com/theQRL/QRL/releases/tag/v2.0.5) — it’s not a required update but it does give some special functionality!

### Google annotations for REST support for PublicAPI & added google-api-python-client

This will give anyone immediate URL address resolution to QRL’s PublicAPI without having to install, run and maintain separate server components.

Previously, by default, you’d have access to just the QRL node API, which is fine when you’re interfacing through terminal, but isn’t helpful when creating applications as it’s not as expressive and encourages the use of your languages exec functions, something that, depending on the language, can be more difficult to keep safe.

Soon you’ll be able to use a REST API to return useful information. If, *for example*, you install the node through pip3 and utilize envoy-proxy, to return the blockheight, the address would be `[https://127.0.0.1:7778/api/height`](https://127.0.0.1/state)

If you installed docker, this would be similar, but you’d need to get the IP address of your container.

### Other updates

* Updated setuptools version to 46.4.0 & protobuf to 3.6.0

## qrl-cli updates

The QRL-CLI has gone from v1.4.5 → 1.7.1 and added refinements, especially to our Ephemeral Messaging System (EMS) system.

## Secure Smart Addresses language foundation chosen: OCAML

Hidden within the [enQlave announcement(s)](https://www.enqlave.io) is that we’ve been working on bringing [OCAML](https://ocaml.org/) smart contracts to the Quantum Resistant Ledger (QRL) platform for the next hardfork, Cesium.

From [OCAML](https://ocaml.org/)’s overview:
> [OCAML] is used in environments where [a single mistake can cost millions and speed matters](https://ocaml.org/learn/companies.html). … It’s a safe language. Programs are verified by the compiler before they can be executed, which rules out many programming errors, such as, for instance, confusing an integer for a pointer, or accessing a nonexistent field in a record.

## QIP012: Suggestion for transaction replay protection

**Whilst currently an extremely low risk vulnerability**, replay attack protection should ideally be considered and implemented in the next hard fork to completely mitigate this attack vector.

The attack scenario involves a transaction from one blockchain network being relayed to another through a malicious node. This is something possible between QRL Testnet and QRL Mainnet, however, it is not recommended to use the same QRL XMSS account on both testnet and mainnet due to the potential risk of OTS re-use.

Where this becomes more pertinent is when there’s an increase of multiple existing chains persisting where people are more likely to either confuse what chain they’re on, or be inclined to switch between chains and reuse accounts. The chance of such a scenario happening will increase as more interest is accumulated and with certain forking events, such as the switch from proof-of-work to proof-of-stake.

Some proposed solutions in the QIP are:

**network ID** — A unique numerical identifier, nodes on each network would find any transaction not using the correct identifier invalid. An example would be `'0000' = devnet`, `'0001' = testnet`, `'0002' = mainnet`, `'0003' = mainnet pos`, or simply stamping the genesis block hash into each transaction. Note this does not prevent replay attacks in later forks of a network using the same identifier.

**block hash** — each block in the chain has a unique hash value obtained from aggregating and hashing the block header (and incorporating the previous block header hash). Thus, stamping each transaction with the a recent 32 byte block header hash is a simple way of preventing a replay attack. The significant downside is this requires the transaction signer to know something about the current QRL chain which could be a problem for offline transaction signing. Another consideration is that choosing the most recent block could lead to a transaction entering the mempool only for the block to be discarded in a mini-fork and then the transaction become invalid. It would make sense then to choose a block hash at a given depth from the tip of the chain or specific epoch blocks at 1k intervals (or something suitable).

**tx hash** — it is possible for each transaction to optionally include the txhash of the last transaction from the account. It would therefore force an attacker to replay all historical transactions since the fork to achieve success — if there are no transactions since the fork then this would not be effective at preventing a replay attack.

While this subject has been previously discussed at length by the core development team, we would like to thank [red4sec](https://red4sec.com/en) (who [performed one of our audits](/blog/red4sec-security-audit-concludes-a-summary)) for reminding us.

QIP012's [overview](https://github.com/theQRL/qips/pull/25/files?short_path=6fdf8c6#diff-6fdf8c6fc91383d3892ca9efd19a6cd9) and [discussion](https://github.com/theQRL/qips/pull/25) can be found on github.