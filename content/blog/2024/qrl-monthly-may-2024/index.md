---
layout: blog-post
slug: qrl-monthly-may-2024
date: 2024-06-01
author: "The QRL Core Contributors"
title: "QRL Monthly, May 2024"
summary: "The Quantum Resistant Ledger team showcased their pioneering, post-quantum secure blockchain technology at the Consensus conference in Austin, TX, earning high praise for their engaging booth, informative brochures, and distinctive setup."
featured_image: header.png
toc: true
---

## Feature: Consensus 2024 by Coindesk

This year’s Consensus 2024 conference in Austin, Texas by Coindesk, was a hive of innovation and forward-thinking, but one booth in particular stood out from the rest: the Quantum Resistant Ledger (QRL). As the only project equipped with provably post-quantum secure technology, using government-grade cryptography (XMSS), QRL drew crowds eager to glimpse into the future of blockchain security.


The team representing QRL at Consensus was nothing short of stellar, bringing expertise and passion to the forefront. Attendees had the pleasure of meeting:

- Iain Wood: Operational Manager
- James Gordon: Developer / Documentation
- Ryan Malinowski: Director of Advocacy
- Jack Matier: Director of Communications
- Michael Strike: Director of Outreach

Throughout the three-day Consensus conference, it was clear that most attendees recognized the quantum threat, and through our materials and discussions, we heightened their awareness of its immediate implications.

### QRL Show Live Episode from Consensus 📽️ 🔐 💻

QRL Show co-hosts Ryan and Michael from the QRL core team filmed a full in-person episode while at Consensus in Austin, TX.

In this episode, they cover:

- The sentiment of others in the space from individuals up to large institutions
- What people should be doing about the quantum threat, expert timelines, etc
- How is the cryptography QRL uses post-quantum secure?
- How quantum computing will impact every industry
- Where’s a best place to start for those interested in post-quantum securing their digital assets (Shor’s Algorithm, factorization, public/private keys).

You don’t want to miss this episode…you can check the episode out in full below

{{< youtube 3GZas_LRTMM >}}

### In case you missed some of our Tweets/X's

{{< twitter user="QRLedger" id="1798777513289887965" >}}

{{< twitter user="QRLedger" id="1797687150915522754" >}}


### What's next?

We're not stopping at Consensus 2024 by Consensus. As the Quantum Resistant Ledger (QRL) continues to make strides in blockchain security, the team is gearing up to attending a series of engaging and informative events.

## QRL Zond Development

For the month of May, significant progress has been made across various facets of our project. Our development team is currently implementing the JavaScript functions for XMSS sign and verification. Extensive code reviews are underway focusing on crucial components such as attestor verification and processing, state management, initial sync, epoch transitions, as well as the logic for validators' rewards and penalties.

We've successfully completed the [TrueBlocks](https://trueblocks.io/) fork indexing and are now validating and testing its integration with the explorer to ensure seamless functionality. On the front-end, maintenance updates have been applied to the zond-explorer and zond-wallet alpha releases, and the zond-wallet Progressive Web App (PWA) build is progressing well.

On the tooling side, experimental work is ongoing with the dilithium5 CLI tool, aimed at improving command-line operations. Furthermore, we've tackled several code reviews including the processes for withdrawal, proposer and attestor slashing, and rewards and penalties for validators.

Significant changes are also being applied to our web3.js to sync with the latest developments in Zond. Continuous reviews and updates are being made to improve the state and initial sync code, the epoch transition code, and the logic for rewards and penalties during each epoch.

Stay tuned for more updates as we continue to push the boundaries of what's possible in blockchain technology!

## Development changelog

> Note that this changelog represents the pull requests from the our main [organization repository](https://github.com/theQRL/), but don't reflect the work performed in each developers local repos that haven't been committed.

### theQRL/go-qrllib

**[fix: :safety_vest: Safety check for logW value](https://github.com/theQRL/go-qrllib/pull/30)**
			
- [[a99b6](https://github.com/theQRL/go-qrllib/commit/7acdd9b74bf36252f7bbec3aa0220e7d133a99b6)] fix: checks if logW is 2,4 or 8		

### theQRL/theqrl.org

**[NFC tag hunt](https://github.com/theQRL/theqrl.org/pull/418)**
			
- [[abad5](https://github.com/theQRL/theqrl.org/commit/77956115bed04c1373fee1104f9c7481c0babad5)] NFC tag hunt		
- [[ad638](https://github.com/theQRL/theqrl.org/commit/ee965193ace37db19f3d9e30df569ce5381ad638)] First push for the NFC tag hunt		
- [[fec38](https://github.com/theQRL/theqrl.org/commit/c8103cf7e93dea7a012f4e82a576d4393b4fec38)] NFC Tag Hunt modifications after further review		


**[QRL Weekly: Featuring Consensus by Coindesk 2024-May-28](https://github.com/theQRL/theqrl.org/pull/417)**
			
- [[64339](https://github.com/theQRL/theqrl.org/commit/e2852633024613f0382f70ef9bbe1ba26e064339)] Add the functionality to add footer js files that complies with SRI		
- [[33ab2](https://github.com/theQRL/theqrl.org/commit/5c689794e0cb87907bd7e450be4f267f17f33ab2)] Fix slug		
- [[6c6d2](https://github.com/theQRL/theqrl.org/commit/87f433327fecff4cfdec35b62df512333706c6d2)] Quantum news addition, Microsoft		
- [[73714](https://github.com/theQRL/theqrl.org/commit/a19581280f5d6bcdc655373d9c070ea3aa073714)] QRL Weekly: Featuring Consensus by Coindesk 2024-May-28		


**[Add quantum news summary article on meta](https://github.com/theQRL/theqrl.org/pull/416)**
			
- [[ca60a](https://github.com/theQRL/theqrl.org/commit/5df8af19f94a1a8eb70010fbb1da30b8232ca60a)] Add meta logo to quantum news		
- [[651a5](https://github.com/theQRL/theqrl.org/commit/ceb3d882c3503f87cced75b5e748be2f2dd651a5)] Add quantum news summary article on meta		
- [[3aa89](https://github.com/theQRL/theqrl.org/commit/aacaba811bcae5e920dd7835c4ff76925c53aa89)] Fix x/twitter color		
- [[e10d8](https://github.com/theQRL/theqrl.org/commit/ade1868f8468dc13df709eecb7491d8c18be10d8)] Adjust quantum news notable organizations		
- [[7ee0c](https://github.com/theQRL/theqrl.org/commit/f46e0782bb5b6a10134446ebb0117ec5b2d7ee0c)] Merge remote-tracking branch 'upstream/main'		


**[Further quantum news adjustments](https://github.com/theQRL/theqrl.org/pull/415)**
			
- [[cae5f](https://github.com/theQRL/theqrl.org/commit/3afc55e0e38c6609403874b003ebc06fd01cae5f)] Add hover state		
- [[b1fa8](https://github.com/theQRL/theqrl.org/commit/6cb1ecd12b42bb0998348204ec9270955d7b1fa8)] Update title to organizations page		
- [[8b97a](https://github.com/theQRL/theqrl.org/commit/61d0e81cfaa1d146c9f3117796dfdf63ce68b97a)] Fix opengraph for quantum news articles		


**[Add organization logo's to quantum news](https://github.com/theQRL/theqrl.org/pull/414)**
			
- [[6dc4c](https://github.com/theQRL/theqrl.org/commit/53b46c3abb561fb9111165bb6f571ac7bf06dc4c)] Add organization SVG's		
- [[3b668](https://github.com/theQRL/theqrl.org/commit/2d183725c5f99170a97213b47a0506b9fb73b668)] Adjust layout to accommodate organisations		
- [[93676](https://github.com/theQRL/theqrl.org/commit/4fd396bc115fbbe1863820433a9b434473793676)] Quantum news additions and edits		
- [[bfacc](https://github.com/theQRL/theqrl.org/commit/195aacd546450e6bbc5b657dd4ac56c00b1bfacc)] More quantum news additions and adjustments		


**[QRL Weekly, 2024-May-21](https://github.com/theQRL/theqrl.org/pull/413)**
			
- [[ce201](https://github.com/theQRL/theqrl.org/commit/6a871543d54e9f844facbe27d7010155e93ce201)] Quantum news content updates		
- [[cf053](https://github.com/theQRL/theqrl.org/commit/6635fd36458d0f34e75ec67692de6d54c0dcf053)] Adjust additional quantum news taxonomies + add nations		
- [[fe088](https://github.com/theQRL/theqrl.org/commit/189e6e51393044bbb33d21b161d7ceac039fe088)] New QRL Weekly, 2024-May-21		
- [[8a0e8](https://github.com/theQRL/theqrl.org/commit/d615b97a38c7ec8555964e5121ed81755308a0e8)] Adjust scripts		


**[Add company taxonomy to quantum news](https://github.com/theQRL/theqrl.org/pull/412)**
			
- [[ac167](https://github.com/theQRL/theqrl.org/commit/348fb673112075754cfaf38f14ea92852c6ac167)] Quantum news updates and additions		
- [[21722](https://github.com/theQRL/theqrl.org/commit/d165b552921d7ac41fad37a36bcf059519b21722)] Add company taxonomy to quantum news		
- [[6f940](https://github.com/theQRL/theqrl.org/commit/6da17898036170dda481963f6677cf21f136f940)] Change the Twitter bird to X		
- [[923d0](https://github.com/theQRL/theqrl.org/commit/9b01e73e5962386a8c1ba401ffee52662a1923d0)] Remove bottom padding		


**[QRL Weekly, 2024-May-14](https://github.com/theQRL/theqrl.org/pull/411)**
			
- [[c8ffd](https://github.com/theQRL/theqrl.org/commit/978e0f7b3ae8341fe227c21e53b9f52cf6cc8ffd)] Add quantum news item		
- [[71e31](https://github.com/theQRL/theqrl.org/commit/a7d1626d1fe83985e93e39a2aa44d0f4a6171e31)] Remove old quantum data file		
- [[1ddde](https://github.com/theQRL/theqrl.org/commit/b715eae5b5ffd9edafdfcee70bc59276a5e1ddde)] Add QRL Weekly		


**[New Video: Michael Strike Explaining QRL + PQ Security at Web3 Dubai](https://github.com/theQRL/theqrl.org/pull/410)**
			
- [[8b2c9](https://github.com/theQRL/theqrl.org/commit/88cf1ba094dac5f47532d80816c12f71b438b2c9)] New Video: Michael Strike Explaining QRL + PQ Security at Web3 Dubai		


**[QRL Weekly, 2024-May-07](https://github.com/theQRL/theqrl.org/pull/409)**
			
- [[0a704](https://github.com/theQRL/theqrl.org/commit/fad5028ba4555f02382b9caf44c362f41bb0a704)] Fix for padding on timeline		
- [[c2845](https://github.com/theQRL/theqrl.org/commit/ef610634a1dd61c510642b94c18e31eff72c2845)] Fix for padding around button on the qrl weekly list view		
- [[987c1](https://github.com/theQRL/theqrl.org/commit/936e733e7618a1ae52c441a24f45dbf51f2987c1)] New bit of quantum news, (thanks w1ntermute)		
- [[4107b](https://github.com/theQRL/theqrl.org/commit/8aba08a051fc2a6342fbff57e67ce2a98054107b)] Past QRL Weekly posts		
- [[021fa](https://github.com/theQRL/theqrl.org/commit/e2f24a0a4b78e82d2cc92865be3793416ca021fa)] This weeks QRL Weekly		
- [[edd5b](https://github.com/theQRL/theqrl.org/commit/d15beee8e04959991dcbb42f39773c798f1edd5b)] Add biconomy exchange!		
- [[7eda9](https://github.com/theQRL/theqrl.org/commit/80d3330b4d7caa8f674996d038e50385a7b7eda9)] Adjust market pair

## Quantum Computing Developments

{{% qnews start="2024-05-01" end="2024-05-30" %}}