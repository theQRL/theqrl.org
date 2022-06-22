---
layout: blog-post
slug: what-exactly-is-the-quantum-threat-to-bitcoin
date: 2022-06-22
author: "Ryan Malinowski"
title: "What exactly is the quantum threat to Bitcoin?"
summary: 'This article originally stems from a YouTube video series we filmed on our [QRL YouTube channel](https://www.youtube.com/c/QRLedger) where we better help you understand what the root of that quantum threat to Bitcoin is all about.'
featured_image: header.png
categories:
  - technical
---

If you're reading this article, there's a good chance you want to know what the quantum threat to Bitcoin actually is.

By the time you're done reading this, you'll have a better understanding on what the root of that quantum threat actually is.

Let's dive in...

## Bitcoin Quantum Computing Threat

{{< youtube "or7gNPbbtAo" >}}

The most important thing to understand when we're talking about the quantum threat is how the signing of transactions works and how addressing works.

There's different addressing schemes that are available in Bitcoin such as P2PKH, P2SH, or Bech32.

To create a normal Bitcoin address, you'll need to start off with a 256-bit random number.

With this random number, you apply Elliptic Curve Cryptography (ECC) and derive a public key from it.

For the final step, to get an address that can be used for someone else to send funds to. You then double-hash that public key and encode it using base58Check encode with 0x00 version prefix.

{{< image "./images/XxtRb98.png" >}}

In summary, there's three Steps:

* 1. Generate a 256-bit random number (aka Private key)
* 2. Use ECC to get a public key
* 3. Double-hash and encode with base58 to get shareable address.

The function going from your private key to your public key is a one-way function which uses elliptic curve multiplication. What makes this secure is that there's no classical way to take reverse this process, that is, take a public key and make it back into a private key.

While creating and sharing your Bitcoin address doesn't reveal your public key (it's hashed), sending bitcoin *does* reveal your public key. 

{{< image "./images/oneway.png" >}}

VIDEO: [What Exactly Is The Quantum Threat To Bitcoin? Part 1](https://youtu.be/or7gNPbbtAo)

## Shor's Algorithm & Quantum Computers

{{< youtube "bjcKEhXxiS8" >}}

### What is a quantum computer?

They are state of the art machines that operate completely differently, using qubits rather than bits which the traditional computers that we have today use. 

### What is Shor's Algorithm?

In 1994, Peter Shor created Shor's Algorithm (https://en.wikipedia.org/wiki/Shor%27s_algorithm). What it's able to do is factor in polynomal time based on a quantum computer and using a quantum fourier transform.

What that means in simple terms is you're able to take that large number and find those two prime numbers (pictured below). When multiplied together, that equals your private key.

{{< image "./images/shors.png" >}}

This is all dependent on a sufficiently powerful quantum computer.

### Limitations with Quantum Computers

As of the writing of this article, they are still under 200 qubits. 

The biggest limitations right now is that engineers are trying to solve systemic noise which is any type of electromagnetic radiation or interference that can touch that qubit. Photon or whatever, it basically decoheres that photon and it falls apart.

Once engineers are able to fix the noise issue, they'll be able to bring these things closer to scale.

### Progress of Quantum Computing

{{< image "./images/xrdpvwK.jpg" >}}

The progress of quantum computers continues to move forward on a number of fronts including:\

* Increasing qubits continues to move forward
* Reducing systemic noise
* The possibility of increased efficiency for algorithms moving forward (i.e Shor's Algorithm, etc)

These components of progress all put together is essentially the quantum threat. Being able to take that public key and being able to derive the private key from it.

VIDEO: [What Exactly Is The Quantum Threat To Bitcoin? Part 2](https://youtu.be/bjcKEhXxiS8)

## Quantum Resistant Ledger

{{< youtube "SRH2SAnHw9U" >}}

The major difference between Bitcoin and [QRL](https://theqrl.org) is that instead of using Elliptic Curve Digital Signature Algorithm (ECDSA) which Bitcoin uses, QRL uses a hash-based signature scheme, XMSS. 

The reason QRL uses a hash based scheme over an elliptic curved based scheme is that they are quite quantum resistant. 

Being able to find that pre-image on a hash is extremely difficult. There's an algorithm called [Grover's Algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm) that can do it on a quantum computer, but just because it can do it doesn't mean it'll do it sufficiently. With all the ASIC's and the tech that we have today and for the forseeable future, it's going to be simpler just to try to reverse factor using traditional computers.

To be able to find a pre-image from a hash (which QRL's signature scheme is based on), there is no quantum or conventional known way to do this efficiently.

VIDEO: [What Exactly Is The Quantum Threat To Bitcoin? Part 3](https://youtu.be/SRH2SAnHw9U)

## WANT TO LEARN MORE?

Give our website theqrl.org a browse or join us for a chat in one of our many communities on Telegram, Discord, Reddit, Facebook, or KakaoTalk.

Want to stay up to date? Follow us on Youtube, Twitter or our Telegram news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our GitHub at: https://github.com/theQRL/QRL/
