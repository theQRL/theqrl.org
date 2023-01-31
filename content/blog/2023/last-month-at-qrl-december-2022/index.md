---
layout: blog-post
slug: last-month-at-qrl-december-2022
date: 2023-01-27
author: "The QRL Core Contributors"
title: "Last Month at QRL - December 2022"
summary: ""
featured_image: header.png
categories:
  - technical
toc: false
---

## Highlights

### QRL Grant Programme

{{< image "./images/h.grants.png" >}}

The QRL Foundation is committed to creating an open-source, secure and resilient blockchain protocol, which is why, last month, the QRL Foundation launched the [QRL Grant Programme](https://qrl.foundation/grants.html) and is seeking to support a proliferation of at least **ten projects with small grants over the next year**

Our program is geared towards equipping developers, companies and teams with the necessary tools to create resourceful projects built on QRL, ultimately expanding its user base. Are you a budding innovator? Do you have an innovative project idea that could leverage quantum-resistant cryptography? Then what are you waiting for? Apply for the QRL Grant Programme now and give your idea that extra boost it needs to become a reality!

While the first round for large grants closes on 2023-01-31, small grant applications may be opened at any time throughout the year for a value of up to 30,000 CHF (Swiss Franc). The first community grant will be announced at the end of the year and applications will be **processed in Q1 2023**.

You can read more about the programme in our [previous blog](/blog/announcing-first-round-of-qrl-grants-programme/).

### QRL Games | Winter Hackathon 2022

{{< image "./images/h.hackathon.png" >}}

Two amazing projects stood out to us during the QRL Games, winter hackathon 2022 which were the **QRL Casino** and **QRL Playing Cards**.

We'd like to reward 12,500 to the QRL Casino and 12,500 to the QRL Card game.

#### QRL Playing Cards

{{< image "./images/cards.png" >}}

Complimenting the Casino theme from 0xFF (below), Discord user Ompanime designed and produced a full deck of QRL playing cards. .The deck is complete with a box design and both light and dark variants! For those tracking, that’s over 106 unique designs that needs to be carefully thought of, illustrated and carefully checked. 

If you haven't already, be sure to check out the [unboxing video on youtube](https://www.youtube.com/watch?v=RuctONczQvg). Are we going to see more decks at our next in-person hackathon?

#### QRL Discord Casino (on QRL Testnet)

{{< image "./images/casino.png" >}}

0xFF meanwhile went to work and created a [QRL Discord Casino](https://discord.gg/KbCeAbjVC2), where (with testnet QRL) you can play Slots, Blackjack, Flip (a coin), and Roll (a dice). Working together with Ompanime, 0xFF used the QRL card designs for a fully branded experience, making it that much more enticing.

The full source can be found on [GitHub](https://github.com/0xFF0/QRLCasino).

## Development Updates

### Project Zond

Lots of work has been put into place over the last few month(s), including:

- Dilithium 5 - go-qrllib has been updated to use the latest Dilithium cryptography having with public key size of 2592 bytes and secret key size of 4595 bytes. Currently Dilithium 5 library is being written in native javascript to extend and ease the support of cryptographic libraries for web3 APIs, web wallet and other Zond ecosystem.
- XMSS - XMSS library is re-written in Python. Unit tests and integration tests for the same is pending, and will be released in pypi once testing code is finished.
- Address format - Team has worked on the new QRL address format starting with Q followed by 64 bytes hex string ( 32 bytes binary data). In order to achieve this, we have made the custom changes in the solidity compiler, which means QRL will release it's own version of Solidity compiler and the existing version of Ethereum Solidity compiler would not work on the next release of the Zond.
- Zond - New P2P & DHT code is in progress, this would improve the P2P networking, will make it more fault tolerant. Whereas the new DHT code will help to find the bootstrap nodes over the network in a much better way.
- Transactions -  We are moving away from having multiple transactions as on our legacy code, to a single transaction, which will be suffice to transfer funds, deploy and call smart contracts. Other transactions like Slave transaction, Message transaction, Stake transaction will be changed into a smart contract.

## Changelog

### theQRL/go-qrllib

**[Implementation of Dilithium 5](https://github.com/theQRL/go-qrllib/pull/23)**
			
- [[39837](https://github.com/theQRL/go-qrllib/commit/8abe66cd5376ea7ae832762e80b0fad161a39837)] Implementation of Dilithium 5		
- [[1b4fb](https://github.com/theQRL/go-qrllib/commit/c1d2eef99f394436fbf565162ef4e6741bd1b4fb)] Code cleanup	

### theQRL/theqrl.org

**[Leon](https://github.com/theQRL/theqrl.org/pull/333)**
			
- [[51518](https://github.com/theQRL/theqrl.org/commit/c0839b2ba4eb7252941f428c2052c149aba51518)] Leon inactive for Next Big Thing		
- [[39a8a](https://github.com/theQRL/theqrl.org/commit/8bc9f26c0ae7ea8f572bfd271704e3a581239a8a)] Merge branch 'theQRL:main' into main		


**[New release: First round of QRL Foundation grants](https://github.com/theQRL/theqrl.org/pull/332)**
			
- [[98226](https://github.com/theQRL/theqrl.org/commit/8092998fd4c686bcd551921bf673c331cf598226)] Fix header		
- [[d5177](https://github.com/theQRL/theqrl.org/commit/afd714d836a6f21a334805853c0dc9ba8cdd5177)] New release: First round of QRL Foundation grants		
- [[23507](https://github.com/theQRL/theqrl.org/commit/ea564e93ad9eaba0b3f9d29f9011512282923507)] Merge remote-tracking branch 'upstream/main'		
- [[05d86](https://github.com/theQRL/theqrl.org/commit/dd94360ef7089d51d95b109f623286b8a2705d86)] Edits		


**[New monthly update blog](https://github.com/theQRL/theqrl.org/pull/331)**
			
- [[f44fc](https://github.com/theQRL/theqrl.org/commit/86ab58dd7b861a6d536fba3f9c07881b250f44fc)] Add image processing for digesting quantum news images		
- [[aeda2](https://github.com/theQRL/theqrl.org/commit/3d6df14727de08d3774f57680ae05cf99a8aeda2)] "Last month at QRL" to "Monthly Updates" for better readability		
- [[b5086](https://github.com/theQRL/theqrl.org/commit/98b0fd39715c537741fab8d4cbfb315a3abb5086)] Quantum News assets		
- [[5f9b4](https://github.com/theQRL/theqrl.org/commit/4fbf669e0b116ce3696b5bada0cc2b40d8f5f9b4)] Add countdown date		
- [[bb7c4](https://github.com/theQRL/theqrl.org/commit/80c501027ec9804eaba1dde564411c1b3dcbb7c4)] Adjust image ref + allow weight sorting (desc)		
- [[0329a](https://github.com/theQRL/theqrl.org/commit/95d662f19996328102da44f09c37775441c0329a)] Add new quantum news articles		
- [[6d37f](https://github.com/theQRL/theqrl.org/commit/7dda8720b9f078e981ef4cc0452e387e0ad6d37f)] Add monthly blog for November	

## Latest advances in quantum computing

{{% qnews start="2022-11-30" end="2022-12-31" %}}