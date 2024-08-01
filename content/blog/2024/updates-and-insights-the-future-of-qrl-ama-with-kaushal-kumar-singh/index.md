---
layout: blog-post
slug: updates-and-insights-the-future-of-qrl-ama-with-kaushal-kumar-singh
date: 2024-07-31
author: "The QRL Core Contributors"
title: "Updates and Insights: The Future of QRL AMA with lead developer Kaushal Kumar Singh"
summary: "In our recent AMA session, lead developer Kaushal Kumar Singh shared significant progress updates and the future vision for the Zond project. Key highlights included advancements in quantum-secure features, seamless Ethereum integration, and an upcoming user-friendly wallet extension."
featured_image: header.png
categories:
  - Video
toc: true
youtube: uOwqTQy7wOw
---


## Opening

In our latest AMA session, we had the pleasure of sitting down with Kaushal Kumar Singh, the lead developer of the QRL project, to discuss the exciting advancements and future direction of Zond. 

Since our [last update](https://www.youtube.com/watch?v=AzUqtH1a8m4), significant progress has been made in various facets of the project. As we gear up for the final stages of development, this AMA provides a comprehensive look at what the community can expect in the coming months, from seamless transitions for Ethereum developers to key timelines and upcoming audits. 

Join us as we delve into the latest updates and insights into the future of QRL and Zond.

## Q1: Since that AMA back in April what has progress been like? What stage are we at and what do timelines look like from here?

### Progress since the last AMA

* Code cleanup: Removed unnecessary code related to Proof of Work, inherited from Ethereum and Prismatic Labs.
* Implementation of XMSS in the JavaScript library: A pull request has been submitted and is being reviewed.
* Progress on Chrome extension wallet, similar to MetaMask, to interact with the Solidity compiler.
* Review of critical parts, including block reward computation.

### Current Stage

* Most of the unnecessary code has been removed.
* XMSS implementation is in progress.
* Chrome extension wallet development is ongoing, expected to be finished by the end of December.

### Timelines

* Chrome extension wallet: Expected to be finished by the end of December.
* Development wrap-up: Expected to be completed by January or mid-February 2025.
* Audit:
	+ Some components, like the cryptography libraries and MetaMask-like wallet, may be audited before January.
	+ The main code, including the consensus algorithm, will be audited around January or mid-February 2025.

Previous AMA can be found on [our YouTube Channel](https://www.youtube.com/watch?v=AzUqtH1a8m4).

{{< youtube "AzUqtH1a8m4" >}}

## Q2: How does Zond ensure a seamless transition for developers and users migrating from Ethereum?

### Introduction of MetaMask-like Wallet

Zond will feature a user-friendly wallet extension similar to MetaMask, enhancing accessibility and usability for users.

### Seamless Solidity Compatibility

Developers experienced with Ethereum's Solidity will find it easy to deploy their applications on Zond with only minimal adjustments needed for compatibility.

### Focus on User Experience

The design prioritizes maintaining a familiar interface and user experience, reducing the learning curve for those transitioning from Ethereum.

### Minimal Changes in OpCodes

While there will be some differences in opcodes due to varying cryptographic approaches, 95-98% of the existing Solidity codebase will remain unchanged, ensuring high compatibility.

### Comprehensive Documentation

Detailed documentation will provide clear guidance on the differences between traditional Solidity and Zond's version, making it easier for developers to adapt.

### NFT Migration Capability

The Zond will allow for the straightforward migration of NFTs from Ethereum with little to no modification required in their smart contracts, fostering greater interoperability.

These features collectively aim to enhance the user and developer experience on the Zond by making the transition from Ethereum as smooth as possible, ultimately encouraging broader adoption and innovation within the blockchain ecosystem.


## Q3: How can new developers get involved in contributing to the QRL project and start writing their own Quantum-Secure code in Solidity?  

### Access to Resources and Examples

The QRL project provides a publicly accessible testnet along with example code hosted on GitHub. The repository includes a "Zond contract example," which features a simple ERC-20 token smart contract. This resource is invaluable for new developers as it provides a practical starting point to understand how to write, deploy, and interact with smart contracts on the Zond blockchain.

### Utilizing Web3.js

The use of the Web3.js library is emphasized, allowing developers to deploy their smart contracts and engage in both on-chain and off-chain interactions. For instance, querying token balances is considered an off-chain operation that developers can perform without incurring transaction costs, thereby facilitating testing and exploration without financial barriers.

### Building and Interacting with Smart Contracts

New developers can learn how to both transfer ERC-20 tokens on the blockchain (an on-chain activity) and perform various operations using the existing examples provided in the repository. This not only boosts confidence but also reduces the initial learning curve for interacting with blockchain technology.


### Cryptography and Wallet Libraries

QRL offers a comprehensive set of libraries, including crypto.js for cryptographic functions and wallet.js for wallet-related operations. These libraries can be integrated easily as dependencies in projects using NPM, simplifying the process for developers aiming to incorporate secure functionalities into their applications.

### Future Development Considerations

Although the wallet extension (akin to MetaMask) is not yet available, current development can still proceed on backend functionalities. Developers are assured that future changes will be reflected in existing libraries, meaning they only need to stay updated by upgrading their library versions to adapt to any modifications.

### Community Support and Communication

The QRL team encourages developers to reach out for support through email or Discord, fostering an environment of collaboration and assistance. This accessibility is crucial as it reassures new developers that they will have help navigating challenges or questions that arise during development.

## Q4: Is Zond development progress moving along as expected? what should community keep look out for in terms of what is on roadmap to come?

Zond’s development is currently on track, with the team making steady advancements in various project areas. 

### Upcoming milestones

One of the most significant upcoming tasks is finalizing the reward and penalty algorithms within the next month. After the completion of the reward and penalty changes, the focus will shift to integrating the XMSS wallet into the ecosystem. Currently, only the dilithium wallet is available for staking and transactions, while XMSS is expected to support regular transactions without staking capabilities due to its key limitations. 

Once those two tasks are completed, the final and critical step for us will be to change the address format, which is a key aspect of the process. Currently, we do not foresee any major roadblocks that would raise concerns. However, it is essential for us to thoroughly understand how these changes will impact the extensive codebase. To avoid any unforeseen issues, we are meticulously reviewing the code line by line to ensure a complete understanding of our work. 

## Q5: Zond Upgrade: Can you list off features from a high level so people can know what to expect?

The upcoming Zond upgrade encompasses a range of high-level features that aim to enhance the network's security, functionality, and user experience. Here's a concise summary of what to expect:


### Consensus Mechanism Shift

The consensus algorithm will transition from Proof of Work (PoW) to Proof of Stake (PoS), providing a more efficient and scalable network.

### New Cryptographic Wallet - Dilithium

Introducing a new cryptographic wallet utilizing the latest version of Dilithium 5, offering unlimited signatures, high security per NIST standards, and potential adaptability for future quantum cryptographic advancements.

### Maintaining Multiple DSAs

The upgrade retains support for multiple Digital Signature Algorithms (DSAs), including backward compatibility with XMSS while integrating the stateful and secure Dilithium.

### Smart Contracts Integration

The upgrade features the implementation of smart contracts, a non-existent element in the current node, now available and live on the Zond dashboard.

### Chrome Extension Wallet

A new Chrome extension wallet, similar to MetaMask, aims to simplify interactions with decentralized applications for users.

### Comprehensive Library Support

Extensive libraries like crypto.js for cryptographic functions and wallet.js for wallet-specific implementations will be included, supporting all post-quantum cryptographies used in the Zond architecture.

### Remix IDE Integration

The introduction of a custom Integrated Development Environment (IDE) for Solidity, complete with a modified Solidity Compiler to accommodate changes in opcode.

### Post-Quantum Security

Unlike other networks, Zond's blockchain has been post-quantum secure from the first block, avoiding the need for future migration challenges associated with quantum cryptographic threats.

## Q6: Of all the different types of hard forks that a project might have to do, can you think of one that is more difficult than going PQ secure?

### Hardcoded Addresses

Many smart contracts reference addresses that were generated using outdated cryptographic algorithms. If the blockchain transitions to PQ security, these hardcoded addresses may become incompatible, jeopardizing the funds locked in these contracts.

### Time-Dependent Contracts

Smart contracts that release funds based on specific time blocks create additional complications. If the funds are locked until the contract's conditions are met, any PQ fork during this period may leave the locked funds vulnerable to exploitation once they are finally accessible, especially if they can be attacked by quantum computers.

### Lack for Centralized Control

In the absence of a centralized authority to manage the transition, the process could become chaotic. This raises concerns about how funds can be safely migrated or managed during and after the fork.

## Q7: What audit plans exist for Zond?

We have to audit everything, including the cryptography library that has been implemented both in Golang and JavaScript. We have to also get the Chrome extension wallet that we are developing similar to MetaMask that has to be audited. The compiler code that we are going to modify, the Solidity compiler code, that has to be audited.

Then we have the remix ID that also has to be audited and the most critical part is the consensus algorithm which we have in the beacon node and the Zond which is the execution engine. So these two also has to be executed. But all of the audit will not start at the same time because we believe crypto .js library and the cryptography library both in JavaScript and the Golang will be finished before the node. So we will start having the audit for that initially so that meanwhile they are getting audited, we are going to finish our pending task into the beacon chain and the execution engine. And once they are done, then the final will be this beacon node and this engine.

Meanwhile we will get everything like the CryptoJS, Solidity Compiler and the Remix ID all of them get audited. With the auditors, so we are hoping to at least have two audits for both Zond and which is the execution engine and the beacon chain which is QRYSM. So we want to have at least two auditors who is going to do audit both of them. So it's like not one audit, two audits for both of them.

For other non-critical parts, it's fine to have one auditor because they are not very much critical, but still good to have audited.

## Q8: How will scaling be addressed?

### Understanding Post-Quantum Cryptography:

Traditional cryptographic methods like ECDSA have established scaling solutions such as signature aggregation. These don’t yet exist for post-quantum cryptography. Current post-quantum cryptographic methods require more research and development to achieve similar scaling solutions.

### Research and Development are Ongoing:

There's active progress in the cryptographic community. Although it will take time, advancements in post-quantum cryptography are expected. Aggregation and zero-knowledge proofs are key areas of focus for scaling.

### Zero-Knowledge Proofs (ZKP):

Non-post-quantum cryptography benefits from zkSNARKs, allowing the storage of proofs instead of entire transaction signatures. This facilitates future verification without storing extensive data. Post-quantum cryptography is exploring zkSTARKs, a ZKP method that is inherently post-quantum but currently incompatible with many cryptographic operations like bitwise operators used in dilithium and XMSS.

### Current Limitations and Future Prospects:

ZkSTARKs don’t work with bitwise operators, limiting their immediate application in post-quantum cryptography. Future research might resolve these incompatibilities, making ZKPs a potential solution for scalability.

### Prioritizing Scalability Post-Zond:

Once Zond is released, the team's next priority will be addressing scalability. This will involve closely monitoring ongoing research and incorporating new advancements in post-quantum cryptography.

### Timeframe and Evolution:

Scaling solutions will take time to develop and standardize. Comparing the evolution of dilithium, which took several years to standardize, similar timelines are expected for new scaling solutions. The cryptography used now has evolved through rigorous review and standardization, and this process will continue with scalability solutions.

In summary, scaling in post-quantum cryptography is a developing field. While current limitations exist, ongoing research and future advancements are expected to provide viable solutions. Post-Zond, the team will focus on integrating these emerging technologies to enhance scalability.

## Q9: Anything else you’d like viewers to know at this moment on Zond that we haven’t already covered?

We've covered most points, but viewers can keep up with our development progress through our available documentation. For those looking to get ahead, we offer cryptography libraries in Golang and JavaScript, which are beneficial for creating decentralized applications. You can start building on Zond today, even though our ecosystem isn't fully complete. We're here to assist developers in getting started on our testnet and smoothly transitioning to the final versions of our libraries once they're released.

## Closing

As we wrap up this AMA, we're excited about the future of Zond and the strides we're making towards the defining quantum-safe blockchain ecosystem. With seamless Ethereum integration, user-friendly tools, and upcoming audits, our journey is just beginning.

Stay tuned for more updates and join us as we shape the future of secure blockchain technology. Thank you for being a vital part of our community!