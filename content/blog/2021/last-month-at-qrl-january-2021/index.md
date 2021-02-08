---
layout: blog-post
slug: last-month-at-qrl-january-2021
date: 2021-02-01
author: "Jack Matier"
title: "Last Month at QRL — January 2021"
summary: "EnQlave a priority. Development Updates: Zeus, QRL-CLI, & QRL-WALLET. The Quantum Daily Podcast Ft. Michael Strike, and QRL Refresh Merchandise Design Contest Winners."
featured_image: eom.jan2021.png
categories:
  - technical
features:
  - enqlave
  - qrl-wallet
toc: true
---


## Development updates

### EnQlave a Priority

More resources have shifted to enQlave, which after an initial audit, has been updated to decrease the initial GAS cost (was \~20x of a normal transaction). Another audit will be prudent after further development and optimisations are completed.

Beyond demonstrating that we're serious about digital asset security and opening us up to the entire Ethereum community, enQlave paves the way for EQRT's, which allows QRL to be traded on DEX's like Uniswap for increased liquidity options.

Read our recent [update on enQlave](/blog/an-update-on-enqlave/) for more information.

### QRL Wallet 1.7.0 released

A lot has been reworked under the hood to improve **Ledger Nano S/X** support for a more enjoyable and smooth experience for those using hardware wallets. Using our desktop wallet (vs the web wallet) is still recommended at this time.

The latest can be found on the [downloads section of our site](https://theqrl.org/downloads/), while the source along with releases can be found on our GitHub at 
[https://github.com/theQRL/qrl-wallet/](https://github.com/theQRL/qrl-wallet)

Additionally, all infrastructure affecting announcements can be found on our status page at [status.theqrl.org](https://status.theqrl.org), be sure to subscribe to those updates.

### Changelog

**zeus**

- [Open wallet initial UI](https://github.com/theQRL/zeus/pull/18)
- [Create wallet takes advanced parameters](https://github.com/theQRL/zeus/pull/19)
- [Persist bookmarks across sessions](https://github.com/theQRL/zeus/pull/21)

**qrl-wallet**

- [Ledger fixes and Node/Electron version bumps](https://github.com/theQRL/qrl-wallet/pull/472)

**qrl-cli**

- [Utilise new library for sending tx](https://github.com/theQRL/qrl-cli/pull/46)

**theqrl.org**

- [Roadmap adjustments](https://github.com/theQRL/theqrl.org/pull/202)

## Education

### How to set-up a local Quantum Resistant Ledger?

Great instructions by community member Discord/Bodisatva on setting up quantum resistant ledger infrastructure locally to develop and test applications.

Covers:

1. Creating your QRL environment
2. Generating local wallets
3. Genesis of your local ledger
4. Creating the config files and the Dockerfile
5. Create docker images
6. Local QRL launch
7. The final test
8. Conclusion

https://bodistva.medium.com/how-to-set-up-a-local-quantum-resistant-ledger-1b14b73d7858

## Advocacy

### QRL Refresh Merchandise Design Winners!

{{< image "./images/merch.win.png" >}}

Congratulations to our QRL refresh merchandise winners!

Be sure to check them out below and order some if you're feeling like the style suits you! There will also be a *who wore it best* contest coming soon which involves wearing and posting QRL merchandise - stay tuned for more details!

- 1st: Discord/ᚲᚨᛈᛁᚦᚨᚾ ᛟᚱᚷᚨᛊᛗᛟ: https://teespring.com/stores/qrl-2
- 2nd: Discord/Edward_Seslez: https://teespring.com/qrl-splash-logo
- 3rd: Discord/Ompanime: https://teespring.com/stores/ompanime

**Notable Mentions**

- Discord/snannerb: https://teespring.com/100-premium-quanta
- Discord/You: https://teespring.com/qrl-it-s-a-shor-thing-blue

Those not your style? Our full list of entries can be seen in [Merchandise Contest Entries Blog](/blog/newqrl-merchandise-design-contest-entries)

### Podcast: Mike Strike and the Quantum Resistant Ledger – Episode 26 [Hybrid]

Ethan Hanson + Michael Strike discuss the importance of trust in bitcoin & blockchain, how quantum computers could erode that trust, and why QRL allows that trust to be maintained, even in the face of a quantum threat

https://thequantumdaily.com/2020/12/28/quantum-computing-now-podcast-episode-26-mike-strike-and-the-quantum-resistant-ledger/

### Video: QRL- How Much energy does Bitcoin use vs Quantum Computer?

{{< youtube "fuWAWwaU1WI" >}}

- Opening + How Much energy does Bitcoin use vs Quantum Computer?
- What really is money?
- Why PoW is fundamental
- Financial Sovereignty 
- How does QRL fit into this system?

### Video: Quantum Computers: Secure your Ethereum with enQlave

{{< youtube "R0iifN0Qtlo" >}}

- Origins of Ethereum 
- Question to ask yourself when assessing risk regarding the Quantum Threat
- What does enQlave do?
-​ QRL 🔄 EQRT's 
-​ Will you be able to secure additional coins using enQlave?
-​ Where is a good starting point for someone to learn more about enQlave?

### Video: Reddit vs Wall Street, GameStop, & Elon pumping Bitcoin | QRL News Roundtable

{{< youtube "rzjpyHt2Ucw" >}}

- Robinhood/Reddit Fiasco- halting buys on specific securities
- Elon Musk, Jack Dorsey, & more endorsing #Bitcoin​ heavily in Twitter bios
- Is what's happening in the markets right now good/bad?
- How does QRL fit into all of this?

### Video: What is Crypto Custody? and Creating a QRL Wallet

{{< youtube "SE8vmMRJiWc" >}}

- Defining Crypto Custody
- Pros & Cons of various crypto custody solutions
- Mnemonic Phrases  
- OCC will allow banks to use public blockchain & stable coin networks
- What types of custody solutions does QRL support?
- QRL Web Wallet Walkthrough
- What solution do QRL & enQlave bring when facing Quantum Threat


## Quantum News

### Jan 3rd: ‘Hot’ Qubits Crack a Major Quantum Computing Challenge

> Researchers believe they’ve overcome a major obstacle standing in the way of practical quantum computers.

https://www.seeker.com/videos/space-innovation/hot-qubits-crack-a-major-quantum-computing-challenge

### Jan 5th: New Quantum Algorithms Finally Crack Nonlinear Equations

> In separate studies posted in November, two teams — one led by Childs, the other based at the Massachusetts Institute of Technology — described powerful tools that would allow quantum computers to better model nonlinear dynamics.

https://www.quantamagazine.org/new-quantum-algorithms-finally-crack-nonlinear-equations-20210105/

### Jan 12th: Electrically switched nanowire qubit for both memory and processing

> Silicon germanium nanowires have been used to build a new type of qubit for quantum computer that can switch electrically between storage and processing

https://www.eenewseurope.com/news/electrically-switched-qubit 

### Jan 13th: Error-protected quantum bits entangled for the first time

> For the first time, physicists from the University of Innsbruck have entangled two quantum bits distributed over several quantum objects and successfully transmitted their quantum properties. This marks an important milestone in the development of fault-tolerant quantum computers. The researchers published their report in Nature. 

https://phys.org/news/2021-01-error-protected-quantum-bits-entangled.html

### Jan 14th: Important Milestone in the Creation of a Quantum Computer That Uses Transistors As Qubits

> The French company Leti makes giant wafers full of devices, and, after measuring, researchers at the Niels Bohr Institute, University of Copenhagen, have found these industrially produced devices to be suitable as a qubit platform capable of moving to the second dimension, a significant step for a working quantum computer. The result is now published in Nature Communications.

https://scitechdaily.com/important-milestone-in-the-creation-of-a-quantum-computer-that-uses-transistors-as-qubits/

### Jan 15th: KEMTLS: Post-quantum TLS without signatures

> If we were to replace X25519 by the post-quantum KEM Kyber512 and RSA by the post-quantum signature Dilithium II, two of the more efficient proposals, the size transmitted data would increase to 10,036 bytes[4]. The increase is mostly due to the size of the post-quantum signature algorithm.
>
> The question then is: how can we achieve full post-quantum security and give a handshake that is efficient to be used?

https://blog.cloudflare.com/kemtls-post-quantum-tls-without-signatures/

### Jan 15th: Scientists' discovery is paving the way for novel ultrafast quantum computers

> Researchers of the Institute of Physics of the University of Tartu showed that microcrystals, synthesized on the basis of mixed optical fluoride crystal matrices doped with erbium, praseodymium and some other ions of rare earth elements, can work as qubits that enable ultrafast optical quantum computing.

https://phys.org/news/2021-01-scientists-discovery-paving-ultrafast-quantum.html

### Jan 20th: India’s Meity to Partner with AWS to Establish a Quantum Computing Applications Lab

> India media is reporting that the nation’s Ministry of Electronics and Information Technology (MeitY) is collaborating with AWS to establish a Quantum Computing Applications Lab in the country.

https://thequantumdaily.com/2021/01/20/indias-meity-to-partner-with-aws-to-establish-a-quantum-computing-applications-lab/

### Jan 22nd: French President Details €1.8b Quantum Plan

> Two years after unveiling France’s roadmap in artificial intelligence, French President Emmanuel Macron presented this week a national strategy for quantum technologies. The five-year €1.8 billion plan aims to finance research in quantum computing, communications and sensing.  

https://www.eetimes.eu/french-president-details-e1-8b-quantum-plan/

### Jan 22nd: New blueprint for more stable quantum computers 

> Researchers at the Paul Scherrer Institute PSI have put forward a detailed plan of how faster and better defined quantum bits - qubits - can be created.

https://www.eurekalert.org/pub_releases/2021-01/psi-nbf012221.php

### Jan 26th: Quantum computing’s next trick? The power of networked clusters

> In 2021, we will see the first demonstration of modular quantum computers that are “networked” for the purpose of building a single, but much larger, example. This will happen in the real-world quantum industry, outside of theoretical experiments in academic labs, and will show us a clear path towards creating more powerful quantum computers.

https://www.wired.co.uk/article/quantum-computers-networked-clusters

### Jan 27th: BMW takes first steps into the quantum computing revolution

> BMW's experiment with quantum computing is among the first real-world uses of the nascent technology. Optimization problems, like the one the carmaker is trying to solve, are among the areas quantum computers are expected to outpace ordinary machines, finding the best course of action from among a daunting array of possibilities. 

https://www.cnet.com/news/bmw-takes-first-steps-into-the-quantum-computing-revolution/

### Jan 28th: Microsoft Develops Cryo-Controller Chip – Gooseberry – for Quantum Computing

> The chip powering this platform, called Gooseberry, resolves several issues with I/O in quantum computers by operating at 100 milliKelvin (mK) while dissipating sufficiently low power so that it does not exceed the cooling power of a standard commercially-available research refrigerator at these temperatures. This sidesteps the otherwise insurmountable challenge of running thousands of wires into a fridge.

https://www.hpcwire.com/2021/01/28/microsoft-develops-cryo-controller-chip-gooseberry-for-quantum-computing/

### Jan 28th: Physicists develop record-breaking source for single photons 

> Researchers at the University of Basel and Ruhr University Bochum have developed a source of single photons that can produce billions of these quantum particles per second. With its record-breaking efficiency, the photon source represents a new and powerful building-block for quantum technologies. 

https://www.eurekalert.org/pub_releases/2021-01/uob-pdr012621.php

### Jan 29th: Infineon to build quantum processor

> Infineon is to build a superconducting quantum processor for commercialisation as part of Munich’s €300m ‘Quantum Valley’ plans

https://www.eenewseurope.com/news/infineon-build-quantum-processor

### Jan 29th: A Desktop Quantum Computer for Just $5,000 

> A Chinese start-up has unveiled plans to sell a desktop quantum computer costing less than $5,000. The new portable device is one of a range called SpinQ, aimed at schools and colleges. It is made by the Shenzhen SpinQ Technology, based in Shenzhen, China.

https://www.discovermagazine.com/technology/a-desktop-quantum-computer-for-just-usd5-000

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)