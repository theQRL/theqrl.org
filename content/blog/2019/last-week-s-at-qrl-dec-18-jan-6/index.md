---
layout: blog-post
slug: last-week-s-at-qrl-dec-18-jan-6
date: 2019-01-07T17:34:41.674Z
author: "Jack Matier"
title: "Last Week(s) at QRL -  Dec 18–Jan 6"
subtitle: "Last Week(s) at QRL: Dec 18–Jan 6"
featured_image: 1_1tj04T7JUzIsbu7DvkpQA.png
images:
  - 1v1io_xyLgIhMdT1dkrhdEw.gif
  - 1_1tj04T7JUzIsbu7DvkpQA.png
  - 1JOUTMbvrI1VFrYGMi7E4HQ.png
categories:
  - technical 
---

## Introduction

It has been a little while since our last “Last Week in QRL” blog. So in honour of this being the first blog of 2019, “Happy New Year!”

Obviously this blog will have closer to just one week’s worth of content in it, despite covering two weeks, as both Christmas (check out our [12 days of XMaSS blog](/blog/12-days-of-xmass)) and New Year’s occurred during those weeks. As always, life in a startup project can be very hectic, and everyone enjoyed the opportunity to be able to spend some quality time with their families, and perhaps reflect upon the past year.

As we have stated elsewhere, 2018 was obviously a disappointing year across the cryptocurrency market, in terms of price. However, we believe that both within our project, and across the wider blockchain ecosystem, that some very important and meaningful work has been completed this year. 2018 saw QRL go from an ERC20 to a fully-realised, fully-functional blockchain network. The close of 2018 had QRL as a mineable PoW coin, with liquidity secured, robust documentation and API sites, and many exciting features on the horizon. Given where we were at the start of 2018, we cannot help but look at it as a success.

Hopefully, as time goes on, the overall prices across the blockchain ecosystem begin to more meaningfully reflect the hard work and real progress being made behind the scenes.

## GO-QRL

Go-QRL has been running stable for around a month now running QRL mainnet. While stable, there’s still components required to bring it up to feature parity with the Python implementation — and beyond. Over the holidays, Kaushal continued his perseverance and added a Public API, makefile support, with a new JSON-based backend infrastructure in progress.

The JSON-based backend will make it easier for people to interact with the API without requiring the setup and maintenance of our wallet daemon, walletd.

## Block Explorer

{{< image "./images/1v1io_xyLgIhMdT1dkrhdEw.gif" >}}*Dark and Light Theme*

From the outset, we at QRL have recognised that a piece of software is only as good as the user’s ability to utilise it. To that end, we have never stopped making improvements to our UI/UX. The latest of these improvements, adding a dark theme to our wallet and block explorer, have been another step in that process. This was met with much applause, and some disdain from the community lamenting the disappearance of a light theme.

Based on this feedback, as the above GIF should show, the [QRL Block Explorer](https://explorer.theqrl.org/) will soon have a button to toggle the theme from Light to Dark, and vice versa. We believe this will help make our block explorer experience more pleasant and useful.

## Mobile Wallet Testing

{{< image "./images/1_1tj04T7JUzIsbu7DvkpQA.png" >}}

[When we last checked in](/blog/last-week-s-in-qrl-december-4th-17th-2018) on our mobile app on iOS and Android, we were finishing up internal testing and getting ready to move on to a first round of testing to a select group in the community.

We are happy to report that this has taken place, and that the testing so far has been both productive and encouraging. We recognise that a mobile wallet app is an element that, along with the release of our Ledger app, many in our community have been waiting for.

After some fixes and tweaks take place, we’ll be opening this up to the wider community to test in the next few weeks.

## Ledger Nano S

{{< image "./images/1JOUTMbvrI1VFrYGMi7E4HQ.png" >}}

Speaking of the Ledger App, we have more news. As we stated in our previous “Last Week” blog, we had a release-candidate version of the Ledger app up on our GitHub.

***We can now say that we have entirely completed the Ledger integration, and are now awaiting only a full and thorough review from the Ledger team themselves***, before the app should be ready for release. Integrating with quality hardware like that which Ledger produces represents a significant achievement on the part of the development team, and we are all very proud of the hard work and long hours it has taken to get to being on this precipice of its materialisation.

Scott Donald has studiously put together a tech demonstration on how the wallet and the Ledger Nano S works harmonistically together.


### Ledger Nano X

After 1.5 million devices sold, the Ledger team announced the Ledger Nano X, which you can read more about [here](https://www.ledger.com/pages/ledger-nano-x).

To answer the inevitable question early on as to whether QRL will work on the Ledger Nano X, the answer is the device will work on the QRL wallet, but there’s more work to enable it on the Ledger mobile and desktop apps. We will have more information on this in a separate, Ledger-specific blog.

Of course, this means more toys for the developers to play with!

## Confirmed for DeveloperWeek 2019

Adam Koltun will be speaking at [DeveloperWeek 2019](https://www.developerweek.com/) in Oakland, California on February 20th, at the Oakland Convention Center. [Link to his speaker bio](https://developerweek2019.sched.com/speaker/adam_koltun.1yz9ak9c).