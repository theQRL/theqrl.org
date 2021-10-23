---
layout: blog-post
slug: qip016-reduce-emission-rate-of-the-network-prevote-synopsis
date: 2021-10-22
author: "Jack Matier"
title: "QRL Improvement Proposal 016 (QIP-016) Pre-vote Synopsis: Reduce emissions rate of the network"
summary: "To reduce the emissions rate of the network by a multiplication factor of 0.4x which has been determined through both network and transaction analysis, and with regards to the future economic incentives of Proof-of-Stake."
featured_image: blog.qip016.header.png
categories:
  - technical
features:
  - qip
toc: true
---

## Overview

### QRL Improvement Proposals (QIPs) and Voting 

[QRL Improvement Proposals (QIPs)](https://github.com/theQRL/qips) are open proposals put forward to improve the QRL core-protocol and other components of the QRL system.

During the process of drafting a QIP, but before the proposal is fully opened, there's some preliminary discussion held on its specification, implementation and general merits. Some QIPs which are identified as contentious from review of these discussions and community sentiment, will be further put to a vote. Voting is an important aspect of democracy and a way to ensure that the will of the people, including the person reading this, is part of the decision that governs the direction of QRL.

**Encouraged ways of participating**

1. **Participate in discussions:** The more voices there are in a debate, the more opinions being voiced, the better the understanding of the issue at hand. Your voice also carries weight by having a chance to change peoples minds on the way in which they were to vote.
2. **By being informed:** Read this synopsis, but don't stop there. The synopsis only tries to maintain a the body of discussions that have taken place. Continue to read the opinions of others and research into things you're unsure about.
3. **Finally, Vote:** Every vote counts. Don't feel discouraged if you see the vote going another way & be vote anyway! 

Without further ado,

## QIP-016: Reduce emissions rate of the network

### Summary

To reduce the emissions rate of the network by a multiplication factor of 0.4x which has been determined through both network and transaction analysis, and with regards to the future economic incentives of Proof-of-Stake.

### Errata

- QIP-016 GitHub: https://github.com/theQRL/qips/blob/master/qips/QIP016.md
- Main Discussions To: https://github.com/theQRL/qips/pull/32

### Vote parameters

- Title: QIP 016 - Reduce emissions rate of the network
- Author: 4d5a
- Coordinator: The QRL Foundation
- Eligibility: Excluded [Exchanges, Foundation]
- Vote type: Simple proportional vote
- Snapshot blockheight: 2021-11-02
- Voting end date: 2021-11-08

### Discussion Locations

Official discussions which will get recorded for posterity will take place on GitHub and is also defined in the QIP in the `discussions_uri` parameter.

- GitHub: https://github.com/theQRL/qips/pull/32

Other areas of more informal discussions can be found at:

- Discord: https://discord.com/channels/357604137204056065/901213160902627358
- Reddit: https://www.reddit.com/r/QRL/comments/qdq7dx/qip_016_reduce_emissions_rate_of_the_network/
- Twitter: https://twitter.com/QRLedger/status/1451653847135424518
- Telegram: https://web.telegram.org/z/#-1377664830_806

## General Considerations

### Timeline of different roadmap features

Features can provide additional avenues for liquidity (such as the case of [EnQlave through wQRL](/feature/enqlave)), improve market sentiment, or directly impact the change of emission for technical reasons (such as Proof-of-Stake limitation). Understanding where these stand in a chronological manner would help in decision making for the vote.

Due to the pioneering and agile-development nature of the QRL project, it's difficult to give timelines or a complete overview of the components left to complete. What we can do is give a broad overview of where we're at with each.

#### UAE Developer Expansion

Additional developers can enable teams to work on all areas of development, not just the ones assigned to them.

If a team has more developers that they can assign tasks, then there is an opportunity for them to work on tasks outside of the assigned area. This enables the team to produce more features in less time, and to a higher quality. It also lets some members of the team focus on one area so they are not juggling too many things at once.

From this we started expansion efforts in the UAE and abroad for developers. We've already narrowed down to an initial four high quality candidates that core blockchain developer, [Kaushal Kumar Singh](/team/kaushal/) needs to review further. Assuming they're up to our standard, these developers would be able to help accelerate with the two more immediate things on our [roadmap](/roadmap), EnQlave and Proof-of-Stake, along with other components.

#### Proof-of-Stake

Last year we developed a PoS devnet using GoLang with the limitation of an efficient and robust census layer. As there's no blockchain in existence with a *quantum safe* Proof-of-Stake signature scheme, there's little previous work here and so we announced several grants, some of which have been fulfilled. [Geometry labs](https://geometrylabs.io/), for example have been hard at work on producing and efficient lattice-based signatures with signature aggregation important for Proof-of-Stake. While no timeline or ETA can be given at this time, Kaushal has also started doing some preliminary development based on this and other recent research and will be using the previous devnet as a basis for the Proof-of-Stake protocol.

#### EnQlave

EnQlave most notably provides:

- A way for Ethereum users to protect their Ethereum and Ethereum assets
- A way to introduce Ethereum users to the QRL ecosystem
- A way to acquire QRL through a wQRL token on Uniswap

Historically, we started off with a [pure XMSS implementation](/blog/announcing-ethereum-enqlave-quantum-security-for-the-ethereum-blockchain) which underwent an audit. After another review of the code during this time, however, we found a significant amount of additional headroom for efficiencies. With gas fees being so expensive at the time and still to this day, EnQlave has been almost entirely reworked. As it stands, there are quite a few moving components, which ends up with an exponential amount of complexity - this has resulted in frequently revisiting interface components (both UX and otherwise).

## Positive considerations

### Improved economic conditions

The ratio of sellers to buyers determines the value of a cryptocurrency. When there are more sellers than buyers, the value of the blockchain drops. When there are more buyers than sellers, the value increases. The QRL Proof-of-Work network consists of miners who produce coins by solving complex mathematical equations to verify transactions on the blockchain. Of these miners, it's been estimated through network and transaction analysis that most have no economic or vested interest in QRL, causing a transfer of value from those with economic interest in QRL, to other coins or monetary assets.

By reducing the emission rate, this decreases the overall QRL emitted, which should initially decrease the profitability to be mined by those with an economic interest in QRL. As the sell pressure decreases, the value will increase to the point of equilibrium, but with a higher overall market cap.

> Even though I would likely suffer from this QIP implementation, it is only temporary to boost us into a ranking position that may work synergistically with the new feature set that the QRL team is about to put out. Both acts together may put us over the top for exchanges to start listing. Slowing down the exchange dump seems to be pretty important at this point in time. Too many mining to exchanges.
> 
> \- [AERProductions](https://github.com/theQRL/qips/pull/32#issuecomment-900291181)

### Improved outreach

The largest companies in any given industry tend to dominate the market cap. The size of these companies means they have more resources to create new products, more money for advertising, and greater access to new markets.

It is more difficult for smaller companies to compete with large ones on these factors, but even big companies can find themselves struggling if their market share is too small or if they are unable to adapt quickly enough. The market capitalization and economic conditions of an organization, regardless of an organizations overall size, can help attract developers and general interest.

For blockchains, this is expressed through market cap, and with a value velocity. Assuming everything else is equal, a blockchain with a positive value velocity and improving market cap will achieve more attention than one with a lower market cap, with a negative value velocity.

> CMC ranking is an imperfect system that unfortunately has a negative impact on the awareness of this project, allowing hundreds of meme coins, scam coins, or projects otherwise less "worthy" of their ranking in relation to QRL to receive comparatively more visibility.
>
> I support this QIP as I feel it is warranted to raise the project's market cap and awareness. Would be ideal to get more comments from miners here.
> 
> \-  [JohnTitor21 on GitHub](https://github.com/theQRL/qips/pull/32#issuecomment-899545866)

### Increased population for Proof-of-Stake

Proof-of-Stake has a lot of benefits that will make it a better system than Proof-of-Work, but one of notable importance to this QIP is it broadly increasing incentive for the acquisition of QRL to give a higher statistical chance of winning block rewards. That incentive is also tied to the emission rate of of the Proof-of-Stake system.

As it stands, a lot of the current emission rate has undergone dilution, over the course of three years, with some possible reasons as pointed out by DonFixi.

> 1. The whitepaper promised, but the team has not delivered, a PoS chain yet. This unfortunate situation is continuously hurting with much dilution the original supporters since PoW mainnet.
> 2. PoW under Cn7 ASICS/Botnets wildly diluted the coin price preventing much of its price growth during its ATH.
> 3. PoW under RandomX keeps diluting the coin price partially due to lack broad interest/exchange availability.
> 
> \- [DonFixi on GitHub](https://github.com/theQRL/qips/pull/32#issuecomment-899106521)

Decreasing the reward now, allows for increased incentives down the line to acquire and hold QRL.

## Negative considerations

### Economic mutability

One of the cornerstone aspects of a lot of the blockchain space, is that the emission rate, once defined, isn't changed unless there's a serious reason to - it's technically not entirely immutable, but functionally it's that way. This is one of the driving factors that people have when coming towards Bitcoin, as it gives predictive emission capabilities not seen in other fiat assets. Even gold currently being a finite resource has an emission partly defined by its price and not by some immutable force.

> This is a major decision as the emission schedule is the biggest change possible. It publicly shows that the "immutable ledger" is controlled of a central authority and the total number of future mined coins can be increased as easily as decreased. It will take a long time for the negative vibes of this event to wear-off for investors, especially, if price does not follow like the theory hopes.
> \- [Coin-runner on GitHub](https://github.com/theQRL/qips/pull/32#issuecomment-899923710)

The success of this QIP could have unintended market consequences for the future of QRL by showing that the emission would be changed with the intent on improving its economic conditions, rather than through technical limitations in code (such Proof-of-Stake possibly not suitable for per block emission calculations).

### Lack of economic justification due to market suppression

Reducing the Proof-of-Work emission could reduce the downward pressure, but the demand is already low when in consideration of the larger market at hand. 

> I find it hard to believe that such a low amount is suppressing the price in any significant way. If emissions were reduced by 2/3, that could be seen as the equivalent of an extra $1000 per day being "bought," but would it really be the case that one person buying $1000 of QRL for a month, or even a year, would have a substantial impact on the price? Would it do anything close to increasing market cap by a factor of 15 (which would be needed to get back into top 200)? I recognize that as prices rise, that amount rises as well, but higher prices also bring out more who are willing to sell, and I really can't see such a small amount making any substantial difference in the long term. Even if it doubles price, then QRL is top 600 instead of top 800. Is that so much better as to justify messing with monetary policy?
> 
> \- [IMac318 on GitHub](https://github.com/theQRL/qips/pull/32#issuecomment-899961428)



This, though not easy, should be fixed instead by encouraging the market to find QRL.

> The solution is to encourage the market to find QRL. It needs buzz spilling over from the QC community to the crypto community. This is not easy and will take time. Once the price starts going up for any reason, coins will move to the orderbook as sellers take their opportunity. It still needs new buyers to come to vacuum up those coins. New buyers who have higher expectations about QRL. News that the emission changed since launch will make buyers think twice about the stability of any investment.
> 
> \- [Coin-Runner on GitHub](https://github.com/theQRL/qips/pull/32#issuecomment-900020198)


### Possible fallout (of Pools, disagreement in the community)

Due to the fact that a change would require a possible update in code and an update for pools and exchanges, this forces an evaluation decision. Some pools, exchanges, or anyone running a node may decide from their evaluation that it's not in their best interest to go through with the update. 

Additionally, this could increase discord in the community, both during the voting process, but even upon success of the QIP, should the emission be changed.

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)