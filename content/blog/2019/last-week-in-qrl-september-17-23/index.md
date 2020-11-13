---
layout: blog-post
slug: last-week-in-qrl-september-17-23
date: 2019-09-23T15:53:23.961Z
author: "Adam Koltun"
title: "Last Week in QRL September 17–23"
subtitle: "Development Updates, Google Quantum Supremacy, New Exchange Listing, QRL Mobile Wallet 2.0 Coming Soon"
featured_image: 1vOMa2YhCOF7NZlsLhvPTYA.png
images:
  - 1vOMa2YhCOF7NZlsLhvPTYA.png
  - 1OhNo_CFeqF8VKdMcG2hfwg.jpeg
  - 16hJ0kInd5b5zSSrvU--2Yw.jpeg
  - 1mRFcim9GR1MdKrJG7jHuqw.png
  - 1odYhWFTGDzwwkGOs0qpkxQ.png
categories:
  - technical 
---

## Introduction

This past week has seen developments both within the QRL project, as well as in the wider world of quantum computing. On the local front, we saw the listing on [QRL on Biteeu](https://trade.biteeu.com/trades) (link to [blog](/blog/new-exchange-listing-biteeu)). On the national/international stage, we saw [The Financial Times](https://www.ft.com/content/b9bb4e54-dbc1-11e9-8f9b-77216ebe1f17) initially break the story that Google has achieved Quantum Supremacy, which is easily the largest quantum computing advancement of 2019 so far. Finally, we are happy to announce a release date for our QRL Mobile Wallet 2.0

## Development

{{< image "./images/1OhNo_CFeqF8VKdMcG2hfwg.jpeg" >}}

* **audits:** x41 audit report uploaded to GitHub
* **theqrl.org:** Blog + New market for markets page

## Google Quantum Supremacy

{{< image "./images/16hJ0kInd5b5zSSrvU--2Yw.jpeg" >}}*Credit: Google*

Reported this past Friday by [Fortune](https://fortune.com/2019/09/20/google-claims-quantum-supremacy/), last week a paper was published to NASA.gov before being taken down, which seemed to indicate that Google has achieved [quantum supremacy](https://fortune.com/2019/09/20/what-is-quantum-supremacy/). The stated reason for the paper’s being taken down was that it was accidentally published early before a fully scientific vetting could take place (this could take up to months in time). Assuming that the claims in the paper are validated, it will usher in a new era in quantum computing, and will serve as further evidence that it is potentially possible to scale quantum computing.

The implications for the blockchain space (as well as a more thorough write-up on the signficance of quantum supremacy) can be found in the [blog we published on this new when it broke](/blog/quantum-supremacy-and-the-case-for-quantum-security-today-in-blockchain). To summarize, the advancement of quantum computing technology brings closer the date when the theoretical vulnerability of most blockchains in existence today, ECDSA public key cryptography, is able to be actively capitalized upon. Please go back and read the more in-depth blog if you are interested, it is full of information on the subject.

## New Exchange Listing — Biteeu

{{< image "./images/1mRFcim9GR1MdKrJG7jHuqw.png" >}}

As we wrote in our [blog last week](/blog/new-exchange-listing-biteeu), we are happy to announce that QRL has been listed on another exchange — Biteeu. A partner of Bittrex, Biteeu is based in Estonia, and is a partner of Bittrex. You can go over to Biteeu and [sign up for an account](https://trade.biteeu.com/sign-up) if you are interested.

## QRL Mobile Wallet 2.0 Coming Soon

{{< image "./images/1odYhWFTGDzwwkGOs0qpkxQ.png" >}}

As we have been stating in previous blogs, the QRL Mobile Wallet update is nearly upon us. This Wednesday, September 25th, the QRL Mobile Wallet 2.0 will be released. We are all very excited for the improvements coming along with this update. A summary of most of the improvements coming in 2.0:

* User can open existing wallet with mnemonic (only hexseed was supported so far)
* User can choose the OTS key index, just tap the OTS key index in the send view
* New settings page
* User can change the node (and port) to connect to. If not connected to a specific node, a small warning icon is presented next to the Settings menu.
* The user can turn on/off the PIN security. If turned on, the app will always ask for the PIN when the user switches back to the wallet
* PIN is required if the user leaves the app for more than 15 seconds
* Deleting a wallet has a better warning and asks for the PIN
* User can give a name to the wallets
* Corrected the QR code generated on the wallet section
* Date and Time are shown according to users’ general timezone preferences
* Additional UI/UX improvements

We realize that, next to our block explorer, our mobile wallet is the most-used way for people to interact with the QRL blockchain. We are very happy to be bringing this update to iOS and Android phones later this week!