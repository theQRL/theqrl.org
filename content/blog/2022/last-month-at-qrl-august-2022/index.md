---
layout: blog-post
slug: last-month-at-qrl-august-2022
date: 2022-09-03
author: "Jack Matier"
title: "Last Month at QRL - August 2022"
summary: "The QRL Hackathon 2022 has officially begun, opening the doors for everyone from institutions to individuals to be able to build post-quantum secure web3 applications more through Ethereum compatible smart contracts. Interested? Join the [hackathon today](/events/qrl-hackathon-2022/start/)."
featured_image: header.png
categories:
  - technical
features:
  - pos
  - smart-contracts
  - events
toc: true
---


## Highlights

### The QRL Hackathon 2022 Begins!

{{< image "./images/h.hackathon.png" >}}

The team at QRL is delighted to announce that the 'Build on QRL Protocol' hackathon event **has officially begun!**

Quantum computing is an emerging technology that could potentially break many of the cryptographic primitives that we use for security. Post-quantum cryptography (PQC) research has been going on since it was first realized that quantum computers might someday pose a threat to public-key cryptography. During this time, the QRL has also been going through research and development to bring together the next generation of our ecosystem, which includes Proof-of-Stake and Ethereum compatible smart contracts.

Everybody, from institutions to individuals will be able to build quantum resistant DeFi applications on top of the QRL protocols which will be able to withstand any future attacks. Some ideas includ building/porting Web3 applications, translating documentation, gaming NFT creation, decentralized exchanges and establishing DAO & Governance on the QRL network.

Right now we've started with the Ideation & Team Building part of the hackathon, where people can form teams and conjure up ideas of what they can build to be eligible for up to 100,000 QRL. After that will be the in-person event on September 21st and 22nd at the Atrium Meeting Centre in Amsterdam.

If you haven't already, be sure to see what the [QRL Hackathon 2022](/events/qrl-hackathon-2022/start) is all about and get started! 

### Ethereum Virtual Machine (ETM) in Zond

{{< image "./images/h.evm.png" >}}

Over the last month, the Ethereum Virtual Machine (EVM) has been successfully integrated into Zond, with further bug fixes and quality of life improvements on their way. You can see much of the work in the [changelog below](#theqrlzond).

The rest of the team will then get their hands on it in early September and begin creating documentation and supporting materials to enable people to better grasp the possibilities of the new Zond network. 

Stay tuned!

## Quantum News

{{% qnews start="2022-08-01" end="2022-09-01" %}}

## Changelog

### theQRL/go-libp2p-qrl

**[Dilithium stores seed and recover the dilithium keys from seed stored in file](https://github.com/theQRL/go-libp2p-qrl/pull/7)**
			
- [[38a54](https://github.com/theQRL/go-libp2p-qrl/commit/06c48aa7eef3a92c041320885daa567e58238a54)] Dilithium stores seed and recover the dilithium keys from seed stored in file		

**[Updated go-qrllib version](https://github.com/theQRL/go-libp2p-qrl/pull/6)**
			
- [[d16e8](https://github.com/theQRL/go-libp2p-qrl/commit/5591ff5fe0d37fb44b1961a93cddabc572bd16e8)] Updated go-qrllib version		


**[Migration from qrllib to go-qrllib](https://github.com/theQRL/go-libp2p-qrl/pull/5)**
			
- [[d650c](https://github.com/theQRL/go-libp2p-qrl/commit/08847320e32c908a8b27cd57461fa0de00bd650c)] Migration from qrllib to go-qrllib		

### theQRL/go-qrllib

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

### theQRL/theqrl.org

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
  (Thanks to Discord user, runforest for highlighting)
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

### theQRL/zond

**[Fix: To returns nil when not provided in transaction and ignored in GetSigningHash function](https://github.com/theQRL/zond/pull/248)**
			
- [[f2319](https://github.com/theQRL/zond/commit/c57b1b4ddf89634e1494b2817480c835fc8f2319)] Fix: To returns nil when not provided in transaction and ignored in GetSigningHash function		


**[Updated cli flags](https://github.com/theQRL/zond/pull/247)**
			
- [[d2554](https://github.com/theQRL/zond/commit/cdbf87a2c0872bd43a789ce697eaad0e475d2554)] Updated cli flags		


**[Added deployContractFromDilithium, callContractFromDilithium & offChainCallContract in zond-cli](https://github.com/theQRL/zond/pull/246)**
			
- [[e7ab1](https://github.com/theQRL/zond/commit/cd12689a64958321b3031c66d41928c3340e7ab1)] Added deployContractFromDilithium, callContractFromDilithium & offChainCallContract in zond-cli		


**[Fix: Encoding of evm code in transaction](https://github.com/theQRL/zond/pull/245)**
			
- [[211f3](https://github.com/theQRL/zond/commit/2ec81e663cac6278d87c47ec981203c4394211f3)] Fix: Encoding of evm code in transaction		
- [[1541f](https://github.com/theQRL/zond/commit/af6d537140fa69cb7e367dd3367d44eb67e1541f)] Merge remote-tracking branch 'origin/master'		


**[Structure for evmcall API input](https://github.com/theQRL/zond/pull/244)**
			
- [[eda01](https://github.com/theQRL/zond/commit/2d17a937234e231987eb9093ec6a685ffc1eda01)] Structure for evmcall API input		


**[Added evmcall API support accepts abi encoded input and outputs abi encoded result](https://github.com/theQRL/zond/pull/243)**
			
- [[b5572](https://github.com/theQRL/zond/commit/1a68b55bfc66c26dd3cb50c8ef48b367dcbb5572)] Added evmcall API support accepts abi encoded input and outputs abi encoded result		


**[Added evmcall function for offchain calls to smart contract](https://github.com/theQRL/zond/pull/242)**
			
- [[e79a1](https://github.com/theQRL/zond/commit/a3d00f2bd5116a20020cba3d12619b3b92ae79a1)] Added evmcall function for offchain calls to smart contract		


**[Fix: Nonce update fix for coinbase transaction, ignore address validation if contract address](https://github.com/theQRL/zond/pull/241)**
			
- [[8e4e5](https://github.com/theQRL/zond/commit/4919c7af1d37b482acc38d9a136d4d0032d8e4e5)] Fix: Nonce update fix for coinbase transaction, ignore address validation if contract address		


**[Fix: Add addresses to access list to make calls to smart contracts](https://github.com/theQRL/zond/pull/240)**
			
- [[a4b96](https://github.com/theQRL/zond/commit/bd9a649d5d23f23a5f7734607ff544d38b8a4b96)] Fix: Add addresses to access list to make calls to smart contracts		


**[genesis-bootstrap now also generates dilithium_keys file used for staking](https://github.com/theQRL/zond/pull/239)**
			
- [[2086c](https://github.com/theQRL/zond/commit/c505477746f57e8afb4dfcd6c9bcac0bbe92086c)] genesis-bootstrap now also generates dilithium_keys file used for staking		


**[Refactoring + loading accountDB based on trieRoot](https://github.com/theQRL/zond/pull/238)**
			
- [[32403](https://github.com/theQRL/zond/commit/cfc7b26dc3b48183d9497e8c904fc5ff61b32403)] Refactoring + loading accountDB based on trieRoot		


**[Added PBData function for epoch](https://github.com/theQRL/zond/pull/237)**
			
- [[a2f7e](https://github.com/theQRL/zond/commit/a0697ed802c44c5a04ebfbc7d0ea937cd99a2f7e)] Added PBData function for epoch		


**[Added slotValidators in metadata](https://github.com/theQRL/zond/pull/236)**
			
- [[c1626](https://github.com/theQRL/zond/commit/8556409112d3ad9a189e8d44c5d039e5774c1626)] Added slotValidators in metadata		


**[Fix for SetStakeBalance & SetPendingStakeBalance](https://github.com/theQRL/zond/pull/235)**
			
- [[0a270](https://github.com/theQRL/zond/commit/7fa5126485d3de1ca5804ec4e8b9207e29b0a270)] Fix for SetStakeBalance & SetPendingStakeBalance		


**[Fix: Gas refund in stake transaction](https://github.com/theQRL/zond/pull/234)**
			
- [[10ab5](https://github.com/theQRL/zond/commit/b06d4eb866e3390930f8086b133b09096ff10ab5)] Fix: Gas refund in stake transaction		


**[Call to GetDilithiumAddressFromUnSizedPK from the helper function](https://github.com/theQRL/zond/pull/233)**
			
- [[dc355](https://github.com/theQRL/zond/commit/356563675f9a518f0e61841d1c4d01e27bbdc355)] Call to GetDilithiumAddressFromUnSizedPK from the helper function		


**[Fix: currentBlockTotalStakeAmount is initialized when NewStateContext called](https://github.com/theQRL/zond/pull/232)**
			
- [[c1a91](https://github.com/theQRL/zond/commit/8d65a22b6e4dcd71e628029ec0364de35e8c1a91)] Fix: currentBlockTotalStakeAmount is initialized when NewStateContext called		


**[Fix: Proper gas subtraction from gas pool for stake transaction + refactoring](https://github.com/theQRL/zond/pull/231)**
			
- [[3742b](https://github.com/theQRL/zond/commit/f378a030864e7fd850f05cb30e9b5a2493d3742b)] Fix: Proper gas subtraction from gas pool for stake transaction + refactoring		


**[Fix: Initialize StakeBalance and PendingStakeBalance for the stateObject](https://github.com/theQRL/zond/pull/230)**
			
- [[ae36d](https://github.com/theQRL/zond/commit/ee1cbe76e84139343bb570eca453cb0a46cae36d)] Fix: Initialize StakeBalance and PendingStakeBalance for the stateObject		


**[Refactored Hash & GenerateTxHash function in transactions](https://github.com/theQRL/zond/pull/229)**
			
- [[f8e49](https://github.com/theQRL/zond/commit/03fa1e8f2873afa9583a56b76509d79d801f8e49)] Refactored Hash & GenerateTxHash function in transactions		


**[Fix: Protocol transaction to use Dilithium.Sign instead of Seal function](https://github.com/theQRL/zond/pull/228)**
			
- [[7e08c](https://github.com/theQRL/zond/commit/7ea88f212e4883248f98202f918269be5877e08c)] Fix: Protocol transaction to use Dilithium.Sign instead of Seal function		


**[Fix to initialize and load genesis block](https://github.com/theQRL/zond/pull/227)**
			
- [[c337d](https://github.com/theQRL/zond/commit/4321883faec5cbfc28650b81faa06c20c6cc337d)] Fix to initialize and load genesis block		


**[Fix: Initialize the Header object and related fields](https://github.com/theQRL/zond/pull/226)**
			
- [[fcf60](https://github.com/theQRL/zond/commit/969506cd739b82b2740bd0f4a4f4ed13276fcf60)] Fix: Initialize the Header object and related fields		


**[Changes to load genesis and prestate from the yml file](https://github.com/theQRL/zond/pull/225)**
			
- [[2dbd3](https://github.com/theQRL/zond/commit/8b78f1d4972fa89b9a07ebe31b02dafde642dbd3)] Changes to load genesis and prestate from the yml file		

**[Added GetDilithiumAddressFromUnSizedPK and GetXMSSAddressFromUnSizedPK as helper functions](https://github.com/theQRL/zond/pull/224)**
			
- [[b0ee7](https://github.com/theQRL/zond/commit/5700ff569e8a60d635946c71dcf443ba854b0ee7)] Added GetDilithiumAddressFromUnSizedPK and GetXMSSAddressFromUnSizedPK as helper functions		


**[Updated dev tool to bootstrap the genesis and prestate for the new network](https://github.com/theQRL/zond/pull/223)**
			
- [[1c5a2](https://github.com/theQRL/zond/commit/e4d55311c9c734b56d1dbe1190841fbf1cc1c5a2)] Updated dev tool to bootstrap the genesis and prestate for the new network		


**[Updated go-qrllib version](https://github.com/theQRL/zond/pull/222)**
			
- [[93bb1](https://github.com/theQRL/zond/commit/4006df0ef0b692e19c7f4e003746fe661d093bb1)] Updated go-qrllib version		


**[Added BlockGasLimit in the config](https://github.com/theQRL/zond/pull/221)**
			
- [[26bb7](https://github.com/theQRL/zond/commit/1cdd67bf3267cc53660059a082d08788e0326bb7)] Added BlockGasLimit in the config		


**[Added ChainID in dev config and datatype update](https://github.com/theQRL/zond/pull/220)**
			
- [[3035e](https://github.com/theQRL/zond/commit/4ad491e2198a5d883ee4e1abf7b99e5e4a23035e)] Added ChainID in dev config and datatype update		


**[Refactoring + Added more checks for the index value in wallet](https://github.com/theQRL/zond/pull/219)**
			
- [[ca30f](https://github.com/theQRL/zond/commit/c2e242b20cf9b7c1f8fc734ee6d4618ec6bca30f)] Refactoring + Added more checks for the index value in wallet		
