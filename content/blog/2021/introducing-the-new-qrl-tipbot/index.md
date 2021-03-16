---
layout: blog-post
slug: introducing-the-new-qrl-tipbot
date: 2021-03-12
author: "James Gordon"
title: "Introducing the New QRL tipbot"
summary: "From the contributors: We're releasing the QRL tipbot with the goal of fostering a positive, rewarding atmosphere to those that have contibuted to, and continue to contribute, to the project."
featured_image: tipbot.png
images: 
  - tipbot.png
categories:
  - community
features:
  - tip-bot
toc: true
---

After many late nights, lots of coffee, and a full year of covid quarantine, the contributors are ready to roll out the first release of the QRL Tipbot. 

The Tipbot's main goal, and the reason for developing the bot, is to foster a positive and rewarding atmosphere that supports those who contribute to the project. 

We have one of the most supportive, patient, and positive communities around the crypto space. This bot is a token of appreciation to everyone helping to make the QRL better. Giving our community the ability to easily send a few Quanta to support actions of a community member is only the beginning of this appreciation.

## QRL Faucet

{{< image "./images/qrl.faucet.png" >}}

In addition to on-chain tipping, the Tipbot also has a built-in faucet! Anyone signed up with a Tipbot account can withdraw from the faucet once a day. This will help users that are new to the project get acquainted to the ecosystem, and is a nice little reward to all of the loyal users who spend time in the chats. 

Users must request a drip from the faucet in the discord chat, and the funds will be deposited into their Tipbot wallet address. The faucet is accessible to anyone that has a valid and authorized user in our discord server. 

Simply pop into [Discord](/discord), enter the `+faucet` command and the bot will send a small amount of quanta to your Tipbot account. 

All faucet funds are donated to the Tipbot from generous contributors. All donated funds are given back to the community with love. If you would like to donate to the faucet please send quanta to the Tipbot faucet address at `Q010300284cc14642e9b2978218f70fcf76274d67d82f3cf7d9038d0e3e43bacfe293773f803931` or consider donating some mining payouts to the address.

> The faucet is provided as a courtesy to the community, please don't abuse it so the contributors all can enjoy it!

## Tipbot Usage

{{< image "./images/qrl.usage.png" >}}

For full instructions on using the Tipbot, please see the projects official site at https://qrl.tips

For an example of usage below is an example to signup and start tipping QRL.

### Initiating a Tipbot Account

- `+add`: Add a QRL wallet associated with your address, You will receive a DM
- `+agree`: Agree to the Tipbot terms in response to the DM Tipbot sends

### Core Features

- +tip: Example, `+tip @user 5` would tip  @user 5 Quanta `+tip @user1 @user2 5` would tip 5 Quanta to each @user mentioned
- `+bal`: Example, `+bal` will return the users balance in a Direct Message
- `+faucet`: Example, `+faucet` will collect a small drip from the tipbot faucet
- `+info`: Example, `+info qrl` will print various information about the project

### Account management features and misc

- `+opt-in`: Opt into the QRL Tipbot if you've opted out
- `+opt-out`: Opt out of the QRL Tipbot.
- `+terms`: Print terms and conditions.
- `+withdraw`: Remove QRL from your Tipbot address to an outgoing address.

## Development 

Developing this bot gave me an opportunity to use some of the tools the contributors've developed for the QRL production. Through this exercise, improvements the contributorsre identified and implemented, and further development of the QRL ecosystem is underway as a result making future integrations even easier!

The Tipbot functions completely *on-chain* and uses our automatic wallet API to maintain One Time Signatures (OTS), ensuring a users Tipbot address never runs out of available keys to send tips from. This is touted as being the biggest hurdle with hash-based quantum resistant cryptography like the eXtended Merkle Signature Scheme (XMSS), maintaining these one-time use keys so they are not reused and dealing with a finite amount available. We've leveled that field for automated systems like this bot to never worry about re-use or limitations.

All tips are sent on-chain to users individual Tipbot wallet addresses the bot maintains. Users can sign-up through the Discord channel and once setup, can start sending and receiving tips through the Tipbot. 

The bot will transfer funds you've collected to an external address you determine, allowing the user full control of their funds. These withdraws happen immediately and are irreversible, moving the funds out of the wallet.

We would love to hear your ideas for improvement and of course curious to hear about any issues you find while using the bot. Report and submit improvements to https://github.com/theqrl-community/tipbot/issues/new/choose

## The Future

The QRL Tipbot was written with future platforms in mind. Right now the contributors're starting with [Discord](/discord), but extending it to [Twitter](/twitter), [Telegram](/telegram), and other platforms is planned. We have some exciting ideas in mind based on advancements the core team is making.

If you would like to contribute to the bot or have some ideas for improvement please reach out in the chat to our many communities on [Telegram](/telegram), [Discord](/discord), [Reddit](/reddit), [Facebook](/facebook), or [KakaoTalk](/kakaotalk). 

Want to stay up to date? Follow us on [Youtube](/), Twitter or our Telegram news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: https://github.com/theQRL/QRL/