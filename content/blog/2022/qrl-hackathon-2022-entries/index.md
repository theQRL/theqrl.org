---
layout: blog-post
slug: qrl-hackathon-2022-entries
date: 2022-09-22
author: "Jack Matier"
title: "QRL Hackathon 2022 Entries"
featured_image: header.png
categories:
  - technical
toc: true
---

With the final day of the hackathon upon us, we're happy to reveal the projects that's being worked on and for the team and community to take a vote on some of your favourites for **Best Ecosystem Improvement**.

Voting will be taking place in our [Discord](/Discord) between 2pm and 3:30pm Amsterdam time (UTC) and be weighted 50/50 between the team and the community. Please vote responsibly.

100,000 QRL is at stake so vote responsibly!

### Raspberry Pi / Team Pi Ninja

{{< image "./images/entry.rpi.png" >}}

As of their [RaspberryPi Foundation 2020](https://static.raspberrypi.org/files/about/RaspberryPiFoundationReview2020.pdf) report, 37.4 million Raspberry Pi computers have been sold.

A series of Pull Requests have been made adding support to the [qrandomx](https://github.com/theQRL/qrandomx/pull/26) and [qryptonight](https://github.com/theQRL/qryptonight) repositories.

Four modules to make the pi compatible with QRL needed to be modified (qrandomx, qryptonight, py-cryptonight and randomx). The pull request =submitted does not change the current behavior of QRL. It can detect if the code compiles or not for the Raspberry pi (i.e: in Cmakelist.txt, if cpu is armv7l, do specific stuff for the pi). If the merge is accepted, the project will be compatible with the pi and we will be able to install QRL on the pi only with pip3 (i.e: pip3 install qrl).

### QRLPay / 1337 sQuirReLs

{{< youtube hqpkXhJJxAA >}}

The goal was to make it easy to add QRL as a payment method for eCommerce. A pre-configured eCommerce website is also includde with the project. QRLPay include:

- A payment processor 
- An eCommerce deployment solution with a woocommerce QRL plugin 
- A qrl node/wallet in docker
- Setup script to configure and launch everything automatically (including the eCommerce website)

Deployment example of QRLPay can be found here: http://shopqrl.tk/
Source code can be found here: https://github.com/0xFF0/QRLPay

### PoS/Validator dashboard

{{< image "./images/posdash.png" >}}

The POS Dashboard works with validator data to see how much the staking reward and each validator has earned with proposed and attested blocks.


This is the Groundwork for node pos dashboard because each node can run multiple validators.

### Mobile Wallet

{{< image "./images/entry.mobile.png" >}}

Hereby we are a presenting a new mobile platform for QRL. The current new implementation is build upon the existing QRL network and we have the intention to extend it with a block explorer and token balance for the current network.
We are also planning a future development on the new chain too includes pos info, staking and smart contract insights.

We think it is important to have excellent mobile support and a mobile friendly environment for the current QRL users  but also needs a mobile landing page for potential new QRL users so would like to work with the community to invest what kind of info, like e-learnings and stuff we can add in the future.

## Just the beginning

It's been amazing seeing the community come together to our first in-person hackathon.

This is just the beginning. Expect more content on this Hackathon and more events in the future!

{{< image "./images/people.jpg" >}}