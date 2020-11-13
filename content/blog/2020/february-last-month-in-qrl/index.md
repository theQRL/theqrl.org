---
layout: blog-post
slug: february-last-month-in-qrl
date: 2020-02-10T19:33:53.104Z
author: "Adam Koltun"
title: "February -  Last Month in QRL"
subtitle: "The Bromine HF delay, Development Updates, Bromine Testnet Live"
featured_image: 1PtKjiBeKZo-2fi4aEREpow.png
images:
  - 1PtKjiBeKZo-2fi4aEREpow.png
  - 1lIx3BPGGfaTrqipEt2N4EA.png
  - 1EEvlZLlhfLTo7x8-uVpveA.png
categories:
  - technical
forks:
  - bromine
features:
  - multisig
  - qrl-cli
  - ephemeral-messaging-system
---

## Overview

While February may be the shortest month of the year, it was certainly not the quietest. The testnet for Bromine, our first hard fork since the launch of the QRL mainnet, is now live! There is an entire blog dedicated to engaging with testnet [here](/blog/bromine-testnet-is-live). In the world of Quantum Computing, IBM has been [betting big on quantum cloud services](https://www.ciodive.com/news/ibm-blockchain-cloud-revenue-jerry-cuomo/572037/), and [D-Wave is getting into the cloud space](https://venturebeat.com/2020/02/26/d-wave-announces-leap-2-its-cloud-service-for-quantum-computing-applications/) by announcing [Leap 2](https://www.dwavesys.com/take-leap), a cloud service that allows users to access a D-Wave 2000Q quantum computer.

After delaying the codefreeze initially scheduled for the 10th, we froze our code on February 21st, a new testnet was released on February 29th, and a test hard fork will occur at block height 10500, roughly the 7th of March. A release date for the actual hard fork will be announced once that is successfully completed. If there are issues, testnet will continue to run test hard forks until everything is stable. As always, we are committed to security and stability above all other concerns.

## Development

{{< image "./images/1lIx3BPGGfaTrqipEt2N4EA.png" >}}*Credit: Discord user snannerb*

* **[qrandomx](https://github.com/theQRL/qrandomx/commit/2da94de739ae722bb074ff22e2728504231807ec)**: Fix for pip3 install, by adding deps/RandomX into distribution package
* **[integration_tests](https://github.com/theQRL/integration_tests/commit/e40df2e825dc87579c8d481e320f1a8088dd76c0)**: Fixed location of genesis.yml for fork_recovery
* **[qrl-docker-ci](https://github.com/theQRL/qrl-docker-ci/commit/a4bccbc6fe6f5f497a2cafe6d3658601de3c3095)**: Fix yaml in circleci config
* **[qrllib](https://github.com/theQRL/qrllib/commit/641ec32e7ff84dc10a07ed0f049321287113e3bc):** Pullrequests/ademcan/master
* **[qrl-cli](https://github.com/theQRL/qrl-cli/commit/262f8eaeb4bcb6ffe8b8c43e640cff966907a3e2):** Bump handlebars from 4.1.2 to 4.7.3
* **[qrl-wallet](https://github.com/theQRL/qrl-wallet/commit/965a127f35dd90b8a100b9a93a41147bb2300a25)**: Add pre-HF testnet node hash
* **[integration_tests](https://github.com/theQRL/integration_tests/commit/5769881780c20e6af449d9f18dfed77d53beca40)**: Updated docker container to qrl-docker-ci

## Bromine Hard Fork Testnet is Live!

{{< image "./images/1EEvlZLlhfLTo7x8-uVpveA.png" >}}

The Bromine hard fork is the first of its kind on the QRL network since our launch in June of 2018. Coming along with the hard fork is a change to the mining algorithm, the addition of multi-signature addresses and transactions, as well as the introduction of LatticeTX, which is the most significant step taken to date to realize the potential of ephemeral messaging on the QRL network.

**RandomX Mining Algorithm**

* RandomX is a mining algorithm that is optimized for general-use CPUs
* Should help reduce/eliminate ASICs on the network

**Multisignature Addresses and Transactions**

* Allows for more sophisticated wallet-control schemes, such as within an hierarchical team structure
* Also allows for dividing up of responsibility for possession of Quanta among more than one person
* Avoids a single-point of failure, making it significantly more difficult for the wallet to be compromised
* Allows for the creation of more sophisticated custodial schemes to be created for wallets

**LatticeTX**

* First significant element on the road to a fully decentralized Ephemeral Messaging Service (requires go-qrl)
* Allows for the writing and running of full-fledged ephemeral messaging apps