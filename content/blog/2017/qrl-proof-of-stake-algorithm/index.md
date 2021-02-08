---
layout: blog-post
slug: qrl-proof-of-stake-algorithm
date: 2017-10-22
author: "Peter Waterland"
title: "QRL proof-of-stake algorithm"
summary: "QRL proof-of-stake algorithm"
featured_image: child-1864718_640.jpg
features:
  - proof-of-stake
categories:
  - technical
images:
  - child-1864718_640.jpg
---

### QRL proof-of-stake algorithm

This is a short blog about the proof-of-stake algorithm currently in use on our QRL testnet. You may wonder why this is important and hopefully by reading onwards the significance of the nuts and bolts under the hood of our node implementation (qrlcore) will become clear.

### Block selection algorithms

Blockchains rely upon an identical distributed record of data throughout the network to function. Ledger data is added incrementally into an ordered sequence of chunks called blocks, these are built cryptographically upon one another (by incorporating a hash of the preceding block-header into the current block), with the overall sequence being known as the blockchain. Data contained within each block is typically composed of transactions which are used to update the state of the ledger across the network.

Because every full node stores the entire blockchain then all parties on the network can be confident of what each address balance is at any moment preventing double spending by a malicious actor.

The mechanism through which the network decides which particular block is to be added to the cryptographic chain is extremely important. Where nodes on the network do not exactly agree on the history of consecutive blocks then a network fork occurs — in this situation balances of addresses may diverge across the network resulting in differing versions of the state of the ledger with potentially disastrous consequences.

Bitcoin uses a block selection mechanism which is both elegant and a proven success since 2009 — known as proof-of-work.

The main problem with proof-of-work is that whilst a brilliant solution to distributed network consensus, it requires significant energy expenditure to decide which node creates the next block, which has inevitable eventual centralising tendencies. For example bitcoin miners now require expensive dedicated hardware to successfully create blocks and be rewarded with bitcoins (block reward) — but only a tiny minority of bitcoin full nodes are actually miners — the majority of the network is not rewarded or incentivised in any way whatsoever!

Other strategies do exist for block selection which incentivise running a full node but don’t require dedicated mining hardware. These ideas such as proof-of-stake (POS) utilise block selection algorithms related to the account balance of addresses attached network nodes — so called stake validators — to create blocks instead.

The team at the QRL believe that future blockchains which power the decentralised world will use POS algorithms and for this reason we will be launching the QRL using a custom POS algorithm of our own design.

### QRL POS algorithm

To those academically or mathematically interested an early draft of our POS algorithm may be reviewed in detail here: [https://github.com/theQRL/PoS/blob/master/pos-qrl.pdf](https://github.com/theQRL/PoS/blob/master/pos-qrl.pdf)

What follows is a high level explanation of how our current protocol functions.

Any node wishing to run qrlcore with a positive QRL balance may choose to stake (we encourage all users to stake as we have a completely safe online staking system in place where funds are never at risk — even in the case of an attacker taking complete control of your node). Each active staking node with a QRL address can be thought of as being indistinguishable to a *stake validator*.

Simply put our algorithm relies upon a contest between active stake validators to win and create the strongest next valid block. To win this contest a given stake validator must produce a block containing a valid, provably fair, ‘winning adjusted hash value’ in their block-header. Whichever validator can do this will produce a block which will be universally accepted by the network as the next valid block.

Our protocol allows every validator to present their strongest block attempt to their peers and by competition the strongest block rapidly traverses the network, displacing any opposing weaker blocks and is duly used as the basis for the next POS cycle.

The winning adjusted hash is the lowest adjusted hash value within the stake validator pool. The network can prove honesty because before being eligible to stake, a node/stake validator must sign from their QRL address a special stake transaction which contains the final value in a sequence of consecutive hash values produced by iteratively hashing from a random seed — this iterative construction is known as a hash-chain. Hash-chains are essentially pseudorandom number sequences. All active stake validators have a single vote by revealing a hash value from the correct position in their respective hash-chain. What this means is that all parties on the network can easily know that the validator is bidding with an honest hash value by iteratively hashing through to the final value stored in the stake transaction previously.

In this way hash values for each validator are predetermined. To prevent cheating or gaming (by mining statistically rare sequences of very low hash values in advance) we adjust the hash using the previous winning hash as a continuously changing dynamic seed.

To prevent sybil attacks and to reward probabilistically based upon validator balance we apply a further equation (see [https://github.com/theQRL/PoS/blob/master/pos-qrl.pdf](https://github.com/theQRL/PoS/blob/master/pos-qrl.pdf) section 2.4 The block winner) to adjust the hash to a final number.

The lowest number is the winner. The more QRL you have in your stake address the more likely you are to win the block and newly minted QRL.

Whilst you are staking your funds are frozen, but we offer a de-stake option to remove yourself from the active stake validator list typically by the next block (30–40s). Once you have de-staked then you will not be able to stake until the expiry block of your previous stake transaction.

### Bits and bobs

Our algorithm has other interesting features which are worth a mention here. We use the active validator pool of stake transactions to ‘stamp’ the chain and provide finality every x blocks (where x = 100 blocks at present). This allows fork recovery in the event of network disruption or a malicious attack because all nodes can see what the supermajority of stake validators are ‘mining’ and follow the chain fork with the most stake validator support attached.

A perceived weakness of proof-of-stake algorithms is that there is nothing to stop validators mining on multiple chains/forks at once. This is called the nothing at stake problem. Our qrlcore nodes listen for blocks signed at the same block-height by the same validator and where such double-signing occurs the coinbase transactions are then circulated across the network and added to the next block. This validator is then removed from the activate stake validator list for y blocks as punishment.

### Upcoming hard fork

We are planning to hard fork to a new release of qrlcore tomorrow and this will necessitate a full reset of testnet again. Upon this reset we will be releasing our webwallet (to be integrated into our testnet explorer @ [http://qrlexplorer.info](http://qrlexplorer.info) shortly) for testing purposes! A tutorial blog by @scottdonald about the web wallet will be released in the next week.