---
layout: blog-post
slug: qrl-token-migration-to-be-announced-shortly
date: 2018-03-23T21:07:41.642Z
author: "Peter Waterland"
title: "QRL Token migration to be announced shortly"
subtitle: "TLDR — new team members, final hard fork to test token migration successful, GPU Pool mining implemented, feature freeze achieved, extensive bug bounty program to be announced, QIP process, documentation efforts progressing, parallel internal code review & external audit remain."
featured_image: 1uPODGbTAQkA2V5OiKuu7oQ.jpeg
images:
  - 1uPODGbTAQkA2V5OiKuu7oQ.jpeg
  - 1hr0M31hVbHL3XIzP5hI1vA.jpeg
  - 1rsbylm42k3MZjIuj84ottA.png
  - 1Wev6Pr7bB2w8fyEWcuG0GQ.jpeg
  - 16W7CCZp7whSFi6U-j8QdWQ.gif
  - 1AjI-6OHQ_MHw1XGfOEvPtg.jpeg
  - 1qr8iavnFdxLD3Bm6OmAbgQ.png
  - 16o53cXzgl-t-AgF9ZpStvg.png
categories:
  - technical
---

## New members

It is brilliant to start this blog by introducing two new members of the team; **James** (/u/fr1t2) who has the unenviable task of documenting our project over the coming months, and **Elliott** (/u/OminousLatinWord) — who you may recognise from his successful stint in community relations — has jumped on board as a junior core developer. Elliott has repeatedly demonstrated his intelligence during developer discussions and has a college-level computer science background to boot.

Welcome aboard chaps!

## Token migration protocol test run

After a frustrating few weeks of bedding in our testnet, fixing various bugs and fully implementing mining and pool capability, we have finally trialled our token migration system in a dry run.

Thanks to the community members who took part in this process and for their feedback to help improve the user interface of the webportal— what seems blindingly obvious to the development team can be very unclear to a normal person.

Last week we ran a simulation of our token migration process using a clone of our ethereum ERC20 [contract](https://etherscan.io/token/0x697beac28b09e122c4332d163985e8a73121b97f) on the ethereum testnet *ropsten* chain.

As a reminder, this simple process involves users sending QRL ERC20 tokens to a pre-determined ethereum address (‘burn address’), which is calculated by performing a one-way hash transformation of the future user-selected QRL mainnet address. The QRL team will track all declared ethereum burn addresses realtime and use the final balances to build the initial ledger balances in our mainnet genesis block. More human friendly instructions will follow below.

{{< image "./images/1uPODGbTAQkA2V5OiKuu7oQ.jpeg" >}}

Our most recent hard fork has brought our [testnet ](https://explorer.theqrl.org)back online with a full complement of various fixes to our node, DDOS/flood protection, grpc-API, node-CLI, updates to transaction and block structure as well as simplified mining integration for the node, and GPU mining implementation.

Importantly, we have used this chain reset / hard fork to test our automated scripts for creating the genesis block using data directly from our practice token migration test run last week. This process is automated with multiple redundancies as there are currently 2280 QRL live addresses — excluding the very significant exchange holdings.

Pleasingly everything has gone to plan, allowing us to move forwards with the process for real.

### Token migration test run — part two

It’s not over yet for our migration testers — but the best is part is yet to come.

{{< image "./images/1hr0M31hVbHL3XIzP5hI1vA.jpeg" >}}*Small child unwrapping their QRL testnet coins*

Now testnet is back up and the chain has reset with our new genesis block, any user who contributed to the dry run will be able to access their QRL testnet wallet and find their funds automatically waiting for use!

## A reminder about Token Migration

If you’ve been following the Quantum Resistant Ledger blog lately, you will have noticed we are reposting the instructions to complete the token migration when it starts. This blog is no exception.

Additionally, for token migration, there will be a video on our [youtube](https://www.youtube.com/channel/UCZl6N10P9LNpYkrMwWYtK1w) channel, documentation on our [documentation website](https://docs.theqrl.org), and a blog post with links to everything along with instructions.

Furthermore, there will be human support on high alert assisting in any way they can on d[iscord](https://discord.gg/jBT6BEp), r[eddit](https://www.reddit.com/r/qrl) and email.

To refresh your memory, here are the three easy steps:

* Step 1. Create your QRL Wallet and mainnet QRL Address (from our [webwallet](https://wallet.theqrl.org), or your node)

* Step 2. Go to the QRL Token Migration webportal and enter your newly created QRL address (**remember to keep your seed mnemonic and/or hexseed safe and secret!)**

* Step 3. Generate your ethereum burn address to which you will send QRL(ERC20). Transfer QRL(ERC20) into the burn address.

Anytime you send QRL ERC20 to the reusable Ethereum Burn Address, QRL Coins are deposited 1:1 into your mainnet QRL Wallet.

{{< image "./images/1rsbylm42k3MZjIuj84ottA.png" >}}

### Qryptonight

The QRL uses the cryptonight algorithm as a proof-of-work mechanism with which to choose the next block and extend the chain with consensus. This complex algorithm is used by monero and other derived coins. It has come to our attention that the monero team may be adjusting the algorithm in the coming weeks via hard fork in response to newly developed ASIC chips specifically designed to mine cryptonight far more efficiently than existing CPU/GPU capabilities.

At the present time the QRL plans to follow the updated cryptonight algorithm to try and exclude ASIC mining of the QRL — we would value community input on this decision. Changing the POW function in the next two months will likely force an early network hard fork.

### GPU and mining pool support

With the latest hard-fork we have also implemented GPU pool support. Community members will have pools on the test network soon to allow GPU mining using any XMR GPU mining software. A functioning QRL mining pool website can be seen [here](http://mineqrl.com).

{{< image "./images/1Wev6Pr7bB2w8fyEWcuG0GQ.jpeg" >}}

We have a guide soon to be added to our documentation site walking through how to connect to the QRL testnet. [Discord](https://discord.gg/BheKAZb) and [reddit](http://reddit.com/r/qrl) will help users who need additional help pointing their rigs at our testnet.

### **Documentation**

Our newest team member /u/fr1t2 has been working furiously with /u/jackalyst to begin to document guides for various things such as how to use the webwallet, node installation, mining guides, as well as more technical pages on our address, transaction and block format, and in the coming days with /u/ademcan some developer-friendly grpc-API guides to interact with the node from other user-defined code projects.

{{< image "./images/16W7CCZp7whSFi6U-j8QdWQ.gif" >}}

This is a gradual and iterative process but the progress thus far is excellent and I have to say it looks great. It can be found [here](https://docs.theqrl.org).

### Bug bounty program

The QRL is an [open source](https://github.com/theQRL) project with code running in the wild on our public testnet for many months. However, finding critical vulnerabilities and bugs is an ongoing process, especially within a complex codebase spanning multiple code repositories and programming languages.

{{< image "./images/1AjI-6OHQ_MHw1XGfOEvPtg.jpeg" >}}

Bug bounties incentivise ethical hackers ([white hats](https://en.wikipedia.org/wiki/White_hat_(computer_security))) to perform responsible disclosure and allows the project to close security holes and fix vulnerabilities safely without service interruption. It is also a neat way to attract developers into the project.

For a blockchain offering longevity of security, we feel an exceptional bug bounty program is an important aspect of security for the future. Consequently, in the coming days a page on our [website](https://theqrl.org) will detail a tiered bug bounty program with payouts based upon the severity of vulnerability identified.

## QRL improvement proposals (QIP)

Continuing in the vein of improvement, post-mainnet we will continue to build out the roadmap throughout 2018 and beyond. During the last few months we have a number of ideas that we feel will significantly improve our project, with undoubtedly many more we haven’t thought up yet.

But once the project is live, making changes becomes more difficult, especially when they require a hard fork to bring the entire network along in step.

With this understanding in mind the developers have decided to create a system akin to BIP in bitcoin, in which protocol upgrades are suggested with appropriate code, following which a peer review process amongst the developers occurs to ensure the proposal is robust and meets critical assessment.

Thus far we have the following items suggested for our QIP process:

#0 hierarchical deterministic XMSS wallet featuring extensible trees and slave

#1 wallet file optimisation to speed up XMSS tree population and shorten wallet loading times

#2 address format [optimisation](https://github.com/theQRL/QRL/issues/1094) to improve human readability, shorten addresses and add error correction

#3 formal documentation of our low level protocol,

#4 golang rewrite of the base node — necessary to have multiple implementations of the base node

## Final steps

{{< image "./images/1qr8iavnFdxLD3Bm6OmAbgQ.png" >}}

We have reached feature freeze.

All that remains is our internal code review and a parallel third-party code audit to be completed. Expect more details to follow shortly with our token migration announcement imminent.

{{< image "./images/16o53cXzgl-t-AgF9ZpStvg.png" >}}