---
layout: blog-post
slug: qip-007-support-tokenization-of-securities
date: 2019-04-23T20:48:45.194Z
author: "Adam Koltun"
title: "QIP-007 -  Support Tokenization of Securities"
summary: "An introduction to the newest QIP"
categories:
  - community
---

*An introduction to the newest QIP*

On April 19th, GitHub user [IMac318](https://github.com/IMac318) submitted the latest QRL Improvement Proposal (QIP) — “QIP-007: Support Tokenization of Securities.” ([link to QIP](https://github.com/theQRL/qips/tree/master/2.Proposals/1.%20Open/7%20-%20Support%20Tokenization%20of%20Securities)) We are always excited to see new QIPs pop up on GitHub, especially when they originate from within our community of users. Certainly, tokenization of securities is an issue that is being debated in various iterations throughout the blockchain world. Security tokens generally, and Security Token Offerings (STOs) more specifically, have risen to the forefront of many debates regarding the next wave of functionality to hit the blockchain ecosystem.

This blog will provide a general overview of the QIP, but you should feel free to check out our [QIP section of the website](https://theqrl.org/protocol-updates/), or jump in on the conversation [directly on GitHub](https://github.com/theQRL/qips/pull/15).

## Abstract
> One of the biggest potential use cases of blockchains in the future is the tokenization of existing securities to be bought and sold by valid parties. Being the only existing blockchain that is quantum resistant from genesis and adding the functionality of smart contracts, QRL is in a unique spot to capitalize on this opportunity. The QRL team should evaluate whether the functionality of the smart contracts that are currently in progress can support the tokenization of securities on the QRL blockchain. If that is not the case, the team should consider adding additional functionality that allows for such tokenization.

## Motivation

Given the length of the motivation statement, I have only included 2 of the paragraphs below, with a link to the full text at the bottom.
> The current usefulness of blockchain is highly debated, and there is much conversation about what “killer app” will eventually drive adoption. One current use of blockchain is speculation, and it is very attractive in this area due to the ability to buy fractions of a coin or token. In contrast, many traditional assets require the purchase of an integer number of the asset. For example, it is difficult to obtain a fraction of a stock or real estate property…
> The purpose of this QIP is to urge the QRL team to evaluate whether or not the in-progress smart-contract functionality can support the creation and exchange of security tokens. QRL smart contracts are limited in functionality compared to ETH (where security token standards are currently being created), so the author does not automatically assume that such functionality currently exists. If it does not, consideration should be given to add such functionality.

Full text [here](https://github.com/theQRL/qips/pull/15/commits/4c0d57f7445252e0dcf9db578c948e5ed5c754a5#diff-6ca84c8a1de35376f47274be3c33c93c)

## Specification
> QRL already has the ability to create tokens, but to be compliant with regulations, it must be possible to restrict transactions of security tokens between wallets if the sending and receiving wallets do not meet certain criteria (example: [https://thesecuritytokenstandard.org/);](https://thesecuritytokenstandard.org/);) therefore, it would have to be possible to make these checks before a token transaction is admitted to the blockchain.

## Implementation
> Several entities are working on platforms for tokenization of securities. Polymath, Harbor, Securrency, and tZero are prominent examples. It may be worth reaching out to them for evaluation and implementation.

We continue to be very proud of the QIP system and are grateful for how the community has thus far embraced it. We hope to continue to see new, interesting and timely QIPs pop up intermittently as time goes on. Hopefully, they will help shape and direct development of the QRL network in such a way that will allow the network to be the best it can be.