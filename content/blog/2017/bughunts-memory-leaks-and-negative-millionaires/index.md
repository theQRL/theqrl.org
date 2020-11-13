---
slug: bughunts-memory-leaks-and-negative-millionaires
date: 2017-08-06
author: "Peter Waterland"
title: "Bughunts, memory leaks and negative millionaires.."
subtitle: "We have been publicly testing the QRL testnet (status may be checked here https://theqrl.org/status/) for the last few days."
layout: blog-post
cateogories:
  - technical
images:
  - insect-1140026_640.jpg
featured_image: insect-1140026_640.jpg
---

We have been publicly testing the QRL testnet (status may be checked here [https://theqrl.org/status](https://theqrl.org/status/)/) for the last few days.

As you may imagine moving from an isolated private VPS network with a handful of nodes under complete developer control, to a public testnet with over 50 nodes spanning the globe, on different hardware (pi’s to high power amazon AWS instances) has thrown up a whole host of short term issues.

A rapid hunt ensued with a variety of simple bugs squashed very quickly and 21 github commits since August the 1st. The most notable problems found were a memory leak causing the memory requirements to slowly increase then crash the node (earlier on devices with minimal memory onboard). The cause of this was tracked down to cPickle failing to garbage collect and free memory properly. We have a fix but will remove the dependency in the future completely.

Another interesting bug was found by community member Paul Zimmer and then independently re-discovered by a developer in the community (@**scottdonald**) who realised that negative transactions could sneak through the state validation code and briefly Scott was very rich in testnet quanta! He also made a really neat coin faucet ([http://testnet-faucet.qrlexplorer.info/](http://testnet-faucet.qrlexplorer.info/)) which circulates coins to anyone running a test node (https://github.com/theQRL/QRL).

**Kaushal**, a man of few words and the dev in charge of code refactoring had this to say on the last few days:

“*Code has been refactored and further code refactoring would be done in future soon. We are able to handle more nodes on network now, and 400+ transactions per block, which could still be scaled further up, as we are not using any compression yet. 
There are still a few bugs, which are being reported by community members as well as some PR requested created, so a special thanks to them. We are working to fix the bugs and improve the overall system. 
The PoS draft has been implemented, and it is working in line with expectations. Before mainnet we need to commence security testing, once we have implemented all the MVP features..”*

After rumours surfaced on the slack that @cyyber may in fact be a robot (or AI, given the fact he never seems to sleep) I asked him for his thoughts on working deep inside the bowels of the QRL project day after day:

*“For me working on the QRL is just similar to wake up each day for the adventure and puzzle. Its very exciting and a great learning experience in the world of crypto which we are working to make secure against quantum computers. The best part is, you have a very supportive team, spread around different parts of the world.”*

Seems mostly human to me!

The next week will bring some minor p2p improvements as well as a complete change to the way we store the blockchain in memory. The aim is to hugely optimise our memory requirements down by at least 50% and allow low power devices such as raspberry pi’s to synchronise and keep up with the network even under heavy transaction load.

## Ephemeral secure messaging protocol

The QRL has three pillars backing the design.

1. XMSS signatures securing accounts and transactions.
2. A custom POS algorithm (https://github.com/theQRL/pos)
3. Ephemeral.

Now testnet is active 1 and 2 are functional. The next and most exciting step is to begin to layer in our Ephemeral protocol in the next 2–3 weeks. Ephemeral is a secure messaging protocol which runs through the QRL p2p network. What is special about it is that it allow anonymous, completely post-quantum secure data channels to be created and cryptographically verified at each end by QRL user addresses.

The way we do this is by allowing users to leave a permanent imprint on the QRL blockchain which associates their user address with a lattice-based cryptographic set of keys (we plan to use kyber for encryption and dilithium/tesla for signing). This turns the blockchain into a decentralised public key server. Cryptographic secure channels may then be opened between QRL users allowing private data transmission or communication to occur. The initial symmetrical key exchange is encrypted using the receiving user’s lattice-based public key and contains a symmetrical encryption key, a pseudorandom number function (PRF) seed and a signature to confirm cryptographic origin in a verifiable manner.

Message transmission is anonymous because the subsequent messages broadcast across the network are simply an ID header field and an encrypted body. The ID sequence for each channel message is chosen using the PRF seed such that only the two parties in the channel are aware of which messages belong to their private channel. Furthermore, the body of each message is symmetrically encrypted with AES512.

First comes integration of the secure messaging capability into the public github repo in preparation for mainnet. Following on from this we will add lightclient QRL libraries and API’s which allow access to the Ephemeral network from outside the p2p network.

The next two weeks should be very exciting indeed.