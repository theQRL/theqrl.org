---
layout: blog-post
slug: qrl-monthly-feat-second-phase-grants-programme-july-2023
date: 2023-08-02
author: "The QRL Core Contributors"
title: "QRL Monthly: feat second phase of grants programme - July 2023"
summary: "Introducing Volt Development's QRL Mobile Wallet and the rollout of the second stage of the grants programme. Better wallet address format is proposed, and the Zond beta testnet is almost ready to roll out."
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### QRL's second phase grants programme launch

{{< image "./images/h.grant.png" >}}

Quantum Resistant Ledger (QRL) proudly announced phase two of its grants programme, representing a major milestone in fostering a robust and distributed cryptocurrency ecosystem.

Phase 1 included grants to several partners such as:

- [Quantum Resistant Corporation (QRC)](https://theqrc.com/), grant for supporting the post-quantum secure distributed blockchain technology, the Quantum Resistant Ledger.
- [Volt Development](https://volt-development.com/), grant for working on a mobile wallet to supercede our current one. More on that in this blog below!
- [Geometry Labs](https://geometrylabs.io/), grant for working on fusion post-quantum signatures.

With an ecosystem designed to withstand future cybersecurity challenges, QRL is dedicating significant resources to community projects, including quantum-resistant wallets and cryptography, to fortify against impending threats. As quantum computing progresses, the vulnerabilities within existing cryptocurrencies become more apparent.

To read more on the press-release, visit https://www.bloomberg.com/press-releases/2023-07-27/qrl-s-second-phase-grants-program-launches-imminently-enhancing-resilience-to-quantum-threats

To read more about the grants programme and apply from **1st August 2023** until **1st September 2023**: https://qrl.foundation/grants.html

### QRL Mobile Wallet - From Volt Development

{{< image "./images/h.mobilevolt.png" >}}

We are happy to present our latest update, a tool menu with the following options: creating a message on the blockchain, notarizing documents,and verifying a notarized document. We have also added Russian to the languages. You can find a brief presentation on [youtube](https://youtu.be/auDAg8uW1wY)

{{< youtube "auDAg8uW1wY" >}}

The key features within the wallet currently includes:

- Creating a brand new wallet or accessing an existing wallet
- Receiving transactions and sending transactions to one or multiple recipients simultaneously
- The ability to add a message to your transaction
- The option to add a wallet address to your personal address book
- Viewing your transaction history
- Available languages: English, Chinese, Japanese, Korean, Dutch, German, Italian, Russian and Spanish
- Receiving notifications for QRL price changes and/or received transactions
- Ability to use your device's security features
- Ability to add a message on the blockchain
- Ability to notarize a document on the blockchain
- Ability to check a notarized document using the document hash

People who have already installed the app can update it automatically.

To join the iOS QRL Mobile Wallet beta version, open this [testflight link](https://testflight.apple.com/join/CLnAN9oe) on your iPhone. When you click the link, it will open a page with two steps to follow. The first step is to download the TestFlight app. The second step is to install your app. After you install TestFlight, go back to the link and press the install button on the second step.

To join the Android QRL Mobile Wallet beta version, download it from Google Play here: https://play.google.com/store/apps/details?id=com.volt.qrlmobile

For developers can check out the code on the [Volt-Development gitlab](https://gitlab.com/Volt-Development/qrl-mobile-wallet).

## Development updates

### QRL Zond (Proof-of-Stake + EVM Smart Contracts)

The development of QRL Zond's next phase, *beta testnet* (currently in devnet), continues.

The beacon and consensus engine are both operational with major roadblocks eliminated, but a few more bugs, including memory-related ones, must be fixed and P2P must be tested before the launch of the QRL Zond beta testnet release. 

We're thrilled to report that it's getting closer and should be available within the next few months, so L1 developers, get your testing and development gloves (and tunes) ready!

#### QRL Zond changelog

**July 25**

- Added all the updates in the code related to Shanghai, Capella forks
- Changes in the consensus Engine to directly start with Capella fork
- Embedded BetaNet testnet configuration in the execution engine
- Several bug fixes & refactoring
- Updated dependencies versions

**July 18**

- Fix for windows build
- Memory utilization optimization
- Added new REST API’s
- Updated logic that deals with the fork choice
- Refactoring
- Added more unit tests

**July 11**

- Fix: Sync committee message verification is now functional
- Validator set is now generated in each epoch
- Fix: Gossip max length increased to allow block transmission as the block contains consensus related signatures

**July 4**

- Updated Sync Committee signing & getSyncAggregate to use Dilithium cryptography
- Updated maximum Signature Size for Sync Committee
- Added new constants related to Dilithium
- Added fix related to some instructions which becomes invalid in some of the ARM processor

### Post-quantum Fusion signatures

[NIST](https://www.nist.gov/) has informed [Geometry Labs](https://geometrylabs.io/) that they are only moving forward with many-times signature schemes at this time and will not include one-time signature schemes like Fusion in the current standardisation process. Although their limited scope is disappointing, it’s encouraging to hear from them that they thought Fusion was an interesting one-time signature approach and encouraged Geometry Labs to publish it for further peer-review.

If NIST decides to pursue one-time signature approaches in the future, Fusion signatures can always be resubmitted.

### A proposal for a better format of wallet addresses - QIP-018

Last month, Robert Pösel put together [QIP-018](https://www.theqrl.org/qips/qip018/), an improvement proposal towards a better *encoding* format of addresses (how information is presented visually in text). 

While not targeted for the current QRL network, this would take the output length from 79 characters to 64 characters, a reducing the address character space of ~19%

```
Q01070050d31c7f123995f097bc98209e9231d663dc26e06085df55dc2f6afe3c2cd62e8271a6bd 
to 
qyrdoywgudt9trqci6nm53gbyu4jddiud5ouqyarf57k7am5k9a6n3itqoja4pxe
```

Be sure to check out [QIP-018](https://www.theqrl.org/qips/qip018/) for current, up to date examples and character lengths with our upcoming network, Zond.

Motivations mentioned for reducing the address length includes easier visual inspection and manual writing of addresses; cleaner interfaces due to reduced space required for a non-breakable string; and to improve friendliness when compared to other cryptocurrencies with shorter addresses. The goal is to not just be shorter, but to be friendly as well.

Interested? Be sure to read the [full proposal](https://www.theqrl.org/qips/qip018/) on our website. Thoughts? Discussion is encouraged to take place in the [GitHub pull-request](	https://github.com/theQRL/qips/pull/44/), though can also be had more informally in one of our communities.

> [**QRL Improvement Proposals (QIPs)**](https://github.com/theQRL/qips/) is an open process to improve the QRL core protocol and other layers that effects most or all QRL technical implementations. Anyone can and is encouraged to submit a QRL Improvement Proposal (QIP) if they have an idea to improve the QRL core protocol.

### QRL + QRL Zond Documentation changes

People are encouraged to use our new [QRL documentation](https://docs-beta.theqrl.org/) over at [docs-beta.theqrl.org](https://docs-beta.theqrl.org/). This will supersede the [current docs](https://docs.theqrl.org) in place. Feedback and changes can be made to [James Gordon](https://github.com/fr1t2).

For those wanted to run the latest Zond devnet and see what the next generation of QRL has in store, be sure to check out the [Zond Documentation](https://zond-docs.theqrl.org/). Pull requests and issues can be made at it's [GitHub reposotory](https://github.com/theQRL/zond-documentation).

## Other Changes

### QRL is now listed on MEXC!

QRL is now trading as a [QRL-USDT](https://www.mexc.com/exchange/QRL_USDT) pair on MEXC thanks to a community effort! Be sure to check out our markets page for an up to date glance of where to find QRL, or join our [community (discord)](http://qrl.localbits.org:1313/discord) who made it happen.

## Quantum News

{{% qnews start="2023-07-01" end="2023-08-01" %}}

## Changelog

### theQRL/block-explorer

**[Add a richlist for desktop-sized views on Mainnet](https://github.com/theQRL/block-explorer/pull/428)**
			
- [[cb174](https://github.com/theQRL/block-explorer/commit/78597650425c8668fb135346046d87ac120cb174)] Scaffolding for richlist from new API		
- [[618c1](https://github.com/theQRL/block-explorer/commit/20c692d0ef7b19342b5324d1b4876e3024b618c1)] Basic top 100 richlist for mainnet via richlist-api		
- [[32aba](https://github.com/theQRL/block-explorer/commit/9887aecd16de814278c1537e5fdd316bd5332aba)] Display balance in Quanta		
- [[bf623](https://github.com/theQRL/block-explorer/commit/f09dcd445c01cb7bfdb0960d4c9f9805054bf623)] Working load more & CSV export, version bump for deploy		


**[Re-do NFT tx link fix](https://github.com/theQRL/block-explorer/pull/427)**
			
- [[0d15f](https://github.com/theQRL/block-explorer/commit/46ec0772d5e8beea4123249586ddbc140150d15f)] Re-do NFT tx link fix		


**[Fix NFT link on tx](https://github.com/theQRL/block-explorer/pull/426)**
			
- [[c60dc](https://github.com/theQRL/block-explorer/commit/f36c36d3e785125a39782a6b4677346d70bc60dc)] Fix NFT link on tx		


**[Bump nft-providers package version](https://github.com/theQRL/block-explorer/pull/425)**
			
- [[93c00](https://github.com/theQRL/block-explorer/commit/fcce837b88a98c2640b339e592a1e0bd02f93c00)] Bump nft-providers package version		


**[Add v1.0.0 of nft-providers module](https://github.com/theQRL/block-explorer/pull/424)**
			
- [[a453c](https://github.com/theQRL/block-explorer/commit/9c42e298380f1123410a941e9c8187a6127a453c)] NFT hash display on mobile		
- [[41582](https://github.com/theQRL/block-explorer/commit/03e3d1929963d15cb2a52e86ac74352191441582)] Update NFT providers		

### theQRL/nft-providers

**[Correct NFT demo publishing address](https://github.com/theQRL/nft-providers/pull/6)**
			
- [[c0853](https://github.com/theQRL/nft-providers/commit/550e5aa497bb6b03025f284195debcaffefc0853)] Correct NFT demo publishing address		

**[Add cards NFT demo site](https://github.com/theQRL/nft-providers/pull/5)**
			
- [[dc9df](https://github.com/theQRL/nft-providers/commit/358466821f0b7832578ba78123c94228ee5dc9df)] Add cards NFT demo site		

### theQRL/qips

**[QIP - Better format of wallet addresses](https://github.com/theQRL/qips/pull/44)**
			
- [[10f2f](https://github.com/theQRL/qips/commit/708f40a607959b9b162a48858c17fc7e01810f2f)] Create QIP draft - Better format of wallet addresses		
- [[313f4](https://github.com/theQRL/qips/commit/b62818fe48c3dfaae8a5290a87fcb64a26a313f4)] Mention Zond addresses change		
- [[e234b](https://github.com/theQRL/qips/commit/f4e7407597b9130dd9a3289a2627abddc88e234b)] Assign QIP ID and commens_uri		
- [[f9f37](https://github.com/theQRL/qips/commit/d2d822f938c4f0b895923731966738de9f6f9f37)] Specify to apply QIP on the Zond; fix and rephrase some parts		


**[Minor QIP workflow/instruction modifications](https://github.com/theQRL/qips/pull/43)**
			
- [[4f208](https://github.com/theQRL/qips/commit/a3820c78a4c5fdf3c8ab06be16829e71c514f208)] Update workflow to use rbenv, include server instructions		
- [[0c525](https://github.com/theQRL/qips/commit/e827c98887650a1a8c086c79fbca8d7b1720c525)] Fix incomplete paragraphs. Inconsistencies		
- [[ee6de](https://github.com/theQRL/qips/commit/3d5ca8492bfd12f3c4e7a8db06242dc8b08ee6de)] Merge remote-tracking branch 'upstream/master'		
- [[19016](https://github.com/theQRL/qips/commit/28400f579edc73e58f66aad637fac470b5919016)] Additional adjustments.		


**[Fix broken link](https://github.com/theQRL/qips/pull/42)**
			
- [[2001a](https://github.com/theQRL/qips/commit/ca3418eba5a0d28c991c0a337810c450d762001a)] Fix broken link		

### theQRL/qrl-wallet

**[Release public web wallet Mainnet NFT support](https://github.com/theQRL/qrl-wallet/pull/531)**
			
- [[abbc2](https://github.com/theQRL/qrl-wallet/commit/cb8c40cc6437924a80f95a44757058355fcabbc2)] NFTs: use linting service (dev deploy)		
- [[e7b7c](https://github.com/theQRL/qrl-wallet/commit/4fb4dae7c57744c1e517c23ee6dd401505ae7b7c)] NFT: rudimentary send linted metadata as per QIP014		
- [[8d5b4](https://github.com/theQRL/qrl-wallet/commit/f99d7992492ad3bee98ff3c4f9cece9fd0d8d5b4)] Add NFTs tab on main wallet page		
- [[9ec90](https://github.com/theQRL/qrl-wallet/commit/059d8dbffa5d9f9242ac954d854c2fc3f189ec90)] Add list of NFTs owned on main page and WIP on creation in Tx history		
- [[7dd1f](https://github.com/theQRL/qrl-wallet/commit/6b5bffb72045d9f8a9fcb91b145a1072a4f7dd1f)] NFT data on Tx page		
- [[1c9ce](https://github.com/theQRL/qrl-wallet/commit/dc9e74a092bd526a4859bd787ff02253a4e1c9ce)] Select NFT to transfer UI logic		
- [[49209](https://github.com/theQRL/qrl-wallet/commit/aeccafed729142b934f5383d0eba278a4d449209)] Parse token data as NFT on confirmation page		
- [[352d3](https://github.com/theQRL/qrl-wallet/commit/4ddf37c6499ce40d4dfa1dfb00db075cc79352d3)] Add NFT tx result page		
- [[560d6](https://github.com/theQRL/qrl-wallet/commit/96e9dba976956dce2a38641b326b30845a4560d6)] Use production version of linting service		
- [[92e05](https://github.com/theQRL/qrl-wallet/commit/d52f19adc0135c5634029d3f6344fef2ba992e05)] NFT visual fixes		
- [[81a56](https://github.com/theQRL/qrl-wallet/commit/2b5615a03aa4ce11ef27b188a1585e40d0681a56)] Bump meteor version		
- [[24aa9](https://github.com/theQRL/qrl-wallet/commit/144956f4594c541f03d6949e7b238d2862624aa9)] Dependency updates		
- [[2711d](https://github.com/theQRL/qrl-wallet/commit/8ba68ea2fcb47996a59b8da62267409b2312711d)] Dependency version bumps		
- [[e9699](https://github.com/theQRL/qrl-wallet/commit/1ffd9f37f18daa939994b2d4cc13ee3aa91e9699)] Update NFT providers		

### theQRL/theqrl.org

**[Update to include QIP018](https://github.com/theQRL/theqrl.org/pull/357)**
			
- [[8189b](https://github.com/theQRL/theqrl.org/commit/60ad1592eb6fa6df3b733c48e70485d9ad08189b)] Merge remote-tracking branch 'upstream/main'		
- [[c82ad](https://github.com/theQRL/theqrl.org/commit/26db7c7f5dd058f65c57801d8ff93aa1d4bc82ad)] Merge remote-tracking branch 'upstream/main'		
- [[b56b7](https://github.com/theQRL/theqrl.org/commit/60624a99abc51c3a93c68f199fcc388a52bb56b7)] Update to include QIP018		


**[QRL Weekly](https://github.com/theQRL/theqrl.org/pull/356)**
			
- [[30e7f](https://github.com/theQRL/theqrl.org/commit/31d001c6d514cd835ecf5e0b7a351f6235630e7f)] QRL Weekly		
- [[04a8c](https://github.com/theQRL/theqrl.org/commit/1dbe214f371ff6b44b10bca71a282678b9304a8c)] Update stats		


**[Assorted minor changes](https://github.com/theQRL/theqrl.org/pull/355)**
			
- [[45d75](https://github.com/theQRL/theqrl.org/commit/811ab2309fe85e562f1fec4608d53cc988745d75)] Small contextual edit		
- [[796f1](https://github.com/theQRL/theqrl.org/commit/8df7fb4913f19e0feb21cad059f515049f9796f1)] Assorted changes		


**[QRL Weekly](https://github.com/theQRL/theqrl.org/pull/354)**
			
- [[73c33](https://github.com/theQRL/theqrl.org/commit/2baab5638c4a858e41731395f7a9551c3c073c33)] Add linkinator for broken link checking		
- [[40a34](https://github.com/theQRL/theqrl.org/commit/80445c1033047ad276c6281a28cec8c432e40a34)] Fix some broken/redirected links		
- [[27a1f](https://github.com/theQRL/theqrl.org/commit/0b80dff73b8d25ea805d03879d95abe786827a1f)] QRL Weekly		
- [[b68d4](https://github.com/theQRL/theqrl.org/commit/bd9347d8ba1a226b57129fa9b8ea225f5abb68d4)] Quantum news updates		
- [[33d58](https://github.com/theQRL/theqrl.org/commit/0ecd475d3c6b801331e26f89134a20e636633d58)] Blurb fix		


**[New quantum news + weekly news](https://github.com/theQRL/theqrl.org/pull/353)**
			
- [[8467c](https://github.com/theQRL/theqrl.org/commit/038ae5fe68a8464e086eebb02b951b69d6c8467c)] New quantum news + weekly news		
- [[ee2c6](https://github.com/theQRL/theqrl.org/commit/2c769d2e5f60254f4abca4145a7733f60a4ee2c6)] Update the quantum news yaml data file		


**[Add MEXC exchange to markets page](https://github.com/theQRL/theqrl.org/pull/352)**
			
- [[eee46](https://github.com/theQRL/theqrl.org/commit/54275f6aca49a55df77fc33d1592f6635a1eee46)] Add MEXC exchange to markets page		

### theQRL/wallet.js

**[Publish v0.1.0 to npm](https://github.com/theQRL/wallet.js/pull/10)**
			
- [[43a67](https://github.com/theQRL/wallet.js/commit/d5f7aa70adea19881f186292ebf4589163c43a67)] Publish v0.1.0 to npm		

### theQRL/web3

**[Update: @theqrl/wallet.js version](https://github.com/theQRL/web3/pull/4)**
			
- [[98f16](https://github.com/theQRL/web3/commit/25bc5a12ea00c3655ebde5e7491c428a79098f16)] Fix: web3 transaction verification flow		
- [[c06f4](https://github.com/theQRL/web3/commit/eeb4c5611c488e3feb9b3d0265eb5c77110c06f4)] Fixed output formattings		
- [[34417](https://github.com/theQRL/web3/commit/01ac13e512e02e5541ae91a9313e4a4f5e134417)] getTransactionByHash -> getTransaction		
- [[7763c](https://github.com/theQRL/web3/commit/041f9158c2433188d8298d11733261f199a7763c)] Updated: getTransactionByHash method		
- [[6d667](https://github.com/theQRL/web3/commit/df1b4fdd8a42e3ce6973659607dab4c1cfa6d667)] Updated: @theqrl/wallet.js version		
