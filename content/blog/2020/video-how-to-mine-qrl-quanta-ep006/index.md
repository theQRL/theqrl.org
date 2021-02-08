---
layout: blog-post
slug: video-how-to-mine-qrl-quanta-ep006
date: 2020-04-13T04:43:29.698Z
author: "Jack Matier"
title: "Video -  How to Mine QRL Quanta — EP006"
summary: "A step-by-step guide on how to mine Quanta on a windows computer"
featured_image: 1Ebwwj7G-vTx7rHGnFtGpOw.png
images:
  - 1Ebwwj7G-vTx7rHGnFtGpOw.png
categories:
  - technical
---

## Video Transcription

### Introduction

Welcome to the official Quantum Resistant Ledger channel, your video portal into post quantum digital asset security.

The first week of April 2020 has been an exciting one. With QRL 2.0 comes multisignature transactions, support for an ephemeral messaging system, multiple improvements and enhancement across different code suites, and of course the RandomX PoW protocol. We covered what [RandomX was in a previous video](https://www.youtube.com/watch?v=S0ETCcT3vGY), jump to that video if you have not seen it yet for a high level view. This video is going to be for Windows users that want to start mining Quanta right way. I’ll walk you through step by step and a list of pools can be found on our site at [www.theqrl.org](http://www.theqrl.org). Lengthy intros are annoying, so let’s get down to it.

### Steps covered in the Video

1. **Antivirus Software [[1:05](https://youtu.be/5e7FK7A7svU?t=65)]**
1. **Firefox Whitelisting and Exceptions[[2:06](https://youtu.be/5e7FK7A7svU?t=126)]**
1. **Create a new wallet [[2:30](https://youtu.be/5e7FK7A7svU?t=150)]** Webwallet link: [https://wallet.theqrl.org/](https://wallet.theqrl.org/)
1. **Download xmrig [[3:07](https://youtu.be/5e7FK7A7svU?t=187)]:** Download: [https://github.com/xmrig/xmrig/releases/latest/](https://github.com/xmrig/xmrig/releases/latest/)**
1. **Extract xmrig [[4:55](https://youtu.be/5e7FK7A7svU?t=295)]**
1. **Edit xmrig config.json file [[5:00](https://youtu.be/5e7FK7A7svU?t=305)]**: **Mining pools: [https://docs.theqrl.org/mining/pools/](https://docs.theqrl.org/mining/pools/)
1. **Run xmrig [[6:33](https://youtu.be/5e7FK7A7svU?t=393)]**
1. **Bullet points [[9:10](https://youtu.be/5e7FK7A7svU?t=551)]**

### Bullet points

OK, I hope those steps were helpful, here are a few important bullet points to remember.

1. If you can, tune your RAM above 2133Mhz. Nearly all modern DDR RAM out there now is designed for a fast clock speed. There are some discussions in our Discord community and lots of videos on Youtube.
2. Clock speed is important, but not at the cost of stability. If you overclock your CPU or RAM and the system becomes unstable, any gains you would have received from a higher clock rates will be lost when you come back and find out your PC went on holiday or PTO and didn’t tell you first. This can be upsetting so remember to always run some sort of utility to stress test CPU and RAM if you take this route.
3. If you run XMRIG, make sure you run it as Administrator. This allows it to use huge pages and set CPU register values if needed. Which can increase your hashrate substantially. At the time of this video, the latest version is 5.10.
4. If you actually want to be able to USE your PC while you mine, edit the config.json file in XMRIG to disable one or two CPU cores or threads. Noooooootttt you wallet.json file! This way, your system can mine and stay usable, you might even be able to still watch Netflix while your PC mines Quanta in the background.
5. And of course, don’t forget to run a node. It’s super easy to get one up and running, supports the project, and doesn’t take up minimal CPU resources

One last thing, if you have questions, ASK. You can reach me for mining questions on Discord as Strike Attack #8102 with questions. I do my best to answer all the mining questions that get asked or go unanswered.

Thanks for watching, happy mining!

{{< image "./images/1Ebwwj7G-vTx7rHGnFtGpOw.png" >}}