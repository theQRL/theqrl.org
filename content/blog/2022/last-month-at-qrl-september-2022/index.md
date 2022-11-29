---
layout: blog-post
slug: last-month-at-qrl-september-2022
date: 2022-10-03
author: "Jack Matier"
title: "Last Month at QRL - September 2022"
summary: "The official Public Devnet Launch of Zond with EVM Smart Contracts and Proof-of-Stake! A number of interesting ideas were presented at the first real-world QRL Hackathon in 2022, and the community was fantastic. The winning entry, QRLPay, won with being a simple, quick-to-deploy, lightweight QRL payment processor and woocommerce website that connects to your own QRL node"
featured_image: header.png
categories:
  - technical
  - events
features:
  - proof-of-stake
toc: true
---

## Highlights

### Zond Public Devnet Released!

{{< image "./images/h.zond.png" >}}

Last month we were happy to release the **QRL Zond public devnet**, bringing post-quantum resistant Web3 and EVM compatible smart-contracts on top of a Proof-of-Stake consensus layer. 

This development has built off of our years of experience and research in the blockchain development space and represents a shift to truly programmable and efficient post-quantum secure finance available to anybody. There is now the potential for on-chain escrow, as well as the provision of loans, insurance, mortgages, and various other improved financial instruments. Compatibility with Ethereum through Web3 and EVM means that the migration learning curve is small.

You can read our ["Introducing a powerful post-quantum safe public devnet pre-release with Ethereum Web3 ecosystem compatibility"](/blog/zond-public-devnet-prerelease/) which covers many of the basics.

Our [Zond Documentation](https://zond-docs.theqrl.org) is also continuously being fleshed out, as well.

### The QRL Hackathon 2022

{{< image "./images/h.hackathon.png" >}}

Our first in-person QRL Hackathon 2022 was broadly successful with many interesting entries and many more amazing community members!

**QRLPay** walked off with the first prize of 40,000 QRL which combines a simple, easily deployable lightweight QRL payment processor that connects to your own QRL node and a woocommerce website. This was spearheaded by a Discord member 0xFF, with runforest handling the presentation.

Other great entries includes a Mobile Wallet, PoS/Validator dashboard, and better support for the Raspberry Pi! More about these entries can be found in our [QRL Hackathon 2022 entries blog](/blog/qrl-hackathon-2022-entries/).

Were you there, or did you have difficulty making it? Be sure to fill out our [QRL Hackathon 2022 survey](https://forms.gle/KC7DeX3oJX6hRheY8) which will help guide us shortlisting our next hackathon location and activities!

While the event was organised by the team at QRL, it wouldn't have been possible without the community members and contributors that joined us. We really look forward to all the future events together!

{{< image "./images/group.jpg" >}}

## Quantum News

{{% qnews start="2022-09-01" end="2022-10-01" %}}

## Changelog

### theQRL/go-libp2p-qrl

**[Fix sk and pk check for libp2p dilithium.go + updated go-qrllib version](https://github.com/theQRL/go-libp2p-qrl/pull/8)**
			
- [[0e98d](https://github.com/theQRL/go-libp2p-qrl/commit/eee033eb7cf0d018a9f29bdac1f55c14a880e98d)] Fix sk and pk check for libp2p dilithium.go + updated go-qrllib version		


**[Dilithium stores seed and recover the dilithium keys from seed stored in file](https://github.com/theQRL/go-libp2p-qrl/pull/7)**
			
- [[38a54](https://github.com/theQRL/go-libp2p-qrl/commit/06c48aa7eef3a92c041320885daa567e58238a54)] Dilithium stores seed and recover the dilithium keys from seed stored in file		


**[Updated go-qrllib version](https://github.com/theQRL/go-libp2p-qrl/pull/6)**
			
- [[d16e8](https://github.com/theQRL/go-libp2p-qrl/commit/5591ff5fe0d37fb44b1961a93cddabc572bd16e8)] Updated go-qrllib version		


**[Migration from qrllib to go-qrllib](https://github.com/theQRL/go-libp2p-qrl/pull/5)**
			
- [[d650c](https://github.com/theQRL/go-libp2p-qrl/commit/08847320e32c908a8b27cd57461fa0de00bd650c)] Migration from qrllib to go-qrllib		

### theQRL/go-qrllib

**[Added prefix "0x" for GetHexSeed in XMSS](https://github.com/theQRL/go-qrllib/pull/22)**
			
- [[9cb68](https://github.com/theQRL/go-qrllib/commit/4bc3c2b17da4a41db8c2f81621bdceca4769cb68)] Added prefix "0x" for GetHexSeed in XMSS		


**[Updated unit test and added 0x prefix in hex string](https://github.com/theQRL/go-qrllib/pull/21)**
			
- [[c2770](https://github.com/theQRL/go-qrllib/commit/a9cc205b35ce9d3cd75efd5d9e280ff9538c2770)] Updated unit test and added 0x prefix in hex string		


**[support to generate js library for dilithium + added prefix 0x for all hex string](https://github.com/theQRL/go-qrllib/pull/20)**
			
- [[434a9](https://github.com/theQRL/go-qrllib/commit/4b82b94f7abfcd7d9e44b84c437b5eec335434a9)] gopherjs support to generate js library for dilithium		
- [[85256](https://github.com/theQRL/go-qrllib/commit/68c2f5bfd3a2cf315a57675b054e3f53e5e85256)] Added prefix 0x for all hex string and relevant support as param		


**[Added Signature type check in IsValidXMSSAddress + Unit Tests](https://github.com/theQRL/go-qrllib/pull/18)**
			
- [[131aa](https://github.com/theQRL/go-qrllib/commit/acfdb32b491952b58a720048f44e5f2836e131aa)] Added Signature type check in IsValidXMSSAddress + Unit Tests		


**[Added more unit tests for Dilithium](https://github.com/theQRL/go-qrllib/pull/17)**
			
- [[ceda7](https://github.com/theQRL/go-qrllib/commit/6ccc0f48f2830552a9e8fda079d8ec16d9fceda7)] Added more unit tests for Dilithium		


**[Added functions for Dilithium Wallet + Unit Tests + Refactoring](https://github.com/theQRL/go-qrllib/pull/16)**
			
- [[807ca](https://github.com/theQRL/go-qrllib/commit/e9807a36d0f8c9a9f3945accf21d4379c98807ca)] Added functions for Dilithium Wallet + Unit Tests + Refactoring		


**[Updated signature type and address format for both xmss and dilithium](https://github.com/theQRL/go-qrllib/pull/15)**
			
- [[83b13](https://github.com/theQRL/go-qrllib/commit/0b6a38789d7b09c94796c1b3ff981364e0483b13)] Updated signature type and address format for both xmss and dilithium		


**[Fix: SignatureType calculation in descriptor](https://github.com/theQRL/go-qrllib/pull/14)**
			
- [[f9670](https://github.com/theQRL/go-qrllib/commit/77f90d05b0b03b8af0a5cd0b9e73577cfd9f9670)] Fix: SignatureType calculation in descriptor		


**[Added Dilithium address support with Unit Tests](https://github.com/theQRL/go-qrllib/pull/13)**
			
- [[4bb87](https://github.com/theQRL/go-qrllib/commit/7397b00185e35e68ff14ce4164e0254a5374bb87)] Added Dilithium address support with Unit Tests		


**[QVM compatible XMSS Address format](https://github.com/theQRL/go-qrllib/pull/12)**
			
- [[7c71e](https://github.com/theQRL/go-qrllib/commit/85984cd5f8be16f59463e6a8b57ab903d597c71e)] QVM compatible XMSS Address format		


**[Fix: Replacing math/rand to crypto/rand](https://github.com/theQRL/go-qrllib/pull/11)**
			
- [[7279d](https://github.com/theQRL/go-qrllib/commit/32b5fe01824f72d47160187b83506f0cde57279d)] Fix: Replacing math/rand to crypto/rand		


**[Replaced hard coded value to constant value](https://github.com/theQRL/go-qrllib/pull/10)**
			
- [[a0a47](https://github.com/theQRL/go-qrllib/commit/76ccf3e1cbb7a95920bdfbefc1b030490e7a0a47)] Replaced hard coded value to constant value		


**[Simplified XMSS Verify, added IsValidXMSSAddress function + Unit Tests](https://github.com/theQRL/go-qrllib/pull/9)**
			
- [[a0de4](https://github.com/theQRL/go-qrllib/commit/e690a28f50d1b9274abf2e8a36c8fb6a376a0de4)] Simplified XMSS Verify, added IsValidXMSSAddress function + Unit Tests		


**[Code cleanup](https://github.com/theQRL/go-qrllib/pull/8)**
			
- [[4c3de](https://github.com/theQRL/go-qrllib/commit/7c5c2dcf37d4aa2f746032015ad0fcfcb234c3de)] Code cleanup		


**[Added GetExtendedSeed, GetHexSeed, GetMnemonic functions + Unit Tests](https://github.com/theQRL/go-qrllib/pull/7)**
			
- [[26c16](https://github.com/theQRL/go-qrllib/commit/aa9d29d052c62e0df1ba6cd3005b93e137b26c16)] Added GetExtendedSeed, GetHexSeed, GetMnemonic functions + Unit Tests		


**[Added Unit Tests for MnemonicToBin and BinToMnemonic](https://github.com/theQRL/go-qrllib/pull/6)**
			
- [[75fdf](https://github.com/theQRL/go-qrllib/commit/e9117bffe4ede6c3f176faedb960c04dd4575fdf)] Added Unit Tests for MnemonicToBin and BinToMnemonic		


**[Added BinToMnemonic and MnemonicToBin functions](https://github.com/theQRL/go-qrllib/pull/5)**
			
- [[da117](https://github.com/theQRL/go-qrllib/commit/86459ea41fd1aa8ad7aa525ff4bfe3bbdffda117)] Added BinToMnemonic and MnemonicToBin functions		


**[Added NewXMSSFromHeight function](https://github.com/theQRL/go-qrllib/pull/4)**
			
- [[5811d](https://github.com/theQRL/go-qrllib/commit/c95fbd98bd6f5b3e964b5c4160cde47726d5811d)] Added NewXMSSFromHeight function		


**[Go implementation of Dilithium with Unit Tests](https://github.com/theQRL/go-qrllib/pull/3)**
			
- [[75c30](https://github.com/theQRL/go-qrllib/commit/ee922946121fe15357265eca01b7bff993375c30)] Go implementation of Dilithium with Unit Tests		


**[Changed function names](https://github.com/theQRL/go-qrllib/pull/2)**
			
- [[2039e](https://github.com/theQRL/go-qrllib/commit/c19a5d7f487b941955a883f5a659640f3852039e)] Changed function names		


**[Go Implementation of XMSS Fast with Unit Test](https://github.com/theQRL/go-qrllib/pull/1)**
			
- [[8af76](https://github.com/theQRL/go-qrllib/commit/5dfa8aa2f3f77e88f522a4bd8e29e194eff8af76)] Added go.mod		
- [[c3a90](https://github.com/theQRL/go-qrllib/commit/acabd25b030b9d8281da819983fdf1c0704c3a90)] Go Implementation of XMSS Fast with Unit Test		

### theQRL/qrllib

**[Fixed: Dilithium extract_message & extract_signature](https://github.com/theQRL/qrllib/pull/180)**
			
- [[5b7e5](https://github.com/theQRL/qrllib/commit/3b344657565aed3a4328db31e3bdfe0ec555b7e5)] Fixed: Dilithium extract_message & extract_signature		
- [[0a902](https://github.com/theQRL/qrllib/commit/d0d7848bcfa95382e8a3cab87a50ba6482b0a902)] Fix Go & Python Unit Tests		
- [[df580](https://github.com/theQRL/qrllib/commit/0c16d4377248999d134a0c781374f939be9df580)] Fix: Python Unit Tests		
- [[7e062](https://github.com/theQRL/qrllib/commit/649043186996af0d2dffb327af04bc023b27e062)] Pin to a specific (working)] node version in CI build_emscripten job		
- [[3bba5](https://github.com/theQRL/qrllib/commit/4661e8ab7f36fc8424f8863a361b3aed4f13bba5)] Merge pull request #1 from jplomas/master

Pin to a specific (working)] node version in CI build_emscripten job		

### theQRL/qryptonight

**[Modification for Raspberry Pi ](https://github.com/theQRL/qryptonight/pull/91)**
			
- [[1222b](https://github.com/theQRL/qryptonight/commit/1994c923ac5fecd533937f1693eb488ac1f1222b)] Update CMakeLists.txt		
- [[96d06](https://github.com/theQRL/qryptonight/commit/f69f1cdbf2dc5995d39164ada599dc9ac3a96d06)] Update qryptonight.cpp		
- [[3b987](https://github.com/theQRL/qryptonight/commit/cc6e01c532093d2ee116065d3c427c94ad53b987)] Update qryptonight.h		
- [[890d1](https://github.com/theQRL/qryptonight/commit/3f3d456dd772710f93dbcb0fe2a680d9c00890d1)] Update .gitmodules		
- [[f1e34](https://github.com/theQRL/qryptonight/commit/e66ca42ff0949449ffd5daf9c29e8a76a6df1e34)] Update .gitmodules		
- [[5c5fe](https://github.com/theQRL/qryptonight/commit/585344c7e9027fb7e78556f9b93c49384995c5fe)] Update .gitmodules		
- [[15c57](https://github.com/theQRL/qryptonight/commit/ed4f0a744e9ec6572b9056c7b044c44ff3315c57)] Add py-cryptonight submodule		
- [[b168b](https://github.com/theQRL/qryptonight/commit/bbd2a2b9a815cadaafdfad808e82bb3fe2bb168b)] Add py-cryptonight submodule		
- [[2986b](https://github.com/theQRL/qryptonight/commit/03aadfb114d569d4450d38c4ba4a6a428652986b)] Update qryptonight.h		
- [[693f8](https://github.com/theQRL/qryptonight/commit/436dfd8ebcd082792a417a1f54f286a1413693f8)] Replace submodule		

### theQRL/qrandomx
### theQRL/theqrl.org

**[Fix API links on homepage](https://github.com/theQRL/theqrl.org/pull/322)**
			
- [[79a48](https://github.com/theQRL/theqrl.org/commit/19c830f727c7df3d58033b07acb07ade52979a48)] Fix API links on homepage		
- [[ec2ae](https://github.com/theQRL/theqrl.org/commit/35825f9c0aeb4ed859e673ae7ec68a63e29ec2ae)] Merge branch 'theQRL:main' into main		


**[Adjustments / 0xFF](https://github.com/theQRL/theqrl.org/pull/321)**
			
- [[0c159](https://github.com/theQRL/theqrl.org/commit/b8e01086e5f8dbe261683f0b94d513beeb70c159)] Adjustments / 0xFF		


**[Blog: QRL Hackathon 2022 Entries](https://github.com/theQRL/theqrl.org/pull/320)**
			
- [[404ab](https://github.com/theQRL/theqrl.org/commit/a05cbd6cc2486256fc2edfba0a55db4e0a1404ab)] Blog: QRL Hackathon 2022 Entries		


**[team tweak](https://github.com/theQRL/theqrl.org/pull/319)**
			
- [[b8518](https://github.com/theQRL/theqrl.org/commit/cbf422878e5922bf86547b045ce63ea143fb8518)] JP core -> advisor		
- [[c93bb](https://github.com/theQRL/theqrl.org/commit/0e083a3a97c47e53141bd02dd4d4c9a357fc93bb)] Merge branch 'theQRL:main' into main		


**[New blog: Zond public devnet pre-release](https://github.com/theQRL/theqrl.org/pull/318)**
			
- [[1a46e](https://github.com/theQRL/theqrl.org/commit/79a5b96b119d47130cfef8fe21abb0b1ce71a46e)] Fix to last month blog		
- [[e86b8](https://github.com/theQRL/theqrl.org/commit/86a2abd069c60c93a6ac134879fe9b32be0e86b8)] New blog: Zond public devnet pre-release		
- [[52a80](https://github.com/theQRL/theqrl.org/commit/067a8ae6f0727f610af2f572d2140e822d952a80)] Update features		


**[Add last month at QRL - August 2022 blog](https://github.com/theQRL/theqrl.org/pull/317)**
			
- [[44731](https://github.com/theQRL/theqrl.org/commit/fdcc84f7d413ef06ac11cfdfe424353a02144731)] Improve monthly blog initialisation		
- [[f435a](https://github.com/theQRL/theqrl.org/commit/60d9a8ecc55f92c46bb6fab474b6faa8f57f435a)] New GitHub updates generator		
- [[60f41](https://github.com/theQRL/theqrl.org/commit/5ca28e6ea6d4a9b317cdc8f53b73a83135c60f41)] Update quantum news file		
- [[e8d45](https://github.com/theQRL/theqrl.org/commit/5b0f9a90f3c3d74a841de08fac9a6b00894e8d45)] Add last month at QRL - August 2022 blog		


**[Add rewards section to the QRL Hackathon 2022 events page](https://github.com/theQRL/theqrl.org/pull/316)**
			
- [[e57a5](https://github.com/theQRL/theqrl.org/commit/91c28e11ac0126f4caa805ba498318e21b5e57a5)] Rule clarification		
- [[38817](https://github.com/theQRL/theqrl.org/commit/f7d3ef66dcd37d4167fba5b7326cfdae75a38817)] Add rewards section to the QRL Hackathon 2022 events page		


**[QRL Hackathon 2022 Begins!](https://github.com/theQRL/theqrl.org/pull/315)**
			
- [[8c6ab](https://github.com/theQRL/theqrl.org/commit/d061111ba1d95eee75260c9a58646c632168c6ab)] QRL Hackathon 2022 Begins!		
- [[4f67c](https://github.com/theQRL/theqrl.org/commit/fa6c72be157c41fbacbf1c41d5dad2437ca4f67c)] Date adjustments		
- [[877f7](https://github.com/theQRL/theqrl.org/commit/02eb147b20d51ec966108df620235be9845877f7)] Improved userflow + time		


**[Add last month in QRL blog for July 2022](https://github.com/theQRL/theqrl.org/pull/314)**
			
- [[c9fb1](https://github.com/theQRL/theqrl.org/commit/f4857d34b5da93836dd6a8342d5706991d4c9fb1)] Add last month in QRL blog for July		
- [[70944](https://github.com/theQRL/theqrl.org/commit/acea1cb163f7f2e514f3de7cae7bb6b389870944)] Update quantum news data file + shortcode		


**[Add Catalyx exchange](https://github.com/theQRL/theqrl.org/pull/313)**
			
- [[52554](https://github.com/theQRL/theqrl.org/commit/8bf2dad3d60e3dbaaf0f7aa251d7970160852554)] Add Catalyx exchange		


**[Remove Bittrex status message](https://github.com/theQRL/theqrl.org/pull/312)**
			
- [[297be](https://github.com/theQRL/theqrl.org/commit/49c1fa96308d17bb56e37f020c3822052fa297be)] Remove Bittrex status message		


**[Add thank you landing page for registration form.](https://github.com/theQRL/theqrl.org/pull/311)**
			
- [[e841a](https://github.com/theQRL/theqrl.org/commit/f560446dfc190de2590c1007e5685ad2fa2e841a)] Add thank you landing page for registration form.		
- [[aa44c](https://github.com/theQRL/theqrl.org/commit/db7afc850d4c72b2b8a8486e76fdf41e32caa44c)] Fix discord link		


**[New developer hire blog: Welcome Prajjawal!](https://github.com/theQRL/theqrl.org/pull/310)**
			
- [[0c362](https://github.com/theQRL/theqrl.org/commit/fb46eb269bf0f9a9c501568061c938d81390c362)] New Blog: What exactly is the quantum threat to Bitcoin?		
- [[13542](https://github.com/theQRL/theqrl.org/commit/9d9130deba3138cbe63875a3dbb1950fb2d13542)] Summary adjustment		
- [[9deed](https://github.com/theQRL/theqrl.org/commit/b0c6fdb0b9403da8be9b949908a3838f2679deed)] Merge remote-tracking branch 'upstream/main'		
- [[93e7f](https://github.com/theQRL/theqrl.org/commit/bd9f95cce46c3f6546beb1f6f19124881d093e7f)] New blog: Welcome Prajjawal		
- [[73f51](https://github.com/theQRL/theqrl.org/commit/5c5b436de5455b969416be730a7c20d4cd873f51)] Flag "what exactly is the quantum threat to bitcoin" as draft		
- [[d0adf](https://github.com/theQRL/theqrl.org/commit/4d18b83e1e411d171c30733c1bf096d755ed0adf)] Summary fix.		
- [[7e0c8](https://github.com/theQRL/theqrl.org/commit/46b6dc9c925ebda15d487f6931667fd0d0b7e0c8)] Other minor fixes		


**[New feat: Add under maintenance status indicator to market](https://github.com/theQRL/theqrl.org/pull/309)**
			
- [[faec6](https://github.com/theQRL/theqrl.org/commit/ca6db7fadce4943586b9c45a1b150069b24faec6)] New feat: Add under maintenance status indicator to market		


**[New QRL guest blog: Quickly setup nodes with QRL Cannon](https://github.com/theQRL/theqrl.org/pull/308)**
			
- [[21b3e](https://github.com/theQRL/theqrl.org/commit/4d9f9a08a6beaa9884ad0c78c384d93643821b3e)] New QRL guest blog: Quickly setup nodes with QRL Cannon		
- [[78d64](https://github.com/theQRL/theqrl.org/commit/7a3d7889d709d3db6adefe291bbeb5353da78d64)] Hackathon edit		


**[New landing page: QRL Hackathon 2022](https://github.com/theQRL/theqrl.org/pull/307)**
			
- [[496be](https://github.com/theQRL/theqrl.org/commit/d77391444f1442ee283e9ee8af6b5932ab4496be)] Add event page structure		
- [[cc3c4](https://github.com/theQRL/theqrl.org/commit/d54d5222300b6588ba81b3ea145475ac96bcc3c4)] Resolve preview summary encoding issues		
- [[4fd7d](https://github.com/theQRL/theqrl.org/commit/99ae152de4de5bdf1f855a53eec751d11d04fd7d)] Correction for last month blog

Thanks to runforest for highlighting		
- [[268f3](https://github.com/theQRL/theqrl.org/commit/b44047ef47d8d2cec17842f00815ff86890268f3)] Re-add press category		
- [[f69c1](https://github.com/theQRL/theqrl.org/commit/38c14234bc06daef667f12933148ec22fadf69c1)] Add QRL hackathon 2022 content		
- [[c0881](https://github.com/theQRL/theqrl.org/commit/4f8cb278cf98593462d523881a8a022354bc0881)] Change link to hackathon landing page		
- [[74505](https://github.com/theQRL/theqrl.org/commit/91e62b9354d24662f5ece281a521a93e4d874505)] Conflict fix		
- [[ac55b](https://github.com/theQRL/theqrl.org/commit/b69651f2b879d9a6edf786191ae64482339ac55b)] Add typeform to script-src inline policy.		
- [[884fb](https://github.com/theQRL/theqrl.org/commit/311fbd1ea2ceb7884c7b93f11f95f1dc4e4884fb)] Improved CORS headers		
- [[4f434](https://github.com/theQRL/theqrl.org/commit/5ee22114e1d0143f65622bfe559b590fae14f434)] CORS		
- [[9ee29](https://github.com/theQRL/theqrl.org/commit/e7948c348e8016568129f7e7bc084ef69229ee29)] CORS...		
- [[f771a](https://github.com/theQRL/theqrl.org/commit/52b5b8db8ffc2e53da6fb7df21d7e6db144f771a)] CSP ...		
- [[ab2c1](https://github.com/theQRL/theqrl.org/commit/37b872870562cc44be2a2630acf4c7b5e9aab2c1)] CSP ...		
- [[c274d](https://github.com/theQRL/theqrl.org/commit/1e77ea296ddd30608e6f608026d9a108a89c274d)] CSP v9 final v1		


**[Add new exchange: dex-trade](https://github.com/theQRL/theqrl.org/pull/306)**
			
- [[1cfc4](https://github.com/theQRL/theqrl.org/commit/34bd642a69ac380d534793a8e2cd491be421cfc4)] Correction for June's last month at QRL blog		
- [[f8592](https://github.com/theQRL/theqrl.org/commit/45dda4e99709e103cd3e3bd09ed7b7b9d89f8592)] Add new exchange: dex-trade		


**[Add last month at qrl blog for June](https://github.com/theQRL/theqrl.org/pull/305)**
			
- [[83c42](https://github.com/theQRL/theqrl.org/commit/aba8353de1edf998659a07d3f4919f622fc83c42)] Add quantum news shortcode		
- [[325f0](https://github.com/theQRL/theqrl.org/commit/7963544ebba216c02235475ad6078aa1dae325f0)] Add quantum news init data		
- [[d402a](https://github.com/theQRL/theqrl.org/commit/c2ca8d3bf6b62c9d990e3a996d3e78ea57fd402a)] Add last month at qrl blog for June		

### theQRL/web3

**[Changes in transaction confirmation blocks](https://github.com/theQRL/web3/pull/3)**
			
- [[f7aa0](https://github.com/theQRL/web3/commit/be41367ff9f05fab29e2a78afd1e18dfbcdf7aa0)] changed confirmation blocks		
- [[7fab0](https://github.com/theQRL/web3/commit/e1264c1238359456c4a6c0af76d5cd19dfc7fab0)] _ethAccount -> _zondAccount and _ethCall -> _zondCall		


**[changes in web3-zond-ens and web3-core-requestmanager](https://github.com/theQRL/web3/pull/2)**
			
- [[8498e](https://github.com/theQRL/web3/commit/4e5fca251af51b10315b8a2fd91b641bf008498e)] changes in web3-zond-ens and web3-core-requestmanager		


**[ZondWeb3->Web3](https://github.com/theQRL/web3/pull/1)**
			
- [[b3c12](https://github.com/theQRL/web3/commit/b3a1a57c911e5f49cb4603fc49eb0bcc4d6b3c12)] ZondWeb3->Web3		

### theQRL/zond

**[Allowing all CORS](https://github.com/theQRL/zond/pull/338)**
			
- [[44835](https://github.com/theQRL/zond/commit/fa32629f1eef62d8d52d80b3cc5288b1e7644835)] Allowing all CORS		


**[EstimateGas use the latestBlockNumber if blockNumber not provided as a parameter](https://github.com/theQRL/zond/pull/337)**
			
- [[5cb49](https://github.com/theQRL/zond/commit/59b64777597ea9324c51f18b172c516a3665cb49)] EstimateGas use the latestBlockNumber if blockNumber not provided as a parameter		


**[Fix: delPeer now correctly reduces node's IP count on disconnection](https://github.com/theQRL/zond/pull/336)**
			
- [[b724b](https://github.com/theQRL/zond/commit/8ae57e0c57b98f78cb7b7408f11effefc1ab724b)] Fix: delPeer now correctly reduces node's IP count on disconnection		


**[Fix: return false when otsbitfield length is 0 while checking ots index](https://github.com/theQRL/zond/pull/335)**
			
- [[2b639](https://github.com/theQRL/zond/commit/9c4e7c317731e677eea10d9ac25bda136412b639)] Fix: return false when otsbitfield length is 0 while checking ots index		


**[Fix: IsUsedOTSIndex return false if otsBitfield is not initialized for account](https://github.com/theQRL/zond/pull/334)**
			
- [[95d08](https://github.com/theQRL/zond/commit/6caa68aa13793ebde940c2ac75bde9eab9595d08)] Fix: IsUsedOTSIndex return false if otsBitfield is not initialized for account		


**[ValidateTransferTxn returns error for Invalid XMSS OTS Index instead of log](https://github.com/theQRL/zond/pull/333)**
			
- [[a8ec8](https://github.com/theQRL/zond/commit/931c829b31dd57d4fb5920f5d1ec926f9dda8ec8)] ValidateTransferTxn returns error for Invalid XMSS OTS Index instead of log		


**[Fix: Removed command to create devnet directory](https://github.com/theQRL/zond/pull/332)**
			
- [[c76a8](https://github.com/theQRL/zond/commit/88caeeb7b1f90657ff1041b368b6426e547c76a8)] Fix: Removed command to create devnet directory

Removed command to create devnet directory as it already exists.		


**[Adding devnet genesis and prestate files](https://github.com/theQRL/zond/pull/331)**
			
- [[c8757](https://github.com/theQRL/zond/commit/3d6d3122c58a0fdae4c07954b44a14eb202c8757)] Adding devnet genesis and prestate files		


**[Fix: Condition to check de-stake transaction](https://github.com/theQRL/zond/pull/330)**
			
- [[fab6b](https://github.com/theQRL/zond/commit/b40c368ff134e3b448532283555e78227b9fab6b)] Fix: Condition to check de-stake transaction		


**[Fix: Extracting IP for redundant connection check per IP](https://github.com/theQRL/zond/pull/329)**
			
- [[2d41a](https://github.com/theQRL/zond/commit/255bc62c2564ecef3d7032a7f3c6102c18a2d41a)] Fix: Extracting IP for redundant connection check per IP		


**[fix check expected proposer address](https://github.com/theQRL/zond/pull/328)**
			
- [[25068](https://github.com/theQRL/zond/commit/82db98d863ce71f5c9655459c562863bd4525068)] fix check expected proposer address

- fix: foundation address value checked against itself, rather than the decoded pre-state block proposer address
- cleanup: removed debug print		


**[Fix: Handling block attestation received from other nodes](https://github.com/theQRL/zond/pull/327)**
			
- [[4dc8d](https://github.com/theQRL/zond/commit/6e22b40c9b1c7e8f9c0d85bfbfc06cd228e4dc8d)] Fix: Handling block attestation received from other nodes		


**[Fix: Stake balance validation for coinbase & attest txn](https://github.com/theQRL/zond/pull/326)**
			
- [[4345c](https://github.com/theQRL/zond/commit/26345ffd5e59b33c5f1f66735507aa0bcc94345c)] Fix: Stake balance validation for coinbase & attest txn		


**[Fix: Protocol transaction validation where stake amount is not updated while validating first block of an epoch](https://github.com/theQRL/zond/pull/325)**
			
- [[fb635](https://github.com/theQRL/zond/commit/d376401bcc976f528dcd7a2d9e7c7a410f4fb635)] Fix: Protocol transaction validation where stake amount is not updated while validating first block of an epoch		


**[Added GetStakeBalance API to get the stake balance and pending stake balance](https://github.com/theQRL/zond/pull/324)**
			
- [[1e89e](https://github.com/theQRL/zond/commit/ada60285d3b5b3edbbde16c67a88d829ef81e89e)] Added GetStakeBalance API to get the stake balance and pending stake balance		


**[Fix: transaction pool checks ots index only for Valid XMSS address](https://github.com/theQRL/zond/pull/323)**
			
- [[5a8b2](https://github.com/theQRL/zond/commit/6ce4d55cd6b1f9ab249523b39128bad66ce5a8b2)] Fix: transaction pool checks ots index only for Valid XMSS address		


**[Fix: Stake Validators update + GetValidators API](https://github.com/theQRL/zond/pull/322)**
			
- [[d89c9](https://github.com/theQRL/zond/commit/8d05d2fe19fa73ea5b07aa59b4e777f5d26d89c9)] Fix: Stake Validators update + GetValidators API		


**[Replaced hardcoded value 200 with the BlocksPerEpoch in config](https://github.com/theQRL/zond/pull/321)**
			
- [[b77c1](https://github.com/theQRL/zond/commit/440638778bbc5b1d6c7b1850872f16dc1d0b77c1)] Replaced hardcoded value 200 with the BlocksPerEpoch in config		


**[Replaced hardcoded value 100 with BlocksPerEpoch in config](https://github.com/theQRL/zond/pull/320)**
			
- [[24452](https://github.com/theQRL/zond/commit/b9138c20b0e9bcd246b012a5874102a315324452)] Replaced hardcoded value 100 with BlocksPerEpoch in config		


**[Fix GetMaxPossibleSlotNumber based on timestamp](https://github.com/theQRL/zond/pull/319)**
			
- [[3e2ca](https://github.com/theQRL/zond/commit/6e88e9a936300e3ea7096247d06d07029683e2ca)] Fix GetMaxPossibleSlotNumber based on timestamp		


**[Added code to reconnect with the bootstrap nodes on disconnection](https://github.com/theQRL/zond/pull/318)**
			
- [[eefaf](https://github.com/theQRL/zond/commit/d86ad1236ba9735b7786285234c40748f01eefaf)] Added code to reconnect with the bootstrap nodes on disconnection		


**[Fix: Slot Number in zond_getValidators API](https://github.com/theQRL/zond/pull/317)**
			
- [[f4d6d](https://github.com/theQRL/zond/commit/d6989fceccbf3843b99f71061700ed3d79ef4d6d)] Fix: Slot Number in zond_getValidators API		


**[Added zond_getValidators api to return the validators by slotNumber for current epoch](https://github.com/theQRL/zond/pull/316)**
			
- [[19739](https://github.com/theQRL/zond/commit/08cdf9fd32592f4eb1b6d9a5a9c1c19a4ae19739)] Added zond_getValidators api to return the validators by slotNumber for current epoch		


**[Fix: stake tx API & CLI, added code to remove dilithium keys while de-staking](https://github.com/theQRL/zond/pull/315)**
			
- [[574bb](https://github.com/theQRL/zond/commit/16ea0f85abadd20886239ad363959af04af574bb)] Fix: stake tx API & CLI, added code to remove dilithium keys while destaking		
- [[0ca6b](https://github.com/theQRL/zond/commit/bebc20f42acb0ee0721548670c50bf26aff0ca6b)] Merge remote-tracking branch 'origin/master'		


**[Fix: blockProposerDilithium address check](https://github.com/theQRL/zond/pull/314)**
			
- [[7a158](https://github.com/theQRL/zond/commit/1de3c02360e0d4bc41e6eef0d3c6c670a047a158)] Fix: blockProposerDilithium address check		
- [[aa1c9](https://github.com/theQRL/zond/commit/18055ad4dd47c80a4b78ac319f4085b0b53aa1c9)] Merge remote-tracking branch 'refs/remotes/origin/master'		


**[Updated GetTransactionMetaDataByHash return values + implementation of blockHash function](https://github.com/theQRL/zond/pull/313)**
			
- [[929d7](https://github.com/theQRL/zond/commit/48f6b737a9ae6d9eacf963d8c6313b2ffb2929d7)] blockHash from blocknumber added		
- [[824f9](https://github.com/theQRL/zond/commit/a632fef8d13f9897f7792dcff398f8d450a824f9)] Merge pull request #2 from sarkarabhijeet0512/master

blockHash from blocknumber added		
- [[8a9ae](https://github.com/theQRL/zond/commit/64bf089e9e119a0a4ae122aee7651a6f2088a9ae)] Updated GetTransactionMetaDataByHash return values		


**[Fix: DeleteNonceData derive address from both Dilithium and XMSS PK](https://github.com/theQRL/zond/pull/312)**
			
- [[14c8e](https://github.com/theQRL/zond/commit/a5e89c2feee23f251544d5be3d707b3f15414c8e)] Fix: DeleteNonceData derive address from both Dilithium and XMSS PK		


**[Added code to call UpdateFinalizedEpoch after the first block is added in the new epoch](https://github.com/theQRL/zond/pull/311)**
			
- [[02b5d](https://github.com/theQRL/zond/commit/3033017c3102470ba11d5163c5ecb3456d802b5d)] Added code to call UpdateFinalizedEpoch after the first block is added in the new epoch		


**[Fix: Epoch finalization](https://github.com/theQRL/zond/pull/310)**
			
- [[ce170](https://github.com/theQRL/zond/commit/37f3374c00ab091108b3910e79ed19801d5ce170)] Fix: Epoch finalization		


**[Fix: Broadcast transaction in CLI prints error instead of panic](https://github.com/theQRL/zond/pull/309)**
			
- [[a4e2c](https://github.com/theQRL/zond/commit/2f503bc64cb03c6360e2d0014684cb9b9d3a4e2c)] Fix: Broadcast transaction in CLI prints error instead of panic		
- [[408af](https://github.com/theQRL/zond/commit/e3ee4ca313b8404ca06588a82437aaee671408af)] Merge remote-tracking branch 'origin/master'		

### theQRL/zond-contract-example

**[Refactoring + updated comments](https://github.com/theQRL/zond-contract-example/pull/5)**
			
- [[8ea3c](https://github.com/theQRL/zond-contract-example/commit/8b2b5645995456d44140a9f874516aba9648ea3c)] Refactoring + updated comments		


**[1-deploy.js now shows the expected contract address with checksum + refactoring](https://github.com/theQRL/zond-contract-example/pull/4)**
			
- [[3185b](https://github.com/theQRL/zond-contract-example/commit/f4afb2a4833e6257ab8032ee51e25aa17333185b)] 1-deploy.js now shows the expected contract address with checksum + refactoring	


**[Removed unused imports + libraries](https://github.com/theQRL/zond-contract-example/pull/3)**
			
- [[c0dcd](https://github.com/theQRL/zond-contract-example/commit/561c66e517b6974c458b12645092e8efdc4c0dcd)] Removed unused imports + libraries		


**[Replaced hardcoded gas with the estimateGas API + refactoring](https://github.com/theQRL/zond-contract-example/pull/2)**
			
- [[f8788](https://github.com/theQRL/zond-contract-example/commit/2a248f76bdadeff4a7b93c569c40fadf5dbf8788)] Replaced hardcoded gas with the estimateGas API + refactoring		


**[Smart contract guide minor improvements](https://github.com/theQRL/zond-contract-example/pull/1)**
			
- [[2edec](https://github.com/theQRL/zond-contract-example/commit/df83ad6094ab0d95c407b64f6b0b744652c2edec)] Smart contract guide minor improvements		
- [[463b4](https://github.com/theQRL/zond-contract-example/commit/cf9fe13e9a190c1c438fdc8cbf1fe084281463b4)] Merge upstream		
- [[65dc3](https://github.com/theQRL/zond-contract-example/commit/e4ee99e27ff0e669f899a444683cdf5082a65dc3)] Merge upstream changes		

### theQRL/zond-documentation

**[fix: Update stake command to include --dilithium-file flag ](https://github.com/theQRL/zond-documentation/pull/6)**
			
- [[25814](https://github.com/theQRL/zond-documentation/commit/63133b10c8374fbda738f193e1a25e941e325814)] fix: Update stake command to include --dilithium-file flag and fix old reference to ~/.qrl directory		


**[fix: github link to main theqrl github account page](https://github.com/theQRL/zond-documentation/pull/5)**
			
- [[f05ea](https://github.com/theQRL/zond-documentation/commit/01c0d7f286ec1a87432db16122692796c69f05ea)] fix: github link to main theqrl github account page		


**[fix: Github edit links to correct URL](https://github.com/theQRL/zond-documentation/pull/4)**
			
- [[001b4](https://github.com/theQRL/zond-documentation/commit/ad1af17b3aaa490048291cbb275274dc9a3001b4)] fix: Github edit links to correct URL		


**[fix: link rot corrections](https://github.com/theQRL/zond-documentation/pull/3)**
			
- [[ec842](https://github.com/theQRL/zond-documentation/commit/871fdf9cad9bcf6fa2d5f94df0a9aed4929ec842)] fix: link rot corrections		


**[Adding issue templates to repo](https://github.com/theQRL/zond-documentation/pull/2)**
			
- [[72fc1](https://github.com/theQRL/zond-documentation/commit/2a39ea3af9d4f49ccbf3067e282e38a1c1a72fc1)] Update issue templates		
- [[80c93](https://github.com/theQRL/zond-documentation/commit/07da4eabc72783bf16fa9bd2359cdaacc3580c93)] Update issue templates		
- [[4dda0](https://github.com/theQRL/zond-documentation/commit/d1166b4926b61bfbbfcaa8eb959b544408c4dda0)] Merge branch 'main' of https://github.com/fr1t2/zond-documentation into main		


**[Update Zond install instructions](https://github.com/theQRL/zond-documentation/pull/1)**
			
- [[8ae71](https://github.com/theQRL/zond-documentation/commit/83daa8726362edc47f2d6c0146900afc2938ae71)] fix: removed --output-file flag from staking transaction, and add example command	
- [[57ca6](https://github.com/theQRL/zond-documentation/commit/2bd4e7f636aaa82d26bd625e13c1ae2b51357ca6)] fix: error in staking command  flag removed from command		
- [[2a802](https://github.com/theQRL/zond-documentation/commit/258f547f9a535681b5bb6f05386f324573c2a802)] fix: Updating install instructions to be inline with current zond build requirements
- [[1b6fb](https://github.com/theQRL/zond-documentation/commit/357d47928a86de39647127a4859920f8abe1b6fb)] fix: cleanup