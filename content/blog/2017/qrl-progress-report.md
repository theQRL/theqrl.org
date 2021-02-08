---
layout: blog-post
slug: qrl-progress-report
date: 2017-04-19T22:23:54.283Z
author: "Peter Waterland"
title: "QRL progress report"
summary: "The Quantum Resistant Ledger (QRL) project is now successfully trialling a private testnet thanks to a dedicated team of alpha-testers spread across the world."
categories:
  - technical
---

The Quantum Resistant Ledger (QRL) project is now successfully trialling a private testnet thanks to a dedicated team of alpha-testers spread across the world.

Our Proof-of-Stake protocol featuring iterative hash-chains and a PRF (HMAC_DRBG) is functioning well. We recently staked with between 10 and 15 stakers for 4 days consecutively before a POS panic halted play. Our algorithm seems to work and to further understand how much time we can play with during each round of voting we have added some timing analytics to our reveal messages which allows us to see realtime how much latency there is from block to block between stake validator nodes. It will be fascinating to see how this data develops as the nodecount on the network rises — we have the idea of introducing a flexible blocktime based upon transaction volume and stake validator node latencies. For now we are simply exporting the data via our API and deciding how best to display and interpret it.

Our new dev Kaushal has familiarised himself with the codebase and has implemented a fast sync commit. He has also made some excellent design suggestions to improve the codebase and the POS protocol — including an a fantastic suggestion to move the block creation decision back in the POS cycle and allow us to sidestep a block withholding attack strategy.

I am also extremely excited to welcome Leon Groot Bruinderink to the team as an advisor. He is a PhD student in post-quantum cryptography at PQCRYPTO in the Netherlands and has already made some great suggestions to improve some of the practices within the design of the QRL ledger. He is also an excellent addition to our growing team.

## Ephemeral

Definition 1. lasting for a very short time.

Another exciting development we have begun to develop is a network messaging layer we call the ‘ephemeral layer’. Whilst the accounts in the ledger are secured by hash-based XMSS signature scheme, we have been investigating how we can enable a post-quantum secure public-key cryptography scheme to allow secure and completely private end-end data and communication channels above the QRL.

After discussions with cryptographers and reaching out to some friends in the growing post-quantum industry we have settled upon using lattice-based cryptography — in particular a variant of ‘Ring learning with errors’.

What is really amazing about building a network messaging layer on top of a distributed database layer like the QRL is that it allows lots of really cool things. QRL account addresses can then be thought of as cryptographically verifiable identities. If a QRL transaction signs a data field which contains a lattice-based public key and that is stored in the blockchain, then any other node or user on the network can look up that address and find their public key. Then using the ephemeral layer they can broadcast a specially constructed message which is encrypted with the lattice-based public key and is tagged with the transaction hash of the previous transaction. The contents of message may only be decrypted by the controller of the address which released the public key transaction. If the decrypted message contains a valid signature from another address on the network and a symmetrical AES encryption key then a private and completely secure data channel has been opened between the two account addresses.

But this is where we can make things really cool. Using our friend the provably secure pseudorandom function (PRF), HMAC_DRBG for example, we can actually make all messages thereafter appear completely random and be completely untraceable back to the original pair of addresses. How? By adding a PRF seed into the ephemeral message containing the symmetrical encryption key. This seed can then be used to generate a sequence of random numbers of 32/48/64 bytes in length which are indistinguishable from random number sequences. Now each message passed between account addresses can begin with an ID which is the PRF output (has the appearance to an observer of being an unpredictable random number) and have the body of a symmetrically encrypted message which remains post-quantum secure. An attacker will have no idea who a message is to/from or decipher the contents. Once a channel is opened the subsequent messages can be very tiny — they are just the PRF output and the encrypted message.

Our ephemeral layer allows a trustless and decentralised, post-quantum secure, ultra-private end-end encryption channel to be created. Network ephemeral messages are not stored and so do not clutter the blockchain with large keys and signatures. With just a little thought you can see that is trivial to then build a light client API which allows third party Apps and web enabled devices to connect with the QRL layer and use it as a gateway provider of cryptographically verifiable private and completely secure channels between accounts — to allow secure TCP/IP connections, data and communications in the net.