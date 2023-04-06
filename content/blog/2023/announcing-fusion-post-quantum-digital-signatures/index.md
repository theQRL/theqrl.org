---
layout: blog-post
slug: announcing-fusion-post-quantum-digital-signatures
date: 2023-04-06
author: "Geometry Labs"
title: "Announcing Fusion Post-Quantum Digital Signatures"
summary: "Geometry Labs has developed highly aggregatable Fusion digital signatures for the QRL ecosystem with funding from the QRL Foundation's grants programme. A formal specification and parameterization of the Fusion signature scheme is currently being developed by Geometry Labs; once complete, these algorithms will be made available to the public as open source software and shared with NIST for consideration as a possible standard."
featured_image: header.png
categories:
  - technical
  - research
toc: true
---

# Announcing Fusion Post-Quantum Digital Signatures 

We are excited to announce the development of Fusion digital signatures, built for the QRL ecosystem by [Geometry Labs](https://www.geometrylabs.io), with funding from the [QRL Foundation grants program](https://qrl.foundation/grants.html). Fusion signatures are based on lattice cryptography for post-quantum security, and are highly aggregatable. **The Fusion algorithms can efficiently aggregate up to 32000 signatures, leading to a wide range of practical applications including large-scale proof-of-stake consensus**, m-of-n multisignature wallets, and mechanisms for on-chain governance.

Fusion signatures are elegantly simple in both theory and implementation, reducing the risk of implementation errors. As a one-time signature scheme, Fusion can achieve more narrow tightness gaps in security, **smaller signatures, and smaller keys**. Our analysis permits parameters to be flexibly tailored to given target security levels and aggregation capacities. Fusion signatures have **a number of other generally desirable characteristics**: avoiding NTRU assumptions by using only the usual short integer solution assumption, avoiding floating-point arithmetic by using 32-bit signed integers, avoiding trapdoors, and avoiding some issues associated with randomization and statelessness. 

Research and development of Fusion has been funded by The QRL Foundation grants program, and executed by Geometry Labs. **The grant from the Foundation is enabling us to prepare a formal specification and parameterization of the Fusion algorithms.** Given the size and simplicity advantages of our algorithms, we are in the process of proposing **Fusion signatures for NIST standardization**, as there is an open solicitation for post-quantum digital signature schemes.

## Non-interactive and interactive variations

Fusion signatures are one-time signatures which can be non-interactively aggregated into a compact (i.e. sublinearly sized) aggregate signature. This approach **sidesteps many issues related to side-channel attacks and signature randomization**, leading to simpler design and implementation, and compact aggregation leads to greater efficiency. 

**Permissionless non-interactive aggregation can be carried out by anybody** with knowledge of the component public keys, messages, and individual signatures. Notably, **this aggregator does not need to be designated or included in the setup in any way**. The cost of using this scheme is a bandwidth cost related to communicating individual signatures to the aggregator.

Fusion also supports **interactive signatures, which cuts key size in half relative to the non-interactive approach**, at the expense of increased bandwidth due to 3 rounds of interaction.

## Fusion Genealogy

On a technical level, Fusion signatures have more in common with CRYSTALS-Dilithium than Falcon, and can be implemented similarly (but more simply). Fusion signatures are a variation of the signatures described by Boneh and Kim in [One-Time and Interactive Aggregate Signatures from Lattices](https://crypto.stanford.edu/~skim13/agg_ots.pdf), which are based on the one-time signatures described by Lyubashevsky and Micciancio in [Asymptotically Efficient Lattice-Based Digital Signatures](https://eprint.iacr.org/2013/746.pdf) and aggregated using the techniques of  Boneh, Drijvers, and Neven in [Compact multi-signatures for smaller blockchains](https://eprint.iacr.org/2018/483.pdf). The most obvious difference between Fusion signatures and the Boneh and Kim signatures is that **we use sparse signature challenges and aggregation coefficients, and that we include signature challenges in the hash input when we compute aggregation coefficients**.

Mainly, these differences lead Fusion signatures to differ from Boneh and Kim signatures “under the hood.” This expresses itself through our proofs, which have **more narrow tightness gaps**, leading to **dramatically more efficient parameters** when compared to the parameters described by Boneh and Kim. Prior art took the approach of proving unforgeability by reducing a general forger to a selective forger before solving the underlying hard lattice problem; they did this so that the forger could not query random oracles in a “bad” order, leading to a failure of the proof structure. This reduction from general unforgeability to selective unforgeability induced a rather wide tightness gap, which was related to the size of the message space. By including signature challenges in the hash input when we compute aggregation coefficients, oracle queries can be simulated in a “good” order, eliminating the need for this reduction and narrowing the tightness gap.

## Fusion Parameterization

Most cryptographic parameterization methods do not take tightness gaps induced by proof methods into consideration. Our parameterization does, leading to parameters that should be **robust against improvements in the best lattice reduction algorithms**, and robust against small changes to our analysis of the scheme’s security. We are aware that bit-hardness is not the best estimate of security in the face of different attack models and costs, but we use bit-hardness as a proxy, and **we target at least 256 bits of estimated post-quantum security** after taking the tightness gap into account. This leads to (about) 521 bits of estimated post-quantum security in the underlying lattice reduction problem in order to compute a forgery, and greater security against key recovery.

Boneh and Kim speculated that it would be rather difficult to find a sufficiently small prime modulus parameter that would enable an implementation based on signed 32-bit arithmetic. We found parameters small enough for this, and we suspect that we can squeeze even greater space efficiency out of the parameters without sacrificing security levels by also using sparse keys (but this requires further research). This enables the possibility of extremely fast implementations of our scheme.

## Conclusions

Fusion signatures provide a quantum-secure aggregatable digital signatures scheme, designed for the QRL ecosystem and efficient proof-of-stake systems with many validators. Fusion's approach brings advantages in terms of design simplicity, high capacity, and small signatures & keys. **The grant from The QRL Foundation is enabling Geometry Labs to prepare a formal specification and parameterization of the Fusion signature scheme**, to be released publicly as free open-source algorithms, and shared with NIST for potential standardization.