---
layout: blog-post
slug: project-zond-qrls-proof-of-stake-code-is-released-to-the-public
date: 2020-11-30
author: "Jack Matier"
title: "Project Zond. QRL’s Proof-of-Stake code, is released to the public."
subtitle: "And with the partnership and seminal research by the team at Insight Research, it’s only going to get better from here."
featured_image: 1VHGPdYG_QXB7eRb03DxtBg.png
images:
  - 1VHGPdYG_QXB7eRb03DxtBg.png
categories:
  - technical
features:
  - proof-of-stake
---

It finally happened. 

Our first milestone of the rebirth of our Proof-of-Stake protocol has been hit. The code [has been released](https://github.com/theQRL/zond) publicly and is being tested more widely internally by the QRL Core Contributor team.

***Lets dig into it.***

## Network Timeline & Corresponding Stages of Development.

The QRL Proof-of-Stake Network will eventually run with 3 networks in parallel. First is **Devnet**, which is a hot-off-the-repo network with frequent updates and breakages. 

As devnet becomes feature complete or near feature complete, **testnet** will be released, which contains snapshots of devnet along with two stages of development, *Beta*, and *Release Candidate*. While ensuring testnet is released as feature complete will take longer than releasing a feature incomplete testnet (something like an alpha), this will help ensure a more smooth process for everyone.

Finally there’s the **Mainnet** network, which represents our final release. 

### Stage 1:  Devnet ← We are here

As mentioned, **devnet** is a hot-off-the-repo network with frequent updates and breakages. Right now joining the devnet network is exclusive to The QRL Core Contributors in order to reduce the support load to the core development team. 

Opening up the *devnet* repository is significant milestone as it means that the wider QRL Core Contributors have begun testing the network ensuring for a smoother operation for the upcoming Testnet. This also allows for the core team to prepare documentation and understand the architecture more intimately to be able to support a wider userbase.

```bash
# Everything working fine so far (on my machine)
[2020-11-30 13:18:09]  INFO Minting Block #10518
```

*The time until the first testnet release is currently undetermined, as there’s still more features and fixes to be applied before heading into our beta testnet.*

### Stage 2: Testnet

As testnet is more geared towards the wider QRL community, it’s staged into two stages of development, **Beta**, and **Release Candidate**. It should be stressed that the beginning of testnet does not conclude the end of devnet, and instead they should be seen as working in unison with each other.

**Beta**

Beta is where the codebase starts showing its true and final form. Beta’s can be considered feature complete for the most part. No major architectural changes will be made here.

For those wanting to write software based on the code, *this is where to do it. *Beta is the *Feng Shui* release cycle for third-party development. Stable enough to be predictable and built upon, but flexible enough to accept many proposed changes to make that third-party development easier.

**Release Candidate / Audit**

The final form before release. 

Code is frozen with the exception of bug fixes. An audit is begun at this time, and a continuous cycle of trying to stress the system to iron out any last pain points is performed. 

### Stage 3: Mainnet

Our final release complete with:

* A full Proof-of-Stake network,

* Integrations from the research performed by [Insight Researchers,](https://theqrl.org/blog/insight-researchers-partners-with-the-quantum-resistant-ledger/) and

* Our previous feature-set.

All written in golang.

## Staking Requirements and Current Methodology

*What follows is a written account of how things operate at a high level at the time of this post for the purpose of understanding our Proof-of-Stake network. As noted above, we’re still in devnet so things are subject to change, sometimes substantially.*

### **Preliminary/overview**

The current staking asset requirements is a minimum of 10000 QRL, in steps of 10000 QRL, for a maximum of 100 steps per address for a total of 1000000 QRL.

While Proof-of-Stake hardware requirements are minimal, especially when compared to Proof-of-Work, they are still present. Currently, a machine with with AES-NI is required and further requirements will be established as development progresses. 

*It should be noted that AES-NI is needed to support the legacy randomx/cryptonight network history. Forking away from this would alleviate this weight.*

### Putting it all together

**Stake Transactions and Validators**

In order to stake, a Stake transaction is made through the use of a Dilithium address associated with a QRL address. This stake transaction can create up to 100 Dilithium public keys, each corresponding to a fixed staking amount (presently 10000 QRL). Each of these Dilithium public keys in a Stake transaction equivalent to a ***validator*** on the network, and now that the underlying cryptography is understood, ***validator*** will be the terminology used going forward.

If the QRL Address contains an out-of-step balance, the nearest step down worth of validators will be issued. For example, a QRL address with a QRL balance of 12000 would issue a single validator in the Stake transaction, meaning 10000 QRL will be Staked and locked until another Stake transaction is performed to unlock the funds. This lock time is further effected by the QRL blockchain *epoch *of 100 blocks, which instructs when the validators will be added or removed from the network.

**Epochs and Locked times**

An *epoch* is just a defined unit of time, or in the blockchain world, a set number of blocks. For QRL, this set number of blocks is presently 100.

In our Proof-of-Stake protocol, the list of validators are updated at the end of an epoch but before the beginning of the next epoch. Epoch 0 are blocks 0 to 99, epoch 1 are blocks 100 to 199, and so forth. 

For example, if your Stake transaction was accepted in block 8, the validators wouldn’t be included in the chain until block 99, at which point they would be locked until the end of the epoch you set your next Stake transaction. If that Stake transaction to remove your stake is on block 108, to continue the example, your funds wont be unlocked until block 199.

*Practically speaking*, with a block-time of 60 seconds and an epoch of 100 blocks, it will take an estimated upper bound of 100 minutes (1hr40min) for your funds to become unlocked from the time of the Stake transaction to unlock your funds is issued, but is more likely half that at 50 minutes.

**Validator Roles**

As discussed above, before the beginning of an epoch we update the list of validators. There are two roles of validators in an epoch. A validator may have a role of **Attestor** or a **Block Proposer**. These roles are assigned randomly before the beginning of the epoch, with a single **Block Proposer **assigned per block. 

A **block proposer** first needs to create the block and broadcast it the network so that **attestors** may vote for the block. After collecting all attestation transactions or after hitting a threshold of 45 seconds, the **block proposer** needs to add all collected **attestor transactions** into the block and need to sign the CoinBase transaction.

**Attestors** need to wait for the block created by block proposer. Once the block is *received* by the **attestor** it needs to verify the block and attest the block by signing an **attestor** transaction and broadcasting the transaction to the network. These attested transactions are then collected by the block proposer.

There is a possibility that a **Block Proposer** goes offline when it turns comes up, we may not see any block proposed for specific slot number. In such a case, the block for that specific slot number will be skipped. This means you can see the chain may look like Block #10 → Block #11 → Block #15. The blocks 12, 13, 14 are skipped as the block proposer for these slot numbers were offline and didn’t propose the block. In such case the parent header hash stored in Block #15 will be equal to the block header hash of Block #11.

*Simply speaking*, a **Block Proposer **puts together the block with transactions**, **and the** Attestors **sign off on those transactions, ensuring their integrity. The **Block Proposer** then collects all the signatures and finalizes the block.

## In closing

Our Proof-of-Stake devnet (codenamed Zond) is something that’s been in the works for  years and is finally taking shape with more updates to come. 

You can follow all proof-of-stake updates by visiting our [proof-of-stake](https://www.theqrl.org/features/proof-of-stake/) features page.

*What do you think?*

Join us in one of our many forums on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb) and tell us. Or talk about everything else QRL to quantum computers and everything in-between.

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)



