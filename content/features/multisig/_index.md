---
title: "Weighted Multi-signature Transactions"
toc: true
images:
    - multisig.tools.gif
---

## Overview

Transactions are actions (typically spending funds) which requires one signature which are signed from a `private key`. These public signatures can be verified by all participants without needing to see each other's private keys through the use of [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography).

**Multi-signature transactions** are transactions sent from a defined **multi-signature address** that require a one or more signatures from a group a signatories before being accepted by the network. This is best represented as `m-of-n`, where an `m` amount of signatures (the `Threshold`) are required from a pool of `n` signatories. A transaction that requires 'two' signatures from a total pool of 'three' signatories would be a `2-of-3` multi-signature transaction. When a transaction is sent to the network from a multi-signature address, the assigned signatories have a set amount of time to sign the transaction to reach its threshold. Once that threshold is reached, the transaction is successfully sent. QRL doesn't stop there, and features **weighted Multi-signature transactions** which allows weights to be assigned on a per signatory basis.

**What's more, this is all achieved [easily in the UI](#desktop-wallet-ui)**

## Use Cases

Trustless systems aim to remove the need for people to trust each other, and instead rely on the protocols of the system.

Cryptocurrencies are on the rise, but that doesn't mean you have to take risks with your money. With Multi-signature transactions, you can stay in control while also providing more opportunities for the future generations in your family.

### Third party custodian

Users may want to store their assets at a third-party custodian, but they don't want their assets to be controlled by a single entity. This is especially important for exchanges and other companies that deal with cryptocurrency.

When a single person controls an address, it can lead to lax or erratic monitoring, as well as tempting or outright bribery from those entrusted with the asset custody. Companies must have an incentive for complying with strict policies and procedures in order to maintain the company's reputation and keep assets secure at all times.

### Petty join account

If you are in a relationship, but are not comfortable with your partner's spending habits, or vice versa, it can be difficult to find a good balance where you are both happy.

A petty joint account is the perfect way to maintain control of your finances with your partner. Couples often disagree on household expenses. One person might be most responsible with money, while the other is struggling with debt or spending habits. Maybe one of you needs more financial help than the other. Perhaps there are different priorities between the two of you when it comes to spending decisions.

With a petty joint account, you can rest easy knowing that both parties have agreed on how the funds will be allocated and spent. You can also explore different ideas together and reach an agreement before any money is spent.

### Multi-factor authentication

With the safety of funds at stake, it's even more important than ever to stay secure, but it’s not easy to remember all your passwords and keys or protect them from adversaries.

Multi-signature transactions allows you to set up multiple signatories with their credentials spread across different devices and/or locations. To spend your funds, you need a vote from each signatories to validate the transaction. In the case one key is compromised, the other signatory key is safe, and the adversary can't spend the funds. If a key is lost or misplaced, it's possible to still meet the threshold to sign a transaction, ensuring the longevity of funds. 

### Trustless escrow 

Making online purchases without getting ripped off or scammed is not an easy task. People who sell their goods and services online will end up having to pay for things like verification and authentication and buyers will end up paying a lot of money for these services because middlemen charge high fees.

Unlike traditional escrow transactions, the escrow agent in a `2-of-3` Multi-signature address can't steal funds from either party. If something goes wrong, they can sign a transaction to refund the buyer. If they cannot agree, they both appeal to the escrow who will arbitrate and sign to the party that it deems suitable. 

## Usage

### Desktop wallet UI

Creating and managing **{{< param Title >}}** can be found in `Tools -> Multisig` after opening your wallet from one of the desktop wallets found on our [downloads](/downloads) page. 

{{< image "./multisig.tools.gif" >}}

### Node CLI

From a working [node installation](https://docs.theqrl.org/node/QRLnode), it's possible to create and manage Multi-signature transactions.

```bash
tx_multi_sig_create  Creates Multi Sig Create Transaction, that results...
tx_multi_sig_spend   Transfer coins from src to dsts
```