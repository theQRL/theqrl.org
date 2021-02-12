---
layout: blog-post
slug: last-month-at-qrl-november-2020
date: 2020-12-01
author: "Jack Matier"
title: "Last Month at QRL — November 2020"
summary: "Project Zond: QRL’s Proof-of-Stake code released. Zeus: A codebase for rapid QRL development. New QRL public service status page, two new videos, and more."
summary: "Project Zond: QRL’s Proof-of-Stake code released. Zeus: A codebase for rapid QRL development. New QRL public service status page, two new videos, and more."
featured_image: 1NkKdudBN4YZqKCDcrHJe6Q.png
images:
  - 1NkKdudBN4YZqKCDcrHJe6Q.png
  - 1VHGPdYG_QXB7eRb03DxtBg.png
  - 1lWevPbVSC_Nev1GBk3z-sQ.png
  - 1IdBz4LVE1sa2YBOHrO64Gw.png
categories:
  - technical
features:
  - proof-of-stake
  - desktop-wallet
  - qrl-node
draft: false
---

It’s been a busy November with *three new* releases

* [Project Zond: QRL’s Proof-of-Stake code released](https://www.theqrl.org/blog/project-zond-qrls-proof-of-stake-code-is-released-to-the-public/)
* [Zeus: A codebase for rapid QRL development](https://github.com/theQRL/zeus)
* [QRL public service status page](https://status.theqrl.org)

Among several updates

* [QRL Wallet v1.6.6](https://www.theqrl.org/downloads/)
* [QRL Node v2.0.7](https://github.com/theQRL/QRL/releases/latest/)

And two fresh videos

* [QRL Q&A #2 — Okay, but exactly HOW might a Quantum Computer Break Bitcoin?](https://www.youtube.com/watch?v=5jWG4N0vnMg)
* [Which Is Colder? COVID-19 / CORONA Vaccine? Or a Quantum Computer?](https://www.youtube.com/watch?v=FG7LMJRxyDg)

Read to the end to see *QRL In The News* and pertinent *Quantum News updates*.

Enjoy

## Developments

### Project Zond. QRL’s Proof-of-Stake code released

{{< image "./images/1VHGPdYG_QXB7eRb03DxtBg.png" >}}

*It finally happened.*

Our first milestone of the rebirth of our Proof-of-Stake protocol has been hit. The code [has been released](https://github.com/theQRL/zond) publicly and is being tested more widely internally by the QRL Core Contributor team.

Read more about our [Zond Proof-of-Stake code release](https://www.theqrl.org/blog/project-zond-qrls-proof-of-stake-code-is-released-to-the-public/) on our blog.

**Other Proof-of-Stake Minutia**

* Improved logging (Added log rotator, cleaner log output, different log format for stdout or log file).
* Code cleanup (refactoring, removing duplicate code).
* Added error handling while initializing server.
* Simplified generation of genesis. Updated build instructions (note, genesis file isn’t public so no way to build)
* Various bug fixes and stability improvements

### Public Service Status Page

{{< image "./images/1lWevPbVSC_Nev1GBk3z-sQ.png" >}}

The QRL Public Service Status page tracks the uptime of different components of the expanding QRL ecosystem to a constantly growing QRL userbase. 

While we still recommend that people and organisations who need critical availability and response times to run their own nodes and local infrastructure (Instructions found on [https://docs.theqrl.org/](https://docs.theqrl.org/)), this is an essential service for people to gain insight into ongoing events with QRL’s and those who rely upon it. 

Be sure to subscribe to stay up to date on any events that happen! [https://status.theqrl.org/](https://status.theqrl.org/)

### Project Zeus: **The power of Lightning is open-sourced: WIP, be careful**

{{< image "./images/1IdBz4LVE1sa2YBOHrO64Gw.png" >}}

Zeus is a project that demonstrates both the power of our current development ecosystem *and* acts as a foundational codebase to build highly performant multi-platform (mobile, web, and desktop) QRL applications on.

Initial codebase is now MIT open-sourced (though isn’t production ready).
[**theQRL/zeus**
*This is Zeus, the front-end for interaction with the QRL network. It is deployed at https://zeus.theqrl.org Zeus is a…*github.com](https://github.com/theQRL/zeus)

### QRL Wallet Release v1.6.6

**Version 1.6.6**

This release supports the new QRL node version (2.0.7) used on most QRL public nodes.

**Additionally, if you’re updating from 1.5.0**

This 1.6.x release refreshes the look and feel of the QRL Wallet to align with the 2020 refresh of the QRL’s brand identity.

Small fixes of niggles present in the desktop wallet since the bromine hark fork release are also patched here to align the desktop release with the current web wallet version.

Use of the desktop wallet is recommended where Ledger devices are used due to the better Ledger USB drivers available for use here versus in the browser.

Download the [QRL wallet](https://www.theqrl.org/downloads) and update.

### QRL Node Release v2.0.7

Fix for GetAddressState & GetTokensByAddress API

## QRL Multimedia

### QRL Q & A #2- Okay, but exactly HOW might a Quantum Computer Break Bitcoin?

{{< youtube "5jWG4N0vnMg" >}}

### Which Is Colder? COVID-19 / CORONA Vaccine? Or a Quantum Computer?

{{< youtube "FG7LMJRxyDg" >}}

## QRL In The Media

### CrowdFundInsider — Quantum Resistant Ledger Partners with Insight’s Quantum Cryptography Research Unit, Hires Senior Marketing Professional

[https://www.crowdfundinsider.com/2020/11/168653-quantum-resistant-ledger-partners-with-insights-quantum-cryptography-research-unit-hires-senior-marketing-professional/](https://www.crowdfundinsider.com/2020/11/168653-quantum-resistant-ledger-partners-with-insights-quantum-cryptography-research-unit-hires-senior-marketing-professional/)

## Quantum News

### Nov 12th — New approach to circuit compression could deliver real-world quantum computers years ahead of schedule

> “The compression method and its **further development could deliver realization of a real-world fault-tolerant quantum computer years ahead of schedule**,” said William J. Munro, a research scientist at NTT, who also contributed to the research

[https://phys.org/news/2020-11-approach-circuit-compression-real-world-quantum.html](https://phys.org/news/2020-11-approach-circuit-compression-real-world-quantum.html)

### Nov 30th — Hitting the quantum ‘sweet spot’: Researchers find best position for atom qubits in silicon
> Researchers from the Centre of Excellence for Quantum Computation and Communication Technology (CQC2T) working with Silicon Quantum Computing (SQC) have located the ‘sweet spot’ for positioning qubits in silicon to **scale up** atom-based quantum processors.

[https://www.eurekalert.org/pub_releases/2020-11/cfqc-htq112920.php](https://www.eurekalert.org/pub_releases/2020-11/cfqc-htq112920.php)

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)