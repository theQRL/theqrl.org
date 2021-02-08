---
layout: blog-post
slug: new-mining-platform-integration-and-guide-mine-qrl-on-mmp-os
date: 2020-05-15T19:53:11.281Z
author: "Jack Matier"
title: "New mining platform integration and guide -  Mine QRL on MMP OS"
summary: "MMP OS: Miner management made easy"
featured_image: 1GML4ND2rZXw4ij8IRh82EQ.png
images:
  - 1GML4ND2rZXw4ij8IRh82EQ.png
  - 1O3TC-yc5Gs0gNyDs6DenwA.jpeg
  - 14vKGdsu-8pLvyMPz_Ft0DA.png
  - 1YeEulCVJbQoj9vg7vZS_GA.png
  - 1DGs0f3mOth1delc6bgvN5w.png
  - 1Y9EmSa0e4B7kmV-ZKqiNaQ.png
  - 1VK82Wqn10Ml7_pwoWNTWYw.png
  - 1EXY67Kx-cO8TUIh2Kk0UDQ.png
  - 1E6WIAATXpxJJWVyGGowyGQ.png
  - 14QUkx67BSSYL24SvId8MKg.png
  - 191TrViuJSL7BUcs5mRzv5w.png
  - 1E0j6PBsdHE69QeIGawQniw.png
  - 1Qzz5oXKQ82eX1j-pdApCWw.png
  - 1uIXaPU6mbK7iSAh-N29FaA.png
categories:
  - integration
---

### MMP OS: Miner management made easy

It’s possible to mine QRL with XMRIG on your [Windows or Linux machine](https://docs.theqrl.org/mining/mining/), but if you want to expand your mining operation to more than one machine, it’s useful to look into mining platforms like [MMP OS](https://app.mmpos.eu/) — **which we’re now happy to be supported on!**

[MMP OS](https://app.mmpos.eu/) gives you the ability to manage multiple different computers (mining rigs) from the comfort of your browser window.

The things you can do from one location includes:

* Status updates for each mining rig. Easily glean the overall status, power usage, hashrate, temperature and other key indicators of a healthy mining rig
* Ability to disable or restart the miner.
* Sum hashrate and average shares of all mining rigs
* Add/remove/reconfigure mining pools
* Add/remove/reconfigure wallets
* Add/remove/reconfigure mining profiles

In short, the MMP (Miner Management Platform) and the corresponding [MMP OS](https://app.mmpos.eu/) makes managing mining QRL a breeze.

## Getting started

{{< image "./images/1O3TC-yc5Gs0gNyDs6DenwA.jpeg" >}}*Manage your QRL mining empire on the go from your phone!*

While MMP OS makes things as easy as possible, there’s still a few more steps involved in getting everything setup than with your local xmrig configuration. In this guide, we’re going to get setup on Windows, but it’s possible to get everything setup on Linux as well with the same principles applied here.

### Step 1: Signup

Go to [https://app.mmpos.eu/register](https://app.mmpos.eu/register) and register.

{{< image "./images/14vKGdsu-8pLvyMPz_Ft0DA.png" >}}

### Step 2: Login and download the Windows Agent

You’ll get two options here, one is to download *mmpOS *or the *Windows Agent*. This guide is going to take you through installing the Windows Agent, but if you’re setting up multiple rigs, you’ll want to get mmpOS.

After downloading, extract the contents of the zip folder and click on ‘agent’. This agent will be listening for commands we give it later in this guide. Leave it open.

{{< image "./images/1YeEulCVJbQoj9vg7vZS_GA.png" >}}

### Step 3: Create a QRL Wallet and get its Address

You can follow our documentation guide, but it should be straightforward to go to [https://wallet.theqrl.org](https://wallet.theqrl.org) and create a wallet there.

{{< image "./images/1DGs0f3mOth1delc6bgvN5w.png" >}}

{{< image "./images/1Y9EmSa0e4B7kmV-ZKqiNaQ.png" >}}

### Step 4: Add wallet address to mmpOS

Click on wallets in the sidebar of the mmpOS web interface or go to [https://app.mmpos.eu/wallets](https://app.mmpos.eu/wallets/) to add a wallet. Make sure you select “Quantum Resistant Ledger”

{{< image "./images/1VK82Wqn10Ml7_pwoWNTWYw.png" >}}

### Step 5: Add a pool

Click on pools in the sidebar of the web mmpOS interface or go to [https://app.mmpos.eu/pools/](https://app.mmpos.eu/pools/) to and click Add Pool in the top right hand corner.

You can find pool information in our documentation at [https://docs.theqrl.org/mining/pools/](https://docs.theqrl.org/mining/pools/).

{{< image "./images/1EXY67Kx-cO8TUIh2Kk0UDQ.png" >}}

### Step 6: Add a miner profile

A miner profile combines a miner with a pool selected. Because your miner is going to be on Windows and we’re mining with randomx, change the platform to *Windows *and Miner to *xmrig randomx*.

{{< image "./images/1E6WIAATXpxJJWVyGGowyGQ.png" >}}

### Step 7: Add a mining rig

If you haven’t already, launch the agent from the extracted folder in Step 2

Then go to rigs in the sidebar of the web mmpOS interface or visit [https://app.mmpos.eu/rigs](https://app.mmpos.eu/rigs) and click on *Add rig*.

Because the agent is on the same system, you should be able to automatically register it by clicking on “Automatically register”. When you do so, you should see activity in your agent console window.

{{< image "./images/14QUkx67BSSYL24SvId8MKg.png" >}}

### Step 8: Configure the miner rig

Click on your mining rig name and make sure everything is setup correctly. If no mining profile is selected, select the one you made earlier.

{{< image "./images/191TrViuJSL7BUcs5mRzv5w.png" >}}

{{< image "./images/1E0j6PBsdHE69QeIGawQniw.png" >}}

### Step 9: That should be it!

The agent will download the selected miner and start mining. After a few minutes, you’ll start to see charts display.

{{< image "./images/1Qzz5oXKQ82eX1j-pdApCWw.png" >}}

{{< image "./images/1uIXaPU6mbK7iSAh-N29FaA.png" >}}

### Step 10: Stuck? Get help

mmpOS has a [discord ](https://discord.gg/P5J6Z5h)and [telegram](https://t.me/mmpos_intl) with people that are always willing to help.