---
layout: blog-post
slug: last-week-in-qrl-july-16-22
date: 2019-07-22T14:37:04.472Z
author: "Adam Koltun"
title: "Last Week in QRL July 16–22"
summary: "Development Updates, Development Spotlight — Command Line Interface"
featured_image: 1DQi6RXNonqobovCZNSbs3w.jpeg
images:
  - 1DQi6RXNonqobovCZNSbs3w.jpeg
  - 1UwHBJMwLRaKWB_8RlSp8Ng.gif
categories:
  - technical
---

## Introduction

As we move into the final week of July, plans for the QRL developer summit in August have been largely laid out, with only the details remaining. As mentioned in the AMA and elsewhere, this gathering of the QRL developers will be focused on Proof-Of-Stake, and will occur in Europe in August. It represents the first time that all of the developers will be in one physical location, as well as the largest gathering of QRL team members to date. We will have more on what comes of that developer summit once it has come and gone. For now, here is some of what went on last week.

## Development

{{< image "./images/1DQi6RXNonqobovCZNSbs3w.jpeg" >}}

* **qrl-cli: **fix: zip release assets
* **go-qrl:** Added lock before initializing Downloader
* **QRL:** Merged Dev

## Development Spotlight — The QRL CLI

{{< image "./images/1UwHBJMwLRaKWB_8RlSp8Ng.gif" >}}

One of the many exciting developments being worked on by the talented team of QRL developers is the [QRL Command Line Interface](https://github.com/theQRL/qrl-cli) (CLI). For the less technically inclined, a CLI is a text-based user interface used to view and/or manage computer files.

CLIs are an integral tool in the toolbox of a properly mature network. Not everybody wants to download a whole QRL node, or familiarize themselves with a node package manager or golang to be able to access the power of the [QRL API](https://github.com/theQRL/api.theqrl.org) and ecosystem. In addition, there are environments in which it makes more sense to run commands in a self-contained fashion locally (network attached), and in the context of an advanced administrator to interoperate with other programs.

One example of a use-case would be an executable function to notarize documents on the QRL blockchain. More features are being added stage-by-stage, aiming to give access to the full suite of features of the platform by the time of public release.