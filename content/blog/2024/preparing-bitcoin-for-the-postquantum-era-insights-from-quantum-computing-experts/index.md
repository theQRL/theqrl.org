---
layout: blog-post
slug: preparing-bitcoin-for-the-postquantum-era-insights-from-quantum-computing-experts
date: 2024-11-15
author: "The QRL Core Contributors"
title: "Preparing Bitcoin for the Post-Quantum Era: Insights from Quantum Computing Experts"
summary: Quantum computing threatens Bitcoin’s cryptographic security, as highlighted in the latest episode of The QRL Show, featuring experts from the QRL Core Team and co-authors of the paper “Downtime Required for Bitcoin Quantum Safety”. The panel covered the downtime that Bitcoin would go through and emphasized the urgency of transitioning to quantum-resistant algorithms to prevent to safeguard the future of decentralized finance.
featured_image: header.png
categories:
  - video
toc: true
youtube: uyYbW1Yb_to
---

As quantum computing continues to advance, it poses significant threats to the cryptographic systems securing Bitcoin, distributed ledgers, and cryptocurrencies that aren’t post-quantum secure.

In a recent episode of [The QRL Show](ttps://www.youtube.com/c/QRLedger), Ryan Malinowski and Michael Strike from the QRL Core Team hosted their latest Post-Quantum Panel Series with Dr. Carlos A. Pérez-Delgado, Joseph P. Kearney, and Jamie P. Pont to discuss their latest paper, "[Downtime Required for Bitcoin Quantum Safety](https://arxiv.org/html/2410.16965v1)". Their paper sheds some heavy light on the challenges and necessary steps needed to safeguard blockchain technology against quantum attacks.

## Understanding the Quantum Threat to Bitcoin and Cryptocurrencies

Quantum computers have the potential to break the cryptographic algorithms that currently secure Bitcoin transactions. 

Traditional encryption methods (RSA, ECDSA) rely on mathematical problems that are hard for classical computers to solve but will be easy for powerful quantum computers equipped with Shor's algorithm. 

This means that once sufficiently quantum computers become available, they could decrypt public keys, allowing malicious actors to steal funds and compromise the integrity of the blockchain.

## Key Quantum Vulnerabilities in Current Cryptographic Systems

The co-authors emphasized on two primary quantum algorithms that threaten cryptographic security which we cover often on The QRL Show. Those are:

- **Shor's Algorithm:** Developed by [Peter Shor](https://en.wikipedia.org/wiki/Peter_Shor), this algorithm is capable of factoring large numbers and solving discrete logarithms exponentially faster than classical computers. This directly impacts RSA and ECDSA algorithms used in Bitcoin, leaving private keys vulnerable.
- **Grover's Algorithm:** This algorithm provides a quadratic speedup for unstructured search problems, affecting hash functions and symmetric cryptography. While less severe than Shor's Algorithm, it still poses risks to proof-of-work systems and could reduce the security level of hashing algorithms down the road.

These vulnerabilities mean that without quantum-resistant algorithms, the foundational security of cryptocurrencies used today is at risk.

## The Complexity of Achieving Consensus for Quantum-Resistant Bitcoin

Implementing such a significant upgrade requires consensus from a large majority of the network's participants- everyone from miners, developers, and node operators. Achieving this level of agreement is historically challenging, as seen in past upgrades like SegWit. 

The decentralized nature of Bitcoin, while a strength, becomes a hurdle when rapid, coordinated action is what’s most needed. The sheer scale of orchestrating a global agreement on protocol changes, updating software, and ensuring compatibility adds even more layers of complexity to the lofty transition.

## Why Migrating Bitcoin’s Blockchain for Quantum Security Is Challenging

Once this global agreement on protocol changes and updates happen (*a process that can span **years***), there's still the need to migrate wallets to be post-quantum secure.

The co-authoers/panelists research indicates that performing a full upgrade would require at least **76.16 days** of continuous processing time, during which the Bitcoin network would need to be dedicated solely to the upgrade process. This period doesn't account for realistic constraints like network overhead, transaction verification times, and the impossibility of halting all other transactions. Spreading the upgrade over a longer period to minimize disruption would only extend the total time required, potentially exceeding practical limits before quantum computers become a real threat. To be determined.



## Potential Consequences if Bitcoin Isn't Upgraded

Failure to address these vulnerabilities could have some catastrophic consequences:

- **Digital Asset Theft:** Quantum computers could allow attackers to derive private keys from public ones, enabling them to steal funds from wallets, especially those with exposed public keys. 
- **Network Trust Erosion:** Successful quantum attacks would undermine confidence in the blockchain's security, potentially leading to a collapse in Bitcoin's value and utility. 
- **Irreversible Damage:** Since blockchain transactions are immutable, stolen funds and corrupted transactions cannot be reversed. This causes permanent losses- no questions asked.

Within this section of the panel, the co-authors highlighted that older Bitcoin addresses (ex: Satoshi’s coins) are particularly at risk since their public keys are already exposed.

## Next Steps Blockchain Communities Can Take to Prepare for Quantum Threats

Proactive measures are essential. Here were a few brought up during this panel:

- **Adopt Quantum-Resistant Algorithms:** Developers should integrate post-quantum cryptographic algorithms into blockchain protocols. Projects like the Quantum Resistant Ledger (QRL) have been pioneering in this area since genesis.
- **Increase Awareness and Education:** The community needs to understand the urgency of the quantum threat to advocate for necessary changes effectively.
- **Test and Deploy Gradually:** Begin integrating quantum-resistant features in test environments to identify potential issues before full-scale deployment.

The experts stressed that these steps require immediate attention due to the unpredictable timeline of quantum computing advancements.

## Conclusion: The Urgency of Quantum Security Awareness

While quantum computers capable of breaking Bitcoin's encryption might still be years away, the time to act is now. 

The blockchain community must prioritize quantum resistance to safeguard the future of decentralized finance. To delve deeper into this critical discussion, you can check out and watch the full episode of the [QRL Show](https://www.youtube.com/c/QRLedger) (video embedded above) and stay updated on the latest advancements in post-quantum cryptography.

By incorporating these insights, the blockchain community can better prepare for the quantum threat, ensuring the continued security and reliability of your digital assets.

To join more discussion on this and to dive deeper down the rabbit hole, be sure to join our lively [QRL Discord](https://theqrl.org/discord) community or take a minute to create your own [post-quantum secure crypto wallet](https://wallet.theqrl.org/).
