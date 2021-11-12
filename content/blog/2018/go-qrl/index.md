---
slug: go-qrl
date: 2018-08-16T18:44:27.919Z
author: "Jack Matier"
title: "Go-QRL"
layout: blog-post
summary: "Project Update"
categories:
  - technical
images:
  - The_Go_Gopher.jpg
featured_image: The_Go_Gopher.jpg
---

### Project Update

*TLDR — Go-QRL Node repo public, Project Carbon, incremental wallet update to v1.0.2, and Developer Meeting Summaries*

Go.

It’s what the team and network have been doing and will continue to do. Just as the QRL network’s blocks move forward, so too will we.

### Go-QRL Node

Our [Golang](https://golang.org/) node of QRL has now been released to a public repository and is under active development.

[Go](https://en.wikipedia.org/wiki/Go_(programming_language)) (also known as Golang) is a new compiled programming language developed by Google in 2009 that makes it easy to build simple, reliable, and efficient software. This will allow for faster, more consistent QRL nodes with full-concurrency throughout.

You can find the repository on our [GitHub](https://github.com/theQRL) at [go-qrl](https://github.com/theQRL/go-qrl/). It should be stressed that this is a **work in progress** and **NOT TO BE USED IN PRODUCTION— ONLY FOR VIEWING PURPOSES**.

### Project Carbon — Smart Contracts

Continued work on the Smart Contract QIP (QRL Improvement Proposal), now dubbed **Project Carbon**, is well under way. Last week, attack surfaces were researched, discussed, and reflected in the upcoming QIP + blog. Along with this, compiler structure is making progress and is expected by this weekend.

There is a *strong* focus on balancing the functionality of our Smart Contract platform with preventing exploits. Feature wise, the emphasis is on financial applications, so expect things like Escrow Payments, Recurring Payment Schedules, decentralized automated multiple-signatory accounts, and more.

### Binary wallet v1.0.2 released

An incremental update for our binary wallet for Windows, Mac and Linux has been [released](https://github.com/theQRL/qrl-wallet/releases/tag/v1.0.2)!

**Changelog**

* Improved Mobile UI
* Resolves transaction display bugs
* Shows warning when sending to 0x Ethereum addresses
* Updated CI to support CircleCI v2
* Updated Meteor base to 1.7.0.4

### Developer Meeting Summary

Those with a keen watchful eye on our github may have already noticed the first release of our developer meeting summary. This summary will allow everyone to get an inside look on what is discussed every Thursday at 19:00 UTC.

Some highlights not mentioned in this blog are:

**BECH32 QIP**

* Planning parallel use of Q-hexstrings and BECH32 addresses
* Andrew undertaking exploratory work

**Interface/interaction**

* Early stage QIP on interaction design to visualise network activity discussed: primary draft on wallet in progress.
* To be expanded both for explorer and smart contracts.
* Outreach with interaction designers/interested parties in the crypto space discussed.

**x41 audit**

* Audit to start Monday 20th August: scope and logistics discussed

Be sure to read the full summary [here](https://github.com/theQRL/dev-meetings/blob/master/2018/08/16.md). This is something we are trialing so it may not be a permanent feature. If you find you really enjoy it, let us know in our [Discord](/discord) or [Reddit](https://www.reddit.com/r/qrl).