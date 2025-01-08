---
layout: blog-post
slug: qrl-monthly-december-2024
date: 2025-01-01
author: "The QRL Core Contributors"
title: "QRL Monthly, December 2024"
summary: "QRL Zond advances beyond quantum resilience with extensive end-to-end testing, critical terminology updates to reflect a quantum-resistant ecosystem, seamless Vortex IDE integration for developers, and significant progress in Ledger hardware wallet support. Stay ahead of the quantum threat as we prepare to launch QRL Zond Testnet V1 in Q1 2025, ensuring a secure and scalable blockchain future."
featured_image: header.png
categories:
  - technical
toc: true
---

## QRL Zond Development Update: Navigating Towards Quantum Resilience

Welcome back to our monthly update, where we delve into the ongoing development of QRL Zond and our progress in fortifying blockchain against the looming threat of quantum computing. 

This month, we've been focused on rigorous testing, crucial nomenclature updates, enhanced developer tooling, and advancements in hardware wallet integration. Let's break down the key developments.

### Rigorous Testing for Network Stability

Ensuring the robustness and reliability of the QRL Zond network is paramount. To that end, we've intensified our testing procedures to simulate real-world scenarios and identify potential bottlenecks.

- **End-to-End Testing Enhancements:** We've updated our `qrysm` end-to-end (E2E) tests to support extended durations, now running for over two hours. These tests involve a network of 2,625 validators, simulating a large-scale, production-like environment. This allows us to rigorously analyze the network's behavior under stress, particularly in relation to validator reward and emission rates. This is crucial for understanding network dynamics and ensuring stability as the network scales.
- **Block Reward Simulation:** Our E2E tests are currently being further modified to accurately simulate the new block reward mechanism. This is essential to validate the economic model of the Zond network and ensure that the reward system functions as intended.

These testing efforts are pivotal for validating the performance of the QRL Zond network and ensuring it can handle the demands of a industrial grade, quantum-resistant blockchain.

### Nomenclature updates

A critical part of our development has been the refinement of our terminology to better reflect the unique architecture of the QRL Zond project. These changes are more than cosmetic; they represent a shift toward a purpose-built quantum-resistant ecosystem.

We have successfully completed several key name changes, transitioning from the legacy EVM to the **ZVM (Zond Virtual Machine)**, and from Solidity to **Hyperion**. This includes the corresponding unit tests to ensure the changes are properly integrated. These name changes are essential to differentiate our technology from Ethereum, and highlight our unique, quantum-resistant approach. Though the names are different, transitioning from working in the Ethereum ecosystem with things like Solidity and EVM won't be. We are currently in the process of updating `qrysm`, `web3.js`, and `go-zond` to reflect these new names. These updates will ensure consistency across our ecosystem and facilitate a smooth transition for developers. These changes underscore our commitment to building a cohesive, quantum-resistant ecosystem.

### Empowering Developers with Vortex IDE (Remix IDE) Integration

To enhance the developer experience and streamline the process of building on QRL Zond, we are actively integrating our technology with popular development tools such as Remix IDE, which we're calling Vortex IDE.

- **Vortex IDE Integration:** We are updating the Vortex IDE to provide native support for QRL Zond. This includes integrating the QRL Zond web3 library into Remix, enabling developers to interact with the Zond network directly from the IDE. 
- **Vortex Compiler and Deployment:** While the Vortex IDE compiler is now functioning after our modifications, we are still working on the deployment functionality via the IDE. This will enable developers to write, compile, and deploy Hyperion contracts seamlessly.

This integration with Vortex IDE is a significant step towards making the QRL platform more accessible and user-friendly for developers.

### Hardware Wallet Integration: Secure Key Management

Hardware wallet support is a crucial component of our security strategy. We've made significant progress in integrating QRL Zond with Ledger devices.

- **Dilithium Key Generation Optimization:** We encountered memory issues with the Ledger app during Dilithium key generation. Our team has optimized and re-written the key generation algorithm to reduce memory consumption, resulting in the successful generation of Dilithium public and secret keys.
- **Dilithium Signing Optimization:** While Dilithium signing is currently crashing due to memory limitations, we are actively working to optimize this process. This is a complex task that requires careful engineering, and we are making progress towards a solution that is both secure and efficient.

These advancements in Ledger integration are critical for ensuring the secure storage and management of private keys on the QRL Zond network.

## Media: In case you missed it!

### Project Zond AMA with Lead Blockchain Developer (Kaushal Kumar Singh) 

{{< youtube "FuJMQhW9d0M" >}}

We're excited to sit down with our lead blockchain developer Kaushal Kumar Singh to share updates on Project Zond, our next-generation blockchain that's post-quantum secure and transitioning to Proof of Stake (PoS). 

Key aspects covered

- What is Project Zond?
- What new possibilities (or use cases) will Zond give for devs and users in the QRL ecosystem?
- What are the biggest innovations in Project Zond compared to the current QRL mainnet?
- What specific tools or features does Zond introduce to make it easier for developers to build on the QRL ecosystem?
- How does Zond maintain QRL’s core principle of quantum resistance while it’s transitioning to PoS?
- How does Zond’s testnet provide value to developers? why build today as opposed to waiting
- What stage are we at? in terms of testnet to mainnet, etc
- Tokenomics - What will validator rewards look like? How will the emission curve change (if at all) when compared to what we have now (continuous decay of block rewards)?
- What are the audit plans for Zond?
- What consensus mechanism does Zond use, and how does it ensure security and decentralization? How does Zond tackle interoperability with other blockchain networks?
- Additional Questions
- Benefits of developing in the Zond ecosystem now

### QRL Post-Quantum Panel with Olivier Ezratty & Dr. Bob Sutor | Episode #3 

{{< youtube "QLCSSkL-l7s" >}}

We were joined last month by two quantum experts: Olivier, author of "Understanding Quantum Technologies," and Bob, author of "Dancing with Qubits." Both have extensive experience in the field and are skilled at making complex technology accessible to a broader audience. 

During our discussion, we explored why quantum computing matters and its potential impact on society. Olivier explained that quantum computers use phenomena like superposition and entanglement to control individual objects, enabling advancements in areas like quantum sensing, communication, and computing.

Key aspects covered

- Introduction + Background on our PQ Panel Guests
- For those who aren’t deeply in the tech industry, how would each of you describe why quantum computing matters? And how will it affect individuals’ lives as well as society as a whole?
- Shor's Algorithm
- How do you see the evolution of quantum computing going over the next 5-10 years…specifically in terms of accessibility and practical applications?"
- How do each of you see quantum computing intersecting with AI? What might this combo unlock that we can’t achieve today with classical computers?
- Various scenarios in the future
- Olivier Ezratty on his book, Understanding Quantum Technologies
- Bob Sutor on his book, Dancing with Qubits

## Looking Forward


This month, we've made significant strides in building a quantum-resistant blockchain, with rigorous testing, crucial terminology updates, and enhanced developer tooling. Our Ledger integration is a major milestone, demonstrating our commitment to the highest standards of security and usability. We're also pushing forward with deployment via the Remix IDE and optimizing Dilithium signing for Ledger devices - two critical priorities that will take our ecosystem to the next level.

But here's the exciting part: **QRL Zond Testnet V1 is coming in Q1 2025**, giving you the chance to start developing and testing your migrations in our ecosystem with EVM-compatible smart contracts. Imagine being able to future-proof your project against quantum attacks, with the peace of mind that comes with knowing your code is secure.

To those developers out there, you know that the rise of quantum computing poses a significant threat to the security of current and future projects in the works. But what if you could stay ahead of the curve and ensure your project's integrity against even the most powerful quantum attacks? That's exactly what we're working towards.

**The quantum threat is real, but we're one step ahead *and you can be too*.**

Don't just stand by and watch the future unfold; be a part of building it. Our [updated roadmap](/roadmap) is your guide to understanding the path to mainnet. It's not just a schedule; it's a call to arms for developers ready to face the quantum challenge head-on.

{{< button url="/roadmap" text="See our roadmap" >}}

## Quantum Computing Developments

{{% qnews start="2024-12-01" end="2024-12-31" threshold="80" %}}