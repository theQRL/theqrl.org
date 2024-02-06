---
layout: blog-post
slug: qrl-monthly-january-2024
date: 2024-02-01
author: "The QRL Core Contributors"
title: "QRL Monthly, January 2024"
summary: QRL Zond beta-testnet is released, a huge step towards reviving a proof-of-stake protocol with EVM smart contract compatibility. Don't miss the release AMA with main developer Kaushal Kumar Singh. Interested in the history and development of digital signature algorithms (DSAs)? Behind the Code episode 5 explores their evolution and role in securing everything from email to blockchains.
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### QRL Zond beta-testnet v1

{{< image "./images/h.zond.png" >}}

We’re very happy to have announced [QRL Zond beta-testnet](/blog/project-zond-qrls-next-generation-network-reaches-betatestnet), the second milestone in the revival of our proof-of-stake protocol with EVM (Ethereum Virtual Machine) smart contract compatibility. 

This current release presents a pivotal moment for blockchain developers eager to delve into the realm of decentralized applications (dApps). Finally, developers can unlock the potential of this release by leveraging its core features, particularly its compatibility with the Ethereum Virtual Machine (EVM) for smart contracts. This compatibility streamlines the development process, allowing developers to seamlessly integrate or migrate existing Ethereum-based dApps or create new ones tailored to this network. Additionally, the availability of a comprehensive web3 API opens up a myriad of possibilities, empowering developers to interact with the blockchain and its underlying functionalities in a more intuitive and efficient manner.

To get started, be sure to visit the [Test Zond website](https://test-zond.theqrl.org). There, you’ll find information on getting started with QRL Zond with more tutorials and guides in the pipeline. 

**AMA - QRL Zond with lead developer Kaushal Kumar Singh**

If you haven't already, be sure to catch our recent [AMA episode featuring Kaushal Kumar Singh](https://www.youtube.com/watch?v=aIBquAnUFo4), the lead developer behind the QRL Zond beta-testnet.

{{< youtube "aIBquAnUFo4" >}}

During the episode, Kaushal gives an insightful overview of the QRL Zond beta-testnet, emphasizing its stability in version 1 and its role in providing a glimpse of what the QRL proof-of-stake node will entail for the community. He delves into the nuances between the go-zond and qrysm nodes, as well as the uptime requirements for running a validator node.


**The Quantum Resistant Ledger Unveils Beta-Testnet of Zond: A Quantum Secure, Proof-of-Stake Blockchain**

> ZUG, Switzerland, Jan. 15, 2024 /PRNewswire-PRWeb/ -- In 2016, QRL set out on a mission to create a blockchain that would remain secure even in the face of advancements in quantum computing which will, in future, compromise the security of classical Elliptical Curve Cryptography, the encryption method employed by 99% of other blockchains. Codenamed Zond, this new Proof-of-Stake Beta-network, with its quantum-proof design, brings this vision into touching distance. Already running a quantum-secure Proof-of-Work mainnet for over 5 years, QRL is nonetheless incredibly excited by the delivery of Zond to this stage. Zond brings not just a change of consensus mechanism but a wholesale change in capability: the ability to run smart contracts employing cryptography that will endure even as the world moves into the quantum age... [read more](https://www.prweb.com/releases/the-quantum-resistant-ledger-unveils-beta-testnet-of-zond-a-quantum-secure-proof-of-stake-blockchain-302034308.html)

## Advocacy: History of Cryptography: Behind The Code - Episode 5 

{{< youtube "UnApvzz1IAw" >}}

[Behind the Code - Episode 5](https://www.youtube.com/watch?v=UnApvzz1IAw) is an introduction to the history and development of digital signature algorithms (DSAs) in the field of cryptography. DSAs are used to verify the authenticity and integrity of digital documents and transactions. 

They function through a set of private and public keys, where the private key is used to create a signature and the public key is used for verification. DSAs play a crucial role in secure email transmissions, document signing, online banking, and blockchain technology, such as Bitcoin. However, the emergence of quantum computing poses a potential threat to the security of DSAs, and there is a need for the development of quantum safe cryptocurrencies to protect digital assets like QRL.

## Changelog

### theQRL/go-zond

**[Updated to new betanet genesis](https://github.com/theQRL/go-zond/pull/33)**
			
- [[92238](https://github.com/theQRL/go-zond/commit/96f0cbd995cedef72260252ca0cfdcac6e392238)] Updated to new betanet genesis		


**[Updated GPG Public key](https://github.com/theQRL/go-zond/pull/30)**
			
- [[9a317](https://github.com/theQRL/go-zond/commit/72ee8f17b800e8847b7e63d162e78315dd09a317)] Updated GPG Public key		


**[Revert to correct GPG key in .well-known/](https://github.com/theQRL/go-zond/pull/29)**
			
- [[0d3ce](https://github.com/theQRL/go-zond/commit/48ba6648c33821572f1956ab06217c321760d3ce)] Revert to correct GPG key in .well-known/		
- [[ebbcf](https://github.com/theQRL/go-zond/commit/bf8409452e4034018fdb22411d5b1c38074ebbcf)] Merge branch 'main' into main		


**[Repo tidy](https://github.com/theQRL/go-zond/pull/28)**
			
- [[2fb35](https://github.com/theQRL/go-zond/commit/bee5f37bae7120772a2576e5aac7924b4962fb35)] Repo tidy		


**[Updated README.md](https://github.com/theQRL/go-zond/pull/27)**
			
- [[94488](https://github.com/theQRL/go-zond/commit/9ea95d7a2df1a3479f325b85e060470dfc294488)] Updated README.md		


**[Updated betanet genesis + config + go-zond version](https://github.com/theQRL/go-zond/pull/26)**
			
- [[73ea9](https://github.com/theQRL/go-zond/commit/d14c114d045db94694280c014a86d4991f973ea9)] Updated version to v0.1.0		
- [[e0f1b](https://github.com/theQRL/go-zond/commit/f93e0334bb0255bf2be2b77adc7cf7845b6e0f1b)] Updated betanet genesis + config		


**[Updated GPG keys config for circleci](https://github.com/theQRL/go-zond/pull/24)**
			
- [[8531b](https://github.com/theQRL/go-zond/commit/8c6366240d73d59eee8b7df3ebb0fd5079d8531b)] Updated GPG keys config for circleci		


**[Add circle ci release workflow](https://github.com/theQRL/go-zond/pull/23)**
			
- [[c433c](https://github.com/theQRL/go-zond/commit/a0b6f3f61470f04a11f149dd261bc35a9f5c433c)] Add circle ci release workflow		
- [[59d5c](https://github.com/theQRL/go-zond/commit/b70cc992a6daca3e45969899880898be83059d5c)] internal/build/env: update code to identify CIRCLECI flow (#7)		


**[Updated genesis files](https://github.com/theQRL/go-zond/pull/22)**
			
- [[86e61](https://github.com/theQRL/go-zond/commit/4040db4a08da39704e1049f268b0c89f9fd86e61)] Updated genesis files		


**[Add deposit root precompiled contract](https://github.com/theQRL/go-zond/pull/19)**
			
- [[9b656](https://github.com/theQRL/go-zond/commit/08e95c29bda8d20878cdcb4c2cde7d04c7e9b656)] Add initial version		
- [[bb0b0](https://github.com/theQRL/go-zond/commit/0187971d84ea8c134d14d659a9cd35818a3bb0b0)] Review files		
- [[9a0ba](https://github.com/theQRL/go-zond/commit/3661e3ae80a0f240f2020d0f002abe107a29a0ba)] Merge pull request #4 from rgeraldes24/feature/deposit-root-op

Add deposit root precompiled contract		

### theQRL/qrysm

**[Fixed incorrect values in params & re-generated proto + ssz files](https://github.com/theQRL/qrysm/pull/60)**
			
- [[654ee](https://github.com/theQRL/qrysm/commit/15679679309d8c8a0feef255d8b82ae3116654ee)] Fixed incorrect values in params & re-generated proto + ssz files		


**[Replace prysm explorer url log with successful voluntary exit keys](https://github.com/theQRL/qrysm/pull/59)**
			
- [[8549f](https://github.com/theQRL/qrysm/commit/46552745a1c72ef52a63187abace8c5435a8549f)] Replace prysm explorer url log with successful voluntary exit keys (#11)		
- [[76f38](https://github.com/theQRL/qrysm/commit/f49846b6c93f207064031b5ea775f1c06ed76f38)] Merge branch 'theQRL:main' into main		


**[ToS edit](https://github.com/theQRL/qrysm/pull/58)**
			
- [[8a4f5](https://github.com/theQRL/qrysm/commit/e2307dbf41d355c46390530526fba7bc4518a4f5)] ToS edit		


**[Remove deprecated files](https://github.com/theQRL/qrysm/pull/54)**
			
- [[63b80](https://github.com/theQRL/qrysm/commit/f2fee2b26bbe28dae98f3c36b7934bc613b63b80)] Remove deprecated files (#10)		
- [[6a904](https://github.com/theQRL/qrysm/commit/5d8b3a2254e1edb6427ba5d871fdcb998b06a904)] Merge remote-tracking branch 'refs/remotes/origin/main'		


**[Revert to correct GPG key in .well-known/](https://github.com/theQRL/qrysm/pull/53)**
			
- [[b2557](https://github.com/theQRL/qrysm/commit/8ced5b82d4d0aec1bfb83781c2509abfef9b2557)] Revert to correct GPG key in .well-known/		
- [[6dc32](https://github.com/theQRL/qrysm/commit/1a6a008fbb384f6e88feb200525b0d6c1956dc32)] Merge branch 'main' into main		


**[Updated GPG Public key](https://github.com/theQRL/qrysm/pull/52)**
			
- [[ac2b4](https://github.com/theQRL/qrysm/commit/6b21ed108e77b31a99eaa71f883798ebe34ac2b4)] Updated GPG Public key		


**[circleci: include 'deposit' cmd in the release workflow (#9)](https://github.com/theQRL/qrysm/pull/51)**
			
- [[244e4](https://github.com/theQRL/qrysm/commit/395ac3418c73822dacd7d661a98d7679eb9244e4)] circleci: include 'deposit' cmd in the release workflow (#9)		


**[Repo tidy](https://github.com/theQRL/qrysm/pull/50)**
			
- [[25cb0](https://github.com/theQRL/qrysm/commit/e95d044d421d71ddc648365f7576c01fde825cb0)] Repo tidy		


**[Fix: Added extra line in bazelrc to fix circleci build issue](https://github.com/theQRL/qrysm/pull/48)**
			
- [[096b8](https://github.com/theQRL/qrysm/commit/b99538528bae735ff8d32e32256e788e26b096b8)] Fix: Added extra line in bazelrc to fix circleci build issue		


**[Updated Readme](https://github.com/theQRL/qrysm/pull/47)**
			
- [[84fee](https://github.com/theQRL/qrysm/commit/eacac1eb06e2c29fdb8e8606f199b314d4b84fee)] Updated Readme		


**[Fix toolchain name](https://github.com/theQRL/qrysm/pull/46)**
			
- [[b9620](https://github.com/theQRL/qrysm/commit/efb7c6957b042ef9dfaf4ed910c3b6c8669b9620)] Fix toolchain name		


**[term.ReadPassword fix for Windows](https://github.com/theQRL/qrysm/pull/45)**
			
- [[545fb](https://github.com/theQRL/qrysm/commit/84cc5bc8f3df2ee5e184a298ca8f405fa2f545fb)] term.ReadPassword fix for Windows		


**[Updated GPG config for circleci](https://github.com/theQRL/qrysm/pull/44)**
			
- [[83a1f](https://github.com/theQRL/qrysm/commit/afde30d6941c526c520beb798799b0eed0883a1f)] Updated GPG config for circleci		


**[Updated MinPerEpochChurnLimit to 10](https://github.com/theQRL/qrysm/pull/43)**
			
- [[abc3e](https://github.com/theQRL/qrysm/commit/712b71766b92179031d4aef6058bb14131aabc3e)] Updated MinPerEpochChurnLimit to 10		


**[Circle ci release flow + params update + replaced string literals](https://github.com/theQRL/qrysm/pull/42)**
			
- [[2b16b](https://github.com/theQRL/qrysm/commit/9419318bb7f76b2125cfbc35c741a563ecc2b16b)] Add circle ci release flow		
- [[d2aab](https://github.com/theQRL/qrysm/commit/a671dbe6f1ff55533af1d8955346cf769edd2aab)] Reduced EpochsPerEth1VotingPeriod to 2		
- [[3862c](https://github.com/theQRL/qrysm/commit/df474d724fd5fd32eec4b2548be4bfe80fd3862c)] Replaced Ethereum string literals with Zond		


**[Fixed string decoding issues in submit command](https://github.com/theQRL/qrysm/pull/35)**
			
- [[28125](https://github.com/theQRL/qrysm/commit/1a7194091c513fbc13cd2ab462d0f2d4b4828125)] Updated deposit contract address		
- [[b59e5](https://github.com/theQRL/qrysm/commit/63acc46293cb9e970c079afbd7e56fc7dc6b59e5)] Fixed issues related to hex string decoding		
- [[13942](https://github.com/theQRL/qrysm/commit/ee32a54368f3b51c817d62990bd2fd5199213942)] Added TODO comment		


**[Removed chainId from parameter as it is not required](https://github.com/theQRL/qrysm/pull/34)**
			
- [[b1a58](https://github.com/theQRL/qrysm/commit/6a0137272b11c1ec37936222fe84220ad9db1a58)] Removed chainId from parameter as it is not required		


**[Add submit cmd to the deposit cli](https://github.com/theQRL/qrysm/pull/33)**
			
- [[a57ab](https://github.com/theQRL/qrysm/commit/1a9935d6160af3eb970f3e30502cdba0cb5a57ab)] Add submit cmd to the deposit cli		
- [[7b6b1](https://github.com/theQRL/qrysm/commit/abf1f2697d0d649027c7d59e6521d872ed37b6b1)] Add missing pieces		
- [[a4f8f](https://github.com/theQRL/qrysm/commit/d5c91228681dea62640e93c68568b4e9d2ca4f8f)] Review gas fees		
- [[7a8e2](https://github.com/theQRL/qrysm/commit/105d50c82540d31dbaf05e3e62d819cec1e7a8e2)] Review desc and fix deposit flag		
- [[5cf75](https://github.com/theQRL/qrysm/commit/df6c354452297612cdbd0f96da6804c31f95cf75)] cmd/staking-deposit-cli/deposit/submit/deposit.go: fix args order		
- [[595cc](https://github.com/theQRL/qrysm/commit/909cce67084a8882b687a2587fc1da28254595cc)] Fix several issues around the hex formats		
- [[511d1](https://github.com/theQRL/qrysm/commit/59b9d47b8030608169f57e0467d38c89aa3511d1)] Fix several issues around the hex formats		
- [[32a81](https://github.com/theQRL/qrysm/commit/a378ef66657f8473cfa277cb60f779e999732a81)] cmd/staking-deposit-cli/deposit/main.go: remove duplicate		
- [[d31b4](https://github.com/theQRL/qrysm/commit/8719ecc8938698417c82f2778a2b392e15fd31b4)] cmd/staking-deposit-cli/deposit/main.go: remove deprecated arg		
- [[90802](https://github.com/theQRL/qrysm/commit/70a4485c4f06965ddc6b57c4d7ceeae131190802)] cmd/staking-deposit-cli/deposit/main.go: add correct deposit data root field and reviewed tx opts value		
- [[fc635](https://github.com/theQRL/qrysm/commit/a90516d836f78a79da53725f0c06abbf693fc635)] cmd/staking-deposit-cli/deposit/main.go: remove println		
- [[0610d](https://github.com/theQRL/qrysm/commit/584bd7ae5b9f7490110ccf7791ec56cec2f0610d)] Merge pull request #7 from rgeraldes24/fix/contract-deposit


**[Add working version of the contract package](https://github.com/theQRL/qrysm/pull/31)**
			
- [[cf3d8](https://github.com/theQRL/qrysm/commit/bf76f055064742dce8e3a8cf48a3531b139cf3d8)] Add working version of the contract package		
- [[6e7b8](https://github.com/theQRL/qrysm/commit/348d5ebaa8dd0a01399e19f16ef87ffd6e56e7b8)] Review files		
- [[1e3ab](https://github.com/theQRL/qrysm/commit/9b04503122a5531e22fc11958add23e2d561e3ab)] Add working version		
- [[f8c49](https://github.com/theQRL/qrysm/commit/8a3f91924e690549bdf422a948067035368f8c49)] Merge pull request #8 from rgeraldes24/fix/contract

Add working version of the contract package		


**[Added more logs during p2p connection + removed code blocked pruning of disconnected peer](https://github.com/theQRL/qrysm/pull/30)**
			
- [[cce1a](https://github.com/theQRL/qrysm/commit/f4a2914fca6d2f5527cb935baf129c96476cce1a)] Added more logs during p2p connection + removed code blocked pruning of disconnected peer		

### theQRL/qrypto.js

**[Add ESM support](https://github.com/theQRL/qrypto.js/pull/18)**
			
- [[c4331](https://github.com/theQRL/qrypto.js/commit/7b309bc8fb125b2ca877ecf82871fb22d72c4331)] Refactor to esm and use rollup to build cjs/esm dist files from single entry point		
- [[299e2](https://github.com/theQRL/qrypto.js/commit/e7f1d40b08b101da3d973873e7e8074034c299e2)] Fix randombytes pkg import		
- [[909d8](https://github.com/theQRL/qrypto.js/commit/fe13f6445a930e5dd36dd5478d0c455dc60909d8)] publish dir		
- [[869c4](https://github.com/theQRL/qrypto.js/commit/6114ab482c95794908f9a8f7b65febc72d2869c4)] per-output package.json		


### theQRL/theqrl.org

**[QRL Weekly, 2024-January-23](https://github.com/theQRL/theqrl.org/pull/396)**
			
- [[e6517](https://github.com/theQRL/theqrl.org/commit/1699f742aa78d3854a8367faf6026b04e33e6517)] Quantum news update		
- [[99e84](https://github.com/theQRL/theqrl.org/commit/31b5b5074cd15ba3137106b3c2a9f997d6d99e84)] QRL Weekly, 2024-January-23		
- [[f9fd7](https://github.com/theQRL/theqrl.org/commit/bd8720add0bfded39295025313cacba7f25f9fd7)] Script updates		
- [[9d020](https://github.com/theQRL/theqrl.org/commit/8132fc8da6f3b01ac789acf62b4c8c2c8e09d020)] Quantum news update		
- [[32e6b](https://github.com/theQRL/theqrl.org/commit/654d74aacdc54c761259333c68777a4996b32e6b)] QRL Weekly, 2024-January-30		
- [[8c9c0](https://github.com/theQRL/theqrl.org/commit/6f482ee0a452d132919d570cedbacdf40e78c9c0)] Replace "Partners" with "Team & Partners"		
- [[db47e](https://github.com/theQRL/theqrl.org/commit/1b3231b97653ec9ce485521e0af87239a63db47e)] Remove image from contributors list		
- [[6d46d](https://github.com/theQRL/theqrl.org/commit/f594e8cc8891886762c42380bf34d82f2076d46d)] Iain Wood Image		


**[QRL Weekly: Featuring QRL Zond beta-testnet v1 release, 2024-January-16](https://github.com/theQRL/theqrl.org/pull/395)**
			
- [[cab23](https://github.com/theQRL/theqrl.org/commit/6169fc79912356f922427e3f28d0862e6decab23)] Fix numbers on roadmap page (thanks otdto)		
- [[31896](https://github.com/theQRL/theqrl.org/commit/bd4823c76d54ef4d3a08abab992f392765331896)] Update quantum news		
- [[88603](https://github.com/theQRL/theqrl.org/commit/8302a43aed7290755679d7066c2c022e94588603)] QRL Weekly		
- [[4ca4c](https://github.com/theQRL/theqrl.org/commit/d814d8ea98c79f07f3bd415566beeeecf4f4ca4c)] Add QRL Zond beta-testnet release to QRL weekly		


**[QRL Zond beta-testnet release blog](https://github.com/theQRL/theqrl.org/pull/394)**
			
- [[e42c3](https://github.com/theQRL/theqrl.org/commit/f9562be7ae6c9e3757e717835949468123ce42c3)] QRL Zond Release Blog		


**[Remove CoinTiger from markets page](https://github.com/theQRL/theqrl.org/pull/393)**
			
- [[d7f83](https://github.com/theQRL/theqrl.org/commit/ccd6d5eadce6861fdf0190502c3a4735ed1d7f83)] Remove CoinTiger from markets page		


**[QRL Weekly](https://github.com/theQRL/theqrl.org/pull/392)**
			
- [[00664](https://github.com/theQRL/theqrl.org/commit/7a3248e0f0837a1324928ba40b7f62070f900664)] Process improvements		
- [[4a5e8](https://github.com/theQRL/theqrl.org/commit/08a61885b4adcd6566dc82a53cd519b8a2e4a5e8)] Quantum news update		
- [[1c76a](https://github.com/theQRL/theqrl.org/commit/2fa9b1ed4348e5019dbcbbfdfd79ef3e1971c76a)] Text revision		
- [[4fd96](https://github.com/theQRL/theqrl.org/commit/8bc0c6b0f4d1f4287aa528ac40d78a2648e4fd96)] QRL Weekly