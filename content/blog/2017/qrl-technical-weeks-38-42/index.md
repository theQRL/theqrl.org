---
layout: blog-post
slug: qrl-technical-weeks-38-42
date: 2017-10-23T18:38:45.801Z
author: "Juan Leni"
title: "QRL Technical -  Weeks 38–42"
summary: "TL;DR: Tons of improvements: Wallets, Communication Layer, Persistence Layer, Installers. Many more to come."
featured_image: 15EjHu1jLjDC9eiFTn1ZR2w.jpeg
images:
  - 15EjHu1jLjDC9eiFTn1ZR2w.jpeg
categories:
  - technical
---

It seems it was years since my last post about the new XMSS library. We have made many, many improvements since then. The library has been running in testnet for some time already and we have recently added multi-core support. Even the tiny RBPi3 can process XMSS in multiple cores. In addition, web-assemblies are now a reality and we can sign/verify directly in the browser. In the next few days we will be presenting our new wallets based on qrllib+meteor+electron with support for major platforms and browsers.

In weeks 39–41, we started to move the whole communication layer to gRPC (public/admin APIs and P2P communication). This enables many interesting things: automatic code generation for third-party contributions, fast/scalable comms, two-way streaming between nodes (encrypted streams of data soon?). The framework is known to support millions of RPC calls/sec and we are looking to profit from that.

From a serialization/persistence perspective, we are currently moving to a combination of protobuf+RocksDB. This will result in a massive improvement in the way we can handle the blockchain. Node synchronization will be extremely faster soon.

We are also streamlining the release and installation processes. The next release will have PYPI/pip packages for testnet. Alpha testers will not need to use git anymore. Instead, they will be able to install/upgrade directly from PYPI. The plan is to go beyond that and prepare debian, brew and chocolatey packages soon.

From a project management perspective and in order to provide more visibility, we are evaluating to move our internal backlog to GitHub Project. In the last two weeks, the move from Slack/Discord support to reporting issues directly in GitHub was successful. We are looking to simplify and provide even more visibility into our development process. Nevertheless, you are all invited to Discord #code and GitHub to follow our daily progress.

P.S. The picture? Those two devices are waiting on my desk. I will write about them soon ;)