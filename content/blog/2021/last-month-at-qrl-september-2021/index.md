---
layout: blog-post
slug: last-month-at-qrl-september-2021
date: 2021-10-01
author: "Jack Matier"
title: "Last Month at QRL — September 2021"
summary: "Post-quantum secure decentralized on-chain voting has entered public testnet! The downsides of voting systems today and where decentralized voting fits in."
featured_image: header.sept2021.png
categories:
  - technical
features:
  - on-chain-voting
toc: true
---


## Highlight

### Decentralized on-chain voting has entered public testnet!

{{< image "./images/highlight.voting.png" >}}

Decentralized on-chain voting has entered into [public testing](/blog/decentralized-on-chain-voting-enters-public-testing/)! After sufficient testing, the code will be made public and available for anyone to create their own votes securely on the QRL blockchain.

#### How QRL's on-chain voting works

Voting is weighted based on the amount of QRL an address has at a snapshot blockheight defined as part of the voting parameters.

To indicate a vote choice, a `message transaction` is used with a hash that contains:

- Encoding for special message types
- The specified message type (using [message-transaction-encoding](https://github.com/theQRL/message-transaction-encoding))
- A truncated hash for the vote specification metadata
- A truncated hash of the vote option

This is all cleanly outlined on the website at [vote.theqrl.org](https://vote.theqrl.org). Future enhancements can be further integration into API tools and the QRL wallet.

#### The downsides of voting systems today

Voting is a powerful democratic tool that allows people to indicate preference and otherwise express their views, and for these views to be represented at a population level. It's the cornerstone of a fair and transparent society, an institution that guarantees to safeguard civil liberties and social justice.

Unfortunately, unless a lot of precautions are made, corruption can infiltrate the system and succumb to malicious manipulation. Other problems with the current voting systems in present day democracies include electoral corruption, oligarchy, and the lack of a secret ballot.

Electoral corruption occurs when a politician or their associates use methods to artificially influence the result of an election. There are also cases of people being paid to vote for a certain candidate, which is called 'vote buying'.

Oligarchy is where power rests with a small group or elite of individuals. This group may manipulate the law for its own benefit and does not represent the majority of people who are being governed. The lack of a secret ballot means that voters have no way to prove that they have voted as they intended to do so, potentially leading to intimidation tactics.

#### Where decentralized on-chain voting fits in

*Decentralized on-chain voting* takes us a few steps further in the right direction by making votes transparently timestamped, tallied, and recorded. Importantly, it virtually eliminates the incidence of voter fraud, election corruption, and can help reduce voter apathy through the system being transparent and *accountable*. 

It's possible to double check the process by downloading the blockchain and processing the results yourself, instead of relying on third parties to do so.

At this point in time, it should be noted that while decentralized on-chain voting takes us a step closer, it's not yet a process that can be completely trustless in the context of electoral democracies. There is still the lack of a secret ballot (though this is something that can be added), and, unless accounts are directly tied to a real world identity (something you could optionally do with QRL), those who are most invested in the project, with the most to lose, have a greater say.

## Development updates

### QRL Improvement Proposal Refresh

Along with on-chain voting, we've been working on improving our QRL Improvement Proposals (QIPs), which was outlined in last months blog. Specifying a workflow, template, and specification documents helps to add clarity to the process of QIPs, which will improve the decentralized governance of QRL. There is a final review [before merging](https://github.com/theQRL/qips/pull/34).

Completing this allows for work to commence on the QRL Enhancement Program, which is a non-technical aspect of the project that covers improvements and enhancements to the QRL ecosystem to promote a better user experience for end users. In terms of improvements, there are plenty of proposals that people have come up with. Some of these include: the QRL tipbot expansion, a community outreach program that promotes basic cryptography knowledge, updating the website to reflect changes in development, and so on.

## Advocacy

### The QRL Show with QRL Advisor from Counterparty on Crypto, NFT’s, RAREPEPE’s and more

QRL advisor for QRL and Principal at Stoic Capital, an investment fund in the cryptocurrency space. Previous to this, he co-founded Counterparty, a technology project building advanced functionality on Bitcoin, and Symbiont, a solutions provider of distributed ledger technology to institutional finance. Through his work at Counterparty, he was an early pioneer in the development of smart contracts and financial applications of blockchain technology. 

{{< youtube "5wJMSK_rNwA" >}}

- [0:00](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=0s) Intro 
- [0:21](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=21s) Episode Overview & introduce guest 
- [1:22](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=82s) When did you first get involved in crypto? 
- [3:25](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=205s) Background on Counterparty- launch of the platform, origins stemming from Mastercoin, and being on of the very first decentralized exchanges. 
- [6:24](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=384s) The 1st NFT? 
- [9:36](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=576s) What’s your take on the Evolution of NFT’s? From your perspective seeing it evolve from early days (Counterparty, Rare Pepe’s) 
- [10:45](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=645s) Rare Pepes 
- [14:03](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=843s) Early Bitcoin Days, 10K bitcoin pizza 
- [21:37](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=1297s) Present Day NFT’s & into the future. Latest hula hoops & pet rocks or emerging tech? 
- [31:43](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=1903s) What Matters the Most with NFT’s 
- [34:46](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=2086s) Creating a fully quantum computer resistant NFT. Is that even possible? If so, how would that be executed? 
- [39:36](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=2376s) AMA 
- [45:45](https://www.youtube.com/watch?v=5wJMSK_rNwA&t=2745s) Conclusion

### Countries Adopting Bitcoin as Legal Tender | The QRL Show Live (News Roundtable)

From El Salvador becoming the first sovereign state to spearhead this to other potential countries that may (or may not) follow suit. In a country that lacks a cash-based economy, Bitcoin is a form of legal tender that is quickly becoming the most popular form of currency. In a country plagued by inflation and lack of employment opportunities, Bitcoin offers a new opportunity for the next generation.

Join us for our live episode that takes you from Cocoa Beans to Bitcoin, covering El Salvador's adoption of Bitcoin as Legal Tender and What it Means for the future. Make sure to tune in.

{{< youtube "Bh60eDcaq3c" >}}

- [0:00](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=0s) Intro 
- [0:10](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=10s) QRL Trailer for Live episodes 
- [1:58](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=118s) Introduction- Countries Adopting Bitcoin as Legal Tender 
- [3:17](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=197s) Can you provide us with a brief history of money in El Salvador from long ago up to present day? 
- [9:34](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=574s) What led El Salvador into moving in this direction earlier this year? How did this unfold? 
- [14:32](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=872s) What do you see as both pros/cons for El Salvador being that they are the first sovereign nation (although a small one) to embrace Bitcoin as its intended? 
- [26:18](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=1578s) Will other countries consider making Bitcoin legal tender? And if so, will the next few countries all go about it in a different manner 
- [35:30](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=2130s) As nations add to their balance sheets and adopt Bitcoin & alt coins, could QRL act as a nations Quantum insurance policy? 
- [43:58](https://www.youtube.com/watch?v=Bh60eDcaq3c&t=2638s) Conclusion



## Advances in quantum computing

### VCs make record bets on quantum computing | PitchBook

> "Investors have invested $1.02 billion into quantum computing companies so far this year. That's more than was funneled into the industry during the previous three years combined, according to PitchBook data." - [pitchbook](https://pitchbook.com/news/articles/quantum-computing-venture-capital-funding)

### All-nitride superconducting qubit made on a silicon substrate

> "We plan to work on optimizing the circuit structure and fabrication process with the aim of further extending the coherence time and improving the uniformity of device characteristics in anticipation of future large-scale integration. In this way, we aim to build a new platform for quantum hardware that surpasses the performance of conventional aluminum-based qubits." - [phys.org](https://phys.org/news/2021-09-all-nitride-superconducting-qubit-silicon-substrate.html
)


### Quantum computing hits the desktop, no cryo-cooling required

> "An Australian/German company is developing powerful quantum accelerators the size of graphics cards. They work at room temperature, undercutting and outperforming today's huge, cryo-cooled quantum supercomputers, and soon they'll be small enough for mobile devices." 
> 
> [newatlas](https://newatlas.com/quantum-computing/quantum-computing-desktop-room-temperature/)

### IBM CEO: Quantum computing will take off ‘like a rocket ship’ this decade

> Krishna said. As the number of qubits grows, these supercomputers will begin being used to solve real business problems—such as managing agricultural risk—in the latter half of this decade.
>
> “And once it starts, it’s going to take off like a rocket ship . . .,” Krishna told McCracken. “Because let’s suppose one capital markets institution uses it to get a better price arbitrage on some financial instrument, don’t you think everybody else will want to do it then, instantly?”
> 
> [fastcompany](https://www.fastcompany.com/90680174/ibm-ceo-quantum-computing-will-take-off-like-a-rocket-ship-this-decade)


## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)