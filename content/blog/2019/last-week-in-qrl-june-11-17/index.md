---
layout: blog-post
slug: last-week-in-qrl-june-11-17
date: 2019-06-17T14:21:24.870Z
author: "Adam Koltun"
title: "Last Week in QRL June 11–17"
summary: "Development Updates, Automatic Token Migration Officially Closed"
featured_image: 14VaOiIb07ao_DFgn40dFBg.png
images:
  - 14VaOiIb07ao_DFgn40dFBg.png
  - 1e6qih6FrQ8a63a5n7_Aviw.jpeg
  - 1NIBC_49JalGTPM8YDVymzA.jpeg
categories:
  - technical 
---

## Development

{{< image "./images/1e6qih6FrQ8a63a5n7_Aviw.jpeg" >}}

* **go-qrl:** Updated Balance datatype to string in PlainBalance
* **js-api-bridge:** Added support for more APIs + Added QrlAddressValidator
* **hw-app-qrl:** add getAddress with expected LLD outputs
* **wallet-helpers:** Add QRLAddressFromEPKHex method

## Automatic Token Migration Closed

{{< image "./images/1NIBC_49JalGTPM8YDVymzA.jpeg" >}}

On June 15th, 2019, automatic token migration closed for the QRL ERC20 token (dedicated blog [here](/blog/automatic-token-migration-complete)). Overall, automatic token migration ran for \~12 months, and saw the successful transfer of around 90% of the ERC20 population. During those 12 months, there were a number of somewhat predictable flurries of activity; the start of migration, shortly before/after the blockchain launched, and as we approached the final deadline for automatic token migration.

During the entire run, there were no reported instances of tokens being lost in migration. Support requests were relatively few and far between, which is a positive indication of the robustness of the process. We would first like to credit our developers for their diligent work in creating, managing, and supporting the automatic token migration application. Without them, automatic migration never would have been possible, and without their attention to detail, it could have been a truly ugly mess.

We would also like to thank our community; not only was the response to our calls for migration significant, but we regularly witnessed community members spreading the word about migration and helping others (particularly in Discord) who were confused about the process. Thank you for helping to ensure that token migration has so far been such an effective endeavor.