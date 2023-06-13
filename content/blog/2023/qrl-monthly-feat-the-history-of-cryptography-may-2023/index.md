---
layout: blog-post
slug: qrl-monthly-feat-the-history-of-cryptography-may-2023
date: 2023-06-13
author: "The QRL Core Contributors"
title: "QRL Monthly: Feat. The History of Cryptography - May 2023"
summary: "Cryptography history, including ancient cyphers like the at-bash, scytale, polybius square, and the Caesar cypher. Fusion signatures in the QRL ecosystem, project Zond development, and a special AMA with Geometry Labs!"
featured_image: header.png
categories:
  - technical
features:
  - proof-of-stake
toc: true
---

## Highlights

### History of cryptography

{{< image "./images/h.historyof.png" >}}


Cryptography has become a ubiquitous term in our modern lives due to its association with cryptocurrency, securing information, and even hacking. However, cryptography has a long and rich history that dates back thousands of years. The History of Cryptography video series takes a trip back in history to better understand the development of cryptography from ancient hieroglyphics and ciphers up through present-day encryption methods.

{{< youtube "U0m65tUkMj8" >}}

To begin our journey, we start with the early origins of cryptography. 

The **at-bash** cipher, dating back to **500 BC**, is a substitution cipher that was first used in the Hebrew language. The cipher works by substituting the first letter of the alphabet with the last, the second with the second to last, and so on. This simple yet effective cipher was used primarily by Jewish scribes and scholars in ancient times to encode messages in the Torah and other holy texts. Its legacy lives on as a testament to the ingenuity and creativity of ancient scholars and scribes.

Another example is the **scytale cipher (7th century BC)**, an ancient cipher used by the Spartans to communicate securely during military campaigns. It was a transposition cipher, which rearranges the order of letters in the message rather than replacing them with new characters. The **polybius square** is a cryptographic device invented by Polybius in the **second century BC**. It is a simple grid made up of five rows and five columns, with each cell containing a letter of the alphabet. It can be easily memorized and quickly deciphered, making it an ideal tool for military commanders to send messages quickly and securely.

Finally, the Caesar cypher, invented in 50 BC, is a substitution cypher that replaces each letter in a message with another letter at a fixed number of positions down the alphabet. To decrypt the message, we move the cypher alphabet back by the same number of positions and replace the letters with their original forms. It is easily shattered by modern technology.

Since its early days, cryptography has advanced greatly, with each new cypher improving upon its predecessor in terms of complexity and security. If this subject is interesting to you, the series is only just starting! The next segment will focus on more advanced cyphers, such as the visionary cypher and the cryptographic drama of World War II. 

Be sure to [Subscribe](https://www.youtube.com/@QRLedger) and stay tuned for further details!

### Geometry Labs AMA

{{< image "./images/h.fusion.png" >}}

Geometry Labs has developed a highly aggregatable post-Quantum Fusion signatures, one-time signatures that aggregate to scale authentication in a Quantum secure manner, for the QRL ecosystem, with funding from the QRL Foundation. Geometry Labs joins hosts Michael Strike and Ryan Malinowski in the latest episode of The QRL Show to discuss Fusion signatures. 

The potential applications of Fusion signatures are not restricted to being used only within the QRL ecosystem; rather, they extend to general authentication. Websites and services will need to implement post-quantum authentication in order to protect the security of their customers' online financial transactions as pre-quantum cryptography becomes increasingly susceptible to attack.

Because fusion signatures are able to aggregate signatures from a number of different sources, they are ideally suited for use in financial transactions, which typically involve multiple authentications taking place all at once. Amazon Key Management is another example, which uses thousands of queries every single day, which is why the aggregation of signatures is such a helpful feature for authentication.

Check out our entertaining QRL Show below if you haven't already! Still have questions? Stay tuned for our upcoming Reddit AMA. Want to dig further? Check the associated [Fusion signature blog post](/blog/announcing-fusion-post-quantum-digital-signatures/). 

{{< youtube "TfTpGNoNnnU" >}}

Since the video was released, the [python library was developed and launched](https://github.com/geometry-labs/fusion-cryptography) which can be installed simply by invoking `pip install fusion-cryptography` from your favourite terminal. See the GitHub repository for more details on usage!

## Project Zond Development

Right now, Zond is in the devnet, which you can participate in by reading our [previous blog](/blog/zond-public-devnet-prerelease/); however, we are inching closer and closer every day to our next milestone, *testnet*!

Last month, the consensus algorithm powering the Beacon chain has undergone significant development, with API and other fixes among the many updates. Now included is a placeholder for signature aggregation (for future improvements) and replacing existing code without signature validation. This is to the point that it's now accepting blocks created from the Validator Client. Dilithium cryptography's beacon node attestation pool has been updated which doesn't use signature aggregation.

Changes have been made to the code of withdrawal processing to supported unaggregated Dilithium based keys, with other withdrawal related changes in progress. Signature batching has been updated to support unaggregated Dilithium based keys, as well.

Extra signatures appended in the attestation transaction have been fixed. Additionally, one notable improvement is related to the transmission of the attestation transaction by the validator client. Instead of including the 2592 bytes of dilithium public key, a more efficient approach is being implemented. A bitfield representation is being utilized to indicate which validators have signed the transaction, resulting in a smaller data size and improved network performance.

## Quantum Computing Developments

{{% qnews start="2023-05-01" end="2023-06-01" %}}

## Changelog

### theQRL/api.theqrl.org

**[Deployment changes](https://github.com/theQRL/api.theqrl.org/pull/41)**
			
- [[433fd](https://github.com/theQRL/api.theqrl.org/commit/1d0a8415de0e4705cdb444f92669cf7cb52433fd)] Deployment changes		
- [[10e18](https://github.com/theQRL/api.theqrl.org/commit/7205bdb4a6179b4fc758457bf5531c9759410e18)] Deployment changes		

### theQRL/block-explorer

**[MS balance rounding display fix](https://github.com/theQRL/block-explorer/pull/423)**
			
- [[207b3](https://github.com/theQRL/block-explorer/commit/cbe1c5e053f8af051fbeb5a595b426a78e0207b3)] Merge pull request #412 from jplomas/master

NFT explorer functionality to testnet		
- [[61a20](https://github.com/theQRL/block-explorer/commit/b93d43c4108b75bb7f29203e0b4216fe9f061a20)] Merge pull request #417 from theQRL/master

Even Testnet version with Mainnet version		
- [[5d6e8](https://github.com/theQRL/block-explorer/commit/25a0ff3b4eb564f6112b12e6f80d0c6f3235d6e8)] Multi-sig address balance fix		
- [[91ddf](https://github.com/theQRL/block-explorer/commit/1e9a0b1a0f8e028b36b1a9e283a3b226d5891ddf)] Merge pull request #422 from jplomas/master

fix: MS address page rounding		
- [[24a8d](https://github.com/theQRL/block-explorer/commit/acb8a1f12f0cf7382238cb040730374a7d924a8d)] Merge branch 'master' into testnet		


**[fix: MS address page rounding](https://github.com/theQRL/block-explorer/pull/422)**
			
- [[6902e](https://github.com/theQRL/block-explorer/commit/6efdc163cfb69891ae24c7c0f18ea27c9556902e)] Remove extraneous console.log		
- [[8cf51](https://github.com/theQRL/block-explorer/commit/a1f045f8defc833a29d265546e697d4d8de8cf51)] Merge remote-tracking branch 'origin/master'		
- [[2343b](https://github.com/theQRL/block-explorer/commit/e931e79e91850f0102fcb2b0de681e3f7462343b)] Merge branch 'theQRL:master' into master		
- [[25202](https://github.com/theQRL/block-explorer/commit/2afe9073b2c9fe4e44514677a32a59c9ae325202)] Dependency update		
- [[7ef60](https://github.com/theQRL/block-explorer/commit/81c413ff8dcda2b7b7d993e8f0c240568b37ef60)] Merge remote-tracking branch 'origin/master'		
- [[5d6e8](https://github.com/theQRL/block-explorer/commit/25a0ff3b4eb564f6112b12e6f80d0c6f3235d6e8)] Multi-sig address balance fix		

### theQRL/security

**[Add official verification](https://github.com/theQRL/security/pull/2)**
			
- [[71033](https://github.com/theQRL/security/commit/eaa7eb08b2049e6de27a506a1c63c177f8571033)] Official verification		
- [[e84dc](https://github.com/theQRL/security/commit/f2b3cc800036655811881d0e2b034312ff7e84dc)] Add discord + usage		
- [[077cb](https://github.com/theQRL/security/commit/0794ac4d3ddc685a8243aebbfd3c65690d2077cb)] Adjust names		

### theQRL/theqrl.org

**[Add blog: Last Month at QRL - April 2023](https://github.com/theQRL/theqrl.org/pull/346)**
			
- [[5fdd8](https://github.com/theQRL/theqrl.org/commit/c5902fb6bdcfd5c9652d737c79603b897765fdd8)] Fix mobile menu link team -> partners		
- [[09de5](https://github.com/theQRL/theqrl.org/commit/38f5f3a0f73c7e73fc425ef16796ac3d86f09de5)] Merge remote-tracking branch 'upstream/main'		
- [[e648c](https://github.com/theQRL/theqrl.org/commit/7064412620eb222077f2d0d16176b3c2133e648c)] Last Month at QRL - April 2023		
- [[55683](https://github.com/theQRL/theqrl.org/commit/c91d39368bdc3dad34e6ad25e86b2a525f155683)] Adjustments. Ryan M		
- [[349e7](https://github.com/theQRL/theqrl.org/commit/339008430552d39cf4f4f2b224412a8fd38349e7)] Add quantum news items		