---
layout: blog-post
slug: an-update-on-enqlave
date: 2021-01-29
author: "Jack Matier"
title: "An update on enQlave"
summary: "EnQlave is coming. The audit has been completed. More efficiencies were discovered which will necessitate another audit."
subtitle: "EnQlave is coming. The audit has been completed. More efficiencies were discovered which will necessitate another audit."
featured_image: enqlave.blog.png
categories:
  - advocacy
features:
  - enqlave
toc: true
---

## EnQlave update

Back in April of 2020, we [announced](/blog/enqlave-the-quantum-safe-for-your-crypto-assets) that we've been working on project [enQlave](https://enqlave.io), which allows people to secure their assets against quantum computers natively on Ethereum. With enough traction, we will add support to other promising platforms with sufficiently expressive smart contracts such as Tezos, EOS, Stellar, and more.

Since then the code has matured, and later in the year we [announced](/blog/last-month-at-qrl-september-2020/) that [x41 D-Sec](https://www.x41-dsec.de/) will be the external auditor to enQlave's codebase, **which we're happy to say that the audit has been completed!**

While enQlave *worked*, we weren't satisfied as the GAS fees we're prohibitive (\~20x the normal transaction cost) before Proof-of-Stake and further network efficiencies would make their way to Ethereum. By using a commit-reveal time lock scheme which utilises hashchains, we've been able to reduce these gas fees significantly. 

After these changes are completed and tested, there we be another audit performed by x41 D-Sec. Stay tuned for that!

## But why enQlave?

While some things have changed, we've broken down a great deal of how enQlave fits together in our blog, ["Enqlave — the quantum safe for your crypto assets"](/blog/enqlave-the-quantum-safe-for-your-crypto-assets), but what's not answered is **why?**

### Bottom line. We're serious about digital asset security

After two years of testing and [multiple external audits](https://github.com/theQRL/audits/), [mainnet (actinium) was released](https://qrl.foundation/assets/QRLF-PR-20180626.pdf) which uses and had to accommodate [XMSS](https://tools.ietf.org/html/rfc8391), which has since been approved by NIST as a post-quantum secure signature standard. This foresight and focus on unparalleled security is part of what makes QRL a blockchain for visionaries, academics, and enterprises.

For years, the Quantum Resistant Ledger and its community has spoken a great deal *everyday* towards the importance of post-quantum blockchain security especially with the constant beat of [continued advancements and investments in quantum computing development](https://quantumcomputingreport.com/news/). This is no different than what the likes of NIST, PQCRYPTO, and others have been doing. It's really not a matter of if, but when.

This dialog however can be perceived as a fear tactic that invokes uncertainty and doubt, especially when in the solution presented is to abandon their favourite blockchain project (ie Ethereum), and acquire an altcoin. Naturally things can fall on deaf ears. 

EnQlave puts our Quanta where our mouth is at, and can be something that saves the blockchain space, at least those who choose to use it.

More specifically, *why* is going to depend on who you are.

### For those with Ethereum 

As stated, there's no need to stop using Ethereum or Ethereum assets to create a wallet that's secure from quantum attacks.

EnQlave will be natively supported and will give people who comprehend the emerging quantum threat and want to secure their assets the ability to do so through a simple UI.  

### For those with other blockchain projects

For blockchains such as Tezos, EOS, and Stellar which have expressive enough smart contracts, there will be some waiting. If enQlave takes off, we do plan to add support to these platforms.

### For exchanges

Exchanges would have the ability to make their users Ethereum assets post-quantum secure through the use of enQlave wallets.

### For those with QRL

In discussions with friends, family, and people online, it's a friendlier conversation to talk about post-quantum security and securing their assets when there's no immediate need for them to change their assets and rather just 'migrate' them to a more secure wallet. While it doesn't completely eliminate the fear response, it does do a great deal to disarm it.

EnQlave will also feature Ethereum wrapped QRL as an EQRT that will be tokenized at a 1:1 ratio and exchangeable between QRL mainnet and the Ethereum networks. One particular benefit of this EQRT also gives us access to easier integration with exchanges as well on DEX's like Uniswap.

Access to a huge userbase. As of this article, Ethereum has about [700k active addresses](https://bitinfocharts.com/comparison/ethereum-activeaddresses.html), which is just under Bitcoin's [1m that of Bitcoins](https://bitinfocharts.com/comparison/activeaddresses-btc.html), and dwarfing QRL's.

### Why would anyone use QRL?

While we'll be providing a way for individuals and institutions to secure their Ethereum assets from quantum attacks, there's a few noteable caveats here:

1. This does not make the entire Ethereums address space quantum secure.
2. QRL is architecturally designed with post-quantum signature schemes and crypto-agility in mind, which means transactions can be more efficient.
3. With this groundwork in place, and with PoS and Smart Contracts slated, we're looking at a fully equipped batteries-included experience for developers.


## When?

With a few key changes, we'll be able to initialize our *second* enQlave audit by x41 D-Sec and subsequently open our codebase to the public, adding it to our other 25+ MIT open-source repositories.

## Want more updates? Subscribe to our newsletter

All major announcements and updates like this one are distributed through our newsletter. If you haven't done so already, [be sure to subscribe to stay informed on the latest QRL news](/#subscribe)