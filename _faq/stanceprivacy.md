---
title:  "What is the team's stance on privacy?"
categories: PoS
---

There are many varying definitions of privacy. Some include obfuscated IP addresses (Tor protocol), others use a difficult-to-trace transaction setup and unclear balances (Monero) while still others use zero knowledge proofs (zcash, zclassic).

The method by which the QRL would implement privacy would be the Zk-Stark technique about Zk-Snarks that makes them quantum resistant (detailed by vitalik and some very mathy papers). This would make a private transaction have a size of roughly 400 to 500 kilobytes which is pretty infeasible to include in a block (basic bitcoin transactions are under 300 bytes, our transactions are about 2.1 kilobytes) unless it is limited to one per block and an absolutely massive fee is attached (hundreds of dollars).

For this reason, in addition to legislation in the UK bringing anonyminity into a legal gray area, it is unlikely that the team will pursue implementing it in the near future. We'd like to have a chain that can be utilized by businesses and governments without concern for whether or not doing so would even be legal.

If information science develops further that enables this to be accomplished more efficiently, it might be revisited.

The team desires to be as friendly as possible to independent forks of our chain as we believe they are an important and healthy part of the system we create. It is not unlikely that someone at some point might enable a fork to utilize this privacy technique, but again, it's not something we are pursuing in the short term.