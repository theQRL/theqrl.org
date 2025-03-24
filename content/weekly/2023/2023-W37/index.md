---
layout: weekly-update
date: 2023-09-19
author: "The QRL Core Contributors"
title: "QRL Weekly, 2023-September-19"
slug: "2023-September-19"
---

## Weekly Dev Snapshot

- Tested exit of validator from staking along with the withdrawal of balance
- Currently changes are in progress to make transaction from Dilithium based address on the execution engine
- Removed non-required flags from the staking-deposit-cli
- Made required changes to completely replace execution changes with Dilithium execution changes
- Bug fix for withdrawalCredentials validation & improved error messages
- Added generate dilithium to execution change command in staking-deposit-cli
- Removed default value of chain and execution-address flag and made them required
- Added 0x as prefix for hex string and handling the same while decoding for the staking-deposit-cli
- Added check for DecodeHex to ensure 0x prefix exists for hex string
- Fix: issue with the incorrect indexing for amount while calling NewCredential function
- Fix: issue with the incorrect indexing for credentials while calling NewCredentialsFromSeed function
- Fix: Corrected path while exporting dilithiumToExecutionChange
- Fix: Exported filename for dilithium to execution changes
- Added json field names for DilithiumToExecutionChangeMessage
- Changed type of ValidatorIndex to string to make it compatible with existing CLI

<!--more-->

## Quantum News

{{% qnews start="2023-09-12" end="2023-09-19" %}}
