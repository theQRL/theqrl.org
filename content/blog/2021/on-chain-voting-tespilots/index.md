---
layout: blog-post
slug: decentralized-on-chain-voting-enters-public-testing
date: 2021-09-29
author: "Jack Matier"
title: "Decentralized on-chain voting enters public testing"
summary: "Decentralized on-chain voting has entered public testing on $QRL"
featured_image: voteheader.png
categories:
  - technical
features:
  - voting
  - testpilots
toc: true
---

Voting is an important part of any decentralized blockchain project. The main goal of voting is to produce a decision which is accepted by the members of the system. One can argue that voting upholds the fundamental principle behind democracy, “rule by the people”.

One of the most fundamental reasons why it's important for any decentralized blockchain project to have on-chain voting, is that it provides a way for stakeholders in the system to have their voices heard in regards to how decisions are being made. Another key aspect of why on-chain voting should be used is because it increases transparency - every vote will be logged and publicly visible for all stakeholders to see. 

## Overview

Votes using the QRL's on-chain voting system are conducted by users sending a message transaction to the chain.  This contains metadata generated by our voting platform at https://vote.theqrl.org specifying an identifier of the poll and the user's vote.

{{< image "./images/voteidhash.png" >}}

This is all MIT open source so that anyone can create their own on-chain voting initiatives (more on that in a future post. Stay tuned!)

## Casting your vote

### Step 1: Create a testnet address & procure a balance

In order to participate in the testnet vote, you'll need two things:

1. A *testnet* QRL address
2. A balance of >1 QRL

For your testnet QRL address, head over to [testnet-wallet.theqrl.org](https://testnet-wallet.theqrl.org) to create your own testnet address.

To get some testnet QRL that will improve the weight of your vote, you can setup a [testnet node and mine](https://docs.theqrl.org/node/testnetNode/), but it's easier (and faster) to head over to our [Discord](https://theqrl.org/discord) and join our [#testpilot](https://theqrl.org/discord) program by adding your testnet address there. Upon doing so, you'll receive a testpilot role which may give VIP early-access to as we roll out additional functionality.

> Note: It's important to **not** reuse your mainnet address for testnet as doing so if the OTS key reuse is recorded, could weaken the security of your wallet.


### Step 2: Head over to vote.theqrl.org

On [vote.theqrl.org](https://vote.theqrl.org), you'll be presented by a page that outlines the voting parameters, voting options, progress, and a way to check the status of your vote.

#### Vote parameters/metadata

{{< image "./images/votemeta.png" "float-right" >}}

- **Title:** Self-descriptive title of the vote 
- **Originator:** The author or organisation
- **Eligibility:** Minimum required
- **Excluded:** Excluded addresses (typically exchanges/other organisations)
- **Blockheight of eligibility snapshot:** Snapshot blockheight of balances + when indexing of blocks start
- **Vote Mechanics:** A set of rules of how votes will be calculated. It's worth reading the wikipedia page on [Electoral systems](https://en.wikipedia.org/wiki/Electoral_system) to get an idea of the potential variety of vote systems that can be supported.
- **Vote expires:** Blockheight of that the indexing of votes will end
- **Options:** Two or more voting options depending on the vote mechanics.

#### Vote options

{{< image "./images/voteoptions.png" >}}

Depending on what you want to vote for, you'll use that vote hash to indicate your selection in the form of a message transaction. Vote options can be two or more and is defined inside of the metadata of vote.


#### Progress

{{< image "./images/voteprogress.png" >}}

Progress indicates the voting turnout as well as the current status of the vote as it stands. This is calculated live from the current blockheight snapshot.


#### Address check

{{< image "./images/voteaddresscheck.png" >}}

In order to confirm your voting status to make sure your vote went through, or whether you're eligible to vote, you can do so here:

### Step 3: Send the message transaction

{{< image "./images/vote.sendmessage.gif" >}}

With the hash outlined in the vote options on [vote.theqrl.org](https://vote.theqrl.org), open up your wallet at [testnet-wallet.theqrl.org](https://testnet-wallet.theqrl.org) and go to tools -> message transaction.

You can verify that by going to the address check portion of [vote.theqrl.org](https://vote.theqrl.org).

### Future enhancements

The voting system can be set up to be a part of a seamless experience, with an intuitive backend voting API to integrate active votes into the QRL web wallet.

## Stuck? Have suggestions? Want to learn more?

We'd love to hear your feedback and suggestions for future enhancements as well, which you can do by join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/).