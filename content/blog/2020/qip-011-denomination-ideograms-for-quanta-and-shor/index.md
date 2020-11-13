---
layout: blog-post
slug: qip-011-denomination-ideograms-for-quanta-and-shor
date: 2020-01-16T20:56:42.095Z
author: "Jack Matier"
title: "QIP 011 — Denomination ideograms for Quanta and Shor"
subtitle: "Creative? Have a thought of what the denominations of QRL (Quanta, Shor) should look like? Lets see them!"
featured_image: 1OAPFL1PNSbPS6r4oNA392A.png
images:
  - 1OAPFL1PNSbPS6r4oNA392A.png
categories:
  - technical
---

## Summary

QRL Improvement Proposals (QIPS) can be used for a wide variety of things pertaining to QRL ecosystem which aren’t suited as github issues (which we *highly* appreciate and look forward to!). Usually, they’re technical in nature but they don’t need to be! This QIP is design related to improve the interaction and integration of QRL into various user facing interfaces and can be seen as an example on the flexibility of the QIP process.

*It should be noted* that the seeds for this QIP evolved during discussions at our developer meetup in Amsterdam2020 that will still be going on as this blog hits the world wide web! Look forward to more on the fruits of our summit at a later date.

With that out of the way, for this QIP, **we’re looking for two groups of people**:

1. Creatives to design different currency concepts for Quanta and Shor, our two denominations. Please continue reading to the end to better understand submission requirements!
1. People from all walks of life to act as private judges to evaluate whether a submission resembles like that of a currency. Interested? Please either message jackalyst on [discord](https://discord.gg/jBT6BEp) or through email at jack@theqrl.org.

## Motivation

Ideograms are useful in conveying an idea or concept which is independent of any particular language.

Doing so as an SVG allows for usage in a wide variety of mediums. Further creating a webfont hosted either locally or from popular third-party services has the added advantage of being able to be easy to implement.

## Specification

The reference asset format should follow the Scalable Vector Graphic (SVG v1.1) standard which has a wide userbase and can be incorporated into a font and hosted either locally and/or on third-party services.

This will be then compiled into the Web Open Font Format (woff) and Web Open Font Format 2 (woff2) standards.

In order to qualify whether a prospective ideogram is symbolic as a currency, it should be tested against a diverse background of people from different regions with a positive result being that it’s recognized as a currency.

For the test, every positive result can be recorded as 1 and negative as 0. These results would then be compiled and an average established with the final resulting floating point value between a 0 and 1. An overall result that’s greater than a value that’s to be determined through discussions will signify whether the ideogram works to represent a currency in a series of short-listing rounds.

## Backward compatibility

Both SVG 1.1 and Woff/Woff2 are open standards and offer wide support.

## Implementation

1. Quanta and Shor ideograms should be uploaded, *separately*, as a gist in the SVG format and linked to in a comment as part of the comments-uri thread of this QIP: [https://github.com/theQRL/qips/pull/23](https://github.com/theQRL/qips/pull/23)
1. A diverse team will be elected to do an initial round of testing as specified in the specification portion of this QIP with a process where the submitter of the ideogram wont be identified.
1. Ideograms would be short-listed and tested against a wider audience less familiar with QRL and short-listed further.
1. A vote would take place to identify favourite currency ideograms
1. The selected ideograms would be cleaned up and made into respective woff and woff2 files.

## Anticipated common questions (ACQ!)

**What values are Quanta and Shor?**

Quanta represents a whole value of QRL. As of today there’s 70,000,000 Quanta in circulation.

Shor is 1x10^-9 Quanta (0.000000001) and is the smallest unit of QRL.

**What if I don’t know how to use github, or a … gist?**

Feel free to ask in our support channel in discord for some help and if a team member doesn’t help out, we’re sure a member of the community can assist you. GitHub (and git) can seem scary, but it wont bite, promise.

**Why upload the ideograms separately? This can hurt consistency between shor / quanta designs**

Unfortunately it would be hard to evaluate whether they fit the criteria outlined above if they’re evaluated together. After proper candidates are chosen, the files will be cleaned up and made to have similar design attributes (ie. line thickness, endings, etc)

**What is the submission deadline?**

The submission deadline will be determined at the discretion of the judges based off of submission frequency and any other factors deemed appropriate. When the deadline is determined there will be a last-call announcement.

Have an idea yourself that can improve the QRL ecosystem which doesn’t fit as an issue and want to make your own QIP but are too intimidated by the process or not sure if it’s something that would qualify? *Please* reach out to jackalyst on discord or through email at jack@theqrl.org.

Also feel free to first hash the thought out with our friendly community as well either on [discord](https://discord.gg/jBT6BEp) or [reddit](https://reddit.com/r/QRL).