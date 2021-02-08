---
layout: blog-post
slug: last-week-in-qrl-may-7-13
date: 2019-05-13T14:00:39.491Z
author: "Adam Koltun"
title: "Last Week in QRL May 7–13"
summary: "Development Updates, Keybase Integration, Community Update"
featured_image: 1SoG6s0VdLJBW7uoADHY6RA.png
images:
  - 1SoG6s0VdLJBW7uoADHY6RA.png
  - 1SQm5ZwCZdYRLXwz9em5xLA.jpeg
  - 1Vfci4Bj4ypsWmXlLwvjkTQ.png
  - 1HA9BQKa6y7U_Yzv1wAW0zg.png
  - 12Ea3iO4_qa53KNz_-EYfrw.png
  - 1xL492bOyywS3WHmrBHvOsQ.png
  - 1tLgB0S7qRop_aCVogPLurQ.jpeg
categories:
  - technical
---

## Introduction

These blogs are usually intended to be a review of the past week’s activities. Today however, we are also including breaking news that went live this morning!

We are happy to report that QRL addresses can now be added to your [Keybase Identity](https://keybase.io/). We have been eagerly looking forward to this day for the past few weeks/months, and are very excited to be sharing it with you all.

## Development

{{< image "./images/1SQm5ZwCZdYRLXwz9em5xLA.jpeg" >}}

* **theqrl.org:** Keybase integrations
* **ledger-qrl-app:** cleanup nvram handling + small UI tweaks
* **qrl-wallet:** Keybase integration release

## Keybase

{{< image "./images/1Vfci4Bj4ypsWmXlLwvjkTQ.png" >}}

As our [blog earlier this morning](/blog/qrl-and-keybase) announced, you can now add your QRL address to your [Keybase](https://keybase.io/) account to help prove your digital identity. For those unaware, Keybase is a catalog of connected identities that utilizes cryptographic proofs to link profiles. For example, you can currently link your GitHub, Twitter, Reddit, Bitcoin or ZCash addresses (along with \~200 other services) currently to prove your identity. Starting today, QRL addresses may also be used in this manner to prove your digital identity. Obviously, if your QRL address is proving your identity, then your identity is also associated with that QRL address, so make sure you are comfortable with that address being publicly known before associating it with your Keybase account.

Our [previous blog](/blog/qrl-and-keybase) has more detailed instructions, but here is a quick rundown:

* In the Keybase app click on the *Add more identities* button, and select QRL from the list
* Enter your QRL address where it asks for your "username"
* When you submit, it will open a page that looks like this:

{{< image "./images/1HA9BQKa6y7U_Yzv1wAW0zg.png" >}}

* Do not hit “Submit” on this page yet!! Instead, copy the field marked “Signature Hash”
* Open the QRL web or desktop wallet
* Unlock the same wallet whose address you initially entered
* Select “Tools” from the sidebar

{{< image "./images/12Ea3iO4_qa53KNz_-EYfrw.png" >}}*Tools section*

* Select “Keybase id”
* Enter your Keybase username and Signature Hash into the fields, and send the transaction
* Go check that it was successfully broadcast on our [Explorer](https://explorer.theqrl.org/)
* Once it is visible on our explorer, head back to the QRL &lt;&gt;Keybase page and hit “Submit”

{{< image "./images/1xL492bOyywS3WHmrBHvOsQ.png" >}}*Now is the time to hit that button*

Again, there are more detailed instructions in our [previous blog](/blog/qrl-and-keybase), and if you have any questions, please do not hesitate to reach out to us on Twitter, Discord, or at [support@theqrl.org](mailto:support@theqrl.org)

## Community

{{< image "./images/1tLgB0S7qRop_aCVogPLurQ.jpeg" >}}

While we will use this space to highlight our Community Nomination Winner, to organize meetups, or preview upcoming conferences, we also want to use it to highlight when someone from our own community does something cool and relevant. One of our very own community members, Discord user dr_gonzo, attended the [BCI Summit on May 10 in New York City](https://bcisummit.com/summit-2019.html), whose [agenda](https://bcisummit.com/agenda-S2019.html) included a panel on Quantum Computer’s Destruction of Security & Blockchain.

The BCI Summit members and attendees consisted of major accredited investors and C-suite executives from some of the largest companies around the world, including IBM, Barclays, D-Wave, UBS, and more. The “Quantum Computer’s Destruction of Security & Blockchain” panel consisted of industry heavyweights such as the Quantum Computing Lead for NASA, the head of Symantec Ventures, and a Researcher of Quantum Theory for IBM. While the panel focused primarily on alternative algorithms and mining, it also took questions, including one from dr_gonzo who asked about the vulnerability of ECDSA, and noted that projects like our very own QRL exist to address it.

It is increasingly clear that quantum computing, and the means to resist it on a cryptographic level, are becoming more mainstream topics for discussion. Major institutional players are waking up to the fundamental threat of quantum computing technology to other cryptocurrencies. Thanks to Discord users dr_gonzo for his attendance, and PQAdvantage for helping facilitate the opportunity.

We are always happy to hear about the wonderful things our community members are getting up to, and, where appropriate, are happy to highlight them in this space. Please feel free to reach out to us on Discord, Twitter, Reddit, or send an email with your cool story to [adam@theqrl.org](mailto:adam@theqrl.org)