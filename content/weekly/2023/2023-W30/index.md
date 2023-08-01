---
layout: weekly-update
date: 2023-08-01
author: "The QRL Core Contributors"
title: "QRL Weekly, 2023-August-01"
slug: "2023-August-01"
---

## Weekly Dev Snapshot

### QRL Node v4.0.3

New version is released which fixes a bug with a wallet daemon throwing error while converting non utf-8 data to string will now try to convert the data into hex string

To update, visit our [node update guide](https://docs-beta.theqrl.org/use/node/node-update).

*Note: Only required to update if you're calling the `get_block` function from the wallet daemon*

### QRL: New Richlist

- Implementation of richlist-api middleware between indexer and user-facing applications including export of data as CSV for all non-zero balance addresses
- Added richlist to mainnet explorer & release of explorer 1.4.0

### QRL Zond (Proof-of-Stake + Smart contracts)

- Refactoring & Bug fixes for the Zond consensus engine
- Update Zond execution engine to process the blocks received from the Zond consensus engine
- Tested Staking upto 1300 blocks, currently the memory issue fix is in progress
- Implementation of qrl-rich-list-indexer that index rich list from the QRL Python chain to the MongoDB
- Bug fixes for the qrl-token-indexer

<!--more-->

## Quantum News

{{% qnews start="2023-07-24" end="2023-08-01" %}}
