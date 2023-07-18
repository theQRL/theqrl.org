---
layout: blog-post
slug: the-qrl-bromine-hardfork-a-look-inside
date: 2020-04-07T05:20:50.058Z
author: "Jack Matier"
title: "The QRL Bromine Hardfork -  A look inside"
summary: "The QRL Bromine Hardfork: A look inside"
featured_image: 1gOrStBxFYBOQaq1yBNkhVA.png
images:
  - 1gOrStBxFYBOQaq1yBNkhVA.png
  - 1SsXFrl3CxVK5xmtKSObdAQ.png
  - 1-we4MriMrfHaAcVInWkcgQ.png
  - 1C9sTRGLU4OI357N7L1oLEw.jpeg
features:
  - multisig
  - ephemeral-messaging-system
forks:
  - bromine
categories:
  - technical
---

## The QRL Bromine Hardfork: A look inside

### Quantum secure weighted threshold multisignature addresses & transactions, ephemeral messaging LatticeTX, and RandomX land in QRL mainnet.

From the beginning, we have been passionate about driving the solutions to prepare for the next revolution in secure digital asset storage.

This was demonstrated in 2018 with the launch of the first usable quantum secure enterprise-grade blockchain backed by the stateful signature scheme XMSS, as opposed to ECDSA found in many blockchains. [XMSS](https://tools.ietf.org/html/rfc8391) is now currently slated as a [draft recommendation](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208-draft.pdf) by the [National Institute of Science and Technology (NIST)](https://www.nist.gov/).

Our launch was further accompanied by a full suite of tools:

* Desktop wallets for [Linux, Mac, and Windows Web](https://github.com/theQRL/qrl-wallet/releases/latest)

* A [web wallet](https://wallet.theqrl.org) with the full functionality of the desktop wallet.

* Explorer, both on the [web](https://explorer.theqrl.org) and bundled as part of the desktop wallet clients.

* An API along with [extensive documentation](https://docs.theqrl.org)

* Colored Token functionality through QRT’s

* Two audits by [Red4Sec](/blog/red4sec-security-audit-concludes-a-summary) and [x41 D-sec](https://github.com/theQRL/audits/blob/master/X41-theQRL-Review-2018-Final-Report.pdf)

* [Flexible address format designed to be extensible and support a wide range of signature schemes and hash functions.](https://docs.theqrl.org/developers/address/)

Which we continued to improve upon our network by adding things like:

* An [offline wallet generator](https://github.com/theQRL/offline-wallet-generator)

* Mobile wallets for [iOS](https://apps.apple.com/us/app/qrl-wallet/id1458620542) and [Android](https://play.google.com/store/apps/details?id=com.theqrl&hl=en)

* Hardware wallet support with the [Ledger Nano S/X](https://support.ledger.com/hc/en-us/articles/360019184453-Quantum-Resistant-Ledger-QRL-?support=true)

* Multiple API’s documented at [api.theqrl.org](https://api.theqrl.org)

* A [qrl-cli](https://docs.theqrl.org/developers/qrl-cli/) for easy command-line usage

* Quantum resistant [notarisation](https://docs.theqrl.org/tools/notarisation/)

* [Keybase integration](https://docs.theqrl.org/tools/keybase/)

* [Docker QRL node support](https://hub.docker.com/r/qrledger/qrl-docker)

And with this hardfork, Bromine, we’re adding/improving:

* [Weighted threshold multisignature transactions](#3065)

* [Ephemeral Messaging LatticeTX](#ff89)

* [RandomX](#2cb2)

Still to look forward to are:

* Smart contracts

* Proof-of-Stake

* On-chain voting

* Proposals that have passed through the [QRL Improvement Proposals (QIP)](https://github.com/theQRL/qips) process

For the **QRL Bromine hardfork**, a special thanks goes out The QRL Contributors group, as well as the 48 contributors with 7,888 commits over the years that helped in innumerable ways.

## Major changes

### Weighted threshold multisignature addresses & transactions

{{< image "./images/1SsXFrl3CxVK5xmtKSObdAQ.png" >}}

Critical to any trustless (and trusted) system is the ability to handle different methods of governance on how allocated funds can be spent.

For this to work, during the creation of a multisig address, one or more signatories (addresses) are assigned and a final threshold to spend is set. Any signatory can then create a *spend request* (which is a proposed transaction to be voted on) with a final expiration date in the form of a block-height. If enough people vote to approve the transaction and meet or exceed the set threshold *before* that block-height is reached, the transaction goes through.

Examples use-cases for this are numerous, including:

* **Petty joint account:** Any signatory party can spend funds. Often used between two individuals with an established level of trust (couples).

* **Two-factor Authentication address:** As a way to add an extra level of security, it’s possible to setup a multisig address with two signatories, with the credentials spread between different devices and/or locations. In order to spend, a vote from both signatories would be required.

* **Committee in control of funds**: Allows for a select number of committee members to approve the spending of funds.

The *weighted threshold *aspect refers to the ability to assign *variable weights* to any signatory. So in the committee example, it’s possible that a few members are higher ranking (whether by seniority or otherwise) and could be assigned a higher weight.

More information on this can be found in a[ historic blog of ours (Oct-2018)](/blog/post-quantum-secure-multisignature-wallets).

Multisignature transactions functionality can be found in our desktop wallet in both [binary (for Windows, Mac, and Linux)](http://github.com/theQRL/qrl-wallet/releases/latest) and on the [web](https://wallet.theqrl.org) under the tools section. This is also accessible with the [qrl node cli](https://docs.theqrl.org/wallet/wallet-cli/).

### Ephemeral messaging (LatticeTX)

{{< image "./images/1-we4MriMrfHaAcVInWkcgQ.png" >}}

The Ephemeral Messaging System allows peer-to-peer messaging which is able to secure messages (or any data really) back and forth — and in the future with GO-QRL, utilize the QRL network to do so.

This is all done utilizing the quantum resistant key encapsulation and digital signature algorithms [Kyber](https://pq-crystals.org/kyber/) and [Dilithium](https://pq-crystals.org/dilithium/). To *further* increase security, these quantum resistant algorithms are combined with pre-quantum schemes that have been proven secure against classical computers.

To derive the keys for encryption and signatures, only the master seed of the wallet is used. Public keys are securely stored by a lattice transaction (LatticeTX) and associated to a QRL address, which can be seen as an identity. By deploying this functionality, the QRL blockchain can also serve as a standalone public-key infrastructure by any third-party application.

You can use qrl-cli to interact: [https://github.com/theQRL/qrl-cli/](https://github.com/theQRL/qrl-cli/)

As mentioned before, for the moment, you’ll still need to create your own *off-chain network*, but this sets the stage for GO-QRL, where everything can be incorporated on-chain for a fully decentralized, quantum secure, ephemeral messaging network!

### RandomX

{{< image "./images/1C9sTRGLU4OI357N7L1oLEw.jpeg" >}}*Art created by Discord user Smith*

QRL initially launched mainnet with cryptonight variant 1 (cn/1) due to its commitment to security (it was extensively reviewed) and its ability to avoid ASIC’s from centralizing the hashrate of the network. As time has gone on however, we’ve seen an increase of centralization to fewer miners.

While no PoW mining algorithm can completely avoid the progress of ASICS and FPGA’s, there’s been some implementations that show more promise than others. RandomX is one of those algorithms that shows promise.

As indicated [from their github](https://github.com/tevador/RandomX), RandomX is a proof-of-work (PoW) algorithm that is optimized for general-purpose CPUs. RandomX uses random code execution (hence the name) together with several memory-hard techniques to minimize the efficiency advantage of specialized hardware.

Beyond that, it’s critical that any algorithm that underpins the security of the network undergoes a thorough peer-review process. To that end, RandomX has been reviewed by 4 independent security research firms.

* [Trail of Bits](https://www.trailofbits.com/)

* [X41 D-SEC](https://www.x41-dsec.de/)

* [Kudelski Security](https://www.kudelskisecurity.com/)

* [QuarksLab](https://quarkslab.com/en/)

## Other minor changes

### Environment switch

Ability to toggle mainnet or testnet with a network-type argument to `start_qrl`.

*Note: To run both at the same time, it’s still necessary to change ports in config.yml of one of the nodes to avoid conflicts.*

### Added addr_to field in message transaction

Now an address can be added to an 80 byte message transaction, allowing for assignable messages on the blockchain.

### Added message_data to transfer transaction

Allows for on-chain transactions to include references to transaction ID’s in things like e-commerce applications.

### Other

* New API has been added to support data related to new transactions

* Address State has been optimized

* Block reorg limit has been reduced from 22,000 to 300 blocks

* Legacy API support for wallet daemon & grpcProxy

* grpcProxy & wallet daemon both support — network-type as an argument

* Updated versions for some of the dependencies

* Added more unit tests covering different scenarios

{{< image "./images/1gOrStBxFYBOQaq1yBNkhVA.png" >}}