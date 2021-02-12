---
layout: blog-post
slug: post-quantum-secure-multisignature-wallets
date: 2018-10-19T20:51:42.184Z
author: "Peter Waterland"
title: "Post-quantum secure multisignature wallets"
summary: "Whilst our current plan is to transition to an abstracted unified transaction format with the release of our ‘silicon’ smart contract platform (pencilled for release mid 2019), we have decided internally to integrate multisignature functionality into the QRL early in our upcoming hard fork."
featured_image: 1l3D93DHhbZV3A4RTLe8C0A.jpeg
images:
  - 1l3D93DHhbZV3A4RTLe8C0A.jpeg
  - 1d18vunKh58PN23w72J4zRg.png
  - 1Rf32CxWwOEH_NOs-A3EpHA.png
  - 1SHZZfe7J-U5kE6VUK2RrbQ.png
  - 1W_5auSQVL2AB96mkxpoxJQ.png
  - 1Qi63M02T0iGrrhH9uBuKAQ.png
categories:
  - column
features:
  - multisig
---

Whilst our current plan is to transition to an abstracted unified transaction format with the release of our ‘silicon’ smart contract platform (pencilled for release mid 2019), we have decided internally to integrate multisignature functionality into the QRL early in our upcoming hard fork.

As this brief blog will describe this adds some unique and powerful functionality to the chain and in doing so will be the first example in the world of post-quantum secure multisignature technology in the wild.

## What actually is ‘multisig’?

![multisig not multipass!](./images/1l3D93DHhbZV3A4RTLe8C0A.jpeg)*multisig not multipass!*

“Multisig” or [multiple signature transactions](https://en.bitcoin.it/wiki/Multisignature) require one or more different valid signatures to transfer funds from a special construct called a multisignature address to a destination address. The idea being that funds held in a multisignature address cannot be spent without the cryptographic agreement of a specified number of parties.

A multisig address can be setup with a certain number of addresses able to take part (*n*), of which a specified number (*m*) must provide valid signatures together for a multisig transaction to be valid and spendable. Thus, a multisig address may be said to require *m of n* signatures.

An example would be a multisig address which includes three signatory addresses but only requires two signatures for funds to move. This would be: *m of n* equals 2 *of* 3.

What all of this means in practice is that it allows custody and control of funds to be made much more transparently secure than current reliance upon access via a single private key or wallet. This is important for bigger clients who may wish to use a particular chain such as institutional investors, hedge funds, etc.

## QRL multisig

So how will it work in the QRL? Is it different from other existing solutions? As usual we have to do things slightly differently because of our post-quantum signature scheme XMSS.

Briefly, we will introduce the new tx subtypes *multisig_create* and *multisig_spend* in the next hard fork, introducing hard-coded functionality which is immune to the multisig issues seen previously with ethereum.

Creating a new multisig address which can be seen on the explorer and receive funds like any other address is simple — just send a *multisig_create *transaction. This transaction incorporates a list of valid co-signers (addresses or public keys) and thus *n*, the weighting of each signatory, *w*, and the required number of signatories for a successful spend — the *m*.

![example weighting of a multisignature address](./images/1d18vunKh58PN23w72J4zRg.png)*example weighting of a multisignature address*

What do you mean by ‘weighting’? In conventional multisig each signature counts as a single vote. So, to reach an *m* of three requires three signatures. Whilst this remains default behaviour in the QRL, our implementation allows a specific signatory address to carry more voting weight than another. We implement this simply by attaching an integer value to each party during multisig address formation.

An example of this would be a new multisig address created in which *m of n* is 4 of 7. Signatory address 1 has weighting 3, whilst all other signers have weighting 1. Thus, to move funds successfully from the multisig address if signatory address 1 and 2 both sign a valid transaction, then 4 of 7 is satisfied and the transaction will be valid. Similarly, if signatory address 2, 3, 4 and 5 sign a valid transaction then this too would be valid and allow the funds to be spent.

Alternatively, one could create a new multisig address where one address has functional spending control. One could have an *m* of four required signatures, with an *n* of four signatory addresses. If address 1 had a weighting of 3, and all the rest had a weighting of 1, then even if addresses 2, 3, and 4 all signed, they would not have the 4 of 4 required signatures to spend.

![](./images/1Rf32CxWwOEH_NOs-A3EpHA.png)

![](./images/1SHZZfe7J-U5kE6VUK2RrbQ.png)

![](./images/1W_5auSQVL2AB96mkxpoxJQ.png)

![multisig spend examples](./images/1Qi63M02T0iGrrhH9uBuKAQ.png)*multisig spend examples*

This variability allows specific control rights to be delegated to funds held in a multisignature wallet — which we think is a very powerful concept, that can be applied in a variety of ways to useful effect.

## So how will this work in practice?

A user can create a multisignature address through the multisig section of the *webwallet*. A number of co-signers and their weightings are added to the address page, with a minimum weighted number of co-signers for a valid spend recorded. This is then propagated to the network and confirmed in the chain. The address may be looked upon in the explorer and the above details seen and verified by anyone.

Funds can be sent to the new address like any other. To spend funds however requires the sufficient signatories to send a *multisig_spend *transaction from their *webwallet*. Once the *m of n *for the multisignature address is satisfied then funds will transfer when the last valid *multisig_spend* transaction reaches the threshold for *m* set in the *multisig_create* transaction.

This is a slightly different approach to bitcoin where the spend transaction requires a script which is signed by each party in turn and then propagated to the network as a single spend transaction.

In our case the *multisig_spend* transaction simply signs the: multisignature address, a nonce or 32 byte shared key (which for convenience may be randomly generated in the webwallet to be shared amongst co-signers), the destination address, amount and fee.

So the only information co-signers need to know is the amount (and fee) and destination of the intended funds and the shared key (for example ‘some collection of random words’).

Why did we choose this different method of implementing multisignature support which requires each co-signer to make a spend transaction? Because the QRL has a stateful signature scheme, sending XMSS signatures from your wallet off-chain to a third party is not recommended. Such behaviour may lead to inadvertent one-time-signature reuse and reduce the security of the system. So the development team feel this is a more robust method of achieving full multisignature address support without increasing user risk at all.

## When?

In actual fact the changes are fairly minor to the node and state machine to introduce completely post-quantum secure multisignature functionality. Additional changes are planned to our *webwallet* to make this functionality work straight out-of-the-box. We plan to bundle some state machine backend optimisations in the planned upgrade, which as it involves new transaction subtypes will be a hard fork upgrade.

Originally, like monero, we had targeted an approximately six monthly hard fork schedule which means we will be planning to hard fork with community consensus in the next 6–8 weeks with a precise blockheight for the fork to be announced in due course.