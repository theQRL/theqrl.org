---
layout: blog-post
slug: last-month-at-qrl-november-2021
date: 2021-12-01
author: "Jack Matier"
title: "Last Month at QRL — November 2021"
summary: "More developers and developer expansion update, QIP-016 APPROVED, and the Quantum Computing race heats up"
featured_image: header.png
categories:
  - technical
features:
  - enqlave
  - qrl-wallet
  - qrllib
  - qcryptonight
toc: true
---

## Highlights

### Developer expansion update

{{< image "./images/hi.devs.png" >}}

As the crypto asset space grows into a multi-trillion dollar market, it is worth considering that the vast majority of that market cap still remains painfully vulnerable to quantum theft. The financial stakes have never been higher and our mission to provide a fully post-quantum blockchain ecosystem has never been more important than it is today - especially as crypto seems ready to burst into the mainstream around the world.

Remote team working is difficult and so I was very pleased to recently travel to finally meet with Kaushal who has been overseeing our recruitment round in the UAE. I am thrilled to report we are onboarding several excellent core developer candidates into the team after a lengthy selection process - more details on this to follow.

Swelling the core development team is absolutely critical to accelerate node development and the planned STARK powered PoS hardfork timeline. This incredible cryptographic construction is worthy of a blog post in itself as it enables post-quantum secure blockchain scaling for the first time, eliminating hugely expensive signature data from blockspace entirely.

Additionally we are pleased to welcome back Charlie to the [EnQlave](/features/enqlave) development team once again. It will be amazing to finally see post-quantum secure wrapped QRL live on ethereum and for the QRL ledger to become multi-chain once again - but this time in a completely PQ-secure manner.

It would be remiss to fail to announce our new intern developer Liam Arzona. Welcome! He will be (and has already begun) working on migrating [qrllib](/features/qrllib) from `c++` to `rust`, this will allow for adding threading, async for better performance, and progress of tree building for a nicer UX.

Exciting times approach,

Peter Waterland

{{< image "./images/buildings.jpg" >}}

### QIP-016 post-vote determination: APPROVED

{{< image "./images/hi.qip016.png" >}}

#### Overview

[**QRL Improvement Proposals (QIPs)**](https://github.com/theQRL/qips/) been a longstanding part of the process to evolve the QRL core-protocol through a decentralized manner since its first [QIP back in 2018](https://github.com/theQRL/qips/blob/master/qips/QIP001.md). Now, we've improved this process through the implementation of on-chain voting.

The main goal of voting is to produce a decision which is accepted by the members of the system (in our case, QRL). One can argue that voting upholds the fundamental principle behind democracy, which is “rule by the people”. In the case of blockchain, it provides a way for stakeholders in the system to have their voices heard to steer how decisions are being made. It's equally important that there's enough confidence in results of the raw vote to carry a healthy community and ecosystem through to the fruition of different core-protocol changes.

[QRL Improvement Proposal #16 (QIP-016)](/qips/qip016)'s proposition was to reduce the emission rate by a multiplication factor of 0.4x due to "Network and transaction analysis [revealing] that the majority of the network hashrate is made up of ~90% for profit miners, with 60% of that from autoswitching bots."

{{< image "./images/emissionchart.png" >}}

As part of the QIP process, the draft passed through discussion period, garnering 54 comments before being final adjustments and a vote parameter selection. Before the vote, a [pre-vote synopsis was formed](/blog/qip016-reduce-emission-rate-of-the-network-prevote-synopsis/) which outlined the positive and negative considerations for voting. 

Finally, the vote started on November 2nd, lasting for two weeks until November 16th, at which point a post-vote determination needed to be made. More on that determination can be read in our final comment on [QIP-016](https://github.com/theQRL/qips/pull/32#issuecomment-975645693). This moved QIP-016 from "proposal->draft" to "proposal->open->in development". 

#### QIP-016 development timeline

When we have a better indication of timescales, we'll be able to give another update as to when, but it should be a few weeks of development time, which has no external dependencies/influences, followed by deployment, and a node upgrade window which needs to be coordinated with key node operators. 

Due to needing to coordinate a node update with key node operators (pools, exchanges, etc), that may conflict with staffing holidays, and put the end fork date into early Q1 2022.

{{< image "./images/timescale.jpg" >}}

### Quantum computing race heats up

{{< image "./images/hi.quantum.png" >}}

It's nearing the end of the 2021 and there's no denying that the quantum computing space is heating up. In the same month, we've broken records for both the largest quantum computing company *and* physical qubits for a quantum computer. 

#### IBM's 127-qubit Eagle Processor

[IBM quantum broke the 100-qubit processor barrior](https://research.ibm.com/blog/127-qubit-quantum-processor-eagle) with their Eagle processor, representing an important milestone in the IBM Quantum Roadmap by "solving challenges across hardware and software to eventually realize a quantum computer capable of solving practical problems in fields from renewable energy to finance and more."

This processor includes a 3d architecture and readout multiplexing, removing the need for readout electronics for each qubit and thereby reducing the bulk for processors with higher qubit counts, such as their **433 qubit osprey processor slated for 2022, or their 1121 qubit condor processor expected in 2023.**

#### QuEra's 256-atom qubit simulator

Adding fuel to the fire, [QuEra](https://www.quera.com/) has come out of stealth using Rydberg atoms, with temperatures over a thousand times colder than the superconducting qubits by IBM and Google. and whose conditional gate logic connects through something known as a "Rydberg blockade".

> From [QuEra](https://www.quera.com/news): In Rydberg blockade, laser flashes drive electrons in selected atoms to an outer orbital which causes the parent atoms to briefly “puff up” – but only on the condition that it is not blocked by another puffed up atom. This blockade forms QuEra's conditional logic gate and can happen in as short of a time period as a few nanoseconds, once again similar to a 1990s Intel CPU.

They're yet another entrant to the field with a plan for *scalable* fault-tolerant quantum computers, joining [PsiQuantum](https://www.nextplatform.com/2021/07/27/with-3-1b-valuation-whats-ahead-for-psiquantum/)(Silicon), [Google](https://www.zdnet.com/article/quantum-computing-google-researchers-think-they-can-now-stop-qubits-going-wrong/), and [IonQ](https://www.hpcwire.com/off-the-wire/ionq-and-u-of-maryland-researchers-demonstrate-fault-tolerant-quantum-error-correction/).

The roadmap of [QuEra](https://www.quera.com/) is aggressive, with a 64-qubit quantum computer expected "soon", and a **1024-qubit quantum computer by 2024**. For context, **by 2024, IonQ is targeting 32 *algorithmic* qubits, and IBM is targeting 1121-qubits by 2023**. Not to be forgotten, currently [IBM](https://www.hpcwire.com/2020/09/15/ibms-quantum-race-to-one-million-qubits/) and [PsiQuantum](https://thequantumdaily.com/2021/06/07/tqd-exclusive-with-key-partnerships-in-place-psiquantum-sets-sight-on-delivering-commercially-viable-1-million-qubit-quantum-computer/) are targeting 1 million physical qubit quantum computers by the end of the decade.

{{< image "./images/ibmroadmap.png" >}}

**Critically, not all qubits are made equally**, and it remains to be seen how well these perform at the end of the day (or year). To try and measure qubits across systems, IonQ has proposed something called [Algorithmic Qubits](https://ionq.com/posts/december-09-2020-scaling-quantum-computer-roadmap), where as IBM will be measuring using [Quantum Volume](https://arxiv.org/abs/1811.12926) in conjunction with [CLOPS](https://research.ibm.com/blog/circuit-layer-operations-per-second) (Circuit Layers Operations Per Second).  

#### Honeywell creates largest global quantum computer company, Quantinuum

**The thing that is clear though, is that there is a *tremendous* amount of money being put into this with a lot at stake.**  This is noted by Honeywell creating the largest global quantum computer company, [Quantinuum](https://www.honeywell.com/us/en/news/2021/11/things-to-know-about-quantinuum), with a majority stake. Their first product is slated to launch in a few weeks (just in time for Christmas?) which promises to be **"the first genuine quantum product for use in the real world."**.

**If this is true, we could be seeing the beginning of the quantum era**, where practical and commercially viable quantum computers start to see some limited use for applications that can't be reasonably done in polynomial time on classical supercomputers.

#### Additional quantum news

- [Quantum computing would get boost in Senate defense bill](https://www.rollcall.com/2021/11/30/quantum-computing-would-get-boost-in-senate-defense-bill/)
- [Digitized adiabatic quantum factorization](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.104.L050403)
- [Two of World’s Biggest Quantum Computers Made in China](https://spectrum.ieee.org/quantum-computers-china-zuchongzi-juizhang)
- [Using new quantum computing architectures to create time crystals](https://phys.org/news/2021-11-quantum-architectures-crystals.html)

## Community Initiatives

### First Russian campaign launched (by 4d5a in Discord)

https://bits.media/pr/v-osnovnoy-seti-blokcheyna-qrl-zapushchena-sistema-detsentralizovannogo-golosovaniya/

### p2pq.trade QRL Nodes and Sticker packs

**James P** of p2pq Coffee Trades, has released [pre-built QRL Nodes](https://p2pq.trade/ct/index.php?route=product/product&path=60&product_id=60). The node dual boots between Windows 10 and Kubuntu and is currently accepting Fiat or QRL/Quanta for the machines. Exciting to see where this goes!

You can also get [QRL sticker packs](https://shop.p2pq.trade/stickers) to disperse into the world (or keep for yourself), which were released last month. 

## Changelog

### theQRL/qrl-wallet

**[PR 506 - Ledger fix](https://github.com/theQRL/qrl-wallet/pull/506)**

- [[c8e7a5a](https://github.com/theQRL/qrl-wallet/pull/506/commits/c8e7a5a27327384f856af064dbd7e13c6cadc2e2)] Fix wrapping of message on tx result page
- [[ee01224](https://github.com/theQRL/qrl-wallet/pull/506/commits/ee012244d264bea822d308227e1a34b2c7fae0c6)] Windows message tx fixes and version bump to 1.7.3
- [[74f595b](https://github.com/theQRL/qrl-wallet/pull/506/commits/74f595b5ac2a499cae6d7b4b79db56fd5957aa14)] Update meteor install in CI
- [[32bc1df](https://github.com/theQRL/qrl-wallet/pull/506/commits/32bc1df4e053a0d033a9ea0d7fa9d2c47b5bb8d1)] sudo for meteor install in CI
- [[9da411d](https://github.com/theQRL/qrl-wallet/pull/506/commits/9da411ddd2c8dfd84e0844f2203d064838e205a1)] Remove CI cache
- [[3461224](https://github.com/theQRL/qrl-wallet/pull/506/commits/3461224664155f5e2f863a198eea22b5bc205a3d)] Return to curl install meteor in CI
- [[25c5ba2](https://github.com/theQRL/qrl-wallet/pull/506/commits/25c5ba26ea42e535e628a7415773d8ad4cf0420f)] update node orb
- [[f68f9d9](https://github.com/theQRL/qrl-wallet/pull/506/commits/f68f9d94cf0178124f41ec8c1b47b7f71e53fd8a)] Install USB packages in CI

### theQRL/qcryptonight 

**[PR: 88 - Update branch for Googletest](https://github.com/theQRL/qryptonight/pull/88)**

> When running cmake, it will fail to on the download step for googletest:
> 
> ```bash
> [ 22%] Performing download step (git clone) for 'googletest'
> Cloning into 'googletest-src'...
> fatal: invalid reference: master
> CMake Error at googletest-download/googletest-prefix/tmp/googletest-gitclone.cmake:40 (message):
>   Failed to checkout tag: 'master'
> 
> 
> gmake[2]: *** [CMakeFiles/googletest.dir/build.make:99: googletest-prefix/src/googletest-stamp/googletest-download] Error 1
> gmake[1]: *** [CMakeFiles/Makefile2:83: CMakeFiles/googletest.dir/all] Error 2
> gmake: *** [Makefile:91: all] Error 2
> CMake Error at CMakeLists.txt:182 (message):
>   Build step for googletest failed: 2
> 
> 
> -- Configuring incomplete, errors occurred!
> ```
> 
> This is due to it trying to fetch the branch "master", which has been renamed to "main". This commit updates the repository name so that it will fetch it again.

- [[64fb731](https://github.com/theQRL/qryptonight/pull/88/commits/64fb73111837a3b1c5bbd058b8df40fb6c47f282)] Fixed Googletest failing to fetch on compile by updating to new branch location

### theQRL/qrllib

**[PR: 173 - Fix googletest failing to build](https://github.com/theQRL/qrllib/pull/173/commits)**

> Googletest was failing to build because the repository changed the primary branch from 'master' to 'main'.
> 
> Fixed by changing git tag to reference main instead of master.

- [[e5c43ee](https://github.com/theQRL/qrllib/pull/173/commits/e5c43ee1190a07e7295a476956029ff3f7a78565)] Change git tag for googletest from master to main

### theQRL/theqrl.org

**[PR: 258 - Add Golang to CI setup](https://github.com/theQRL/theqrl.org/pull/258)**

- [[bae1f6b](https://github.com/theQRL/theqrl.org/pull/258/commits/bae1f6b083c7b7b2a05048357063c3243d7d9146)] Add Golang to CI setup

**[PR: 257 - Pull qips from theQRL/qips and add basic qip pages](https://github.com/theQRL/theqrl.org/pull/257)**

- [[877e473](https://github.com/theQRL/theqrl.org/pull/257/commits/877e473d4afe4c9d1ff0fc157130a3d4830dad26)] delete cached modules
- [[54f7c08](https://github.com/theQRL/theqrl.org/pull/257/commits/54f7c082cfe53e463b7cf10760329ff97ecf9eda)] Remove git submodule
- [[35cb9b0](https://github.com/theQRL/theqrl.org/pull/257/commits/35cb9b07174b383085f8b286b0a670ad2c82047f)] Merge remote-tracking branch 'upstream/main' into main
- [[b28033d](https://github.com/theQRL/theqrl.org/pull/257/commits/b28033d8d1de4fd2fd9ac9aef3403415e1f0739a)] Pull qips from theQRL/qips and add basic qip pages
- [[75d388e](https://github.com/theQRL/theqrl.org/pull/257/commits/75d388ef77f034ac9904ca6aae48bf2e8e9d58fa)] Improve comprehensibility that Bittrex is Bittrex Global
- [[b1aa47d](https://github.com/theQRL/theqrl.org/pull/257/commits/b1aa47dca450330f53310dc03b05ea48060956dc)] Add module files
- [[cfdca40](https://github.com/theQRL/theqrl.org/pull/257/commits/cfdca4040f813adfb255df77a80c3af690699b26)] New media blog, how do you create a quantum resistant wallet?
- [[d6828a7](https://github.com/theQRL/theqrl.org/pull/257/commits/d6828a757c3aa8074e21ea0b82a8753560a1bdb4)] Update stats
- [[917a947](https://github.com/theQRL/theqrl.org/pull/257/commits/917a947326cddb653c3e4f65a0b85b45feb8271b)] New media blog pq-cryptography with geometry labs
- [[61bf391](https://github.com/theQRL/theqrl.org/pull/257/commits/61bf39184cf165e140cb040ffdf166af5e12c6dc)] webp -> png

**[PR: 256 - Content: Link corrections, additions, and content adjustment](https://github.com/theQRL/theqrl.org/pull/256)**

- [[938e709](https://github.com/theQRL/theqrl.org/pull/256/commits/938e7094c7e72ccdbc5991ecc1252499f2d23026)] Content: Link corrections, additions, and content adjustment

**[PR: 255 - Add maxscrolldepth to GA3 and cnet to 'featured in' section](https://github.com/theQRL/theqrl.org/pull/255)**

> Special thanks to Discord user cooper for the suggestion of scroll-depth

- [[8ee61e1](https://github.com/theQRL/theqrl.org/pull/255/commits/8ee61e1cf1cc79c38e1c6a88be9f20573618f794)] Add maxscrolldepth to universal analytics
- [[4a4681c](https://github.com/theQRL/theqrl.org/pull/255/commits/4a4681ceea5027cbb0a69d04c3e312311d039951)] Add cnet
- [[a46f3b6](https://github.com/theQRL/theqrl.org/pull/255/commits/a46f3b6c2958409012b30ecd41cb590376584247)] Merge remote-tracking branch 'upstream/main' into main

**[PR: 254 - Add Ledger Nano S/X instructions to QIP-016 voting guide](https://github.com/theQRL/theqrl.org/pull/254)**

- [[1300fa0](https://github.com/theQRL/theqrl.org/pull/254/commits/1300fa016c2392728fa5c6e0e7a124c3f2228d65)] Replace discord.gg links to /discord to prevent link expiry/rot
- [[bfdf6f1](https://github.com/theQRL/theqrl.org/pull/254/commits/bfdf6f103ac311340283bdcda891e0bb3338b6bf)] Add Ledger Nano S/X instructions to QIP-016 voting guide
- [[3e468eb](https://github.com/theQRL/theqrl.org/pull/254/commits/3e468ebdb3c2babe44f4c9cbfb9af51328e37718)] Add BlogPosting schema to blog-posts
- [[d1cf7e9](https://github.com/theQRL/theqrl.org/pull/254/commits/d1cf7e992f61fa42bb90c3900a8a66509076fa06)] Improve single page content style to reflect blog-articles
- [[0769301](https://github.com/theQRL/theqrl.org/pull/254/commits/0769301dfe7fed380952e0131ae6903dcad6a23a)] Add in-q-tel as an intelligence agency to the-future-of-pq-blockchains

**[PR: 253 - Links for wallet release v1.7.3](https://github.com/theQRL/theqrl.org/pull/253)**

- [[926674b](https://github.com/theQRL/theqrl.org/pull/253/commits/926674b8086b2c40daee0315940ee5bf5531fd67)] Links for wallet release v1.7.3

**[PR: 252 - Adjustments to the future of post-quantum blockchains page.](https://github.com/theQRL/theqrl.org/pull/252)**

- [[252d9c6](https://github.com/theQRL/theqrl.org/pull/252/commits/252d9c6156d69e2c07373922ce826703fb5748be)] Fix grammar. Add qcinvolvement image and asset
- [[f14c514](https://github.com/theQRL/theqrl.org/pull/252/commits/f14c5141ce3ce0ff32630338baa722d7a702de5d)] grammar fixes. Thanks Ryan.
- [[d88c8a3](https://github.com/theQRL/theqrl.org/pull/252/commits/d88c8a3bd7be76330e9861d3be87d70576fa6b26)] Updated header asset for last month blog.

**[PR: 251 - blog: last month at qrl october 2021 + youtube-blog-transcript: is bitcoin a ponzi scheme](https://github.com/theQRL/theqrl.org/pull/251)**

- [[7cb8a24](https://github.com/theQRL/theqrl.org/pull/251/commits/7cb8a246e8f02a6149939e8d5a6ecbb066ec24e1)] Update discord link
- [[51768c7](https://github.com/theQRL/theqrl.org/pull/251/commits/51768c7908aea60e3b8c92fcc6bcecc0f9b30a46)] Twitter tag update
- [[593bf92](https://github.com/theQRL/theqrl.org/pull/251/commits/593bf92794e022b9aa14eac8432aca3be0939277)] Update Invite Link
- [[9ce8ffd](https://github.com/theQRL/theqrl.org/pull/251/commits/9ce8ffd73c1b0fe64a076210ed34a5f731d7df86)] add: blog svg assets
- [[618fd68](https://github.com/theQRL/theqrl.org/pull/251/commits/618fd68dda17c000aad0dcdc758c7f6ba6ac32d8)] add: more blog svg assets
- [[891752c](https://github.com/theQRL/theqrl.org/pull/251/commits/891752ca7c6fc4c195b90eec81b2a5536ff5e846)] add hugo_build.lock to gitignore
- [[0996433](https://github.com/theQRL/theqrl.org/pull/251/commits/0996433e4409afb10f9e17ad83dbb89488f13e7e)] blog: last month at qrl october 2021
- [[7e3f58e](https://github.com/theQRL/theqrl.org/pull/251/commits/7e3f58ee612333d8af161c519837669bc9e07bf3)] support for youtube-blog-transcripts
- [[9f11724](https://github.com/theQRL/theqrl.org/pull/251/commits/9f11724cc4124946bb1a5add9ff9d17a96259c95)] youtube-blog-transcript: is bitcoin a ponzi scheme
- [[77fe874](https://github.com/theQRL/theqrl.org/pull/251/commits/77fe8740c173d8532809e6dbead8224badfe6d30)] Revert "Twitter tag update"

**[PR: 250 - Fixes, references, images](https://github.com/theQRL/theqrl.org/pull/250)**

- [[b971bb4](https://github.com/theQRL/theqrl.org/pull/250/commits/b971bb4b46d40113e515d11e0cb4b9758bbe1feb)] Fixes. Add more references, etc.
- [[81c3821](https://github.com/theQRL/theqrl.org/pull/250/commits/81c3821d06448589f5487c8c2a6dfd90f7510bfe)] Add/adjust images
- [[1cbe5ed](https://github.com/theQRL/theqrl.org/pull/250/commits/1cbe5edb6fc3036f0ce5913ae639c30a469d946e)] Can't miss ionq

**[PR: 249 - Better clarity for voting](https://github.com/theQRL/theqrl.org/pull/249)**

- [[70be5e3](https://github.com/theQRL/theqrl.org/pull/249/commits/70be5e3e9a3595b7352618d1db09303611bb1599)] -testnet +special note
- [[9125bb5](https://github.com/theQRL/theqrl.org/pull/249/commits/9125bb55ee2686540bb7a0feba5620d00c964311)] Better clarity to voting
- [[6331998](https://github.com/theQRL/theqrl.org/pull/249/commits/63319988d672e416f8cb93d5ecce74871ba4d0d3)] clarification
- [[84aac04](https://github.com/theQRL/theqrl.org/pull/249/commits/84aac04400f78d8b4a671d533fadc2a92282de59)] Update index.md
- [[bcf4597](https://github.com/theQRL/theqrl.org/pull/249/commits/bcf45972603a861b49ff90ce2babeaa44170f9b5)] Update index.md

**[PR: 248 - new: multisig landing page, case for qrl landing page, QIP-016 vote guide.](https://github.com/theQRL/theqrl.org/pull/248)**

- [[4059bd0](https://github.com/theQRL/theqrl.org/pull/248/commits/4059bd0b0cb2bdf6d39f6dd69714f7c44e963d13)] Better margins for images proceeded by headings
- [[8a82325](https://github.com/theQRL/theqrl.org/pull/248/commits/8a82325093249a1845f11df091dfc674bc55d993)] Add timeline context to QIP016
- [[14bd30d](https://github.com/theQRL/theqrl.org/pull/248/commits/14bd30d8773662667b73efa84a36914e7e75e02d)] Expand Enqlave feature for Ethereum users
- [[dc9a6ec](https://github.com/theQRL/theqrl.org/pull/248/commits/dc9a6ecac39f3304eb17553f89e06557299aaff6)] new: multi-signature transactions feature page
- [[a4f388a](https://github.com/theQRL/theqrl.org/pull/248/commits/a4f388ac3251effc36ea9bf7e9f4fb7d2dd3c975)] and image
- [[eb4cc2a](https://github.com/theQRL/theqrl.org/pull/248/commits/eb4cc2ac4abb3488be795398190d25e471b0c8a1)] Proper image aspect ratio for blog listings
- [[624937d](https://github.com/theQRL/theqrl.org/pull/248/commits/624937dc1073b9145f09c41fa0a9cd5b0c949cda)] new: page stub for 4d5a
- [[51d6d34](https://github.com/theQRL/theqrl.org/pull/248/commits/51d6d344dacf3c0ccdffc435f0931c4b48000817)] add video to multisig page
- [[85352be](https://github.com/theQRL/theqrl.org/pull/248/commits/85352be117947567bcecf83e7a1b5012195d78a1)] new blog: on-chain voting guide for QIP-016
- [[349eaa6](https://github.com/theQRL/theqrl.org/pull/248/commits/349eaa6cd2cf2e269adefbf33e6142f882257ffa)] Add snapshot block-height + minor content fixes
- [[e83e89e](https://github.com/theQRL/theqrl.org/pull/248/commits/e83e89ec19ed68a440161c2e427b6e656e1c8010)] post-quantum future update based on chat in discord 

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)