---
layout: qnews
title: Downtime Required for Bitcoin Quantum-Safety
slug: downtime-required-for-bitcoin-quantum-safety
org: arxiv.org
link: https://arxiv.org/abs/2410.16965
date: 2024-10-29
img: /quantum_news/2024/output/1029.arxiv.org
img_caption: ""
img_credits: ""
summary: A recent analysis warns that Bitcoin urgently needs to fast-track its shift to quantum-safe protocols or risk catastrophic vulnerability to quantum computing breakthroughs anticipated possibly within the decade.
threshold: 90
---

A recent technical cost analysis highlights the urgency of preparing the Bitcoin network for the looming challenge of quantum computing. Quantum computers, once operational, would threaten Bitcoin's existing public-key cryptosystems, which rely on encryption that quantum computing could theoretically break.

The paper suggests a proactive approach, recommending an upgrade to quantum-safe protocols to secure the network. This upgrade, however, would involve significant downtime, challenging for a network that processes a value throughput of $1.45 billion per hour. To ensure security, the paper outlines a two-step plan:

1. Mandating that all new transactions and accounts be quantum-safe.
2. Moving all currently unspent Bitcoin wallets to quantum-safe protocols, which would temporarily disrupt normal operations as upgrade transactions compete with regular ones.

The technical analysis estimates that this upgrade process could take anywhere **from 76 to 152 days** assuming migrating 186m wallets, depending on how much of the network is dedicated towards migration transactions. Concerns were raised that some may advocate for a slower, prolonged upgrade to minimize disruption. Additionally, the work by Stewart et al. (and others) presumes that only a portion of Bitcoin’s unspent transaction outputs (UTXOs) need to be quantum-safe initially, allowing for incremental implementation.

The authors ultimately caution that Bitcoin’s current upgrade trajectory may be unsustainable. To ensure quantum resilience, the paper emphasizes the need to expedite the move to quantum-safe protocols or explore advanced strategies that offer stronger, more adaptable protections.

