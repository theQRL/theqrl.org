---
layout: blog-post
slug: last-month-at-qrl-january-2022
date: 2022-02-02
author: "Jack Matier"
title: "Last Month at QRL - January 2022"
summary: "QRL Mainnet V3.0 (codename Cesium) has been released, a look and appreciation of QRL Community Code Initiatives, the World's 1st Steampunk Quantum Computer Resistant Blockchain Node, and a plethora of code updates!"
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### QRL Mainnet v3.0 (Cesium) has been released!

{{< image "./images/hi.mainnet.png" >}}

We’re pleased to announced that QRL mainnet version 3 (codenamed Cesium) has been released!

This mainnet release is the result of [QRL Improvement Proposal #16 (QIP-016)](/qips/qip016/) which proposed to reduce QRL emissions in order to improve the network. As part of the QIP process, many of the positive and negative considerations were discussed at length before being put to our first on-chain vote resulting in the QIPs approval. The final determination can be found on the QIP GitHub discussion page.

The hard fork implements an emission reduction by a multiplication factor of 0.4x of the per block coinbase reward starting at the hard fork block height of **1,938,000**, which has an estimated date time of **2022-02-25 07:30 UTC** as of this blog.

Updating is simple, and consists of no API changes so wont break any environments.

```bash
# Step 1. Stop QRL node
# Step 2. Update QRL node
pip3 install qrl -U

# Step 3. Start QRL node
start_qrl
```

You can read [more detailed instructions](/blog/qrl-mainnet-release-version-3-cesium/#upgrade-instructions) in our [mainnet v3 release blog](/blog/qrl-mainnet-release-version-3-cesium/) or our recent [video guide featuring the construction of a QRL steampunk node](https://www.youtube.com/watch?v=-h7qayMZSK8)! 

### Community Code Initiatives

{{< image "./images/hi.community.png" >}}

We often pride ourselves on maintaining a high level of code-transparency with [55 public and open-source (MIT)](https://github.com/theQRL/) *source* repositories (65 total), but many might not know about the works of the QRL community, which have contributed [14 repositories to date](https://github.com/theqrl-community/). The two most recent from January are **QRLtoSQLite** and **zeus-proxy-advanced**.

- [QRLtoSQLite](https://github.com/theqrl-community/QRLtoSQLite): SQLite database of the QRL state
- [zeus-proxy-advanced](https://github.com/theqrl-community/zeus-proxy-advanced): Tool for developers to use GRPC functions via a REST API + a testnet faucet
- [qrllight](https://github.com/theqrl-community/qrllight): PyQt5 blockchain wallet for Quantum Resistant Ledger, a post quantum secure blockchain, using XMSS
- [qrlbutler](https://github.com/theqrl-community/qrlbutler): Discord.js bot that helps support the QRL community through helpful functions
- [qrl-tokenomics](https://github.com/theqrl-community/qrl-tokenomics): Tools and datasets to evaluate QRL tokenomics of the QRL blockchain project
- [tipbot](https://github.com/theqrl-community/tipbot): Tipbot written in javascript to enable tipping of QRL across social media sites
- [Qrllib_Windows](https://github.com/theqrl-community/Qrllib_Windows): Windows native support for the QRL Core Library
- [QRL_Android](https://github.com/theqrl-community/QRL_Android): Running a QRL node on Android
- [QRL_rpi](https://github.com/theqrl-community/QRL_rpi): Running a QRL node on a Raspberry Pi
- [faqq](https://github.com/theqrl-community/faqq): Frequently asked quantum questions 

The QRL Community consists of forward-thinking professionals and amateurs of various backgrounds and ages around the world that strives to create an accessible and open environment for everyone to thrive. Without them, the QRL project would not exist as it is today.

With code being the engine that turns gears of a working blockchain and the ecosystem that surrounds it, having a strong community of contributors can ensure that those maintainers who write the code, while individually ephemeral, are collectively eternal. Longevity at its finest.

From the beginning, we've always had [QRL Improvement Proposals (QIPs)](https://github.com/theQRL/qips), where anyone can form a proposal for core protocol changes. Last year, we made headway with [on-chain voting](/features/on-chain-voting/) so that the community can better steer the direction of QRL. That lead to the first on-chain vote, which resulted in [QRL Mainnet v3.0](/blog/qrl-mainnet-release-version-3-cesium/). We also hosted our [first hackathon](/blog/qrl-winter-hackathon-2021/), which we will be doing more of.

In the coming years, we'll be taking this further. Many reading may have heard of the QRL Enhancement Program (tentative title) which is under development, and aims to give a broader focus to community driven initiatives which covers more ground. Anything outside of core protocol updates would apply here, including everything from social media campaigns and graphic design, to the internationalisation of content or local meetups. While it's imperative to do everything right, with the amount of demand from the community that wants to hit the ground running, we're looking at a way we can have an intermediate solution, so stay tuned!

Have a project that's not included in The QRL Community GitHub organisation? Get in touch to a team member in [Discord](/Discord), and we'll be able to add it either as a mirror or as a source copy. 

#### New Release: QRLtoSQLite

{{< image "./images/qrltosqlite.png" >}}

The [QRL blockchain](https://github.com/theQRL/QRL/) uses [LevelDB](https://github.com/google/leveldb) to store its information. While a very capable key value store database with a focus on performance, it's not one that's readily accessible for those wanting to analyze the QRL blockchain or us it in other programs that may be more suitable with a RDMS.

The [QRLtoSQLite](https://github.com/0xFF0/QRLtoSQLite) repository by 0xFF0 (@0xFF in Discord) provides tooling to create an SQLite database from the data directory of a QRL node and includes the occasional snapshot of a database accessible directly from the GitHub repo.

#### New Release: zeus-proxy-advanced

{{< image "./images/zeusproxyadv.png" >}}

[Zeus-proxy-advanced](https://github.com/successor1/zeus-proxy-advanced) from successor1 (@runforest in Discord) is a tool inspired from [zeus-proxy](https://github.com/theQRL/zeus-proxy)(different code base) for developers to use GRPC functions via a REST API. 

It's also meant for users, who can use it as a testnet faucet for the QRL Blockchain over at [quantafaucet.xyz](http://quantafaucet.xyz/)

Current methods are:

- **POST** /api/faucet
- **GET** /grpc/mainnet/GetBalance/{qaddress}
- **GET** /grpc/mainnet/GetBlock/{headerhash}
- **GET** /grpc/mainnet/GetBlockByNumber/{number}
- **GET** /grpc/mainnet/GetHeight
- **GET** /grpc/mainnet/GetMiniTransactionsByAddress/{qaddress}
- **GET** /grpc/mainnet/GetOTS/{qaddress}
- **GET** /grpc/mainnet/GetStats
- **GET** /grpc/mainnet/GetTotalBalance/{qaddress}
- **GET** /grpc/mainnet/GetTransaction/{transaction_hash}
- **GET** /grpc/testnet/GetBalance/{qaddress}
- **GET** /grpc/testnet/GetBlock/{headerhash}
- **GET** /grpc/testnet/GetBlockByNumber/{number}
- **GET** /grpc/testnet/GetHeight
- **GET** /grpc/testnet/GetMiniTransactionsByAddress/{qaddress}
- **GET** /grpc/testnet/GetOTS/{qaddress}
- **GET** /grpc/testnet/GetStats
- **GET** /grpc/testnet/GetTotalBalance/{qaddress}
- **GET** /grpc/testnet/GetTransaction/{transaction_hash}

### The World's 1st Steampunk Quantum Computer Resistant Blockchain Node

{{< image "./images/hi.steampunk.png" >}}

Michael Strike from the core QRL team walks us through the creation of a fully functioning steampunk themed QRL node as well as upgrading the node to the latest mainnet release v3.0 (codnamed Cesium).

- Why should I upgrade my QRL node? 
- What happens if I don't upgrade my node?
- How to upgrade your QRL Node 3.0 (Cesium)
- Inspiration for the Steampunk themed QRL custom node
- Steampunk themed QRL node- Full Walkthrough of build
- Build complete & fully functioning

{{< youtube "-h7qayMZSK8" >}}

## Quantum News

### Million-Qubit Quantum Computing? How SEEQC Plans To Scale Quantum Computers	

> “What we’re focused on really is figuring out a strategy for how to scale a quantum computer,” CEO John Levy told me recently on the TechFirst podcast. “As much as IBM will get to a thousand or thousands of qubits ... the question is how do we get to ten thousand, a hundred thousand, a million qubits so that we actually scale quantum computers to the complexity of the problems that large companies care about.”
>
> “And that’s what we’re doing.”
>
> Read more at [Forbes](https://www.forbes.com/sites/johnkoetsier/2022/01/11/million-qubit-quantum-computing-how-seeqc-plans-to-scale-quantum-computers/?sh=1fdb1a5a5b46)

###  A new method for quantum computing 

> Physicists from the University of Amsterdam have proposed a new architecture for a scalable quantum computer. Making use of the collective motion of the constituent particles, they were able to construct new building blocks for quantum computing that pose fewer technical difficulties than current state-of-the art methods.
> 
> Read more on [EurekAlert](https://www.eurekalert.org/news-releases/941780)

### What is the quantum apocalypse and should we be scared?

> Imagine a world where encrypted, secret files are suddenly cracked open - something known as "the quantum apocalypse".
> ... Seriously? That does sound completely apocalyptic, so why haven't we heard more about this?
>
> The answer is that yes, OK, this would indeed be the case if no precautions were being taken. "If we weren't doing anything to combat it then bad things would happen," says a Whitehall official who asked not to be named.
>
> In practice, mitigation efforts are already in train and have been for some years. In the UK, all government data classified as "top secret" is already "post-quantum" - that is, using new forms of encryption which researchers hope will be quantum-proof. 
> 
> Read more on [BBC News](https://www.bbc.com/news/technology-60144498)

## Development Changelog

### theQRL/block-explorer

**[Dependency spring clean](https://github.com/theQRL/block-explorer/pull/410)**

* [[d19ad](https://github.com/theQRL/block-explorer/commit/49f060d4a926587bfce7c357d2d55e1d5a7d19ad)] Upgrade dependencies
* [[fb6c2](https://github.com/theQRL/block-explorer/commit/dd7531eb30d5a99c78cceb14eab09c863a3fb6c2)] Node v14 in CI
* [[d8a27](https://github.com/theQRL/block-explorer/commit/2d6ffb287a5fa89a511bad7ddb6bfc64e04d8a27)] Merge pull request #409 from jplomas/master Upgrade dependencies
* [[de8ef](https://github.com/theQRL/block-explorer/commit/c0c8512153c4cf7919cbf1218479ef3b250de8ef)] Merge branch 'master' into testnet

**[Upgrade dependencies](https://github.com/theQRL/block-explorer/pull/409)**

* [[d19ad](https://github.com/theQRL/block-explorer/commit/49f060d4a926587bfce7c357d2d55e1d5a7d19ad)] Upgrade dependencies
* [[fb6c2](https://github.com/theQRL/block-explorer/commit/dd7531eb30d5a99c78cceb14eab09c863a3fb6c2)] Node v14 in CI

**[MS_VOTE tx page invalid QRL address [Testnet -> Mainnet]](https://github.com/theQRL/block-explorer/pull/408)**

* [[9346d](https://github.com/theQRL/block-explorer/commit/9707df2a4e807f14b290014a7342251a4729346d)] Merge pull request #376 from theQRL/master Rebase onto master & redeploy
* [[ae0df](https://github.com/theQRL/block-explorer/commit/5b9b65669474b6a807751c92437e1659d97ae0df)] Merge pull request #380 from theQRL/master Latest node version
* [[85f4a](https://github.com/theQRL/block-explorer/commit/2bed97b01190852d87aa2edc5da72d56c9385f4a)] Merge pull request #384 from theQRL/master Herominers update
* [[37b49](https://github.com/theQRL/block-explorer/commit/1ca083f9959a68cc66f6e698150e2be2d4637b49)] Update to Meteor 2.5.1
* [[d96aa](https://github.com/theQRL/block-explorer/commit/c3731f5c4189e09081eac6d595a101342a4d96aa)] Merge pull request #402 from theQRL/master Even testnet and mainnet code
* [[4f580](https://github.com/theQRL/block-explorer/commit/cde467e83d807513ad43f53e356bfd1dc834f580)] Merge remote-tracking branch 'origin/master'
* [[0d911](https://github.com/theQRL/block-explorer/commit/43e1e553ebe87f397dcd24ec1c31528898f0d911)] Merge pull request #405 from jplomas/master Meteor 2.5.1
* [[f3323](https://github.com/theQRL/block-explorer/commit/ef9027116ea02842a3e20bf4a467442ade6f3323)] Prevent invalid txhash -> QRL address conversion
* [[5a46d](https://github.com/theQRL/block-explorer/commit/02891f7da38fa73a673f23ebe22cc160fd05a46d)] Merge pull request #407 from jplomas/master Prevent invalid txhash -> QRL address conversion

**[Prevent invalid txhash -> QRL address conversion](https://github.com/theQRL/block-explorer/pull/407)**

* [[f3323](https://github.com/theQRL/block-explorer/commit/ef9027116ea02842a3e20bf4a467442ade6f3323)] Prevent invalid txhash -> QRL address conversion

**[Meteor 2.5.1](https://github.com/theQRL/block-explorer/pull/405)**

* [[37b49](https://github.com/theQRL/block-explorer/commit/1ca083f9959a68cc66f6e698150e2be2d4637b49)] Update to Meteor 2.5.1
* [[4f580](https://github.com/theQRL/block-explorer/commit/cde467e83d807513ad43f53e356bfd1dc834f580)] Merge remote-tracking branch 'origin/master'

**[Fixes issue with MS address not in state](https://github.com/theQRL/block-explorer/pull/404)**

* [[fa417](https://github.com/theQRL/block-explorer/commit/66145a6dacfce6a423f64c8fcbfae01153efa417)] fix: multi-output tokens received on address page (Issue #399)
* [[eceee](https://github.com/theQRL/block-explorer/commit/5728a6eedd5a8ff73b71ad6ab485fb3c59deceee)] Add meta description to header
* [[8674e](https://github.com/theQRL/block-explorer/commit/e635e774d28e86360c5443e63ab3d4c2ddd8674e)] Merge branch 'master' of github.com:jplomas/block-explorer
* [[bbfce](https://github.com/theQRL/block-explorer/commit/260eb4bacb63b6af796c548d9e5abfc82e1bbfce)] Merge branch 'theQRL:master' into master
* [[50b62](https://github.com/theQRL/block-explorer/commit/03d7fc3af1aeb87eec5429d310382f7159550b62)] Fix unhandled error on MS addresses not in state which could lead to explorer crash
* [[5f5fc](https://github.com/theQRL/block-explorer/commit/e010c4a95fc88937cd32396ad874979f7f95f5fc)] Merge remote-tracking branch 'origin/master'

**[Even testnet and mainnet code](https://github.com/theQRL/block-explorer/pull/402)**

* [[d9c81](https://github.com/theQRL/block-explorer/commit/06bed11f712341209815f1bd892ebeca25fd9c81)] Add volt-mine config from PR & up node version
* [[8d9c4](https://github.com/theQRL/block-explorer/commit/b2470095b8064b091b48881ea11ac89e3198d9c4)] Add pools from @jackalyst PR
* [[b0e39](https://github.com/theQRL/block-explorer/commit/4789fc4803ceb592420222d718bbf9eb66bb0e39)] Merge branch 'master' into master
* [[58c5b](https://github.com/theQRL/block-explorer/commit/4cfcd4c9758158349c0dbc9b3163ba181e358c5b)] Merge pull request #393 from jplomas/master Amalgamate PRs and fix CI checks
* [[40401](https://github.com/theQRL/block-explorer/commit/1aa11c5f0778b1a74818c45fa9852db197d40401)] Bump to use node v12 - dependencies updated - broken SHA512 implemetation on newer node versions fixed - semantic->fomantic
* [[b5ff2](https://github.com/theQRL/block-explorer/commit/6872e751d233bbae94d1a263cd3e09d3d71b5ff2)] Merge branch 'master' of github.com:jplomas/block-explorer
* [[13d53](https://github.com/theQRL/block-explorer/commit/e17a97f2f6b6922f5cb8e4bd8668fa09f7613d53)] Merge branch 'master' into master
* [[c17b1](https://github.com/theQRL/block-explorer/commit/7bcafa1fa5b85a11caa0edec461ce06449bc17b1)] Use crypto-js v4.0.0
* [[a691f](https://github.com/theQRL/block-explorer/commit/5659989b6d35d42e9887ca70c84c68b4800a691f)] Merge branch 'master' of github.com:jplomas/block-explorer
* [[6ed09](https://github.com/theQRL/block-explorer/commit/743f7d2461268fcfbbce07490074e276c806ed09)] Merge pull request #394 from jplomas/master Node v12
* [[5b8b8](https://github.com/theQRL/block-explorer/commit/102c6311723cb6e72970a522278b0d956425b8b8)] Add meta description to header
* [[2fbf9](https://github.com/theQRL/block-explorer/commit/24f087005bde3d08bb1385786ee904629d62fbf9)] fix: multi-output tokens received on address page (Issue #399)
* [[53a6d](https://github.com/theQRL/block-explorer/commit/12160fd17d690d3583e8de158358ce47b0453a6d)] Merge pull request #396 from jackalyst/master Add meta description to header
* [[8e2fe](https://github.com/theQRL/block-explorer/commit/e8b3cec713e6e1d9ed3e4c5131e28985e868e2fe)] Merge branch 'master' into master
* [[f901a](https://github.com/theQRL/block-explorer/commit/4228718ebfd35866ef8f8dbc58e74db0085f901a)] Merge pull request #401 from jplomas/master fix: multi-output tokens received on address page (Issue #399)
* [[fa417](https://github.com/theQRL/block-explorer/commit/66145a6dacfce6a423f64c8fcbfae01153efa417)] fix: multi-output tokens received on address page (Issue #399)
* [[eceee](https://github.com/theQRL/block-explorer/commit/5728a6eedd5a8ff73b71ad6ab485fb3c59deceee)] Add meta description to header
* [[8674e](https://github.com/theQRL/block-explorer/commit/e635e774d28e86360c5443e63ab3d4c2ddd8674e)] Merge branch 'master' of github.com:jplomas/block-explorer
* [[bbfce](https://github.com/theQRL/block-explorer/commit/260eb4bacb63b6af796c548d9e5abfc82e1bbfce)] Merge branch 'theQRL:master' into master
* [[50b62](https://github.com/theQRL/block-explorer/commit/03d7fc3af1aeb87eec5429d310382f7159550b62)] Fix unhandled error on MS addresses not in state which could lead to explorer crash
* [[5f5fc](https://github.com/theQRL/block-explorer/commit/e010c4a95fc88937cd32396ad874979f7f95f5fc)] Merge remote-tracking branch 'origin/master'
* [[8a74e](https://github.com/theQRL/block-explorer/commit/a455914ebe56d934574ebe07de2dbeb51ce8a74e)] Merge pull request #404 from jplomas/master Fixes issue with MS address not in state

### theQRL/qips

**[Move QIP016 from "in development" to "awaiting hardfork"](https://github.com/theQRL/qips/pull/39)**

* [[a08e2](https://github.com/theQRL/qips/commit/92541df5b4d9d4daaaadbdc6770fba27c5ca08e2)] Move QIP016 from in development to awaiting_hardfork

### theQRL/theqrl.org

**[Add network stats map](https://github.com/theQRL/theqrl.org/pull/273)**

* [[7242c](https://github.com/theQRL/theqrl.org/commit/eddce32709668d272006620e4e0a04879d37242c)] Add script to update various statistics
* [[e66b4](https://github.com/theQRL/theqrl.org/commit/8e0a5bd655d5a2d98874d1f6b1e2c4e2740e66b4)] Add network stats map
* [[b9558](https://github.com/theQRL/theqrl.org/commit/cfae142a742b7ada7d92579d12ca1cc2ec5b9558)] Update data

**[Add QRL Mainnet v3.0 release blog](https://github.com/theQRL/theqrl.org/pull/272)**

* [[94b52](https://github.com/theQRL/theqrl.org/commit/52e8cac919d97307374fe750d9438b3c97494b52)] Add QoL 'copy' function to code sections
* [[430de](https://github.com/theQRL/theqrl.org/commit/0f2776ba619d3adc6a86f95dbf5685510f9430de)] Add QRL Mainnet v3.0 release blog
* [[f42d9](https://github.com/theQRL/theqrl.org/commit/64c2b4c4a47cc544fa1061615776bc88c48f42d9)] Emission chart alignment fix
* [[6f33a](https://github.com/theQRL/theqrl.org/commit/75dacef5e14bfc0da7593ca48e647c5fe1d6f33a)] Additional fixes Michael Strike/Ryan Malinowski

**[New QRL Wallet v1.8.1 Release!](https://github.com/theQRL/theqrl.org/pull/271)**

* [[da22b](https://github.com/theQRL/theqrl.org/commit/21159f74d8dd9f2f4364235b396f78651dcda22b)] New QRL Wallet Release!

**[New blog: QRL Winter Hackathon 2021 results](https://github.com/theQRL/theqrl.org/pull/270)**

* [[625c5](https://github.com/theQRL/theqrl.org/commit/2ba32f4474de90d4b92ca13c88dd1b5df02625c5)] Add preliminary table styles
* [[457af](https://github.com/theQRL/theqrl.org/commit/8ba58269320093ce46a6405b189e10ac6b2457af)] New blog: QRL Winter Hackathon 2022 results
* [[b18a4](https://github.com/theQRL/theqrl.org/commit/a3f7b58e1edf71f3d923302933c00ca4bb2b18a4)] Hackathon blog text

### theQRL/qrl-wallet

**[Even Testnet/Mainnet](https://github.com/theQRL/qrl-wallet/pull/512)**

* [[cd913](https://github.com/theQRL/qrl-wallet/commit/bbbe28ee6e137f46f2a9bb64503253f1285cd913)] Fix for Ledger Set XMSS/OTS index & version display
* [[9fe1e](https://github.com/theQRL/qrl-wallet/commit/37a817d31187144793ef851b46f1b30a4f49fe1e)] Merge pull request #509 from jplomas/master Fix for Ledger Set XMSS/OTS index & version display
* [[164b4](https://github.com/theQRL/qrl-wallet/commit/e208bcb7fd395b78a492cbd3df43a986582164b4)] Hard fork node compatibility & rewrite of proto hash verification
* [[91060](https://github.com/theQRL/qrl-wallet/commit/64145fe6134cb4c47142d634e2a697c098591060)] Merge pull request #511 from jplomas/master Hard fork node compatibility & rewrite of proto hash verification

**[Hard fork node compatibility & rewrite of proto hash verification](https://github.com/theQRL/qrl-wallet/pull/511)**

* [[164b4](https://github.com/theQRL/qrl-wallet/commit/e208bcb7fd395b78a492cbd3df43a986582164b4)] Hard fork node compatibility & rewrite of proto hash verification

### theQRL/qrl-cli

**[feat: Adding notarization command & node connection retry on connection failure](https://github.com/theQRL/qrl-cli/pull/62)**

* [[f043e](https://github.com/theQRL/qrl-cli/commit/96191aade10c30a16367da7fcd5aba850abf043e)] feat: Notarization message transaction (#16) Using a given sha256sum of user data, will send a message transaction formatted with notarization encoding onto the chain.
* [[5ad62](https://github.com/theQRL/qrl-cli/commit/fa5ea0654c03a8dd661d772649b81906b3d5ad62)] fix: Circleci test failing Circleci failing when args without variables are in the before() block. Moving back to the previous location.
* [[c951c](https://github.com/theQRL/qrl-cli/commit/9646650435664ebbb498bbf82ec14afb51dc951c)] fix: Qrlnetwork.connect() failure when connection to node fails upon first attempt. Adding fault tolerance when attempting to connect to nodes. Will now try (5) times on connection failure before failing. Catching connection failure, gracefully printing error to console upon fail.

**[feat: adding messages to send transactions & unit testing overhaul](https://github.com/theQRL/qrl-cli/pull/60)**

* [[80233](https://github.com/theQRL/qrl-cli/commit/6f1f3bbb0fc3cbab32b5a32e80a24e19d3880233)] Adding optional 80 byte message data to QRL transfer, send additional testing
* [[0469d](https://github.com/theQRL/qrl-cli/commit/c6a3fb26bbb650acb082b1c599827a5144b0469d)] fix wallet encryption password passed through cli flag (-p) password --> walletPassword
* [[9f380](https://github.com/theQRL/qrl-cli/commit/9dcdb8bdf07abb1aaa637d1ddeee3e7be1f9f380)] Rework unit tests for new testnet transactions moving to locally generated addresses/txn's each time tests are run
* [[00f5c](https://github.com/theQRL/qrl-cli/commit/5358a32b8cee00d0c2e25d517efd73967a500f5c)] Cleanup
* [[24751](https://github.com/theQRL/qrl-cli/commit/36b069463beb5915d25b62ab679765cc5dd24751)] Adding gitignore and empty directorys for test files
* [[2c682](https://github.com/theQRL/qrl-cli/commit/6dc51e9e6a3d4af3e587a43648a9ab10ba02c682)] Fixing before hook to fire before testing runs to populate needed files.
* [[8925f](https://github.com/theQRL/qrl-cli/commit/fd4e6302269b1025a61f9e895678b5134e48925f)] Updating tests to function with new testnet network genesis.
* [[a20b4](https://github.com/theQRL/qrl-cli/commit/d3fd02ebbe077856fe16ec0f52507881ca5a20b4)] Rework and improved failure testing.
* [[4365e](https://github.com/theQRL/qrl-cli/commit/7a9060927ee2281db2962538c1f1ce62eb74365e)] Updating README instruction
* [[03c7d](https://github.com/theQRL/qrl-cli/commit/19c5317919f03d493cd4d08376f00188dd803c7d)] Fixing tests, grabbing tx_hash for lookup from file for args
* [[c8a52](https://github.com/theQRL/qrl-cli/commit/b096dfb17e83752c4b3a4ca29b12a969cd1c8a52)] Testing variables pulled from generated files order
* [[a6892](https://github.com/theQRL/qrl-cli/commit/6966d8f9eff2472180627203697b17a46a5a6892)] Testing variables pulled from generated files order
* [[aafc4](https://github.com/theQRL/qrl-cli/commit/aab7b4c092b5a07c812101f4e4ffeeb5549aafc4)] Remove end of file block
* [[ee30d](https://github.com/theQRL/qrl-cli/commit/cb6660a6ff1580bfae0c2738b81cee2eb29ee30d)] Remove end of file block
* [[539cb](https://github.com/theQRL/qrl-cli/commit/c74d40844eb8e3e39af13a03aa5026bdb65539cb)] Remove console.log()
* [[41082](https://github.com/theQRL/qrl-cli/commit/88949cff2fe97d7279a2e7821ea0de490de41082)] Moving args to Before(done =>{}) block for variable args from generated files and consistency
* [[a5430](https://github.com/theQRL/qrl-cli/commit/a95482681d34d7d1dd213f427d212aa4790a5430)] Moving args before command

**[Latest proto file and node v12](https://github.com/theQRL/qrl-cli/pull/59)**

* [[8c97e](https://github.com/theQRL/qrl-cli/commit/25316066c9adf1c9452eecf03d3f4e628388c97e)] sign-tx-offline command
* [[43b84](https://github.com/theQRL/qrl-cli/commit/8e7a7d08b8cea089894656952f33cd59b7243b84)] Merge branch 'master' of github.com:jplomas/qrl-cli
* [[f7b39](https://github.com/theQRL/qrl-cli/commit/a36805baf8f6c2f5a7dcbd57244f3bd995df7b39)] Use latest proto file & graceful status command fail
* [[7abbd](https://github.com/theQRL/qrl-cli/commit/5aca79cf397f523b6c6412cda90a958bb5f7abbd)] Bump to node v12
* [[f4e7b](https://github.com/theQRL/qrl-cli/commit/c81293cc4674bc730583081fed655cf5c82f4e7b)] Use node v12 binaries in distribution
* [[ad461](https://github.com/theQRL/qrl-cli/commit/c77686a6008a75354d19a2aae4b1065ba8bad461)] node v16 (!)
* [[9fd08](https://github.com/theQRL/qrl-cli/commit/d671484148e44d6fd1eea8618b74ce8e1759fd08)] Use node v16 in CI

### theQRL/QRL

**[Update README.md](https://github.com/theQRL/QRL/pull/1740)**

* [[a5e2b](https://github.com/theQRL/QRL/commit/a84244ad78d20c835fc9a1925abbcdefc5ba5e2b)] Update README.md

**[Merged Dev](https://github.com/theQRL/QRL/pull/1738)**

* [[e56c3](https://github.com/theQRL/QRL/commit/600b976f25855d556e6ff3c4d9cc77cf24ae56c3)] Hard fork code for Emission reduction, added more checks, CLI fixes
* [[a007a](https://github.com/theQRL/QRL/commit/06ed1f19fb111270984567bb3e82a5ebd74a007a)] Added State Migration code from version 0 to 1 and updated testnet hardfork height
* [[d4c72](https://github.com/theQRL/QRL/commit/cddf8184a8c22ed0a8683d7639bb08b58ebd4c72)] Removed unused imports
* [[10b7a](https://github.com/theQRL/QRL/commit/63fa8698f5c01b362c98458e4e33b124a1c10b7a)] Merge pull request #1736 from cyyber/dev Hard fork code for Emission reduction, added more checks, CLI fixes
* [[3d3d1](https://github.com/theQRL/QRL/commit/6bc11c62c890fe9a3b4e034853c77a854153d3d1)] New Testnet config & genesis file + version check post hard fork for mainnet
* [[a2b6d](https://github.com/theQRL/QRL/commit/622dbc26fe2f9f141a048eb24bb69d852eca2b6d)] Changed hardfork height for testnet to 3000
* [[74951](https://github.com/theQRL/QRL/commit/0baf67f9b214e4958fb919a1e3470cb355474951)] Merge pull request #1737 from cyyber/dev New Testnet config & genesis file + version check post hard fork for mainnet

**[New Testnet config & genesis file + version check post hard fork for mainnet](https://github.com/theQRL/QRL/pull/1737)**

* [[3d3d1](https://github.com/theQRL/QRL/commit/6bc11c62c890fe9a3b4e034853c77a854153d3d1)] New Testnet config & genesis file + version check post hard fork for mainnet
* [[a2b6d](https://github.com/theQRL/QRL/commit/622dbc26fe2f9f141a048eb24bb69d852eca2b6d)] Changed hardfork height for testnet to 3000

**[Hard fork code for Emission reduction, added more checks, CLI fixes](https://github.com/theQRL/QRL/pull/1736)**

* [[7bce6](https://github.com/theQRL/QRL/commit/5803997005afceaeffbd17145c2ffb14c937bce6)] Merge pull request #1730 from theQRL/dev Merged Dev
* [[e56c3](https://github.com/theQRL/QRL/commit/600b976f25855d556e6ff3c4d9cc77cf24ae56c3)] Hard fork code for Emission reduction, added more checks, CLI fixes
* [[a007a](https://github.com/theQRL/QRL/commit/06ed1f19fb111270984567bb3e82a5ebd74a007a)] Added State Migration code from version 0 to 1 and updated testnet hardfork height
* [[d4c72](https://github.com/theQRL/QRL/commit/cddf8184a8c22ed0a8683d7639bb08b58ebd4c72)] Removed unused imports

### theQRL/explorer-helpers

**[Linting fixes & wallaby.js cfg](https://github.com/theQRL/explorer-helpers/pull/41)**

* [[1a63a](https://github.com/theQRL/explorer-helpers/commit/3cbb35bbdfc7484df94771cac0a4bf321cc1a63a)] Linting fixes & wallaby.js cfg

**[dependency fix & migrate to v2 bech32 module](https://github.com/theQRL/explorer-helpers/pull/40)**

* [[620be](https://github.com/theQRL/explorer-helpers/commit/121cdf092555a1473d5ad5a1b6b2cd3e88a620be)] dependency fix & migrate to v2 bech32 module
* [[e0d9f](https://github.com/theQRL/explorer-helpers/commit/b1ae7d481e187de031e7e19c9bba05af407e0d9f)] Use node v10 in CI
* [[45c0b](https://github.com/theQRL/explorer-helpers/commit/1e65ced6582ca864bf4899a4aaaaf61b56b45c0b)] Update babel to v7

### theQRL/qryptonight

**[Automatically use software AES when hardware AES is not supported](https://github.com/theQRL/qryptonight/pull/89)**

* [[034d3](https://github.com/theQRL/qryptonight/commit/77f77a043186d91b1eeb4915865c530596c034d3)] Attempt to use method pointers to determine whether to use hardware AES
* [[78c7f](https://github.com/theQRL/qryptonight/commit/dfe03df6f291ac2ff36a6edf5e01cd322ce78c7f)] Determine which function to use from within Qryptonight::hash instead
* [[abaff](https://github.com/theQRL/qryptonight/commit/5ac99a6315790d453d8afc21b3a87fb2830abaff)] Initialise function pointer only once
* [[e278b](https://github.com/theQRL/qryptonight/commit/7e763188e015a3655c61c2afdae3a9634e2e278b)] Set up function pointer, while still allowing init() to remain static
* [[46e5e](https://github.com/theQRL/qryptonight/commit/fe7861bf58fe6345ebbdf4cedbdb1bacfe446e5e)] Use function pointer directly instead of index
* [[7b6e1](https://github.com/theQRL/qryptonight/commit/1bf74d8f80fe788e4f491d4564e0840fa9b7b6e1)] Rename variables
* [[78183](https://github.com/theQRL/qryptonight/commit/35918dba3504dfb42eafb950dcc9181ac0278183)] Added comment on protected variable prefix

### theQRL/qrllib

**[Add shasha Rust implementation](https://github.com/theQRL/qrllib/pull/176)**

* [[3265e](https://github.com/theQRL/qrllib/commit/380e6871d0f3a2c3cbc02185748ccd7fd9e3265e)] Add shasha Rust implementation
* [[f5a60](https://github.com/theQRL/qrllib/commit/699720c83abde99fa67ab74bb151e250e59f5a60)] set crate versioning for sha2 and hex, and remove libc dependency
* [[10898](https://github.com/theQRL/qrllib/commit/a847820ac17ca4c1a64f9c4104b3a79923610898)] Merge branch 'master' into shasha

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)