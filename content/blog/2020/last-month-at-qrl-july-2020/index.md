---
layout: blog-post
slug: last-month-at-qrl-july-2020
date: 2020-08-01
author: "Jack Matier"
title: "Last Month at QRL — July 2020"
summary: "NIST enters final ‘Selection Round’, Proof-of-Stake devnet getting closer, QRL AMA part 1 and 2 released, new Chinese social media ambassador, and QRL Fun with memes contest results!"
featured_image: 1kgT-W8uiU9OpQMCbRkSdQg.png
images:
  - 1kgT-W8uiU9OpQMCbRkSdQg.png
  - 1ZUqzuXkczaSYqL9vNs6AFA.png
  - 1u_Gj1WrRmMS0CQoOvRA5uQ.gif
  - 1COpH4DvXTRR0P9cAfVrYUg.png
  - 1BBftkXBezEYGdbReoocHDw.png
  - 1FMBZfvFXq4y22oxLwKv-VA.png
  - 1hf8ckZIIA8qyDYSc-ye3jA.png
categories:
  - technical
---

[The Quantum Resistant Ledger](https://theqrl.org) are pioneers in the field, addressing the threat quantum computers pose to blockchain.

To this day, it’s the *only* blockchain that utilizes a [signature scheme that’s recognised](https://csrc.nist.gov/News/2019/draft-sp-800-208-stateful-hash-based-sig-schemes) by the United States [National Institute of Science and Technology (NIST)](https://www.nist.gov/) as being post-quantum secure with its use of [XMSS](https://csrc.nist.gov/News/2019/draft-sp-800-208-stateful-hash-based-sig-schemes).

Beyond just having a quantum secure foundation to build off of, we wanted to make sure we were able to seamlessly and *safely* adapt to other post-quantum signature schemes with an [extensible address format](https://docs.theqrl.org/developers/address/), should future signature schemes offer beneficial attributes (faster, smaller, etc). This is important to note best [NIST’s Post-Quantum Cryptography Program Entered a final ‘Selection Round’](https://www.nist.gov/news-events/news/2020/07/nists-post-quantum-cryptography-program-enters-selection-round). **Should we see something from this final selection round, we’ll be able to implement the new signature scheme as an option.**

{{< image "./images/1ZUqzuXkczaSYqL9vNs6AFA.png" >}}*Credit: B. Hayes/NIST: [https://www.nist.gov/image/tour-de-quantum](https://www.nist.gov/image/tour-de-quantum)*

## Development

### Proof of Stake

Proof-of-Stake is well on its way along with more information coming on that along with a general timeline (not dates, just milestones). First iteration will be *devnet*, which can be thought of as a precursor to testnet where the core team members and developers are used as the first round of guinea pigs.

This often involves trying to poke holes in the system, but also gives some time to create documentation around the system — as devnet doesn’t often come with detailed documentation handy!

Assuming it all goes well, devnet will progress to *testnet*, which is more wildly distributed and includes documentation so you’re not flying blind.

### QRL Wallet Message transactions

The QRL wallet now has the ability to add a message with your transaction! This can be used for everything from inspirational notes to recording other pertinent information such as invoice ID’s.

{{< image "./images/1u_Gj1WrRmMS0CQoOvRA5uQ.gif" >}}

For example, we used the message field to both offer congratulations and as a way to remember why we performed the transaction, should we look on this a few years from now while scratching our heads.

{{< image "./images/1COpH4DvXTRR0P9cAfVrYUg.png" >}}

## Community & advocacy

### QRL Ask Me Anything (AMA) — parts 1 and 2 released

{{< image "./images/1BBftkXBezEYGdbReoocHDw.png" >}}

After reviewing the questions and recording the AMA, the amount of content that came out was much more than expected and so we have broken the AMA into a 4 part series. Two of the parts have been released, with 2 more on the way!

* **Part 1: July 20th — [https://www.youtube.com/watch?v=pVabWOop-iQ](https://www.youtube.com/watch?v=pVabWOop-iQ)**
* **Part 2: July 27th — [https://www.youtube.com/watch?v=YQ9RUcNArp4](https://www.youtube.com/watch?v=YQ9RUcNArp4)**
* **Part 3: August 3rd — TBA**
* **Part 4: August 10th — TBA**

Topics covered so far are:

**Introduction**

* [What is QRL?](https://www.youtube.com/watch?v=pVabWOop-iQ&t=80s)
* [How did QRL get started?](https://www.youtube.com/watch?v=pVabWOop-iQ&t=99s)
* [At which point did you realize this was a real project?](https://www.youtube.com/watch?v=pVabWOop-iQ&t=204s)
* [Was the success of the project a surprise in the beginning?](https://www.youtube.com/watch?v=pVabWOop-iQ&t=259s)
* [Quantum computer and blockchain organic growth. Good for QRL?](https://www.youtube.com/watch?v=pVabWOop-iQ&t=350s)

**Proof-of-Stake**

* [Minimum staking requirements](https://www.youtube.com/watch?v=pVabWOop-iQ&t=477s)
* [Staking hardware requirements](https://www.youtube.com/watch?v=pVabWOop-iQ&t=720s)
* [Delegation and staking. Description of Proof-of-Stake](https://www.youtube.com/watch?v=pVabWOop-iQ&t=827s)
* [Staking and Node Requirements](https://www.youtube.com/watch?v=pVabWOop-iQ&t=1083s)
* [The upcoming PoS voting structure](https://www.youtube.com/watch?v=pVabWOop-iQ&t=1110s)
* [Verifiable Delay Functions (VDF) and random consensus.](https://www.youtube.com/watch?v=pVabWOop-iQ&t=1320s)
* [How many QRL to stake for 1000 Quanta every 24 hours?](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=62s)

**Smart Contracts**

* [How will smart contracts be affected by quantum computing?](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=210s)
* [Differences/compatibility between OCAML and Solidity](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=385s)

**GO-QRL**

* [Reasonable timeframe to switch to GO-QRL](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=715s)

**Ephemeral Messaging System (EMS)**

* [Can the Ephemeral Messaging System (EMS) do video?](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=860s)
* [What about using it for a dApp social network?](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=1170s)
* [Envisioned smart data](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=1302s)
* [Ethical considerations of secure private messaging](https://www.youtube.com/watch?v=YQ9RUcNArp4&t=1480s)

### Chinese social media Ambassador

While we aim to be as decentralized and global as possible, we’re still very local to regions that speak and understand English (About 2 billion).

This severely limits our advocacy and reach to far less than half of the population of Earth. China is one of the first regions on this journey towards truly reaching out to a global audience, and we’re happy to now have discord user **jdfreshman** to guide us.

jdfreshman is going to help moderate messages & answers questions that arise as well as repost announcements in Chinese on platforms such as WeChat and Weibo.

**If you haven’t done so already, head on over to our [Discord](/discord) and give a warm welcome to our new Chinese social media ambassador, jdfreshman! Welcome aboard!**

### QRL Fun with meme contest winner

We held a meme competition with simple rules:
> 1. Create a meme with the subject of QRL shown positively!
> 2. Post that meme anywhere public!
> Get 5 QRL per meme, up to 5 meme’s per person Winner, as determined arbitrarily, gets 100 QRL. Event ends on the 24th 11pm EST. Contest limit is 500 QRL.

From that, we had **55 meme’s submitted from 14 contestants**. These meme’s were then put side by side and graded in a similar way as chess matches are graded using the [ELO rating system](https://en.wikipedia.org/wiki/Elo_rating_system). After about 1000 rounds, the winner emerged!

{{< image "./images/1FMBZfvFXq4y22oxLwKv-VA.png" >}}*Winning entry by Discord user: Uricon*

If you’d like to see the other excellent meme’s submitted, have a scroll through [memefest.quanta.city](https://memefest.quanta.city).

{{< image "./images/1hf8ckZIIA8qyDYSc-ye3jA.png" >}}*[https://memefest.quanta.city/](https://memefest.quanta.city/)*