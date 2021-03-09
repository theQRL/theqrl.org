---
layout: blog-post
slug: insight-researchers-partners-with-the-quantum-resistant-ledger
date: 2020-09-22
author: "Jack Matier"
title: "Insight Researchers partners with the  Quantum Resistant Ledger"
featured_image: 1WSgS6fdxW21SZ6CO-YERmA.sm.png
images:
  - 1WSgS6fdxW21SZ6CO-YERmA.sm.png
categories:
  - press
  - technical
---

***Zug, Switzerland, September 25th, 2020** — [The Quantum Resistant Ledger (QRL) Foundation](https://qrl.foundation/), creator of the world’s leading quantum-secure blockchain network and digital asset platform, has partnered with [Insight’s](https://insightfellows.com/) quantum cryptography research team to continue to set the global standard towards its quantum-secure Proof-of-Stake network, a progression of its quantum-secure Proof-of-Work network presently in place.*

At QRL, we pride ourselves on being a pioneering [open-source](https://github.com/theQRL/QRL/blob/master/LICENSE) blockchain platform backed by [peer-reviewed research](https://theqrl.org/research/#s:citations) and secure, soundly structured, and well-tested code [audited in full by multiple third parties](https://github.com/theQRL/audits).

The partnership with [Insight](https://insightfellows.com/) and its quantum cryptography working group (which includes the researchers Adam Corbo, Brandon Goodell, and Mitchell Krawiec-Thayer) is a continuation of that foundation of scientific principles to move blockchain forward securely into the next era.

The primary focus will be towards QRL’s Proof-of-Stake network with research into lattice cryptography and signature aggregation. These key elements will allow QRL to reduce the overall block-size, allowing for a higher number of validators per epoch, and improve its scalability.

From QRL’s inception, it has adopted a [crypto-agile](https://en.wikipedia.org/wiki/Crypto-agility) approach characterized by an [address format designed to be adaptable to future signature schemes](https://docs.theqrl.org/developers/address/), such as those established by [NIST’s call for post-quantum cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography). This gives the distinct advantage of being able to update signature schemes, and, in the case of the adversarial future quantum computers present, to sustain an end-to-end quantum secure blockchain network while doing so.

It is with this in mind, a secondary research focus will be towards the implementation of [Falcon](https://falcon-sign.info/), a stateless signature scheme with reusable addresses. Falcon’s underlying hard problem is the short integer solution problem (SIS) over NTRU lattices, for which no efficient solving algorithm is currently known in the general case, even with the help of quantum computers.

QRL’s address space is currently fully quantum-secure through the use of the [eXtended Merkle Signature Scheme (XMSS)](https://tools.ietf.org/html/rfc8391), rather than ECDSA found in other quantum vulnerable blockchain projects such as Ethereum and Bitcoin. XMSS is a provably secure hash-based signature scheme [draft-recommended by the National Institute of Science and Technology (NIST)](https://csrc.nist.gov/publications/detail/sp/800-208/draft) as a post-quantum signature scheme.

While XMSS is provably (forward) secure with with reusable addresses, there is the necessity to track the [QRL One-time Signature (OTS)](https://docs.theqrl.org/developers/ots/) key usage, which is done through maintaining a bitfield tracked by the blockchain network. Falcon would remove that need, making usability, development, and implementation easier.

### Media Contacts

Jack Matier
[jack@theqrl.org](mailto:jack@theqrl.org)