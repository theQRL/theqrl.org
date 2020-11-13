---
layout: blog-post
slug: the-qrl-hardfork-blockheight-has-been-set-bromine-code-is-released
date: 2020-03-23T14:21:51.130Z
author: "Jack Matier"
title: "The QRL Hardfork blockheight has been set! Bromine code is released!"
subtitle: "Blockheight is set for 942375 — approximately April 6th"
featured_image: 1Jegpbpg7GqrRjNAHulRz2g.png
images:
  - 1Jegpbpg7GqrRjNAHulRz2g.png
  - 1_nyiVWgfrytvxpXwUJuhYA.png
  - 13W2SsYQaQekADmAH0ENUBA.png
  - 1lVDlpGew3FaDZsDlt0YmJQ.png
  - 1CVXbt6rhFVzJsPD6fJGERw.png
  - 1Mmi4skmxFOX5gpqQIRXVqQ.png
features:
  - multisig
categories:
  - technical
forks:
  - bromine
---

The QRL Hardfork (codename Bromine) is set to trigger at blockheight of **942,375 — approximately** **April 6th.**

The code has been released as well, which means everyone who’s running a mainnet node** *is encouraged to update*** (instructions below).

## Update to the latest release

***If you are not running a node*** and just holding Quanta, there’s nothing that you need to do (Though we’d encourage you to run a node!).

***If you are running a mainnet node,*** you can update to the latest release now by ***stopping your node*** and issuing the following command:

```
`pip3 install qrl --upgrade`
```

The first thing it will do is update the previous state which can take *several hours* (~8).
You can read more here: [https://docs.theqrl.org/hardfork/bromine/information/](https://docs.theqrl.org/hardfork/bromine/information/)
Release can be found here: [https://github.com/theQRL/QRL/releases/tag/v2.0.0](https://github.com/theQRL/QRL/releases/tag/v2.0.0)

## Major changes

### Quantum secure multisignature addresses & transactions

Multisig allows multiple parties governance over how allocated funds can be spent.

Examples are numerous, including:

* Petty joint account — where either party can spend funds

* Savings account — where signatures from both parties are required to spend funds.

* Two-factor Authentication wallet — where you have the confirm the transaction from another device.

{{< image "./images/1_nyiVWgfrytvxpXwUJuhYA.png" >}}

{{< image "./images/13W2SsYQaQekADmAH0ENUBA.png" >}}

{{< image "./images/1lVDlpGew3FaDZsDlt0YmJQ.png" >}}

To use it, you’ll need to use the latest wallet after the hardfork. From there it’s a matter of 1, 2, 3… 4, 5.

1. Create a multisignature wallet.
1. Add funds to a multisignature wallet.
1. Any signatory can submit a spend transaction proposal
1. Votes are cast to accept or reject the proposal
1. When the threshold is reached before the blockheight is hit, the transaction is issued.

{{< image "./images/1CVXbt6rhFVzJsPD6fJGERw.png" >}}

For more information on this, be sure to check out our youtube video **“What Does a Quantum Secure Implementation of MultiSig Look Like? — Episode 005”**


### Ephemeral messaging latticeTX — Project Mercury

Dubbed as “Project Mercury”, ephemeral messaging has been a long awaited feature of QRL but was temporarily set aside to ensure the timely release of mainnet, and the stability of the core network.

Now with the Bromine hardfork release, you’ll be able to use all the functionality to create an ephemeral messaging application with the qrl-cli: [https://github.com/theQRL/qrl-cli/](https://github.com/theQRL/qrl-cli/)

For the moment, you’ll still need to create your own *off-chain network*, but this sets the stage for go-qrl, where everything can be incorporated on-chain for a fully decentralized, quantum secure, ephemeral messaging network!

{{< image "./images/1Mmi4skmxFOX5gpqQIRXVqQ.png" >}}*From [https://github.com/jplomas/ephemeral-chat-poc](https://github.com/jplomas/ephemeral-chat-poc) — *very* WIP*

If you want to get into the details of ephemeral messaging, be sure to take a look at our ephemeral messaging system whitepaper: [https://github.com/theQRL/ephemeral/blob/master/EMS_whitepaper_v1.pdf](https://github.com/theQRL/ephemeral/blob/master/EMS_whitepaper_v1.pdf)

## Other minor changes

### Environment switch

Ability to toggle mainnet or testnet with a network-type argument to `start_qrl`.

*Note: To run both at the same time, it’s still necessary to change ports in config.yml of one of the nodes.*

### **Added addr_to field in message transaction**

Now an address can be added to an 80 byte message transaction, allowing for assignable messages on the blockchain.

### Added message_data to transfer transaction

Allows for on-chain transactions to include references to transaction ID’s in things like e-commerce applications.

### Other

* New API has been added to support data related to new transactions
* Address State has been optimized
* Legacy API support for wallet daemon & grpcProxy
* grpcProxy & wallet daemon both support — network-type as an argument
* Updated versions for some of the dependencies
* Added more unit tests covering different scenarios