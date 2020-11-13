---
layout: blog-post
slug: external-audits-bug-bounties
date: 2018-04-27T15:57:39.948Z
author: "Jack Matier"
title: "External Audits & Bug Bounties"
subtitle: "TLDR: Red4Sec has begun our security audit, a tip-of-the-iceberg overview of our own code practices and bug bounties in the cryptocurrency space."
featured_image: 1sti3dCDxJO12cL5lkH_qBw.png
images:
  - 1sti3dCDxJO12cL5lkH_qBw.png
features:
  - audit
categories:
  - technical
---

*TLDR: Red4Sec has begun our security audit, a tip-of-the-iceberg overview of our own code practices and bug bounties in the cryptocurrency space.*

**Red4Sec**, our first security auditor who also completed [the audit for NEO](https://twitter.com/NEO_Blockchain/status/942640352707653632), is not only *doing* our audit, ***but has already begun***. Another auditing firm will be joining them shortly after working through the final stages of paperwork, stay tuned!

The successful completion of *both audits* will grant us the ability to reveal a final launch date for mainnet, along with announcing the inception of our bug bounty program.

As a small note, having not one, but **two** audits before the launch of mainnet is a **rarity in the cryptocurrency space** (and with some of the recent security breaches, it shows!) and, along with a to-be-launched bug bounty program, underscores our commitment and openness to being scrutinized.

The Quantum Resistant Ledger is at its core dedicated to ensuring security for all its users and secondary layer applications, both now and into the future. To achieve this level of Post Quantum security, there are several methods that are used.

## An overview: Refinement, Review & Peer-review

Creating a blockchain isn’t exactly putting together a wordpress blog.

Every piece of code needs to be written with a plethora of vulnerability vectors in mind. Code injection, broken authentication, memory leaks, security misconfiguration, cross site scripting, DDoS vectors, and sensitive data exposure are just a *very small* handful of the things to look out for — and can be very easy to miss for inexperienced developers (and sometimes even experienced ones).

The consequences can be dire to miss any of this. [Companies lose $400 billion to hackers each year](https://www.inc.com/will-yakowicz/cyberattacks-cost-companies-400-billion-each-year.html), and just this year, [coincheck had a $530 million dollar heist](http://fortune.com/2018/01/31/coincheck-hack-how/).

Cryptocurrency is the last space to launch an incomplete product to the public, given the stakes at play.

### Refinement: Code Analysis and CI

**CircleCI**: Allows us to release code by automating the build, test, and delivery process. This means at every code change and Pull Request, the deployment of an entire blockchain and having it run successfully is a requirement before it’s allowed to be committed to the code base.
**Codacy & Codebeat:** Allows us to a check on code complexity, security and coverage statistics. This helps to keep our code maintainable and readable for those wanting to review and take a deeper dive. A requirement for open source projects.
**Snyk:** Takes care of the code we’re dependent on. This is arguably one of the first and easiest checks those looking to exploit your code look to. After a responsible disclosure takes place, there’s often proof-of-concept code to that can be run.

If a project still has an out of date dependency when this proof-of-concept code is released, this becomes a copy-and-paste endeavor.

### Code Coverage & Test Suites

If you have heard any of our developers speak, especially Juan or Adem, everything is about coverage and unit testing. Coverage, coverage, coverage.

Coverage (in programming) is the amount of code that’s executed when a test suite is executed.

The **test suite** runs the code against a set of test cases to maintain expected behaviours. This keeps consistency in the expectation that different components in a codebase (especially a P2P one) have.

Everytime a bug is found, replicated and fixed, part of this process is to add the replication part to the test suite so it doesn’t happen again.

### Integration Testing

Integration testing is yet another phase of testing that takes all these disperse components, combines them and tests them as a group.

### Review & Peer-review

After all the automated and semi-automated checks, any non-trivial piece of code written by our poor overworked developers, is peer-reviewed by our other poor overworked developers.

### More

There’s testing fork recovery, fuzzing the API, launching temporary MockNets and more. What was covered here is just the tip-of-the-iceberg for everything our codebase (and developers) are subjected to.

## Taking it a step further: External Audits

External firms have even more of an incentive to find something (for the fame), as well have the ability to have fresh eyes on a codebase to see things in ways that may be unexpected.

### Red4Sec

With clients like NEO and Ubiquiti Networks along with responsible disclosure (ie. reported vulnerabilities) for Google, BitDefender, Youtube, MySQL, and TenX, there’s no question Red4Sec means business.

*As mentioned above, Red4Sec has already commenced on their audit with us.*

### Mystery Auditor #2

We are at the very final stages of negotiation with our second auditing firm, and will *announce something shortly*. Stay tuned!

## Taking it two steps further: Bug Bounty Program

Finding critical vulnerabilities and bugs is an ongoing process, especially within a complex codebase spanning multiple code repositories and programming languages.

We recognise the importance of taking this process seriously by having *proactive* rather than *reactive* security measures. This is demonstrated by our commitment to testing, conducting internal audits and procuring qualified organisations and/or individuals to perform external audits.

The bug bounty program will expand upon this by incentivising ethical hackers (white hats) to perform responsible disclosure and allows the project to close security holes and fix vulnerabilities safely without service interruption.

### Security focused Bug bounty programs in the cryptocurrency space

For the cryptocurrency (a blended word for cryptography and currency) industry being so ostensibly concerned with… well, cryptography, we were surprised at how *few* projects actually have bounty programs related to security, at any level.

Of the top 25 cryptocurrencies currently totaling a marketcap of \~$350 billion USD (according to coinmarketcap, 2018-04-27), less than half of them (9) had bounty programs that were related to security or bugs, and only 3 of those we considered up to our standards.

### Our own bug bounty program

We are taking the best examples from these programs and compiling them to make one of the most comprehensive bug bounties in the cryptocurrency space. We hope our example will inspire other projects to be more comprehensive with their own bug bounty programs.

This will be launched in close proximity to the release of mainnet and will continue be one of the key elements in our ongoing commitment to security.