---
layout: blog-post
slug: new-additions-team-update
date: 2017-08-14T06:30:44.961Z
author: "Peter Waterland"
title: "New additions, team update.."
summary: "I’d like to welcome new people to the team who have joined over the last week. Dimitar Christoff has arrived from the professional world of UX/UI/JS and web development. He is hugely experienced and I actually cannot wait to see what he will produce for us going forward."
images:
  - 1F0Wiv_Lb0cWVZ-LXJQlu6A.jpeg
  - 1FwBuzB63BRLhMReodvAggA.png
  - 1_v091Qsx8Tvfxo3ECGYI4A.jpeg
  - 1I1wYkgQ9G1p1AhCkHuBRCw.jpeg
tags:
  - blockchain
keywords:
  - blockchain
draft: true
---

I’d like to welcome new people to the team who have joined over the last week. Dimitar Christoff has arrived from the professional world of UX/UI/JS and web development. He is hugely experienced and I actually cannot wait to see what he will produce for us going forward.

@aidan has joined the team to develop our reference node GUI. What is most exciting about this is that @aidan has been a valued member of the testing community for some time and just announced he had been working on this in his spare time! Welcome to the team @aidan! Here is a sneak peak of one of the first placeholder drafts used to begin skinning our node with a functional GUI.

![GUI placeholder..](./images/1F0Wiv_Lb0cWVZ-LXJQlu6A.jpeg)*GUI placeholder..*

We are also soon to begin trialling a third addition to the team, a python programmer with blockchain experience who is currently learning the QRL from a technical perspective before hopefully jumping in later this month. More details on that to follow as the minutae are sorted.

## Current team

So to clarify our current ***technical* **team line up is (in no particular order):

1. me (founder, alpha codebase developer, protocol design, master prevaricator),

1. @cyyber (possible AI, developer, we hope he doesn’t become self-aware and take over the world),

1. @bish (python developer, security code review / audit),

1. @leongb (possible evil genius, mathematician, post-quantum cryptographer),

1. @random_user_generator (technical architect, low power device tester, we suspect he wears a pony tail socially — @leongb can hopefully answer this),

1. @jp (blockchain explorer developer, backend admin scripting, planning and executing the token migration process, the glue holding the team together)

1. @burke (developer, alpha tester, speculator extraordinaire)

1. @aidan (developer, JFX GUI creation)

1. @coda (JS/UX/UI/web whizz, of bulgarian origin with a penchant for fp shooters)

That doesn’t include our prized community manager @elliottdehn or brilliant moderators @puck342 and @jackalyst or the growing army of alpha-testers who are playing a massive role in maturing the testnet — massive thank you to you guys, some of whom will hopefully be joining the development team in an official capacity going forwards (you know who you are, yes you!).

## Developer activity

So our team is expanding, these things take time — finding the right people is important, especially people who can integrate well in a team.

![QRL is now #32 most active crypto in the entire ecosystem by development and we are only just winding up..](./images/1FwBuzB63BRLhMReodvAggA.png)*QRL is now #32 most active crypto in the entire ecosystem by development and we are only just winding up..*

The QRL is now **#32** in the entire ecosystem in terms of developer activity and I am fairly sure we will rocket up that list in the coming months (it actually isn’t a great measure of activity either, but that is another matter). To be accurate, there have been **26 github commits** since our the last blog post just 6 days ago!

## Node memory usage

Our memory usage has been a priority to control as we had a number of user-documented testnet crashes on machines with various different memory capacities last week. The codebase was updated to remove common traces of major pickle usage and memory management in terms of how much blockchain was stored in memory versus on disk has been drastically altered.

![pickle rick is out!](./images/1_v091Qsx8Tvfxo3ECGYI4A.jpeg)*pickle rick is out!*

Now we only keep the last 1000 blocks in memory and write to disk after a flexible block-interval. We use our key-value store *leveldb *to record block meta-data for easy extraction to serve up to syncing nodes. Getting this right is a massive priority for the QRL because our transactions are huge compared to every other blockchain out there.

![drop in memory requirements after an early fix](./images/1I1wYkgQ9G1p1AhCkHuBRCw.jpeg)*drop in memory requirements after an early fix*

Thanks to the hard work of @cyyber we now have **node memory** requirements down to a quite incredible **250–300 mb**, and I can confirm that we have raspberry pi’s smoothly syncing and staking on the network (thanks @random_user_generator), albeit slowly.

## **Optimisations**

There are further optimisations we are working on: a message priority queue, a hash-message cache to cut down redundant processing during staking verification hashing within POS and transaction validation, explanting the python XMSS library written entirely by me and re-implanting a massively optimised C++ library instead — coming very soon. The latter two changes will lead to huge decreases in time for processing transactions, validating blocks and generally make the node much, much snappier once they are complete. This is really important for running the QRL on low power devices and for keeping nodes in sync with the proof-of-stake cycle as validator numbers creep up into three figures.

Next we will begin to layer in the Ephemeral protocol and I am super excited to see how we can build this into the node initially. Once our codebase begins to mature the laborious process of going through it looking to plug security issues will begin in earnest (@bish i’m looking at you for some reason! :-)).