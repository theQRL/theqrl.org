---
layout: blog-post
slug: welcome-juan
date: 2017-09-03T17:07:32.728Z
author: "Peter Waterland"
title: "Welcome Juan!"
summary: "It is becoming customary to start the blog with the announcement of a new hire and today is no different. So without further ado, we have a new member — Juan Leni! He goes by the slightly sinister nickname @purpletentacle on the slack, but is a senior developer with project management experience and will be a fantastic asset to the team going forwards."
images:
  - 1-jK0Y4XHdH-dLEvTjA87lQ.png
  - 1vx4zevCQzIPYx7jFK9gl1A.png
  - 1h8PYx7O2IJ2n9GHGWLj8uw.png
  - 1EvIcRQ_fb4UKkvOeHmgvPw.png
tags:
  - blockchain
keywords:
  - blockchain
draft: true
---

It is becoming customary to start the blog with the announcement of a new hire and today is no different. So without further ado, we have a new member — Juan Leni! He goes by the slightly sinister nickname @purpletentacle on the slack, but is a senior developer with project management experience and will be a fantastic asset to the team going forwards.

When pressed by me to give a statement for the blog he eventually sent me this:

“*I am very excited to join this amazing team! 
Lots of things have been going on in this first week: architectural improvements, code metrics (codacy/test coverage/etc), continuous integration, unit testing, documentation generator, standardized logging, automated code analysis, pip deployment, containers, etc, etc, etc. And soon we will be integrating optimized C/C++ into the mix!
I am really looking forward to a significant speed up in the development pace!*”

To say he has hit the ground running would be an understatement. He has immediately settled into the team and our github repository reflects this with a seemingly frenetic flurry of activity. Welcome to the team, sir!

## Team conference

The dev team, who reside across the globe (in the UK, Netherlands, Australia, Switzerland and India) met up last night to discuss the roadmap and development challenges in preparing for mainnet launch of the QRL.

Kudos to @scottdonald and @aidan for waking up at 4am to join the discussions. Rumours remain that ‘Kaushal’ aka @cyyber is an AI were not squashed by this conference call.

![Developers Assemble!](./images/1-jK0Y4XHdH-dLEvTjA87lQ.png)*Developers Assemble!*

## Developer activity..up and to the right

It has been just over two weeks since the last blog update and in that time we have seen tremendous activity in our github repository (https://github.com/theQRL). Since August 27th, there have been 38 pull requests and 64 commits to qrlcore alone.

![](./images/1vx4zevCQzIPYx7jFK9gl1A.png)

And just so @jp doesn’t feel left out it wouldn’t be fair to exclude the block-explorer repo (https://github.com/theQRL/block-explorer) which has been completely refactored using meteor.js and is now functionally awesome.

The alpha can be seen serving up testnet at: [http://qrlexplorer.info](http://qrlexplorer.info) and looks a bit like this prior to re-skinning:

![alpha block explorer functionality](./images/1h8PYx7O2IJ2n9GHGWLj8uw.png)*alpha block explorer functionality*

## QRL technical update..

The testnet has been reset so many times with non-backwards compatible code upgrades in the last two weeks we have implemented ‘chain ident’ code to ensure old nodes which haven’t hard forked do not interfere with upgraded nodes following a complete chain reset.

Minor code refactoring changes have been implemented to improve code flow and design related to the state machine of qrlcore. Related to this we have altered block structure slightly and begun to add transaction subtypes: coinbase, standard tx, stake and lattice_public_key. Lattice_public_key is the final building block to us implementing our ephemeral messaging layer into qrlcore.

Optimisations such as hash-chain caching and tx-caching have been implemented and will offer a minor but important performance gain as the number of stake validators rises, especially for low power devices. We have raspberry Pi’s successfully running the latest version of qrlcore (thanks @random_user_generator and @owl).

It will soon be easier than ever to install a qrl node because pip functionality is almost complete (think ‘sudo pip install qrlcore’ in future).

Juan has made inroads into professionalising the codebase with Codacy, coverage and has begun to work through the laborious task of completing a unit testing suite.

![badges!](./images/1EvIcRQ_fb4UKkvOeHmgvPw.png)*badges!*

The biggest optimisation to the codebase will come from improving transaction verification time downwards after implementation of the C++ XMSS library into qrlcore. Juan and Leon are almost finished with this which is very exciting because then we can port the library into JS for the webwallet to begin to sign transactions. I predict that in the next blog update we will have some screenshots of the in-browser webwallet in action on testnet.

Further targets for the next couple of weeks will be: integrating ephemeral messages between nodes and beginning to harden the codebase against security concerns, DDOS etc., investigation of hardware wallet solutions, exchange implementation.

## Marketing

With mainnet not too far away it is now time to start a marketing campaign to explain the QRL and get word out about the project more widely. This is something we haven’t spent a lot of energy on up to this point. But now the developer ranks are finally filled we will announce more on this in the coming days. Watch this space!

As always, anyone interested in our project which aims to be the first 100% post-quantum secure blockchain ledger in the world, feel free to join the **1970** people who are on our slack at: http://slack.theqrl.org.