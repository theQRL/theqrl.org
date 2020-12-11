---
layout: blog-post
slug: new-qrl-website-and-logo-refresh-in-celebration-of-nists-approval-of-xmss
date: 2020-12-11
author: "Jack Matier"
title: "In celebration of NIST's approval of the XMSS signature scheme, we are proud to present a website and logo refresh."
subtitle: "Today, in celebration of NIST's approval of the XMSS signature scheme, we are proud to present a website and logo refresh"
featured_image: ann.banner.png
images:
  - ann.banner.png
  - logorefresh.png
categories:
  - technical
features:
  - enqlave
---

## A look at NIST's approval of the XMSS signature scheme 

On **October 29th, 2020**, The National Institute of Science and Technology (NIST) announced the release of Special Publication (SP) 800-208, aptly titled "[Recommendation for Stateful Hash-Based Signature Schemes](https://csrc.nist.gov/publications/detail/sp/800-208/final)". 

[XMSS](https://tools.ietf.org/html/rfc8391) is a big part of that recommendation, which the Quantum Resistant Ledger (QRL) foresaw by outlining in their [QRL whitepaper](https://github.com/theQRL/Whitepaper/blob/master/QRL_whitepaper.pdf) and bringing their first testnet node online in 2016, *four years ago*, after discussions with developers, post-quantum cryptographers, and research into the existing roadmap of blockchain technology. Along with this, a core technical team with members that includes core blockchain developer [Kaushal Kumar Singh](/team/kaushal), PhD post-quantum cryptographer [Leon Groot Bruinderink](/team/leon/), and full-stack developer [JP Lomas](/team/jp) was assembled. 

Fast forward to **June 2018**, *and after 2 years of testing*, [mainnet (actinium) was released](https://qrl.foundation/assets/QRLF-PR-20180626.pdf). **This foresight and focus on unparalleled security would cement QRL as a blockchain for visionaries, academics, and enterprises alike.**

Outside of the blockchain space, QRL wasn't alone in recognizing XMSS's capabilities. [PQ-CRYPTO](https://pqcrypto.org/), a consortium lead by a steering committee of post-quantum cryptographers such as Daniel J. Bernstein and Tanja Lange, also recognized this, recommending [XMSS as part of their initial recommendations as far back as 2015](https://pqcrypto.eu.org/docs/initial-recommendations.pdf). 

The reasoning for XMSS was multi-fold. First, hash-based cryptosystems are really old, dating back as far as 1979, so are well understood from an implementation perspective. We know how they tick, how to integrate them successfully and what to look for from a security standpoint. *Secondly*, the primitives that XMSS are built from are minimal and well understood as being post-quantum secure. These things makes XMSS the [first provably (forward) secure and  practical  signature  scheme  with  minimal  security  requirements](https://eprint.iacr.org/2011/484.pdf). 

Finally, XMSS is a *stateful* signature scheme, and the blockchain is too, making the fit natural - though no small feat!

{{< twitter "1323800175219888129" >}}

## Why Acknowledge the threat? Quantum computing is not just coming, but accelerating as well

As quantum computing presents revolutionary opportunities for AI[^AI], chemistry[^CHEM], materials science[^MATERIALS], finance[^FINANCE], security[^QSEC], and more, the USA[^USA], China[^CHINA], EU[^EU] and other nation states are investing heavily into quantum computing. Beyond that, 8 out of the top 10 tech giants (by marketshare)[^TOPTEN] such as Google[^GOOGLE], IBM[^IBM], Intel[^INTEL], Rigetti[^RIGETTI] and Microsoft[^MICROSOFT] are already competing for market dominance. Needless to say, quantum computing is finally on the verge of becoming commercially useful[^COMM][^NISQ] and are being developed at an accelerating pace[^PACE]. The takeaway here is that this is real, and it presents exciting opportunities, but also important precautions that we should be taking.

### And blockchain needs to be ready, early. Period.

The National Institute of Science and Technology (NIST), along with Cloudflare, QRL, and others are preparing in advance[^PREPARE]. 

Banks are preparing as well[^BANKS], and most services you use have the benefit of being centralized, leading to fast migrations in the case of a [black swan](https://en.wikipedia.org/wiki/Black_swan_theory) event. To put it as a simple metaphor, banks have the keys to their users assets, and can update everyones keys in a weekend. With blockchain, everyone has their own set of keys that will need updating individually, and that will take **years**.

**All things considered, it's not likely to be an easy migration**. A closer look at difficulties can be found in our recent video "No! You can't just Quantum Soft fork Bitcoin! Or can you???"

{{< youtube "cbP2ejgSxcA" >}}

**Risk tolerance, and opportunity, needs to be considered as well.** Even if quantum computers can't break the cryptography of Bitcoin, Ethereum, and other alt coins as they exist today, *it will be able to break it someday*, and it's important to apply Mosca's Theorem[^MOSCAT] and work backwards. That is, **If it takes 10 years for people to migrate, then blockchain systems need to be ready 10 years before quantum computers can break things**, and that's not including the time to develop and reach consensus. The paper, "[Quantum Attacks on Bitcoin and How to Protect Against them](https://arxiv.org/pdf/1710.10377.pdf)", models that it could be as early as 2027. 

Other models exist, such as one created by a QRL Community member.

{{< twitter "1159125977387208704" >}}

**Bottom line is, with a total marketcap of over $500 Billion as of this post and something most of us wish to be much higher, risk tolerances needs to be much lower and security needs to be paramount.**

At QRL, we're not willing to wait around.

## Introducing project enQlave: Securing Ethereum Crypto Assets and Saving Blockchain

Outside of the threat of governments, Quantum Computing remains as the second biggest perceived risk to Bitcoin.

{{< twitter "1336980583201861638" >}}

The Quantum Resistant Ledger is ready, today.

For the rest of the blockchain space, earlier this year we announced [enQlave: The quantum safe for your crypto assets](https://enqlave.io), an initiative that integrates the XMSS signature scheme and our experience to help protect any users digital assets of any blockchain with expressive enough smart contracts. The blockchain we're starting with is Ethereum, and when Ethereum 2.0 enables expressive enough smart contracts (like we're sure they will), then Ethereum 2.0 as well.

This will be possible through a simple UI using a non-custodial hybrid post-quantum secure multisig Ethereum wallet. EnQlave is complete and is presently under an audit through [x41 D-Sec](https://www.x41-dsec.de/), though will undergoing further improvements before release. Be sure to check out our [introduction](/blog/enqlave-the-quantum-safe-for-your-crypto-assets) post or a [deeper dive](/blog/the-qrl-enqlave-project-bringing-post-quantum-security-to-ethereum-and-other-blockchain-platforms)

While enQlave will allow people to protect their Ethereum digital assets from the quantum threat, **the most efficient and complete ecosystem built from the ground up with security as a foundation will always be QRL.**

## Enter the Quantum Resistant Ledger: A feature rich visionary blockchain for digital asset security with continuous progress. 

**With a quantum secure foundation**, mainnet (actinium) was completed with a full suite of functionality that has formed the bedrock for additional features down the road. That included:

- A 100% post-quantum secure address space
- GUI wallets for [Mac, Windows, and Linux](/Downloads)
- Quantum Resistant Tokens (QRT’s)
- Quantum Resistant Notarisation, and
- [Crypto-agility](https://en.wikipedia.org/wiki/Crypto-agility) with an extensible address format

This year QRL has seen the release of **Bromine**, which added:

- Quantum Secure Multi-signature addresses & transactions
- Ephemeral Messaging LatticeTX - Project Mercury
- An upgraded consensus protocol to RandomX

And looking ahead, future forks such as **Cesium** and **Dysprosium** are slated to include:

- Full Ephemeral Messaging System functionality
- Proof-of-Stake, and
- Smart Contracts

Where we've been and where we're heading can be seen on [our refreshed roadmap page](/roadmap), and none of this would be possible without the support [of open-source contributors from our community](/#contributors). As of the date of this post, we've had a total of **8540** contributions between **48** contributors over **29** public MIT open-sourced repositories.

### The refresh

{{< image "./images/newbrand.png" >}}

For our branding and refresh, we worked closely with [cryptogang](https://cryptogang.agency/), a design agency that specializes in defining the design brand and identity of blockchain projects. We'd say the results speak for themselves.

For media/press outlets, *or for some inspired creativity*, our new [Press Kit](/presskit) page is an easy place to quickly grab these QRL brand assets.

We hope you enjoy the update.

## Stay informed with our QRL newsletter

With the launch of the new website, we're bringing back our QRL email newsletter. To abide by GDPR regulations, we need those of you that subscribed to our previous newsletter to re-optin so we can have consent. 

If you haven't done so already, be sure to [subscribe to stay informed on the latest QRL news](/#subscribe).

## References

[^NISQ]: Noisy Intermediate-Scale Quantum (NISQ) Computers

	- [Quantum Computing in the NISQ era and beyond](https://arxiv.org/pdf/1801.00862.pdf), John Preskill, July 2018, Institute for Quantum Information and Matter and Walter Burke Institute for Theoretical Physics, California Institute of Technology, Pasadena
	- [We've Entered a New Era in Quantum Computing](https://gizmodo.com/weve-entered-a-new-era-of-quantum-computing-1821807439), Ryan F. Mandelbaum, May 2018, Gizmodo

[^COMM]: Commercialization

	- In January 2019, [IBM presented it's first commercial quantum computer](https://www.theinquirer.net/inquirer/news/3068921/ibms-q-system-one-is-the-worlds-first-commercial-quantum-computer). It’s not an exiting step if we’re looking at the technical aspects of this particular quantum computer. 
	- In December 2018, a month earlier [IonQ broke the record for number of Qubits: they announced a 79 qubits quantum computer.](https://www.techspot.com/news/77887-new-type-quantum-computer-has-smashed-every-record.html)

[^AI]: Machine Learning & AI
	- [Google Quantum AI Research Effort](https://ai.google/research/teams/applied-science/quantum-ai/) 

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

[^TOPTEN]: TOP 10 tech companies by marketcap and their into Quantum Computing

	- 1100 billion: Apple (No current move into quantum computing)
	- 962 billion: Amazon [Amazon Quantum Solutions Lab](https://aws.amazon.com/quantum-solutions-lab/)
	- 883 billion: Microsoft [A scalable, open approach to quantum solutions and development](https://www.microsoft.com/en-us/quantum)
	- 839 billion: Google [Google confirms ‘quantum supremacy’ breakthrough](https://www.theverge.com/2019/10/23/20928294/google-quantum-supremacy-sycamore-computer-qubit-milestone)
	- 460 billion: Facebook (No current move into quantum computing)
	- 412 billion: Alibaba [Alibaba puts quantum computing in the public cloud, follows Intel and IBM's lead](https://www.techrepublic.com/article/alibaba-puts-quantum-computing-in-the-public-cloud-follows-intel-and-ibms-lead/)
	- 383 billion: Tencent Holdings [Tencent Quantum Lab](https://quantum.tencent.com/en-us/about/)
	- 297 billion: Samsung Electronics [Samsung to work with IBM on quantum computing](https://www.sammobile.com/2017/12/14/samsung-work-ibm-quantum-computing/)
	- 224 billion: Cisco [Why network engineers should care about Quantum technology](hhttps://gblogs.cisco.com/uki/why-network-engineers-should-care-about-quantum-technology/)
	- 222 billion: Intel [Quantum computing is emerging from the theoretical realm towards real-world systems.](https://www.intel.com/content/www/us/en/research/quantum-computing.html)

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


[^MATERIALS]: Materials Science

	- [Quantum computer simulates two types of bizarre materials](https://www.sciencenews.org/article/quantum-computer-d-wave-simulations), Emily Conover, August 2018, ScienceNews

[^FINANCE]: Quantum Computing in Finance

	- [Quantum Computing in Finance](https://meetingsandevents.jpmorganchase.com/metron/(medialibrary)/55216dc5-b073-46a4-ad56-76a32f8a1939/meetings/32ade8db-aa6a-4b5a-94e5-e70da0081272/documents/Monday_1230_Colin_W.pdf), Colin P. Williams, D-Wave Systems, 2015

[^USA]: The USA

	- [At Last America is Moving on Quantum](https://www.forbes.com/sites/arthurherman/2018/08/20/at-last-america-is-moving-on-quantum/) - Forbes 
	- [The quantum computing race the US can’t afford to lose](https://thenextweb.com/contributors/2018/09/01/quantum-race-united-states-must-compete/) - TheNextWeb 

[^CHINA]: China

	- [Chinese scientists broke a quantum computing record](https://www.abacusnews.com/future-tech/chinese-scientists-broke-quantum-computing-record/article/2155740), Karen Chiu, Jul 2018, abacusnews
	- [The man turning China into a quantum superpower](https://www.technologyreview.com/s/612596/the-man-turning-china-into-a-quantum-superpower/), Martin Giles, December 2018, MIT Technology Review
	- [China is about to pump $10 Billion in a research centre](https://www.nextgov.com/emerging-tech/2018/07/pentagon-seeks-edge-quantum-computing/149718/), Jack Corrigan, July 2018

[^EU]: EU

	- [Quantum Flagship](https://qt.eu/)
	- [Europe’s billion-euro quantum flagship hands out first grants](https://www.sciencemag.org/news/2018/10/europe-s-billion-euro-quantum-flagship-hands-out-first-grants), Edwin Cartlidge, October 2018, Sciencemag

[^GOOGLE]: Google
	- "It should be about 5 years to 1000 qubit chips with superconducting technology. It should be about 10 years to million qubit chips." From the article [A Preview of Bristlecone, Google’s New Quantum Processor](https://www.nextbigfuture.com/2018/06/intel-superconducting-quantum-technology-could-push-to-1000-qubits-by-2023-and-silicon-spin-qubits-to-1-million-qubits-by-2028.html), june 10, 2018 
	- [Google reclaims quantum computer crown with 72 qubit processor](https://thenextweb.com/artificial-intelligence/2018/03/06/google-reclaims-quantum-computer-crown-with-72-qubit-processor/), Tristan Greene, March 2018, TheNextWeb
	- [Google and NASA Tackle Quantum Supremacy](https://www.hpcwire.com/2018/11/06/google-and-nasa-tackle-quantum-supremacy/), John Russel, November 2018, HPC Wire
	- [“And a million-physical-qubit system, whose general computing applications are still difficult to even fathom? It’s conceivable, says Neven, “on the inside of 10 years.”](https://www.technologyreview.com/s/603495/10-breakthrough-technologies-2017-practical-quantum-computers/), Harmut Nevan, Head of Google's quantum computing effort
	- ["Five years from now, we will have a commercial quantum computer"](https://www.barrons.com/articles/microsoft-we-have-the-qubits-you-want-1519434417)

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