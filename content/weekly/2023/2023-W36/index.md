---
layout: weekly-update
date: 2023-09-12
author: "The QRL Core Contributors"
title: "QRL Weekly, 2023-September-12"
slug: "2023-September-12"
---

## Weekly Dev Snapshot 📸 👇

- Implemented CLI functionality to generate Dilithium to execution change
- Changed default value of execution-address flag in staking-deposit-cli while generating new seed for staking deposit
- Added and initialized `DilithiumWithdrawalPrefixByte`, `ZondAddressWithdrawalPrefixByte` & `DomainDilithiumToExecutionChange` in config, these fields are used in staking-deposit-cli for stakings deposits and withdrawal.
- WithdrawalCredentialsHash function now uses `DilithiumWithdrawalPrefixByte` to compute hash while generating new staking deposit
- Added validation of withdrawal credentials in validateDeposit function in staking-deposit-cli
- Added proto messages for Dilithium based execution change for validator exit
- Added other helper functions such as DecodeHex, `ToSizedDilithiumSignature`, `ToSizedDilithiumPublicKey` for staking-deposit-cli
- Node has been successfully tested for 14000-15000 blocks and intentionally stopped thereafter.
- Fixed bug in richlist

<!--more-->

## Quantum News

{{% qnews start="2023-09-05" end="2023-09-12" %}}
