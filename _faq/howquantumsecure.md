---
title:  "How is the QRL post-quantum secure?"
categories: PoS
---
Several important algorithms in public-key cryptography (such as ECDSA used in Bitcoin) base their security on the assumption that the discrete logarithm problem over carefully chosen groups has no efficient solution. 
It has however been shown that a quantum computer of sufficient power can use Shor's algorithm to effectively compute a private key generated using ECDSA by 'scanning' all possible solutions to a given public key (address) in superposition simultaneously.

QRL implements one of a series of peer-reviewed post-quantum secure algorithms: XMSS (eXtended Merkle Signature Scheme)
XMSS uses a OTS (One Time Signature Scheme) that can only sign one message with one key. OTS signature keys are generated as needed, making XMSS unforgeable under chosen message attacks.
