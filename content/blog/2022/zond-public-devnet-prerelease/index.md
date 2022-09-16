---
layout: blog-post
slug: zond-public-devnet-prerelease
date: 2022-09-16
author: "Jack Matier"
title: "Introducing a powerful post-quantum safe public devnet pre-release with Ethereum Web3 ecosystem compatibility"
summary: "Anyone is now able to run their own Proof-of-Stake node connected to the public devnet network, stake, and enjoy many of the pleasures of the web3 ecosystem, all while knowing that it was created with longevity and security in mind."
featured_image: header.png
categories:
  - technical
features:
  - proof-of-stake
  - smart-contracts
toc: true
---

We're happy to release the Zond Public Devnet pre-release for our upcoming QRL Hackathon 2022!

Anyone can run their own Proof-of-Stake node connected to the devnet network, stake, create smart contracts and interact with them.

With the QRL Hackathon 2022 approaching, the Public Devnet of the next iteration of QRL, codenamed Zond, will be revealed.
This represents the result of years of iterative research and development to provide efficient post-quantum and Ethereum-compatible Proof-of-Stake and smart contracts to the QRL environment, which can be implemented with small modifications into the majority of web3 ecosystems. 

## Getting started

> **Disclaimer**: This is a an early pre-release of a devnet. Expect scattered documentation, bugs, frequent devnet resets, and more.

Over the last week, the team has been hard at work documenting, breaking, and refining Zond.

For those coming from the previous codebase:

- Although Zond still uses XMSS, it's a completely rewritten codebase written in golang vs python before. At the moment, it's best to look at the API layers from QRL v4 as deprecated to be replaced with web3 protocols and tooling (with some slight modifications).
- The addresses are different. For better Ethereum compatibility, we've adjusted the address structure to match. Rather than starting with a Q with 79 characters, it starts with a 0x and (42 characters)
- Performance is noticable. Everything from installing to performing functions, happens quickly, and as a bonus, with little hassle (unless something breaks - devnet after all!). Getting a node up and running can be done (including downloading a devnet boostrap file) in under 20 seconds on a modest connection!

### Quick references

- Documentation: https://zond-docs.theqrl.org/
- Web3 smart contract example: https://github.com/theQRL/zond-contract-example
- (unofficial) Zond init: https://www.github.com/jackalyst/zond-init/
- Public API Address/Port: 45.76.43.83:19009
- RPC API Address/Port: 45.76.43.83:4545

### 1. Run a node

For the latest, you'll want to head over to the Zond docs node installation instructions: https://zond-docs.theqrl.org/node/node-installation

Installation currently consists of pulling from the main zond repo (https://github.com/theQRL/zond), downloading a zond-boostrap.zip file, applying it to various places, modifying a peerList in a config file, compiling, and running the node. The main prerequisite will be golang, of course.

This is mostly automated with [zond-init](https://www.github.com/jackalyst/zond-init/), which is an unofficial init script that does the above steps.

### 2. Create an address

As mentioned, the address format is different, and you can create two different address types, XMSS, and Dilithium, which have identifications in the first byte.

| Address | Identification Byte | Type  |
|--|--|--|
| 0x1005003ea6ed78d597e7411a8ddbc2dffd8839e5| `0x10...` | XMSS Address |
| 0x20bf1acdae054f4194e0c132b489e8f9099caf8c| `0x20...` | Dilithium Address |

More can be found in our [documentation](https://zond-docs.theqrl.org/wallet/node/node-cli-wallet).

Right now, people can use a Dilithium or XMSS Address to transfer or deploy contract or to interact with contract. Staking can only be done with Dilithium at this point, so that's what we're going to use.

In the zond directory (`~/zond/`), you'll have `zond-cli`, which you can use to create your address.

```
./zond-cli wallet add-dilithium
```

This will spit out your Dilithium address and create an unencrypted entry in a `wallet.json` file from the location the script is run. You can list your addresses with `./zond-cli wallet list`. 

#### Get some testnet QRL

You'll want send a message in [Discord](/discord) with your testnet Dilithium key, who should give you enough testnet QRL to stake and a little to play with. A faucet is coming to help facilitate this.

#### Send some testnet QRL!

You'll want to replace the `--to` address with the address you're sending to and `nonce` for every transaction you send. If you want to use your local node, replace the endpoint of `--remote-addr` with `127.0.0.1:19009`

```
./zond-cli tx transferFromDilithium --account-index 1 --amount 10 --to 0x20bf1acdae054f4194e0c132b489e8f9099caf8c --gas 21000 --gas-price 0 --nonce 1 --broadcast --remote-addr 45.76.43.83:19009
```

### 3. Stake your QRL

A minimum of 10000 QRL will be required to stake, which you should have received from someone in [Discord](/discord). If you haven't already, be sure to go there and request some!

In order to stake, you'll need to:

1. Generate a set of dilithium public keys from your Dilithium address, where each public key corresponds to 10,000 QRL.
2. Send a stake transaction from the dilithium address you're staking from.
3. Move a dilithium_keys file to ~/.zond/dilithium_keys
4. Restart your node.
5. Wait for the next epoch (every 100 blocks).

Staking works with *some* similarity to [how it did before](/blog/project-zond-qrls-proof-of-stake-code-is-released-to-the-public/#putting-it-all-together), though key differences will be outlined more later through the docs and hackathon.

#### Expanded instructions

The first two steps are taken care of for you in a single command

```
./zond/zond-cli tx stake --account-index 1 --amount 10000000000000 --gas 1000 --gas-price 0 --nonce 0 --broadcast --remote-addr 45.76.43.83:19009
```

After that you'll need to move the `dilithium_keys` file to `~/.zond/`

```
mv ~/zond/dilithium_keys ~/.zond/dilithium_keys
```

Then, quit your node with `ctrl+c` and start it again with `./gzond`

To unstake, you'll want to send a stake transaction with a `0` amount.

```
./zond/zond-cli tx stake --account-index 1 --amount 0 --gas 1000 --gas-price 0 --nonce 0 --broadcast --remote-addr 45.76.43.83:19009
```

### 4. Creating QREVM smart contracts

Zond comes with EVM smart contract compatibility known as the Quantum Resistant Ethereum Virtual Machine (QREVM), so any smart contract you've created before should work on the Zond devnet pre-release, but with extra security and longevity built in!

For a guide, you'll want to follow through the web3 smart contract example:
https://github.com/theQRL/zond-contract-example


### 5. Zond Node API's

If you've ever interacted with Ethereum, you'll be right at home using our Node APIs.

This is outlined in our [Zond documentation](https://zond-docs.theqrl.org/node/node-api#gossip-state-history) with more frequently being added.

Included so far are: 

- zond_blockNumber
- zond_sendRawTransaction
- zond_getBalance
- zond_getStorageAt
- zond_getCode
- zond_call
- zond_getBlockTransactionCountByHash
- zond_getBlockTransactionCountByNumber
- zond_getBlockByHash
- zond_getBlockByNumber
- zond_getTransactionByBlockHashAndIndex
- zond_getTransactionByBlockNumberAndIndex

These can be called by curl or any language that can do a post request:

```
curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"zond_chainId","params":[],"id":67}' 127.0.0.1:8545
```

## Stuck? Looking for more?

Be sure to join our [Discord](/discord) or join us at our [QRL Hackathon 2022 in a few days in Amsterdam](/events/qrl-hackathon-2022)!