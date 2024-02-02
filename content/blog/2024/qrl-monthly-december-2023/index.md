---
layout: blog-post
slug: qrl-monthly-december-2023
date: 2024-01-09
author: "The QRL Core Contributors"
title: "QRL Monthly, December 2023"
summary: "Iain Wood, the new operational manager, takes on the strategic leadership goals including community growth and finalizing the project's roadmap. QRL Zond enters final work before a public beta-testnet is released"
featured_image: header.png
categories:
  - technical
toc: true
---


## Highlights

### QRL: The Next Chapter

{{< image "./images/h.iainwood.png" >}}

The QRL project has appointed [Iain Wood](/team/iainwood) as its new operational manager, entrusting him with strategic goals such as community growth and finalizing the project’s roadmap. The original founder, Peter Waterland, reflects on the journey, expressing excitement for QRL’s future while transitioning to an administrative role in the latest blog post. [Learn more about these developments](/blog/qrl-the-next-chapter/)

Iain Wood is a GP with extensive experience in pre-hospital medicine who served in the British military for almost 25 years. He went from combat operations to advising a NATO Commander in Italy to becoming the operational manager of QRL, which is establishing itself as a global hub for distributed ledger technology.

## QRL Zond Development

In the recent updates, several improvements and adjustments have been made to enhance the functionality of the system. 

The P2P handshake process has been enhanced with additional logging. Changes have been implemented in the zond-contract-example, utilizing new web3.js and cryptography libraries. Successful testing of smart contract deployment, on-chain and off-chain calls has been accomplished. 

Work on unit tests for the beacon-client is ongoing. A significant fix addressed a peer pruning issue preventing new nodes with the same IP from connecting to bootstrap nodes. Additionally, testing for the API to manage trusted peers has been conducted. Parameters, such as minimum staking amount, epoch size, and block timing, have been updated, with corresponding code modifications. 

Various other parameter changes are still in progress. Several bug fixes have been made, including resolving API path and staking-deposit-cli issues. The web3.js library has been updated to align with the latest changes. A milestone has been reached with the Private Testnet surpassing 100,000 blocks without issues. The private testnet has been released with a reduced sync committee size of 16. Further adjustments to parameters and ongoing work on unit tests for the beacon client are part of the current development focus.

## Quantum News

{{% qnews start="2023-12-01" end="2023-12-31" %}}

## Changelog

### theQRL/go-bitfield

**[Implemented Or, Overlaps, Contains and Shift function for bitvector16](https://github.com/theQRL/go-bitfield/pull/1)**
			
- [[3ea90](https://github.com/theQRL/go-bitfield/commit/a86658f4834c477ff62454ed4380121ec223ea90)] Implemented Or, Overlaps, Contains and Shift function for bitvector16		

### theQRL/go-zond

**[Updated payload endTimer based on new block timing of 60 seconds](https://github.com/theQRL/go-zond/pull/15)**
			
- [[2b83a](https://github.com/theQRL/go-zond/commit/597a3c6749cf021b7e975acd724d7e2c6762b83a)] Updated payload endTimer based on new block timing of 60 seconds		


**[Updated betanet testnet config](https://github.com/theQRL/go-zond/pull/14)**
			
- [[75d7e](https://github.com/theQRL/go-zond/commit/9aced2221c8632fe529649d44ab992c595075d7e)] Updated betanet testnet config		

**[Merged all upstream changes till v1.13.1](https://github.com/theQRL/go-zond/pull/13)**
			
- [[a8516](https://github.com/theQRL/go-zond/commit/b10f8dbbe3bea6188bd227e7d426d68e523a8516)] Merged all upstream changes till v1.13.1		
- [[1bf76](https://github.com/theQRL/go-zond/commit/3d494009516ff49b906ea5ae2480c9fd2f81bf76)] updates v1.13.1		
- [[47ab9](https://github.com/theQRL/go-zond/commit/0d1ecdd867ea8d60c28dca9bf2513b969f547ab9)] EthConfig		
- [[3c370](https://github.com/theQRL/go-zond/commit/babeab1a2ee92f60fb92a4e4e93a9610b123c370)] Removed unnecessary files		
- [[3065a](https://github.com/theQRL/go-zond/commit/652e75149863b643949d4e8fefa6aaacd643065a)] Added BetaNet genesis hash test		
- [[0a6a8](https://github.com/theQRL/go-zond/commit/218f59af6949010746f29a6f0c45646d72d0a6a8)] fix web3.js missing variable		

### theQRL/qrysm

**[Reverting changes made into site_data.go](https://github.com/theQRL/qrysm/pull/29)**
			
- [[bef67](https://github.com/theQRL/qrysm/commit/5756e6c0afb7c3fd10f27639accce7b66abbef67)] Reverting changes made into site_data.go		


**[Fix API path](https://github.com/theQRL/qrysm/pull/28)**
			
- [[3d795](https://github.com/theQRL/qrysm/commit/574e86f575d11ab2bcf034c24637a6fc30a3d795)] Fix API path		


**[Bug fix for existing-seed command & file write in staking-deposit-cli](https://github.com/theQRL/qrysm/pull/27)**
			
- [[c9c38](https://github.com/theQRL/qrysm/commit/460b935d464995cb3abae94d2d088dab05ac9c38)] Bug fix for existing-seed command & file write in staking-deposit-cli		


**[Updated parameters such as MaxEffectiveBalance, EjectionBalance, SecondsPerETH1Block, SecondsPerSlot](https://github.com/theQRL/qrysm/pull/26)**
			
- [[a0ce3](https://github.com/theQRL/qrysm/commit/20564624e69e202b0b776a9f63925643a62a0ce3)] Updated parameters such as MaxEffectiveBalance, EjectionBalance, SecondsPerETH1Block, SecondsPerSlot		


**[Upstream changes v4.1.1 + Reduced sync committee size to 16](https://github.com/theQRL/qrysm/pull/24)**
			
- [[f60be](https://github.com/theQRL/qrysm/commit/fb81e8a0fdff9d39d77cb1e7e6ade46e4f5f60be)] Merged all changes till v4.1.1		
- [[f0f27](https://github.com/theQRL/qrysm/commit/754b14ce6354a768a955b39862bb6d15d93f0f27)] Fixed several errors, imports and missing changes		
- [[bdad4](https://github.com/theQRL/qrysm/commit/b43d9dcc2bc4011e8cd5945bbf4fa25c072bdad4)] Updated dependencies		
- [[2ba2e](https://github.com/theQRL/qrysm/commit/9e350f8e4523f9d74a383acb0128d59ed452ba2e)] fix panic while generating gensis.ssz file in testnet		
- [[e619a](https://github.com/theQRL/qrysm/commit/a9d2336cbffce3bc95c1ad1572fd5f93dc6e619a)] Merge pull request #5 from sarkarabhijeet0512/upstream-changes-v4.1.1

fix panic while generating gensis.ssz file in testnet		
- [[0bdce](https://github.com/theQRL/qrysm/commit/1b2bff365e6e482339213c08be47a4808e70bdce)] Fix imports for deneb testing		
- [[7450f](https://github.com/theQRL/qrysm/commit/c2491d9cbe03e6f73421707c7939c13656f7450f)] Reduced sync committee size to 16 and made required changes to support the same		

### theQRL/theqrl.org

**[QRL Weekly](https://github.com/theQRL/theqrl.org/pull/391)**
			
- [[74b5a](https://github.com/theQRL/theqrl.org/commit/3739ebebd804e80f2c5f389f5723c5cf70874b5a)] QRL Weekly: Public Beta-Testnet Date Set, 2023-December-19		
- [[4e31e](https://github.com/theQRL/theqrl.org/commit/644cab22a3deada0fecd2777911e6d4fe494e31e)] Add quantum news		
- [[6f482](https://github.com/theQRL/theqrl.org/commit/4f4ba47f92d7ffac9e3153bf5badc657c596f482)] Adjust title so it's less confusing		
- [[e4159](https://github.com/theQRL/theqrl.org/commit/77431593d3f562cb73574e81cfe288faf33e4159)] Another title adjustment		
- [[7e662](https://github.com/theQRL/theqrl.org/commit/0bc97ee42bd0cb8c6300ead3a2199af93497e662)] Change apostrophes in quantum.yml		
- [[3c49c](https://github.com/theQRL/theqrl.org/commit/720fcaaface8c2bf9f5ece31b3a190f59293c49c)] Adjustment to invoke netlify rebuild		


**[QRL Weekly: The Next Chapter, 2023-December-12](https://github.com/theQRL/theqrl.org/pull/390)**
			
- [[90852](https://github.com/theQRL/theqrl.org/commit/2b0e03043ad5639441846c97f7a83e5a89290852)] QRL Weekly: The Next Chapter, 2023-December-12		
- [[7c51f](https://github.com/theQRL/theqrl.org/commit/fe0a870f23f91d49ace7d20e6ee3f44011e7c51f)] Quantum updates		


**[QRL The Next Chapter](https://github.com/theQRL/theqrl.org/pull/389)**
			
- [[70359](https://github.com/theQRL/theqrl.org/commit/6a0b966877e3a8d1923bab8c42659b3c26270359)] QRL The Next Chapter		
- [[ed424](https://github.com/theQRL/theqrl.org/commit/8cfd3ff77f993fb43c57ff48aeaa4216bc5ed424)] Date change		


**[QRL Weekly, 2023-December-05](https://github.com/theQRL/theqrl.org/pull/388)**
			
- [[584fd](https://github.com/theQRL/theqrl.org/commit/9629b4c2d98ed3fb5130255e49dcf22684a584fd)] QRL Weekly, 2023-December-05		

### theQRL/web3.js

**[Review scripts to support the latest gzond version](https://github.com/theQRL/web3.js/pull/6)**
			
- [[46e73](https://github.com/theQRL/web3.js/commit/eda489b4eece7308452a041f8ce890d89df46e73)] Review scripts to support the latest gzond version		

### theQRL/zond-contract-example

**[Replace remote signing with local signing](https://github.com/theQRL/zond-contract-example/pull/8)**
			
- [[f7925](https://github.com/theQRL/zond-contract-example/commit/50e8484b761bbf3dc8e8caf1ae7f34f9562f7925)] Replace remote signing with local signing		
- [[b123a](https://github.com/theQRL/zond-contract-example/commit/bfeb40aecb16d8f285642e6898c1ae973a4b123a)] 1-deploy.js: fix order of ops		


**[web3js@0.2.1: add working version: update readme](https://github.com/theQRL/zond-contract-example/pull/7)**
			
- [[7366c](https://github.com/theQRL/zond-contract-example/commit/2cb0c02a9a3a1a22191f451c821a5f8405e7366c)] web3js@0.2.1: add working version: update readme		
- [[689fc](https://github.com/theQRL/zond-contract-example/commit/9b41ecf3b4dd938f23497da38247bee36c6689fc)] web3js@0.2.1: add working version: update readme part 2		


**[web3js@0.2.1: add working version](https://github.com/theQRL/zond-contract-example/pull/6)**
			
- [[ffb91](https://github.com/theQRL/zond-contract-example/commit/fab7a78ae7848be7ef15a09674c478310aaffb91)] web3js@0.2.1: add working version		
- [[a1286](https://github.com/theQRL/zond-contract-example/commit/ceed04e2f5032904501055c545b57e369e9a1286)] web3js@0.2.1: add working version: revert config		
- [[65262](https://github.com/theQRL/zond-contract-example/commit/7baf9d2f2fd34ae9e65c57a39af87c163f865262)] web3js@0.2.1: add working version: review confirmation handler		