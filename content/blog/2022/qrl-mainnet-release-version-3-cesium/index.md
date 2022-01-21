---
layout: blog-post
slug: qrl-mainnet-release-version-3-cesium
date: 2022-01-20
author: "Jack Matier"
title: "QRL Mainnet v3.0 has been released! (Codename: Cesium)"
summary: "We're happy to announce that QRL Mainnet Version 3 (cesium) has been released and will be activated at block height 1,938,000 which has an estimated target time of February 25th, 2022"
featured_image: header.png
categories:
  - technical
features:
  - qrl-node
toc: true
---

## About the hard fork

We're pleased to announced that **QRL mainnet version 3 (codenamed Cesium) has been released!**

This mainnet release is the result of [QRL Improvement Proposal #16 (QIP-016)](/qips/qip016/) which proposed to reduce QRL emissions in order to improve the netowrk. As part of the QIP process, many of the [positive and negative considerations](/blog/qip016-reduce-emission-rate-of-the-network-prevote-synopsis/) were discussed at length before being put to our first on-chain vote resulting in the QIPs approval. The final determination can be found on the [QIP GitHub discussion page](https://github.com/theQRL/qips/pull/32#issuecomment-975645693).

We would like to thank everyone who participated in the worlds first post-quantum secure on-chain vote, and are happy to be pushing the fruition of that vote in the form of a hard fork.

### Specification

{{< image "./images/emissionchart.png" >}}

The hard fork implements an emission reduction by a multiplication factor of **0.4x** of the per block coinbase reward starting at the hard fork block height of **1,938,000**, which has an estimated date time of **2022-02-25 12:30 UTC**. 

Due to average block time variance, while the hard fork block height remains static, it's possible that the time that the hard fork triggers can be off by roughly 10%. It's important to keep in mind these are estimates.

```
LOW EST.  2022-02-22 00:01 UTC
TARGET    2022-02-25 12:30 UTC
HIGH EST. 2022-03-01 00:43 UTC
```


Along with the emission reduction, there are other minor bug fixes to the QRL node cli.

## Upgrade instructions

The update involves three general steps

1. Stop your QRL node and any related services such as the wallet daemon (`qrl_walletd`).

2. Update your QRL node

```bash
pip3 install qrl -U
```
3. Start your QRL node, which will begin the state migration for the fork which should complete in less than 10 minutes depending on system resources. If you run additional services like the wallet daemon (`qrl_walletd`), start them once complete.

This update needs to be done *before* the hard fork block height of **1,938,000** with an estimated date of **2022-02-25 12:30 UTC**.

We've also broken it out into more detail below

### Step 1: Stop the QRL Node

Before updating, be sure to stop the QRL node. The way you stop it will depend on the way you're running your QRL node. **If you're confident that you know how to stop your QRL node and you've stopped it, proceed to [step 4](#step-4-update-the-qrl-node).**

Otherwise, for those that are new, follow along.

1. [Running as a screen session](#if-the-qrl-node-is-running-as-a-screen-session): Based on discussions, this is the most common setup that people have.
2. [Running as a background service](#if-the-qrl-node-is-running-as-a-background-service)
3. [Running as a systemd service](#if-the-qrl-node-is-running-as-a-systemd-service)

#### If the QRL node is running as a screen session

Most people will be running it under screen in terminal. If that's the case, `screen -r` into the screen session and hit `ctrl+x` to terminate the running process. 

```bash
screen -r
```

To detach out of the screen session, press `ctrl+a,d`.

#### If the QRL node is running as a background service

If you sent QRL to a background service (usually by running `nohup start_qrl &`), then you'll want to terminate the node:

```bash
pkill qrl_node
```

Keep in mind that if it's a systemd service that is set to start again, it will.

#### If the QRL node is running as a systemd service

Though undocumented and the least common, some people will have installed QRL as a systemd service. To stop that, you'll want to issue the service to stop

```bash
sudo systemctl stop qrlnode
```

The service name will depend on what service name you gave it. You can then check the status with system control as well:

```bash
sudo systemctl status qrlnode
```

### Step 2: If you have the wallet daemon running, stop it

```bash
pkill qrl_walletd
```

### Step 3: Check if QRL is still running

To check if it's still running, run `pgrep start_qrl`. If it returns a process number, then that means there's still a qrl node process running.

```bash
pgrep start_qrl
2067270
```

If nothing is returned, move to Step 4 to update the node. If there's still a node running, then there's a few possibilities. 

1. You may be running testnet, in which case you'll want to either find that session and kill it in a similar manner, or if you sent it to the background, run `pkill qrl_node`. 
2. If you're running QRL as a service, then it may have restarted and you'll want to stop it using the systemctl command: `sudo systemctl stop qrlnode`.

### Step 4: Update the QRL Node

With the node stopped, upgrade the QRL node

```bash
pip3 install qrl -U
```

### Step 5: Check to make sure your QRL node is v3.0.1 or higher

```bash
qrl --version
```

### Step 6: Start the QRL node again.

#### If you want it running as a screen session

If you had it running as a screen session, you'll want to reattach it and start the QRL node.

```bash
start_qrl
```

#### If your QRL node is setup as a systemd service

If you had it running as a systemd service, start the service again.

```bash
sudo systemctl start qrlnode
```

#### If you send the QRL node to the background

```bash
nohup start_qrl &
```

### Step 7: Start qrl_walletd (if you want it)

It will take some time for the QRL node to upgrade the state (should be less than 10 minutes), after that, you can start the wallet daemon again 

```bash
qrl_walletd
```


## Questions? Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)