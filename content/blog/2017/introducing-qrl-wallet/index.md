---
layout: blog-post
slug: introducing-qrl-wallet
date: 2017-10-27
author: "Scott Donald"
title: "Introducing QRL Wallet"
subtitle: "TL;DR — The new QRL Wallet for testnet and mainnet has arrived!"
featured_image: 1EJoh0987hNhCmHw5TRj0_w.png
images:
  - 1EJoh0987hNhCmHw5TRj0_w.png
  - 1zuLTcs-YBU79l9NQEtAQ3Q.png
  - 1MmDRa-BmASSKQn8XpXI4zg.png
  - 10YlvlDmVKwQ-g572XOAL0A.png
categories:
  - technical
features:
  - desktop-wallet
---

**TL;DR** — The new QRL Wallet for testnet and mainnet has arrived!

[https://wallet.theqrl.org/](https://wallet.theqrl.org/)

Behind the scenes we’ve been working tirelessly to provide a secure, portable and consistent wallet experience for our users. We discussed a range of requirements, and through a number of design briefs we’ve decided the following core feature set was required for our mainnet release:

- Cross Platform (Windows, OSX, Linux, Web)
- Single Codebase
- Can run in an airgapped environment (Generate wallets, sign transactions, etc).
- Reuse of as much existing code as possible.

Leveraging our core developers prior experience developing web applications, we’ve chosen a combination of Meteor and Electron to fulfil our objectives.

Meteor is a Javascript framework for building web, desktop and mobile applications, which we’ve coupled with Electron; a cross platform desktop packaging suite for HTML/CSS/JS applications. This is how applications like Slack and Discord are developed and deployed across web and desktop environments.

What this all means is we’re able to focus our efforts on a single source of code, and deliver our wallet app seamlessly to all our users with ease — speeding up development times, keeping our code secure while providing our users a consistent user experience.

Over the last few weeks, we’ve been able develop a (almost) fully functional cross platform wallet — fully integrated with our C++ XMSS library — [qrllib](https://github.com/theQRL/qrllib).

This means right now we’ve got a working client that can generate XMSS trees, mnemonic phrases and wallet json files, sign messages with keys from the XMSS tree, view wallet status, historical transactions* and verify transactions* that can all be run on Windows, Mac OSX, Linux, Chrome and Firefox! (* Soon — We’re just updating some gRPC API’s to replace the old HTTP API’s)

We’re currently finishing up a range of optimisations to the core QRL node that changes the way clients will communicate with the node. These changes will remove the older Telnet, Web Wallet and REST API’s, and in their place add a gRPC protobuf API — a far more optimised solution that among many other things, provides a unified interface for all clients to access internal node functionality.

With these changes almost complete, we are now able to send QRL from a remote client (such as the QRL Wallet), similar to how MyEtherWallet works in the Ethereum network. Go give it a try now: [https://wallet.theqrl.org/](https://wallet.theqrl.org/)

Check out some screenshots that were taken recently showing the new wallet in action — and don’t worry — we’re working to spruce up the UI as well ;)

{{< image "./images/1EJoh0987hNhCmHw5TRj0_w.png" >}}*Viewing Wallet*

{{< image "./images/1zuLTcs-YBU79l9NQEtAQ3Q.png" >}}*Creating a Transaction*

{{< image "./images/1MmDRa-BmASSKQn8XpXI4zg.png" >}}*Confirming a Transaction*

{{< image "./images/10YlvlDmVKwQ-g572XOAL0A.png" >}}*Transaction Confirmation*

In the coming days we’ll be releasing OSX and Windows distributions once we’ve cleaned up some of the more pressing issues.

We also welcome the community to check out the [qrl-wallet](https://github.com/theQRL/qrl-wallet) source code, but please keep in mind it’s under active development and is not yet fully functional. Any feedback, issues or contributions are always welcome and encouraged!