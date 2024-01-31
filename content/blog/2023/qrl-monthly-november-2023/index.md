---
layout: blog-post
slug: qrl-monthly-november-2023
date: 2023-12-01
author: "The QRL Core Contributors"
title: "QRL Monthly, November 2023"
summary: "The QRL Zond development progressed, including completed upstream changes, ongoing testing for syncing speed improvements, and efforts to optimize block size for enhanced system performance. In parallel, the QRL Foundation participated as a sponsor in the PKIC Post-Quantum Cryptography (PQC) Conference and member of the PKIC, emphasizing its commitment to cryptographic research and industry collaboration."
featured_image: header.png
categories:
  - monthly
toc: true
---

## Highlights

###  PKIC Post-Quantum Cryptography’s (PQC) Conference

{{< image "./images/h.pkic.png" >}}

The QRL Foundation was happy to have been a member of the PKI Consortium as well as a sponsor of the PKI Consortium’s second hybrid Post-Quantum Cryptography (PQC) Conference in Amsterdam, the Netherlands on November 7 and 8.  

Attending the Post-Quantum Cryptography Conference hosted by the PKI Consortium held significant importance for individuals and organizations involved in the field of cryptography. Michael Strike, the Director of Outreach for the QRL Foundation, played an active role in representing the organization at the conference until the afternoon of November 10th. His presence offered attendees an opportunity to engage with a key figure from the QRL Foundation, potentially leading to valuable networking, collaboration, and the exchange of ideas. 

Being a member of the PKI Consortium and a sponsor of the conference, the QRL Foundation demonstrates its commitment to staying at the forefront of cryptographic research and fostering collaboration within the industry. 

## QRL Zond Development

The majority of the upstream changes for the execution node have been completed; however, a few more upstream changes for the execution node are still in progress.

Unit tests are currently being performed on the Beacon Node to ensure the robustness of its functionalities. Upstream changes have been successfully implemented, and critical pull requests (PRs) have been merged to improve optimisation, address bugs, and add support for new APIs. 

Syncing improvements have been implemented to improve system performance. The time required to process a batch of blocks has been recalculated, which helps to improve overall efficiency. Additionally, P2P timeouts have been adjusted to address syncing issues. Early testing results show a significant 20x increase in syncing speed, highlighting the positive impact of these improvements on the synchronisation process. Block Size Optimisation efforts have been made, with ongoing testing aimed at reducing the block size from 2.5MB to a more efficient size measured in fewer kilobytes. 

The development team is hard at work improving the system, addressing critical issues, and improving performance. Early testing results show that syncing speed has improved significantly. 

Stay tuned for more information!

## Changelog

### theQRL/go-zond

**[Updated betanet config](https://github.com/theQRL/go-zond/pull/12)**
			
- [[bd52f](https://github.com/theQRL/go-zond/commit/ff890a9d59da29ff7d245d1877e512b5976bd52f)] Updated BetaNet genesis config		
- [[2cc87](https://github.com/theQRL/go-zond/commit/d3cd6e915cf311edb0a29536a14ecf900912cc87)] Merge remote-tracking branch 'upstream/main'		


**[Bug Fixes + Updated BetaNet Config](https://github.com/theQRL/go-zond/pull/11)**
			
- [[27e69](https://github.com/theQRL/go-zond/commit/cc93db7035e5696805fada75b000ea5383327e69)] Review package name		
- [[e00de](https://github.com/theQRL/go-zond/commit/cf0a8d61592bb12c874b932f2fb850429f6e00de)] gzond: fix build errors		
- [[35791](https://github.com/theQRL/go-zond/commit/6e137d0c686c1f4687aeb63b5ec453609e335791)] gzond: fix build errors part 2		
- [[156a6](https://github.com/theQRL/go-zond/commit/3010ea2ba4121ae9b05391742e8a81b9601156a6)] Merge pull request #1 from rgeraldes24/fix/package

### theQRL/qrysm

**[Bug fix + updated configs](https://github.com/theQRL/qrysm/pull/23)**
			
- [[df090](https://github.com/theQRL/qrysm/commit/0d6319a4a94635bf83bff1614e342ad7bfedf090)] Fix bazel build errors		
- [[21b1b](https://github.com/theQRL/qrysm/commit/8b72887429039f2e3d274c9de7e31974cc521b1b)] Merge pull request #1 from rgeraldes24/fix/bazel

Fix bazel build errors		
- [[daa3d](https://github.com/theQRL/qrysm/commit/d2f88b2e58dcdb8ab0f145fd3b853977902daa3d)] Increased TtfbTimeout & RespTimeout to avoid sync status timeout		

### theQRL/theqrl.org

**[QRL Weekly, 2023-November-28](https://github.com/theQRL/theqrl.org/pull/387)**
			
- [[1fc98](https://github.com/theQRL/theqrl.org/commit/43f3f791f84dcd66d60c9fbc2e1e057dfb11fc98)] QRL Weekly, 2023-November-28		


**[QRL Weekly, 2023-November-21](https://github.com/theQRL/theqrl.org/pull/386)**
			
- [[a777e](https://github.com/theQRL/theqrl.org/commit/d1be791c8a5b3b246fd7627c84707a19031a777e)] Improvements for fetching stats		
- [[9e9cb](https://github.com/theQRL/theqrl.org/commit/8938cbf6fb2bbf7ca29c0e7cfcd9c068eb99e9cb)] Improve blog bootstrap file		
- [[a4f57](https://github.com/theQRL/theqrl.org/commit/5accce711928ba79a7b6d009d9802940541a4f57)] Add bg.svg for future reference		
- [[40305](https://github.com/theQRL/theqrl.org/commit/d4f09e58089997f1913959650d5244c5b9640305)] History of Cryptography, behind the code - Episode 1		
- [[35c61](https://github.com/theQRL/theqrl.org/commit/52c8aa18e67655a25141455b863d9164a2035c61)] Add image to QRL Games winter hackathon (2022)		
- [[a5f3f](https://github.com/theQRL/theqrl.org/commit/fb8ff9073c061c80b6592a3653e82ae7c4aa5f3f)] QRL Weekly, 2023-November-21		
- [[1c632](https://github.com/theQRL/theqrl.org/commit/b4e436b30c7d12bfa38248446a08e5694e71c632)] Markets adjustment		


**[QRL Weekly, 2023-November-14](https://github.com/theQRL/theqrl.org/pull/385)**
			
- [[a263c](https://github.com/theQRL/theqrl.org/commit/59156de37ae8396b4beba753e9e1f5c40f6a263c)] QRL Weekly, 2023-November-14		
- [[47c41](https://github.com/theQRL/theqrl.org/commit/86b37b2b435ab4de74a71973cb93905b7f847c41)] Fix GA-4		


**[Analytics fix](https://github.com/theQRL/theqrl.org/pull/384)**
			
- [[d4dd4](https://github.com/theQRL/theqrl.org/commit/06861b1528f45c40fcd4bac7068de96cebfd4dd4)] Added additional repositories		
- [[a4c8f](https://github.com/theQRL/theqrl.org/commit/ce05620d24023c5d918f97cc136ad337db3a4c8f)] GA4		


**[Cointiger: Maintenance -> true](https://github.com/theQRL/theqrl.org/pull/383)**
			
- [[4ba6f](https://github.com/theQRL/theqrl.org/commit/206f22739f368994387cd99d29c353a6b874ba6f)] Cointiger: Maintenance -> true		


**[QRL Weekly, 2023-November-07](https://github.com/theQRL/theqrl.org/pull/382)**
			
- [[4d27c](https://github.com/theQRL/theqrl.org/commit/3e64c35819cf5d838c79d9ef33040576a514d27c)] QRL Weekly, 2023-November-07		


**[QRL Monthly: feat QRL Zond private beta-testnet - October 2023](https://github.com/theQRL/theqrl.org/pull/381)**
			
- [[e82c6](https://github.com/theQRL/theqrl.org/commit/e94b6da5b5067138dca627a90765a379411e82c6)] QRL Monthly: feat QRL Zond private beta-testnet - October 2023		


**[QRL Weekly, 2023-October-31](https://github.com/theQRL/theqrl.org/pull/380)**
			
- [[289b0](https://github.com/theQRL/theqrl.org/commit/cb212c1808926b3c10a3656dba6bc2e9241289b0)] QRL Weekly, 2023-October-31		


## Quantum News

{{% qnews start="2023-11-01" end="2023-12-01" %}}