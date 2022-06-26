---
layout: blog-post
slug: last-month-at-qrl-march-2022
date: 2022-04-01
author: "Jack Matier"
title: "Last Month at QRL — March 2022"
summary: "Post-quantum safe Non-Fungible Tokens (NFTs) have arrived on the testnet & the significance of post-quantum resistant NFTs. Providers / marketplaces are the missing piece! QRLLIB Rust port nearly complete. JSON output for the QRL-CLI, and a New QRL Explainer deck."
featured_image: header.png
categories:
  - technical
features:
  - nfts
  - qrllib
  - qrl-cli
toc: true
---

## Highlights

### Post-quantum secure Non-Fungible Tokens (NFTs) hit testnet!

{{< image "./images/highlight.nft.png" >}}

**We're happy to announce that there's now preliminary support for NFTs on the QRL blockchain on the QRL public testnet!** 

This includes being able create and transfer tokens around in the [qrl testnet wallet](https://testnet-wallet.theqrl.org) and view them in the [testnet blockchain explorer](https://testnet-explorer.theqrl.org). It also includes an [NFT Tools](https://nft-tools.theqrl.org) site for assistance with forming NFTs.

While all of this is available today to try out, it's recommended to wait for the rest of the core QRL team to test, polish, and produce helpful documentation and overall guidance before pursuing. When we're ready for the testpilots to test, we'll put out a call-to-action! 

> **Note:** If you want to be a test-pilot be sure to join our discord and join the testpilot role to get started. What's in it for you? The satisfaction of supporting the network in testing and ability to test out bleeding edge features to have an edge for when it hits mainnet!

#### The importance of having post-quantum secure NFTs

Many blockchains allows for the proliferation and trade of any non-fungible digital asset natively. Brilliantly, this makes it possible to facilitate useful governance structures around NFTs as well. The downside is if someone gets a hold of your keys, they can transfer the assets to themselves and thereby own that non-fungible asset. This issue compounds in severity when you think about it in terms of real-estate, diamonds or cars. 

The reality is **quantum computers will allow people to steal NFTs on blockchains which are using quantum vulnerable cryptography.** These blockchains includes any blockchain reliant on ECC, which include Bitcoin, and almost every other blockchain currently in circulation. A sufficiently powerful enough quantum computer will be available is the subject of much debate, but with so many industry leaders now involved with quantum computing progress has been accelerating at a doubly exponential rate (see [Neven's law](https://www.quantamagazine.org/does-nevens-law-describe-quantum-computings-rise-20190618/)).

#### The missing element: Providers / marketplaces!

Being able to create, make, and use NFTs are great, but the thing that pulls this all together are NFT providers! (think, opensea, rarible). 

**If you would like to be an NFT Provider**, stay tuned for an announcement on that as we'll be putting out a separate call-to-action recruiting NFT providers and providing guidance. 

## Other development updates

### QRLLIB Rust port coming to a close

Late last year, Liam was brought on board to start working on porting [qrllib](https://github.com/theQRL/qrllib) (our base cryptographic library) to [rust](https://www.rust-lang.org/), a high-performance language with better bindings.

So far ports for XMSS_fast, XMSS_alt, XMSS_pools, XMSS_basic, Dilithium, and Kyber (uses existing crate) are done and the rest is putting finishing touches on unit tests to ensure compatibility.

### Added json response to output of qrl-cli

**At long last, thanks to James Gordon, the qrl-cli has json support!** Finally interfacing the qrl-cli with other tools is even more of a breeze.

The install is simple with npm:

```bash
npm install -g @theqrl/cli
```

After that you can immediately test things out (no need to run a node!):

```bash
qrl-cli ots Q010300df5d78c353cd23a4d643e5e5d03ae470a4d8cb55f59788698994012ee9bc09076c900d1d -t -j
```
```bash
# Returns
[
  {
    "next_key": 1
  }
]
```

## Advocacy

### New QRL Explainer

Looking for a way to explain what the quantum threat is, its impact on blockchain, and where QRL fits into everything? Michael Strike has you covered with his production of a [QRL Explainer](/presskit/qrl.pdf), available on our [presskit page](/presskit/).

{{< image "./images/explainer.png" >}}

## Changelog

### theQRL/nft-providers

**[Add code generator](https://github.com/theQRL/nft-providers/pull/1)**

*   [[c7287](https://github.com/theQRL/nft-providers/commit/a388dde76ecc624e15b47de29ba5a3bc662c7287)] Add base setup
*   [[2e2c8](https://github.com/theQRL/nft-providers/commit/f913addb261e662cc6fc213d163984cc3552e2c8)] Merge branch 'theQRL:main' into main
*   [[c6d54](https://github.com/theQRL/nft-providers/commit/f3c3ca44eff23ebc8036a352a9eb34e5ac5c6d54)] Add providers.yml and code generator
*   [[9f306](https://github.com/theQRL/nft-providers/commit/9cc92583bd06c6b07afba28f0e39605445c9f306)] Add README

### theQRL/block-explorer

**[NFT explorer functionality to testnet](https://github.com/theQRL/block-explorer/pull/412)**

*   [[e245d](https://github.com/theQRL/block-explorer/commit/f2ebc665856fd5246bb934ad0241ae156a8e245d)] Support for nft-providers and NFTs in /tx route
*   [[517c4](https://github.com/theQRL/block-explorer/commit/881d30f8e6ce45facc6440481a454873658517c4)] Version bump explorer-helpers
*   [[34082](https://github.com/theQRL/block-explorer/commit/c62551531d82cacf8f15aa0c8192ed03f7634082)] Add NFTs in tx list on address page
*   [[ba578](https://github.com/theQRL/block-explorer/commit/741d5c3fe2541fc29ee9b2478e0c5accf21ba578)] Support NFTs on block list
*   [[c13e5](https://github.com/theQRL/block-explorer/commit/2d39b09b8b7b68c0054d679657b0689d68ac13e5)] Add verified provider badge in header of address page where appropriate
*   [[d12ba](https://github.com/theQRL/block-explorer/commit/e0dc2cd054d44afd5c7f01bb48acdd73864d12ba)] Add NFTs tab, populate and separate from tokens
*   [[1f718](https://github.com/theQRL/block-explorer/commit/1e5c76be33c1453f84577897dab8a7f0f981f718)] Dark mode UI fix for NFT header
*   [[a4207](https://github.com/theQRL/block-explorer/commit/de4e195861ec882b1d3f26b79d26387b854a4207)] Remove extraneous console log
*   [[4ff38](https://github.com/theQRL/block-explorer/commit/d6c38f05833444ee1df42ff0da164199b2e4ff38)] Add WIP transfer NFT display on Tx page
*   [[4dd99](https://github.com/theQRL/block-explorer/commit/ef8c7bafc20db05b8ceed37bcc9589c3db94dd99)] Use updated explorer-helpers
*   [[8bf7b](https://github.com/theQRL/block-explorer/commit/41967d820fe7c25bf9609e9a9fe74375f8b8bf7b)] Transfer NFTs on Tx page
*   [[49b56](https://github.com/theQRL/block-explorer/commit/16187ea2ca985fa51f597f78a9e42a5940349b56)] Send and receive NFTs on address page
*   [[6b714](https://github.com/theQRL/block-explorer/commit/f3b164da0afd5cba26223a8b809e654c4bf6b714)] Add Transfer NFTs to block page
*   [[d1531](https://github.com/theQRL/block-explorer/commit/980c202e2b4c8ea717830181a69565ab71fd1531)] Last TX page NFTs

### theQRL/explorer-helpers

**[Add TRANSFER NFT](https://github.com/theQRL/explorer-helpers/pull/46)**

*   [[f57f1](https://github.com/theQRL/explorer-helpers/commit/c053e563871546fbcef9c3784654d4fd53af57f1)] Add transfer NFT support
*   [[dbf46](https://github.com/theQRL/explorer-helpers/commit/b2cc511e9f1cd5cccf2cf3e85a6a454dd30dbf46)] release v2.7.0
*   [[5f391](https://github.com/theQRL/explorer-helpers/commit/d23bd0d08637e0dda7289b1622020873d145f391)] Merge branch 'master' into master

**[Remove console output, add test & update deps](https://github.com/theQRL/explorer-helpers/pull/45)**

*   [[de477](https://github.com/theQRL/explorer-helpers/commit/c4e195114e27b39f0f9fda6d4c8599ce7f3de477)] Remove console debug & test
*   [[00d66](https://github.com/theQRL/explorer-helpers/commit/b36846e330e0f490a9663aeb393027752ae00d66)] Dependency update
*   [[1204a](https://github.com/theQRL/explorer-helpers/commit/495e08ceaca7b6e5f0f9abb89080ba73bf01204a)] Merge branch 'master' into master

**[Add 'CREATE NFT'](https://github.com/theQRL/explorer-helpers/pull/43)**

*   [[24e7b](https://github.com/theQRL/explorer-helpers/commit/a9909503e8a50ccb9022ffacf52da72040524e7b)] Add 'CREATE NFT'

### theQRL/qrl-cli

**[feat: Adding JSON response to output](https://github.com/theQRL/qrl-cli/pull/63)**

*   [[a0250](https://github.com/theQRL/qrl-cli/commit/409ad24c2489c2815192b985f45941b3e94a0250)] feat: Adding JSON response to output

### theQRL/qrllib

**[xmss_alt port to Rust](https://github.com/theQRL/qrllib/pull/177)**

*   [[670e9](https://github.com/theQRL/qrllib/commit/2c8de2a0d891ccaf1d1ae662fe518e55237670e9)] start xmss_alt rust migration - fips202, hash_address, hash_functions
*   [[80a8b](https://github.com/theQRL/qrllib/commit/85b8cec80efba56fc398357cde44d2c10e580a8b)] wots rust implementation with dependencies
*   [[39786](https://github.com/theQRL/qrllib/commit/2ff00ca3bb6480af5f4be4e15f2467b880639786)] hash rust implementation
*   [[af1e7](https://github.com/theQRL/qrllib/commit/511451031534dbd809420628359f7ce57c2af1e7)] xmss_common rust implementation
*   [[ce9f8](https://github.com/theQRL/qrllib/commit/a35adb96685e3cfd5f463b7cb6c41bfda55ce9f8)] algsxmss Rust implementation
*   [[781c5](https://github.com/theQRL/qrllib/commit/4ebc6dcac51c4b68a829c59d5588d6ee628781c5)] algsxmss_fast Rust implementation
*   [[a2112](https://github.com/theQRL/qrllib/commit/ce22d41c631feb531f0ccee4fea8ec6403ca2112)] change unsigned long port from u32 to u64

### theQRL/qips

**[Mark QIP-016 as completed](https://github.com/theQRL/qips/pull/41)**

*   [[6f811](https://github.com/theQRL/qips/commit/6fb42ec0e0f355f1683ea9abf60948f77006f811)] Mark QIP-016 as completed

### theQRL/qrl-proto-sha256

**[Add walletProto](https://github.com/theQRL/qrl-proto-sha256/pull/13)**

*   [[88527](https://github.com/theQRL/qrl-proto-sha256/commit/d68afa7ca65ed765a5edbf362d92f99413588527)] Add walletProto
*   [[0f6a8](https://github.com/theQRL/qrl-proto-sha256/commit/184846c4279c01cdd9c5ce074f1ba0f7ec40f6a8)] version bump
*   [[8173b](https://github.com/theQRL/qrl-proto-sha256/commit/01a9ad5578a2ba809444998577344954d008173b)] Add HF node proto

### theQRL/theqrl.org

**[Content maintenance](https://github.com/theQRL/theqrl.org/pull/281)**

*   [[178d3](https://github.com/theQRL/theqrl.org/commit/6026218b3b3dd90bb78b0244e128d8b6e6c178d3)] Update presskit explainer deck
*   [[36ffe](https://github.com/theQRL/theqrl.org/commit/02dcc692d7abda17c7164df73914e10176936ffe)] Add foundation website URL.
*   [[85344](https://github.com/theQRL/theqrl.org/commit/92f785c72f96c52f1dd375a36a1dcae278685344)] Update go modules for theQRL/qips
*   [[ea99a](https://github.com/theQRL/theqrl.org/commit/5e38158571be7922b46a90e7def45e91e71ea99a)] Update stats

**[Presskit ToS language update + supporting explainer files](https://github.com/theQRL/theqrl.org/pull/280)**

*   [[cc204](https://github.com/theQRL/theqrl.org/commit/8578965e4cd90df0abf1010de470190cd73cc204)] Presskit ToS language update + supporting explainer files

**[Add QRL Explainer](https://github.com/theQRL/theqrl.org/pull/279)**

*   [[59566](https://github.com/theQRL/theqrl.org/commit/134350184137cc0c3179f0f8b0af813f1aa59566)] Add QRL Explainer

**[Add reasons to run a qrl node blog](https://github.com/theQRL/theqrl.org/pull/278)**

*   [[06c5f](https://github.com/theQRL/theqrl.org/commit/3d2dfc41093fff0ce7ce2b9fd7748e81a5406c5f)] Adjust css for code
*   [[ca98f](https://github.com/theQRL/theqrl.org/commit/5708c85dcf95a69a442c59cc37af35390edca98f)] Add ability to use stats inline in blog, live. Add stats
*   [[19022](https://github.com/theQRL/theqrl.org/commit/cdaddf7071b0374a2e2642660725e58cea719022)] Add contributors and stats scripts file
*   [[a33fd](https://github.com/theQRL/theqrl.org/commit/b6f33247bdce88323783da32152ada7009da33fd)] Clean up extra.js
*   [[4c78b](https://github.com/theQRL/theqrl.org/commit/022823027328408cee1a5d624dd715189ba4c78b)] Updated contributions
*   [[e68d6](https://github.com/theQRL/theqrl.org/commit/f320dbe0c16963f33d275a17fa50a6b6d91e68d6)] Add citation (pointed out by quack)
*   [[b4424](https://github.com/theQRL/theqrl.org/commit/04d4aa5c58782441a439b226d67dbff9a11b4424)] Change variable sources for timeline
*   [[90dff](https://github.com/theQRL/theqrl.org/commit/54698efe2538c077af5333b52af7498cd8390dff)] Add "reasons to run a qrl node" blog
*   [[2bf3b](https://github.com/theQRL/theqrl.org/commit/80a235f4f32894bfe0b5b9b4c2f8e1e65ee2bf3b)] Remove lang.FormatNumber
*   [[58c9d](https://github.com/theQRL/theqrl.org/commit/028bc5513ed0cf0c46680d44814602146ec58c9d)] Update stats

**[Last Month at QRL - February 2022](https://github.com/theQRL/theqrl.org/pull/277)**

*   [[0869e](https://github.com/theQRL/theqrl.org/commit/7ea1b9c45bb4a99269dd615257c218d16440869e)] Grammar fix by otdto
*   [[6a43b](https://github.com/theQRL/theqrl.org/commit/6994bfe723a68a77d4d3f588e2d2f8682926a43b)] Remove countdown
*   [[328bc](https://github.com/theQRL/theqrl.org/commit/489ec4727713cad9a82eccf043acbaa0497328bc)] Update data
*   [[dbb95](https://github.com/theQRL/theqrl.org/commit/9530cbb11843a1e89e909001cb5e61ad540dbb95)] Update historical assets
*   [[7b719](https://github.com/theQRL/theqrl.org/commit/0320c5aa23de58ca547cbb0e398912ae6587b719)] Last Month at QRL - February 2022

**[QRL Mainnet Release v3 blog](https://github.com/theQRL/theqrl.org/pull/276)**

*   [[32a42](https://github.com/theQRL/theqrl.org/commit/e36d1917226f6bf43fdc4c7dd4b2dc4dabd32a42)] QRL Mainnet Release v3 blog
*   [[31653](https://github.com/theQRL/theqrl.org/commit/9930a011b8a1f49cff724be999ec9b5897e31653)] Minor roadmap changes
*   [[5be0a](https://github.com/theQRL/theqrl.org/commit/eda4054a9cedc56ddfdef9abfe65c9e4c695be0a)] Countdown changes (will be removed next update)
*   [[49e56](https://github.com/theQRL/theqrl.org/commit/24a2ef075a49919ce6ae205d5c7a5ded2a249e56)] Add geometry labs profile
*   [[eaa60](https://github.com/theQRL/theqrl.org/commit/f928891063e6699600c77b54080a60fcdf6eaa60)] Part of roadmap adjustments.

**[New lattice-algebra blog](https://github.com/theQRL/theqrl.org/pull/275)**

*   [[e2cdb](https://github.com/theQRL/theqrl.org/commit/61ac0776dd024bdb4cc4d32528e06b75028e2cdb)] Lattice algebra blog
*   [[e0f2c](https://github.com/theQRL/theqrl.org/commit/dd27e39718a80f0d0f2b159afa28f586e26e0f2c)] Countdown to mainnet v3 counter
*   [[131fd](https://github.com/theQRL/theqrl.org/commit/b3cb20c63afab6a5af76753f82672e71687131fd)] Repository count change
*   [[05b10](https://github.com/theQRL/theqrl.org/commit/0a4b026382fb38838f8784bba8bf3140c5605b10)] Additional citation (thanks to Quack from Discord)
*   [[f5773](https://github.com/theQRL/theqrl.org/commit/8f09dd8bd4e8f85cadd2b690e90d1f5d37ff5773)] Lattice algebra blog updates
*   [[9028c](https://github.com/theQRL/theqrl.org/commit/b54554f8446b48eb0dc17f431f3efc5a7489028c)] Proof-of-Stake stub

**[Last Month at QRL - January 2022](https://github.com/theQRL/theqrl.org/pull/274)**

*   [[c55ad](https://github.com/theQRL/theqrl.org/commit/fd5949d82d86de2270c333543c57c1d6eb1c55ad)] Update QIPs
*   [[211cf](https://github.com/theQRL/theqrl.org/commit/c5a0de563f28b57111669689f0cdf273c73211cf)] Last Month at QRL - January 2022
*   [[4687a](https://github.com/theQRL/theqrl.org/commit/9a44e32c9da1150838f4286e1beb44b43fb4687a)] A few changes

## Quantum News

### Nvidia: ‘We are a quantum computing company’

> Nvidia has been circling the market, creating the cuQuantum software development kit for quantum simulations, which was announced last year and is now generally available, and accumulating partners like Pasqal, IBM, Oak Ridge National Laboratory (ORNL) and others.
>
> But with this week’s launch of a new quantum compiler and a new software appliance to run quantum jobs in data centers, Nvidia is making the statement that it is as intent as any pure-play quantum firm or evolving classical computing company on pursuing quantum market opportunities. - [insidequantumtechnology](https://www.insidequantumtechnology.com/news-archive/nvidia-we-are-a-quantum-computing-company/)

###  The quantum tech arms race is on 

> Russia, India, Japan, the European Union and Australia have established significant quantum research and development programs. But China and the US hold a substantial lead in the new quantum race.
> 
> And the race is heating up. In 2015, the US was the world’s largest investor in quantum technology, having spent about US$500 million. By 2021 this investment had grown to almost $2.1 billion.
> 
> However, Chinese investment in quantum technology in the same period expanded from $300 million to an estimated $13 billion. - [asiatimes](https://asiatimes.com/2022/03/the-quantum-tech-arms-race-is-on/)

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)