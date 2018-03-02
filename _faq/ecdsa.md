---
title: ecdsa
difficulty: advanced  
title: What is ECDSA?
---

ECDSA (Elliptic Curve Digital Signature Algorithm) is a digital signature algorithm standard that is using elliptic curve cryptography to generate and verify digital signatures. ECDSA is used in cryptocurrencies such as Bitcoin to secure financial transactions.

In order to generate a valid Bitcoin transaction the private key is needed to sign the transaction and generate the ECDSA digital signature. The corresponding public key is published after the transaction is generated, because it is needed to verify that the transaction was signed correctly using the private key.

The security of ECDSA relies on the assumption that it is hard to compute the private key when the public key is given.

The security of ECDSA is broken when the private key can be computed from the public key, because when the private key is known signatures can be forged and there would be no difference between an authentic signature and a forged signature.

This private key can be computed when the public key is given by solving the Elliptic Curve Discrete Logarithm Problem (ECDLP), which can be stated as follows:

Given the public key that is represented by point 'Q’ on the elliptic curve and a standardised base point 'P' on the elliptic curve, find the private key that is represented by the integer 'a', such that Q=a\*P

In which '\*' represents an elliptic curve point multiplication.

This Elliptic Curve Discrete Logarithm Problem (ECDLP) can be solved efficiently using Shor’s algorithm on a large quantum computer, which would then break the security of ECDSA.