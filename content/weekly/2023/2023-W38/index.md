---
layout: weekly-update
date: 2023-09-26
author: "The QRL Core Contributors"
title: "QRL Weekly, 2023-September-26"
slug: "2023-September-26"
---

## Weekly Dev Snapshot

- Changes in Execution Node to unify pqaccounts & account package into single account package
- Fixed unit tests & updated sign function in pqcrypto package
- Added constant DilithiumSignatureLength
- Changes in transaction data & API to support dilithium based wallet
- Updated RPCTransaction API with new fields PublicKey and Signature
- Updated transaction marshalling to support new fields PublicKey and Signature for dilithium compatibility
- Bug fixes + Updated unit tests
- Successfully tested the API required to make & sign transaction from the CLI.
- Successfully tested Transaction Pool in Execution Node, along with the transfer of funds from one dilithium wallet to another

<!--more-->

## Quantum News

{{% qnews start="2023-09-19" end="2023-09-26" %}}
