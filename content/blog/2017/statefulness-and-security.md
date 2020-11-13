---
layout: blog-post
slug: statefulness-and-security
date: 2017-12-14
author: "Peter Waterland"
title: "Statefulness and security"
subtitle: "QRL has a highly unusual signature scheme to secure our accounts which is stateful — XMSS."
categories:
  - column
---

QRL has a highly unusual signature scheme to secure our accounts which is stateful — XMSS.

Each time a transaction is signed from a QRL address a *Winternitz OTS+* one-time signature is used up in the XMSS wallet.

Whilst it is possible to sign again from the same one-time signature (ie. re-use the same XMSS tree index) and create a transaction with a valid signature, the QRL network will reject this transaction as it prohibits one-time signature re-use during routine State verification when a block is added.

However, if you still decide to keep re-using the same one-time signature index then the security of XMSS is progressively reduced.

It is theoretically possible to grind out the one-time signature private key if you have multiple signatures from the same tree index position and sufficient time at your disposal.

With 2 signatures this requires: 2³⁴ hashes, 3 requires: 2²³ hashes, 4 requires just: 2¹⁸ hashes.

Obviously this stateful security aspect of XMSS means there are few real life situations where it can be used safely. The reason why is that it is absolutely critical that the signer (wallet) cannot be tricked into signing the same index repeatedly and allowing the private keys in the wallet XMSS tree to be at risk.

Wallet files must therefore be updated after each signature to reflect the new state and the tree index incremented. As long as wallets only sign from the same index once then all is fine.

## QRL webwallet

Sounds simple. And if you are using qrlcore with a wallet file or later with a Ledger Nano to keep everything stored safely then everything is handled automatically.

But what if you restore an old wallet file from a backup? Or if you have a wallet without a wallet file?

Our webwallet is now functional ([https://wallet.qrlexplorer.info/](https://wallet.qrlexplorer.info/)) and this is opened at present with a mnemonic phrase or hexseed.

One option of course is to ask the user to remember the wallet index number after each session. But this is error prone as it relies upon the user to memorise and then later recall something. If someone rarely accesses their webwallet or simply forgets their wallet index then the system fails.

We are in luck though. The QRL blockchain comes to the rescue.

XMSS indexes which are already in the chain can be think of as being burnt. Potentially valid XMSS indexes are those which have not yet been used to sign a transaction. When the webwallet connects to the QRL network it loads the transaction history of the QRL address and uses the number of sent transactions to calculate the current XMSS tree index.

How can the webwallet not be tricked by a bad node trying to pull off a MITM attack between the webwallet browser instance and the QRL p2p network?

Well, the webwallet can easily verify each transaction in the history of it’s own address. All a bad node can do is send too few transactions in that history to confuse the webwallet into signing with an incorrect, falsely low index. This will achieve nothing because the one-time signature at that index position is already blacklisted by the QRL network. The bad node cannot fake transactions to trick the webwallet into signing from a higher than expected index because it is unable to generate a valid signature to do so.

So far, so good.

Could the bad node deliberately fail to propagate the transaction in the hope that it can trick the webwallet into signing enough times to allow a private key to be at risk from the current index?

Our webwallet mitigates this possibility by propagating the transaction to multiple nodes. Furthermore, it will not sign again in the active session again until it has seen the tx in the memory pool or block from another random node.

## NIST

For some time we have had placeholder ephemeral routines in-situ. Our end-end post-quantum secure data channels are linked at either end by *EPH *transactions which contain two public keys — think of this as a distributed lattice public key server. Currently they are *ECC *public keys, one to sign and another to encrypt. But as soon as NIST release (not long now) we will store a *dilithium* key to sign and a *kyber* key to lattice encrypt our ephemeral traffic.

## Announcements

We have some new personnel changes to announce later this month and some major changes coming to both our roadmap and timeline which we are very excited about!