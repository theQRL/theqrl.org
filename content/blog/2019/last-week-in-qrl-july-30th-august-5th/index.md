---
layout: blog-post
slug: last-week-in-qrl-july-30th-august-5th
date: 2019-08-05T17:43:30.343Z
author: "Jack Matier"
title: "Last Week in QRL -  July 30th — August 5th"
summary: "A review of the QRL core developer meetup summary, a launch of the QRL community github, and the July QRL community nomination."
featured_image: 1A-IGUW98UyLZOkXvOeN6jA.jpeg
images:
  - 1A-IGUW98UyLZOkXvOeN6jA.jpeg
  - 1emHST_KJ1CljJJEYUoMGHg.png
categories:
  - technical
---

## Developer Meetup

The QRL core developers met in the UK on the 3rd and 4rth of August. In attendance was:

* **JP Lomas** Core / Full stack developer
* **Leon Groot Bruinderink** PhD student Post-quantum Cryptographer
* **Peter Waterland** Core developer
* **James Gordon** Technical Writer
* **Kaushal Kumar Singh** Core developer (note: attended virtually).

Previous blog can be found [here](/blog/the-qrl-developer-meetup). Discussed was a wide variety of developer related topics from the next Hard fork, to PoS, to NIST Signature Schemes, and Ephemeral messaging. A full breakdown will be found in future blog(s), a [few highlights of the development meeting](https://github.com/theQRL/dev-meetings/blob/master/2019/08/03-04.md) are below.

### Ephemeral messaging

A draft of the Ephemeral Message paper was put together for circulation to a limited audience for feedback and review.

### Hard Fork status

**The decision has been made to proceed with a hard fork following a code audit.** This will allow the creation of the Ephemeral Message Layer applications.

In addition to this, the hard fork will include:

* [Deterministic addresses](https://github.com/theQRL/qips/pull/5) (QIP003)
* [Multisignature addresses](https://github.com/theQRL/qips/pull/7) (QIP004)
* On-chain voting/polls (QIP in draft)
* [Extended message transaction functionality](https://github.com/theQRL/qips/pull/8) (QIP005)

Feedback is still welcome on many of these QIPS!

### Proof-of-Stake

Future potential PoS schemes were discussed in detail with the evolution of our previous protocol. **A separate PoS/EMS testnet will be created.**

Quantum Resistant Verifiable Random number Function (QR-VRF) research ongoing and undertaken in parallel with consensus algorithm implementation with XMSS. QR-VRF is important as at the heart of PoS is the ability to fairly choose ‘winners’ at random.

### Development roadmap

Existing development roadmap reviewed. Core team expansion to facilitate new plans discussed.

Know golang? Get in touch at jobs@theqrl.org — full job description below. We’re initially seeking those inside the QRL community who are familiar with the project, however, will expand our search should candidates not be found.

**Job description**

We’re seeking two golang developers that think they’re able to fit the description below. If you’re interested but *don’t fit* every specification, don’t let that shy you away, it is a *wishlist* afterall.

What you will do:

* Write industrial grade open source code that will be the backbone of a quantum resistant network.
* Occasionally interact with the community in a polite and conductive manner.

What we wish you to be:

* You have a graduate degree or higher in computer science or affiliated field.
* You have written high-performance and concurrent applications.
* You have been part of the QRL Community for some time.
* You have p2p implementation experience
* You are familiar with cryptography
* You have a genuine desire to ensure all code is tested through writing unit and integration tests Compensation

Competitive based on capability and experience To apply, please send an email to jobs@theqrl.org

### More

There’s more covered in the meeting summary over at github. [Give it a read,](https://github.com/theQRL/dev-meetings/blob/master/2019/08/03-04.md) or wait for more content to be drafted and published on our blog.

## The July QRL community nomination award

{{< image "./images/1emHST_KJ1CljJJEYUoMGHg.png" >}}

July’s nomination goes to discord user ‘Strike Attack’, who has been instrumental and gone above and beyond in The QRL Contributors. He has this to say:
> I had first heard about a QC (Quantum Computer) in 1997 while speaking with a colleague. I found the concept fascinating. Conceptually, the theoretical premise of being able to harness the power of nature in order to perform a mathematical function felt visceral and compelling.
> Several years ago, I started to become aware of the accelerating progress being made with quantum computers. After some research, it was not difficult to correlate an existential threat quantum computers presented to existing encryption with blockchain, which has been undergoing undeniable growth. From this, I began researching to see if anyone was addressing this problem ahead of time and came across the QRL Foundation in early 2018, of which a purpose-built solution was already in development. I found the team members professional, knowledgeable, and passionate about the project.

As an extension to the above statement, he’s written a blog that outlines his full story about how he came to know about quantum computers and QRL in more detail. It’s [well worth a read](https://medium.com/@MichaelStrike1978/i-had-first-heard-about-a-qc-quantum-computer-in-1997-while-speaking-with-a-colleague-8cadc4b16924).

If you know someone that’s contributed to the QRL ecosystem who you’d like to nominate, you can do so by going to The [QRL Discord](https://discord.gg/jBT6BEp) and nominating in the #butler channel.

## The QRL Community github

Right now there’s theQRL github repository which has strict guidelines. The [QRL community github](https://github.com/theqrl-community) is for QRL community related projects that may be a bit “edgier” and might be less tested. Presently, there’s three projects:

* [faqq.info](https://github.com/theqrl-community/faqq): Frequently Asked Quantum Questions aims to give an overview of some of the thoughts on quantum computing and blockchain.
* [qrlbutler](https://github.com/theqrl-community/qrlbutler): The modular bot that is in our discord
* [qccalc](https://github.com/theqrl-community/QCcalc): A MATLAB project that generates a probability distribution for the likelihood that 256-bit ECDSA signatures will be ‘broken’ by quantum computer over the course of the coming years.

Have a project that you’d like to see here or would like to host, get in touch on our [discord](https://discord.gg/jBT6BEp)!

## The QRL Contributors public release

As an update, while no final date has been set for the grand opening, it should be within the next 30 days.

As a reminder, this is a project that aims to open up discussions and bring in both the core and community contributors alike, and is part of our path for decentralising The QRL *community* network.More can be read on our blog at: [/blog/the-qrl-contributors](/blog/the-qrl-contributors)

Stay tuned!