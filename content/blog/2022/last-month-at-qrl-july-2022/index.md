---
layout: blog-post
slug: last-month-at-qrl-july-2022
date: 2022-08-02
author: "Jack Matier"
title: "Last Month at QRL - July 2022"
summary: "Another developer joins QRL to work on project Zond with more to come! The Hackathon registration is open for everyone of all skill levels to build on the QRL. Make sure you don't miss out on our talk about QRL, Geometry Labs, and NIST Working in parallel to create post-quantum resistant cryptographic algorithms."
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### Hackathon Registration is now Open

{{< image "./images/highlight.hackathon.png" >}}

We're pleased to announce that our [QRL Hackathon 2022 registration](/events/qrl-hackathon-2022/register/) form is now open on our new events page.

The [QRL Hackathon 2022](/events/qrl-hackathon-2022/) will be a great place for developers, artists, writers, or anyone else alike to come together for an intimate multi-day event with direct team interaction and to be part of the future of post-quantum resistant blockchain ecosystems. Alongside the Hackathon itself, we’ll be launching PoS/Smart contracts in addition and announcing a grant program.

As part of the Hackathon event, we’ll also be hosting an exclusive fireside chat, holding a number of lightning talks throughout each day, providing QRL swag, rewards, and you’ll get a chance to have your very own proof-of-attendance coin (limited run).

There will be two phases, the first being an online Idea & Team Building phase which will take place soon, with second phase being the Hackathon Event in Amsterdam. Stay tuned for more details to come.

If you're interested, be sure to [register for the QRL Hackathon 2022 today](/events/qrl-hackathon-2022/register/) for updates and maybe a little extra surprise if a QRL address is provided.

### Bringing more developers on board

{{< image "./images/highlight.devs.png" >}}

Last month we welcomed Prajjawal Khandelwal to the development side working as a Software Development Engineer on QRL's upcoming Proof-of-Stake/EVM compatibility upgrade - otherwise known as project Zond. If you haven't already, be sure to [read the blog](/blog/please-give-a-warm-welcome-to-developer-prajjawal-khandelwal/).

He marks the first of many developers who will be onboarded to help speed up these development efforts. Look forward to many more commits and pull-requests coming to the QRL blockchain foundation.

## Community Initiatives

### Quickly setup nodes with QRL Cannon

QRL nodes can now be launched from the cloud without the need for technical knowledge. Simply follow the instructions at [qrlcannon.net](https://qrlcannon.net), and with a nominal fee (in QRL), launch nodes to help the network and become a part of the QRL network today!

This initiative was undertaken by **K.G. Yıldırım** (also known as runforest from our [QRL Discord](/discord)). Be sure to check the QRL Cannon website, or read the [guest post](/blog/quickly-setup-nodes-with-qrl-cannon/) on it. 

## Advocacy

### QRL, Geometry Labs, & NIST Working in Parallel to Create Quantum-Resistant Cryptographic Algorithms

{{< youtube "nVezcomOjy4" >}}

Mitchell Krawiec-Thayer and Brandon Goodell from Geometry Labs sits down with QRL's very own Ryan Malinowski and Michael Strike to discuss NIST and post-quantum cryptography. This includes lattice-algebra, the latest techniques for efficient post-quantum finance blog series, Sef-fountain architectures, and several other topics.

Following last weeks YouTube episode with the team from Geometry Labs, we’ll be hosting an upcoming AMA with Geometry Labs. Drop any questions you have big or small on the series that you’d like us to answer here

## Quantum News Updates

{{% qnews start="2022-07-01" end="2022-08-01" %}}

## Changelog

### theQRL/go-libp2p-qrl

**[Updated go-qrllib version](https://github.com/theQRL/go-libp2p-qrl/pull/6)**

-   \[[d16e8](https://github.com/theQRL/go-libp2p-qrl/commit/5591ff5fe0d37fb44b1961a93cddabc572bd16e8)\] Updated go-qrllib version

**[Migration from qrllib to go-qrllib](https://github.com/theQRL/go-libp2p-qrl/pull/5)**

-   \[[d650c](https://github.com/theQRL/go-libp2p-qrl/commit/08847320e32c908a8b27cd57461fa0de00bd650c)\] Migration from qrllib to go-qrllib

### theQRL/go-qrllib

**[Added more unit tests for Dilithium](https://github.com/theQRL/go-qrllib/pull/17)**

-   \[[ceda7](https://github.com/theQRL/go-qrllib/commit/6ccc0f48f2830552a9e8fda079d8ec16d9fceda7)\] Added more unit tests for Dilithium

**[Added functions for Dilithium Wallet + Unit Tests + Refactoring](https://github.com/theQRL/go-qrllib/pull/16)**

-   \[[807ca](https://github.com/theQRL/go-qrllib/commit/e9807a36d0f8c9a9f3945accf21d4379c98807ca)\] Added functions for Dilithium Wallet + Unit Tests + Refactoring

**[Updated signature type and address format for both xmss and dilithium](https://github.com/theQRL/go-qrllib/pull/15)**

-   \[[83b13](https://github.com/theQRL/go-qrllib/commit/0b6a38789d7b09c94796c1b3ff981364e0483b13)\] Updated signature type and address format for both xmss and dilithium

**[Fix: SignatureType calculation in descriptor](https://github.com/theQRL/go-qrllib/pull/14)**

-   \[[f9670](https://github.com/theQRL/go-qrllib/commit/77f90d05b0b03b8af0a5cd0b9e73577cfd9f9670)\] Fix: SignatureType calculation in descriptor

**[Added Dilithium address support with Unit Tests](https://github.com/theQRL/go-qrllib/pull/13)**

-   \[[4bb87](https://github.com/theQRL/go-qrllib/commit/7397b00185e35e68ff14ce4164e0254a5374bb87)\] Added Dilithium address support with Unit Tests

**[QVM compatible XMSS Address format](https://github.com/theQRL/go-qrllib/pull/12)**

-   \[[7c71e](https://github.com/theQRL/go-qrllib/commit/85984cd5f8be16f59463e6a8b57ab903d597c71e)\] QVM compatible XMSS Address format

**[Fix: Replacing math/rand to crypto/rand](https://github.com/theQRL/go-qrllib/pull/11)**

-   \[[7279d](https://github.com/theQRL/go-qrllib/commit/32b5fe01824f72d47160187b83506f0cde57279d)\] Fix: Replacing math/rand to crypto/rand

**[Replaced hard coded value to constant value](https://github.com/theQRL/go-qrllib/pull/10)**

-   \[[a0a47](https://github.com/theQRL/go-qrllib/commit/76ccf3e1cbb7a95920bdfbefc1b030490e7a0a47)\] Replaced hard coded value to constant value

**[Simplified XMSS Verify, added IsValidXMSSAddress function + Unit Tests](https://github.com/theQRL/go-qrllib/pull/9)**

-   \[[a0de4](https://github.com/theQRL/go-qrllib/commit/e690a28f50d1b9274abf2e8a36c8fb6a376a0de4)\] Simplified XMSS Verify, added IsValidXMSSAddress function + Unit Tests

**[Code cleanup](https://github.com/theQRL/go-qrllib/pull/8)**

-   \[[4c3de](https://github.com/theQRL/go-qrllib/commit/7c5c2dcf37d4aa2f746032015ad0fcfcb234c3de)\] Code cleanup

**[Added GetExtendedSeed, GetHexSeed, GetMnemonic functions + Unit Tests](https://github.com/theQRL/go-qrllib/pull/7)**

-   \[[26c16](https://github.com/theQRL/go-qrllib/commit/aa9d29d052c62e0df1ba6cd3005b93e137b26c16)\] Added GetExtendedSeed, GetHexSeed, GetMnemonic functions + Unit Tests

**[Added Unit Tests for MnemonicToBin and BinToMnemonic](https://github.com/theQRL/go-qrllib/pull/6)**

-   \[[75fdf](https://github.com/theQRL/go-qrllib/commit/e9117bffe4ede6c3f176faedb960c04dd4575fdf)\] Added Unit Tests for MnemonicToBin and BinToMnemonic

**[Added BinToMnemonic and MnemonicToBin functions](https://github.com/theQRL/go-qrllib/pull/5)**

-   \[[da117](https://github.com/theQRL/go-qrllib/commit/86459ea41fd1aa8ad7aa525ff4bfe3bbdffda117)\] Added BinToMnemonic and MnemonicToBin functions

**[Added NewXMSSFromHeight function](https://github.com/theQRL/go-qrllib/pull/4)**

-   \[[5811d](https://github.com/theQRL/go-qrllib/commit/c95fbd98bd6f5b3e964b5c4160cde47726d5811d)\] Added NewXMSSFromHeight function

**[Go implementation of Dilithium with Unit Tests](https://github.com/theQRL/go-qrllib/pull/3)**

-   \[[75c30](https://github.com/theQRL/go-qrllib/commit/ee922946121fe15357265eca01b7bff993375c30)\] Go implementation of Dilithium with Unit Tests

**[Changed function names](https://github.com/theQRL/go-qrllib/pull/2)**

-   \[[2039e](https://github.com/theQRL/go-qrllib/commit/c19a5d7f487b941955a883f5a659640f3852039e)\] Changed function names

**[Go Implementation of XMSS Fast with Unit Test](https://github.com/theQRL/go-qrllib/pull/1)**

-   \[[8af76](https://github.com/theQRL/go-qrllib/commit/5dfa8aa2f3f77e88f522a4bd8e29e194eff8af76)\] Added go.mod
-   \[[c3a90](https://github.com/theQRL/go-qrllib/commit/acabd25b030b9d8281da819983fdf1c0704c3a90)\] Go Implementation of XMSS Fast with Unit Test

### theQRL/qrllib

**[Fixed: Dilithium extract\_message & extract\_signature](https://github.com/theQRL/qrllib/pull/180)**

-   \[[5b7e5](https://github.com/theQRL/qrllib/commit/3b344657565aed3a4328db31e3bdfe0ec555b7e5)\] Fixed: Dilithium extract\_message & extract\_signature
-   \[[0a902](https://github.com/theQRL/qrllib/commit/d0d7848bcfa95382e8a3cab87a50ba6482b0a902)\] Fix Go & Python Unit Tests
-   \[[df580](https://github.com/theQRL/qrllib/commit/0c16d4377248999d134a0c781374f939be9df580)\] Fix: Python Unit Tests
-   \[[7e062](https://github.com/theQRL/qrllib/commit/649043186996af0d2dffb327af04bc023b27e062)\] Pin to a specific (working) node version in CI build\_emscripten job
-   \[[3bba5](https://github.com/theQRL/qrllib/commit/4661e8ab7f36fc8424f8863a361b3aed4f13bba5)\] Merge pull request #1 from jplomas/master Pin to a specific (working) node version in CI build\_emscripten job

### theQRL/qryptonight

**[New release: v0.99.11](https://github.com/theQRL/qryptonight/releases/tag/v0.99.11)**

Automatically use software AES when hardware AES is not supported

- Fixed Googletest failing to fetch on compile by updating to new branc… 
- Attempt to use method pointers to determine whether to use hardware AES
- Determine which function to use from within Qryptonight::hash instead
- Initialise function pointer only once
- Set up function pointer, while still allowing init() to remain static
- Use function pointer directly instead of index
- Rename variables
- Added comment on protected variable prefix

### theQRL/theqrl.org

**[Add Catalyx exchange](https://github.com/theQRL/theqrl.org/pull/313)**

-   \[[52554](https://github.com/theQRL/theqrl.org/commit/8bf2dad3d60e3dbaaf0f7aa251d7970160852554)\] Add Catalyx exchange

**[Remove Bittrex status message](https://github.com/theQRL/theqrl.org/pull/312)**

-   \[[297be](https://github.com/theQRL/theqrl.org/commit/49c1fa96308d17bb56e37f020c3822052fa297be)\] Remove Bittrex status message

**[Add thank you landing page for registration form.](https://github.com/theQRL/theqrl.org/pull/311)**

-   \[[e841a](https://github.com/theQRL/theqrl.org/commit/f560446dfc190de2590c1007e5685ad2fa2e841a)\] Add thank you landing page for registration form.
-   \[[aa44c](https://github.com/theQRL/theqrl.org/commit/db7afc850d4c72b2b8a8486e76fdf41e32caa44c)\] Fix discord link

**[New developer hire blog: Welcome Prajjawal!](https://github.com/theQRL/theqrl.org/pull/310)**

-   \[[0c362](https://github.com/theQRL/theqrl.org/commit/fb46eb269bf0f9a9c501568061c938d81390c362)\] New Blog: What exactly is the quantum threat to Bitcoin?
-   \[[13542](https://github.com/theQRL/theqrl.org/commit/9d9130deba3138cbe63875a3dbb1950fb2d13542)\] Summary adjustment
-   \[[9deed](https://github.com/theQRL/theqrl.org/commit/b0c6fdb0b9403da8be9b949908a3838f2679deed)\] Merge remote-tracking branch 'upstream/main'
-   \[[93e7f](https://github.com/theQRL/theqrl.org/commit/bd9f95cce46c3f6546beb1f6f19124881d093e7f)\] New blog: Welcome Prajjawal
-   \[[73f51](https://github.com/theQRL/theqrl.org/commit/5c5b436de5455b969416be730a7c20d4cd873f51)\] Flag "what exactly is the quantum threat to bitcoin" as draft
-   \[[d0adf](https://github.com/theQRL/theqrl.org/commit/4d18b83e1e411d171c30733c1bf096d755ed0adf)\] Summary fix.
-   \[[7e0c8](https://github.com/theQRL/theqrl.org/commit/46b6dc9c925ebda15d487f6931667fd0d0b7e0c8)\] Other minor fixes

**[New feat: Add under maintenance status indicator to market](https://github.com/theQRL/theqrl.org/pull/309)**

-   \[[faec6](https://github.com/theQRL/theqrl.org/commit/ca6db7fadce4943586b9c45a1b150069b24faec6)\] New feat: Add under maintenance status indicator to market

**[New QRL guest blog: Quickly setup nodes with QRL Cannon](https://github.com/theQRL/theqrl.org/pull/308)**

-   \[[21b3e](https://github.com/theQRL/theqrl.org/commit/4d9f9a08a6beaa9884ad0c78c384d93643821b3e)\] New QRL guest blog: Quickly setup nodes with QRL Cannon
-   \[[78d64](https://github.com/theQRL/theqrl.org/commit/7a3d7889d709d3db6adefe291bbeb5353da78d64)\] Hackathon edit

**[New landing page: QRL Hackathon 2022](https://github.com/theQRL/theqrl.org/pull/307)**

-   \[[496be](https://github.com/theQRL/theqrl.org/commit/d77391444f1442ee283e9ee8af6b5932ab4496be)\] Add event page structure
-   \[[cc3c4](https://github.com/theQRL/theqrl.org/commit/d54d5222300b6588ba81b3ea145475ac96bcc3c4)\] Resolve preview summary encoding issues
-   \[[4fd7d](https://github.com/theQRL/theqrl.org/commit/99ae152de4de5bdf1f855a53eec751d11d04fd7d)\] Correction for last month blog Thanks to runforest for highlighting
-   \[[268f3](https://github.com/theQRL/theqrl.org/commit/b44047ef47d8d2cec17842f00815ff86890268f3)\] Re-add press category
-   \[[f69c1](https://github.com/theQRL/theqrl.org/commit/38c14234bc06daef667f12933148ec22fadf69c1)\] Add QRL hackathon 2022 content
-   \[[c0881](https://github.com/theQRL/theqrl.org/commit/4f8cb278cf98593462d523881a8a022354bc0881)\] Change link to hackathon landing page
-   \[[74505](https://github.com/theQRL/theqrl.org/commit/91e62b9354d24662f5ece281a521a93e4d874505)\] Conflict fix
-   \[[ac55b](https://github.com/theQRL/theqrl.org/commit/b69651f2b879d9a6edf786191ae64482339ac55b)\] Add typeform to script-src inline policy.
-   \[[884fb](https://github.com/theQRL/theqrl.org/commit/311fbd1ea2ceb7884c7b93f11f95f1dc4e4884fb)\] Improved CORS headers
-   \[[4f434](https://github.com/theQRL/theqrl.org/commit/5ee22114e1d0143f65622bfe559b590fae14f434)\] CORS
-   \[[9ee29](https://github.com/theQRL/theqrl.org/commit/e7948c348e8016568129f7e7bc084ef69229ee29)\] CORS...
-   \[[f771a](https://github.com/theQRL/theqrl.org/commit/52b5b8db8ffc2e53da6fb7df21d7e6db144f771a)\] CSP ...
-   \[[ab2c1](https://github.com/theQRL/theqrl.org/commit/37b872870562cc44be2a2630acf4c7b5e9aab2c1)\] CSP ...
-   \[[c274d](https://github.com/theQRL/theqrl.org/commit/1e77ea296ddd30608e6f608026d9a108a89c274d)\] CSP v9 final v1

**[Add new exchange: dex-trade](https://github.com/theQRL/theqrl.org/pull/306)**

-   \[[1cfc4](https://github.com/theQRL/theqrl.org/commit/34bd642a69ac380d534793a8e2cd491be421cfc4)\] Correction for June's last month at QRL blog
-   \[[f8592](https://github.com/theQRL/theqrl.org/commit/45dda4e99709e103cd3e3bd09ed7b7b9d89f8592)\] Add new exchange: dex-trade

**[Add last month at qrl blog for June](https://github.com/theQRL/theqrl.org/pull/305)**

-   \[[83c42](https://github.com/theQRL/theqrl.org/commit/aba8353de1edf998659a07d3f4919f622fc83c42)\] Add quantum news shortcode
-   \[[325f0](https://github.com/theQRL/theqrl.org/commit/7963544ebba216c02235475ad6078aa1dae325f0)\] Add quantum news init data
-   \[[d402a](https://github.com/theQRL/theqrl.org/commit/c2ca8d3bf6b62c9d990e3a996d3e78ea57fd402a)\] Add last month at qrl blog for June

### theQRL/zond

**[Updated go-qrllib version](https://github.com/theQRL/zond/pull/215)**

-   \[[57e47](https://github.com/theQRL/zond/commit/7ce247cb5aafd4e14d89a3261784dfe061457e47)\] Updated go-qrllib version

**[Updated devnet genesis file and xmss address in config](https://github.com/theQRL/zond/pull/214)**

-   \[[503c8](https://github.com/theQRL/zond/commit/d9de2461aa115eca3acfb4151536c8e072d503c8)\] Updated devnet genesis file and xmss address in config

**[Set NetworkIDFlag to optional, error check in StateContext](https://github.com/theQRL/zond/pull/213)**

-   \[[d988e](https://github.com/theQRL/zond/commit/2316ff268e50113b49805201219dafa9ad9d988e)\] Set NetworkIDFlag to optional, error check in StateContext

**[Updated dependencies versions](https://github.com/theQRL/zond/pull/212)**

-   \[[5894f](https://github.com/theQRL/zond/commit/78ae3f7f19a506ae9eda3485bfeb192d0495894f)\] Updated dependencies versions

**[Fix: Datatype issues for zond-cli](https://github.com/theQRL/zond/pull/211)**

-   \[[69a39](https://github.com/theQRL/zond/commit/191b849303c4654e49a9a95d30b3765096e69a39)\] Fix: Datatype issues for zond-cli

**[Bug Fix + Updated go.sum file](https://github.com/theQRL/zond/pull/210)**

-   \[[51b4a](https://github.com/theQRL/zond/commit/20bfb5bc79daef3b9bbf73d9afc124fe5ec51b4a)\] Bug Fix + Updated go.sum file
-   \[[bdb90](https://github.com/theQRL/zond/commit/e9ba3bf876a0876c158f8781cae9cf429fbbdb90)\] Merge remote-tracking branch 'refs/remotes/origin/master'

**[Migration from qrllib to go-qrllib](https://github.com/theQRL/zond/pull/209)**

-   \[[75d17](https://github.com/theQRL/zond/commit/e9b23ddb23fdc37d550bae30bff65d1414975d17)\] Migration from qrllib to go-qrllib