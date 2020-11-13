---
layout: blog-post
slug: first-post-quantum-cryptography-approval-from-nist
date: 2019-12-15
author: "Peter Waterland"
title: "First post-quantum cryptography approval from NIST.."
featured_image: 12Wep1olQzSWKjv6sd_KIKg.png
images:
  - 12Wep1olQzSWKjv6sd_KIKg.png
categories:
  - technical
---

This is a short but very important update for the project.

In mid-2016 the idea for a fully post-quantum secure ledger was conceived and one of the really tough decisions was which signature scheme to use.

Eventually [XMSS](https://link.springer.com/chapter/10.1007%2F978-3-642-25405-5_8) was chosen for it’s cryptographic properties — but this was not an easy choice given it is stateful and requires significant computation prior to first use.

A small number of other projects utilise variants of one-time [hash-based signatures](https://en.wikipedia.org/wiki/Hash-based_cryptography) but QRL is the only crypto asset or blockchain which uses XMSS to protect the entire ledger.

Being unique in that respect it is exciting to see NIST have [draft approved](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208-draft.pdf) hash-based signature families XMSS and LMS for usage. In practice this means that currently QRL is the only crypto asset using (soon to be) NIST-approved post-quantum cryptography.