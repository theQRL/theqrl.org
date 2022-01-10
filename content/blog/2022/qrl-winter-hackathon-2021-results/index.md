---
layout: blog-post
slug: qrl-winter-hackathon-2021-results
date: 2022-01-10
author: "Jack Matier"
title: "QRL Winter Hackathon Results"
summary: ""
featured_image: header.png
categories:
  - community
toc: true
---

## QRl Winter Hackathon 2021 Overview

QRL has had a rich [API](https://api.theqrl.org/#qrl-api) and [documentation](https://docs.theqrl.org/) since mainnet, so it's been long overdue that we hosted a hackathon to encourage people to build on our platform. 

The winter hackathon was laid simply out into projects and daily rewards with projects being larger endeavors eligible for a pot of up to 9000 QRL, and daily rewards given out to QRL related activity. By the end of the hackathon, **11 175.73 QRL** was distributed, with **2175.73** going to daily rewards, and the other **9000 QRL** awarded to project leads.

For more details on the event, you'll want to look at our first [QRL Winter Hackathon](/blog/qrl-winter-hackathon-2021/) blog post or, if you want a deeper dive into the project submissions, our [QRL Winter Hackathon Projects](/blog/qrl-winter-hackathon-2021-projects/) blog post.

## QRl Winter Hackathon Project Results

**Platforms** were definitely a key trend. 

Now you can run QRL on the [RaspberryPi](running-a-qrl-node-on-the-raspberrypi) and other [ARM devices such as Android](#running-a-qrl-node-on-android). There's also better support for [qrllib on Windows](#run-qrllib-on-windows), and support for running a [QRL node on the M1 Mac as well](#run-a-qrl-node-on-apple-m1-devices) nicely complimenting the recent wallet release on the M1 Mac.

On the creative side, there was a [Kvantumo Holiday Background](#kvantumo-holiday-background) featuring a squirrel-tardigrade and Physical QRL Coins being created as part of the [QRL coinage project](#qrl-coinage-physical-qrl). Finally, there was an [initiative to improve the spread and reach of QRL](#qrl-instagram-awareness-project) development news on Instagram through targeted images and communications.

### Running a QRL Node on the RaspberryPi

{{< image "./images/rasp.png" >}}

> - **Reward:** 2000 QRL
> - **GitHub:** https://github.com/0xFF0/QRL_rpi

For those who are new, QRL's initial public testnet in 2017 (following a private testnet in 2016) was [Proof-of-Stake](/features/proof-of-stake) before switching to Proof-of-Work while more research needed to be completed towards a more robust [Proof-of-Stake](/features/proof-of-stake) system. 

During that time, it was possible to run a node on the RaspberryPi. With the advent of Proof-of-Work however, that was no longer possible. This is what user, 0xFF took upon himself to solve, and has done so successfully!

| Revision      | Model         | RAM       | Results   |
| ------------- | ------------- | --------- | --------- |
| a21041        | 2 Model B     | 1 GB      | Works     |
| c03111        | 4 Model B     | 4 GB      | Works     |
| c03112        | 4 Model B     | 4 GB      | Works     |
| a02082        | 3 Model B     | 1 GB      | Works     |
| 9000c1        | Zero W        | 512 MB    | Works     |
| 902120        | Zero 2 W      | 512 MB    | Works     |

As of their RaspberryPi Foundation 2020 report, [**37.4 million Raspberry Pi computers**](https://static.raspberrypi.org/files/about/RaspberryPiFoundationReview2020.pdf) have been sold.

While the script is geared towards RaspberryPi computers, *this also opens the door to other Arm based devices*, which are common for Android.

### Running a QRL Node on Android

{{< image "./images/android.png" >}}

> - **Reward:** 1750 QRL
> - **GitHub:** https://github.com/0xFF0/QRL_Android

Android follows similar instructions to the RaspberryPi with the exception of needing to install [UserLAnd](https://play.google.com/store/apps/details?id=tech.ula&hl=en) to run Ubuntu without the need to root your device. Most Android devices (even older ones) are more powerful than your RaspberryPi device and come in a compact format with a screen. 

If you thought 37.4 million devices was a lot, at [Google I/O 2021, Sameer Samat announced that there's over **3 billion active Android devices**](https://www.theverge.com/2021/5/18/22440813/android-devices-active-number-smartphones-google-2021).

At this point, anyone who wants to run a node will likely already have a device already to do so, or at least be able to easily (and affordably) obtain the hardware to do so.

### Run qrllib on Windows

{{< image "./images/qrllib.png" >}}

> - **Reward:** 1500 QRL
> - **GitHub:** https://github.com/0xFF0/Qrllib_Windows

The QRL Core Library [qrllib](https://github.com/theQRL/qrllib) contains core functionality pertaining to QRL, exposing functions such as XMSS, Shake128, SHA2_256, and helpers for seed & address generation. Unfortunately it isn't supported on Windows, which makes building Windows applications, such as QRLLight, more difficult. 

The qrllib on Windows project now allows developers to build and work with qrllib on Windows.

### Run a QRL node on Apple M1 devices

{{< image "./images/qrlm1.png" >}}

> - **Reward:** 1500 QRL
> - **GitHub:** https://github.com/successor1/qrandomx

Apple M1 is an ARM based SoC designed by Apple which is now featured throughout the majority of the physical products it sells. QRL recently announced support for the M1 chip for the wallet application, though running a QRL node wasn't possible until now.

### QRL Coinage (physical QRL)

{{< image "./images/qrlcoins.png" >}}

> - **Reward:** 750 QRL

The QRL Coinage project took place over the course of the hackathon and has involved the design, collaboration, and will oversee the distribution of physical QRL coins. While the project wasn't initially submitted as a hackathon project, it was a hackathon project in spirit and timing. Because of this, we have made an exception and encouraged James P to submit "QRL Coinage" as a project to be part of the hackathon, which he did.

### Kvantumo (Holiday Background)

{{< image "./images/holidaybackground.png" >}}

> - **Reward:** 750 QRL

The Kvantumo is the combination of a Squirrel and a Tardigrade and is a commonly seen mascot around the QRL community. The goal was to create a festive 3D image for the server background including Kvantumo, a decorated Christmas tree with presents, and a table with a Hanukkah and other holiday-related items. 

Submitted just in time for Christmas! 

### QRL Instagram awareness project

{{< image "./images/instagram.png" >}}

> - **Reward:** 750 QRL
> - **Link:** https://instagram.com/theqrl.foundation/

With a focus on bringing awareness and engagement to The QRL Project, Discord user ompanime created an instagram page which involved creating platform targeted images to communicate the development progress of the QRL project to outside investors and users. 

## Our next hackathon

This was our first, but it wont be our last!

While we don't have a date of our next hackathon, we'll be using what we've learned from this one to form the basis of future events (maybe, in person?), but your feedback is instrumental.

So, what did you like or what would you like to see for future hackathons? Either comment on [Discord](/Discord), [Reddit](/reddit), [Telegram](Telegram), or any of our other social media platforms. You can also email us at support@theqrl.org with feedback.