---
layout: blog-post
slug: the-qrl-foundation-joins-forces-with-the-league-of-entropy
date: 2020-12-18
author: "Jack Matier"
title: "The QRL Foundation joins forces with the League of Entropy"
summary: "The QRL Foundation is happy to join forces with the League of Entropy, a consortium of global organisations and individual members such as CloudFlare, Kudelski Security, Protocol Labs, and the Ethereum Foundation to create heroic high availability, unpredictable, unbiased, and verifiable randomness"
subtitle: "The QRL Foundation is happy to join forces with the League of Entropy, a consortium of global organisations and individual members such as CloudFlare, Kudelski Security, Protocol Labs, and the Ethereum Foundation to create heroic high availability, unpredictable, unbiased, and verifiable randomness"
featured_image: qrl.loe.png
images:
  - loelogo.png
  - loemembers.png
categories:
  - advocacy
---

## Understanding the importance of randomness and entropy

**Randomness** is defined as the lack of pattern or predictability[^RANDEF]. It is used in everything from light entertainment such as the act of shuffling in card games to more serious cryptographic systems[^CRYPTO]. **Entropy** (in cryptography) is fundamentally the *measurement* of randomness[^ENTROPY] where more is better. Card dealers increase the entropy of a deck with proper shuffling technique often with multiple rounds. 

Simple enough right? *Unfortunately* it's possible for things to *appear* random which actually aren't. Poor shuffling technique can lead to very probabilistic results that might seem random at first glance, for example. Magicians take this a step further and use purely [deterministic shuffling](https://www.gcsu.edu/sites/files/page-assets/node-808/attachments/amason.pdf), leaving spectators in awe.

{{< youtube "T8JH-TRo3oE" >}}

While entertaining in a magic performance, having things not be truly random can be catastrophic for **cryptographic systems**. Lack of availability, unpredictability, unbiasability, and verifiability continues to be a major source of exploits[^EXPLOITS] to this day. This problem is notoriously complex and is the subject of a lot of research[^RESEARCH] along with innovative and interesting solutions, such as CloudFlare's [LavaRand](https://blog.cloudflare.com/lavarand-in-production-the-nitty-gritty-technical-details/). 

{{< youtube "1cUUfMeOijg" >}}

*Unfortunately*, while CloudFlare's LavaRand and other similar projects creates sufficiently high entropy, the setup costs are high, and the nature of them being centralized makes it vulnerable to manipulation from insiders. Similar to how magicians can use deterministic shuffling to manipulate card decks without anyone (else) realizing it, it's possible to manipulate the source, and therefore gain an advantage in cryptographic systems. This type of attack isn't just hypothetical but has already happened such as in the [IOWA lottery fraud mystery](https://www.nytimes.com/interactive/2018/05/03/magazine/money-issue-iowa-lottery-fraud-mystery.html). 

Work on a system to create a public randomness beacon with these attributes goes back to over a decade ago in the [DEDIS](https://dedis.ch) lab at [EPFL](https://epfl.ch) and resulted in a project called drand (for *distributed* randomness)[^DRANDORIGIN]. [Drand](https://drand.love/) is able to generate verifiable, unpredictable and unbiased random numbers as a service in a very simple and efficient manner and to deliver it in a reliable way to the client. This later gave birth to…

{{< image "./images/loelogo.png" >}}

## Joining The League of Entropy


To celebrate [Crypto Week 2019](https://blog.cloudflare.com/welcome-to-crypto-week-2019/), [CloudFlare](https://www.cloudflare.com/) started the [League of Entropy](https://www.cloudflare.com/leagueofentropy/) consisting of a consortium of global organizations and individual members providing randomness beacons on drands mainnet network for a high availability, unpredictable, unbiased, and verifiable randomness - the golden standard. 

> **[The QRL Foundation is happy to have now joined the League of Entropy, with the mainnet ceremony into drands mainnet earlier this week!](https://drand.statuspage.io/incidents/vg3ply09kykp)**

Other heroic members of randomness includes Cloudflare, École polytechnique fédérale de Lausanne (EPFL), University of Chile, Kudelski Security, Protocol Labs, ChainSafe, cLabs, C4DT, Emerald Onion, Ethereum Foundation, IC3, PTisp, Tierion, and UCL.

{{< image "./images/loemembers2.png" >}}

### How QRL Generates Entropy

Each node first generates a long-term public/private key pair. Then all of the public keys are written to a group file together with some further metadata required to operate the beacon. After this group file has been distributed, the nodes perform a distributed key generation (DKG) protocol to create the collective public key and one private key share per server. The participants NEVER see/use the actual (distributed) private key explicitly but instead utilize their respective private key shares for the generation of public randomness.

After the setup, the nodes switch to the randomness generation mode. Any of the nodes can initiate a randomness generation round by broadcasting a message which all the other participants sign using a t-of-n threshold version of the Boneh-Lynn-Shacham (BLS) signature scheme and their respective private key shares. Once any node (or third-party observer) has gathered t partial signatures, it can reconstruct the full BLS signature (using Lagrange interpolation). The signature is then hashed using SHA-256 to ensure that there is no bias in the byte representation of the final output. This hash corresponds to the collective random value and can be verified against the collective public key.


## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](https://discord.gg/jBT6BEp), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)

[^RANDEF]: Randomness

	- ["Proceeding, made, or occurring without definite aim, reason, or pattern" - dictionary.com](https://www.dictionary.com/browse/randomness)
	- ["The quality or state of being or seeming random (as in lacking or seeming to lack a definite plan, purpose, or pattern)" - merriam-webster](https://www.merriam-webster.com/dictionary/randomness)

[^CRYPTO]: [Randomness in Cryptography - IEEE](https://www.computer.org/csdl/magazine/sp/2006/02/j2064/13rRUy0qnEr)

[^RESEARCH]: Research

	- [Cryptographic Randomness Testing of Block Ciphers and Hash Functions.](https://www.academia.edu/download/41255881/Cryptographic_Randomness_Testing_of_Bloc20160115-16116-ln48kn.pdf)
	- [Randomness recommendations for security](https://www.hjp.at/doc/rfc/rfc1750.html)
	- [On the (im) possibility of cryptography with imperfect randomness](https://ieeexplore.ieee.org/abstract/document/1366239/)
	- [When Good Randomness Goes Bad: Virtual Machine Reset Vulnerabilities and Hedging Deployed Cryptography.](http://pages.cs.wisc.edu/~rist/papers/sslhedge.pdf)

[^DRANDORIGIN]: [Origins of drand](https://drand.love/about/#origins-of-drand)

[^ENTROPY]: [Formally Assessing Cryptographic Entropy](https://eprint.iacr.org/2011/659.pdf)

[^EXPLOITS]: [Discovered entropy vulnerabilities](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=entropy)