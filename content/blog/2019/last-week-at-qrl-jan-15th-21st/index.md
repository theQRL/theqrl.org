---
layout: blog-post
slug: last-week-at-qrl-jan-15th-21st
date: 2019-01-14T17:31:34.235Z
author: "Jack Matier"
title: "Last Week at QRL -  Jan 15th-21st"
featured_image: 1AnwA9ARquAacQLl83cpbvg.png
images:
  - 1AnwA9ARquAacQLl83cpbvg.png
  - 1BEtsF7yj-LE0yQhaZkCpWw.jpeg
  - 1i1zcVDZsvHVD0JQD7dgM4A.png
  - 1IeGSNUriu2SgAYHGOnMfmA.png
  - 1S_9FKunWUpeukHCUbYeRHQ.png
categories:
  - technical
---

## Development

{{< image "./images/1BEtsF7yj-LE0yQhaZkCpWw.jpeg" >}}

### qrllib v1.0.4 (and v1.0.2, v1.0.3)

QRL Lib v1.0.4 adds a build output from emscripten to instantiate the WebAssembly from base64 encoded qrllib: this allows for the use of qrllib in serverless environments (e.g. offline wallet generation). Which leads to the next advancement to the QRL ecosystem

### Offline Wallet Generator

While it’s possible to generate a wallet *offline* with our current web and desktop wallets, an initial connection to a server is made. *Soon* it will be possible to load a few files (currently &lt;5 mb in size) on a USB Flash drive and generate wallets on an airgapped machine, negating the need to even instantiate a connection.

The work is done, it just needs to be cleaned up and put out for preliminary testing among our TestPilots (more below)

### QRL Mobile Wallet

The QRL mobile wallet for iOS and Android has successfully gone through the initial round of community testing! As there were quite a few bugs squished and UI/UX improvements, there will be another round for our TestPilots to break in the coming week(s).

### QRL Faucet

{{< image "./images/1i1zcVDZsvHVD0JQD7dgM4A.png" >}}

The QRL Faucet, a *much*-requested feature, has been built! It has passed through an initial, internal test, and is currently undergoing additional, external testing from our group of community ‘TestPilots’ before being given wider release.

This faucet will function on both the test network and main network. It will issue tiny amounts of QRL in exchange for a brief browser PoW calculation, and is overall rate limited, to prevent over-eager users from draining the faucet balance too quickly. For those interested in seeing how our blockchain works, we hope that this will act as a pleasant introduction to our ecosystem.

## Community

### QuantumFAQ/FAQQ Updates

{{< image "./images/1IeGSNUriu2SgAYHGOnMfmA.png" >}}

As we covered in our [last blog](/blog/last-week-in-qrl-jan-7-jan-14-2019), QuantumFAQ is an initiative to collect, articulate, and easily reference common misconceptions people have about blockchain and quantum computing.

One of the first changes was a name-change from QuantumFAQ to FAQQ (Frequently asked quantum questions) which was suggested by the community and voted in by a landslide. This means it also lives in a slightly different location: [https://jackalyst.github.io/faqq/](https://jackalyst.github.io/faqq/)

Other changes are:

* A “Footnotes” section so that all of our statements are sourced.

* Separation between assertive statement FAQ’s and FAQ’s that’s geared towards misconceptions & clarifications: “Quantum computers are coming” vs “Bitcoin will just hardfork”

* A better table of contents that should be more effective at guiding people.

There is still a lot of work to do filling things out and getting the language top notch but continuous progress is being made. If you see any errors, or if there are any misconceptions you would like to see covered, let us know through one of our channels!

As a note, FAQ’s that pertain to QRL will still live at [https://theqrl.org/faq/](https://theqrl.org/faq/). FAQQ is more of a community initiative geared towards Quantum Computing and Blockchain in general.

### The QRL TestPilot Program

We now have a test pilot program! This is a ***discord only*** program and involves being part of the initial round of testing of a variety things before they go out to the wider community.

The general release overview is:

1. Development/production

1. QRL Team Review (Round 1, 2, …): Catches initial show stopping bugs and reveals possible security considerations.

1. **QRL Test Pilot Review (Round 1, 2, …): Catches more show stopping bugs through device variability. Also highlights user interaction issues.**

1. Where applicable, a 3rd party audit.

1. General Release.

While right now there are 7 excellent people that’s part of the test pilot program, and we’d like to expand this to achieve more test coverage.

If you’re interested please fill out our lovely google form: [https://goo.gl/forms/BCFM1RYUC4S6DrCz1](https://goo.gl/forms/BCFM1RYUC4S6DrCz1)

### December Community Award — 0xFF

{{< image "./images/1S_9FKunWUpeukHCUbYeRHQ.png" >}}

Our community award goes to 0xFF for contributing to community spirit with excellent puzzles, and for helping to spearhead a larger puzzle initiative that will be announced in the future.

## In the media


Adam Koltun had a productive interview with the folks over at CryptoBeadles that went live this past week. [CryptoBeadles is a YouTube channel](https://www.youtube.com/channel/UCcE2GkGcKxHjZoMVM7tjmyA) with over 70,000 subscribers, dozens of videos, and has been covering the blockchain/cryptocurrency scene since 2017. Adam was able to talk about QRL in an accessible, down-to-earth manner, and we can safely assume that a number of people were hearing about QRL for the first time during this interview.