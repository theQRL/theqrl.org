---
layout: weekly-update
date: 2023-05-23
year: "2023"
author: "The QRL Core Contributors"
title: "QRL Weekly, 2023-May-23"
slug: "2023-May-23"
---

## Weekly Dev Snapshot

- Fixed extra signatures appended in the attestation transaction
- Currently fixing the unordered signature with respect to the public key of the attestation transaction.
- Attestation transaction broadcasted by the validator client, doesn't include the 2592 bytes of dilithium public key, rather we use bitfield to represent which validator has signed that transaction, which is of just few bytes, this would optimize the network performance.

<!--more-->

## New QRL Show YouTube Series 🎬

We're excited to release a new QRL Show YouTube series...History of Cryptography: Behind The Code 🔐 🗺️ 🔍

In Episode #1 of the series, we travel back in time...exploring ancient ciphers from the Atbash Cipher (500BCE) up through the Caesar Cipher (100 BCE) which was used by the Romans to keep military secrets secure.  

Check out Episode #1 below 👇 

{{< youtube U0m65tUkMj8 >}}