---
layout: blog-post
slug: the-qrl-enqlave-project-bringing-post-quantum-security-to-ethereum-and-other-blockchain-platforms
date: 2020-04-04
author: "Charlie Thompson"
title: "The QRL Enqlave Project — Bringing Post-Quantum Security to Ethereum and other blockchain platforms"
summary: "QRL’s Smart Contracts will bring the post-quantum security of XMSS (eXtended Merkle Signature Scheme) to mainnet Ethereum, and eventually to any other blockchain platform with sufficiently expressive smart contract capabilities."
featured_image: 1D_kDQt8eZSMue5WjC3IrLQ.gif
images:
  - 1D_kDQt8eZSMue5WjC3IrLQ.gif
categories:
  - technical
features:
  - enqlave
---


**tl;dr** The QRL enQlave Project will:

* Enable Ethereum users to protect their ETH and ERC-20 balances from the risk of a quantum computer attack, using Smart Contracts on mainnet Ethereum.
* Enable the bi-directional migration of Quanta (QRL’s token) between QRL ←→ Ethereum and eventually any blockchain network with sufficient smart contract capabilities.
* Enable the creation of post-quantum secure tokens on mainnet Ethereum (Ethereum Quantum Resistant Tokens, or “eQRTs”).

Where possible, the QRL team has built off of [OpenZeppelin primitives](https://github.com/OpenZeppelin) in order to make trust / audits easier. ***It should be noted that the transaction costs for these functions are currently very high.***

**Slightly more involved tl;dr:**

There will be one “XMSS Registry” Contract which keeps a mapping (think: a phone book) of Ethereum addresses ←→ XMSS public keys. This contract will deploy a unique instance of a PQ-secure multi-signature wallet for any individual caller who provides an XMSS public key. The XMSS key will serve as an additional layer of protection for any funds stored in the PQ-secure multi-signature wallet, and once deposited, funds will only be able to be moved by a valid transaction from the associated Ethereum address + a valid XMSS signature (verified by the “XMSS Registry” contract) on the details of the desired transaction.

In addition to this protection functionality, the main “XMSS Registry” contract will also be able to deploy “eQRTs” (Ethereum Quantum Resistant Tokens). These tokens provide all the functionality in the ERC-20 specification, but can only be sent between users with associated XMSS public keys (upon successful XMSS signature verification).

*It should be noted that the transaction costs for these functions are very high,* although we are working to optimize the contracts and otherwise bring the gas cost down. At this stage, it makes sense primarily to secure ETH and ERC-20s from the risk of a quantum-computer attack when the funds do not need to be moved frequently. An XMSS signature verification could cost upwards of 5M gas (anywhere from $2-$16, depending on network congestion and desired speed, at current ETH/average gwei rates), making frequent outbound transactions from a PQ-secure multi-sig wallet expensive. The QRL Foundation will pursue a third-party audit of our code before deploying it to the main network.
> The QRL Foundation foresees a world where global and digital economies rely on blockchain networks, and believes that before digital securities can be issued — or before ownership of assets can be widely tokenized in general — organizations and individuals will need to be certain that their digital assets cannot be compromised by a sudden advance in quantum-computing technology. Today, that guarantee is only available on the QRL main network, which has been operational, secure, and third-party audited since the summer of 2018.

![An early design diagram of the enQlave system](./images/0xszcNzQ6zibFBxQ3)*An early design diagram of the enQlave system*

A primary design requirement was to keep track of XMSS public keys and signatures — one quirk of XMSS (and the main aspect which prevents it from being a silver-bullet replacement for today’s internet public-key security infrastructure) is its “stateful” nature. An XMSS public key actually represents a “tree” of One-Time Signature (OTS) keys, meaning that a user’s security could be compromised if they were to sign two different messages with the same OTS key. In ECDSA and other common digital signature algorithms, there is no notion of “multiple” keys (aside from public-private), and you can not “run out” of signatures.

***XMSSAccount Management:***

{{< gist doctor-gonzo 5800ca112242e16f45de5ec6c6a69c98 >}}

The implication of XMSS’s stateful nature for the QRL enQlave project is that the OTS index (the next free One-time Signature to be used) is a crucial value for each XMSS public key, which must be strictly tracked and maintained. In our contracts, if you use up an OTS but the transaction otherwise fails (if the value argument supplied was greater than the balance of your PQ-secure multisig, for example), you have still used up one OTS key.

As a result of being able to “run out” of signatures, there exists a need to be able to “replace” an XMSS public key which has run out of One-Time Signatures. We have designed our contracts so that a user can only use their last OTS in order to replace their current XMSS public key, thus providing a guarantee that nobody can be “locked out” and that there is a way for users to replenish their supply of One-Time Signatures to make transactions with. The default tree-height of an XMSS public key generated using QRL’s interface allows for 1024 such OTS / transactions.

***Functions for “Typical” and “Power” users:***

Another design decision was to accommodate a wide range of potential users. While recognizing that most users will be well-served by a single XMSS public key (with a default of 1024 OTS), we wanted to design our contracts to be future-proof in every way possible. As a result, we have included functionality for “power users” — potential future users (exchanges, businesses deploying security tokens, etc) who might want to have more than one XMSS public key associated with their Ethereum address, or those who might want to make an XMSSAccount without deploying the PQ-Secure multisig (those who only want to use eQRT functionality, for example, where the token never “leaves” the eQRT contract to be “stored” in another Ethereum address).

This flexibility was accomplished by using Solidity’s function overloading capabilities. For every user-facing function, there are two versions — one for the typical user, and one for the power user (where additional relevant arguments can be passed in). As is standard programming practice, each of these duplicate functions in turn calls the same internal function with separate parameters to eliminate code duplication.

***eQRTs:***

![Inside the constructor of the “Registry” Contract, an eQRTFactory is deployed](./images/08SSMzQAuLTJTRcvv)*Inside the constructor of the “Registry” Contract, an eQRTFactory is deployed*

All generated eQRTs (deployed by a linked “eQRTFactory”) refer back to the main XMSS registry account for XMSS signature verification.

The deployers of eQRTs will be able to (optionally) leverage the advantages of GSN (the “Gas Station Network”), which allows for “meta-transactions”. In other words, someone will be able to interact with the eQRT contract from an ethereum address with 0 ETH (not enough to cover even small transaction fees), because the eQRT contract will be able to pay for such transactions (according to the deployer’s arbitrary criteria / GSN “strategy”). This was included for future-proofing purposes, because it significantly eases the onboarding process of certain applications.

***OpenZeppelin:***

Where possible, we have used primitives and building blocks provided by OpenZeppelin. An example is our ERC-20 code — we use the already-audited implementation provided by OpenZeppelin, with the only modification being a requirement for a valid XMSS signature before processing certain transactions.

It is our hope that this will make auditing our code easier. We would like to thank OpenZeppelin for the extremely valuable open-source infrastructure they have built.

***Moving Forward:***

As a part of making this tool accessible to members of the QRL and Ethereum communities, we are developing a web-interface and will work towards integration with the Nano Ledger family of devices (a feature many users of both QRL and Ethereum are accustomed to).

{{< image "./images/1D_kDQt8eZSMue5WjC3IrLQ.gif" >}}*An alpha-stage version of the front-end in action*

QRL’s primary focus is security, and we will uphold the same technical rigor that has gone into the other parts of our ecosystem (the cryptography and blockchain implementations, respectively) to this venture. We will obtain and release a third-party audit before deploying our contracts to the Ethereum mainnet. We hope that this tool can provide value for Ethereum users and bring wider awareness to the pioneering work of the QRL project in the realm of digital asset security.

**An introduction to the author:**

I am a core QRL dev who joined the team in 12/2019 and am very excited for the future of QRL and Ethereum. If you have any questions about these Smart Contracts, or the system as a whole, feel free to tag me at @dr_gonzo in the QRL discord.

*A final note: a significant portion of the heavy-lifting on this project — the EVM-assembly-optimized XMSS Signature verification code — was performed by longtime QRL developer Kaushal Singh (Ed — is he human or machine?).*