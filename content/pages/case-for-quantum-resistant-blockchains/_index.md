---
layout: single
url: /the-future-of-post-quantum-resistant-blockchains
layout_single_header:
  sectionsubtitle: 'Quantum Resistant Ledger'
  sectiontitle: 'The future of post-quantum resistant blockchains'
  blurb: |
    The rise of quantum computers poses a world changing threat capable of breaking current blockchain systems, except for QRL, the first full-featured quantum-resistant blockchain protocol.
  cta:
    primary:
      text: View markets
      link: '/markets'
    secondary:
      text: Coin economics
      link: '/markets/#coin-economics'
summary: "The rise of quantum computers poses a world changing threat capable of breaking current blockchain systems, except for QRL, the first full-featured quantum-resistant blockchain protocol."
title: "The future of post-quantum resistant blockchains"
featured_image: header.png
aliases:
  - /why
toc: true
---

## Facing the facts: Quantum computers are quickly becoming a reality

Quantum computing is finally on the verge of becoming commercially useful[^COMM][^NISQ] and is being developed at an accelerating pace[^PACE]. As of this article, [two Chinese teams claim to have reached primacy (first stage of being commercially useful) with quantum computers](https://phys.org/news/2021-10-chinese-teams-primacy-quantum.html).

**Seven out of the top ten tech giants are either publicly competing for market dominance or involved in some capacity**[^TOPTEN]. This includes Google[^GOOGLE], Amazon[^AMAZON], Alibaba[^ALIBABA], TSMC[^TSMC], Tencent Holdings[^TENCENT] IBM[^IBM], Intel[^INTEL], Rigetti[^RIGETTI] and Microsoft[^MICROSOFT]. Other notable entrants include GlobalFoundries[^GLOBALFOUNDRIES], PsiQuantum[^PSIQUANTUM], Honeywell[^HONEYWELL], dMY Technology Group III[^DMYI], and IonQ[^IONQ]. 

{{< image "./images/qcinvolvement.png" >}}

Additionally, **every single one of the G7 countries** are either involved in quantum computing like the USA[^USA], China[^CHINA], France[^FR], Canada[^CA], Japan[^JP], and the United Kingdom[^UK], or getting involved such as Italy[^IT]. Some other notable nation states and groups outside of the G7 include the European Union[^EU], and Russia[^RU].

[In-Q-Tel](https://www.iqt.org/), a corporation that uses [Central Intelligence Agency (CIA)](https://www.cia.gov/) supplied funds to make strategic investments in companies focused on producing commercially focused technology that's of value to the national security for the U.S. and its allies, is also invested in the quantum computing initiatives Rigetti, Q-CTRL, and D-WAVE[^IQT].

**Why?** Quantum computers offer advances that aren't currently possible with classical computers, or can be otherwise sped up by quantum computers. This class of problems solvable by a quantum computer are known in computational complexity theory as [bounded-error quantum polynomial time (BQP)](https://www.quantiki.org/wiki/bqp). This additional class of new problems that can be solved will lead to the revolutionary advancement for AI[^AI], chemistry[^CHEM], materials science[^MATERIALS], finance[^FINANCE], and security[^QSEC] sectors, combined worth a total of trillions. Financial motives aside, **quantum computers can break current public key cryptography used for the Internet, Banks, Blockchain, and many other systems.**

**There's a lot on the line, and the time is really running out to act - at least for blockchain.**

## The security impact is understood and accepted as real

### A look at who's preparing

[NIST has initiated a process to solicit, evaluate, and standardize one or more quantum-resistant public-key cryptographic algorithms](https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization), and has put out a [recommendation for Stateful hash-based signature schemes](https://csrc.nist.gov/publications/detail/sp/800-208/final), including [XMSS](https://datatracker.ietf.org/doc/html/rfc8391), which is what Quantum Resistant Ledger uses.

Other organisations preparing for the quantum threat includes Cloudflare, Google, and others[^PREPARE]. Banks fully realise what's on the line and are preparing as well[^BANKS]. 



### When will quantum computers be an immediate threat?

This is the million (trillion?) dollar question. It's estimated to take 2330 logical qubits to break most public key cryptography used today[^QBITSNEEDED]. 

Both PsiQuantum (working with GlobalFoundries) and IBM are vying to have one million qubit computers by the end of this decade[^MILLION]. While these aren't logical qubits, they can form logical qubits that are close to the numbers above. Adding to the mix, quantum computers can be networked together[^QNETWORK].

Experts in the field have weighed in from time to time in evaluating the likelihood of a significant quantum threat to public-key cybersecurity, and 77% think there's *at least* a 5% chance of it happening within 10 years.

{{< image "./images/quantumbreak.png" >}}

That might not seem like much, but there's two key components missing. 

1. The risk assessment of *cost*. For blockchain, that cost is currently 2.6 Trillion (*not* including NFT's).
2. The time it takes to prepare, otherwise evaluated as [Mosca's Theorem](https://globalriskinstitute.org/publications/3423-2/)

### Why waiting for the immediate threat isn't enough

This is best explained in a metaphor: If you have a fleet of boats that can handle 5 foot waves, but it's *known* that 50 foot waves are coming in a few years, do you wait until those 50 foot waves appear in the wild to try and patch your fleed or prepare ahead of time? If you're smart, you *prepare*, which involves research, planning, and development and takes *time*.

It's that estimated preparation time that you want to use to work back-words for when those 50 foot waves are expected appear. If it takes an estimated 10 years to update a fleet of boats, and you start in the year 2022, your fleet of boats will be ready in the year 2032 to handle 50 foot waves.

Worth a read on this subject is [Allen Walters](https://medium.com/u/ad87280e1b3e?source=post_page-----390fe55daab5--------------------------------) who broke down [Mosca’s Theorem and applied to the blockchain](https://medium.com/the-capital/an-addition-to-the-bitcoin-wiki-page-on-quantum-computing-and-moscas-theorem-of-risk-f2345e504bb4).

{{< image "./images/mosca.png" >}}

For *everyone*, that preparation time will involve research, development, integration/deployment, and migration. It's no surprise then that we find Google, Cloudflare and others with deployed test implementations by now taking this seriously, even when the immediate danger might seem so far off[^PREPARE]. 

### Updating centralized vs decentralized systems

There are a lot of critical systems that rely on vulnerable cryptography, but they’re also centralized systems, leading to fast-migrations in the case of a [black swan](https://en.wikipedia.org/wiki/Black_swan_theory) event. This means they don’t face some crucial issues decentralized blockchains do. 

For blockchains including Bitcoin, '[not your keys, not your crypto](https://www.ledger.com/academy/not-your-keys-not-your-coins-why-it-matters)' is the golden standard, and most people will **individually need to update their keys**. Banks, on the other hand, hold and control your keys so can upgrade them at any-point. They can, for example, centrally change their cryptography without compliance of their users and the whole process can be done without user interface. 

## What does this mean for blockchains like Bitcoin?

Most blockchains (including all in the top 10 on CMC) use either Elliptic Curve Digital Signature Algorithm (ECDSA) for public key cryptography, or some variant of it vulnerable to quantum computers[^ECCTOP]. Using a quantum computer, Shor’s algorithm[^SHORS] can be used to break ECDSA[^SHORS].

A paper by Deloitte Netherlands found that [25% of all Bitcoin are potentially vulnerable to a quantum attack](https://www2.deloitte.com/nl/nl/pages/innovatie/artikelen/quantum-computers-and-the-bitcoin-blockchain.html), while some estimate [that to be higher at 36%](https://medium.com/@sashagnip/how-many-bitcoins-are-vulnerable-to-a-hypothetical-quantum-attack-3e59e4172e8).

Anytime you make a transaction, your public key is revealed to the network. At that point, if the quantum computer is fast enough, or the network is congested, a private key can be derived and a new transaction with a higher fee can be made which will process sooner, and empty the persons assets.

More can be read in the paper “[quantum attacks on bitcoin, and how to protect against them](https://arxiv.org/pdf/1710.10377.pdf)”.

## How Quantum Resistant Ledger comes in

As we’ve found in creating our own blockchain, the process of making a blockchain quantum secure wasn’t merely matter of dropping in another signature scheme and opening a github repository. 

We first needed to consult with experts in the field of post-quantum cryptography and begin work on the structure of our codebase, which was first released to github in 2016 and later released as mainnet after a long testnet period in 2018.

And we're safe from future threats too. The QRL includes the possibility to [upgrade signature schemes and cryptographic hash functions](https://docs.theqrl.org/developers/address/), and indicate so through an address format. This brings forward the capability of being crypto-agile, something no blockchain should be without.

This space needs secure, impenetrable blockchain systems more than ever. Right now, cryptocurrency and blockchain's entire security model rests on the assumption that quantum computers will not exist for at least another decade. When they do emerge and bring with them the ability to break existing protocols, we will be left in a dangerous, high-risk state. We need to address this threat now before it becomes too late.

**The Quantum Resistant Ledger** is a brand new blockchain system that is post-quantum secure and employs post-quantum computing technologies in its design for absolute security, audited by [red4sec](/blog/red4sec-security-audit-concludes-a-summary) and [x41 D-sec](https://github.com/theQRL/audits/blob/master/x41%20Audit%20Response.pdf).

Current features are:

* Desktop ([Windows](https://github.com/theQRL/qrl-wallet/), [Mac](https://github.com/theQRL/qrl-wallet/), [Linux](https://github.com/theQRL/qrl-wallet/))
* Mobile ([iOS](https://itunes.apple.com/us/app/qrl-wallet/id1458620542?ls=1&mt=8), [Android](https://play.google.com/store/apps/details?id=com.theqrl))
* Web ([wallet](https://wallet.theqrl.org), [explorer](https://explorer.theqrl.org))
* Hardware wallet support with [Ledger Nano S](https://support.ledger.com/hc/en-us/articles/360019184453)
* On-chain message support (80 bytes)
* Notarisation
* [Keybase](/blog/qrl-and-keybase) ID integration

Along with several methods to interact with the foundation to further expand the ecosystem.

* [QRL API](https://api.theqrl.org/#qrl-api): Organized around GRPC which uses [protocol buffers](https://developers.google.com/protocol-buffers/docs/overview) for serializing structured data. If you’re working on an integrated application, this is what you want.
* [Explorer API](https://api.theqrl.org/#explorer-api): Great for quickly getting QRL address balances, population, and other such data.
* [Wallet API (requires node)](https://api.theqrl.org/#wallet-api): If you’re working with wallets (ie. exchanges and other services), this is recommended.
* [qrl command line (requires node)](https://docs.theqrl.org/wallet/wallet-cli/): Comes equipped with the python node, offers simpler functionality to the wallet API.
* [qrl-cli](https://github.com/theQRL/qrl-cli): Executable with mac, linux, and osx binaries, for interacting with the QRL blockchain via scripts and applications without requiring a full node.
* Suitable [documentation](https://docs.theqrl.org) and [API](https://api.theqrl.org) sites.

On the horizon we have smart-contracts and proof-of-stake which are ending their period of research and entering development along with a UAE developer hub that aims to triple our development output. 

This will position QRL as the most secure and feature rich blockchain project that can be counted on for secure digital assets into the future.

## References

[^SHORS]: Shor's algorithm

	- [Shor's discrete logarithm quantum algorithm for elliptic curves](https://arxiv.org/pdf/quant-ph/0301141.pdf), John Proos, 2008

[^QBITSNEEDED]: Qubits needed

	- 2330 - [Quantum Resource Estimates for ComputingElliptic Curve Discrete Logarithms](https://eprint.iacr.org/2017/598.pdf), Microsoft Research 

[^QNETWORK]: Qubit network

	- [Towards a Distributed Quantum Computing Ecosystem](https://arxiv.org/abs/2002.11808), arxiv, 2020
	- [Scalable distributed gate-model quantum computers](https://www.nature.com/articles/s41598-020-76728-5), Nature, 2021

[^NISQ]: Noisy Intermediate-Scale Quantum (NISQ) Computers

	- [Quantum Computing in the NISQ era and beyond](https://arxiv.org/pdf/1801.00862.pdf), John Preskill, July 2018, Institute for Quantum Information and Matter and Walter Burke Institute for Theoretical Physics, California Institute of Technology, Pasadena
	- [We've Entered a New Era in Quantum Computing](https://gizmodo.com/weve-entered-a-new-era-of-quantum-computing-1821807439), Ryan F. Mandelbaum, May 2018, Gizmodo

[^IQT]: In-Q-Tel quantum computing investments

	- [Quantum computer firm Rigetti to go public via $1.5b offering](https://www.globaltimes.cn/page/202110/1235748.shtml?id=11)
	- [Jeff Bezos And The CIA Invest In D-Wave's Quantum Computer](https://www.forbes.com/sites/alexknapp/2012/10/05/jeff-bezos-and-the-cia-invest-in-d-waves-quantum-computer/?sh=2703aa477af4)
	- [In-Q-Tel enters new quantum, synthetic data investments](https://washingtontechnology.com/articles/2020/04/14/inqtel-quantum-data.aspx)


[^ECCTOP]: Top blockchain cryptosystems

	- See: http://ethanfast.com/top-crypto.html
	- Bitcoin, ECDSA (secp256k1): Not quantum secure
	- Ethereum, ECDSA (secp256k1): Not quantum secure
	- Binance Coin, ECDSA: Not quantum secure
	- Tether: Ethereum ERC20 token: Not quantum secure
	- Solana: EdDSA (curve25519): Not quantum secure
	- Cardano: EdDSA (curve25519): Not quantum secure
	- XRP: ECDSA, EdDSA (curve25519, secp256k1): Not quantum secure
	- Polkadot: ECDSA, Schnorr, EdDSA (curve25519, ristretto25519, secp256k1): Not quantum secure
	- Shiba Inu: Ethereum ERC20 token: Not quantum secure

[^COMM]: Commercialization

	- In January 2019, [IBM presented it's first commercial quantum computer](https://www.theinquirer.net/inquirer/news/3068921/ibms-q-system-one-is-the-worlds-first-commercial-quantum-computer). It’s not an exiting step if we’re looking at the technical aspects of this particular quantum computer. 
	- In December 2018, a month earlier [IonQ broke the record for number of Qubits: they announced a 79 qubits quantum computer.](https://www.techspot.com/news/77887-new-type-quantum-computer-has-smashed-every-record.html)

[^AI]: Machine Learning & AI
	- [Google Quantum AI Research Effort](https://ai.google/research/teams/applied-science/quantum-ai/) 

[^IONQ]: IonQ

	- [IonQ Takes Quantum Computing Public With A $2 Billion Deal](https://www.forbes.com/sites/moorinsights/2021/03/23/ionq-takes-quantum-computing-public-with-a-2-billion-deal/?sh=792a37995d06), Forbes, 2021

[^CHEM]: Chemistry & Biology

	- [How Quantum Computing is Enabling Breakthroughs in Chemistry](https://singularityhub.com/2018/11/15/how-quantum-computing-is-enabling-breakthroughs-in-chemistry/#sm.00000bpgtz1n09cnurehf6jeoc88e), Mark Jackson, Nov 2018, Singularity Hub
	- [Trapped-ion quantum computer does chemistry calculations for the first time](https://www.chemistryworld.com/news/trapped-ion-quantum-computer-does-chemistry-calculations-for-the-first-time/3009296.article), Philip Ball, July 2018, The Royal Society of Chemistry

[^QSEC]: Quantum Computing and Security

	- [Addressing the Quantum Computing Threat to Cryptography (ITSE.00.017)](https://cyber.gc.ca/en/guidance/addressing-quantum-computing-threat-cryptography-itse00017)
	- [Chinese Breakthrough in Quantum Computing a Warning for Security Teams](https://threatpost.com/chinese-quantum-computing-warning-security/161935/)
	- [Kudelski Security expands research and advisory services focusing on quantum security](https://www.helpnetsecurity.com/2020/12/07/kudelski-security-quantum-security/)

[^PREPARE]: Industry preparedness

	- [NIST](https://csrc.nist.gov/projects/post-quantum-cryptography)
	- [Cloudflare](https://blog.cloudflare.com/the-tls-post-quantum-experiment/)
	- [Google](https://www.revyuh.com/news/hardware-and-gadgets/google-cloudflare-testing-post-quantum-cryptography/)

[^BANKS]: Quantum Security in Banks

	- [Dutch researchers are developing quantum technology to secure your bank account](https://thenextweb.com/future-of-finance/2019/07/15/quantum-key-distribution-to-secure-bank-account/)
	- [Large US banks up security to get ahead of the quantum threat](https://www.bobsguide.com/guide/news/2019/May/9/large-us-banks-up-security-to-get-ahead-of-the-quantum-threat/)

[^MOSCAT]: Mosca's Theorem

	- [Crypto agility - How to determine your timeline for post-quantum preparation](https://content.hsm.utimaco.com/blog/how-to-determine-your-timeline-for-post-quantum-preparation)

[^TOPTEN]: [Top 10 tech companies by marketcap](https://companiesmarketcap.com/tech/largest-tech-companies-by-market-cap/) and their involvement with quantum computing

    - 2,489 billion: Microsoft. [A scalable, open approach to quantum solutions and development](https://www.microsoft.com/en-us/quantum)
    - 2,476 billion: Apple. No current public move into quantum computing
    - 1,966 billion: Google. [Google confirms ‘quantum supremacy’ breakthrough](https://www.theverge.com/2019/10/23/20928294/google-quantum-supremacy-sycamore-computer-qubit-milestone)
    - 1,707 billion: Amazon. [Amazon Quantum Solutions Lab](https://aws.amazon.com/quantum-solutions-lab/)
    - 1,118 billion: Tesla. No current public move into quantum computing
    - 900 billion: Facebook. No current public move into quantum computing
    - 637 billion: NVIDIA. [GTC21: Nvidia Launches cuQuantum; Dips a Toe in Quantum Computing](https://www.hpcwire.com/2021/04/13/gtc21-nvidia-launches-cuquantum-dips-a-toe-in-quantum-computing/)
    - 589 billion: TSMC. [TSMC to work with Taiwan Govt on Quantum Computer](https://hexus.net/tech/news/cpu/125480-tsmc-work-taiwan-govt-quantum-computer/)
    - 583 billion: Tencent Holdings [Tencent Quantum Lab](https://quantum.tencent.com/en-us/about/)
    - 447 billion: Alibaba [Alibaba puts quantum computing in the public cloud, follows Intel and IBM's lead](https://www.techrepublic.com/article/alibaba-puts-quantum-computing-in-the-public-cloud-follows-intel-and-ibms-lead/)

[^TENCENT]: Tencent

	- [Tencent Quantum Lab](https://quantum.tencent.com/en-us/)

[^TSMC]: TSMC

	- [TSMC is working on creating quantum processors](https://hardwaresfera.com/en/noticias/hardware/tsmc-esta-trabajando-en-la-creacion-de-procesadores-cuanticos/)

[^PSIQUANTUM]: PSIQuantum

	- [psiquantum.com/](https://psiquantum.com/)

[^GLOBALFOUNDRIES]: GlobalFoundries

	- [PsiQuantum and GLOBALFOUNDRIES to Build the World’s First Full-scale Quantum Computer](https://gf.com/press-release/psiquantum-and-globalfoundries-build-worlds-first-full-scale-quantum-computer), 2021

[^ALIBABA]: Alibaba

	- [Alibaba Cloud and CAS Launch One of the World’s Most Powerful Public Quantum Computing Services](https://www.alibabacloud.com/press-room/alibaba-cloud-and-cas-launch-one-of-the-worlds-most), 2018

[^DMYI]: dMY Technology Group III

	- [dMY Technology Group III](https://www.dmytechnology.com/)

[^HONEYWELL]: Honeywell

	- [Achieving Quantum Volume 128 on the Honeywell Quantum Computer](https://www.honeywell.com/us/en/news/2020/09/achieving-quantum-volume-128-on-the-honeywell-quantum-computer)

[^AMAZON]: Amazon

	- [Amazon Quantum Solutions Lab](https://aws.amazon.com/quantum-solutions-lab/)

[^MILLION]: Million qubit initiatives

	- [TQD Exclusive: With Key Partnerships in Place, PsiQuantum Sets Sight on Delivering Commercially Viable 1 Million-Qubit Quantum Computer](https://thequantumdaily.com/2021/06/07/tqd-exclusive-with-key-partnerships-in-place-psiquantum-sets-sight-on-delivering-commercially-viable-1-million-qubit-quantum-computer/)
	- [IBM’s Quantum Race to One Million Qubits](https://www.hpcwire.com/2020/09/15/ibms-quantum-race-to-one-million-qubits/)

[^PACE]: Quantum computing pace of development

	- 2010: **3 qubit** quantum computer calculated the energy spectrum of molecular hydrogen to high precision 
	- 2016: [IBM has **5 qubits** you can work with in a cloud](https://quantumexperience.ng.bluemix.net/qx/experience)
	- 2017: [IBM had a **16 qubit** quantum computer](https://www-03.ibm.com/press/us/en/pressrelease/52403.wss)
	- 2017: [Intel develops a **17-qubit** chip](https://newsroom.intel.com/news/intel-delivers-17-qubit-superconducting-chip-advanced-packaging-qutech/)
	- 2017: [IBM reveals a working **50-qubit** quantum computer that can maintain its quantum state for 90 microseconds](https://www.technologyreview.com/s/609451/ibm-raises-the-bar-with-a-50-qubit-quantum-computer/)
	- 2017: Google announced to have a **51 qubit** quantum computer
	- 2018: [Google announced **72 quits**. From the article “A Preview of Bristlecone, Google’s New Quantum Processor”, March 5, 2018 ](https://research.googleblog.com/2018/03/a-preview-of-bristlecone-googles-new.html)
	- 2018: [Intel announces a new **49-qubit** quantum chip](https://newsroom.intel.com/news/intel-advances-quantum-neuromorphic-computing-research/)
	- 2018: [IonQ has a **79 qubit** quantum computer](https://www.techspot.com/news/77887-new-type-quantum-computer-has-smashed-every-record.html)
	- 2019: [Neven’s law states that quantum computers are improving at a “doubly exponential” rate. If it holds, quantum supremacy is around the corner](https://www.quantamagazine.org/does-nevens-law-describe-quantum-computings-rise-20190618/)
	- 2020: [China Stakes Its Claim to Quantum Supremacy](https://www.wired.com/story/china-stakes-claim-quantum-supremacy/)
	- 2020: [Achieving Quantum Volume 128 on the Honeywell Quantum Computer](https://www.honeywell.com/us/en/news/2020/09/achieving-quantum-volume-128-on-the-honeywell-quantum-computer)
	- 2021: [IBM Advances Quantum Roadmap With **127-Qubit** Eagle Processor](https://www.eetimes.com/ibm-advances-quantum-roadmap-with-127-qubit-eagle-processor/)

[^MATERIALS]: Materials Science

	- [Quantum computer simulates two types of bizarre materials](https://www.sciencenews.org/article/quantum-computer-d-wave-simulations), Emily Conover, August 2018, ScienceNews

[^FINANCE]: Quantum Computing in Finance

	- [Quantum Computing in Finance](https://meetingsandevents.jpmorganchase.com/metron/(medialibrary)/55216dc5-b073-46a4-ad56-76a32f8a1939/meetings/32ade8db-aa6a-4b5a-94e5-e70da0081272/documents/Monday_1230_Colin_W.pdf), Colin P. Williams, D-Wave Systems, 2015

[^USA]: The USA

	- [At Last America is Moving on Quantum](https://www.forbes.com/sites/arthurherman/2018/08/20/at-last-america-is-moving-on-quantum/) - Forbes 
	- [The quantum computing race the US can’t afford to lose](https://thenextweb.com/contributors/2018/09/01/quantum-race-united-states-must-compete/) - TheNextWeb 

[^CA]: Canada's involvement with Quantum Computers

    - [Government of Canada launches public consultations on National Quantum Strategy](https://www.canada.ca/en/innovation-science-economic-development/news/2021/07/government-of-canada-launches-public-consultations-on-national-quantum-strategy.html)

[^IT]: Italy

	- [Italy’s quantum scientists jostle for a superposition](https://www.nature.com/articles/d43978-021-00040-7), Francesco Suman, Nature, 2021

[^RU]: Russia

	- [Russia joins race to make quantum dreams a reality](https://www.nature.com/articles/d41586-019-03855-z)

[^FR]: France

	- [French President Details €1.8b Quantum Plan](https://www.eetimes.eu/french-president-details-e1-8b-quantum-plan/), Anne-Françoise Pelé, EE Times Europe, 2021

[^JP]: Japan

	- [Japan plots 20-year race to quantum computers, chasing US and China](https://asia.nikkei.com/Business/Technology/Japan-plots-20-year-race-to-quantum-computers-chasing-US-and-China), Nikkei Asia, 2019

[^CHINA]: China's involvement with Quantum Computers

    - [Chinese scientists broke a quantum computing record](https://www.abacusnews.com/future-tech/chinese-scientists-broke-quantum-computing-record/article/2155740), Karen Chiu, Jul 2018, abacusnews
    - [The man turning China into a quantum superpower](https://www.technologyreview.com/s/612596/the-man-turning-china-into-a-quantum-superpower/), Martin Giles, December 2018, MIT Technology Review
    - [China is about to pump $10 Billion in a research centre](https://www.nextgov.com/emerging-tech/2018/07/pentagon-seeks-edge-quantum-computing/149718/), Jack Corrigan, July 2018

[^EU]: EU

	- [Quantum Flagship](https://qt.eu/)
	- [Europe’s billion-euro quantum flagship hands out first grants](https://www.sciencemag.org/news/2018/10/europe-s-billion-euro-quantum-flagship-hands-out-first-grants), Edwin Cartlidge, October 2018, Sciencemag

[^UK]: United Kingdom

	- [National Quantum Computing Centre](https://www.nqcc.ac.uk/)

[^GOOGLE]: Google
	- "It should be about 5 years to 1000 qubit chips with superconducting technology. It should be about 10 years to million qubit chips." From the article [A Preview of Bristlecone, Google’s New Quantum Processor](https://www.nextbigfuture.com/2018/06/intel-superconducting-quantum-technology-could-push-to-1000-qubits-by-2023-and-silicon-spin-qubits-to-1-million-qubits-by-2028.html), june 10, 2018 
	- [Google reclaims quantum computer crown with 72 qubit processor](https://thenextweb.com/artificial-intelligence/2018/03/06/google-reclaims-quantum-computer-crown-with-72-qubit-processor/), Tristan Greene, March 2018, TheNextWeb
	- [Google and NASA Tackle Quantum Supremacy](https://www.hpcwire.com/2018/11/06/google-and-nasa-tackle-quantum-supremacy/), John Russel, November 2018, HPC Wire
	- [“And a million-physical-qubit system, whose general computing applications are still difficult to even fathom? It’s conceivable, says Neven, “on the inside of 10 years.”](https://www.technologyreview.com/s/603495/10-breakthrough-technologies-2017-practical-quantum-computers/), Harmut Nevan, Head of Google's quantum computing effort
	- ["Five years from now, we will have a commercial quantum computer"](https://www.barrons.com/articles/microsoft-we-have-the-qubits-you-want-1519434417)
	- [QuantumAI](https://quantumai.google/)

[^IBM]: IBM

	- [IBM believes quantum computers will be mainstream in 5 years](https://www.research.ibm.com/5-in-5/quantum-computing/)
	- [IBM Q Experience](https://quantumexperience.ng.bluemix.net/)
	- [IBM unveils its first commercial quantum computer](https://www.newscientist.com/article/2189909-ibm-unveils-its-first-commercial-quantum-computer/), January 2019, NewScientist

[^MICROSOFT]: Microsoft

	- [Microsoft Empowering the Quantum Revolution](https://www.microsoft.com/en-ca/quantum/)
	- [Here's why Microsoft is 'all-in' on quantum computing](https://www.techrepublic.com/article/heres-why-microsoft-is-all-in-on-quantum-computing/), Laurel Deppen, June 2018, TechRepublic

[^INTEL]: Intel

    - [Intel's New Path to Quantum Computing](https://spectrum.ieee.org/nanoclast/computing/hardware/intels-new-path-to-quantum-computing), Samuel K. Moore and Amy Nordrum, June 2018, IEEE Spectrum
    - [Intel is now capable of producing full silicon wafers of quantum computing chips](https://www.techspot.com/news/75020-intel-now-capable-producing-full-silicon-wafers-quantum.html), Greg Synek, June 2018, Techspot

[^RIGETTI]: Rigetti

    - ["128 qubits in the next 12 months"](https://www.bloomberg.com/news/articles/2018-08-07/quantum-computers-today-aren-t-very-useful-that-could-change), 2018, Bloomberg

[^PRIVATE]: Private documents

	- [In 2014 documents leaked by Edward Snowden confirm the Penetrating Hard Targets project, by which the National Security Agency seeks to develop a quantum computing capability for cryptography purposes.](http://www.kurzweilai.net/nsa-seeks-to-develop-quantum-computer-to-crack-nearly-every-kind-of-encryption)
	- [NSA seeks to build quantum computer that could crack most types of encryption](https://www.washingtonpost.com/world/national-security/nsa-seeks-to-build-quantum-computer-that-could-crack-most-types-of-encryption/2014/01/02/8fff297e-7195-11e3-8def-a33011492df2_story.html?noredirect=on&utm_term=.51c3b147ace4)