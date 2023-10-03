---
layout: weekly-update
date: 2023-10-03
author: "The QRL Core Contributors"
title: "QRL Weekly, 2023-October-03"
slug: "2023-October-03"
---

## Weekly Developer Snapshot

- The existing beacon node when restarted has dependency for at least one node to be online for it to get synced from finalized slot to the last unfinalized slot. However, in case of a crash, there could be no node online and thus may halt the network. The changes and testing are in progress for the beacon chain to keep track current unfinalized slot and to continue from the last block even when there is no node online given the flag is passed during the start of the beacon node.
- We are currently testing and mapping out all the changes required for the API of the execution node. 
- We are working to fix the js calls made by the client to the API's of the execution node in Golang to include the Dilithium 5 support, so that one can easily deploy and interact with smart contract and to enable other client based API calls.

<!--more-->

## Quantum News

{{% qnews start="2023-09-26" end="2023-10-03" %}}
