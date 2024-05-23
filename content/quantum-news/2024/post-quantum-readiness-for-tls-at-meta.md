---
layout: qnews
title: Post-quantum readiness for TLS at Meta
slug: post-quantum-readiness-for-tls-at-meta
org: engineering.fb.com
link: https://engineering.fb.com/2024/05/22/security/post-quantum-readiness-tls-pqr-meta/
date: 2024-05-22
img: /quantum_news/2024/output/0522.engineering.fb.com
img_caption: ""
img_credits: ""
summary: Meta is proactively migrating to PQC, prioritizing internal communication traffic susceptible to SNDL attacks. Looking forward, Meta plans to extend its PQC solutions to external traffic.
organizations:
  - Meta
---

Meta is proactively transitioning to Post-Quantum Cryptography (PQC) to enhance security against potential quantum threats, initially focusing on internal communications that are vulnerable to specific cyberattacks. They are deploying a hybrid cryptographic approach, which combines traditional algorithms with quantum-resistant technologies, using Kyber and X25519 for hybrid key exchanges in their TLS protocols. This integration is managed through their [Fizz protocol library](https://github.com/facebookincubator/fizz).

Looking forward, Meta plans to extend its PQC solutions to external traffic, aligning with broader industry adoption and the emergence of standardized quantum-resistant technologies. This strategy highlights the growing necessity for advanced security measures that can withstand the next generation of computational capabilities, thereby securing the future of digital transactions and communications in industries reliant on blockchain technology and beyond.