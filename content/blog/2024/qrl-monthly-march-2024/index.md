---
layout: blog-post
slug: qrl-monthly-march-2024
date: 2024-05-09
author: "The QRL Core Contributors"
title: "QRL Monthly, March 2024"
summary: "Recently, QRL expanded its market presence by listing on [XT.COM](https://xt.com), offering multiple trading pairs and demonstrating its growing relevance in the crypto space. Alongside market expansion, QRL continues its technical prowess with advancements in the Qrysm and Go-Zond projects, focusing on comprehensive development and testing to ensure robust quantum resistance."
featured_image: header.png
categories:
  - technical
toc: true
---

## Highlights

### Primary Report, 2024

{{< image "./images/h.pr.png" >}}

Quantum Resistant Ledger (QRL) was established to address the potential threats quantum computing (QC) will pose to blockchain technology, which is presently widely reliant on quantum-vulnerable cryptography.

Amid widespread uncertainty in the expert community regarding the timeline and specific quantum capabilities required to challenge existing cryptographic defenses, QRL aims to provide a preemptive solution. The project, initiated with Dr. Peter Waterland’s whitepaper in 2016, strives to be a safeguard for the blockchain industry against the evolving quantum threat, positioning itself as a foundational technology for future innovations in the Quantum Age.

{{< button url="/blog/qrl-primary-report-2024/" text="Read the Report">}}

### New Listing on XT.com

{{< image "./images/h.xt.png" >}}

As of March 29, 2024, at 12:00 UTC, traders on XT.COM have gained the opportunity to trade QRL through various pairs, including QRL/USDT, QRL/USDC, QRL/BTC, and QRL/ETH. This range of trading pairs provides flexibility and options for investors, allowing them to choose the pair that best aligns with their trading strategies and currency preferences.

{{< button url="https://finance.yahoo.com/news/discover-qrl-quantum-resistant-ledger-125300622.html" text="View the release">}}


### Finale of History of Cryptography Series Released

In our final Episode #6, we conclude our series long journey through the history of cryptography from centuries old cryptography through present day technology (Bitcoin, Quantum Computing, & more).

Take a listen below

{{< youtube O0KWINxxy_M>}}

## QRL Zond Development

Significant progress on various fronts related to the Qrysm and Go-Zond projects. While the majority of unit and integration tests for Qrysm have been completed, there are still 20 to 30 tests pending. Refinements include refactoring Dilithium public key and signature lengths into the fieldparams package, removing obsolete stream methods, and renaming Qrysm v2 API services to v1. Additionally, the porting of trueblocks.io to support zond compatibility is ongoing, and there is active development on adding more unit tests for Qrysm and initiating tests for Go-Zond.

On the other hand, the team is also focused on enhancing P2P and state initialization code, particularly for Qrysm, with code reviews in progress. For Go-Zond, test development is underway alongside the implementation of offline functionality for the Zond web wallet. Efforts are also being made to introduce advanced sending settings, further demonstrating a comprehensive approach to refining and expanding the capabilities of both Qrysm and Go-Zond in the ecosystem.

## Quantum News

{{% qnews start="2024-03-01" end="2024-03-31" %}}

## Development Changelog

### theQRL/block-explorer

**[Update mining-pools.js](https://github.com/theQRL/block-explorer/pull/434)**
			
- [[06a3a](https://github.com/theQRL/block-explorer/commit/b1c0c32ab5dfbabb298c7d4e09f6ce01c6406a3a)] Update mining-pools.js

### theQRL/documentation

**[Api rework](https://github.com/theQRL/documentation/pull/27)**
			
- [[f9d57](https://github.com/theQRL/documentation/commit/54136aff9310edbfb7359f153e0bb3cedfbf9d57)] Fix github edit link		
- [[c26c3](https://github.com/theQRL/documentation/commit/3d13936cba118f7bc6825477e19fa234b6bc26c3)] Private Network Addition		
- [[aad65](https://github.com/theQRL/documentation/commit/79de0a2e779865389e8cee04adc0c39ca2daad65)] Adding testnet-genesis file		
- [[2779c](https://github.com/theQRL/documentation/commit/194793e780395c7a22ae474a7d18d5791d92779c)] Add keybase.io integration page and assets		
- [[99d4b](https://github.com/theQRL/documentation/commit/9e926bcb6a877e7b8cb448f8da4603007f099d4b)] Update github edit link		
- [[cab39](https://github.com/theQRL/documentation/commit/a32e28a493a43ff7065d092550b64d04bc3cab39)] Add keybase, private network, and pool setup docs		
- [[04615](https://github.com/theQRL/documentation/commit/8b869c2b25f7f32dd52c8b107a2b1fa18b404615)] fix slug		
- [[9db82](https://github.com/theQRL/documentation/commit/b3c9207210e580739bf747875f335ef89bc9db82)] Remove broken links		
- [[81d02](https://github.com/theQRL/documentation/commit/60ba441f93c725d9dfc4fb04e7cfef0de6c81d02)] Fix broken links		
- [[82547](https://github.com/theQRL/documentation/commit/58bc8af58ee3dbd3d1426450e8427c865ec82547)] Merge branch 'main' into post-release-cleanup		
- [[f36f7](https://github.com/theQRL/documentation/commit/166f291135550a3203c2aa05c20b0d019abf36f7)] Merge pull request #4 from fr1t2/post-release-cleanup	
- [[37092](https://github.com/theQRL/documentation/commit/b890bf9e6cf4bbd884443a67641c8b69f7637092)] Fix github edit link		
- [[bdcec](https://github.com/theQRL/documentation/commit/b6c2191a724caa5c5148f3880ddf3a2cab3bdcec)] Private Network Addition		
- [[a1a23](https://github.com/theQRL/documentation/commit/2d884bbce1164721ae4ff94516912510288a1a23)] Adding testnet-genesis file		
- [[23242](https://github.com/theQRL/documentation/commit/860162298bce7f2da695abb9923c3cadd4f23242)] Add keybase.io integration page and assets		
- [[b9111](https://github.com/theQRL/documentation/commit/3f39072f6d3be6d465efb688aaa3d21facab9111)] Update github edit link		
- [[f6436](https://github.com/theQRL/documentation/commit/abbc98ccd70213a68f05cf85af6d34b97b4f6436)] Add keybase, private network, and pool setup docs		
- [[782f2](https://github.com/theQRL/documentation/commit/24680fd5de2ebc133b6de8c63b9707056ff782f2)] fix slug		
- [[a2116](https://github.com/theQRL/documentation/commit/41998c70dc8d82e00e985518676d9119342a2116)] Remove broken links		
- [[81847](https://github.com/theQRL/documentation/commit/a43ad1abfc31dd647c231211f115b2388b281847)] Fix broken links		
- [[6c429](https://github.com/theQRL/documentation/commit/4ff90270fd6186dc5f954422421f00740f56c429)] Merge branch 'main' of https://github.com/fr1t2/documentation		
- [[ed66d](https://github.com/theQRL/documentation/commit/fe61fc078c80626d9b79ed5a1b742cab5a0ed66d)] Update GetBlock		
- [[fb510](https://github.com/theQRL/documentation/commit/d0ea0df544b96fac8109dffc05870ebfa42fb510)] Rework formatting for request and response layouts		
- [[ebca7](https://github.com/theQRL/documentation/commit/09a50756f52d6e10b61b38a8d9ef6e6a467ebca7)] Merge branch 'main' into api-rework		

**[More broken link fixes](https://github.com/theQRL/documentation/pull/24)**
			
- [[b4013](https://github.com/theQRL/documentation/commit/5acf3a888c63eea9124b98e30ec0cecda00b4013)] More broken link fixes		


**[Cleanup & minor fixes before final documentation push](https://github.com/theQRL/documentation/pull/22)**
			
- [[85edc](https://github.com/theQRL/documentation/commit/90da4af85ee179eecbb5d2cba8caf74e34b85edc)] Add MIT License		
- [[3ab4b](https://github.com/theQRL/documentation/commit/87d902ca8bfcd8b2b9fdfe3b9dd1cf5e68f3ab4b)] Add where to find QRL Zond documentation		
- [[2d052](https://github.com/theQRL/documentation/commit/97abeac033632203eb30f9033f4f665294d2d052)] Removed document status. Resolves #21		
- [[f718b](https://github.com/theQRL/documentation/commit/adfb25fdc64f7da197dd169f4775911d977f718b)] Adjust footer links + change GitHub link. Resolves #20 and #19		
- [[5c1a3](https://github.com/theQRL/documentation/commit/c5b21e65cd0e8f6624ec5b1a6c07acb895b5c1a3)] Remove errant document status caution		
- [[adaaa](https://github.com/theQRL/documentation/commit/660b231958af2d0e2e19693da4e1dd1c0eeadaaa)] Link fixes. Mostly resolves #23		


**[Search bar theme](https://github.com/theQRL/documentation/pull/18)**
			
- [[626c4](https://github.com/theQRL/documentation/commit/c75c930a50bd7be4a0959108b78ea08a9e8626c4)] Start of theming search		
- [[1eb65](https://github.com/theQRL/documentation/commit/f3a28e8b2d27c333b8607bd5badc60802281eb65)] More theming		
- [[36e06](https://github.com/theQRL/documentation/commit/caf01993bee2104bdc6a23ab6fe15a52ae636e06)] Start search results		
- [[ac5dd](https://github.com/theQRL/documentation/commit/8d8a38bb25a9f8a942c9cef61ba5caec336ac5dd)] missing theme specificity		


**[Final push QRL documentation revision](https://github.com/theQRL/documentation/pull/17)**
			
- [[5067e](https://github.com/theQRL/documentation/commit/3fc2c25f2fe0092822966371910ab4191795067e)] Cleanup and removal of cruff		
- [[1a250](https://github.com/theQRL/documentation/commit/d3a240375d5188bc61536bc45044a217d331a250)] Cleanup and blog removal		
- [[3b312](https://github.com/theQRL/documentation/commit/e0b0764abb60ae00a71702c1aa6c84463093b312)] Cleanup old blog and cruff		
- [[ae8cb](https://github.com/theQRL/documentation/commit/4fac5a341ec88fb38e1a67fcd96ab34a8bcae8cb)] Remove depreciated page		
- [[4677f](https://github.com/theQRL/documentation/commit/90ecd9712e921a77ec5c012313cf272bcbc4677f)] Remove depreciated page links		
- [[0178c](https://github.com/theQRL/documentation/commit/65f7fc576f23463c7b63a3711bda318d6eb0178c)] Update to include key index clarification		
- [[98aa4](https://github.com/theQRL/documentation/commit/dc4a47f3b23296543e0e8b836bfb1e8f9c798aa4)] Rework some colors and overall css cleanup		
- [[b5ee9](https://github.com/theQRL/documentation/commit/1d99500bf4bec6313d8914a34f31a33c6c4b5ee9)] Rework some colors and overall css cleanup		
- [[573b2](https://github.com/theQRL/documentation/commit/d5f0873248d06a5bbcf9b65fc1bae179d38573b2)] Remove onchain-vote		
- [[b96ea](https://github.com/theQRL/documentation/commit/44ef8f0bb4a8c50e58e6aadd73166b12a6ab96ea)] Cleanup		
- [[f5622](https://github.com/theQRL/documentation/commit/e94b5f3b6ef4ea54d08f034b8398c9a8971f5622)] Cleanup miningStatus and added print() to each python example for clarity		
- [[a8195](https://github.com/theQRL/documentation/commit/6791095afad6fd910ec0c6a6c212f630157a8195)] API Final Review		
- [[cde2e](https://github.com/theQRL/documentation/commit/4d585df4605557af320d78f0bdbfd49ea4fcde2e)] Additional slave keys content		
- [[de41a](https://github.com/theQRL/documentation/commit/7733a7c70c7469b305e12ea33d12a4957a4de41a)] QRL Addresses to final review		
- [[12d4d](https://github.com/theQRL/documentation/commit/f86c8de21c042127075be583e800c92cc3212d4d)] Final review		
- [[779b9](https://github.com/theQRL/documentation/commit/2bb59eac4d65e032969e62fbb2ad2345e2d779b9)] Fundamentals final review		
- [[0f4f2](https://github.com/theQRL/documentation/commit/5981f4bd6ef6fc019a60da255e60ad4f8470f4f2)] final review		
- [[7bb69](https://github.com/theQRL/documentation/commit/c19c80f82c95e3073ae36b773c44096e9247bb69)] /developers/helpers to /build/helpers for consistency		
- [[85ab1](https://github.com/theQRL/documentation/commit/7756f9926e370853c711fc6bea310b41c2485ab1)] Final review and cleanup		
- [[961cd](https://github.com/theQRL/documentation/commit/4b18db302bc0670c855df528e00e7dfdb54961cd)] Spelling and cleanup		
- [[e5987](https://github.com/theQRL/documentation/commit/34d4727327e1d5d0785c95c02558bbb4271e5987)] remove unused draft		
- [[dbd31](https://github.com/theQRL/documentation/commit/9c2a33ce0747442c1fb4fd34b29f8590561dbd31)] Spelling and cleanup		
- [[56296](https://github.com/theQRL/documentation/commit/2c7d4513a9af074cae8dd5e663f6c36760c56296)] remove unused draft		
- [[6fcec](https://github.com/theQRL/documentation/commit/f29d26122de3b374d919aec14b3d6ec7a306fcec)] Spelling and cleanup		
- [[b91fe](https://github.com/theQRL/documentation/commit/2953c66dfc8f3a6a0d9a89ec29933baa7fab91fe)] Spelling and cleanup		
- [[495c1](https://github.com/theQRL/documentation/commit/134dfbc701ddf8ec7d593c09a2f41dc696c495c1)] Merge pull request #1 from fr1t2/cleanup
- [[ac0cb](https://github.com/theQRL/documentation/commit/3b0e3b32f94196f51e3dba170d4ddcfde60ac0cb)] Updates cleanup and spelling		
- [[9c37e](https://github.com/theQRL/documentation/commit/f33872150ea9bc7daf1a4313612e3adfc899c37e)] Merge pull request #2 from fr1t2/cleanup
- [[32844](https://github.com/theQRL/documentation/commit/4e19ea11f6af4fcc8b1ae84557fa07d533232844)] Merge branch 'main' of https://github.com/fr1t2/documentation		
- [[b36c1](https://github.com/theQRL/documentation/commit/5d3c8f007ed1e6ab5dc19e372e8e39a5eafb36c1)] Merge pull request #3 from fr1t2/conflict

### theQRL/theqrl.org

**[QRL Weekly, 2024-March-19](https://github.com/theQRL/theqrl.org/pull/404)**
			
- [[9d22c](https://github.com/theQRL/theqrl.org/commit/b524425d0a3555fffc88fe0d178c2d011399d22c)] QRL Weekly, 2024-March-19		

**[QRL Weekly](https://github.com/theQRL/theqrl.org/pull/403)**
			
- [[8501d](https://github.com/theQRL/theqrl.org/commit/52f61ab886df9c1881ce800bb420f663e478501d)] Add Craig C		
- [[b72d0](https://github.com/theQRL/theqrl.org/commit/25e5cde6226449977a05c2febc21ab65494b72d0)] Update Quantum News		
- [[4a6fc](https://github.com/theQRL/theqrl.org/commit/cfeb01b79e0debc890857d17d70062b63134a6fc)] Add button shortcode partial		
- [[c663c](https://github.com/theQRL/theqrl.org/commit/1fa741d5ff85d9a26bff56df3bdd223eaa2c663c)] Add quantum news assets		

**[New Content: QRL Primary Report](https://github.com/theQRL/theqrl.org/pull/402)**
			
- [[7b305](https://github.com/theQRL/theqrl.org/commit/c40946e9a99ee1322540fc254ce9d3e5b967b305)] New tokenomics page		
- [[412f7](https://github.com/theQRL/theqrl.org/commit/ddb9ae73ccb8be822851e745aacd8008840412f7)] QRL Content Improvements (Document Blogs + Featured Section)		
- [[5aeec](https://github.com/theQRL/theqrl.org/commit/f7f4128c696b5a05f61d8c1b4822211b5185aeec)] QRL Weekly		
- [[e0ca1](https://github.com/theQRL/theqrl.org/commit/df99fede38a850d857899c67bc62073253de0ca1)] Quantum news updates		
- [[33223](https://github.com/theQRL/theqrl.org/commit/3b3b184594207159f1e275f21558daad92533223)] Further tokenomics page additions		
- [[2d37d](https://github.com/theQRL/theqrl.org/commit/f01707477c612d1f781e9398b1da56029d92d37d)] New Content: QRL Primary Report		
- [[8df15](https://github.com/theQRL/theqrl.org/commit/72e649d80fc749435aa9142fe60ecb682508df15)] QRL Primary Report Content x2		
- [[562ff](https://github.com/theQRL/theqrl.org/commit/13259d873067b2f239f868e9c33534be51e562ff)] UI Fixes		
- [[ba978](https://github.com/theQRL/theqrl.org/commit/6446488a914e761bb6adea25cd3b1640f65ba978)] Ledger Nano X/S+ download specification fix		
- [[d1a72](https://github.com/theQRL/theqrl.org/commit/e14077f5a162ac9fb8cfa1aab2b551fb8e6d1a72)] Add monthly blog to weekly update		

**[QRL Monthly, February 2024](https://github.com/theQRL/theqrl.org/pull/401)**
			
- [[8e4b3](https://github.com/theQRL/theqrl.org/commit/8372b9900d42f1f578338834f3939bf0a818e4b3)] QRL Monthly, February 2024		
- [[85e15](https://github.com/theQRL/theqrl.org/commit/e1f7e1cc6ace9a44e8d6496360bc7595d6d85e15)] QRL Weekly Updates		
- [[839d1](https://github.com/theQRL/theqrl.org/commit/3cf0de47fe9a4fb1c047bfd3809c611d0fe839d1)] README Update		
- [[79971](https://github.com/theQRL/theqrl.org/commit/2b1b09ae3d9dc5f1595b3c26602fff52e7079971)] Quantum news updates		
- [[c0fbb](https://github.com/theQRL/theqrl.org/commit/843d9e7fe0227b43ebff5a911a450527134c0fbb)] Add LBank to markets page		
- [[51156](https://github.com/theQRL/theqrl.org/commit/ec1bdf909b64a8aee34d1e69e3e637c19e151156)] Add quantum news assets		
- [[1df57](https://github.com/theQRL/theqrl.org/commit/98a24004e11f1041efc6a9138e34fd7b29c1df57)] Adjustments to QRL Monthly blog	