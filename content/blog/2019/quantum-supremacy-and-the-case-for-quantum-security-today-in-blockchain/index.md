---
layout: blog-post
slug: quantum-supremacy-and-the-case-for-quantum-security-today-in-blockchain
date: 2019-09-21
author: "Jack Matier"
title: "Quantum supremacy and the case for quantum security today in blockchain."
summary: "Google has reportedly hit quantum supremacy. This is an overview of that, why it matters, and what this news means to blockchain and other systems."
images:
  - mosca.png
categories:
  - article
toc: true
---

## Overview

Recently, news has broken out about Google reportedly hitting quantum supremacy.

This was first reported by the [financial times](https://www.ft.com/content/b9bb4e54-dbc1-11e9-8f9b-77216ebe1f17), who indicated that they’ve read a paper put on the NASA website before it was later taken down for unknown reasons. Since then, sites like [Gizmodo](https://gizmodo.com/google-says-its-achieved-quantum-supremacy-a-world-fir-1838299829), [MIT Technology Review](https://www.technologyreview.com/f/614416/google-researchers-have-reportedly-achieved-quantum-supremacy/), and [Fortune](https://fortune.com/2019/09/20/google-claims-quantum-supremacy/) have covered the event with more easily on the horizon.

While we’ll have to wait for Google to comment before we can confirm this milestone, there is some merit as they’ve been at the verge of achieving quantum supremacy for the last year when Google collaborated with NASA in 2018 to help them prove quantum supremacy. It was speculated late last year (2018) that the results would be seen _within months_.

Quantum supremacy, while ominous sounding, is really just a term that describes the ability of quantum computing devices to solve some specific (often limited in scope) problem that classical computers practically cannot. It’s the precursor to quantum advantage, where the problems become useful _beyond_ merely demonstrating that they can solve problems that classic computers practically cannot.

Being able to outperform tasks of a classical computer is a watershed moment for quantum computing history.

## What does this mean for blockchain?

If you’re not up to date, most blockchains (including all in the top 5 on CMC) use Elliptic Curve Digital Signature Algorithm (ECDSA) for public key cryptography. Using a quantum computer, [Shor’s algorithm](https://arxiv.org/abs/quant-ph/0301141) can be used to break ECDSA.

What this means is powerful enough quantum computers can derive the private key from the public key. So if an adversary gets your public key (and has access to a powerful enough quantum computer), then they can derive your private key, create a transaction, and empty your wallet.

As of June of 2018, it’s been c[alculated that 36% of bitcoins reveal their public keys](/@sashagnip/how-many-bitcoins-are-vulnerable-to-a-hypothetical-quantum-attack-3e59e4172e8). Further complicating the above matter, anytime you make a transaction, your public key is revealed to the network. At that point, if the quantum computer is fast enough, (or the network is congested, you pay a low tx fee, etc), a private key can be derived and a new transaction with a higher fee can be made which will process sooner, and empty your wallet.

More can be read in the paper “[quantum attacks on bitcoin, and how to protect against them](https://arxiv.org/pdf/1710.10377.pdf)”.

While all of the above is _absolutely true_, it should also be noted that quantum supremacy isn’t going to break blockchain _today._ Despite this, **we absolutely should be ready for one that can.**

## The nuance of risk

As blockchain is a ledger of transactions entrusted by the soundness of cryptography, it’s of paramount importance to ensure that the cryptography backing it is secure.

Without that security, the blockchain as a system that can’t be trusted — and there would be no point using it. It doesn’t matter how great your UI is or how many transactions per second or what smart contract features you have, without a foundation of security there’s no blockchain as we know it today.

With this in mind, it’s generally well understood that under the assumption that quantum computers are going to continue to make progress, at some point blockchain developers will need to update the cryptographic portion of their blockchain to be quantum resistant.

How much time do they have? Well, there’s a lot of considerations to take place. Everything from the advancement of quantum computers to the time to select and implement the algorithm.

[Allen Walters](https://medium.com/u/ad87280e1b3e?source=post_page-----390fe55daab5--------------------------------)laid out everything in his article that took [Mosca’s Theorem Of Risk Determination and applied it to Blockchain](/altcoin-magazine/an-addition-to-the-bitcoin-wiki-page-on-quantum-computing-and-moscas-theorem-of-risk-f2345e504bb4).

{{< image "./images/mosca.png" >}}

Modified for brevity from the article

> v = Selection of signature scheme, proposal for implementation. There are no plug and play signature scheme to replace current schemes.
> 
> w = Reaching consensus and upgrading the nodes.
> 
> x = Migration period. Due to the decentralized nature of blockchain, this can only be done by the users themselves, since only they have the private key and thus only they have access to the coins.
> 
> y = Stagnant phase to minimize the risk of burning live funds. After the migration period there will be unmigrated coins. Eventually the decision will need to be made of what to do to those addresses which are still vulnerable.
> 
> z = The time we have until a quantum computer of a critical level has materialized
> 
> q = Margin we should deduct from z as a safe margin to compensate the blind spot caused by the fact that any assessment of the development curve of quantum computers is based on incomplete information. Additionally, q accounts for the fact that developments on other levels like algorithms improvements can contribute to a quicker reach of the moment a quantum computer can break the cryptography in question.
> 
> V, w, x, y, z, and q are all undetermined. V, w, x, y will need to be done for every single blockchain that is serious about risk determination personally. Since for none of these periods there is a substantiated period of time known, no serious risk determination can be done.

The time we have until a quantum computer of a critical level has materialized (variable ‘z’ in the above formula) is different depending on who you ask. The paper referenced earlier, quantum attacks on bitcoin and how to protect against them, modeled earliest estimates to be 2027 (8 years from now).

[QCCalc](https://github.com/theqrl-community/QCcalc) is another model which can be run using Octave or Matlab and takes into consideration things like:

* yearly increase in qbits
* yearly error rate improvement
* yearly algorithmic improvement
* required runtime
* maximum acceptable risk

{{< image "./images/qccalc.png" >}}

Outside of these models there’s predictions ranging from 2 to 30+ years, but it’s important to consider that [humans are often comically bad at predicting events](https://www.theatlantic.com/magazine/archive/2019/06/how-to-predict-the-future/588040/).

It’s _also_ worth noting that while these models try to predict the future often based on past historical behavior, quantum computing is in its infancy and is now in an arms race. There’s lots at stake here for nations and commercial enterprises:

*   The [USA](https://faqq.info/quantum-computing-is-coming/#fn:USA), [China](https://faqq.info/quantum-computing-is-coming/#fn:CHINA), [EU](https://faqq.info/quantum-computing-is-coming/#fn:EU) and other nation states are investing heavily into quantum computing.
*   Tech giants such as [Google](https://faqq.info/quantum-computing-is-coming/#fn:GOOGLE), [IBM](https://faqq.info/quantum-computing-is-coming/#fn:IBM), [Intel](https://faqq.info/quantum-computing-is-coming/#fn:INTEL), [Rigetti](https://faqq.info/quantum-computing-is-coming/#fn:RIGETTI) and [Microsoft](https://faqq.info/quantum-computing-is-coming/#fn:MICROSOFT) are all competing for market share.

This makes being ready for what is known as a [black swan](https://en.wikipedia.org/wiki/Black_swan_theory) event critical to critical systems.

## What about the banks and the rest of the internet?

These are critical systems, but they’re also (mostly) centralized systems!

This means they don’t face some crucial issues decentralized blockchains do. They can centrally change their cryptography without compliance of their users and the whole process can be done behind user interface. Banks for example have your keys so can afford to upgrade their systems later without you noticing.

For websites and the internet at large, both servers and browsers will need to update to include post quantum security. However, it’s possible to safely deny users on older systems wanting to use insecure cryptographic methods. To add, organizations like Google and Cloudflare are hard at work ensuring our internet is safe:

*   [https://security.googleblog.com/2016/07/experimenting-with-post-quantum.html](https://security.googleblog.com/2016/07/experimenting-with-post-quantum.html)
*   [https://blog.cloudflare.com/towards-post-quantum-cryptography-in-tls/](https://blog.cloudflare.com/towards-post-quantum-cryptography-in-tls/)

## The case for the Quantum Resistant Ledger

As we’ve found in creating our own blockchain, the process of making a blockchain quantum secure wasn’t merely matter of dropping in another signature scheme and opening a github repository.

We first needed to consult with experts in the field of post-quantum cryptography and begin work on the structure of our codebase, which was first released to github in 2016\. It wasn’t until 2 years later did we release mainnet in 2018

Part of it is that time spent is because we’re pioneers in the field. This is the first time a project has used the eXtended Merkle Signature Scheme (XMSS) in a blockchain project. While XMSS is recognized by NIST as being post-quantum secure due to its minimal security assumptions (hashes), it’s also stateful, which means it needs to be run in systems that keep state (like blockchain), but comes with some special design considerations.

Beyond that, post-quantum secure cryptography often has performance and size considerations when compared to the likes of ECDSA and we had to ensure our network design and nodes could handle the load.

{{< image "./images/optimise.png" >}}

The QRL also includes the possibility to upgrade signature schemes (XMSS, SPHINCS, + future) and cryptographic hash functions (SHA2_256, SHAKE_128, SHAKE256 etc), and indicate so through an address format. This brings forward the capability of being crypto-agile, something no blockchain should be without.

All of this is externally audited with 100% coverage between [red4sec](/the-quantum-resistant-ledger/red4sec-security-audit-concludes-a-summary-563ecfe04c75) and [x41 D-sec](https://github.com/theQRL/audits/blob/master/x41%20Audit%20Response.pdf).

From this strong foundation built up a full _very user friendly_ ecosystem

* Desktop ([Windows](https://github.com/theQRL/qrl-wallet/), [Mac](https://github.com/theQRL/qrl-wallet/), [Linux](https://github.com/theQRL/qrl-wallet/))
* Mobile ([iOS](https://itunes.apple.com/us/app/qrl-wallet/id1458620542?ls=1&mt=8), [Android](https://play.google.com/store/apps/details?id=com.theqrl))
* Web ([wallet](https://wallet.theqrl.org), [explorer](https://explorer.theqrl.org))
* Hardware wallet support with [Ledger Nano S](https://support.ledger.com/hc/en-us/articles/360019184453)
* Reusable addresses
* On-chain message support (80 bytes)
* PQ-notarisation support
* [Keybase](/the-quantum-resistant-ledger/qrl-and-keybase-84968003bca2) ID integration

Along with several methods to interact with the foundation to further expand the ecosystem.

* [QRL API](https://api.theqrl.org/#qrl-api): Organized around GRPC which uses [protocol buffers](https://developers.google.com/protocol-buffers/docs/overview) for serializing structured data. If you’re working on an integrated application, this is what you want.
* [Explorer API](https://api.theqrl.org/#explorer-api): Great for quickly getting QRL address balances, population, and other such data.
* [Wallet API (requires node)](https://api.theqrl.org/#wallet-api): If you’re working with wallets (ie. exchanges and other services), this is recommended.
* [qrl command line (requires node)](https://docs.theqrl.org/wallet/wallet-cli/): Comes equipped with the python node, offers simpler functionality to the wallet API.
* [qrl-cli](https://github.com/theQRL/qrl-cli): Executable with mac, linux, and osx binaries, for interacting with the QRL blockchain via scripts and applications without requiring a full node.

All of this can be found in our [documentation](https://docs.theqrl.org) and [API](https://api.theqrl.org) sites.

What it comes down to is every blockchain will need to go through proposing and designing an implementation (not likely to be drop-in replacement), reach consensus of the propsal, (hopefully) audit their implementation, and then to get as much as the total population to manually migrate before making the decision to invariably lock peoples funds or let them be hacked.

> **Today, QRL has 100% quantum secure ledger coverage, and is ready to be built on and used for a quantum tomorrow.**

Be sure to come join us and our community at [Twitter](https://twitter.com/qrledger), [Reddit](https://reddit.com/r/qrl), [Facebook](https://facebook.com/theqrl), and [Discord](/discord).