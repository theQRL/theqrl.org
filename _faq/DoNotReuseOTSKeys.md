---
title:  "Why shouldn't you use the same OTS (One-Time Signature) key to sign different messages?"
date:   2017-12-11
categories: OTS
---

QRL is using an digital signature algorithm called XMSS (eXtended Merkle Signature Scheme). 
XMSS is used to sign transaction messages in order generate valid transactions. 
XMSS uses a One Time Signature (OTS) scheme that can only sign one message with one key.
If you use the same One Time Signature (OTS) key to sign two different messages, an attacker could generate a valid signature for a third message you had never signed before.
This might allow an attacker to generate a valid transaction you had never approved. 
Which is why it is important to keep track of which OTS keys have been used already, so you can use a different OTS key for each message.
