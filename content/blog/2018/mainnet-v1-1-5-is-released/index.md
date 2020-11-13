---
layout: blog-post
slug: mainnet-v1-1-5-is-released
date: 2018-08-07T17:14:20.304Z
author: "Peter Waterland"
title: "Mainnet v1.1.5 is released"
subtitle: "This is a minor iterative update including the following changes:"
featured_image: 1Ica6A6at2vdRduGQqyw6pw.png
images:
  - 1Ica6A6at2vdRduGQqyw6pw.png
  - 1-SHk3JbjRHvOBABhO-sYaQ.png
  - 19NiPR_KSXt0Mtc7c7UhxtQ.png
  - 1wY71qxSuzP_Uq5tVDqvgKw.jpeg
categories:
  - technical
---

This is a minor iterative update including the following changes:

* WalletDaemon is now allowed to create XMSS trees with minimum tree height of 6 (2⁶ signature capacity)
* Master/slave XMSS reserved OTS reduced from 20 to 5
* Improved error handling & logging
* WalletAPI: Changed balance data type from UInt64 to String
* WalletAPI: Added IsValidAddress & GetNodeInfo

## ‘It’s alive!’

The QRL network is alive and well despite several attempts to DDOS the network — one of which being fairly sophisticated using malformed transactions. We are thankful for some early real-world testing outside of our two comprehensive audits.

Speaking of audits I am pleased to report our X-41 audit which focused upon our very special post-quantum cryptography XMSS (and various implementations across our ecosystem — node, webwallet, Ledger) has completed. We will publish the report as a community resource on *github* and discuss the audit in detail in an upcoming blog.

{{< image "./images/1Ica6A6at2vdRduGQqyw6pw.png" >}}

With 100k blocks firmly in the rear view mirror we have a blog coming from @Jack detailing some interesting usage statistics gleaned from the chain thus far — additionally we will be expanding the [explorer](http://explorer.theqrl.org) to demonstrate some realtime statistics of the chain as it grows in the future (including charts).

{{< image "./images/1-SHk3JbjRHvOBABhO-sYaQ.png" >}}*when exch$@%#!!!*

Some things in a project like the QRL are outside our control and although that can seem like inactivity to those outside the team discussion forum, keen observers of *github* can see very specific changes being made to areas like our *walletd* which track actual progress in this regard.

Integrating weird, stateful and unique pq-crypto like the QRL in a commercial system is not quite as straightforward as it appears compared with a casual user experience with the [*webwallet](http://wallet.theqrl.org)*.

## BECH32 addresses

Andrew has finished integrating BECH32 addresses into the QRL. This means that in our next major hard fork release of the QRL will support both existing Q-addresses and a shorter, safer address B32 format which contains advanced error correction functionality.

A comparison between an existing Q-hexstring address and its’ q-bech32 counterpart is below:

```
Q010500c0183a30c9170c8daf0a25d91f2102c49994a04e81a18286c1e345121f33037301c70c38

q1qyzspsqc8gcvj9cv3khs5fweruss93yejjsyaqdps2rvrc69zg0nxqmnxcx5p5
```


More about BECH32 and why it is great can be read [here](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki).

## Silicon

{{< image "./images/19NiPR_KSXt0Mtc7c7UhxtQ.png" >}}

The remainder of the blog will focus upon the first item on our roadmap to find attention — our smart address platform denoted internally as ‘project silicon’.

As the name suggests, this will add smart addresses with programmable logic capability to the QRL, a functionality more widely known as smart contracts on other platforms such as ethereum or eos.

See our draft QIP *here* for more technical details.

What is planned is a turing-incomplete highly limited set of logic instructions to allow programmed behaviours to be added to new QRL contract addresses without compromising security.

We aim to add functionality such as:

1. **escrow payments**

1. **recurring payment schedules**

1. **atomic interchain swaps**

1. **decentralised automated multiple-signatory accounts**

1. **account logic based upon temporal events**

1. **account behaviour based upon oracle addresses**

{{< image "./images/1wY71qxSuzP_Uq5tVDqvgKw.jpeg" >}}

Our ultimate aim is to move the foundation QRL funds into a multiple signatory account controlled by trustees including the community to completely decentralise project funding for development and research goals in the future.

## Details, details, details?

A new transaction subtype ‘*contract*’ will be added to the platform.

This will contain compiled logic-code in *bytecode* form and once a contract transaction is confirmed in the chain a new contract address is duly created.

QRL contracts are simple and deliberately designed to be so.

An example contract just has two parts: declarations of variables which the contract may access, and, the nuts and bolts — the logic-code of the contract.

```
{variable_declarations} {logic-code}
```


Contracts are written in ‘modified python with braces’ — with a tiny instruction set such as: if, then, for, send, send_message, destroy and several cryptographic instructions required for cross-chain atomic swaps.

It is designed to be readable and easy to write or learn.

Each contract has access to a sandboxed state machine and namespace. State is frozen to reduce the attack surface.

## Logic-code — rules or hooks

Code in a QRL contract address must either be a ‘rule’ or a ‘hook’.

A ‘rule’ is logic-code which is executed when a contract-specific transaction event occurs i.e. a transaction is received by the contract address.

A ‘hook’ is logic-code which is executed at the point of instantiation to set events to occur at a future time, say a block-height, or the nearest unixtime to a block-header timestamp.

An example contract with a rule would be:

```
{}

{

rule { 

if (address.owner == transaction.address) then {destroy} 

}
```


In this rather useless contract (with no variable declarations at all), if a transaction is received from the QRL account which created the contract, then the contract address code is deactivated.

An example hook statement would be something like this:

```
hook { if (chain.blockheight ≥ 100000) then {send (address.owner, address.balance-0.001, 0.001)}

}
```


This would return the entire contract_address balance (less 0.001 fee) to the original contract creator at block-height 100k.

## Recurring payments

What about something more complicated? A common problem with cryptocurrency is setting payments to occur in a planned fashion.

A set of recurring payments can easily be created by simply adding a series of ‘hook’ statements to a contract address. A get out clause can also be added with a ‘rule’. i.e.

```
// variable declaration first
{addresses=[payment_address1]}
// logic-code to make two payments at specific block heights

{ 
hook { if (chain.blockheight==40000) then {send (addresses[0], amount=220, fee=0.0001)}
}
hook { if (chain.blockheight==60000) then {send (addresses[0], amount=220, fee=0.0001)}
}

rule { if (transaction.type == message) and (transaction.address==address.owner) then {send (address.owner, address.balance-0.001, 0.001)}
}

}
```


In this contract, two payments are planned at block-height 40k and 60k for 220 QRL. If a transaction of subtype ‘message’ is received from the contract creator address then all funds are returned (NB. currently ‘message’ transactions are broadcast without a recipient.)

## Multiple signatories

Example of decentralised logic of a smart address using multiple signatories — in this case funds sent to this address are sent to another address if all three signatories have sent a specified message.

```
// variable declaration
{
addresses=[trustee_one, trustee_two, trustee_three, destination_address]
x=False
y=False
z=False
}
// contract logic-code
{
rule {
for (t in address.transactions){
 if (t.address == addresses[0].address)and (t.message == ‘MOVEALLFUNDS’) then {x=True}
 if (t.address == addresses[1].address)and(t.message == ‘MOVEALLFUNDS’) then {y=True}
 if (t.address == addresses[2].address) and (t.message == ‘MOVEALLFUNDS’) then {z=True}
 }
if (x==True)and(y==True)and(z==True) then {send (addresses[3].address, address.balance-0.001, fee=0.001)}
}
}
```


It can be seen that using message transactions from the owner or specified address in *addresses, *contract code may be activated or deactivated easily enough.

## Dead man’s switch

Another example would be a dead man’s switch contract. In this scenario if a contract address specific event does not occur by a given time then the contract performs an action.

```
// declarations
{addresses=[emergency_address]}

// logic-code
{

hook {

if (chain.blockheight==200000) and (transaction==False) then {send(addresses[0],amount=balance-0.001,fee=0.001)}

}
```


In this case if the contract does not receive *any* transaction before blockheight 200k all funds are sent to the *emergency_address*. This could be further modified to a recurring check for a transaction to occur from a specific address or with a specific message content within the last x blocks of a given blockheight(s) activation.

We forsee integrating contract transactions into the node, then building out our tools section of the webwallet to allow easy GUI-based off the shelf contract formation from a user-address, allowing functionality like dead man’s switch, recurring payments, multiple signatory setups, atomic swaps, etc.

## Timeline

We have begun to specify project silicon in our first QIP although there will undoubtedly be wide ranging changes as we grow the concept and begin to build tools and experiment on a new dedicated devnet. We hope to hard fork the network to implement silicon by early 2019, pending testing and a further third party audit.

We will make public our new code repositories in the coming days to allow the community to get involved and inspect progress realtime.