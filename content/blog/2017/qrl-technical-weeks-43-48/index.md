---
layout: blog-post
slug: qrl-technical-weeks-43-48
date: 2017-12-09T16:25:21.677Z
author: "Juan Leni"
title: "QRL Technical -  Weeks 43–48"
summary: "TL;DR: New processes, deployment packages, etc. Lots of work in testing and related infrastructure. Better persistence scheme. New API, most applications have been updated. A tutorial for third-party developers will be available soon."
images:
  - 10zLMvJt1veQwBq4yAC149w.png
  - 1IELhyQv7I5ZDQMMrSfcVAA.png
  - 1bLsF8KgaiFz7kky6SfeuLg.png
  - 1jWEk9OYE00B6PDYae3bzdg.jpeg
  - 1rsjCSh9hj03Ku1MmW4638w.png
categories:
  - technical
---

***TL;DR:** New processes, deployment packages, etc. Lots of work in testing and related infrastructure. Better persistence scheme. New API, most applications have been updated. A tutorial for third-party developers will be available soon.*

We are so busy that sometimes we forget to tell you what we are doing :) We have made progress in a lot of areas. While the critical aspects of QRL are being developed and improved, the overall release requires orchestrating many things to grow simultaneously.

While part of the team has concentrated on evolving the blockchain specific aspects, there are many other elements that are necessary for a final product to be ready. In the last weeks, we have concentrated on working on the whole ecosystem that our blockchain requires to be a success.

QRL has a range of different stakeholders from final users and investors to developers that would like to build up on the capabilities of the QRL blockchain. At the same time, there are other aspects such as security, extensibility, maintainability, etc. that need to be taken into account.

## Software Processes / Lifecycle

First, the least interesting part. Although less exciting than blockchain announcements, establishing appropriate development processes is critical for success. We had incorporated a lot of metrics and now it was time to start to improve them. In the last few weeks, we have focused on a few critical aspects: testing, configuration management and deployment.

### Unit Testing

Unit testing coverage has grown in the last few weeks. At the moment we are already around 50% coverage and we intend to reach 75% before the end of the year. Continuous integration is part of our normal workflow and we have checks for multiple platforms for every pull request (PR) we make. In addition, we have introduced additional checks to enforce coding guidelines and detect possible vulnerabilities.

### Integration Testing

While unit testing is important, having multiple interacting components may result in unexpected problems. The integration of several of these components needs to be validated. We have recently developed an integration testing scheme based on [Docker Compose](https://docs.docker.com/compose/overview/) and Travis. Every night or on-demand we can start a small isolated testnet and run a series of testing scenarios. In practice, we are running multiple of these testnets in parallel, testing different use cases on each of them. In the next few weeks, we plan to increase the amount of use cases we validate.

Our alpha-testing community depends on a stable QRL testnet. This scheme will prove to be extremely important to ensure the stability of our releases.

### Deployment / Operation

While in the very initial stages of the project it was acceptable to clone directly from GitHub, keeping track of updates and dependencies was very challenging.

This might have been admissible at that stage but since a few weeks ago, deployment via pip or npm is now standard. This is an interim step towards final deployment packages. While useful for the developer community, pip packages still require some technical skills.

In the next few weeks, we are planning to have at least:

* Debian/Ubuntu packages for apt/dpkg, i.e. \*.deb packages
* Brew support for OSX users
* NSIS/Chocolatey for Windows users

### Community

Coordinating all these changes has been very challenging. We are confident that the alpha-testing community understands this. However, we are looking at establishing a better update schedule and processes to coordinate the release of all elements in our ecosystem to avoid temporary glitches due to missing dependencies or incompatibilities.

## Other Significant Improvements

We want QRL to grow beyond what we can imagine today. For that reason, it is important that we depend on technologies that support a wide range of platforms, languages, etc. Serialization or API definitions can be a limitation when incorporating new platforms or programming languages. A similar situation arises with database schemas.

As mentioned above, our new API based on grpc and protobuf is already being used in production. We even had to submit a few fixes upstream to Google’s protobuf to solve some issues in Raspberry Pis.

### Persistance

With respect to persistance, we had a combination of different technologies/approaches. The change to protobuf plus some additional refactoring have enabled us to move to [RocksDB](http://rocksdb.org/), a very efficient low-latency database. RocksDB is already integrated in a branch of [qrllib](https://github.com/theQRL/qrllib). Access to persistent variables has already been decoupled and we will be making the transition to RocksDB soon.

If you have had any exposure to our testnet, you may have noticed how synchronisation times have improved several orders of magnitude. In the most recent versions, the blockchain will be stored in a DB and we expect another performance jump when we enable RocksDB.

## Tokens

Whilst we envision eventual smart contract VM support for the QRL — that will come after mainnet launch. Until then we have implemented a new transaction pair (*token_creation*, *token_transfer*) which allow most of the functionality of ERC20 hardcoded into our blockchain such that we now have coloured coin functionality live.

## Applications

With the move to the new integrated API, many applications have been adapted or completely reworked. The transition is almost finished and most of the tools are now using the new API. Legacy interfaces have already been removed.

### Command Line Interface

A prototype of the new command line interface (CLI) has been released with v0.56.0 and new updates are about to the released. The CLI not only serves as a reference on how to connect to the nodes but also has some interesting features. For example, it is possible to connect to a node and request an unsigned transaction. This blob can be later moved to another air-gapped computer to sign the transaction in a safe manner.

The CLI can run both with a local wallet or connect to remote nodes. We expect also to grow an Admin API with some introspection capabilities so additional information is available to developers or third parties (e.g. exchanges) that need to integrate their services with our network.

{{< image "./images/10zLMvJt1veQwBq4yAC149w.png" >}}*QRL Command Line Interface*

### BlockExplorer and Wallets

In a similar way as the CLI, the block explorer and the wallets have been updated to use the new API. Additional features have been incorporated. We have been able to share technologies and frameworks to the point that it is now possible to wrap the wallet with [Electron](https://electronjs.org/) and have them running as native applications. This, combined with qrllib XMSS running as a web-assembly, brings a lot of opportunities, in particular, hybrid mobile apps — more on this with some exciting announcements before the end of the year.

{{< image "./images/1IELhyQv7I5ZDQMMrSfcVAA.png" >}}*QRL Block Explorer at: [http://qrlexplorer.info/](http://qrlexplorer.info/)*

{{< image "./images/1bLsF8KgaiFz7kky6SfeuLg.png" >}}*QRL Web Wallet at: [https://wallet.qrlexplorer.info/](https://wallet.qrlexplorer.info/)*

### Ledger Support

A few weeks ago we started to look at implementing native support for XMSS in the Ledger Nano S. This is highly experimental and there are important challenges to surmount given the limited amount of RAM. Nevertheless we are confident we will soon be able to announce QRL support for the Ledger Nano S.

{{< image "./images/1jWEk9OYE00B6PDYae3bzdg.jpeg" >}}*Hello QRL!*

### Mobile Apps

Ephemeral has already been discussed in the past. At the moment, we are starting to look at reusing a significant part of our code to build hybrid mobile applications based on technologies like Ionic, React Native or F7. We are already looking at this and there will news soon, including new members of the team.

### Third Party Applications / API

We aim to grow a nice developer ecosystem around our grpc/protobuf API. Over the next few days there will be a nice tutorial with some examples on how to build bots that interact with our blockchain via the API.

*Can Jack teach Butler how to give QRL tips? Stay tuned!*

{{< image "./images/1rsjCSh9hj03Ku1MmW4638w.png" >}}