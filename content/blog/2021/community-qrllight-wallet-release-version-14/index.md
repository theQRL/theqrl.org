---
layout: blog-post
slug: community-qrllight-wallet-release-version-1.4
aliases:
  - /blog/community-qrllite-wallet-release-version-1.4
date: 2021-12-13
author: "Jack Matier"
title: "Community qrllight wallet release version 1.4"
summary: "qrllight wallet v1.4 is released which features both mainnet/testnet support, a slaves.json implementation, and several bug fixes. Feedback is desired!"
featured_image: header.png
categories:
  - technical
  - community
  - releases
features:
  - qrllight
toc: true
---


## About

{{< image "./images/qrllight.gif" >}}

[Qrllight](https://github.com/successor1/qrllight/) is a community created lightweight and minimalistic desktop QRL wallet developed by runforest and currently supported on the Linux platform.

It features:

- Mainnet/testnet support
- Adjustable fees through a slider (or custom)
- Multi-output transactions (send to multiple recipients)
- Slaves.json implementation

And in the efficient history tab there's:

- CSV export
- Positive/negative values
- Transaction Descriptions

Download: https://github.com/successor1/qrllight/releases/tag/v1.4

Usage is simple. Just download the `tar.xz` file and decompress using your favourite utility such as `tar` then run the executable.

```
$ tar -xf  qrllight-v1.4.tar.xz 
cd qrllight-v1.4.tar.xz/
./qrllight
```

> Disclaimer: Community projects are the bedrock of any decentralized blockchain project and a measure of both the success of the community member and the value that the blockchain system provides. However, while every project is made with care, the QRL Foundation cannot guarantee or provide a warranty of any kind, about the general fitness and security of the application.

### Screenshots

{{< image "./images/screen1.png" >}}

{{< image "./images/sendscreen.png" >}}

{{< image "./images/receivescreen.png" >}}

## What's new in this release?

NEW:

- Mainnet/testnet options are available now! 
- Fixed large tree height crash
- Fee set to slow, medium, fast or custom
- Export all transactions into CSV
- Added mainnet/testnet option
- Confirmation before sending
- Send QRL to multiple recipients
- Create wallet with your randomized mouse movements
- Slaves.json implementation
- Efficient history implementation
- Fixed input bugs

History tab:

- Multi-output transactions working
- Plus or minus showing
- Description works
- History pagination works
- History icon added
- Initialized tokens showing

## Features slated for a future release

Work is underway in a joint effort between runforest and 0xFF through this years [hackathon](/blog/qrl-winter-hackathon-2021) on the QRL package for Apple Silicon. Separately, a native Windows support is being worked on with from 0xFF (again through the [hackathon](/blog/qrl-winter-hackathon-2021)).

This will allow the [qrllight wallet](https://github.com/successor1/qrllight) to work on Macs (including Apple Silicon) and Windows.

Other slated features are [Ledger](https://www.ledger.com/) and [Mining support](https://docs.theqrl.org/mining/mining/). Have an idea or issue? [Feedback is requested](#feedback-requested) (more below).

## Feedback requested!

Community feedback is greatly appreciated!

1. Join the qrllight thread in the [#qrl channel on Discord](https://discord.gg/qrl).
2. Create an issue on GitHub with any [feature request or bug you might encounter](https://github.com/successor1/qrllight/issues).

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)