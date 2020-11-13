---
layout: blog-post
slug: last-week-in-qrl-11-5-11-11
date: 2019-11-11T16:59:05.620Z
author: "Adam Koltun"
title: "Last Week in QRL 11/5–11/11"
subtitle: "Development Updates, QIP 009, New QRL Team Member"
featured_image: 11QYtSmAfwpbDJoyig1fXwQ.png
images:
  - 1urUBIFDA6rrLGHfXfrLQKw.png
  - 1ojnxSRHZ041dgcsy_IFtyw.jpeg
  - 1bo0FMUqghvvsUxA6ttL2Kw.jpeg
  - 1-JhzEhEYTcoG9SAF19ChZg.gif
categories:
  - technical
---

## Introduction

As we move into the middle weeks of November, we at QRL have continued to play with multi-signature wallets on devnet, which we will be bringing to testnet in a reasonable timeframe. It is worth reiterating that multisignature wallet functionality will allow for more varied uses for our wallet, and will help provide functionality for second-layer application development moving forward.

Additionally, it is always exciting whenever we are able to add passionate and talented individuals to the QRL team. We are happy to announce that Michael Strike (Discord user StrikeAttack) has joined the QRL team! We have a blurb from Michael and more on what he will be doing below.

## Development

{{< image "./images/1urUBIFDA6rrLGHfXfrLQKw.png" >}}*Credit: Discord user snannerb*

* [**explorer-helpers](https://github.com/theQRL/explorer-helpers/commit/a21273c9bebb88ce38a682803681925b16b5a020)**: Parse multi_sig_address from Buffer

* [**qrl-wallet](https://github.com/theQRL/qrl-wallet/commit/093119ef0d9697fd6541bea0402476a751181dd0)**: Add v1.1.15 to recognised versions

* [**theqrl.org](https://github.com/theQRL/theqrl.org/commit/7a399a885303e30b71f36ec94b7c716418ad9e49)**: Google fonts + Update blog

* [**QRL](https://github.com/theQRL/QRL/commit/130044cb5015ad21db49a3b6867f1327a071b680)**: Fixes and updated integration tests

## QIP 009: Change mining algorithm to RandomX

{{< image "./images/1ojnxSRHZ041dgcsy_IFtyw.jpeg" >}}

Four days ago, GitHub User [doctor-gonzo](https://github.com/doctor-gonzo) submitted QIP 009: Change mining algorithm to RandomX. Here is what he had to say (via [GitHub](https://github.com/theQRL/qips/pull/20)):
> A mining algo change would go a long way towards re-vitalizing the mining community. Many people built rigs or pointed rigs at QRL initially but have been crushed by ASICs / FPGAs and no longer participate.

As of this writing, 8 different individuals have weighed in on the QIP, including 3 QRL team members ([link](https://github.com/theQRL/qips/pull/20) to comments). Mining (for those chains that utilize PoW) forms the bedrock of operationality for a blockchain, and any changes to it will almost certainly have a ripple effect. That also means that inaction can be as dangerous as action, as an untenable situation can have a corrosive effect on the health of a blockchain network. As such, it is important to take such discussions very seriously, and the more good-faith participants in the discussion, the better.

## Introducing Michael Strike

{{< image "./images/1bo0FMUqghvvsUxA6ttL2Kw.jpeg" >}}*Pictured: Michael Strike*

Many of you already know Michael Strike (Discord user StrikeAttack) from his activity on the [QRL Discord](https://discord.gg/VR9kcs2). An active community member for more than a year now, over time Michael’s involvement with the project grew. Recently, we have asked him to join us on the community/advocacy side of QRL. He will help us continue to optimize and grow our efforts to help raise the profile of the project, as well as continuing to help set us apart within the crowded blockchain space.

Some words from Michael:
> It is with great excitement that I have accepted a role with QRL as a core team member. I’ve been involved with the project since before mainnet, and getting to know the community and core team members has been personally rewarding. While I will be wearing many hats in this role which will likely change over time, I can share a few ideas up front. First, I intend to aggressively, professionally, and tactfully reach out to people of influence, organizations, and government agencies in order to expedite community awareness of our project so that we will be more strategically positioned in the future. Second, I also believe that establishing a solid brand identity is critical to the future success of this project. Third, I plan to develop media content and look for strategic areas of process improvement that will streamline efficiency. I have a strong, vested, and passionate interest in the success of this project and am looking forward to contributing the best that I can. Thank you.

Once again we would like to extend a heartfelt welcome to Michael from the entire QRL team and community — we are certain that he will be an excellent addition to QRL!

{{< image "./images/1-JhzEhEYTcoG9SAF19ChZg.gif" >}}