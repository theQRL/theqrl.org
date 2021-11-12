---
layout: blog-post
slug: bromine-testnet-is-live
date: 2020-02-29
author: "Jack Matier"
title: "Bromine Testnet is LIVE!"
summary: "Overview, installation & running, mining, and testnet incentives/awards"
featured_image: 1P_d8q2XPuaQa-DYPJvN_Ug.png
images:
  - 1P_d8q2XPuaQa-DYPJvN_Ug.png
categories:
  - technical
forks:
  - bromine
---

### Overview, installation & running, mining, and testnet incentives/awards

## Overview

The *Bromine public testnet* starts at block 0 and wont have any of the features of *Bromine* until the *Bromine testnet hardfork* blockheight of **10500**, or roughly **7 days** from the date of this post on **Friday, March 6th, 2020**.

## Testnet Wallet & Explorer

1. **At present** use [wallet.theqrl.org](http://wallet.theqrl.org) with testnet selected
2. **After the hard fork trigger in testnet** (blockheight 10500) the new wallet features will launch on [testnet-wallet.theqrl.org](http://testnet-wallet.theqrl.org)
3. **Testnet explorer** is [testnet-explorer.theqrl.org](https://testnet-explorer.theqrl.org)

> **As a reminder do not use the same wallet on mainnet as on testnet!**

## Installation & Running a node

Instructions are also in our documentation at [https://docs.theqrl.org/node/testnetNode/](https://docs.theqrl.org/node/testnetNode/)

### Installation

On a machine that’s *not running a mainnet node*, you’ll want to install the prerequisites on an Ubuntu machine.

```bash
# Update and Upgrade packages
sudo apt update && sudo apt upgrade -y

# Install Required dependencies
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev

# Install CMAKE version 3.10.3 manually
cd /opt && sudo wget https://github.com/Kitware/CMake/releases/download/v3.10.3/cmake-3.10.3.tar.gz && sudo tar zxvf cmake-3.10.3.tar.gz && cd cmake-3.10.3/ && sudo ./configure && sudo make -j2 && echo -e '## Adding cmake version 3.10.3\nPATH=$PATH:/opt/cmake-3.10.3/bin' >> ~/.bashrc && source ~/.bashrc


# Make sure setuptools is the latest
pip3 install -U setuptools
```


And then install qrl version 0.2.0

```
`pip3 install -U qrl==0.2.0`
```


### Running a node

Running can be done by executing qrl with a testnet flag

```
start_qrl --network-type testnet
```


### Getting Quanta

You can get Quanta by mining (below), using the [qrl testnet faucet](https://testnet-faucet.qrl.tips/) or by asking in [Discord](/discord) or [Reddit](https://reddit.com/r/qrl) for some.

## Mining

You can mine to the network, either as a node or connecting a mining client to a mining pool

Keep in mind, up until blockheight 10 499, CNv1 (CryptonightV1) will be the algorithm. At blockheight 10 500, it will switch over to RandomX.

### Pool mining

You can connect a mining client to the qrl public testnet pool: [http://136.244.104.146/](http://136.244.104.146/)

Up until blockheight 10 499, you will need to use a CNv1 client. After that you’ll need to use a RandomX client.

### Running a pool

Pool operators or those that want to run their own pool can find the code here: [https://github.com/cyyber/cryptonote-nodejs-pool/tree/dev](https://github.com/cyyber/cryptonote-nodejs-pool/tree/dev)

It’s encouraged that you do so and post the link so people can test it.

### Node mining

You will find a .qrl-testnet folder in your node home directory. In it there’s a file called *config.yml*

In that file you’ll want to set the following parameters.

```
mining_enabled: True
mining_address: 'Q0105001c47433c0078bfbb9efc001bc6def904fc80fc0ea8a76029c9f0b044fe9e23cdd0265a7b'
mining_thread_count: 0
```


Be sure to substitute in *your own QRL testnet address.*

## Awards / Testnet incentives

There are different testnet incentives each worth 100 Quanta (maximum 1 per person)

* First running testnet python node
* First testnet transaction
* First multisignature wallet (when the HF triggers)
* First multisignature transaction (when the HF triggers)
* First segfault
* First running pool
* First CNv1 (cryptonight v1) mined block from a node
* First RandomX mined block from a node

It’s first come first serve, so first one to post a screenshot in [Discord,](/discord) [Reddit](https://reddit.com/r/qrl), or [Twitter](https://twitter.com/qrledger), will get the reward.

## Issues/bugs/questions?

### Issues/bugs

If you encounter an issue or bug we’d love for you to report it to the right repository:

* Wallet: [https://github.com/theQRL/qrl-wallet/issues/](https://github.com/theQRL/qrl-wallet)
* Explorer: [https://github.com/theQRL/block-explorer/issues/](https://github.com/theQRL/block-explorer)
* Node: [https://github.com/theQRL/QRL/issues/](https://github.com/theQRL/QRL/)

If you’re not sure where to report it, feel free to come into our discord and we’ll help guide you along the way.

### Questions/support

For any other questions or banter, our [Discord](/discord) or [Reddit](https://reddit.com/r/qrl) communities are a good place to ask.