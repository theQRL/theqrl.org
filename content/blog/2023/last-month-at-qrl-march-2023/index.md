---
layout: blog-post
slug: last-month-at-qrl-march-2023
date: 2023-04-21
author: "Jack Matier"
title: "Last Month at QRL March 2023"
summary: "Geometry Labs has developed highly aggregatable Fusion digital signatures for the QRL ecosystem with funding from the QRL Foundation’s grants programme. Crypto.js Dilithium5 is in devnet and Neven's law, explained!"
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### Geometry Labs have been awarded a grant regarding: Fusion signatures submission package for NIST standardization

{{< image "./images/h.grant.png" >}}

Geometry Labs has developed highly aggregatable Fusion digital signatures for the QRL ecosystem with funding from the [QRL Foundation’s grants programme](https://qrl.foundation/grants.html). 

Lattice cryptography, which provides post-quantum security, is the foundation for these very secure signatures. Fusion signatures were developed specifically for use in proof-of-stake systems that involve a large number of validators. The approach taken offers several benefits, including the simplification of the architecture, an increase in capacity, and smaller signatures and keys.

A formal specification and parameterization of the Fusion signature scheme is currently being developed by [Geometry Labs](https://geometrylabs.io/); once complete, these algorithms will be made available to the public as open source software and shared with [NIST](https://www.nist.gov/) for consideration as a possible standard.

To learn more, read our [Fusion grant announcement blog](/blog/announcing-fusion-post-quantum-digital-signatures/) and if you have any questions, you'll want to get them prepared and stay tuned for an upcoming AMA!

###  Neven's Law Explained - What It Means for the Future of Quantum Computing 

{{< youtube "6OcFVbmpHbM" >}}

We examine Moore's Law, Neven's Law, and the implications for quantum computing in our most recent episode.

Nevin's Law has the potential to transform our perception of technology. It asserts that the processing capacity of quantum computers is increasing twice exponentially, i.e., the computer's processing capability doubles for every additional qubit as the number of qubits increases. Neven's Law has far-reaching implications since it predicts that in terms of processing power, quantum computers would eventually beat even the most powerful classical computers. 

Be sure to check out the [video](https://www.youtube.com/watch?v=6OcFVbmpHbM) to learn more.

## Development Updates

### crypto.js

- qrypto.js dilithium5 library working on node and browser
- qrypto.js node unit tests being replicated browser-side
- qrypto.js demo usage via a web-based UI ongoing development and previewed internally
- Fixes for browser implementation of qrypto.js

### Cryptography

- Account module is now using Dilithium cryptography
- Functionality added to import dilithium wallet to the node from the hexseed
- Javascript implementation of Dilithium5 wallet with unit tests
- Integrated wallet.js library with @theQRL/web3 and zond-chrome-extension, replacing the older dilithium wallet library generated from go code
- wallet.js CI testing implemented

### Progressive Web App (PWA) wallet

- Progressive Web App (PWA) wallet system design commenced
- @theqrl/wallet.js NPM prerelease package published
- Worked on deploy, mint, approve, revoke and transfer nft using Chrome Extension Wallet
- Signing/Verification in browser UI demo work-in-progress deployed
- Bug fixes for token transfer and token approve for the Chrome Extension Wallet

### Zond

- Web3 API being upgraded with the latest Dilithium 5 javascript library.
- Looked into how the data of all the fields in the Genesis Block being calculated in the consensus engine.
- Tools to auto-generate Genesis Block for different types of network in progress.
- Reviewed the Genesis Block & state processing as well as the Block processing in the Consensus Engine
- Going through the batchBlock downloading during syncing and processing in Zond Consensus Engine

### Other

- Legacy mobile wallet Android dependency deep-dive
- We’ve identified an API targeting issue affecting the legacy mobile wallet app. A short-term fix is in place and the app is now downloadable again from the Google Play store. We’re working on a both a medium term redeployment fix and the longer term mobile wallet development roadmap.

## Quantum News

{{% qnews start="2023-03-01" end="2023-04-01" %}}

## Changelog

### theQRL/go-qrllib

**[Added NewDilithiumFromHexSeed](https://github.com/theQRL/go-qrllib/pull/27)**
			
- [[42143](https://github.com/theQRL/go-qrllib/commit/46759f4d4be47fba98d5e0b7e2809a4ff3042143)] Added NewDilithiumFromHexSeed		


**[Added NewDilithiumFromMnemonic](https://github.com/theQRL/go-qrllib/pull/26)**
			
- [[7fea7](https://github.com/theQRL/go-qrllib/commit/85d35a8563d93220dd0b2c3c90c4d3a0e747fea7)] Added NewDilithiumFromMnemonic		


**[Replaced all Dilithium panic with error](https://github.com/theQRL/go-qrllib/pull/25)**
			
- [[76f29](https://github.com/theQRL/go-qrllib/commit/8d1fb765ed3f932604ed56573aa79a2e83076f29)] Replaced all Dilithium panic with error		

### theQRL/qrypto.js

**[Add codecov yml file](https://github.com/theQRL/qrypto.js/pull/17)**
			
- [[f4e47](https://github.com/theQRL/qrypto.js/commit/d01a786ec3f6edf9bb85a8f0a5462a0ac0ef4e47)] Add codecov yml file		
- [[3e36c](https://github.com/theQRL/qrypto.js/commit/1129770ce364550efc25971a80b25cb11843e36c)] Merge branch 'theQRL:main' into main		


**[Tests for missing coverage in polyvec and symmetric-shake](https://github.com/theQRL/qrypto.js/pull/16)**
			
- [[1bd19](https://github.com/theQRL/qrypto.js/commit/6c528164cbb857dd25c2e8bd3fb3879e9ff1bd19)] Tests for missing coverage in polyvec and symmetric-shake		
- [[e1d51](https://github.com/theQRL/qrypto.js/commit/9a8210c4837b8016203f9c7bfd40a35c8dae1d51)] Merge remote-tracking branch 'origin/main'		


**[Refactor to CJS for web3-based module compatibility](https://github.com/theQRL/qrypto.js/pull/15)**
			
- [[b2494](https://github.com/theQRL/qrypto.js/commit/95b012052b51ce9c8ac8519cbe7afbc39f5b2494)] Refactor to CJS for web3-based module compatibility		


**[Fix for randomBytes call](https://github.com/theQRL/qrypto.js/pull/14)**
			
- [[b4e88](https://github.com/theQRL/qrypto.js/commit/02936cc065ebc319b9b38246d396cd56105b4e88)] Fix for randomBytes call		


**[randombytes using appropriate node/browser source calls](https://github.com/theQRL/qrypto.js/pull/13)**
			
- [[61c78](https://github.com/theQRL/qrypto.js/commit/3d0bfdd98f269e99df011e353c8d3d6196161c78)] randombytes using appropriate node/browser source calls		
- [[d5b8c](https://github.com/theQRL/qrypto.js/commit/c0938bd669ab4cd1a69a8c8739352bdd887d5b8c)] Merge remote-tracking branch 'origin/main'		
- [[74bd8](https://github.com/theQRL/qrypto.js/commit/6c20fc0a79cb4752c3b8a54d58c80b851cf74bd8)] Merge branch 'main' into main		
- [[57454](https://github.com/theQRL/qrypto.js/commit/7fd34b586282e942834e2b77a21df339b6e57454)] fix for cjs import		
- [[02791](https://github.com/theQRL/qrypto.js/commit/736d8459438beef1cbd47a1667ca8d7f46c02791)] Merge remote-tracking branch 'origin/main'		
- [[6d7c0](https://github.com/theQRL/qrypto.js/commit/bef000982c1aad01007d745bc3702fab91e6d7c0)] version bump		


**[Refactor SHAKE256 hashing for better browser compatibility](https://github.com/theQRL/qrypto.js/pull/12)**
			
- [[b5c03](https://github.com/theQRL/qrypto.js/commit/8edc0d5964b7db6807a1a46f664ef6e910cb5c03)] Refactor SHAKE256 hashing for better browser compatibility		
- [[9f6cc](https://github.com/theQRL/qrypto.js/commit/55c09c378133b4625f880f9b314c92f52b59f6cc)] Merge branch 'main' into main		

### theQRL/theqrl.org

**[Fix menu on mobile](https://github.com/theQRL/theqrl.org/pull/337)**
			
- [[ce657](https://github.com/theQRL/theqrl.org/commit/493b31eb6787fe7f669e2aa6b803dd8f245ce657)] Fix mobile menu		

### theQRL/wallet.js

**[Add coverage and README badges](https://github.com/theQRL/wallet.js/pull/7)**
			
- [[da616](https://github.com/theQRL/wallet.js/commit/dd7dac750b3dea145c8423c9522778bc4fbda616)] Setup codecov		
- [[a1f5d](https://github.com/theQRL/wallet.js/commit/e45f25620e4dcfa8f92c95e8dd432fdab20a1f5d)] Merge remote-tracking branch 'origin/main'		
- [[9dd2a](https://github.com/theQRL/wallet.js/commit/2607d72ce83bc6347084e64811f83f9f7959dd2a)] Generate coverage report		
- [[99d34](https://github.com/theQRL/wallet.js/commit/95766e7f436a44271dd42555f597e97b59699d34)] Add README		


**[Refactor to CJS for web3-based module compatibility](https://github.com/theQRL/wallet.js/pull/6)**
			
- [[37df6](https://github.com/theQRL/wallet.js/commit/4ddc3806f782845d383c9a54b970eb2aab637df6)] Refactor to CJS for web3-based module compatibility		


**[Additional unit test for 100% coverage](https://github.com/theQRL/wallet.js/pull/5)**
			
- [[2d6b7](https://github.com/theQRL/wallet.js/commit/20f8a7e3651c7cba6b01687e0f07f11310e2d6b7)] Additional unit test for 100% coverage		


**[[breaking] rewrite as class](https://github.com/theQRL/wallet.js/pull/4)**
			
- [[df49d](https://github.com/theQRL/wallet.js/commit/9da860d8a09cf3c6aed420d69271f360d8fdf49d)] Add linting packages in case not installed globally		
- [[534b2](https://github.com/theQRL/wallet.js/commit/341ed23e985513e73ec0fc92f00a436dd34534b2)] Rewrite as class		


**[Bug fix, new unit tests and dev setup](https://github.com/theQRL/wallet.js/pull/2)**
			
- [[3665e](https://github.com/theQRL/wallet.js/commit/e19dd3a5cf8bdbbbc95b8c3027df7edba8b3665e)] Linting & testing setup		
- [[fbe70](https://github.com/theQRL/wallet.js/commit/9b8c6fe73ccfa5f21c217baa6276a9e7a60fbe70)] Refactor imports		
- [[c7f40](https://github.com/theQRL/wallet.js/commit/d204a9ad0be4996c34cb2b164970c7c95cec7f40)] Fix byte count check and throw on binToMnemonic()		
- [[35399](https://github.com/theQRL/wallet.js/commit/27dd4187493cdea9d275afa217ada874d7735399)] Linting refactor		
- [[61ec2](https://github.com/theQRL/wallet.js/commit/1eaa303cfe8541dcc5556525cf8ecc9bd2561ec2)] Unit tests for mnemonic for byte count check fixed in earlier commit		

**[Add GH workflow](https://github.com/theQRL/wallet.js/pull/1)**
			
- [[8ac26](https://github.com/theQRL/wallet.js/commit/73e7c748ee3a432e4e9eedf16f97a892fc38ac26)] Add GH workflow		






