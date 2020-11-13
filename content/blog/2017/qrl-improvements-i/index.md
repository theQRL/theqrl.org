---
layout: blog-post
slug: qrl-technical-weeks-37-37
date: 2017-09-14T10:37:50.146Z
author: "Juan Leni"
title: "QRL Technical -  Weeks 36–37 Crypto"
subtitle: "TL;DR: The crypto module is now in C/C++. Architecture is being reworked. Performance is significantly higher (verification is more than 500 times faster). Lots of improvements in the pipeline."
featured_image: 1STNzxj7TyR6ToFVAvwGlLQ.png
images:
  - 1STNzxj7TyR6ToFVAvwGlLQ.png
  - 11j7P35hVz9R83Q0R0-pLdA.png
  - 1gChN5OuNxqGRPRgj4apuXw.png
categories:
  - technical
---

**TL;DR:** *The crypto module is now in C/C++. Architecture is being reworked. Performance is significantly higher (verification is more than 500 times faster). Lots of improvements in the pipeline.*

## Crypto Module

XMSS represents one of the most critical aspects of QRL. There is a well known saying in cryptography: “Do not roll your own crypto”. While it is possible to argue for different software implementations, using home-grown cryptographic algorithms is risky. Particularly, when they have not been reviewed by the community. XMSS not only has been published as a IETF working document ( [IETF draft version 10](https://datatracker.ietf.org/doc/draft-irtf-cfrg-xmss-hash-based-signatures/) ) but also the authors of the original [paper](https://eprint.iacr.org/2011/484.pdf) have released a C reference implementation into the public domain.

As we move from prototype to production (*mainnet*), it is important that we review and measure architectural aspects such as performance, maintainability, security, etc.

In the last few weeks, @leongb and I have been working hard on improving the performance and maintainability of the crypto module. This effort required decoupling crypto related code while at the same time working on performance aspects.

The plan was to initially incorporate and adjust the public domain reference implementation and to provide a clean API to all our QRL components. In a second stage, improvements to facilitate maintenance in the future.

After a lot of hard work, we are happy to announce that an early release is available and we are already testing the new QRL node in a private testnet (more about this later).

There are still a few challenges before going stable. Moving to C/C++ involves building, supporting and deploying binaries to different platforms. We are currently working on providing wide support to the most important ones. In addition, some aspects such as seed sizes, signature format, etc. have changed so we are planning the corresponding hard-fork after some additional testing.

### Not only that

The refactoring/improvement effort comes with some *freebies*.

* Python 3 comes “for free”! The node and *qrllib* are now using v3.5! Bye bye, 2.7!
* The library was designed with portability and wide-support in mind. By using [SWIG](https://en.wikipedia.org/wiki/SWIG), not only a Python module will be available but also wrappers for Golang, Java, etc will be available soon. In addition, we are looking at [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly) to provide Javascript support. The outlook is that a highly performing codebase will be shared by most of QRL applications regardless of the programming language or platform. Imagine running a node in your web browser! soon..? who knows?
* The code quality/coverage effort is on-going and we see the metrics going up every day. We are looking forward to the day we reach 95%.

## Performance Improvements

Now, what does this all mean? The performance improvement is certainly big! There might be other bottlenecks that may temporarily dampen the overall effect but we will be working on those too in the next weeks! From the three main operations (createkeys/sign/verify), verification has the most influence in the throughput. A huge number of transactions per second has to be verified. And the good news is that the improvement is massive!

Each XMSS address provides a limited amount of signatures. To achieve a high number of signatures, the XMSS tree must grow and operation times depend on the size of the tree. Tree size can be defined by the height of the tree. For a height *h*, the tree will allow for 2^h signatures. For instance, h=12 results in 4096 signatures per address. There are ways to extend this and we are working on that, but it is out of the scope of this article.

As the tree height increases, the python implementation gets slower. Creating a new wallet was time consuming and high verification times mean that the scalability of the network was at risk. This is not the case anymore with *qrllib*. The following figures show a comparison between the previous code (python) and the new *qrllib*. In particular, it is interesting to notice (Figure 1) how signing and verification times are almost independent from the tree height. Height can certainly increase without impact on performance!

{{< image "./images/1STNzxj7TyR6ToFVAvwGlLQ.png" >}}*Figure 1. Performance Measurements (operation time)*

When comparing relative performance (Figure 2), signing and verification scale in a much better way than the old python code. Last but not least, Figure 3 shows the amount of operations per second that we could measure at each tree height.

{{< image "./images/11j7P35hVz9R83Q0R0-pLdA.png" >}}*Figure 2. Relative speed up factor (*qrllib* vs python | Operations per second)*

{{< image "./images/1gChN5OuNxqGRPRgj4apuXw.png" >}}*Figure 3. Operations per second*

```
**How did we measure?**

For each height/implementation, each operation was ran N times and measurements were averaged.

- CreateKeys N=3
- Sign       N=16
- Verify     N=1000

The worst out of 3 independent samples is reported.

Tests were ran on Ubuntu LTS 16.04 4.10.0-33-generic with an i7-5930K CPU @ 3.50GHz. Python version 3.5.3
```


## Next?

* The library is not yet fully optimized. We still have some aces (+4!) up our sleeves so it is likely that *qrllib* performance will get even better in the near future.
* The architecture work is still on-going and I will now move on to serialization and P2P networking. We are confident that we can get great improvements in that area too. Faster synchronization times, better backwards compatibility, etc. etc.
* *qrllib* is currently running on a single core (mostly due to python restrictions). After improving serialization and P2P, multithreading will very likely result in a further increase in the amount of verifications handled per second.