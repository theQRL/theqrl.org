---
layout: blog-post
slug: last-month-at-qrl-june-2022
date: 2022-07-01
author: "Jack Matier"
title: "Last Month at QRL - June 2022"
summary: ""
featured_image: header.png
categories:
  - technical
features:
  - qrllib
toc: true
---

## Highlights

### Celebrating four years of QRL

{{< image "./images/highlight.anniversary.png" >}}

On **June 26th 2018**, and after two years of meticulous development followed by several third-party audits, the first enterprise-grade post-quantum secure blockchain using the signature scheme, XMSS, was released to the world, called the Quantum Resistant Ledger (QRL). As visionaries, we had the foresight to use XMSS which is currently a NIST recommendation, along with an extensible address format for crypto-agility.

Right out of the gate we launched with a 100% post-quantum secure address space with GUI wallets for Mac, Windows, and Linux and support for tokens, notarisation, and an amazing api and documentation. The future of the QRL protocol is an eco-friendly public blockchain driven by proof-of-stake that provides users with post-quantum safe transactions and Turing-complete smart contract capabilities. Project Zond aims to harness this vision, and is something we've been quietly working on since the release of the codebase and open call for research grants.

With this work at last coming to fruition, we are thrilled to be able to share some of the work at our upcoming QRL Hackathon 2022, and this wouldn't be possible without our community!Of course, we can't hand over the mic (our keyboard) for this 4th year anniversary speech (blog post) until we tip our hat in appreciation to the diverse and committed community members, contributors, and moderators who all make the community beneficial to be involved in day to day.

Read more: https://www.theqrl.org/blog/celebrating-four-years-of-qrl/

### QRL zero-day coinbase exploit post-mortem

{{< image "./images/highlight.pm.png" >}}

On **June 2nd, 2022**, a zero-day coinbase exploit resulted in an emergency network fork response and full resolution in 24 hours which resulted in less than $100 USD lost. 

Be sure to read the full report here: https://www.theqrl.org/blog/qrl-zero-day-coinbase-exploit-post-mortem/


### New library: QRLLIB browserify (qrllib-browserify)

{{< image "./images/highlight.browserify.png" >}}

Browserify is an open-source JavaScript bundler tool that allows developers to write and use Node.js-style modules that compile for use in the browser.

QRLLIB is QRL's core cryptographic library which exposes XMSS and several other functions.

QRLLIB + Browserify = The QRL core cryptographic library suitable for use in the browser in a more straightforward and compatible way than purely webassembly, which is still used.

https://www.github.com/theQRL/qrllib-browserify

## Geometry Labs

### Techniques for post-quantum finance (Part 4: reducing storage requirements)

We were happy to release the fourth (and final) part of the "Techniques for efficient post-quantum finance" series from The QRL Foundation and Geometry Labs which explores significantly decreasing node storage requirements without impacting blockchain verifiability while remaining post-quantum secure.

Read more: https://www.theqrl.org/blog/techniques-for-efficient-post-quantum-finance-part-4-reducing-storage-requirements/

We'll be hosting a QRL show with geometry labs so if you have questions, and you haven't already filled out our AMA form for the upcoming [QRL show AMA with Geometry Labs](https://docs.google.com/forms/d/e/1FAIpQLSfZUnQVspWW49ig8O4OdE7NHWZHJGXQEC3QNPLs1YVXZvU8NA/viewform), now would be a good time to do so.

## Community Led Initiatives

### QRL Merch contest

4d5a (in [Discord](/discord)) will be sponsoring a contest to find the coolest design the community can produce with our logo. The design will be put onto a batch of QRL shirts, which will be exclusively sold for QRL. For the winning design, there will be a 1000 quanta tip alongside me paying to create an NFT of the design when that happens (for the artist).

Additionally, if 100 unique people order a shirt, 4d5a will get some version of the design tattooed on himself in Amsterdam at the meetup.

Please submit all designs to [#casual](/discord) (Discord) and tag 4d5a.

## Quantum news

{{% qnews start="2022-06-01" end="2022-07-01" %}}

## Changelog

### theQRL/offline-wallet-generator

**[tidy up for release](https://github.com/theQRL/offline-wallet-generator/pull/40)**

- \[[9e4fe](https://github.com/theQRL/offline-wallet-generator/commit/984f7f1c03598b05470f994f726bbc0fe6c9e4fe)\] favicon update for release
- \[[79cf2](https://github.com/theQRL/offline-wallet-generator/commit/014d4807552679282c877a431cee030028b79cf2)\] feat: vue 3 refactor & new branding; multiple dependency updates

**[Remove npm-force-resolutions](https://github.com/theQRL/offline-wallet-generator/pull/39)**

- \[[9ec06](https://github.com/theQRL/offline-wallet-generator/commit/47dee1b560ac240be8755443bd3e542a23b9ec06)\] Remove npm-force-resolutions

**[Update documentation](https://github.com/theQRL/offline-wallet-generator/pull/38)**

- \[[278f1](https://github.com/theQRL/offline-wallet-generator/commit/8e69a28d8c6cee9ecc7a68c00008b317259278f1)\] Update docs
- \[[34b29](https://github.com/theQRL/offline-wallet-generator/commit/62f04578c1ece253d994be4cd9692c9128834b29)\] Merge branch 'master' of github.com:jplomas/offline-wallet-generator
- \[[a3544](https://github.com/theQRL/offline-wallet-generator/commit/5df50c2eed9c55f011c7ce6b2c7d1123024a3544)\] Update node version in CI

**[\[Snyk\] Fix for 1 vulnerabilities](https://github.com/theQRL/offline-wallet-generator/pull/37)**

- \[[cbebf](https://github.com/theQRL/offline-wallet-generator/commit/0cd228c0b680860123ef25c80345f343ad5cbebf)\] fix: package.json, package-lock.json & .snyk to reduce vulnerabilities The following vulnerabilities are fixed with a Snyk patch: - https://snyk.io/vuln/npm:semver:20150403

**[Update to vue3 / qrllib-browserify (qrllib=1.2.4) and newer branding](https://github.com/theQRL/offline-wallet-generator/pull/36)**

- \[[8643c](https://github.com/theQRL/offline-wallet-generator/commit/17ae80e57a0cb97aa9bd4bbb422a31953f88643c)\] perf:vue 3 rewrite (offline bundling TODO)
- \[[457bb](https://github.com/theQRL/offline-wallet-generator/commit/4906fdd99185d66da0cfe3b63daf965b299457bb)\] Fixes for online & offline deploys and use qrllib-browserify
- \[[e336c](https://github.com/theQRL/offline-wallet-generator/commit/8d0342a5b9aa41fd379f5ecd6f1fbc2de5fe336c)\] Gitignore

### theQRL/qrllib-browserify

**[Browserifiy-ed version of QRLLIB - initial release](https://github.com/theQRL/qrllib-browserify/pull/1)**

- \[[fb3e2](https://github.com/theQRL/qrllib-browserify/commit/20457d4eda5adaf3fbc2d262ff219dfcb25fb3e2)\] Initial release
- \[[c7ab7](https://github.com/theQRL/qrllib-browserify/commit/23638e9b30d7ac10c84bf4fc3edb0946fb1c7ab7)\] Include dist/ dir

### theQRL/theqrl.org

**[New blog: Happy four year QRL anniversary](https://github.com/theQRL/theqrl.org/pull/304)**

- \[[23cd6](https://github.com/theQRL/theqrl.org/commit/34c9c022c23c1a9309492efc175a0bc266c23cd6)\] New blog: Happy four year QRL anniversary
- \[[8a213](https://github.com/theQRL/theqrl.org/commit/fce360fbcd20be46c795deebf7e3cc2bebc8a213)\] Fix title
- \[[8b0b0](https://github.com/theQRL/theqrl.org/commit/2e6bd313fd81088f4b0c279abe1ec6186ba8b0b0)\] Add categories to past events

**[Add new blog: Techniques for efficient post-quantum finance (Part 4: reducing storage requirements)](https://github.com/theQRL/theqrl.org/pull/303)**

- \[[92fe4](https://github.com/theQRL/theqrl.org/commit/b9d970c05665f322d36601dedbcad7131c092fe4)\] Add class for article series
- \[[3e6d9](https://github.com/theQRL/theqrl.org/commit/f126fba37a1b21437f102bdb1d3a8a2f9ec3e6d9)\] Add slug for Geometry Labs
- \[[6601b](https://github.com/theQRL/theqrl.org/commit/f8d826eddfac58f7998dca38fbd62b6f2f16601b)\] Add new blog: Efficient pq-finance series - fountain architectures Full title: Techniques for efficient post-quantum finance (Part 4: reducing storage requirements)
- \[[12bcd](https://github.com/theQRL/theqrl.org/commit/459c16427b8754db65d427c9e5c759ed6bb12bcd)\] Add white background

**[Fix post-mortem header image](https://github.com/theQRL/theqrl.org/pull/301)**

- \[[67870](https://github.com/theQRL/theqrl.org/commit/8840f4fcfcc43934861d3d4e582dabd3b8867870)\] New post-mortem image

**[Add QRL zero-day post-mortem blog](https://github.com/theQRL/theqrl.org/pull/300)**

- \[[da5ba](https://github.com/theQRL/theqrl.org/commit/c67ce1e57aa883c19fbaebffbd329dcb1e1da5ba)\] Improve press-kit clarity
- \[[7ab06](https://github.com/theQRL/theqrl.org/commit/ec66a2def420d266919372ac12ce109b0597ab06)\] Remove bitvoiceex
- \[[0bc29](https://github.com/theQRL/theqrl.org/commit/7bdda9e186324d43307317f307a29bfb5300bc29)\] Add QRL post-mortem blog
- \[[b1039](https://github.com/theQRL/theqrl.org/commit/dd61341b6501a8f38356011464f81aef957b1039)\] Additional mount from blogs to static directory
- \[[dae24](https://github.com/theQRL/theqrl.org/commit/31639be32c17bd2fc809d1761e39bf98e71dae24)\] Add QRL core developers
- \[[62042](https://github.com/theQRL/theqrl.org/commit/8322078556e19ca23c0009593f84b6fcfd362042)\] Update contributions
- \[[d796a](https://github.com/theQRL/theqrl.org/commit/223cf5d31078669b9e6278819b1afa4f603d796a)\] Fix countdown date for team page
- \[[6a05e](https://github.com/theQRL/theqrl.org/commit/59e2d6b03a2f6e4b13e2aebb552659e00216a05e)\] Allow for rich summaries
- \[[31155](https://github.com/theQRL/theqrl.org/commit/e585fab1e6d1e37c89e8775931d0ba24cdf31155)\] Improved new blog init
- \[[552a9](https://github.com/theQRL/theqrl.org/commit/f80b86e1ac15712849ad4d8d134cb81ab3e552a9)\] Edits

**[Add exchange and update stats](https://github.com/theQRL/theqrl.org/pull/299)**

- \[[de4bf](https://github.com/theQRL/theqrl.org/commit/c50cb83c78d9880338ae2f433375b66823dde4bf)\] Add tidecoin.exchange
- \[[aef5a](https://github.com/theQRL/theqrl.org/commit/182a11c92b4fc40a02eb5a78786a396cde2aef5a)\] Merge remote-tracking branch 'upstream/main'
- \[[145fa](https://github.com/theQRL/theqrl.org/commit/2f0f7ca50a634cf03b9a2e723f7bee4ab3e145fa)\] Update stats

**[New blog: Last Month at QRL - May 2022](https://github.com/theQRL/theqrl.org/pull/298)**

- \[[0d23d](https://github.com/theQRL/theqrl.org/commit/b2d80ed448fd84336972db18de5f833fd540d23d)\] PQF III adjustment
- \[[bfcaf](https://github.com/theQRL/theqrl.org/commit/923bfcd40df35f3d9990aa90c6aeb47a1a7bfcaf)\] New blog: Last Month at QRL 2022
- \[[5d2d8](https://github.com/theQRL/theqrl.org/commit/f69b65ba71a101ca3225ccaf5ebb05ff81f5d2d8)\] Add countdown
- \[[7ad32](https://github.com/theQRL/theqrl.org/commit/dd097fa6bd999bab5ec344924b3041333667ad32)\] CSP

### theQRL/block-explorer

**[Dependency update](https://github.com/theQRL/block-explorer/pull/419)**

- \[[6902e](https://github.com/theQRL/block-explorer/commit/6efdc163cfb69891ae24c7c0f18ea27c9556902e)\] Remove extraneous console.log
- \[[8cf51](https://github.com/theQRL/block-explorer/commit/a1f045f8defc833a29d265546e697d4d8de8cf51)\] Merge remote-tracking branch 'origin/master'
- \[[2343b](https://github.com/theQRL/block-explorer/commit/e931e79e91850f0102fcb2b0de681e3f7462343b)\] Merge branch 'theQRL:master' into master
- \[[25202](https://github.com/theQRL/block-explorer/commit/2afe9073b2c9fe4e44514677a32a59c9ae325202)\] Dependency update
- \[[7ef60](https://github.com/theQRL/block-explorer/commit/81c413ff8dcda2b7b7d993e8f0c240568b37ef60)\] Merge remote-tracking branch 'origin/master'

**[Even Devnet version with Mainnet/Testnet version](https://github.com/theQRL/block-explorer/pull/418)**

- \[[9346d](https://github.com/theQRL/block-explorer/commit/9707df2a4e807f14b290014a7342251a4729346d)\] Merge pull request #376 from theQRL/master Rebase onto master & redeploy
- \[[ae0df](https://github.com/theQRL/block-explorer/commit/5b9b65669474b6a807751c92437e1659d97ae0df)\] Merge pull request #380 from theQRL/master Latest node version
- \[[ac527](https://github.com/theQRL/block-explorer/commit/207296736965e1f0658671da0b263db9721ac527)\] Update HeroMiners
- \[[4abd2](https://github.com/theQRL/block-explorer/commit/e52bb8fdd86a6d32765dde354a66f3e8e464abd2)\] Merge pull request #383 from herominers/patch-4 Update HeroMiners
- \[[85f4a](https://github.com/theQRL/block-explorer/commit/2bed97b01190852d87aa2edc5da72d56c9385f4a)\] Merge pull request #384 from theQRL/master Herominers update
- \[[d9c81](https://github.com/theQRL/block-explorer/commit/06bed11f712341209815f1bd892ebeca25fd9c81)\] Add volt-mine config from PR & up node version
- \[[8d9c4](https://github.com/theQRL/block-explorer/commit/b2470095b8064b091b48881ea11ac89e3198d9c4)\] Add pools from @jackalyst PR
- \[[b0e39](https://github.com/theQRL/block-explorer/commit/4789fc4803ceb592420222d718bbf9eb66bb0e39)\] Merge branch 'master' into master
- \[[58c5b](https://github.com/theQRL/block-explorer/commit/4cfcd4c9758158349c0dbc9b3163ba181e358c5b)\] Merge pull request #393 from jplomas/master Amalgamate PRs and fix CI checks
- \[[40401](https://github.com/theQRL/block-explorer/commit/1aa11c5f0778b1a74818c45fa9852db197d40401)\] Bump to use node v12 - dependencies updated - broken SHA512 implemetation on newer node versions fixed - semantic-&gt;fomantic
- \[[b5ff2](https://github.com/theQRL/block-explorer/commit/6872e751d233bbae94d1a263cd3e09d3d71b5ff2)\] Merge branch 'master' of github.com:jplomas/block-explorer
- \[[13d53](https://github.com/theQRL/block-explorer/commit/e17a97f2f6b6922f5cb8e4bd8668fa09f7613d53)\] Merge branch 'master' into master
- \[[c17b1](https://github.com/theQRL/block-explorer/commit/7bcafa1fa5b85a11caa0edec461ce06449bc17b1)\] Use crypto-js v4.0.0
- \[[a691f](https://github.com/theQRL/block-explorer/commit/5659989b6d35d42e9887ca70c84c68b4800a691f)\] Merge branch 'master' of github.com:jplomas/block-explorer
- \[[6ed09](https://github.com/theQRL/block-explorer/commit/743f7d2461268fcfbbce07490074e276c806ed09)\] Merge pull request #394 from jplomas/master Node v12
- \[[5b8b8](https://github.com/theQRL/block-explorer/commit/102c6311723cb6e72970a522278b0d956425b8b8)\] Add meta description to header
- \[[2fbf9](https://github.com/theQRL/block-explorer/commit/24f087005bde3d08bb1385786ee904629d62fbf9)\] fix: multi-output tokens received on address page (Issue #399)
- \[[53a6d](https://github.com/theQRL/block-explorer/commit/12160fd17d690d3583e8de158358ce47b0453a6d)\] Merge pull request #396 from jackalyst/master Add meta description to header
- \[[8e2fe](https://github.com/theQRL/block-explorer/commit/e8b3cec713e6e1d9ed3e4c5131e28985e868e2fe)\] Merge branch 'master' into master
- \[[f901a](https://github.com/theQRL/block-explorer/commit/4228718ebfd35866ef8f8dbc58e74db0085f901a)\] Merge pull request #401 from jplomas/master fix: multi-output tokens received on address page (Issue #399)
- \[[fa417](https://github.com/theQRL/block-explorer/commit/66145a6dacfce6a423f64c8fcbfae01153efa417)\] fix: multi-output tokens received on address page (Issue #399)
- \[[eceee](https://github.com/theQRL/block-explorer/commit/5728a6eedd5a8ff73b71ad6ab485fb3c59deceee)\] Add meta description to header
- \[[8674e](https://github.com/theQRL/block-explorer/commit/e635e774d28e86360c5443e63ab3d4c2ddd8674e)\] Merge branch 'master' of github.com:jplomas/block-explorer
- \[[bbfce](https://github.com/theQRL/block-explorer/commit/260eb4bacb63b6af796c548d9e5abfc82e1bbfce)\] Merge branch 'theQRL:master' into master
- \[[50b62](https://github.com/theQRL/block-explorer/commit/03d7fc3af1aeb87eec5429d310382f7159550b62)\] Fix unhandled error on MS addresses not in state which could lead to explorer crash
- \[[5f5fc](https://github.com/theQRL/block-explorer/commit/e010c4a95fc88937cd32396ad874979f7f95f5fc)\] Merge remote-tracking branch 'origin/master'
- \[[37b49](https://github.com/theQRL/block-explorer/commit/1ca083f9959a68cc66f6e698150e2be2d4637b49)\] Update to Meteor 2.5.1
- \[[8a74e](https://github.com/theQRL/block-explorer/commit/a455914ebe56d934574ebe07de2dbeb51ce8a74e)\] Merge pull request #404 from jplomas/master Fixes issue with MS address not in state
- \[[d96aa](https://github.com/theQRL/block-explorer/commit/c3731f5c4189e09081eac6d595a101342a4d96aa)\] Merge pull request #402 from theQRL/master Even testnet and mainnet code
- \[[4f580](https://github.com/theQRL/block-explorer/commit/cde467e83d807513ad43f53e356bfd1dc834f580)\] Merge remote-tracking branch 'origin/master'

**[Even Testnet version with Mainnet version](https://github.com/theQRL/block-explorer/pull/417)**

- \[[325e8](https://github.com/theQRL/block-explorer/commit/fd6256be8e02dc1c93254986d100d20b191325e8)\] Merge pull request #410 from theQRL/testnet Dependency spring clean
- \[[abcb7](https://github.com/theQRL/block-explorer/commit/1f822808587e06f1bc7b8dbe29d51692e2aabcb7)\] Fix value field from NaN, update meteor & dependency versions
- \[[ac21f](https://github.com/theQRL/block-explorer/commit/3a5821a311ff26a299974cba86ff819b571ac21f)\] Merge branch 'master' into master
- \[[8de4b](https://github.com/theQRL/block-explorer/commit/7f625e72bb1637dcee21d07d0107672c2a88de4b)\] Merge pull request #416 from jplomas/master Add NFT display support and fix NaN in value

**[Add NFT display support and fix NaN in value](https://github.com/theQRL/block-explorer/pull/416)**

- \[[e245d](https://github.com/theQRL/block-explorer/commit/f2ebc665856fd5246bb934ad0241ae156a8e245d)\] Support for nft-providers and NFTs in /tx route
- \[[517c4](https://github.com/theQRL/block-explorer/commit/881d30f8e6ce45facc6440481a454873658517c4)\] Version bump explorer-helpers
- \[[34082](https://github.com/theQRL/block-explorer/commit/c62551531d82cacf8f15aa0c8192ed03f7634082)\] Add NFTs in tx list on address page
- \[[ba578](https://github.com/theQRL/block-explorer/commit/741d5c3fe2541fc29ee9b2478e0c5accf21ba578)\] Support NFTs on block list
- \[[c13e5](https://github.com/theQRL/block-explorer/commit/2d39b09b8b7b68c0054d679657b0689d68ac13e5)\] Add verified provider badge in header of address page where appropriate
- \[[d12ba](https://github.com/theQRL/block-explorer/commit/e0dc2cd054d44afd5c7f01bb48acdd73864d12ba)\] Add NFTs tab, populate and separate from tokens
- \[[1f718](https://github.com/theQRL/block-explorer/commit/1e5c76be33c1453f84577897dab8a7f0f981f718)\] Dark mode UI fix for NFT header
- \[[a4207](https://github.com/theQRL/block-explorer/commit/de4e195861ec882b1d3f26b79d26387b854a4207)\] Remove extraneous console log
- \[[4ff38](https://github.com/theQRL/block-explorer/commit/d6c38f05833444ee1df42ff0da164199b2e4ff38)\] Add WIP transfer NFT display on Tx page
- \[[4dd99](https://github.com/theQRL/block-explorer/commit/ef8c7bafc20db05b8ceed37bcc9589c3db94dd99)\] Use updated explorer-helpers
- \[[8bf7b](https://github.com/theQRL/block-explorer/commit/41967d820fe7c25bf9609e9a9fe74375f8b8bf7b)\] Transfer NFTs on Tx page
- \[[49b56](https://github.com/theQRL/block-explorer/commit/16187ea2ca985fa51f597f78a9e42a5940349b56)\] Send and receive NFTs on address page
- \[[6b714](https://github.com/theQRL/block-explorer/commit/f3b164da0afd5cba26223a8b809e654c4bf6b714)\] Add Transfer NFTs to block page
- \[[d1531](https://github.com/theQRL/block-explorer/commit/980c202e2b4c8ea717830181a69565ab71fd1531)\] Last TX page NFTs
- \[[abcb7](https://github.com/theQRL/block-explorer/commit/1f822808587e06f1bc7b8dbe29d51692e2aabcb7)\] Fix value field from NaN, update meteor & dependency versions
- \[[ac21f](https://github.com/theQRL/block-explorer/commit/3a5821a311ff26a299974cba86ff819b571ac21f)\] Merge branch 'master' into master

### theQRL/qrl-proto-sha256

**[Update deps and fix testing setup](https://github.com/theQRL/qrl-proto-sha256/pull/16)**

- \[[056ea](https://github.com/theQRL/qrl-proto-sha256/commit/ec3dea6502fb5b48ee959a44ace97435c3c056ea)\] Update deps
- \[[82ae7](https://github.com/theQRL/qrl-proto-sha256/commit/c41e9a7b2b0ab89f4f4bc4b04fef16b745e82ae7)\] version bump
- \[[9e629](https://github.com/theQRL/qrl-proto-sha256/commit/df8a4bb4f0a6f4e82d8c03e997a445752469e629)\] Fix test
- \[[6ffa2](https://github.com/theQRL/qrl-proto-sha256/commit/f8eb81a2d14615c4f97a7391dd04efeffa36ffa2)\] Update node version in CI

**[Bump minimist from 1.2.5 to 1.2.6](https://github.com/theQRL/qrl-proto-sha256/pull/15)**

- \[[a5e22](https://github.com/theQRL/qrl-proto-sha256/commit/bf504ea871e7955374d692e932533d99208a5e22)\] Bump minimist from 1.2.5 to 1.2.6 Bumps \[minimist\](https://github.com/substack/minimist) from 1.2.5 to 1.2.6. - \[Release notes\](https://github.com/substack/minimist/releases) - \[Commits\](https://github.com/substack/minimist/compare/1.2.5...1.2.6) --- updated-dependencies: - dependency-name: minimist dependency-type: indirect ... Signed-off-by: dependabot\[bot\]

**[Bump ajv from 6.12.0 to 6.12.6](https://github.com/theQRL/qrl-proto-sha256/pull/14)**

- \[[5de3c](https://github.com/theQRL/qrl-proto-sha256/commit/c5b88a0eabf12e335b8c0783abc2359df795de3c)\] Bump ajv from 6.12.0 to 6.12.6 Bumps \[ajv\](https://github.com/ajv-validator/ajv) from 6.12.0 to 6.12.6. - \[Release notes\](https://github.com/ajv-validator/ajv/releases) - \[Commits\](https://github.com/ajv-validator/ajv/compare/v6.12.0...v6.12.6) --- updated-dependencies: - dependency-name: ajv dependency-type: indirect ... Signed-off-by: dependabot\[bot\]

### theQRL/qrl-docker

**[Ubuntu 20.10 base](https://github.com/theQRL/qrl-docker/pull/8)**

- \[[13e8d](https://github.com/theQRL/qrl-docker/commit/673d88a73aa5e48c83ca7655179d57c1c0d13e8d)\] Update config.yml
- \[[d9a14](https://github.com/theQRL/qrl-docker/commit/91ae732ff6cb6f6f6c33d6da0693568c643d9a14)\] Update README.md
- \[[5b183](https://github.com/theQRL/qrl-docker/commit/e2af3b9f116507d84fffc57f8c63d22ded05b183)\] Example usage
- \[[68968](https://github.com/theQRL/qrl-docker/commit/78500983cf0747025a1609d76aaf614f5a368968)\] Update README.md
- \[[44595](https://github.com/theQRL/qrl-docker/commit/0f0899959037e682441beebc5507fe8f45c44595)\] Ubuntu 20.10 base
- \[[9707d](https://github.com/theQRL/qrl-docker/commit/c6ca1f5866e15334816fc779811c60eef6a9707d)\] Remove unused package
- \[[38648](https://github.com/theQRL/qrl-docker/commit/8fa4d8adcf27b6b1ba5e64318b478b358e738648)\] Cleanup FIX for unused packages
- \[[05a82](https://github.com/theQRL/qrl-docker/commit/9e207a764571cc1884a1a069f811f5be45105a82)\] Merge branch 'focal' into groovy

### theQRL/node-helpers

**[Small readme fix](https://github.com/theQRL/node-helpers/pull/29)**

- \[[9b7d6](https://github.com/theQRL/node-helpers/commit/004fcb776b95105b5bf5bca0a45d3c416a69b7d6)\] Update README
- \[[fe532](https://github.com/theQRL/node-helpers/commit/856df8f203b38943585b8cde11a47dede56fe532)\] &gt;=
- \[[6c847](https://github.com/theQRL/node-helpers/commit/9a96aa8528247caefe9450d422ba6ef95c06c847)\] Remove mkdir coverage in CI

**[Tests refactor: Use blocking code in steps & check state](https://github.com/theQRL/node-helpers/pull/28)**

- \[[5186f](https://github.com/theQRL/node-helpers/commit/f86f9ce72e1cad0c1e3d8e01c87db5bf17f5186f)\] Use blocking code in steps & check state
- \[[b04fd](https://github.com/theQRL/node-helpers/commit/bc9c59c2d007ab6460e1e54dcd069dab77bb04fd)\] Merge branch 'master' into master

**[Fix CI setup/tests](https://github.com/theQRL/node-helpers/pull/27)**

- \[[096be](https://github.com/theQRL/node-helpers/commit/e6d6c3def19f8f324d0811878c29d0829e7096be)\] Use mocha-steps for smoke tests
- \[[bdbca](https://github.com/theQRL/node-helpers/commit/c139a6df9527c3af810dadc187489a1ed74bdbca)\] CI fix
- \[[a2171](https://github.com/theQRL/node-helpers/commit/3ee64b2b98b0232663336d88f0e81ecf92da2171)\] Longer test timeouts when generating coverage

**[Fix broken test, update dependencies and remove legacy dev setup](https://github.com/theQRL/node-helpers/pull/26)**

- \[[425ff](https://github.com/theQRL/node-helpers/commit/a2c7acdccf9736bb2e6254f95e9d6b73b26425ff)\] Fix broken test, update dependencies and remove legacy dev setup
- \[[e2d93](https://github.com/theQRL/node-helpers/commit/46dc314101e882b044c6cf027858c3a9d3de2d93)\] Extend timeout for tests in CI
- \[[41bf8](https://github.com/theQRL/node-helpers/commit/b4ce75f293e49946e4b05ef13c528ab662f41bf8)\] Fix coverage test
- \[[80608](https://github.com/theQRL/node-helpers/commit/b045f54133f2f3e6041c330559bca5c99d080608)\] Use mn3 node from CI
- \[[4b22e](https://github.com/theQRL/node-helpers/commit/7063d01d7a6ad5e4d58e6a08e4d0613b2d24b22e)\] Fix travis cfg

### theQRL/wallet-helpers

**[Update dependencies & remove legacy dev setup](https://github.com/theQRL/wallet-helpers/pull/21)**

- \[[24cb0](https://github.com/theQRL/wallet-helpers/commit/ccad86ab6640d73acd8205e3021435fd84b24cb0)\] Update dependencies & remove legacy dev setup

### theQRL/explorer-helpers

**[Fix for new Bittrex API](https://github.com/theQRL/explorer-helpers/pull/48)**

- \[[19510](https://github.com/theQRL/explorer-helpers/commit/4b34ee08af8784508e6a40fc5d6ef5cab9619510)\] Fix for new Bittrex API
- \[[58ab4](https://github.com/theQRL/explorer-helpers/commit/9669bf8687dc25bc4d97266afad6796480558ab4)\] Update node version in CI

### theQRL/QRL

**[Merged Dev](https://github.com/theQRL/QRL/pull/1749)**

- \[[1398d](https://github.com/theQRL/QRL/commit/76e1a546c7ef04ef32a1b26beb28b2c21801398d)\] Bug fix + Added Unit Tests
- \[[7c016](https://github.com/theQRL/QRL/commit/f05882789c5011c5ca13efcf647355e002b7c016)\] Fix for integration test
- \[[ac349](https://github.com/theQRL/QRL/commit/75fef882103efc4815b78be8e5879be96e0ac349)\] Disabled fuzzing test
- \[[09eb6](https://github.com/theQRL/QRL/commit/0ba1a90aba8c024dc5d1dd1e1dbf1385c6709eb6)\] Disabled integration_fuzzing references
- \[[a2fe4](https://github.com/theQRL/QRL/commit/8dfc009f68803e3b2a95f376f926356bc38a2fe4)\] Merge pull request #1748 from cyyber/dev Bug fix + Added Unit Tests

**[Bug fix + Added Unit Tests](https://github.com/theQRL/QRL/pull/1748)**

- \[[48773](https://github.com/theQRL/QRL/commit/e751c790c1d8e01b51b26735009a2607ac548773)\] Merge pull request #1738 from theQRL/dev Merged Dev
- \[[a5e2b](https://github.com/theQRL/QRL/commit/a84244ad78d20c835fc9a1925abbcdefc5ba5e2b)\] Update README.md
- \[[93f1d](https://github.com/theQRL/QRL/commit/353b32aeb3897c7ffb50c9a5759091928f493f1d)\] Merge pull request #1740 from theQRL/jplomas-patch-2 Update README.md
- \[[1398d](https://github.com/theQRL/QRL/commit/76e1a546c7ef04ef32a1b26beb28b2c21801398d)\] Bug fix + Added Unit Tests
- \[[7c016](https://github.com/theQRL/QRL/commit/f05882789c5011c5ca13efcf647355e002b7c016)\] Fix for integration test
- \[[ac349](https://github.com/theQRL/QRL/commit/75fef882103efc4815b78be8e5879be96e0ac349)\] Disabled fuzzing test
- \[[09eb6](https://github.com/theQRL/QRL/commit/0ba1a90aba8c024dc5d1dd1e1dbf1385c6709eb6)\] Disabled integration_fuzzing references