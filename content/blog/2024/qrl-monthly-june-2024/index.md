---
layout: blog-post
slug: qrl-monthly-june-2024
date: 2024-07-02
author: "The QRL Core Contributors"
title: "QRL Monthly, June 2024"
summary: "Ongoing code reviews QRL Zond. Block Indexer transaction storage enhancements are now complete, and an internal taste of QRL File Tools (QRLFT)."
featured_image: header.png
categories:
  - technical
features:
  - nfts
toc: true
---

## Feature: Celebrating six years of post-quantum security

{{< image "./images/f.anniversary.png" >}}

Six years ago, on June 26, 2018, we launched QRL, setting a new standard in blockchain technology.

Our goal was ambitious: to create the first enterprise-grade, quantum-secure blockchain, leveraging the stateful signature scheme XMSS, a far cry from the ECDSA used in other major blockchains like Bitcoin and Ethereum.

QRL isn’t the only entity making strides. Over the past year, numerous significant advancements and widespread adoption have been showcased across various sectors in the quantum computing space. This includes everything from organizations like Meta, Apple, and Zoom securing their systems from future quantum threats, to plans to launch larger scale quantum computers in the span of a few years.

There's a lot to look ahead, especially with QRL Zond, which takes us into the next generation of QRL. 

{{< button url="/" text="Read more in our blog" >}}

## Addressing The Quantum Threat at Consensus in Austin, TX 

We recently had the exciting opportunity to film the latest episode of the QRL Show live at the Consensus conference in Austin, Texas. The episode focused on the growing awareness of the quantum threat among institutions over the past 6-12 months, a topic of increasing relevance and urgency.

{{< youtube 3GZas_LRTMM >}}

## Development updates

### QRL Zond

The code review for the JavaScript implementation of XMSS is ongoing. Significant progress has been made, including the review of `ProcessSyncAggregate`, `VerifySyncCommitteeSigs`, and `ProcessBlockForStateRoot` for Qrysm. Additional reviews have covered `ProcessVoluntaryExits`, `ProcessDilithiumToExecutionChanges`, and `altairOperations`. Critical components like attestation reward, process deposit for new validators, and `SparseMerkleTree` for deposit proof and verification calculation have also been reviewed. 

We are re-evaluating the required unit tests for Go-zond and have deprecated the web3-zond-personal package from web3.js. Updates to core type schemas in web3.js reflect the latest Go-zond version, and all fork logic except Shanghai has been removed. The RFC7468-standard Dilithium pk files have been integrated into the signing tool, with a new version released internally and GitHub action automation underway.

#### Block Indexer

The block indexer transaction storage enhancements are now complete, and we are currently working on improving database queries and indexing status tracking. The transaction indexer is functional, with some improvements from recent testing being implemented prior to the internal release.

#### QRL File Tools

QRLFT (QRL File Tools) has been released for internal testing alongside a GitHub action, with documentation and sample use cases for both currently in progress to be released later for public review. Further enhancements and functionality are also being developed. This release primarily provides essential Dilithium functions to QRL and the broader open-source community. 

## Development Changelog

> Note that this changelog represents the pull requests from the our main [organization repository](https://github.com/theQRL/), but don't reflect the work performed in each developers local repos that haven't been committed.

### theQRL/QRL

**[Merge Dev](https://github.com/theQRL/QRL/pull/1783)**
			
- [[1dc1d](https://github.com/theQRL/QRL/commit/503ce8e86fc02ee3d91ad1037d651256d761dc1d)] Wallet daemon optimization removed non-required verify on save for non encrypted wallet		
- [[50bfb](https://github.com/theQRL/QRL/commit/26941c28b754f6ea823990fa781a88e4c4b50bfb)] Merge pull request #1782 from cyyber/dev

Wallet Daemon Optimization		


**[Wallet Daemon Optimization](https://github.com/theQRL/QRL/pull/1782)**
			
- [[99e42](https://github.com/theQRL/QRL/commit/745ceb6d40302404a1d4582cbef23a046ca99e42)] Merge pull request #1781 from theQRL/dev		
- [[1dc1d](https://github.com/theQRL/QRL/commit/503ce8e86fc02ee3d91ad1037d651256d761dc1d)] Wallet daemon optimization removed non-required verify on save for non encrypted wallet		

### theQRL/theqrl.org

**[Add headers (credit: Kunal Mhaske)](https://github.com/theQRL/theqrl.org/pull/427)**
			
- [[96246](https://github.com/theQRL/theqrl.org/commit/17f3d3149cf03b32c83f20b359d4293c15a96246)] Add headers (credit: Kunal Mhaske)		


**[Celebrating Six Years of Post-Quantum Security: The Journey of QRL](https://github.com/theQRL/theqrl.org/pull/426)**
			
- [[530fd](https://github.com/theQRL/theqrl.org/commit/22d66ec26d6ed5bc478427323e7164369eb530fd)] Celebrating Six Years of Post-Quantum Security: The Journey of QRL		


**[QRL Weekly, 2024-June-18](https://github.com/theQRL/theqrl.org/pull/425)**
			
- [[2a96a](https://github.com/theQRL/theqrl.org/commit/b0ad6a31e4a917ae9715c082d4ffb28694a2a96a)] Quantum news updates and revisions		
- [[2035c](https://github.com/theQRL/theqrl.org/commit/8a386ec29a960c80015da0f2168b44a5e062035c)] Organisation logo updates		
- [[b50c5](https://github.com/theQRL/theqrl.org/commit/2b3e9162ded4e498426be8f14427f0f0771b50c5)] QRL Weekly, 2024-June-18		


**[QRL Monthly, May 2024](https://github.com/theQRL/theqrl.org/pull/423)**
			
- [[df9a7](https://github.com/theQRL/theqrl.org/commit/d8585bcc8962b29feab1fcee089164905b8df9a7)] QRL Monthly, May 2024		


**[QRL Weekly/Monthly](https://github.com/theQRL/theqrl.org/pull/422)**
			
- [[8c865](https://github.com/theQRL/theqrl.org/commit/c42603f3ecce2ca7cca9ea0abc3fae522788c865)] Update command to support ImageMagick7		
- [[51360](https://github.com/theQRL/theqrl.org/commit/e64b7626421fff1e64e8ccbc049c5d0166c51360)] Quantum news updates		
- [[1a1b9](https://github.com/theQRL/theqrl.org/commit/b8e52f56ab910388047af27dc4fccb8024c1a1b9)] QRL Monthly, April 2024		
- [[aa4b4](https://github.com/theQRL/theqrl.org/commit/17ccb015041e5395135be0c077e68d367faaa4b4)] QRL Weekly W23,W24, 2024		


**[Remove svg overflow](https://github.com/theQRL/theqrl.org/pull/421)**
			
- [[ece3d](https://github.com/theQRL/theqrl.org/commit/b781b517d4c19ce43822246c3018467d4e7ece3d)] Remove svg overflow		
- [[057b2](https://github.com/theQRL/theqrl.org/commit/b3599b9ddfecbf636e54023d30855b37c82057b2)] Revert SVG viewbox removal		


**[Fix svg](https://github.com/theQRL/theqrl.org/pull/420)**
			
- [[3f7a2](https://github.com/theQRL/theqrl.org/commit/d932748851267ba027abe7aa1fcf88e04293f7a2)] Fix svg		


**[BIMI compatible favicon](https://github.com/theQRL/theqrl.org/pull/419)**
			
- [[b5ea1](https://github.com/theQRL/theqrl.org/commit/68e446167f581e247f9f55e38bff32989f4b5ea1)] BIMI compatible favicon		


## Quantum Computing Developments

{{% qnews start="2024-06-01" end="2024-06-30" %}}
