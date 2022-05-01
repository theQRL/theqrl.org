---
layout: blog-post
slug: last-month-at-qrl-april-2022
date: 2022-05-01
author: "Jack Matier"
title: "Last Month at QRL - April 2022"
summary: "Last month the QRL team was excited to announce the September 2022 hackathon unveiling PoS and EVM compatible smart contracts. Geometry Labs, in partnership with QRL, released the first part of techniques for efficient finance series with more to come!"
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### QRL Hackathon 2022

{{< image "./images/h.hackathon.png" >}}

**The QRL protocol's future** lies in a public blockchain powered by **proof-of-stake** that is environmentally friendly, completely decentralized, and capable of **provably post-quantum secure transactions** and **Turing complete smart contracts**. New and novel use-cases like dApps, DeFi applications, quantum-secure stablecoins, NFTs, and metaverse applications can be created by provably post-quantum safe Web3 capabilities. Using the QRL ecosystem, blockchain code may be made quantum-secure by anyone's vision. Choosing to implement the EVM into the QRL protocol enables smart contract compatibility and interoperability with other EVM chains.

**Which is why the QRL team was excited to announce the upcoming 'Build on QRL Protocol' hackathon event**, which will take place in **September 2022** where the upcoming network upgrade which includes Proof-of-Stake with compatible Ethereum Virtual Machine (EVM) smart contract functionality will be unveiled, [demonstrating the future of post-quantum secure blockchains](/blog/qrl-hackathon-2022/). 

We're happy to say we've narrowed it down to a single location and are getting other details sorted out before revealing. Stay tuned!

### Techniques for Efficient Post-quantum Finance Series

{{< image "./images/h.series.png" >}}

The series starts with revealing [lattice-algebra](/blog/lattice-algebra-library/), a library with the goal to lower the barrier for creating lattice cryptography primitives and applications by allowing the developers to focus on securely building the higher-level constructs without having to worry about implementing the underlying algebra as well. In short, it is designed to make it easy for developers to write **efficient, clean code** which implements lattice-based cryptography for protocols and applications - something not readily found in current libraries and something sorely needed to help **usher in the era of post-quantum finance.**

This was then been followed up with [post-quantum secure digital signatures](/blog/techniques-for-efficient-post-quantum-finance-part-1-digital-signatures/), which describes lattice-based one-time signature scheme similar to the one published by [Lyubashevsky and Micciancio](https://eprint.iacr.org/2013/746.pdf). Since our scheme also has some similarities to CRYSTALS-Dilithium (a NIST post-quantum standardization candidate), there are general applications for our discussion below regarding optimizations for smaller keys and signatures in the lattice setting.

Building off of [Lyubashevsky and Micciancio](https://eprint.iacr.org/2013/746.pdf), we introduce Boneh and Kim style [post-quantum secure signature aggregation](/blog/techniques-for-efficient-post-quantum-finance-part-2-signature-aggregation/), which has several potential applications such as reducing the on-chain footprint for proof-of-stake consensus with many validators, implementing m-of-n multisignature wallets, and on-chain governance.

From there, we'll be taking a journey through two additional parts to the series, post-quantum secure adapter signatures and fountain architectures. Adaptor signatures is a secondary signature that is used in conjunction with an initial signature to reveal a piece of secret data, resolving the trust issue inherent in concurrent transactions such as atomic swaps. Fountain architectures is a method to significantly reduce the overall blockchain size in a way that remains secure. This is an evolution over *light clients* (which don't validate transactions - vulnerable to security and privacy attacks), and *block pruning* (deletes old blocks after being validated - requires archival nodes to remain on the network). Worth a read is ["SeF: A Secure Fountain Architecture for Slashing Storage Costs in Blockchains"](https://www.researchgate.net/publication/334129900_SeF_A_Secure_Fountain_Architecture_for_Slashing_Storage_Costs_in_Blockchains) which managed to slash storage costs by 1000x, bringing the Bitcoin network down from 191GB to 195MB.

> While some effort has been made to make everything understandable, this article series is aimed at systems integrators and cryptography students.
We will be maintaining an [open AMA form](https://forms.gle/4ebYXFP8KiSJcT7y6) throughout the "Techniques for efficient post-quantum finance" series to address any technical or non-technical questions that may arise, and *encourage* anyone to use it! 

## Other developments

### Non-fungible Tokens (NFTs)

Early this month we put out a call-to-action for [NFT Platform Providers](/blog/calling-all-nft-platform-providers/) which connects with our call-to-action for NFT creators earlier this year. Since then, we are pleased to announce that we have gathered interested parties and allocated development resources to assist in the development of post-quantum secure NFTs. 

### Developer Expansion

There are currently three candidates who have been shortlisted and will be subjected to additional evaluations over the next few months. These developers will work along with the rest of the development team to build out our Proof-of-Stake and EVM compatible smart contract platform, though importantly will not limit the ability to have a public devnet for our QRL Hackathon 2022.

### EnQlave

EnQlave was founded in early 2020 after it was discovered that we could bring post-quantum security to the Ethereum blockchain (with costs).
This pledged to give back to the Ethereum community while also introducing Ethereum to the QRL blockchain ecosystem and providing a bridge in the form of Uniswap. We had a prototype by April 2021 and determined that the project was viable. 

Within weeks of the announcement, the average Ethereum gas fees skyrocketed by several factors. In spite of this, work was carried on until the end of 2020, when it was subjected to an audit. Unfortunately, as gas prices refused to recede, it was necessary to make changes in order to keep the project viable and so hash-chains were implemented. This corresponded with a development change to Kaushal/JP, while Charlie finished his final year of high school. Charlie is back as of late 2021/early 2022 (note: dev changes can take months to get acquainted with code) and will be preparing an update on EnQlave.

{{< image "./images/enqlave.png" >}}

Since then, Charlie has returned to EnQlave in late 2021 (please keep in mind that development changes can take months to become familiar with the code) and will be working on an update that many are eagerly awaiting. 

### Website Improvements

We've updated to Hugo v97.3 from v74.1 (released early 2020!), which has many additional features such improved i18n handling (stay tuned!) and better file handling & management, which has allowed for the ability to significantly clean things up.

{{< image "./images/commit.png" >}}

Other adjustments we've made have been the *addition* of Google Analytics 4 (running alongside of Universal Analytics 3 for now, but will supersede it) to continue being able to properly track and analyze milestones and evaluate the effectiveness of various initiatives. MathJax has gone through a downgrade from v3 to v2 to better match workflow with hackmd and spearhead content (hope you're enjoying the LaTeX in the Geometry Labs blogs!). Additional features added are guest blogs and the ability to handle series for both video and written content!

{{< image "./images/series.png" >}}

## Community Initiatives

### QRL Cannon Release

{{< image "./images/cannon.png" >}}

QRL Cannon allows QRL nodes to be launched in the cloud through a web interface with no technical knowledge; just follow the directions at https://qrlcannon.net/.

Questions? The person spearheading QRL Cannon, K.G. Yıldırım, is available in [Discord](/discord) to answer any inquiries you may have.

## Quantum News

### OpenSSH now defaults to protecting against quantum computer attacks

> "Post-quantum cryptography has arrived by default with the release of OpenSSH 9 and the adoption of the hybrid Streamlined NTRU Prime + x25519 key exchange method." - [zdnet](https://www.zdnet.com/article/openssh-now-defaults-to-protecting-against-quantum-computer-attacks/)

### PsiQuantum’s Path to 1 Million Qubits

> "PsiQuantum says it will have all the manufacturing processes in place “by the middle of the decade” and it’s working closely with GlobalFoundries (GF) to turn its vision into reality. The generous size of its funding suggests many think it will succeed. PsiQuantum is betting on a photonics-based approach called fusion-based quantum computing (paper) that relies mostly on well-understood optical technology but requires extremely precise manufacturing tolerances to scale up. It also relies on managing individual photons, something that has proven difficult for others." - [hpcwire](https://www.hpcwire.com/2022/04/21/psiquantums-path-to-1-million-qubits-by-the-middle-of-the-decade/) 

## Development Log

### theQRL/nft-providers

**[Add code generator](https://github.com/theQRL/nft-providers/pull/1)**

-   [[c7287](https://github.com/theQRL/nft-providers/commit/a388dde76ecc624e15b47de29ba5a3bc662c7287)] Add base setup
-   [[2e2c8](https://github.com/theQRL/nft-providers/commit/f913addb261e662cc6fc213d163984cc3552e2c8)] Merge branch 'theQRL:main' into main
-   [[c6d54](https://github.com/theQRL/nft-providers/commit/f3c3ca44eff23ebc8036a352a9eb34e5ac5c6d54)] Add providers.yml and code generator
-   [[9f306](https://github.com/theQRL/nft-providers/commit/9cc92583bd06c6b07afba28f0e39605445c9f306)] Add README

### theQRL/qrl-proto-sha256

**[Add walletProto](https://github.com/theQRL/qrl-proto-sha256/pull/13)**

-   [[88527](https://github.com/theQRL/qrl-proto-sha256/commit/d68afa7ca65ed765a5edbf362d92f99413588527)] Add walletProto
-   [[0f6a8](https://github.com/theQRL/qrl-proto-sha256/commit/184846c4279c01cdd9c5ce074f1ba0f7ec40f6a8)] version bump
-   [[8173b](https://github.com/theQRL/qrl-proto-sha256/commit/01a9ad5578a2ba809444998577344954d008173b)] Add HF node proto

### theQRL/block-explorer

**[NFT explorer functionality to testnet](https://github.com/theQRL/block-explorer/pull/412)**

-   [[e245d](https://github.com/theQRL/block-explorer/commit/f2ebc665856fd5246bb934ad0241ae156a8e245d)] Support for nft-providers and NFTs in /tx route
-   [[517c4](https://github.com/theQRL/block-explorer/commit/881d30f8e6ce45facc6440481a454873658517c4)] Version bump explorer-helpers
-   [[34082](https://github.com/theQRL/block-explorer/commit/c62551531d82cacf8f15aa0c8192ed03f7634082)] Add NFTs in tx list on address page
-   [[ba578](https://github.com/theQRL/block-explorer/commit/741d5c3fe2541fc29ee9b2478e0c5accf21ba578)] Support NFTs on block list
-   [[c13e5](https://github.com/theQRL/block-explorer/commit/2d39b09b8b7b68c0054d679657b0689d68ac13e5)] Add verified provider badge in header of address page where appropriate
-   [[d12ba](https://github.com/theQRL/block-explorer/commit/e0dc2cd054d44afd5c7f01bb48acdd73864d12ba)] Add NFTs tab, populate and separate from tokens
-   [[1f718](https://github.com/theQRL/block-explorer/commit/1e5c76be33c1453f84577897dab8a7f0f981f718)] Dark mode UI fix for NFT header
-   [[a4207](https://github.com/theQRL/block-explorer/commit/de4e195861ec882b1d3f26b79d26387b854a4207)] Remove extraneous console log
-   [[4ff38](https://github.com/theQRL/block-explorer/commit/d6c38f05833444ee1df42ff0da164199b2e4ff38)] Add WIP transfer NFT display on Tx page
-   [[4dd99](https://github.com/theQRL/block-explorer/commit/ef8c7bafc20db05b8ceed37bcc9589c3db94dd99)] Use updated explorer-helpers
-   [[8bf7b](https://github.com/theQRL/block-explorer/commit/41967d820fe7c25bf9609e9a9fe74375f8b8bf7b)] Transfer NFTs on Tx page
-   [[49b56](https://github.com/theQRL/block-explorer/commit/16187ea2ca985fa51f597f78a9e42a5940349b56)] Send and receive NFTs on address page
-   [[6b714](https://github.com/theQRL/block-explorer/commit/f3b164da0afd5cba26223a8b809e654c4bf6b714)] Add Transfer NFTs to block page
-   [[d1531](https://github.com/theQRL/block-explorer/commit/980c202e2b4c8ea717830181a69565ab71fd1531)] Last TX page NFTs

### theQRL/qips

**[Mark QIP-016 as completed](https://github.com/theQRL/qips/pull/41)**

-   [[6f811](https://github.com/theQRL/qips/commit/6fb42ec0e0f355f1683ea9abf60948f77006f811)] Mark QIP-016 as completed

### theQRL/theqrl.org

**[Add geometry labs contributors](https://github.com/theQRL/theqrl.org/pull/295)**

-   [[da64e](https://github.com/theQRL/theqrl.org/commit/d4e1edcaa5e7592699a5d6334fabf382a37da64e)] Add geometry labs contributors
-   [[16721](https://github.com/theQRL/theqrl.org/commit/6bfd1675ecc48fa2c71006df671b9a129c516721)] Update stats

**[tweak: remove link to pending article](https://github.com/theQRL/theqrl.org/pull/294)**

-   [[0c91c](https://github.com/theQRL/theqrl.org/commit/f68e5e435ea17ee9d9a2b4842fb793c74e20c91c)] tweak: remove link to pending article

**[Add new blog: Techniques for efficient post-quantum finance part 2](https://github.com/theQRL/theqrl.org/pull/293)**

-   [[4c9be](https://github.com/theQRL/theqrl.org/commit/aa4d839cad52f67a29f41e1837b127c718a4c9be)] Update "case for QR blockchains"
-   [[aa942](https://github.com/theQRL/theqrl.org/commit/535f97ba960ef61ea0f0378c62e1e51cd38aa942)] Add new blog: Techniques for efficient post-quantum finance part 2
-   [[a3825](https://github.com/theQRL/theqrl.org/commit/3f9fcf603e6377244f21489723454b91526a3825)] Add further reading which references theqrl.org Thanks curefrankosflue
-   [[57b59](https://github.com/theQRL/theqrl.org/commit/5f4a418b2e80e23ab12ce2f00a5a4076f5557b59)] New feature: series taxonomy
-   [[bf069](https://github.com/theQRL/theqrl.org/commit/3aad86b48eb8ce4856f0503aba715a686ccbf069)] Add series taxonomy to part 1
-   [[497b7](https://github.com/theQRL/theqrl.org/commit/2a43d9f79263b727962418ab893c2b34844497b7)] LaTex/Summary fixes
-   [[aaa80](https://github.com/theQRL/theqrl.org/commit/6ce350313096107ce9554d144882bc090beaaa80)] Illustration fixes

**[Update CI config for bumped Hugo version](https://github.com/theQRL/theqrl.org/pull/292)**

-   [[a02dc](https://github.com/theQRL/theqrl.org/commit/1d0119a454edd83347d2932ec276548acf2a02dc)] Update CI config for bumped Hugo version

**[Tidy after v97.3 netlify update](https://github.com/theQRL/theqrl.org/pull/291)**

-   [[f74c1](https://github.com/theQRL/theqrl.org/commit/506e5678aabab65e5e3542bee0cc271ff2bf74c1)] Tidy
-   [[5df7a](https://github.com/theQRL/theqrl.org/commit/0fc027e5ee1b2601c8aa0a8cf31c95ef2d55df7a)] Merge remote-tracking branch 'upstream/main' into main
-   [[2fa00](https://github.com/theQRL/theqrl.org/commit/4305747ebc8949ee8b8ba683f374c273c262fa00)] Merge remote-tracking branch 'upstream/main' into main
-   [[de68e](https://github.com/theQRL/theqrl.org/commit/267b4823bfb2785d869fbd7fc55eb6138aede68e)] Fix twitter warnings
-   [[601bf](https://github.com/theQRL/theqrl.org/commit/fec5a6b52a376d67f9dc3aa3640f8e16124601bf)] Add research category to blog
-   [[1d356](https://github.com/theQRL/theqrl.org/commit/57ef2c3c1ce86c815031e19759b42d369a11d356)] Remove excess files and replace with mounts
-   [[ec93a](https://github.com/theQRL/theqrl.org/commit/6fb246cca164f20726882854c68bda9892aec93a)] Move static directory to assets
-   [[f436f](https://github.com/theQRL/theqrl.org/commit/eb620e9a9791c4cf42e8c760ddd62892476f436f)] Better CSP compliance + GA4
-   [[f6918](https://github.com/theQRL/theqrl.org/commit/91b6d2ab79cc31e782c83cd340b13186d35f6918)] Update stats
-   [[cb115](https://github.com/theQRL/theqrl.org/commit/515fe52867af55530771b13d91dd4ae54c3cb115)] Add GA4 Header

**[tweak: correct repository link](https://github.com/theQRL/theqrl.org/pull/290)**

-   [[8376a](https://github.com/theQRL/theqrl.org/commit/83880669ad38c185d92ab03cb281199c8ad8376a)] tweak: correct repository link

**[Upgrade Hugo version](https://github.com/theQRL/theqrl.org/pull/289)**

-   [[895c5](https://github.com/theQRL/theqrl.org/commit/403cf6269571b3d590ffce46fc2db3eaa5c895c5)] Upgrade Hugo version

**[Remove redundant package-lock.json](https://github.com/theQRL/theqrl.org/pull/288)**

-   [[ac34e](https://github.com/theQRL/theqrl.org/commit/2a16dbaf139e3e3cb06d810f59494deaecfac34e)] Remove redundant package-lock.json

**[Remove mount and duplicate files instead](https://github.com/theQRL/theqrl.org/pull/287)**

-   [[21311](https://github.com/theQRL/theqrl.org/commit/4d5722155f7ac36c997943a7bab16c68b8e21311)] Remove mount and duplicate files instead

**[New blog: Techniques for efficient post-quantum finance (Part 1: digital signatures)](https://github.com/theQRL/theqrl.org/pull/286)**

-   [[6ab63](https://github.com/theQRL/theqrl.org/commit/29441e22fa74faf892320cf5bd55279caf16ab63)] Improve mathjax configuration
-   [[11840](https://github.com/theQRL/theqrl.org/commit/a0744f530d336b7b1af5bc4ca966c3510ef11840)] Add guest blog ability
-   [[590a5](https://github.com/theQRL/theqrl.org/commit/b85febf4e5141ae32c685ff758ad052dfb9590a5)] Additional styling
-   [[5cbb1](https://github.com/theQRL/theqrl.org/commit/c94b9cf293c6fb4228a5114ae3abe192f2f5cbb1)] New blog: Techniques for efficient post-quantum finance (Part 1: digital signatures)
-   [[27538](https://github.com/theQRL/theqrl.org/commit/7c7ecc2c3560f7a70f5e59dbd64f5e6f9ea27538)] Fix Alicebob Oracle unforgeability

**[Fix header image for blog](https://github.com/theQRL/theqrl.org/pull/285)**

-   [[021ba](https://github.com/theQRL/theqrl.org/commit/4ee7039b060bd0034f8186766cd689d9c3d021ba)] Fix header image for blog

**[New Blog: PoS/EVM Smart-contract reveal at the QRL Hackathon 2022](https://github.com/theQRL/theqrl.org/pull/284)**

-   [[a331b](https://github.com/theQRL/theqrl.org/commit/ea41f69468177fd682a15c96e834b0772a3a331b)] New Blog: QRL Hackathon 2022 + PoS/Smart-contract reveal
-   [[544b5](https://github.com/theQRL/theqrl.org/commit/873bfad4658a3cb35aab10496d79655baed544b5)] Fix windows downloads to show extensions
-   [[d564f](https://github.com/theQRL/theqrl.org/commit/92d5c57dcab26f65167a8023b40b8f22a25d564f)] Adjustments

**[New blog: Calling all NFT service providers](https://github.com/theQRL/theqrl.org/pull/283)**

-   [[e3fd3](https://github.com/theQRL/theqrl.org/commit/8c9a26c3638f0425acdf7ccc91e69df1027e3fd3)] New blog: Calling all NFT service providers
-   [[0cf82](https://github.com/theQRL/theqrl.org/commit/2c78b5a13ed0c3016e975abab0ef45fe7e40cf82)] Update data

**[Add Last Month at QRL March 2022 blog update](https://github.com/theQRL/theqrl.org/pull/282)**

-   [[10824](https://github.com/theQRL/theqrl.org/commit/21556f73511a3977ce39a7e5f28f2f9bd8e10824)] Add Last Month at QRL March 2022 images
-   [[c6224](https://github.com/theQRL/theqrl.org/commit/3950ffe660d92ec2d73250c0439746c0217c6224)] Add Last Month at QRL March 2022 blog text
-   [[1ed1d](https://github.com/theQRL/theqrl.org/commit/c9fcd8cded393ea0dfe67e0fe18cb520d7b1ed1d)] Add Hack font to code areas
-   [[c0e62](https://github.com/theQRL/theqrl.org/commit/ad511835e563a59934af6a1cf9079cc0aacc0e62)] Update stats

**[Content maintenance](https://github.com/theQRL/theqrl.org/pull/281)**

-   [[178d3](https://github.com/theQRL/theqrl.org/commit/6026218b3b3dd90bb78b0244e128d8b6e6c178d3)] Update presskit explainer deck
-   [[36ffe](https://github.com/theQRL/theqrl.org/commit/02dcc692d7abda17c7164df73914e10176936ffe)] Add foundation website URL.
-   [[85344](https://github.com/theQRL/theqrl.org/commit/92f785c72f96c52f1dd375a36a1dcae278685344)] Update go modules for theQRL/qips
-   [[ea99a](https://github.com/theQRL/theqrl.org/commit/5e38158571be7922b46a90e7def45e91e71ea99a)] Update stats

**[Presskit ToS language update + supporting explainer files](https://github.com/theQRL/theqrl.org/pull/280)**

-   [[cc204](https://github.com/theQRL/theqrl.org/commit/8578965e4cd90df0abf1010de470190cd73cc204)] Presskit ToS language update + supporting explainer files

**[Add QRL Explainer](https://github.com/theQRL/theqrl.org/pull/279)**

-   [[59566](https://github.com/theQRL/theqrl.org/commit/134350184137cc0c3179f0f8b0af813f1aa59566)] Add QRL Explainer

**[Add reasons to run a qrl node blog](https://github.com/theQRL/theqrl.org/pull/278)**

-   [[06c5f](https://github.com/theQRL/theqrl.org/commit/3d2dfc41093fff0ce7ce2b9fd7748e81a5406c5f)] Adjust css for code
-   [[ca98f](https://github.com/theQRL/theqrl.org/commit/5708c85dcf95a69a442c59cc37af35390edca98f)] Add ability to use stats inline in blog, live. Add stats
-   [[19022](https://github.com/theQRL/theqrl.org/commit/cdaddf7071b0374a2e2642660725e58cea719022)] Add contributors and stats scripts file
-   [[a33fd](https://github.com/theQRL/theqrl.org/commit/b6f33247bdce88323783da32152ada7009da33fd)] Clean up extra.js
-   [[4c78b](https://github.com/theQRL/theqrl.org/commit/022823027328408cee1a5d624dd715189ba4c78b)] Updated contributions
-   [[e68d6](https://github.com/theQRL/theqrl.org/commit/f320dbe0c16963f33d275a17fa50a6b6d91e68d6)] Add citation (pointed out by quack)
-   [[b4424](https://github.com/theQRL/theqrl.org/commit/04d4aa5c58782441a439b226d67dbff9a11b4424)] Change variable sources for timeline
-   [[90dff](https://github.com/theQRL/theqrl.org/commit/54698efe2538c077af5333b52af7498cd8390dff)] Add "reasons to run a qrl node" blog
-   [[2bf3b](https://github.com/theQRL/theqrl.org/commit/80a235f4f32894bfe0b5b9b4c2f8e1e65ee2bf3b)] Remove lang.FormatNumber
-   [[58c9d](https://github.com/theQRL/theqrl.org/commit/028bc5513ed0cf0c46680d44814602146ec58c9d)] Update stats

**[Last Month at QRL - February 2022](https://github.com/theQRL/theqrl.org/pull/277)**

-   [[0869e](https://github.com/theQRL/theqrl.org/commit/7ea1b9c45bb4a99269dd615257c218d16440869e)] Grammar fix by otdto
-   [[6a43b](https://github.com/theQRL/theqrl.org/commit/6994bfe723a68a77d4d3f588e2d2f8682926a43b)] Remove countdown
-   [[328bc](https://github.com/theQRL/theqrl.org/commit/489ec4727713cad9a82eccf043acbaa0497328bc)] Update data
-   [[dbb95](https://github.com/theQRL/theqrl.org/commit/9530cbb11843a1e89e909001cb5e61ad540dbb95)] Update historical assets
-   [[7b719](https://github.com/theQRL/theqrl.org/commit/0320c5aa23de58ca547cbb0e398912ae6587b719)] Last Month at QRL - February 2022

**[QRL Mainnet Release v3 blog](https://github.com/theQRL/theqrl.org/pull/276)**

-   [[32a42](https://github.com/theQRL/theqrl.org/commit/e36d1917226f6bf43fdc4c7dd4b2dc4dabd32a42)] QRL Mainnet Release v3 blog
-   [[31653](https://github.com/theQRL/theqrl.org/commit/9930a011b8a1f49cff724be999ec9b5897e31653)] Minor roadmap changes
-   [[5be0a](https://github.com/theQRL/theqrl.org/commit/eda4054a9cedc56ddfdef9abfe65c9e4c695be0a)] Countdown changes (will be removed next update)
-   [[49e56](https://github.com/theQRL/theqrl.org/commit/24a2ef075a49919ce6ae205d5c7a5ded2a249e56)] Add geometry labs profile
-   [[eaa60](https://github.com/theQRL/theqrl.org/commit/f928891063e6699600c77b54080a60fcdf6eaa60)] Part of roadmap adjustments.

**[New lattice-algebra blog](https://github.com/theQRL/theqrl.org/pull/275)**

-   [[e2cdb](https://github.com/theQRL/theqrl.org/commit/61ac0776dd024bdb4cc4d32528e06b75028e2cdb)] Lattice algebra blog
-   [[e0f2c](https://github.com/theQRL/theqrl.org/commit/dd27e39718a80f0d0f2b159afa28f586e26e0f2c)] Countdown to mainnet v3 counter
-   [[131fd](https://github.com/theQRL/theqrl.org/commit/b3cb20c63afab6a5af76753f82672e71687131fd)] Repository count change
-   [[05b10](https://github.com/theQRL/theqrl.org/commit/0a4b026382fb38838f8784bba8bf3140c5605b10)] Additional citation (thanks to Quack from Discord)
-   [[f5773](https://github.com/theQRL/theqrl.org/commit/8f09dd8bd4e8f85cadd2b690e90d1f5d37ff5773)] Lattice algebra blog updates
-   [[9028c](https://github.com/theQRL/theqrl.org/commit/b54554f8446b48eb0dc17f431f3efc5a7489028c)] Proof-of-Stake stub

**[Last Month at QRL - January 2022](https://github.com/theQRL/theqrl.org/pull/274)**

-   [[c55ad](https://github.com/theQRL/theqrl.org/commit/fd5949d82d86de2270c333543c57c1d6eb1c55ad)] Update QIPs
-   [[211cf](https://github.com/theQRL/theqrl.org/commit/c5a0de563f28b57111669689f0cdf273c73211cf)] Last Month at QRL - January 2022
-   [[4687a](https://github.com/theQRL/theqrl.org/commit/9a44e32c9da1150838f4286e1beb44b43fb4687a)] A few changes

### theQRL/qrl-wallet

**[NFT wallet functionality to testnet](https://github.com/theQRL/qrl-wallet/pull/518)**

-   [[abbc2](https://github.com/theQRL/qrl-wallet/commit/cb8c40cc6437924a80f95a44757058355fcabbc2)] NFTs: use linting service (dev deploy)
-   [[e7b7c](https://github.com/theQRL/qrl-wallet/commit/4fb4dae7c57744c1e517c23ee6dd401505ae7b7c)] NFT: rudimentary send linted metadata as per QIP014
-   [[8d5b4](https://github.com/theQRL/qrl-wallet/commit/f99d7992492ad3bee98ff3c4f9cece9fd0d8d5b4)] Add NFTs tab on main wallet page
-   [[9ec90](https://github.com/theQRL/qrl-wallet/commit/059d8dbffa5d9f9242ac954d854c2fc3f189ec90)] Add list of NFTs owned on main page and WIP on creation in Tx history
-   [[7dd1f](https://github.com/theQRL/qrl-wallet/commit/6b5bffb72045d9f8a9fcb91b145a1072a4f7dd1f)] NFT data on Tx page
-   [[1c9ce](https://github.com/theQRL/qrl-wallet/commit/dc9e74a092bd526a4859bd787ff02253a4e1c9ce)] Select NFT to transfer UI logic
-   [[49209](https://github.com/theQRL/qrl-wallet/commit/aeccafed729142b934f5383d0eba278a4d449209)] Parse token data as NFT on confirmation page
-   [[352d3](https://github.com/theQRL/qrl-wallet/commit/4ddf37c6499ce40d4dfa1dfb00db075cc79352d3)] Add NFT tx result page
-   [[560d6](https://github.com/theQRL/qrl-wallet/commit/96e9dba976956dce2a38641b326b30845a4560d6)] Use production version of linting service
-   [[92e05](https://github.com/theQRL/qrl-wallet/commit/d52f19adc0135c5634029d3f6344fef2ba992e05)] NFT visual fixes
-   [[81a56](https://github.com/theQRL/qrl-wallet/commit/2b5615a03aa4ce11ef27b188a1585e40d0681a56)] Bump meteor version
-   [[24aa9](https://github.com/theQRL/qrl-wallet/commit/144956f4594c541f03d6949e7b238d2862624aa9)] Dependency updates
-   [[2711d](https://github.com/theQRL/qrl-wallet/commit/8ba68ea2fcb47996a59b8da62267409b2312711d)] Dependency version bumps

### theQRL/qrl-cli

**[Bump dependencies and fix to node >=16](https://github.com/theQRL/qrl-cli/pull/66)**

-   [[40d12](https://github.com/theQRL/qrl-cli/commit/381e4577c1ad30127cd09808812f4bab0c540d12)] Merge pull request #1 from theQRL/master Merge fr1t2 testing/message changes
-   [[8c8fd](https://github.com/theQRL/qrl-cli/commit/7bf890ede269f25090daa3fdf64044f76c68c8fd)] Merge branch 'theQRL:master' into master
-   [[529e4](https://github.com/theQRL/qrl-cli/commit/2635f046b0ce3aa6d588cff45abab1a1437529e4)] Merge branch 'theQRL:master' into master
-   [[d68a4](https://github.com/theQRL/qrl-cli/commit/9b6ead1983b898f21f423590616e4fde507d68a4)] Bump dependencies for npm release
-   [[d6914](https://github.com/theQRL/qrl-cli/commit/1b899e08e0b17495d576163088fc032372bd6914)] Fixes for Silicon/npm

**[feat: Adding JSON response to output](https://github.com/theQRL/qrl-cli/pull/63)**

-   [[a0250](https://github.com/theQRL/qrl-cli/commit/409ad24c2489c2815192b985f45941b3e94a0250)] feat: Adding JSON response to output

### theQRL/explorer-helpers

**[Add TRANSFER NFT](https://github.com/theQRL/explorer-helpers/pull/46)**

-   [[f57f1](https://github.com/theQRL/explorer-helpers/commit/c053e563871546fbcef9c3784654d4fd53af57f1)] Add transfer NFT support
-   [[dbf46](https://github.com/theQRL/explorer-helpers/commit/b2cc511e9f1cd5cccf2cf3e85a6a454dd30dbf46)] release v2.7.0
-   [[5f391](https://github.com/theQRL/explorer-helpers/commit/d23bd0d08637e0dda7289b1622020873d145f391)] Merge branch 'master' into master

**[Remove console output, add test & update deps](https://github.com/theQRL/explorer-helpers/pull/45)**

-   [[de477](https://github.com/theQRL/explorer-helpers/commit/c4e195114e27b39f0f9fda6d4c8599ce7f3de477)] Remove console debug & test
-   [[00d66](https://github.com/theQRL/explorer-helpers/commit/b36846e330e0f490a9663aeb393027752ae00d66)] Dependency update
-   [[1204a](https://github.com/theQRL/explorer-helpers/commit/495e08ceaca7b6e5f0f9abb89080ba73bf01204a)] Merge branch 'master' into master

**[Add 'CREATE NFT'](https://github.com/theQRL/explorer-helpers/pull/43)**

-   [[24e7b](https://github.com/theQRL/explorer-helpers/commit/a9909503e8a50ccb9022ffacf52da72040524e7b)] Add 'CREATE NFT'

### theQRL/qrllib

**[QRL Rust port (unbenchmarked)](https://github.com/theQRL/qrllib/pull/178)**

-   [[06991](https://github.com/theQRL/qrllib/commit/6021543420501bc569f1187faa88763514206991)] xmss\_base Rust implementation
-   [[2dbee](https://github.com/theQRL/qrllib/commit/9d2a85679fad3eeedf5a0bf3ad70f7d56262dbee)] add xmss\_alt\_test and fix bugs
-   [[7b4fa](https://github.com/theQRL/qrllib/commit/7ca4955e9a132444eb86ea62602d6838bf67b4fa)] xmss\_basic implementation and tests for qrl\_helper + qrl\_descriptor
-   [[a5008](https://github.com/theQRL/qrllib/commit/243e1a4e788199e692d84be716f65c1512ba5008)] add xmss\_basic tests and fix minor bugs
-   [[5212f](https://github.com/theQRL/qrllib/commit/bd0c486fe3c59a9b853aa0dfec3aaff40175212f)] XMSSPool Rust implementation done + tests
-   [[08269](https://github.com/theQRL/qrllib/commit/41ff19841b6b34e6b1dd5a1436b254c2fbe08269)] finish implementing rust tests
-   [[4bd2c](https://github.com/theQRL/qrllib/commit/f033df3ed2ff0b6e2d907e691258f8dbf854bd2c)] fix guard bug in algsxmss\_fast
-   [[81010](https://github.com/theQRL/qrllib/commit/587c0a7a75a25b07ef248ae87fa41ceaccb81010)] Rust port of misc and hashing + tests
-   [[9dbf4](https://github.com/theQRL/qrllib/commit/8eaf1bea202ed741fadcc33ad810899810b9dbf4)] change xmss\_pool to use hashing and misc

**[xmss\_alt port to Rust](https://github.com/theQRL/qrllib/pull/177)**

-   [[670e9](https://github.com/theQRL/qrllib/commit/2c8de2a0d891ccaf1d1ae662fe518e55237670e9)] start xmss\_alt rust migration - fips202, hash\_address, hash\_functions
-   [[80a8b](https://github.com/theQRL/qrllib/commit/85b8cec80efba56fc398357cde44d2c10e580a8b)] wots rust implementation with dependencies
-   [[39786](https://github.com/theQRL/qrllib/commit/2ff00ca3bb6480af5f4be4e15f2467b880639786)] hash rust implementation
-   [[af1e7](https://github.com/theQRL/qrllib/commit/511451031534dbd809420628359f7ce57c2af1e7)] xmss\_common rust implementation
-   [[ce9f8](https://github.com/theQRL/qrllib/commit/a35adb96685e3cfd5f463b7cb6c41bfda55ce9f8)] algsxmss Rust implementation
-   [[781c5](https://github.com/theQRL/qrllib/commit/4ebc6dcac51c4b68a829c59d5588d6ee628781c5)] algsxmss\_fast Rust implementation
-   [[a2112](https://github.com/theQRL/qrllib/commit/ce22d41c631feb531f0ccee4fea8ec6403ca2112)] change unsigned long port from u32 to u64

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)

