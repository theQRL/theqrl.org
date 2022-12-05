---
layout: blog-post
slug: last-month-at-qrl-november-2022
date: 2022-12-05
author: "The QRL Core Contributors"
title: "Last Month at QRL - November 2022"
summary: "Don't miss out on the [QRL Games Winter Hackathon 2022](/events/qrl-games-winter-hackathon) happening this month! Find a bug or want to help bug hunt? The QRL Foundation is excited to launch the [QRL Bug Bounty Programme](/bug-bounty/) that aims to encourage and reward platform improvements."
featured_image: header.png
categories:
  - technical
features:
  - events
toc: true
---

## Highlights

### QRL Bug Bounty Programme

{{< image "./images/h.bugbounty.png" >}}

The QRL Foundation is excited to launch the [QRL Bug Bounty Programme](/bug-bounty/), an experimental and discretionary rewards programme designed for our active community that aims to encourage and reward platform improvements. This will build upon the work of third-party auditors by offering rewards to individuals who work as white-hat security researchers. These individuals often have the same level of knowledge and approach to solving problems as hackers.

The QRL Bug Bounty Programme offers increased vulnerability detection and realistic threat simulation on a continuous basis in addition to the depth of third-party audits that are performed.

Any vulnerability that poses a threat to the security of the network, the security of classical clients, the soundness of protocols, or the security of cryptographic primitives may be eligible for a reward.

More information can be found in our [Bug Bounty Programme](/blog/bug-bounty-programme-released-by-the-qrl-foundation/) blog and [QRL Bug Bounty Programme](/bug-bounty/) page.

### QRL Games - Winter Hackathon 2022

{{< image "./images/h.hackathon.png" >}}

It gave us great pleasure to announce the forthcoming [QRL Games - Winter Hackathon 2022](/events/qrl-games-winter-hackathon-2022/).

The success of our QRL Hackathon 2022 in Amsterdam, during which we unveiled our public devnet equipped with Proof-of-Stake (PoS) and EVM-compatible smart contract functionality, serves as the foundation for this development.

The primary focus of this hackathon is, as may be inferred from the event's name, on games. It doesn't matter what it is as long as it has to do with QRL and games, which might mean anything from making a QRL game to gamifying any component of the project. 

This is the perfect opportunity to work together and rack up some Quanta (QRL) in the process!

The QRL Games - Winter Hackathon 2022 event will begin shortly on **Wednesday, December 14th**, and will continue until **Wednesday, January 4th, 2023**, which is just a few days after the New Year.

More information can be found on the [QRL Games - Winter Hackathon 2022 events page](/events/qrl-games-winter-hackathon-2022/).

Be sure to check out our [events](/events/) page from time to time for new events. Want to run your own community event? Get in touch! 

## Development updates

### Project Zond

The public devnet of project Zond has been successfully running for over 2 1/2 months and has surpassed a block height of 100,000! This is a testament to the quality of work our lead core blockchain developer Kaushal Kumar Singh and two golang devs have put into the next major milestone of QRL. 

For the last month, CRYSTALS-Dilithium in golang ([go-qrllib](https://github.com/theQRL/go-qrllib)) has been going through an upgrade to CRYSTALS-Dilithium 5 to match the latest NIST requirements and is in the final stages of testing (bug fixes & unit tests). Next step is the implementation of a new address format (similar to the QRL mainnet address format), which will require further work in the solidity compiler and CRYSTALS-Dilithium 5 code.

If you're interested in joining us to test, you can do so by installing a [Zond public devnet node](https://zond-docs.theqrl.org/). From there you can create smart contracts, stake, and send transactions using CRYSTALS-Dilithium 5 and XMSS.

## Changelog

### theQRL/QRL

**[PR 1764: Updated testnet, added code to get seed block for alt chain & updated dependencies version](https://github.com/theQRL/QRL/pull/1764)**

> - Added config for new testnet
> - Different ports for testnet node compared to mainnet, so that one can run both on same machine without port conflict
> - Updated dependencies versions to make it compatible with Ubuntu 22+
> - get_seed_block now also finds the seed block for the alt chain
> - Updated integration tests

- [[4955a](https://github.com/theQRL/QRL/commit/1bbd78d5ccdd8ce1a3aea50b995dccfb5a74955a)] Merge pull request #1749 from theQRL/dev
- [[4f933](https://github.com/theQRL/QRL/commit/6c345f46f54210792c1285b5f5039d3cb464f933)] Updated dependencies version		
- [[447f0](https://github.com/theQRL/QRL/commit/43367891b840c099bdd7171b6fa64c17ab8447f0)] Added code to get seed_block for alt chain		
- [[a9bcf](https://github.com/theQRL/QRL/commit/14e6dbbac639ef7172bd3b16ebca8ff9435a9bcf)] import Set from collections.abc for compatibility with Python 3.10+		
- [[d4df4](https://github.com/theQRL/QRL/commit/cc9442af55d978f9f83ec07e244e54fe4fdd4df4)] Updated dependencies version		
- [[cccbb](https://github.com/theQRL/QRL/commit/2b3a14560697dfb65ed279152b8c89f3636cccbb)] Removed support for Ubuntu trusty and xenial		
- [[41cbd](https://github.com/theQRL/QRL/commit/1c53ef81799027b895599232862b3a5756241cbd)] Updated pytest version		
- [[728e6](https://github.com/theQRL/QRL/commit/117135f40aa5baa3417b6e8d75f8da2ced1728e6)] Fix for tests_integration		
- [[89cbb](https://github.com/theQRL/QRL/commit/3d31ec580cd335e0196f49e351c41f2b95889cbb)] added apt-get update for integration_tests		
- [[56edc](https://github.com/theQRL/QRL/commit/b4e43ebf13ae7e83089d4c8e49754a0c89756edc)] updated mock version restriction in requirements.txt		
- [[5adb4](https://github.com/theQRL/QRL/commit/dd0cf7ef5c7521f571c3d0fcae2b27ba8145adb4)] Updated integration_tests		
- [[0f93b](https://github.com/theQRL/QRL/commit/49deebc20cf81192e3fe587ba958d4b02e90f93b)] Updated mock version in setup.cfg		
- [[124fc](https://github.com/theQRL/QRL/commit/3dabbf0f162cb3002a22aa30623e3526418124fc)] generate_genesis.py token migration file is now made optional		
- [[0c783](https://github.com/theQRL/QRL/commit/d51460720a9145e4d2d49a03b93167035eb0c783)] Added new testnet genesis file & config		
- [[105be](https://github.com/theQRL/QRL/commit/3b4009e5d1f15eadf730ab44bfe6e3d07b1105be)] Updated testnet hardfork block details		
- [[95a5b](https://github.com/theQRL/QRL/commit/1945ee86a7e9849ae7f91e1842398ef905f95a5b)] Config for testnet to begin with randomx mining algo	

**[PR 1765: Merged Dev](https://github.com/theQRL/QRL/pull/1765)**
			
- [[4f933](https://github.com/theQRL/QRL/commit/6c345f46f54210792c1285b5f5039d3cb464f933)] Updated dependencies version		
- [[447f0](https://github.com/theQRL/QRL/commit/43367891b840c099bdd7171b6fa64c17ab8447f0)] Added code to get seed_block for alt chain		
- [[a9bcf](https://github.com/theQRL/QRL/commit/14e6dbbac639ef7172bd3b16ebca8ff9435a9bcf)] import Set from collections.abc for compatibility with Python 3.10+		
- [[d4df4](https://github.com/theQRL/QRL/commit/cc9442af55d978f9f83ec07e244e54fe4fdd4df4)] Updated dependencies version		
- [[cccbb](https://github.com/theQRL/QRL/commit/2b3a14560697dfb65ed279152b8c89f3636cccbb)] Removed support for Ubuntu trusty and xenial		
- [[41cbd](https://github.com/theQRL/QRL/commit/1c53ef81799027b895599232862b3a5756241cbd)] Updated pytest version		
- [[728e6](https://github.com/theQRL/QRL/commit/117135f40aa5baa3417b6e8d75f8da2ced1728e6)] Fix for tests_integration		
- [[89cbb](https://github.com/theQRL/QRL/commit/3d31ec580cd335e0196f49e351c41f2b95889cbb)] added apt-get update for integration_tests		
- [[56edc](https://github.com/theQRL/QRL/commit/b4e43ebf13ae7e83089d4c8e49754a0c89756edc)] updated mock version restriction in requirements.txt		
- [[5adb4](https://github.com/theQRL/QRL/commit/dd0cf7ef5c7521f571c3d0fcae2b27ba8145adb4)] Updated integration_tests		
- [[0f93b](https://github.com/theQRL/QRL/commit/49deebc20cf81192e3fe587ba958d4b02e90f93b)] Updated mock version in setup.cfg		
- [[124fc](https://github.com/theQRL/QRL/commit/3dabbf0f162cb3002a22aa30623e3526418124fc)] generate_genesis.py token migration file is now made optional		
- [[0c783](https://github.com/theQRL/QRL/commit/d51460720a9145e4d2d49a03b93167035eb0c783)] Added new testnet genesis file & config		
- [[105be](https://github.com/theQRL/QRL/commit/3b4009e5d1f15eadf730ab44bfe6e3d07b1105be)] Updated testnet hardfork block details		
- [[95a5b](https://github.com/theQRL/QRL/commit/1945ee86a7e9849ae7f91e1842398ef905f95a5b)] Config for testnet to begin with randomx mining algo		
- [[614cc](https://github.com/theQRL/QRL/commit/cbddb72081114b1ef817e778a28425f4282614cc)] Merge pull request #1764 from cyyber/dev

### theQRL/qrandomx

**[PR 30: Minor fix for RandomX Block Verification while mining block at different seed + more unit tests](https://github.com/theQRL/qrandomx/pull/30)**
			
- [[6f711](https://github.com/theQRL/qrandomx/commit/718205b6eb045164322ad79847ecb1e83216f711)] Fix: RandomX block verification while a block with different seed hash is mined		
- [[1b712](https://github.com/theQRL/qrandomx/commit/dcfc08a250081a4a8592f04406e1ccac9751b712)] code cleanup		
- [[87841](https://github.com/theQRL/qrandomx/commit/72f37d7c6c753294af42697bfdbd19fe7a487841)] Updated google test git link		
- [[aaef9](https://github.com/theQRL/qrandomx/commit/4212e0634b3b6ae63efc42d28149557ce0caaef9)] qrxminer store mainHeight and seedHeight params for threads		

### theQRL/theqrl.org

**[PR 327: New blog: Monthly Update for October](https://github.com/theQRL/theqrl.org/pull/327)**
			
- [[771fb](https://github.com/theQRL/theqrl.org/commit/b17f3ab13badb09678f7c222c941d66d802771fb)] Separate images from quantum news text file. Add quantum news items		
- [[53bd0](https://github.com/theQRL/theqrl.org/commit/7c81e77afa67cf39ebc71221302d4da77a853bd0)] Adjust formatting for GitHub updates		
- [[9267a](https://github.com/theQRL/theqrl.org/commit/65c7f33319e46f6e2fdf8dbf36ba574a5409267a)] Large image for first news item in blogs		
- [[d6a5b](https://github.com/theQRL/theqrl.org/commit/64dbebc1d041fabfa2a09c4ba70d0eee7ced6a5b)] Header changes for better consistency		
- [[7fe81](https://github.com/theQRL/theqrl.org/commit/c02272d4cf3a49d669ef76c06b54bd16ae67fe81)] New blog: Monthly Update for October		
- [[1edcd](https://github.com/theQRL/theqrl.org/commit/e5f70792138ba36739ff1c1aef4e08289d81edcd)] Update image		
- [[6a9d3](https://github.com/theQRL/theqrl.org/commit/38ecf40ea3e2022b81c57b73784d73468106a9d3)] Edits

**[PR 328: Add QRL Games - Winter Hackathon 2022](https://github.com/theQRL/theqrl.org/pull/328)**
			
- [[b5ffa](https://github.com/theQRL/theqrl.org/commit/b0de3d1f4ff3742e284c26be782c9d7ca08b5ffa)] Header adjustments		
- [[5aae0](https://github.com/theQRL/theqrl.org/commit/96d35ff20f7714f10f212de625556ad64775aae0)] Events landing page style		
- [[fc78a](https://github.com/theQRL/theqrl.org/commit/ea59f25e1aaeab62fac5a44b98fbe07c01bfc78a)] Add events landing page to footer		
- [[ea3b7](https://github.com/theQRL/theqrl.org/commit/c6df21b2bbe9a0972c475ca1a5f81c93723ea3b7)] Add toc		
- [[48149](https://github.com/theQRL/theqrl.org/commit/296b97433088a09dec6a07d3552adb937bb48149)] Events list improvements		
- [[777c8](https://github.com/theQRL/theqrl.org/commit/281410760a560f128e711f177fff6374606777c8)] Events page improvements / fixes		
- [[ff5b0](https://github.com/theQRL/theqrl.org/commit/c63e5781a13b4f5b82b611c49a85651700eff5b0)] Add QRL Contributors Core Team		
- [[7fd5c](https://github.com/theQRL/theqrl.org/commit/64ef7bec54de1ebe167d639d0b6410adb2c7fd5c)] Add QRL Games Winter Hackathon 2022 Blog		
- [[83b40](https://github.com/theQRL/theqrl.org/commit/9e18e5238fed3b364e0fa2ff5d119e771e883b40)] Add QRL Games - Winter Hackathon 2022		
- [[3756b](https://github.com/theQRL/theqrl.org/commit/a66108c66af69536e29769db8ddbb8b91113756b)] Change date		
- [[76c6e](https://github.com/theQRL/theqrl.org/commit/76bc3ccf2f7ea7ab4fdf951119a2c5360d276c6e)] Slug adjustments		

**[PR 329: Bug Bounty 🎉](https://github.com/theQRL/theqrl.org/pull/329)**
			
- [[86662](https://github.com/theQRL/theqrl.org/commit/baffae3fac3a37a2797ea42d54f19ddd92386662)] Bug bounty draft for team discussion & agreement		
- [[68661](https://github.com/theQRL/theqrl.org/commit/b23313d92d8ff6e2949dc4fb405751d2dd368661)] Bug bounty iteration		
- [[1dd0d](https://github.com/theQRL/theqrl.org/commit/91cb4c7cb0ee6eee6b3a1bc6f999a5dd9961dd0d)] Add change		
- [[02f89](https://github.com/theQRL/theqrl.org/commit/280e24f57d5c8e428a59f01f5cbfb1f00f402f89)] Further scope clarity		
- [[8187b](https://github.com/theQRL/theqrl.org/commit/ebde29c6181962ab92ed1e94f0ac6772b008187b)] Intro field to article & TOC to bug bounty		
- [[721ac](https://github.com/theQRL/theqrl.org/commit/b56b5c37164c689f69b54aea4836fb58f4f721ac)] Merge branch 'theQRL:main' into main		
- [[3b6ee](https://github.com/theQRL/theqrl.org/commit/c734697a810c91e782b0a6006c5c847f0e33b6ee)] Add HoF historical bug hunters (thanks Jack!)		
- [[596fe](https://github.com/theQRL/theqrl.org/commit/b299bd7ce4e4ecfb62aec340344fe63a3cd596fe)] Add links to footer		
- [[59baa](https://github.com/theQRL/theqrl.org/commit/a27171b041d5129adbad9cad08e561c4e2e59baa)] Link fix		



**[PR 330: QRL Bug Bounty Programme blog](https://github.com/theQRL/theqrl.org/pull/330)**
			
- [[3343c](https://github.com/theQRL/theqrl.org/commit/d3bc1bd7f0235e57b797a5e4d68b19588763343c)] QRL Bug Bounty Programme blog		
- [[47ff1](https://github.com/theQRL/theqrl.org/commit/aae2a960ccf663ca876d0d77fe23b07123447ff1)] Add youtube video to top of events landing page		
- [[1a0ab](https://github.com/theQRL/theqrl.org/commit/85a606d8c8fd9fd35aa8caa1f4fff846f321a0ab)] Lowercase hackathon		
- [[f1ed2](https://github.com/theQRL/theqrl.org/commit/ae41d2c5d8bbee0e0d8ac252d0ca9c86b16f1ed2)] Merge remote-tracking branch 'upstream/main'		

## Latest advances in quantum computing

{{% qnews start="2022-11-01" end="2022-12-01" %}}