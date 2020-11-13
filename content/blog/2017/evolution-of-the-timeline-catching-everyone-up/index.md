---
layout: blog-post
slug: evolution-of-the-timeline-catching-everyone-up
date: 2017-10-15
author: "Adam Koltun"
title: "Evolution of the timeline, catching everyone up"
featured_image: 1sCZa7YA0MEKwXQeSxJPDtg.jpeg
images:
  - 1sCZa7YA0MEKwXQeSxJPDtg.jpeg
  - 1yN8pfSEQXSaJpPAHyGTqQw.png
  - 1koZq33SIdGsoxw4Co-YthA.png
---

From the outset, our team has been dedicated to releasing the most stable, reliable, and functional product we can. We recognize the awesome responsibility placed in us and the mass of wealth that is going to be held, transferred, and (hopefully) created by our network. To that end, we made the mistake of using one set of metrics internally (milestones) and reporting another set of metrics externally (launch windows). We apologize for the inevitable confusion caused by this, as our internal system has regularly fluctuated as developments have accelerated and, alternatively, decelerated the mainnet launch timeline. Moving forward, we will communicate our progress externally the same way we articulate it internally — that is to say, through milestones.

**Mainnet has been delayed 60–90 days from our previous launch window.**

Whilst it is disappointing we cannot launch at the end of October as planned, QRL has always been committed to releasing enterprise grade code — not pushing releases for the sake of releases. This is important as QRL will be carrying tens of millions of dollars of value — we simply cannot take chances with our users funds by launching prematurely.

Mainnet, upon arrival, must have security grade code as well as meet the following conditions:

1. Be Scalable
1. Pass External Security Audit
1. Be Easy to Use
1. Be practically usable on the many different devices that users may have (from low powered Raspberry Pi’s to Desktop computers)

{{< image "./images/1sCZa7YA0MEKwXQeSxJPDtg.jpeg" >}}*QRL running on an IBM T43 from 2005*

**Communication**

Moving forward, we will be communicating things externally using the same metrics we use internally. This means a switch from dates/launch windows to milestones. As we pass various milestones, and discover new, unexpected milestones that we need to accomplish, we will update the community.

We have already eschewed the previous roadmap found on our website for our new [Roadmap](https://theqrl.org/roadmap.html), which more accurately reflects how we measure progress within the project. This roadmap will continue to be updated as is appropriate moving forward.

Additionally, we are making a commitment to releasing a Medium blog post twice a month, if not more frequently. The content of each individual blog post will lean more technical or more general as the situation requires. These blog posts will sometimes be written by one team member, either myself or someone else, and sometimes they will be done in a collaborative style so that we can show how progress is advancing on a number of fronts.

Finally, we will update our whitepaper to more accurately reflect the current status of the project. However, it must be noted that given the fluid nature of software and network development, many of the details contained within the whitepaper are and will continue to be subject to change.

Moving forward, we will endeavor to keep the website more up-to-date, bringing the Team page up to speed, continuing to update the roadmap, updating the whitepaper, and rolling out any further updates/changes to the website down the road in a timely and appropriate fashion.

**Status of the Team**

We would like to announce two new hires, one from outside the project, and one from within. From the outside, we have added **@randomshinichi**, or Andrew. Andrew is an experienced Python dev, and will help us develop our product as we move forward into our final phases of development. From within, we have elevated one of our community moderators, **@puck342**, or Adam, to the role of Marketing Manager. Adam (that’s me!) brings marketing experience to the team, and will help us articulate our vision for the project moving forward. Our team has grown marvelously since the summer, and we will have our Team section of the website updated to reflect that soon.

Our current team lineup consists of:

1. **@peterwaterland** (founder, alpha codebase developer, protocol design),
1. **@cyyber** (developer, possible AI, we hear he just got a new upgrade),
1. **@purpletentacle** (developer, architect, monster from the deep!)
1. **@bish** (python developer, security code review / audit),
1. **@leongb** (mathematician, post-quantum cryptographer, possible evil genius),
1. **@random_user_generator** (technical architect, low power device tester, has been diagnosed ‘ponytail positive’),
1. **@jp** (blockchain explorer developer, backend admin scripting, the glue that holds the team together/attempted herder of cats)
1. **@burke** (developer, alpha tester, speculator extraordinaire)
1. **@aidan** (developer, JFX GUI creation)
1. **@scottdonald** (full stack developer, focusing on QRL Wallet)
1. **@coda** (JS/UX/UI/web whizz, of Bulgarian origin with a penchant for fp shooters)
1. **@randomshinichi** (python dev, evil banker in a previous life)
1. me (marketing manager, social media)
1. **@elliottdehn** (community management, social media, voice of the youth)
1. **@jackalyst** (community advocate, qrlbutler training, our man in the Great White North)

As always, our community of alpha testers have continued to impress, both in terms of their passion for the project and their vital role in accelerating the maturation of our testnet. We would like to extend a heartfelt and sincere thank-you to all involved for helping our efforts so mightily.

**Developer Activity**

It is only a few weeks since the last technical article but a lot of things have happened. We are excited on how the software is evolving.

The focus has been on a redefinition of the overall architecture. The purpose of this has been removing duplication, looking for efficiency and scalability.

* The C++ qrllib got integrated and it has been running in testnet for a couple of weeks. Verification times have improved [x100 at least](/blog/qrl-improvements-i).

* In addition, we have a component that can be deployed to almost any platform (including browsers). In the last week, we also moved to multicore xmss tree generation. This was necessary for the new PoS to thrive. More code profiting from multi-core CPUs is about to come.

* The POS algorithm has been further refined by @cyyber and @peterwaterland with new fork recovery pathways integrated successfully. A complete POS blog guide will be coming later this week for the curious.

* Communication between both nodes (p2p) and API clients is now integrated into a single technology. We are working on a smooth transition to gRPC. This does not only enable a more efficient p2p protocol but also a cleaner and safer public APIs. In addition, gRPC supports automatic code generation clients in at least 8 programming languages, enabling extensibility and new ideas. Last but not least, standardization and a single point of entry means more security and maintainability.

* QRL as a webassembly is now a reality. Running post-quantum encryption directly in the browser is now possible. This means that we can sign transactions and encrypt communication between browsers and nodes.

* Additional redesign/rearchitecture work was done on both Web and Desktop wallets. Looking for efficiency, we have been unified them by leveraging qrllib, meteor and electron. Based on the same source code and technology means less duplication, less bugs and more efficiency. The wallet codebase can now run on almost in any platform.

* Code coverage and quality metrics have been going up steadily. We still have work to do but the trends in the last few weeks have been very encouraging.

* We have crossed the 1000 commit point for qrlcore on github

* **[@cyyber](http://twitter.com/cyyber)** has passed [**@peterwaterland](http://twitter.com/peterwaterland)** to become #1 by dev ranking in the qrlcore github repo.

**Other updates**

* We have a blog on migration protocol instructions coming out this week

* **@scottdonald** has been hard at work on the new QRL wallet— next week the QRL wallet is finally going live on testnet!

{{< image "./images/1yN8pfSEQXSaJpPAHyGTqQw.png" >}}*QRL on Ubuntu 16*

{{< image "./images/1koZq33SIdGsoxw4Co-YthA.png" >}}*QRL on OSX*

**Merchandise has arrived**

Since our last update, we have launched our merchandise storefronts. So far over 50 community members have ordered everything from T-shirts to totebags from our EU and NA storefronts. (Brief reminder: if you live in Africa, Asia, or Australia, the EU storefront will have cheaper and quicker shipping options for you.)

* [Link to NA store](https://teespring.com/stores/quantum-resistant-ledger-na-2)
* [Link to EU store](https://teespring.com/stores/quantum-resistant-ledger-eu)

Teespring has been a wonderful partner, allowing us to sell merchandise essentially at-cost so that anyone who wants a QRL sticker, or QRL on their shirt, tote, phone case, etc. can have their wish at the lowest cost possible.

As always, feel free to join our [Discord Server](https://discord.gg/BheKAZb) and chat with us and our community about where we are and where we’re going!