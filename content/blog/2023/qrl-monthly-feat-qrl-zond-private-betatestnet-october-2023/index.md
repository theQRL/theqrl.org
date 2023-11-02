---
layout: blog-post
slug: qrl-monthly-feat-qrl-zond-private-betatestnet-october-2023
date: 2023-11-02
author: "The QRL Core Contributors"
title: "QRL Monthly: feat QRL Zond private beta-testnet - October 2023"
summary: "QRL Zond moves to a private beta-testnet with quantum resistance and EVM-compliant smart contracts with a public beta-testnet on the horizon. Community project, Q-day.org investigates the fascinating intersection of quantum computing and cryptocurrency"
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### QRL Zond enters private beta-testnet

{{< image "./images/h.zond.png" >}}

We're pleased to announce that the QRL Zond has moved from devnet to a private beta-testnet, where it's been made more widely available outside of the core blockchain developers for further testing, documentation, and refinement. Once completed, the QRL Zond beta-testnet will be made public for everyone to test.

QRL Zond is a groundbreaking release that brings proof-of-stake and EVM-compatible smart contracts to the QRL ecosystem. This places QRL in the same league as Ethereum, but with an extra layer of security – quantum resistance! With smart contracts powered by the user-friendly web3.js API, your business operations will become more efficient and cost-effective. The best part? EVM developers will find the transition seamless, thanks to the minimal learning curve.

QRL Zond is not just an update; it's a quantum shift in the blockchain landscape. Join us on this exhilarating journey towards a safer and smarter blockchain future!

### Q-day.org: Covers the basics of quantum computing and it's implications to cybersecurity

{{< image "./images/h.qday.png" >}}

Created by **K.G. Yıldırım** [q-day.org](https://q-day.org/) is a guide that explores the cross section of quantum computing and cryptocurrency for organisations and individuals.

This exploration of the cross-section between quantum computing and cryptocurrency is important so there's a resource that addresses issues related to security, innovation, and the future of digital finance. Anyone may peruse the information to better understand and adapt to the evolving landscape and make informed decisions. Though similar to [faqq.info](https://faqq.info), it hopes to do so in a way that doesn't evoke as much perceived bias that people may get from viewing the site and noting QRL brand affiliations.

Do you have ideas for improvement or do you wish to become involved? Make sure to talk to K.G. Yıldırım, he is available on the general chat at the QRL discord server!

> **General Disclaimer:** This section covers topics and/or tools provided by third parties in the hopes of being useful and/or of general interest and are not controlled by the QRL Foundation.

## Quantum News

{{% qnews start="2023-10-01" end="2023-11-01" %}}

## Development Changelog

### theQRL/grpc-gateway

**[Updated template for grpc and proto files](https://github.com/theQRL/grpc-gateway/pull/1)**
			
- [[92c87](https://github.com/theQRL/grpc-gateway/commit/43c775ff9bfa121dcacd1ca5b87f518b1ce92c87)] Updated template for grpc and proto files		

### theQRL/go-zond

**[Removed non required cgo flags](https://github.com/theQRL/go-zond/pull/10)**
			
- [[e571a](https://github.com/theQRL/go-zond/commit/e58fa090a043197e6d9864a1a4e9228a083e571a)] Removed non required cgo flags		


**[Updated betanet testnet config](https://github.com/theQRL/go-zond/pull/9)**
			
- [[56080](https://github.com/theQRL/go-zond/commit/8e2734f7e98e0cd2517af1e7d45f84e6e9356080)] Updated betanet testnet config		


**[Updated genesis data for betatestnet](https://github.com/theQRL/go-zond/pull/8)**
			
- [[23e8c](https://github.com/theQRL/go-zond/commit/5dd82c4619215b16ac30c2133af370497c823e8c)] Updated genesis data for betatestnet		


**[Updated Signature & Public key datatype ](https://github.com/theQRL/go-zond/pull/7)**
			
- [[94acd](https://github.com/theQRL/go-zond/commit/5054e30e3ca6a666693c4e0eda941c3eea994acd)] Changed datatype of Signature and PublicKey to bytes		
- [[4e70e](https://github.com/theQRL/go-zond/commit/61e44dc0802b5377141785de9ceae53de254e70e)] Fix to support new datatype of tx signature and public key		


**[Updated betanet genesis config](https://github.com/theQRL/go-zond/pull/6)**
			
- [[e8462](https://github.com/theQRL/go-zond/commit/ceefe595b0229039ef111de314d83c02c5ce8462)] Updated betanet genesis config		


**[Refactoring](https://github.com/theQRL/go-zond/pull/5)**
			
- [[d7e11](https://github.com/theQRL/go-zond/commit/cb7b24bef33ecfaf498ccee4d03f24566bdd7e11)] Refactoring		


**[fix for makefile](https://github.com/theQRL/go-zond/pull/4)**
			
- [[95010](https://github.com/theQRL/go-zond/commit/541df0240ad99de08d3244b3677a37c284e95010)] fix for makefile		


**[Refactoring + updated default directory name](https://github.com/theQRL/go-zond/pull/3)**
			
- [[caac2](https://github.com/theQRL/go-zond/commit/b4b39ba1f7e0cd2d8b8afed9d669793da91caac2)] Refactoring + updated default directory name		


**[Updated genesis alloc for betanet](https://github.com/theQRL/go-zond/pull/2)**
			
- [[57601](https://github.com/theQRL/go-zond/commit/68ae6a71aa6f893bc62c85900b8cd32ceaf57601)] Updated genesis alloc for betanet		


**[Fix: pk decoding in SignatureAndPublicKeyValues](https://github.com/theQRL/go-zond/pull/1)**
			
- [[1c57b](https://github.com/theQRL/go-zond/commit/3c5eb31a68cb73f8064f0da2acf7a8407541c57b)] Fix: pk decoding in SignatureAndPublicKeyValues		

### theQRL/go-zond-wallet-encryptor-keystore

**[Decode hex string with prefix 0x](https://github.com/theQRL/go-zond-wallet-encryptor-keystore/pull/6)**
			
- [[e4f33](https://github.com/theQRL/go-zond-wallet-encryptor-keystore/commit/6fa0064f6ff9f9de62834a5d3ddfc0622bce4f33)] Decode hex string with prefix 0x		

### theQRL/qrysm

**[Fix: corrected parameter passed to json.unmarshal](https://github.com/theQRL/qrysm/pull/21)**
			
- [[0b0ed](https://github.com/theQRL/qrysm/commit/6d98b9ec3192a73a34e24c71d0923497e4e0b0ed)] Fix: corrected parameter passed to json.unmarshal		


**[Updated TtfbTimeout to 25 seconds](https://github.com/theQRL/qrysm/pull/20)**
			
- [[b8e1c](https://github.com/theQRL/qrysm/commit/41546baab090a22502bd856fe9d7b252036b8e1c)] Updated TtfbTimeout to 25 seconds		


**[Fix: Added block version check before writing it to the p2p stream](https://github.com/theQRL/qrysm/pull/19)**
			
- [[57ce0](https://github.com/theQRL/qrysm/commit/eaac35ac7d7cbe24174730fff3a621ee84057ce0)] Fix: Added block version check before writing it to the p2p stream		


**[Updated ssz file](https://github.com/theQRL/qrysm/pull/18)**
			
- [[2807c](https://github.com/theQRL/qrysm/commit/9baeff5ccee9ff00ccd0f09b0262193f9552807c)] Updated ssz file		


**[Added all updates till prysm v4.0.8](https://github.com/theQRL/qrysm/pull/17)**
			
- [[8f3e6](https://github.com/theQRL/qrysm/commit/6efc10072005dd9e044319eb18945d96ad38f3e6)] Added all updates till prysm v4.0.8		


**[Refactoring](https://github.com/theQRL/qrysm/pull/16)**
			
- [[e3116](https://github.com/theQRL/qrysm/commit/e2bf6f95cfbc215f7c35d423ab2d034cdeae3116)] Refactoring		


**[Updated flag name and description](https://github.com/theQRL/qrysm/pull/15)**
			
- [[0a0b7](https://github.com/theQRL/qrysm/commit/a8d2b85491d862820e7906b4be636a1dfcf0a0b7)] Updated flag name and description		


**[Fixed typo](https://github.com/theQRL/qrysm/pull/14)**
			
- [[fb4a9](https://github.com/theQRL/qrysm/commit/a0953a0c89b7e94d612d133d7df1a96ffa8fb4a9)] Fixed typo		


**[Updated value for GenesisValidatorsRoot](https://github.com/theQRL/qrysm/pull/13)**
			
- [[4cb30](https://github.com/theQRL/qrysm/commit/8a8c9bed4b64af7ee4c546e0546cf69a4944cb30)] Updated value for GenesisValidatorsRoot		


**[Fix: Updated router path for the API](https://github.com/theQRL/qrysm/pull/12)**
			
- [[ed276](https://github.com/theQRL/qrysm/commit/8da41f472ed9da054a2512cbe884e068f56ed276)] Fix: Updated router path for the API		


**[Fix: keymanager import trim 0x while decoding pubkey](https://github.com/theQRL/qrysm/pull/11)**
			
- [[206aa](https://github.com/theQRL/qrysm/commit/9923dfa87c40bd10c6d2b2f16be64569015206aa)] Fix: keymanager import trim 0x while decoding pubkey		


**[Updated dependencies](https://github.com/theQRL/qrysm/pull/10)**
			
- [[3272d](https://github.com/theQRL/qrysm/commit/4c0f2db6738cc45bd05c27967c3eab6dd933272d)] Updated dependencies		


**[Revert changes of site_data](https://github.com/theQRL/qrysm/pull/9)**
			
- [[ede89](https://github.com/theQRL/qrysm/commit/898582bbdfb38589d355c88fa0c6d865389ede89)] Revert changes of site_data		


**[Updated text messages](https://github.com/theQRL/qrysm/pull/8)**
			
- [[4350b](https://github.com/theQRL/qrysm/commit/3db0f2b615718e01ce8aeff702b78c459e14350b)] Updated text messages		


**[Fix unit test](https://github.com/theQRL/qrysm/pull/7)**
			
- [[f6fdf](https://github.com/theQRL/qrysm/commit/b195cd0b5cc26667b01f18515bb2793e734f6fdf)] Fix unit test		


**[Refactoring](https://github.com/theQRL/qrysm/pull/6)**
			
- [[3c99b](https://github.com/theQRL/qrysm/commit/e56f714882b2b497ad012b895662034e3a33c99b)] Refactoring		


**[Updated go.mod & go.sum](https://github.com/theQRL/qrysm/pull/5)**
			
- [[0d8cd](https://github.com/theQRL/qrysm/commit/eb4cb576bbc6ed72c0da7824218c17b89b30d8cd)] Updated go.mod & go.sum		


**[Updated module name & dependencies](https://github.com/theQRL/qrysm/pull/4)**
			
- [[f2600](https://github.com/theQRL/qrysm/commit/87102e7182b1ce6cbf8d2716cde8cf42613f2600)] Updated module name & dependencies		


**[Fixed imports in generated protobuf & grpc files](https://github.com/theQRL/qrysm/pull/3)**
			
- [[d8f31](https://github.com/theQRL/qrysm/commit/43065d47aac48e66270eb49cb4c174986e9d8f31)] Fixed imports in generated protobuf & grpc files		


**[Updated bazel issue + regenerated protobuf and ssz files](https://github.com/theQRL/qrysm/pull/2)**
			
- [[b5e9e](https://github.com/theQRL/qrysm/commit/0a22fc1de1fd5ed73b69e0d1dae4551ca6eb5e9e)] Updated bazel issue + regenerated protobuf and ssz files		


**[Updated bazel files, dependencies & re-generated protobuf + grpc files](https://github.com/theQRL/qrysm/pull/1)**
			
- [[6ec8f](https://github.com/theQRL/qrysm/commit/c8df92982f4d1d35e98919d1c54c51921526ec8f)] Updated bazel files		
- [[623c6](https://github.com/theQRL/qrysm/commit/4f56f68a9b224203c9a46787183f2da8553623c6)] Updated dependencies and re-generated protobuf & grpc files		

### theQRL/theqrl.org

**[QRL Weekly, 2023-October-24](https://github.com/theQRL/theqrl.org/pull/379)**
			
- [[f7649](https://github.com/theQRL/theqrl.org/commit/c346aabf35478dd70b134ac024c86b7e5e3f7649)] QRL Weekly, 2023-October-24		


**[Add QRL Weekly, 2023-October-17](https://github.com/theQRL/theqrl.org/pull/378)**
			
- [[010f2](https://github.com/theQRL/theqrl.org/commit/aaafa7c4ee7e0150bed1922efe2696fb524010f2)] Add additional quantum news articles		
- [[315eb](https://github.com/theQRL/theqrl.org/commit/6bfde75e20bc6617cb0ee3ee3763a58fc23315eb)] Fix broken ledger link		
- [[5b2f4](https://github.com/theQRL/theqrl.org/commit/e67327fd9aa338300308097ada25329c47d5b2f4)] Add QRL Weekly, 2023-October-17		


**[History of Cryptography, behind the code - Episode 4](https://github.com/theQRL/theqrl.org/pull/377)**
			
- [[53917](https://github.com/theQRL/theqrl.org/commit/204409e3b15241ecc2cceb1e00db092a3c953917)] History of Cryptography, behind the code - Episode 4		


**["Subscribe to our newsletter" legibility fix](https://github.com/theQRL/theqrl.org/pull/376)**
			
- [[c2abe](https://github.com/theQRL/theqrl.org/commit/0b0c4b31151aa50e41f6bd7884b99f42416c2abe)] "Subscribe to our newsletter" legibility fix		


**[QRL Weekly, 2023-October-10](https://github.com/theQRL/theqrl.org/pull/375)**
			
- [[24eb9](https://github.com/theQRL/theqrl.org/commit/5da771de7e2cbdcb3cc5d0d75cbb76c8ad324eb9)] Add a small script to bootstrap QRL Weekly		
- [[5c7df](https://github.com/theQRL/theqrl.org/commit/e81bd32f2b4e85262b4caac401a483d82a25c7df)] Quantum news update		
- [[13e10](https://github.com/theQRL/theqrl.org/commit/f728bdf93f837f6af0afc983fdf50e6aca813e10)] Chmod changes		
- [[92404](https://github.com/theQRL/theqrl.org/commit/84126e180ee17571c7c30f1d58124ad875192404)] QRL Weekly, 2023-October-10		


**[QRL Weekly, 2023-October-03](https://github.com/theQRL/theqrl.org/pull/374)**
			
- [[af9fe](https://github.com/theQRL/theqrl.org/commit/715582f3a44f8f78f6a5a2fbeebc5e9b3ddaf9fe)] QRL Weekly, 2023-October-03		


**[QRL Monthly: feat. QRL Mobile Wallet Release by Volt Development - September 2023](https://github.com/theQRL/theqrl.org/pull/373)**
			
- [[1964c](https://github.com/theQRL/theqrl.org/commit/a2492f5e8f87608fc0be5c3a5aa96fd30531964c)] QRL Monthly: feat. QRL Mobile Wallet Release by Volt Development - September 2023		
- [[f47f4](https://github.com/theQRL/theqrl.org/commit/5518c058148e1c5d3e22cc96031b5e58a3ff47f4)] Improved git updates		
- [[39e45](https://github.com/theQRL/theqrl.org/commit/d0ed0dc3cc2b430a21c669839126621093739e45)] Merge remote-tracking branch 'upstream/main'		
- [[7fdf7](https://github.com/theQRL/theqrl.org/commit/77882c5b6fcf64bbcdd3ee7ffc6037a1e807fdf7)] Update QRL Mobile wallet with link to the Apple App Store		

### theQRL/wallet.js

**[Bump patch version number in package.json](https://github.com/theQRL/wallet.js/pull/12)**
			
- [[3b364](https://github.com/theQRL/wallet.js/commit/b8aa97653867f91fbc7294ab9e98140af3b3b364)] Bump patch version number in package.json		


**[Updated main file name in package.json](https://github.com/theQRL/wallet.js/pull/11)**
			
- [[2bbd5](https://github.com/theQRL/wallet.js/commit/16726fd6f550b008675f6f01816e8300ab62bbd5)] Updated main file name in package.json		

### theQRL/web3.js

**[Add Github Action workflow to build](https://github.com/theQRL/web3.js/pull/5)**
			
- [[cdcd0](https://github.com/theQRL/web3.js/commit/2ea89ddb592e1070693e8574e781bf78531cdcd0)] Add GH action to test build		
- [[92b13](https://github.com/theQRL/web3.js/commit/0b61661ae53cd855fb039da3b2c923e444b92b13)] Remove redundant workflow entries		
- [[b6b92](https://github.com/theQRL/web3.js/commit/6ae8447fd71c62e2afab645f09ff48468eab6b92)] scope web3 eslint package		
- [[edf3e](https://github.com/theQRL/web3.js/commit/de413fd95d8f38f9eeac451b9e7dda5df1eedf3e)] scope web3 eslint package everywhere		
- [[fde11](https://github.com/theQRL/web3.js/commit/2dab4c59076cd68bcb35406d074254a8150fde11)] Don't cache action		
- [[3dbcf](https://github.com/theQRL/web3.js/commit/4e3c3f6716ba0d3e511ad496a91bbc87a9d3dbcf)] Add missing scopes		
- [[64b2f](https://github.com/theQRL/web3.js/commit/d920d7d947215ed1f0ca767462d29ccdc6064b2f)] node v18 in CI and add an .nvmrc file		
- [[67054](https://github.com/theQRL/web3.js/commit/84ea0a18f2bba66bc2bf9e1e0cda9664cf267054)] Fix typo		


**[Changes for publish on npm](https://github.com/theQRL/web3.js/pull/4)**
			
- [[7d31e](https://github.com/theQRL/web3.js/commit/0ebd871880bc0827553fbe592066540c3677d31e)] Publish

 - @theqrl/web3-core@0.2.0
 - @theqrl/web3-errors@0.2.0
 - @theqrl/web3-net@0.2.0
 - @theqrl/web3-providers-http@0.2.0
 - @theqrl/web3-providers-ipc@0.2.0
 - @theqrl/web3-providers-ws@0.2.0
 - @theqrl/web3-rpc-methods@0.2.0
 - @theqrl/web3-types@0.2.0
 - @theqrl/web3-utils@0.2.0
 - @theqrl/web3-validator@0.2.0
 - @theqrl/web3-zond-abi@0.2.0
 - @theqrl/web3-zond-accounts@0.2.0
 - @theqrl/web3-zond-contract@0.2.0
 - @theqrl/web3-zond-ens@0.2.0
 - @theqrl/web3-zond-iban@0.2.0
 - @theqrl/web3-zond-personal@0.2.0
 - @theqrl/web3-zond@0.2.0
 - @theqrl/web3@0.2.0
 - eslint-config-base-web3@0.2.0
 - web3-packagetemplate@1.2.0
 - web3-plugin-example@1.1.0		
- [[1b0a0](https://github.com/theQRL/web3.js/commit/e2709047d53cf098be31ad03bc6d09f8e891b0a0)] bump web3 pkg version		
- [[4d540](https://github.com/theQRL/web3.js/commit/396e9115075102a2de528700d46a9f2b1cc4d540)] Scope and reversion tool/ packages		
- [[a88d7](https://github.com/theQRL/web3.js/commit/d4f3246946fec86d908a215b27568aa8faea88d7)] missing rescope		
- [[35253](https://github.com/theQRL/web3.js/commit/1d27cb17bf9748fbd628ef7f825ac8c3ec335253)] Scope as public in package.json		


**[web3-validator/test/unit/load.test: update deadlines](https://github.com/theQRL/web3.js/pull/3)**
			
- [[0179e](https://github.com/theQRL/web3.js/commit/140070c3dc55f6c67a528b424e1db151b390179e)] packages/web3-validator/test/unit/load.test: update deadlines		


**[Fix yarn install errors](https://github.com/theQRL/web3.js/pull/2)**
			
- [[e4ecb](https://github.com/theQRL/web3.js/commit/a89f3fcdfc9d9eec11293bcd2dde3efa6f5e4ecb)] Fix yarn install errors		


**[Add zond features](https://github.com/theQRL/web3.js/pull/1)**
			
- [[002e3](https://github.com/theQRL/web3.js/commit/b8b47d78eb8042154da801b0580a326d161002e3)] Add initial resources		
- [[5cb5f](https://github.com/theQRL/web3.js/commit/80563b63c1c6f0dd54badce65c51a2bec905cb5f)] web3-rpc-methods: replace eth_ with zond_		
- [[03360](https://github.com/theQRL/web3.js/commit/fd00fc6d44e0edf15d6b1ee0122949891ad03360)] Add working version		
- [[9a1b1](https://github.com/theQRL/web3.js/commit/c3c257c1a37056f95b63d843aa6edc753389a1b1)] packages: review naming		
- [[3cb77](https://github.com/theQRL/web3.js/commit/4216fcd4ac31cde63f9963d4d08a8c83f643cb77)] Initial review of the tests		
- [[34b25](https://github.com/theQRL/web3.js/commit/0367d70ce5ba71c77fa9bc3b7086709b38234b25)] Initial review of the tests part 2		
- [[f0ac0](https://github.com/theQRL/web3.js/commit/047ed770ed4cda2a4b97366640906f3ddedf0ac0)] Remove ganache and infura refs		
- [[2e4ee](https://github.com/theQRL/web3.js/commit/10c71625f7cf7400ae2f84d5b942c2472732e4ee)] .github/workflows: review workflows		
- [[b8e52](https://github.com/theQRL/web3.js/commit/1dc37f6be104aff51da5a0d928e7601e919b8e52)] Review other dirs		
- [[8deb3](https://github.com/theQRL/web3.js/commit/8ef903867027586d23a06f9005f860a622d8deb3)] Remove ecRecover op		
- [[e2c13](https://github.com/theQRL/web3.js/commit/96064c3a6f3faea227e3563da36218fdbd5e2c13)] web3-zond-accounts: initial review of tests		
- [[2be85](https://github.com/theQRL/web3.js/commit/50834cedee094eeb90d21b5f36f40ed63d72be85)] Fix tests part 1		
- [[3d298](https://github.com/theQRL/web3.js/commit/42d31d37f85a07e8af1ad955f7021c174f33d298)] Fix tests part 2		
- [[f1414](https://github.com/theQRL/web3.js/commit/7386144392c954de8aafd0a1bc9e4de4496f1414)] Fix tests part 3		
- [[888ed](https://github.com/theQRL/web3.js/commit/fad5a3ed8d1e2d5c2123ccf727fe7deb991888ed)] Fix tests part 4		
- [[08734](https://github.com/theQRL/web3.js/commit/3321d10e0d2742d901db88909b2cc24448d08734)] Fix tests part 5		
- [[bebc4](https://github.com/theQRL/web3.js/commit/c4a915d632a54d5fb3aaca8521784f58af9bebc4)] Review integration tests with geth		
- [[e26f8](https://github.com/theQRL/web3.js/commit/278630dac3917b23c9f0a7898e7167ea5d3e26f8)] Review integration tests with geth part 2		
- [[31d97](https://github.com/theQRL/web3.js/commit/a1039c5d337d06e6a5a60c49013f9d18a4531d97)] Add proof-of-stake scripts		
- [[09608](https://github.com/theQRL/web3.js/commit/35e4fad70f2393d97b80e5a2056be811b6509608)] web3-zond: fix integration tests		
- [[a3222](https://github.com/theQRL/web3.js/commit/a62c19e498af2ec426de575ef0db0ac531ba3222)] Add working version of the unit tests		
- [[38ae6](https://github.com/theQRL/web3.js/commit/fcdd9249c2f277d2008cfb59d6e8e8f820738ae6)] Add working version of the integration tests		
- [[19b8e](https://github.com/theQRL/web3.js/commit/69b5b86b9b81f58d67fa5600b1052201c8e19b8e)] Add working version of the unit tests part 2		
- [[2eb3b](https://github.com/theQRL/web3.js/commit/c4563a90d5f10fb69cc32152d5befaac8252eb3b)] Add working version of the unit tests part 3		
- [[78f7f](https://github.com/theQRL/web3.js/commit/c2d6e2908aca2a17a9bfbb367596240811778f7f)] Review integration tests with gzond		
- [[79d94](https://github.com/theQRL/web3.js/commit/3995abf4b9abb5a6e159c1e85f91bf600b379d94)] web3-zond-personal/test/integration: modify timeout		