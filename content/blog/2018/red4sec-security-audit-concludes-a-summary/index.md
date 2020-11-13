---
layout: blog-post
slug: red4sec-security-audit-concludes-a-summary
date: 2018-06-06T14:52:40.048Z
author: "Jack Matier"
title: "Red4Sec security audit concludes; a summary"
subtitle: "TL;DR — Red4Sec finished, more audits coming, and an update regarding mainnet"
featured_image: 12_UP8IGhmeUbwSiaN6Gecw.png
images:
  - 12_UP8IGhmeUbwSiaN6Gecw.png
  - 1KJ97NABMOdKXiBWnyINcEw.png
  - 1wOpNyhey8Kogd6i88dfuoA.jpeg
categories:
  - technical
---

[Red4Sec](https://red4sec.com/en), our auditor for the last 7 weeks, has completed their audit and submitted their report to QRL. Red4Sec consists of a talented team that has spent much of the past 2 months poring over our code 8 hours a day, 5 days a week. They were joined in parallel by our own team, also scouring our codebase for vulnerabilities and mishaps, as well as dealing with issues raised by Red4Sec as they came up.

During the analysis, whose report runs over 200 pages, a total of 67 vulnerabilities were detected. Many of these vulnerabilities did not pose any risk by themselves and therefore have been classified as informative.

All vulnerabilities were classified according to the impact level defined by [CVSS](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (Common Vulnerability Scoring System): critical, high, medium, low and informative.

A summary of the issues per project area is described below.

## What Red4Sec covered

Red4Sec’s report was exhaustive, and covered the entirety of our project space, with the exception of our Post Quantum Cryptography, which will be covered by a further audit as it’s more specialized in nature. Below is a rundown of issues raised by Red4Sec by section of our network, as well as impact level.

### Blockchain

* [QRL](https://github.com/theQRL/QRL) (Python)
**Critical**: 6 issues identified — All fixed by end of audit
**High**: 3 issues identified — All fixed by end of audit
**Medium**: 4 issues identified — 2 fixed by end of audit, outstanding fixes have now been applied (everything is fixed)
**Low/Informative**: 21 issues or queries which have all been reviewed by the team, with changes made to the codebase where necessary.

* [Qryptonight](https://github.com/theQRL/qryptonight) (C++)
**Critical**: 1 issue identified — fixed by end of audit

* [Qrllib](https://github.com/theQRL/qrllib) (C++)
**Informative**: 1 issue which was closed by the end of the audit.

### Public facing Infrastructure

* [QRL Wallet](https://wallet.theqrl.org) (JS)
**Critical**: 1 issue identified — fixed by end of audit
**High**: 1 issue identified as informative by Red4Sec — the team rated it as High, however, and it was fixed by the end of the audit

* [Block Explorer](https://explorer.theqrl.org) (JS)
**Low/Informative**: 1 Low and 1 Informative level issue which were both closed by the end of the audit.

* [theqrl.org](http://theqrl.org) (JS)
**Medium**: 1 issue identified — fixed by the end of audit

### Backend & Team processes

* Infrastructure includes nodes, cloud services, mail services and any other service that QRL relies upon for development and other team processes.
**Medium**: 5 issues identified — all fixed by end of audit.
**Low/Informative**: 11 issues have been identified and all have been fixed.

### Some words from Red4Sec:
> In general terms, it has been detected that the design and logic of the project is well defined.
> The project code follows a methodology of safe programming and good practices. The project has great support from the team as some of the vulnerabilities have been resolved at the time they were detected by Red4Sec, mitigating the possible impact and repercussion that could cause to the project.

The whole QRL team thanks Red4Sec for their professionalism and attention to detail in improving the quality of our ecosystem.

## More audits

{{< image "./images/1KJ97NABMOdKXiBWnyINcEw.png" >}}

As our codebase and ecosystem grows, it is important to continually appraise the security of our implementations.

We are, therefore, pleased to announce that we have signed an agreement with [X41 D-Sec GmbH](https://www.x41-dsec.de/) to undertake a *secondary* security audit in the coming months. This audit will be differently focused than the Red4Sec audit, leveraging some of the specific expertise at X41 such as covering the Post Quantum Cryptography portion of QRL.

## Mainnet Progress Update

It has been a long ride to reach our main network, and our launch is just the beginning of the overall QRL journey.

A date for the launch of the QRL main network has been finalized and will be announced in the coming days.

{{< image "./images/1wOpNyhey8Kogd6i88dfuoA.jpeg" >}}*QRL On the Horizon — User art by Discord user @snannerb*