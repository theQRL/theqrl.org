---
layout: blog-post
slug: decentralised-voting-and-trustless-autonomous-hard-forking
date: 2019-12-01
author: "Peter Waterland"
title: "Decentralised voting and trustless autonomous hard forking"
subtitle: "Back in 2012/3 when I first became obsessed with bitcoin it was obvious to me there were many more applications than value transfer for bitcoin-like systems to improve the world. Chief among these was decentralised voting for use in provably fair and secure political elections. This was long before the QRL existed and even before the consensus related issues around bitcoin and the block-size fiasco."
featured_image: 172v61d9U1aXuUPPDU0UA-A.png
images:
  - 172v61d9U1aXuUPPDU0UA-A.png
  - 12y_77DdYw7SRDWqAQYgQkw.jpeg
  - 1QNmylxWA1MG_vmpWqqYM9w.png
categories:
  - column
---

Back in 2012/3 when I first became obsessed with bitcoin it was obvious to me there were many more applications than value transfer for bitcoin-like systems to improve the world. Chief among these was decentralised voting for use in provably fair and secure political elections. This was long before the QRL existed and even before the consensus related issues around bitcoin and the block-size fiasco.

Conflicts of interest are inevitable in any ecosystem where value is created, transferred and stored. If we have learnt anything from that period of bitcoin history, it is that decentralised monetary blockchains should be able to adapt in an autonomous manner without relying upon gatekeeping developers who may not share the same goals or viewpoint of the stakeholders (userbase) of that cryptocurrency. Contentious consensus changes may only be introduced in such a system following a specified upgrade path.

It seems logical that the place where contentious decisions to both network and token functionality should be decided is on-chain — the sole point of truth for everyone.

(Note: this may not stop the default and easiest position for contentious decisions to be deferred simply continuing the status quo).

## Roadmap upgrades

For some time the core team and community have been debating various system upgrades through our [QIP](https://github.com/theQRL/qips) (QRL Improvement Process). This process on github allows anyone to suggest an improvement to the existing QRL ecosystem to built. There, a safe dialogue between developers and users can occur where technical points of view may be discussed, or the merits of a particular upgrade debated transparently. Such discussion naturally includes only a small component of the community and tends to attract largely technical users and preclude interested but non-technical users. Still it is a crude measuring stick for deciding whether a feature should be actively pursued or set aside.

{{< image "./images/172v61d9U1aXuUPPDU0UA-A.png" >}}

The QIP system is a real gem for the QRL but governance of the project can be improved moving forward.

## On-chain voting

The upcoming qrl-core hard fork includes several exciting new features including ephemeral messaging, multisignature wallet capability (built into the webwallet GUI) and an extension of multisig where ledger-wide polls may be held and voted upon by all QRL users with a non-zero balance.

How does this work? First let’s discuss how our QRL multisig setup works. First in the node or webwallet a new multisig address is created using a *MultisigCreateTx *In where more than one QRL addresses are added to the address with signatory weighting (think voting rights for each address). Next to move funds a *MultiSigSpendTx* is created by one of the listed addresses and the value to transfer and destination address(es) are declared. Finally, each signatory may make a *MultiSigVoteTx* to sign the spend transaction — then once the threshold is reached funds are moved (note: multisig vote and spend are functionally identical). Whilst this sounds complicated it is actually extremely simple using the click-through GUI of the webwallet.

### So, voting..?

To allow ledger-wide voting a ‘magic’ multisig address (‘Q110000000000000000000000000000000000000000000000000000000000000000000000000000’ to be precise — and unspendable) is now designated. This address is special because instead of a limited list of specific QRL addresses it has *all* QRL addresses with a non-zero balance as valid signatories.

Whilst in the backend they are actually modified multisig functions — to keep things clean there are two newly presented transactions subtypes to be used for voting:

1. *ProposalCreateTx*
1. *ProposalVoteTx*

Any QRL address may create a valid *ProposalCreateTx* and start a ledger-wide poll. This transaction sets the type of poll (QIP, user, consensus-changing configuration settings, etc) and allows a specific QIP to be designated, with an additional optional descriptive text string supplied, and a block-height expiry.

To vote upon an existing ledger-wide poll a QRL address simply creates a *ProposalVoteTx* supplied with the relevant *ProposalCreateTx* txid and supplies the voting data — support, reject, abstain etc..

Some of you will have realised that tracking and cataloguing decentralised on-chain polls and votes in the QRL will be easy by simply looking up the magic address on the explorer — with all data piped into readable useful form on the protocol updates page realtime.

With just the above behaviour it is possible for any QRL user to propose a new QIP and ask the community and stakeholders (coin holders) to objectively vote upon whether it should proceed — no developers or core team required whatsoever — fully decentralised.

## Self-amending chain behaviour

{{< image "./images/12y_77DdYw7SRDWqAQYgQkw.jpeg" >}}

The more eagle-eyed will be wondering what ‘consensus-changing configuration settings’ means.

Once ledger-wide polls and voting is active then this opens up the possibility of creating self-amending behaviour for network consensus rules and behaviour.

The following parameters are [configuration](https://github.com/theQRL/QRL/blob/master/src/qrl/core/config.py) settings in the qrl-core client. If changed they will potentially cause a hard fork and split the network into one or more chains. They may all be potentially ‘amendable’ following implementation of on-chain voting:

1. block-time interval
1. block-reward
1. total emission
1. maximum block-size limit
1. consensus-changing threshold limit
1. block-height poll expiry maximum
1. minimum transaction fee
1. hard coded peer_list
1. re-org limit
1. minimum accepted qrl-node version
1. consensus algorithm (for a later release!)

It is possible using the *Proposal* transaction subtypes to propose a direct network change, and then upon reaching a satisfactory threshold for that on-chain proposal, to autonomously fork in the new consensus settings from the next block. Thus, a poll with a successful vote may alter the parameters of the network in a completely decentralised trustless and autonomous fashion.

In effect the existing rules of the system are moved onto the chain and may be altered only by ledger-wide voting consensus.

### Examples

An example could be altering the emission curve based upon consensus or making blocks more or less frequent than currently. Another simple change would be to alter the peer_list to amend a new IP address acting as a discovery node for new entrants to the network — say if some of the earliest network nodes were migrating to a new platform. During a network transaction spam attack it may be necessary to implement a temporary minimum transaction fee — this could be done via a voting proposal and direct fork update to raise the minimum transaction fee from zero.

{{< image "./images/1QNmylxWA1MG_vmpWqqYM9w.png" >}}

### Future upgrades

It is also possible to extend these initial self-amending features to include future code modules to automate a mining algorithm change or other consensus upgrade — for example, migration to POS at a given block-height.

There is a QIP coming out which will flesh this out in more detail and interested parties will be able to help us test these changes on QRL testnet in the near future.

## Definitions:

Hard fork — a network upgrade which is not backwards compatible to existing clients, with legacy nodes behaving differently if not upgraded, potentially resulting in two versions of the chain going forward.