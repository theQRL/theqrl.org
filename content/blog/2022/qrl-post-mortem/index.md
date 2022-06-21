---
layout: blog-post
slug: qrl-zero-day-coinbase-exploit-post-mortem
date: 2022-06-21
author: "QRL Core Developers"
title: "QRL zero-day coinbase exploit post-mortem"
summary: "A detailed disclosure of the recent zero-day coinbase exploit and emergency network fork response."
featured_image: header.png
categories:
  - technical
toc: true
---


## Introduction
On 06/02/2022 the QRL network suffered a sophisticated zero-day attack by an adversary using a malformed block containing a second coinbase reward of 25M QRL. This blog will explain in detail how this exploit occurred and how the team and community responded to the QRL's equivalent of the [bitcoin overflow bug](https://en.bitcoin.it/wiki/Value_overflow_incident).

The QRL network is powered by nodes executing fully open source [software](https://github.com/theqrl/) and every function down to a single line of code is visible for all to [inspect](https://github.com/theQRL/QRL/tree/master/src/qrl) and collaborate upon. At the time of writing 58 developers have made 12518 contributions to the core QRL project so far. Security by obscurity is not a concept the open source community support. QRL was created with a completely new codebase and given it is a live financial network this was fully commercially [audited](https://github.com/theQRL/audits/) prior to mainnet release. Being open source means many eyes have examined our codebase and the project has fixed a number of bugs previously (including one critical severity node exploit) prior to their discovery by an adversary.

The nature of development is one of iterative improvement and code hardening - no codebase is perfect or free from attack vectors. As the project gains momentum and grows it should be expected that further attempts to attack or exploit the network should be anticipated and we must as a development team and community remain vigilant.

## Vector of attack

The attacker successfully mines block [2078158](https://explorer.theqrl.org/block/2078158) and it is accepted by the network on June 2nd 1047 UTC. This block is unlike any other since or before as it has a second coinbase [transaction](https://explorer.theqrl.org/tx/14cdf191a03c878a7d1e6c5b507df9f7dc27481f5fa62e0126857eb7c37f3727) contained within it.

{{< image "./images/voa1.png" >}}

All quanta contained in the QRL ledger have existed from the genesis block. Miners who mint blocks are rewarded with QRL via a coinbase transaction which moves quanta from a special source address `Q0000000000000000000000000000000000000000000000000000000000000000` to the miner QRL address. QRL is unusual in that rather than this taking place in the blockheader, the coinbase reward is a special transaction in the block which does not require a signature. The source address contains all quanta which may ever be mined and this is currently approximately 28.65M of the 105M eventual total supply of the ledger.

For a node to accept a newly mined block it must be valid. To pass `block validation` each node performs a series of verification tests on the block and contents to confirm correctness. It must build upon the previous block successfully. The `state` must be absolutely correct. The `block header` calculations must be correct. The block reward in the coinbase transaction must calculated correctly and the coinbase transaction must have the correct [`nonce`](https://en.wikipedia.org/wiki/Cryptographic_nonce) for the block number.

{{< image "./images/voa2.png" >}}

All transactions in the block must contain a valid XMSS signature and pass state checks successfully.

The attacker realised that whilst the above is true, that there was a subtle oversight in the core block validation code. Where the coinbase transaction is validated for [correctness](https://github.com/theQRL/QRL/blob/1bbd78d5ccdd8ce1a3aea50b995dccfb5a74955a/src/qrl/core/Block.py#L215), this took place under the assumption it was always the first transaction in the block.


{{< image "./images/voa3.png" >}}


This created a possibility to create one (or more) further `coinbase` transactions in the block which did not undergo full validation and would be accepted as valid as long as they shared the correct `nonce` with the authentic coinbase transaction.

{{< image "./images/voa4.png" >}}


The attacker took advantage of that vulnerability to drain 25M quanta from the source address. 


## Incident response summary

A detailed event timeline can be found at the end of the blog.

On June 2nd 1653 UTC, a member of the core team was alerted to block [2078158](https://explorer.theqrl.org/block/2078158) by a community member. At 1707 UTC, after a preliminary investigation, a zero-day exploit was declared internally by the core team. Following responsible disclosure by 1717 UTC, exchanges had been notified to halt deposits and withdrawals. 

At 1808 UTC, the core development team had reproduced the exploit and by 1811 UTC, a potential code fix identified. Social media and all known public QRL discussion fora were then monitored for any discussion of the coinbase exploit 'in the wild'. Several 'all hands' teams meetings took place to brainstorm the ~~best~~ least worst path forward. A decision was taken to keep the exploit private for as long as possible until the attacker's funds were frozen and the vulnerability closed. By 0036 UTC the network was secure and an emergency node upgrade recommendation was made to miners at 0220 UTC, immediately after a new QRL node version was merged on github. 

This public action alerted the attacker who then made a failed attempt to move 1.88M quanta immediately to another address. Coincidentally at almost exactly the same time discussion of a possible exploit surfaced in discord. Over the following hours major mining pools and users upgraded to QRL node 4.0.0 and the crisis passed. The attacker made contact on discord with the community and then later with the team directly via an email exchange (`security@theqrl.org`) where proof of control of the attacker address was disclosed. 

In total, 322.9 quanta were lost to the attacker via deposits on Cointiger. 

## The fix

After identifying the vulnerability, it was relatively straightforward to write a code patch to prevent the exploit from occurring again. 

To correct the critical vulnerability a simple block validation check was [added](https://github.com/theQRL/QRL/blob/1bbd78d5ccdd8ce1a3aea50b995dccfb5a74955a/src/qrl/core/Block.py#L218) to confirm there is only a single authentic`coinbase` transaction present in the block.

{{< image "./images/tf1.png" >}}

 
Next came a discussion within the team about how to rectify the damage to the ledger and network - at this stage the attacker still had means to repeat the exploit and mint new fraudulent blocks and move 25M quanta at will. One possibility included halting the chain and rolling back to block 2078157 to erase the attacker block entirely then formally restarting the chain with all nodes using a new QRL node release. This was ultimately decided against as the attack block 2079158 was already buried hundreds of blocks deep from current blockheight at the time of discovery. Whilst no user transactions would have been lost or at risk (they would simply have re-entered the network memory pool and been reconfirmed in a different block upon chain restart), halting the chain seemed more damaging than the approach taken and raised the possibility of miner OTS reuse. 

Instead, a different approach was taken which allowed the chain to run uninterrupted and prevented the attacker either moving funds or creating further attack blocks whilst the community and mining pools answered a clarion call to perform an emergency node upgrade. 

In communication with trusted community members the team spun up a new mining node and pool using an as yet non-public QRL node patched to reject blocks containing the coinbase transaction exploit, but also with a new state update which explicitly reduced the attackers QRL address `Q010600fcd0db869d2e1b17b452bdf9848f6fe8c74ee5b8f935408cc558c601fb69eb553fa916a1` balance to 0, and restored all but 322.9 quanta of the 25M to the source address. Sufficient hashpower was deployed to ensure that for a few hours the new mining pool would prevent any coinbase attack block from another miner or a block containing transactions from the attacker's QRL address from persisting in a winning fork. Around this time discord members became aware of a large jump in hashpower backing the network and it was incorrectly theorised the QRL was under a malicious 51% attack - actually the network was being salvaged from a serious ongoing attack earlier in the day.

A new qrl node version [release v4.0.0](https://github.com/theQRL/QRL/releases/tag/v4.0.0) was then released publicly via github and community members and miners were urged to upgrade. This latest release automatically disconnected older versions from the network at blockheight 2081680, which was [2880](https://github.com/theQRL/QRL/blob/1bbd78d5ccdd8ce1a3aea50b995dccfb5a74955a/src/qrl/core/config.py#L315) blocks after the latest fork update. Once published the attacker resurfaced and immediately attempted to move 1.88M quanta to `Q010600d1a7f0e79d1b9db38f501b79c16cbb91c7cdb50ff9e3c4ace38137d1690cbd6b12313f35.` This transaction failed to confirm on the main chain and was eventually dropped from the network memory pool. As blockheight 2081680 was reached the core team finally considered the `coinbase exploit` attack vector neutralised. 


## The aftermath

It was a humbling experience after 4 years without any major public exploit to suddenly be forced to respond to an existential vulnerability. As a team we worked well under immense pressure and time constraints to formulate and execute a response plan successfully. A highly responsive and engaged mining community and community members helped the emergency upgrade of the network to succeed. 

It is worth pointing out that further delay in identification of the exploit or an earlier attempt to move significant funds by the attacker could have lead to a far worse outcome. We are most grateful to JohnTitor for his thoughtful report to the core team. 

To better prepare for future eventualities the team has extended our devops processes to include realtime monitoring of unusual network behaviour (penned the 'blockwatcher' internally). Funds were lost in this episode (approximately 65 dollars worth of quanta). As a project we firmly believe in responsible disclosure of software vulnerabilities, and have and will continue to collaborate with security professionals adhering to established white-hat responsible disclosure principles through [security@theqrl.org](mailto:security@theqrl.org) [[PGP/GPG]](https://github.com/theQRL/security/). 

## Timeline

1. June 2nd, 1047 UTC: Double [25m coinbase transaction created](https://explorer.theqrl.org/tx/14cdf191a03c878a7d1e6c5b507df9f7dc27481f5fa62e0126857eb7c37f3727).
    - June 2nd, 1408 UTC: [6.25 QRL sent to exchange](https://explorer.theqrl.org/tx/f6b4f19aec9e3ad269f10ed3d99e55d50fffc3e7d40266432801c245409d31dd).
    - June 2nd, 1459 UTC: [32.15 QRL sent to exchange](https://explorer.theqrl.org/tx/21ad8b5c082a0146626506f3f47bc51f38caf2ed8f403f6f22f60a36d9e40532).
    - June 2nd, 1825 UTC: [132.25 QRL sent to exchange](https://explorer.theqrl.org/tx/8c74e712dfe34080154b6a22341f95316c44af90df10c07a96deb96ed107e599).
    - June 2nd, 1905 UTC: [152.25 QRL sent to exchange](https://explorer.theqrl.org/tx/d4af9db09a6d8a24f7fb10948818f51f9cfec2e9df3d2c083b9d6bdda38b6a74).
2. June 2nd, 1637 UTC: JohnTitor posted a message concerning a suspicious [address](https://explorer.theqrl.org/a/Q010600fcd0db869d2e1b17b452bdf9848f6fe8c74ee5b8f935408cc558c601fb69eb553fa916a1) in the private QRL moderator chat.
3. June 2nd, 1653 UTC: Message seen by team member a preliminary investigation done.
4. June 2nd, 1655 UTC: Escalated to the team chat.
5. June 2nd, 1707 UTC: Exploit confirmed.
6. June 2nd, 1713 UTC: Bittrex notified and recommended to pause deposits
7. June 2nd, 1717 UTC: Cointiger notified and recommended to pause deposits
8. June 2nd, 1723 UTC: Social network monitoring setup to identify detection in the wild (Twitter: 3 keywords, Discord: 11 servers, Telegram: 4 channels)
9. June 2nd, 17:31 UTC: All hands meeting
    - Established that: 
        - Announcing early would give the time for exploiter to move funds.
        - Social network monitoring needed to be setup to track coverage in the wild.
    - Discussed a few potential fixes.
10. June 2nd, 1808 UTC: Exploit replicated in devnet. Development Meeting held
11. June 2nd, 1811 UTC: Fix identified and patch work commenced.
12. June 2nd, 1946 UTC: Recovery plan decided on and commenced.
13. June 2nd, 2316 UTC: Received node update with fix to apply to pool.
14. June 3rd, 2322 UTC: Updated pool with latest node update.
15. June 3rd, 0036 UTC: Hashrate increased to node with new code.
16. June 3rd, 0125 UTC: Pull request opened for [Bug Fix + Added Unit Test](https://github.com/theQRL/QRL/pull/1748) to theQRL/QRL:dev
17. June 3rd, 0202 UTC: Pull request merged for [Bug Fix + Added Unit Test](https://github.com/theQRL/QRL/pull/1748) to theQRL/QRL:dev
18. June 3rd, 0205 UTC: Clarion call for pools to update nodes (slightly early).
19. June 3rd, 0220 UTC: Pull request opened for [Merged Dev](https://github.com/theQRL/QRL/pull/1749) from theQRL/QRL:dev to theQRL/QRL:master
20. June 3rd, 0220 UTC: Pull request merged for [Merged Dev](https://github.com/theQRL/QRL/pull/1749) from theQRL/QRL:dev to theQRL/QRL:master
21. June 3rd, 0220 UTC: Exploiter tried to transfer [1,889,552.44 Quanta to Q010600d1a7f0e79d1b9db38f501b79c16cbb91c7cdb50ff9e3c4ace38137d1690cbd6b12313f35](/img/blogs/2022/qrl-post-mortem/images/1p8m.png)
22. June 3rd, 0229 UTC: [New release published v4.0.0](https://github.com/theQRL/QRL/releases/tag/v4.0.0)
23. June 3rd, 0247 UTC: Push for pools to update nodes.
24. June 3rd, 0923 UTC: Exploiter messages the community.
25. June 3rd, 0955 UTC: First contact between the exploiter and a team member.
26. June 3rd, 1005 UTC: Exploiter referred to security@theqrl.org and dialogue continued there.
