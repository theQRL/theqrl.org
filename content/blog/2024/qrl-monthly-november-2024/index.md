---
layout: blog-post
slug: qrl-monthly-november-2024
date: 2024-12-12
author: "The QRL Core Contributors"
title: "QRL Monthly, November 2024"
summary: "We've made significant progress this month in bolstering the security and usability of QRL Zond. Key advancements include validator reward simulations, a new address format, cryptography library updates, and improvements to wallet provider tools for easier developer integration"
featured_image: header.png
categories:
  - technical
toc: true
---

## QRL Zond Development Update

> **What is QRL Zond?** 
> QRL Zond is the codename for the Quantum Resistant Ledger's (QRL) next-generation blockchain network, designed to maintain post-quantum security while introducing a host of cutting-edge features. Building upon QRL's proven six-year track record of a robust, production-grade mainnet that utilized a proof-of-work consensus mechanism, Zond represents a significant evolution in the project's development.
> 
> At its core, Zond transitions QRL from proof-of-work (PoW) to a more energy-efficient and scalable proof-of-stake (PoS) consensus algorithm. This change aligns with the growing industry trend toward sustainability while maintaining QRL's hallmark commitment to quantum resistance.
>
> The introduction of Ethereum Virtual Machine (EVM) compatibility and Web3.js support is another transformative addition. These features allow developers to deploy and interact with smart contracts written in Solidity, leveraging the expansive Ethereum ecosystem. This compatibility ensures that developers familiar with Ethereum tools can seamlessly build and deploy decentralized applications (dApps) on the Zond network, tapping into QRL’s unique post-quantum security guarantees.
>
> By blending quantum-resistance with the versatility of EVM and Web3.js, QRL Zond aims to position itself as a pioneering blockchain platform capable of supporting both legacy systems and emerging use cases in a post-quantum world. This innovative direction reaffirms QRL's leadership in secure blockchain technology while broadening its utility and appeal to developers, enterprises, and institutions.

This month, our development efforts have been concentrated on several key areas: 

- Validator reward simulations
- Address format enhancements
- Cryptography library updates, and 
- Wallet provider improvements 
 
In this update, we delve into the technical progress made, detailing how these advancements bolster our mission to maintain a robust, secure, and future-proof blockchain ecosystem.

### Validator Reward Simulations and Block Rewards

Securing a fair and trustworthy consensus mechanism is crucial for maintaining the integrity of any blockchain network. We have achieved notable progress in simulating validator rewards within the [Qrysm](https://github.com/theQRL/qrysm) framework, our quantum-resistant version of the Ethereum 2.0 Beacon Chain.

Validators in our network assume critical roles:

- **Block Proposers**: They are responsible for proposing new blocks to the blockchain.
- **Attesters**: They verify and attest to the validity of proposed blocks.
- **Sync Committee Members**: They facilitate rapid synchronization across the network.

We are testing end-to-end (E2E) reward simulations through various network scenarios to ensure that reward distributions are fair and effectively incentivize proper participation. Adjustments to validator reward values are underway, informed by data derived from these simulations.

### Address Format Enhancements for Zond, web3.js and Qrysm

In our pursuit of enhanced security and interoperability, we are implementing a new address format for Zond. Our development team has updated Zond, Qrysm, and Web3.js to support the new address format. 

This update ensures seamless integration across our ecosystem and prepares the platform for upcoming features that leverage advanced cryptographic primitives.

### Cryptography Library and Wallet Implementations

Cryptography is fundamental to blockchain security, and we are dedicated to upholding advanced cryptographic standards. We carried out considerable refactoring on our JavaScript cryptography libraries—`qrypto.js` and `wallet.js` to improve code efficiency, maintainability, and security.

We are evaluating modifications to the implementation of the eXtended Merkle Signature Scheme (XMSS) in our wallet applications. XMSS is a hash-based signature framework that provides robust security assurances against quantum threats. Enhancing our XMSS implementation fortifies the quantum resistance of our network and ensures the durability of digital assets secured on our platform.

**Overview:**

- Refactored `qrypto.js` and `wallet.js` for improved performance.
- Reviewed and enhanced the JavaScript cryptography libraries.
- Updated XMSS wallet implementations to bolster security against quantum attacks.
- Ensured all cryptographic tools meet the highest standards of quantum resistance.

### Wallet Provider Updates and Tool Refinements

User experience and developer accessibility are critical to the adoption of quantum-resistant technologies. We have resolved all outstanding tests for the `zond-wallet-provider`, ensuring its reliability and performance. The release of the npm package for [zond-wallet-provider](https://www.npmjs.com/package/@theqrl/zond-wallet-provider) marks a significant milestone, enabling developers to easily integrate our quantum-resistant solutions into their applications.

We are also progressing with the refactoring of the web3 browser extension, currently named the `zond-web3-wallet`. This effort focuses on enhancing usability, streamlining interactions with the QRL blockchain, and providing a seamless experience for end-users.

**Overview:**

- Fixed all tests for the `zond-wallet-provider`, ensuring robust functionality.
- Released the npm package for `zond-wallet-provider` for developer access.
- Continued refactoring of `zond-web3-wallet` to improve user experience.
- Enhanced developer tools to facilitate the integration of quantum-resistant features.

### Advancing QVM (Virtual Machine...) Compatibility and Support

Interoperability with existing blockchain infrastructures is essential for widespread adoption. We are developing support for the new address format within the QVM context, accompanied by rigorous unit testing. This advancement allows developers familiar with Ethereum to seamlessly integrate quantum-resistant features, promoting the adoption of secure blockchain practices.

**Overview:**

- Developed QVM support for the new address format.
- Implemented comprehensive unit tests to validate functionality.
- Enhanced compatibility between QRL and other blockchain ecosystems.
- Prepared the platform for future interoperability initiatives.

##  Downtime Required for Bitcoin Quantum-Safety | QRL Post-Quantum Panel - Episode #2 

In our latest QRL Post-Quantum Panel episode on The QRL Show, we were joined by the co-authors of the new paper, "[Downtime Required for Bitcoin Quantum-Safety](https://arxiv.org/abs/2410.16965)".

The team behind it are experts in the field and have worked together on their latest paper from the School of Computing at the University of Kent in Canterbury, England.

In this panel episode, we cover:

- What threat(s) does quantum computing pose to Bitcoin
- How they arrived at the numbers in their paper
- Which scenario do they see as most likely to play out (can Bitcoin hard fork?)
- Technical costs of implementing these safeguards in blockchains
- ... and much more

You don’t want to miss this episode...you can view it embedded below

{{< youtube "uyYbW1Yb_to" >}}

## Advancing Quantum-Secure Blockchain: Project Zond's Latest Milestones

This month's developments reflect our dedicated efforts to fortify the Quantum Resistant Ledger's Project Zond against the evolving landscape of quantum computing threats. By focusing on validator reward simulations, address format enhancements, cryptographic library updates, and wallet provider improvements, we are reinforcing the foundational pillars of our network.

Our primary efforts are directed towards completing the validator reward simulations, finalizing changes to address formats, and enhancing our cryptographic implementations to bolster security. These steps lead us to the configuration of parameter values that are crucial for the seamless operation of the blockchain.

As we approach the finish line for Project Zond's final release, exciting developments are on the horizon. After completing these essential tasks, audits will take place, allowing us to allocate development resources towards enhancing our tools and fostering a dynamic community project space. These initiatives are set to enhance the ecosystem and propel future innovations. With a steadfast dedication to innovation and security, QRL stands out as the premier solution for combating quantum threats within the blockchain landscape. 

Together, we are shaping the future of blockchain technology—one that remains secure in the face of quantum advancements. We invite our community, developers, and stakeholders to join us on this journey as we build a secure and resilient future for decentralized technologies.

---

*Stay updated with our latest developments by following our official channels and participating in our community discussions. Your support and collaboration are invaluable as we continue to innovate and protect the future of blockchain technology.*

## Quantum Computing Developments

{{% qnews start="2024-11-01" end="2024-11-30" threshold=80 %}}
