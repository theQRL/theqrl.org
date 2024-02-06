---
layout: weekly-update
date: 2024-02-06
author: "The QRL Core Contributors"
title: "QRL Weekly, 2024-February-06"
slug: "2024-February-06"
---

## Weekly Development Snapshot

- Code related to derived and remoteweb3signer has been disabled
- Removed deprecated validator web ui code
- Fix unit tests
- Removed all the codes related to forks other than Capella
- Removed old db migrations
- Renamed the Duties field with CurrentEpochDuties
- Overrided the SecondsPerSlot config field for tests on the validator side that rely on functions such as waitToSlotTwoThirds to have them run much faster
- new explorer/wallet middleware routes to support fee calculation in testnet wallet
- transaction UI work in testnet wallet
- interaction with middleware for automated transaction metadata population
- offline signing of transactions complete

<!--more-->

## Quantum News

{{% qnews start="2024-01-30" end="2024-02-06" %}}
