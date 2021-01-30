---
layout: blog-post
slug: enqlave-the-quantum-safe-for-your-crypto-assets
date: 2020-04-11
author: "Peter Waterland"
title: "Enqlave — the quantum safe for your crypto assets"
subtitle: "EnQlave — the quantum safe for your crypto assets"
featured_image: 1Sf9TQYn9L3v2si9DZvePJg.png
images:
  - 1Sf9TQYn9L3v2si9DZvePJg.png
  - 195Afxvvut7wI35JDEJZjGQ.png
  - 1U-_9qQ2AwSllFc9Qos8pzg.png
  - 1tBPjjFOtbN8LPYnYr0pjBg.png
  - 1VbV7E47ki_rvjpDk0c8XSw.png
  - 1LHADqouPalb7gSHLT3RB-w.png
  - 1x4KhWKtk77zovV7l9jLo0w.png
categories:
  - technical
  - column
features:
  - enqlave
---

## EnQlave — the quantum safe for your crypto assets

The original idea behind QRL was to create a standalone post-quantum secure financial blockchain and in doing so fix a major security exploit present in virtually every other crypto asset in existence — the risk of quantum theft.

Time has marched on: QRL mainnet has just surpassed a height of one million blocks, [NIST has begun to approve XMSS](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208-draft.pdf) (which powers QRL) for post-quantum usage, randomX mining distribution is healthy and the network node count near an all time high.

But still the vast majority of the considerable crypto asset space remains unprotected. And quantum risk grows with higher crypto asset valuations looming and QC development beginning to bear fruit.

Whilst our development team works to integrate OCAML smart contracts into our next fork — very exciting as this introduces amazing functionality — we have been working on a tangential move since the end of 2019 to bring the QRL to a much wider audience and raise the profile of the project considerably with a new wallet called **enQlave**.

## What is it?

EnQlave wallet is an Ethereum Webwallet which allows any user to secure their ether or erc20 token balances from quantum theft.

It also brings the very first post-quantum secure token to Ethereum — which of course is the QRL.

## Why Ethereum?

Ethereum is the first platform we have chosen for enQlave to natively support. The reason for this is largely down to the maturity of the EVM, the size of the existing userbase, and the combined market cap of Ethereum and erc20-based projects (currently 45 of the top 100 on CMC).

In our first iteration we will be able to offer post-quantum security to a very significant unprotected percentage of the entire crypto asset space. If we gain traction we will add support to other promising smaller smart contract platforms such as Tezos, EOS, Stellar etc.

## How does it work?

Through a simple UI and compatible with the ledger hardware wallet, enQlave is a non-custodial hybrid post-quantum secure multi-sig Ethereum wallet (quite a mouthful).

Behind the scenes, each wallet instance creates a smart contract on Ethereum and generates a unique post-quantum secure contract address. This is your enQlave wallet address and with it you may receive ether or erc20 tokens like any normal Ethereum address.

The magic begins when you move funds out of the wallet.

A normal address requires you to simply sign a transaction with your ethereum private key to move funds— something done under the hood by your wallet software or hardware wallet.

Moving funds out of your post-quantum secure contract address requires both a standard Ethereum ECDSA signature but also an XMSS signature from an XMSS public key linked during the setup phase.

The enQlave wallet signs each outbound transaction with both ECDSA and XMSS — potentially from one or more hardware wallets depending upon your security paranoia level.

Without both valid signatures no funds can leave your enQlave address and so the enQlave wallet is ultra cold storage — ***removing the future risk of quantum threat for the first time in an address you can re-use at will***.

## Wait did you say XMSS on ethereum?

Using assembly optimisation we have managed to code functional XMSS signature verification on ethereum. To squish the computation down as much as possible we have stretched the signature size compared with the QRL mainnet.

It has a gas heavy per transaction cost but for an ultra cold storage solution potentially securing billions of dollars of crypto assets we do not see this as a problem.

## QRL back on ethereum?

With the ability to verify XMSS signatures on ethereum comes the need to track XMSS tree state. To do this we have designed and built an XMSS registry smart contract on ethereum which allows the potential for XMSS powered tokens to run natively on ethereum.

The first and only planned such post-quantum secure token is QRL. We will be adding an easy way to hop your QRL between the native QRL webwallet and an enQlave ethereum wallet address (or visa versa) and a blog post detailing the mechanics of this bridge is coming in the near future.

## Can I see the prototype?

{{< image "./images/1Sf9TQYn9L3v2si9DZvePJg.png" >}}

{{< image "./images/195Afxvvut7wI35JDEJZjGQ.png" >}}

{{< image "./images/1U-_9qQ2AwSllFc9Qos8pzg.png" >}}

{{< image "./images/1tBPjjFOtbN8LPYnYr0pjBg.png" >}}

{{< image "./images/1VbV7E47ki_rvjpDk0c8XSw.png" >}}

{{< image "./images/1LHADqouPalb7gSHLT3RB-w.png" >}}

{{< image "./images/1x4KhWKtk77zovV7l9jLo0w.png" >}}
*Unskinned prototype front end*

Here are some screenshots from the latest build which is currently running on a private Ethereum network. Remember this is as yet unskinned and the final appearance will change considerably as we move towards production, beautify things and simplify the UI.

## What is left before this reaches production?

A smart contract audit, some ledger integration and lots of testing before we move to Ethereum mainnet.

## Can I take a deep dive into how this works?

As always our code will be open source and our repo will soon be going public on github in our theqrl repo.

A video detailing the backend mechanics can be seen [here](https://player.vimeo.com/video/420287807). Additionally, [here](/blog/the-qrl-enklave-project-bringing-post-quantum-security-to-ethereum-and-other-blockchain-platforms) is a teaser blog from our new core dev Charlie to wet your appetites before we open up the prototype for public testing at [https://enQlave.io](https://enqlave.io)