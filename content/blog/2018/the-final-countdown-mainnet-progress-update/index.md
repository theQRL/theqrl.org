---
layout: blog-post
slug: the-final-countdown-mainnet-progress-update
date: 2018-02-17T15:01:00.637Z
author: "Jack Matier"
title: "The Final Countdown -  mainnet progress update"
summary: "After our last update Get Ready for QRL Launch, it has been a hectic month for the developers and a volatile month in the world of crypto! Proof-of-work using cryptonight has been running successfully on our public qrl testnet and has been stable for many days now (blockheight > 23k and counting). Progress has been made in every other area of the project as you can see below."
featured_image: 1V1b-bWbebfyPCfUkO34Jyw.png
images:
  - 1MXS45UT8d_07flQajOYGFw.jpeg
  - 1V1b-bWbebfyPCfUkO34Jyw.png
  - 1nxiRlsyHTUAvjTEI8lZC2w.png
  - 1J5UhlYZpNyj4qsAmRJd_RQ.png
categories:
  - technical
forks:
  - actinium
---

After our last update [Get Ready for QRL Launch](/blog/get-ready-for-qrl-launch), it has been a hectic month for the developers and a volatile month in the world of crypto! Proof-of-work using cryptonight has been running successfully on our public qrl [testnet](https://explorer.theqrl.org/) and has been stable for many days now (blockheight &gt; 23k and counting). Progress has been made in every other area of the project as you can see below.

It’s been a pleasure seeing the team and community grow recently and get excited (though sometimes understandably frustrated) waiting for our token migration and mainnet release to occur.

{{< image "./images/1MXS45UT8d_07flQajOYGFw.jpeg" >}}

There’s just a handful more things that need to be done that are itemised at the end which we can check off for prior to launch. But before we get to that, let’s look at what has been accomplished by the team in the time since our last eventful blog post.

## 1 — Future Proofing

Security is a core value for the QRL. We are using PQ-crypto recommended XMSS to secure our accounts and transactions. XMSS gives complete peace of mind from the emerging black swan of quantum computing, with reusable addresses, provable security and minimal security assumptions.

### Thinking beyond the future

The introduction and solidification of variable key heights and signature space allows us to **ensure future compatibility** with *almost* anything. Our blockchain now includes the possibility to upgrade signature schemes (XMSS, SPHINCS, + future) and through an address format update, support different cryptographic hash functions (SHA2_256, SHAKE_128, SHAKE256 etc).

Changing the cryptographic hash function in XMSS changes the signature scheme completely. We originally decided to adopt SHA3–256 as our sole cryptographic hash function powering XMSS after a security review (and listening to the community). It became clear during testing that SHA-3 would not be supportable in the existing iteration of Ledger hardware. Part of the reason for our delay this month has been to upgrade our address format and existing codebase to allow flexibility of cryptographic hash function — more on this later, but this is probably the main reason why we have had to slightly push back our code freeze and token migration date.

## 2 — Ledger Nano S

**Ledger Nano S is *confirmed* for mainnet release!** Special thanks by Juan, Leon and Kaushal for their heroic efforts here. It is a technical feat trying to cram the full XMSS signature scheme into a paltry 3000 bytes of RAM, and only proved feasible at all with some belated fundamental changes to our address format and by allowing XMSS-SHA2–256 onto the QRL ledger. Our resident post-quantum cryptographer has given this change the all clear from a security perspective which is fantastic.

The important thing is that it is actually now functional, only requiring integration into the QRL webwallet and a formal audit by Ledger. Extremely excited for the upcoming technical blog on that, @purpletentacle(*cough cough*). Expect an update coming to the webwallet very soon with experimental Ledger support testnetters!

## 3 — A New unified brand experience

Our new hire, Luke Hahn, has been hard at work unifying and elevating our entire brand experience. This new aesthetic will be debuted in part with our presentation at BlockDelhi on February 21st. We also have a newly re-skinned cloud-hosted block explorer ([https://explorer.theqrl.org/](https://explorer.theqrl.org/)) and webwallet ([https://wallet.theqrl.org/](https://wallet.theqrl.org/)) that now have token transfers added to the UI. The website is already designed and just needs to be publicly pushed, so expect something soon!

{{< image "./images/1V1b-bWbebfyPCfUkO34Jyw.png" >}}*new explorer skin*

## 4 — Full Quantum Resistant Token (QRT) Support

QRL allows anyone to create their own token on the QRL blockchain in a matter of seconds. This is now supported throughout the entire QRL ecosystem of products.

{{< image "./images/1nxiRlsyHTUAvjTEI8lZC2w.png" >}}

## 5 — Token migration is tested and ready to go

**The Token migration system has sat ready to go live since last month and we are now just waiting for our next hardfork to announce a final code freeze.** There will be a detailed blog post with pictures, a video, and support on standby to help people through the migration.

We’re doing everything we can to make this a smooth process, and it’s really going to be a matter of 1, 2, 3.

* Step 1. Make Your QRL Wallet and QRL Address (from our webwallet +/- your Ledger)

* Step 2 . Go to The QRL Token Migration Page and put in your QRL address

* Step 3 . Get your Ethereum Burn Address to send QRL ERC20 to

Anytime you send QRL ERC20 to the reusable Ethereum Burn Address, QRL Coins are deposited 1:1 into your QRL Wallet.

## 6 — Continuous Trialling/Onboarding

QRL is a state-of-the-art project, and it’s no secret to those watching our [github](https://github.com/theQRL) that there’s been constant work to get this project built and live.

Many of the members of our team have nearly ignored or otherwise dismissed their family and friends and worked overtime to try and achieve milestones, there was even code being committed on Christmas day!

We’re still looking to grow our team in a sustainable manner to work on the project and produce THE post-quantum enterprise blockchain product that reliably stands the test of time. Such work will continue after mainnet launch throughout 2018 and beyond as we implement and refine our POS algorithm and other second layer tools.

Resumes are being read, interviews are being had multiple times a week, and several trials are currently taking place with talented people from disciplines like QA/Testing, Cybersec, and Backend to Frontend.

If you feel like you have what it takes, be sure to let us know why at [jobs@theqrl.org](mailto:jp@theqrl.org).

## The countdown to mainnet begins!

**We have entered the final weeks of development with only a few more things left. So without further ado, here’s the todo:**

1. Token migration web app (complete!)

1. Completion of website refresh (designed!)

1. QRL Address to new address format (on devnet, live testnet 21st February)

1. Ledger Nano S WebWallet integration (in progress)

1. Mining API and Pool integration (basic functionality achieved)

1. **Code freeze/internal review (pending final hard fork stability)**

1. **Token Migration**

1. External audit

{{< image "./images/1J5UhlYZpNyj4qsAmRJd_RQ.png" >}}

## Conferences, conferences, conferences!

We recognize that success in a vacuum will not be recognised and will not last.

To that end, we have and will continue to reach out to both formal and informal media, as well as getting back to producing more content internally that we can use to both educate the cryptocurrency space, as well as promote ourselves. Look for more videos, articles, interviews and analyses of our project and our value proposition that will be released in the coming weeks and months.

We are continuing to look out for and reach out to further conferences in the industry where we would be able to make a significant impact, either by attending, partnering, sponsoring and/or speaking throughout the year.

The most immediate example of this is our upcoming sponsorship and speaking role at [BlockDelhi 2018](https://www.blackarrowconferences.com/blockdelhi.html). Kaushal, one of our core developers, will be giving the Opening Keynote Address, and we cannot wait to see what comes of it (finally we find out if he is actually human or machine — Ed).

Shortly following this the team will be attending the APAC conference in Australia, then the CryptoValley conference in Switzerland to get the QRL message heard where it matters. We have several more conferences planned later in the year so this is all just getting started.

As always the devil is in the details and as launch draws very close the team would like to thank every single person in our vibrant community for their support and patience! :-)