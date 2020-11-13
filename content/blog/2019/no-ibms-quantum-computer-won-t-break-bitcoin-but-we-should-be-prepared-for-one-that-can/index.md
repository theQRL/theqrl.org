---
layout: blog-post
slug: no-ibms-quantum-computer-won-t-break-bitcoin-but-we-should-be-prepared-for-one-that-can
date: 2019-01-14T01:22:36.246Z
author: "Jack Matier"
title: "No, IBM’s Quantum Computer won’t break Bitcoin, but we should be prepared for one that can."
subtitle: "Quantum computing that can break blockchain is coming, and it’s time the blockchain community accepts it — so we can prepare ourselves."
featured_image: 1qGNmQ9d_Xw_Tnat1Hs0xDQ.png
images:
  - 1ehnsou-cfieKcYyPi0niDA.gif
  - 1qGNmQ9d_Xw_Tnat1Hs0xDQ.png
  - 1zwpeoTZ5o9iHdsPgkp6liQ.png
categories:
  - column
---

The Verge said it best with “[IBM’s new quantum computer is a symbol, not a breakthrough.](https://www.theverge.com/2019/1/8/18171732/ibm-quantum-computer-20-qubit-q-system-one-ces-2019)”. It’s important to expand on that and what it means to Bitcoin, and blockchain in general. What we *shouldn’t* do is turn a blind eye.

**Note:** For those coming to this with the news of Google possibly hitting quantum supremacy, we have a newer entry [Quantum supremacy and the case for quantum security today in blockchain](/blog/quantum-supremacy-and-the-case-for-quantum-security-today-in-blockchain) (added 2019–09–22)

## Contents

* [Primer](#primer)
* [IBM’s Commercial Quantum Computer](#ibms-commercial-quantum-computer)
* [When do we need to worry, anyway?](#when-do-we-need-to-worry-anyway)
* [The importance of preparation](#the-importance-of-preparation)

## Primer

Anytime there’s an advancement in Quantum Computing, like [Intel’s 49 qubit chip at *last year’s* 2018 CES show](https://spectrum.ieee.org/tech-talk/computing/hardware/intels-49qubit-chip-aims-for-quantum-supremacy), or this years CES show with [IBM’s 20 qubit commercial quantum computer](https://www.theverge.com/2019/1/8/18171732/ibm-quantum-computer-20-qubit-q-system-one-ces-2019), blockchain news outlets are always there to assuage worries with statements like **“No, [*this*] Quantum Computer won’t break bitcoin”**, often accompanied by the sentiment that the looming quantum computing threat is being blown right out of proportion.

What they usually fail to note is that, once again, quantum computing is passing metrics ahead of schedule. Previously quantum computing was relegated to something that would not reach a commercial application until the mid to late-2020s. That is not to say quantum computers have only ever outpaced expectations, but rather to contextualize the strength of today’s quantum computers, not just against a static metric of being able to break ECDSA, but also a development curve.

While it is *true *that IBM’s commercial quantum computer won't break Bitcoin, this is **not** the mindset we want to have with the underlying cryptographic fundamentals of something that underpins *billions* of dollars worth of value (in just cryptocurrency alone)— and hopefully ***much*** more in the future.

To put a visual metaphor to waiting until it’s too late: A ballistic may not penetrate your fortress today, one will someday, *a thought secured by recent developments, *makes it* *prudent to fortify sooner and be *proactive*, rather than *reactive*. Being *reactive* means your fortress will be compromised, or in the case of blockchain, your private keys stolen, and what’s the point of fortifying then?

{{< image "./images/1ehnsou-cfieKcYyPi0niDA.gif" >}}

In this way, the frame of the conversation needs be proactive, rather than reactive. Decentralized networks, by their very nature, are censorship resistant, and while that means many wonderful things for end-users generally, in terms of security it means that it can be very difficult/impossible to functionally undo transactions. Therefore, we cannot *afford* to be *reactive*, we must be *proactive* in order to meaningfully prevent negative, irreversible security outcomes.

## IBM’s Commercial Quantum Computer

At CES, [IBM announced a commercialised version](https://newsroom.ibm.com/2019-01-08-IBM-Unveils-Worlds-First-Integrated-Quantum-Computing-System-for-Commercial-Use#assets_115:1612) of its 20 qubit computer which could be shipped out to institutions and businesses looking to start building on real quantum computers.

### How powerful is it?

Unlike bits on your computer which are binary and scale linearly, qubits scale exponentially, which means that every qubit added to a system doubles its computational power. For a 20-qubit system, we’re looking at 2²⁰. To give some context, this is something that your average powered notebook can simulate perfectly well and is exactly what Microsoft does for its [Quantum Development Kit](https://www.microsoft.com/en-us/quantum/development-kit). The breakdown is:

* 2²⁰ Laptop: Commercially, we’re here!

* 2³⁰ Desktop

* 2⁴⁰ Cloud compute service (For Microsoft, this is Azure)

### So, if it’s not that powerful yet, who is it for?

IBM’s commercial quantum computer is demonstration that they can produce a *reliable*, upgrade-able commercial quantum computer. Clients who purchase a 20-qubit system today, could upgrade their systems down the line, having already familiarized themselves with IBM’s commercial quantum computer. This would appeal to researchers in particular, as having a QC on-hand would increase uptime for experiments, and help decrease system downtime.

### What does this mean for blockchain

[As aptly penned by The Verge](https://www.theverge.com/2019/1/8/18171732/ibm-quantum-computer-20-qubit-q-system-one-ces-2019), this is a symbolic development to mean that noisy intermediate scale quantum (NISQ) era quantum computers are here, commercialized, *today*, and with [Intel](https://newsroom.intel.com/press-kits/quantum-computing/), [IBM](https://www.research.ibm.com/ibm-q/), [Microsoft](https://www.microsoft.com/en-ca/quantum/), [Google](https://ai.google/research/teams/applied-science/quantum-ai/), [Intel](https://newsroom.intel.com/tag/quantum-computing/), [Lockheed Martin](https://www.lockheedmartin.ca/ca/what-we-do/emerging-technologies/quantum-computing.html), [Rigetti](https://www.rigetti.com/), and [more](https://quantumcomputingreport.com/players/public-companies/), all in the ring competing, it’s clearly not *just* in the lab.

The blockchain community needs to accept that quantum computers are here, today. While the timeline for when they can threaten blockchain security is uncertain, *whether* that day will come is no longer a matter of debate. No one wants to see a catastrophic event where large swaths of the cryptocurrency ecosystem is wiped out, but that is sadly a possibility if we do not act in a timely manner.

## When do we need to worry, anyway?

This isn’t an easy thing to answer, but working off of our “how many qubits” list from above we can expand on it and get a number to run Shor’s algorithm.

* 2⁵⁰ Average supercomputer: We have already passed this! Currently, the largest stable QC in the world is 2⁷²

* 2⁸⁰ Quantum Supremacy: Quantum Computers are faster than the fastest supercomputer with a synthetic test. A milestone Microsoft is anticipating to pass this year.

* 2³⁰⁰⁰ Quantum Computers can run Shor’s algorithm: Shor’s can break ECDSA 256 (what Bitcoin uses): **We want to upgrade *well* before this point.**

Looking back, we can take the development trajectory of the number of qubits a system has had over the last 4 years and attempt to extrapolate:

* 2015: 4-qubits

* 2016: 9-qubits (IBM)

* 2017: 17-qubits (Intel), 50-qubits (IBM)

* 2018: 49-qubits (Intel), 72-qubits (Google)

This indicates a 5.5x/1yr — 18x/4yr increase, or, assuming a similar trajectory, it will be between 2.2 and 5.3 years until we hit 3000 qubits. However, there is more work to do than just stacking up qubits. There is the lingering issue of error-correction, which currently stands as a barrier to proper, accurate calculations. There is also the issue of scaling, which is being addressed in a number of ways, but has not been solved.

On the other side, Shor’s Algorithm is merely the first quantum algorithm to usher in an interest in quantum computing. There continue to be advances towards breaking Elliptic Curve Cryptography on a variety of levels through newer, more efficient algorithms that can [run on our non error-corrected quantum computers.](https://quantumcomputingreport.com/news/zapata-develops-potential-alternative-to-shors-factoring-algorithm-for-nisq-quantum-computers/)

Those are pretty big variables, which is why you’ll see everything from 2 to 30 years before ECDSA P-256 is broken. In some ways this range doesn’t matter, *but there’s no question* that we want to have everything secure well ahead of it.

**Update 2019–09–22:** In our [more recent blog](/blog/quantum-supremacy-and-the-case-for-quantum-security-today-in-blockchain) we also cover this in more detail by outlining [QCCalc](https://github.com/theqrl-community/QCcalc), a model your can run on your own computer (with Matlab or Octave) that takes into consideration yearly increase in qbits, yearly error rate improvement, yearly algorithmic improvement, required runtime, maximum acceptable risk and more.

## The importance of preparation

If you’ve ever dealt with keeping systems secure in any capacity, it’s important to keep up to date. Generally, this means following Common Vulnerabilities and Exposures (CVE) notices and other security bulletins, and checking to see the state of your hash functions and cipher suites.

{{< image "./images/1qGNmQ9d_Xw_Tnat1Hs0xDQ.png" >}}

What becomes very evident over time is that not everything lasts forever. You harden your systems, and others find ways to weaken them. The cryptographic methods you used as a kid just aren’t going to cut it today. One signature scheme that’s held out for a *remarkably *long time is ECDSA.

{{< image "./images/1zwpeoTZ5o9iHdsPgkp6liQ.png" >}}*Looking at the chart, we’re somewhere around “Minor weakness discovered” and “Serious weakness discovered”*

This is the cadence security and cryptography has had for thousands of years since the [Ceasar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) and continues to have to this day. Some would say it’s echoed in the fabric of nature itself between parasites and hosts.

### Proactive blockchain design for an adversarial future

Proactive security is a core value for [The QRL](https://theqrl.org) — something we think should be of paramount importance for any network that caries substantial value.

We are using XMSS as recommended by [pqcrypto](https://pqcrypto.org) to secure our accounts and transactions. XMSS gives complete peace of mind from the emerging black swan of quantum computing, with reusable addresses, provable security and minimal security assumptions.

This is a *proactive* step against Quantum Computing, but as the cadence goes, it’s important to be proactive against new developments as well, some which may be harder to predict.

We went to great lengths to *also* design a foundation that allows for variable key heights and signature space to ensure compatibility with potential new cryptographic schemes that may be developed in the future. Our blockchain includes the possibility to upgrade signature schemes (XMSS, SPHINCS, + future) and through an address format update, support different cryptographic hash functions (SHA2_256, SHAKE_128, SHAKE256 etc). You can read more about on [our documentation](https://docs.theqrl.org/developers/address/) site.

We hope that blogs like these help illuminate some of the complicated relationship between blockchain and quantum computers. We know that we must act as an educator in this space, and are happy to rise to the occasion.