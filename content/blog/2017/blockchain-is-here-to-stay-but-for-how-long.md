---
slug: blockchain-is-here-to-stay-but-for-how-long
date: 2017-03-09
layout: blog-post
author: "Peter Waterland"
title: "Blockchain is here to stay — but for how long?"
subtitle: "Bitcoin furiously led the charge. Decentralised, trustless, scarce, cryptographically secure digital cash transactions without the need for financial intermediaries available to anyone with an internet connection for the first time. And cool — a better form of money there has never been in the history of mankind."
categories:
  - column
---

Bitcoin furiously led the charge. Decentralised, trustless, scarce, cryptographically secure digital cash transactions without the need for financial intermediaries available to anyone with an internet connection for the first time. And cool — a better form of money there has never been in the history of mankind.

Bitcoin remains the dominant force in the cryptocurrency asset class but newer and arguably better ledgers from a technical perspective have emerged such as ethereum offering powerful near Turing-complete smart contract capability and coins such as Zcash or monero offering true anonymity to protect users from unwanted prying eyes.

But all major coins in the cryptocurrency space, whether based upon proof-of-work or proof-of-stake, rely upon the security of their digital signature schemes to preserve the cryptographic line of truth upholding their ledgers. And we know that classical computers will never brute force modern digital signature schemes like the elliptic curve cryptography powering bitcoin, ethereum and virtually all other ledgers in existence— Satoshi chose well.

Bruce Schneier explains why a classical computing attack is doomed to failure when trying to break a truly random 256 bit number such as a bitcoin private key,

“If we built a Dyson sphere around the sun and captured *all* its energy for 32 years, without *any* loss, we could power a computer to count up to 2^192. Of course, it wouldn’t have the energy left over to perform any useful calculations with this counter.

But that’s just one star, and a measly one at that. A typical supernova releases something like 1051 ergs. (About a hundred times as much energy would be released in the form of neutrinos, but let them go for now.) If all of this energy could be channeled into a single orgy of computation, a 219-bit counter could be cycled through all of its states.

These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that **brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.”**

So brute force isn’t going to work! But it turns out that the easiest way to break into a bitcoin address is to first have the bitcoin public key and then try and work backwards to the bitcoin private key.

RSA, DSA and ECDSA remain secure based upon the computational difficulty of factorisation of large integers, the discrete logarithm problem and the elliptic-curve discrete logarithm problem. Shor’s quantum algorithm (1994) solves factorisation of large integers and discrete logarithms in polynomial time. Therefore, a quantum computer could theoretically reconstitute the private key given an ECDSA public key — and in an instant the world would change.

But aren’t quantum computers the stuff of science fiction? Public quantum computer development has not passed beyond 2^5 qubits or the factorisation of small numbers — such as 15 or 21 — sums we can do in our heads. But large amounts of capital is being poured into advancing the science and it would seem careless not to consider what changes would be required to harden current blockchain technology to prosper in a post-quantum world.

If we have learnt anything in our world of technology it is that change comes faster than we expect and often in a non-linear fashion. If an expert is saying something will take 50 years it could be 10, or 5 or 2 in reality. It would also be naive to not expect State level actors to be expending very significant resources at this technical problem to gain an incredible edge over their adversaries.

By the time we read about a real live working quantum computer capable of coming close to breaking ECDSA / RSA or DSA the boat will have long since sailed. So what can we do to protect ourselves against this potential devastating technological black swan flapping it’s wings all over rock solid secure internet protocols and cryptographically secure distributed ledgers?

## One way hash functions

The simplest and most promising form of signatures which are said to resist a quantum computer are called hash-based digital signatures. They rely upon the one way nature of a cryptographic hash function. In short, you feed in data and another different number, a fixed length digest will be output. The really interesting thing is that if the cryptographic hash function is strong then it should be non-trivial (read mathematically *infeasible — *thanks Bruce) to take the hash digest and work backwards to generate the original data message. A cryptographic hash function can therefore be thought of as a cryptographically secure one way function. Neat.*

They also usually have the properties of collision resistance (no two inputs will produce the same output) and second pre-image resistance (feeding the output back into the function iteratively doesn’t make it any easier to work out the previous input — it is still near impossible).

Hash-based one-time signatures such as Lamport-Diffie or Winternitz signatures rely upon this peculiar one-way property of hash functions to create signatures — the major drawback being that they may be only used once and are therefore *stateful*. Normally this would be a major problem as generally we like to digitally sign things more than once but in a ledger where each transaction is unique and recorded that is actually fine!

In order to build a signature scheme which can be used many times to sign a document or transaction an extension to this scheme is required using something Ralph Merkle came up with called a binary hash tree — now known commonly as a ‘merkle tree’. This slightly more complicated construction allows the public keys from many one-time signatures to be concatenated in pairs and hashed upwards in an inverted tree structure to a single root hash. The root hash may then be given out as a public key or transformed into a ledger address and used to validate signatures which contain a one-time signature public key and enough cryptographic clues from the merkle tree to allow the root hash to be recreated without compromising any other one-time signature keys. These clues are known as the merkle tree authentication route. The only limit to the number of signatures you can put into a merkle tree is the computation time you require to pre-compute all the one-time signature key-pairs and the tree itself.

Improvements have been made to this simple idea of multiple one-time signature keys being hashed into a merkle tree to create the cutting edge post-quantum hash-based signature schemes recommended today — XMSS and SPHINCS. They use tricks to reduce security requirements of the cryptographic hash function chosen and use layers of merkle trees rather than a single tree atop the one-time keys — but if you grok the original concept then you have a grasp of how these signatures work.

## Sounds easy. What are the drawbacks?

Well it turns out that the signatures are larger. Much larger. And because the signatures are stateful and you need to use a different one-time public-private key pair *every time* you sign a transaction you have to record every single public key that hits the network for *all time* or that ledger address is at risk of theft from a clever hacker.

But massive signatures can be made smaller by using provably secure pseudo random number functions to allow some of the working parts of the signature to be generated during validation. Nesting merkle trees within merkle trees to create a *hypertree* allows infinitely extensible quantum-secure signatures from a common public key without the need to pre-compute hundreds of thousands of one-time signature key pairs in advance of sending a microtransaction to buy a coffee.

## That doesn’t sound technically insurmountable. If it provides absolute security why not build it?

We did.

Introducing The [Quantum Resistant Ledger](http://theQRL.org/) project.

The QRL is currently undergoing testing in early testnet. 

Enquiries [welcome](http://theQRL.org/).