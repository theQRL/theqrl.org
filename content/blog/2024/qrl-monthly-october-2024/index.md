---
layout: blog-post
slug: qrl-monthly-october-2024
date: 2024-11-04
author: "The QRL Core Contributors"
title: "QRL Monthly, October 2024"
summary: "Explore QRL’s latest updates, including a call for post-quantum panel guest recommendations, a beginner’s guide to the quantum threat in blockchain, advancements in post-quantum secure blockchain criteria, and exciting progress on the Zond Chrome Extension Wallet and validator reward systems."
featured_image: header.png
categories:
  - technical
toc: true
---

## QRL Highlights

### Recommend a Post-Quantum Panel Guest

Have a favorite expert in quantum computing, blockchain (or maybe both) who you think would make for a great guest for our new Post Quantum Panel series?

If so, we'd like to have them join us as a guest for an upcoming panel. 

You can share the short video below with them or they can email us directly at info@theqrl.org as well to inquire...

{{< youtube "K19bWVcZIoU" >}}

### Beginner’s Guide to the Quantum Threat: What’s Coming and Why It Matters 🔎

We've just released our latest QRL Show episode...

Beginner’s Guide to the Quantum Threat: What’s Coming and Why It Matters

In this episode, QRL Core team members Ryan Malinowski and Michael Strike sit down to cover a Beginner's Guide to the Quantum Threat, covering everything from what vulnerabilities exist for most blockchain projects today (Bitcoin, Ethereum, etc) to what QRL is doing to address the Quantum Threat.

If you aren't already in the QRL community, this is a must watch. If you are, this episode makes for a good starting point to share with a friend/colleague

{{< youtube "irjyvADDeSE" >}}

### Is your blockchain post-quantum secure? Here's what you need to know

In our latest QRL Show episode, Michael Strike and Ryan Malinowski from the QRL core team go over the criteria for what makes a blockchain project post-quantum secure...covering everything from:

- Does the project have an actual chain?
- ERC-20 != PQ secure
- Is the project contain pq-cryptography recognized by industry experts? (ex: NIST)
- and much more

Check out the full episode at the link below

{{< youtube "YS0NwgWzQ5M" >}}


## QRL Zond Development

### Zond Chrome Extension Wallet

Development on the Zond Chrome Extension Wallet has progressed steadily this month, with several key features and improvements in place:

- **Multiplex Communication System**: The team is actively working on implementing a multiplex communication system within the wallet. 
- **dApp Connectivity**: Basic connectivity between dApps and the Zond Wallet has been established, allowing for seamless interaction. This foundational connectivity is essential for broader interoperability, enabling users to connect their wallet to various decentralized applications with ease.
- **Middleware Development**: Middleware is currently in development to optimize and streamline interactions between the wallet and dApps. Refactoring and code cleanup is in progress.


### Validator Reward System Enhancements and Simulations

- **Defined weight distribution among sync committee, attesters, and block proposers, with ongoing adjustments to the reward and penalty algorithm:** We have established a structured weight system that assigns different levels of influence to the sync committee, attesters, and block proposers. This setup helps ensure that each role contributes proportionately to network security and performance. 
- **Completed reward simulation for the sync committee and partially for the block proposer; attester reward simulation is still underway:** A simulation of reward mechanisms has been successfully created for the sync committee, allowing us to evaluate the effectiveness and distribution of rewards for this group. Work on the attester simulation is also progressing, though partially completed.
- **Developing a block-level reward simulator for all validators, accounting for different roles:** We are working on a comprehensive reward simulator that calculates rewards at the block level, factoring in the various roles validators play in the network. This simulator will provide insights into how rewards are distributed per block based on each validator's contributions, whether as sync committee members, attesters, or block proposers. This approach will support detailed analysis and optimization of reward structures for each role, promoting a balanced and efficient validator ecosystem.

## Quantum Computing Developments

{{% qnews start="2024-10-01" end="2024-10-30" %}}
