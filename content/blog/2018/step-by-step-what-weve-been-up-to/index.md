---
layout: blog-post
slug: step-by-step-what-weve-been-up-to
date: 2018-07-17T20:18:03.750Z
author: "Jack Matier"
title: "Step by step, what we’ve been up to"
summary: "tldr; Ledger progress, mobile improvements, API documentation, our new post-quantum notarisation feature, and a brief update on smart contracts!"
featured_image: 1x2IMle4WkmTOEXlYzXfBsA.gif
images:
  - 1x2IMle4WkmTOEXlYzXfBsA.gif
  - 1G6DiQ7GQ8Xp2_xqbBNWheQ.gif
  - 1l6KaeT00quSag_RDdIYYbw.gif
  - 1txJj_moRTFuFlrU6vWrg0Q.gif
  - 17rhh3NxTQXg4oHHGkgS1rg.gif
categories:
  - technical
---

*tldr; Ledger progress, mobile improvements, API documentation, our new post-quantum notarisation feature, and a brief update on smart contracts!*

We have now surpassed our 44,000th block with no major issues, a testament to the amount of testing done by the development side at QRL. To date, nobody has locked up their funds (to our knowledge) on the QRL blockchain.

{{< image "./images/1x2IMle4WkmTOEXlYzXfBsA.gif" >}}*Post Launch — Team at QRL HQ*

With mainnet out of the way, many of us took alternating breaks, while a few others continued drumming on.

### Ledger Progress

While the main codebase for the Ledger has been completed, there is now webwallet Ledger support for complete end-to-end support. This just needs to be reviewed by the Ledger team for full hardware support.

You can use the code yourself by heading to the respective repositories below, this comes of course with a caveat emptor (warning), test at your own risk!

- [theQRL/ledger-qrl-js](https://github.com/theQRL/ledger-qrl-js)
- [theQRL/ledger-qrl](https://github.com/theQRL/ledger-qrl)

### Mobile Improvements

Both the [webwallet](https://wallet.theqrl.org) and the [explorer](https://explorer.theqrl.org/) have had some adjustments to make everything work across all platforms, from desktop to mobile.

{{< image "./images/1G6DiQ7GQ8Xp2_xqbBNWheQ.gif" >}}

{{< image "./images/1l6KaeT00quSag_RDdIYYbw.gif" >}}

{{< image "./images/1txJj_moRTFuFlrU6vWrg0Q.gif" >}}

### Post Quantum Resistant Document Notarisation

After a successful launch, it’s time to start looking for the future! There will be a more blogs coming, that will go over what is on the horizon. In the meantime, it’s nice to build off of what we already have operational on QRL.

One of our first new features is Post Quantum Resistant Notarisation! For those that don’t know,** Notarisation **(British spelling)** **is the official fraud-deterrent process that assures the parties of a transaction that a document is authentic, and can be trusted. As you can imagine, this is a big thing in many industries. You can read more at [national notary](https://www.nationalnotary.org/knowledge-center/about-notaries/what-is-notarization).

You can try notarisation yourself [here](https://wallet.theqrl.org) by going to our [webwallet](https://wallet.theqrl.org) and selecting ‘Tools -&gt; Notarise Document’.

Don’t want to go through the whole process of notarising a document?

1. Download a test document ([here](https://cryptome.org/2016/01/CNSA-Suite-and-Quantum-Computing-FAQ.pdf))

1. Go to the explorer [here](https://explorer.theqrl.org/tx/9f2b01c3ed74cdeb7d5bffa4ed1b42bae4c2dfd91d15c94aef8f5589f11f711b), select the file downloaded in step one, and click ‘Verify Notarisation’.

There is more to come in this area to make it easier to use. Nice work Scott!

{{< image "./images/17rhh3NxTQXg4oHHGkgS1rg.gif" >}}

### Smart Contracts

There has been some initial work with our smart contracts, which there will be a [QIP](https://github.com/theQRL/QIPS/) of soon.

To avoid any potential compromisation of security we will limit the scope of smart contract code execution, and confine such code to fairly narrow logic statements. You can still do *almost* anything with such a design, but it makes for a much more secure system.

### QRL API documentation

While we have had [documentation](https://docs.theqrl.org/) for various elements of our ecosystem up to this point, James has been hard at work with the API documentation, complete with examples on how to get started. The documentation is now live at [api.theqrl.org](https://api.theqrl.org). This is a major step in facilitating utility that will make it easier for developers, as well as outside organizations that may be interested, to build off our chain.

Now is the time to get started and head over to the [qrl documentation site](https://docs.theqrl.org/), [run a node](https://docs.theqrl.org/node/QRLnode/), and browse the [#qrl-app-ideas](https://discord.gg/KAg5fAm) channel on our [Discord](https://discord.gg/KAg5fAm) for ideas — or share one there yourself!

### Our road ahead

As we get some final legal aspects sorted, and our main network coin listed on a known exchange, we have many exciting developments that we cannot wait to share with our users and the wider cryptocurrency community. Stay tuned!