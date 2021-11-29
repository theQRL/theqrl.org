---
layout: blog-post
slug: how-do-you-create-a-quantum-resistant-wallet-full-qrl-wallet-walkthrough
date: 2021-03-10
author: "Ryan Malinowski"
title: "How do you Create a Quantum Resistant Wallet? Full QRL Wallet Walkthrough"
summary: "In this episode, we walk you through a full step by step guide to creating a quantum resistant wallet. We cover creating a QRL web wallet, a QRL hardware wallet, and how to transact quanta with ease."
featured_image: maxresdefault.webp
youtube: Q8FeCdww34A
categories:
  - technical
features:
  - qrl-wallet
toc: true
---

## 0:00 Intro 

**Ryan:** In today's episode, we're going to be doing a full QRL wallet walkthrough and we're going to show you the various ways in which to set up a wallet, the first of those being in the browser with a web wallet or a paper wallet, and the second being a hardware wallet with a device such as a ledger. And lastly, we're going to move a few transactions in real time so you can see exactly how it works

## 0:32 Episode Overview

**Ryan:** What is going on everyone and welcome back to another episode of the quantum resistant ledger channel your video portal into the world of post quantum digital asset security. In today's episode, we are going to be doing a full QRL walkthrough we're going to be showing you a variety of ways to create a new wallet, do some transactions live and with me for today's episode is my co host, Michael Strike, our Director of Outreach. Strike, it's great to have you with me as always, back again. Perfect. Well do you want to do? How about we start out by going through QRL wallet creation, I will do the browser web wallet paper wallet. And after I go through that is it cool with you if you do the hardware Ledger Wallet,

**Michael:** Yeah, so I'll run through the ledger. And that'll give you know our viewers watching two different ways with some pros and some cons as to how to create a QRL wallet. And in a lot, a lot of the information will actually apply to, you know other wallets as well, too. So yeah, we can do that. Let's get started.

## 1:41 Creating a QRL Web Wallet

**Ryan:** Okay, so we are here in the browser, and we are going to be creating a web Wallet. So we're going to first go to wallet that theqrl.org. This is the by far the easiest introductory way to create a new QRL Wallet. So what you'll do is go to wallets out the QRL that org once we get here, we want to create a strong passphrase as the starting point, what I recommend you doing if you don't already have a way to generate strong passwords is just go to Google or whatever search engine you use. Go to what is called strong random password generator. Once you're here, we want to select a strong length for a password. So I recommend at least minimum going with 16 characters. Once you're here, just scroll down and make sure that this generate on your device checkbox is clicked this just make sure that your password is not being sent out across the internet. It's not going to be it's just happening locally. So make sure before you hit your generate password, make sure that's clicked, we're going to generate a password here to copy it. And bring it back to our QRL web wallet creation tab. Once we're here, we're just going to be pasting that passphrase that we've created in here, and we're going to go down to the next section. And you'll see here that you have the ability to change the tree height. And in short, the tree height this here shows tree height 10 that there are 1024 one time signatures. So think of the tree height as in, the higher the tree height, the more time it's going to take because you have to generate additional keys. So when you're creating this, you can select any of these you can select a really high one, but it's going to take more processing power and take more time. So just keep that in mind. The default is three out of 10. That should work fine. The same with the hash function, the default is the 128 going with the default here is completely fine. So once we do this, we have our passphrase we've selected our tree heights and our hash function, we're going to click here and create our wallet just takes a moment. We are now presented with the save your wallet file right now. And this is really important. It's just kind of a warning note to say, Hey, make sure when you get to this next page, you're not just forgetting about it, and then you're gonna lose all your private information later. That's really important for a wallet. So just hit the I understand part here, we are presented with your wallet details. So here you have your QRL address your mnemonic phrase, your hex seed, and they're all here. And what you want to do is you can go about saving this information, this important info in a few different ways. The first way you can do is we can save it securely and this will just create a JSON file as you can see it right down here. And we can use this to securely open your wallet. Another way you can do this is you can save it unencrypted here. And if you it's just giving you the heads up that hey, this isn't the most recommended way. You can do that. Another thing you can do is use it as a paper wallet and you can write down your mnemonic or your hexseed with your passphrase and make sure that you have these written down in a place. But whatever method you go about it, just make sure that you take a little bit of time at this step to make sure that you are saving these details in a secure way. So that not only you can find them easier later when you need to access them, but you're not just leaving a big vulnerability. So we are going to do is we've saved this file securely. So what we are going to do is, we are going to hit open a wallet here, we are going to since we have that JSON file, we're going to hit Choose file, we are going to select it right here. What we're going to do then is we are going to take our passphrase that we already created, and hit UNLOCK wallet. At this step, it'll take a moment and we're just going to open up directly into our new QRL wallet. What you can also do here is if you prefer to access and open your wallet in a different way, we're just going to close this for a second. And we're going to go to open a wallet. If you don't want to do it via the JSON file. What you can do is you can just hit mnemonic phrase here, and we're just going to copy our mnemonic phrase from my notes tab, and you're just going to paste that in here. And you can unlock a wallet in the same manner, going using your mnemonic phrase or your hex seat. So really whichever preference you have, all of them can unlock your wallet, I'm now I'm going to hand the screen over to striker and he's going to show you how to create a hardware wallet with a ledger.

## 6:45 Creating a QRL Hardware Wallet 

**Michael:** Alright, so this is the Ledger Nano s, there's also an expedition, which is wireless. But for the purposes of this video, we're just going to use the S. So this is how you set it up.

**Michael:** Welcome to the Ledger Nano. And we're going to set this up as a new device. If you have a previous recovery phrase, you can use that and it will bring you'll be able to restore all of your wallets just from your recovery phrase, it's important to make sure you have always keep your recovery phrase, those 24 words that we're going to create, because you can restore them on any Ledger Nano device and be able to recover your wallet. So we're gonna do this, we're gonna set up as a new device. And we're going to choose a PIN code. I'm going to just pick some random numbers here, we're going to do 87546767 And then I want you to confirm it 87546767 Okay, next, you're going to get what's called your recovery phrase that I was talking about. And the device is going to randomly generate this phrase, this phrase of all of your regarding your wallet, your hardware wallet is the most important thing you cannot lose it. Otherwise, you will never be able to restore your wallets if you lose your ledger or something else happens. So okay, so for the first word we have much second word is radar. Third word is gold. Fourth word is waste. And I think you get it. So I'm going to speed this along a little bit until we get to the final word.

**Michael:** Okay, so I've verified the mnemonic phrase, All 24 All 24 words. So now we're going to press both buttons to continue. The Ledger is going to say processing and it says Now your device is ready. Okay, so this is the main menu on the ledger. So next, what we need to do is install the ledger Live app and on the on the computer and install the QRL Wallet. So let's do that next. All right, the next thing we're going to do is install the ledger Live app. So we're going to go here to ledger, comm https colon forward slash forward slash dub dub dub ledger.com Make sure you're at the right site. And we are going to download the binary for desktop live. Install that yes Install and we will execute it. Okay, here it is. So at this point, what you're wanting to do is take your nano, plug it into USB port on your machine, give it power, and it's gonna ask you for your PIN code right away. So the same PIN code we created earlier. I'm typing it into the Nano right now. 87546767. And if you're wondering why it's, uh, seems to start off as a random number, each time you select a digit, it's still somewhat, if it started off at zero, someone could technically count videotape or count the number of times that you're pushing the buttons. The numbers are randomized each time so that it also randomizes the visual input so someone can't get your password just by watching you push the buttons. So I've entered in my password, my ledger now says set the settings so we're going to go to manager and I'm going to push both buttons on the ledger. Right now it says allow ledger manager. And this is where you will install your crypto Wallet. So do search for QR L. Just going to install that. And right now it is uploading the QRL application to my ledger. Okay, that runs pretty quickly. Okay, so now on my ledger, I can seek the QRL app. So the next step is we're going to generate the Merkel tree on the ledger. And basically, which basically creates the wallet on the ledger. So let's do that next. Alright, so the next step is to generate the tree. So let's enter in the pin 87546767, the same one we generated earlier. Okay, and we're going to go to QRL and push both buttons at the same time. And that noise that you just heard was windows letting me know that that it recognize the nano and that it's that it's coming online because it's plugged into the PC. So what we're going to do right here is we need to generate the Merkle tree. So we're going to push it says not ready, we're going to generate it by pushing this button here and then going initialize tree, and then and then starting. So what this is doing is generating your hash based signature tree. And it's gonna take a little while to go through and do that because it has to perform this hashing function in order to build out the tree. And this is one of the costs of being post quantum secure. So we're going to let this run and I'll speed this up.

**Ryan:** So now that we've gone over how to create wallets in two different manners, strike, it would be a good idea. I think now to send a few transactions back and forth. Would it be cool with you? If we ping back and forth and transactions? Can you want to open up your wallet and check make sure you got some quantum?

## 13:30 Sending QRL Transactions 🔁 

**Michael:** Yeah, let's do that. Alright, so I'll share my screen here we go. And I'm opening my Ledger Nano and typing in the pin, which we just went over. Okay. Reading from ledger device. It's also worth noting, if you are using a Ledger Nano, right now, you'll need to run the local wallet from the website rather than the web Wallet. So I installed this in the download section. So here is the as you can see, the wallet opened right up off the Ledger Nano. And that's it. The private keys are stored on here. It communicates that through a USB API with the browser. And that's it.

**Ryan:** It's great in order to send it back and forth that you don't have any you have any quantity. You don't

**Michael:** Nope. This is a new account.

**Ryan:** Okay, I hear if you say quanta three times that might work with getting a few. We can try it out. Let's go. Quanta, quanta, Quanta

**Michael:** Quanta quanta quanta

**Ryan:** Jack is that You heard somebody

**Jack:** I don't know why I keep on appearing in these things.

**Michael:** Hey, Jack, hey, we can use the help. We can do some help. Yeah.

**Ryan:** We're live on a YouTube video. So we want to, we'd like to send some transactions back and forth if you could drop us some.

**Jack:** Okay, Michael, your address ends in eight F right?

**Michael:** Ey yup.

**Jack:** There's 100 points as being sent your way. And Ryan, your address ends in 18. 

**Ryan:** Yep. Okay, it's 100 quanta heading your way as well. It should arrive within you know, five minutes, the block time is a minute. 

**Michael/Ryan:** All right. Sounds good.

**Ryan:** Awesome Jack, you're a lifesaver. Appreciate it.

**Michael:** All right. So let's do a simple transfer here. It looks like Jack our savior is his 100 Quanta showed up. So this is as easy as it gets. We're just I'm just going to put your address in there. Ryan, is that you?

**Ryan:** Yep. That is right. There he do. All right,

**Michael:** I'm gonna send you. Let's say I'm gonna send you 50 quanta

**Michael:** And you could also add another recipient if you wanted to, but we don't need to in this case. So confirm and sign. Then when on the ledger, you actually have to open it up and confirm the transaction. So I'm opening the ledger. Now I'm in the queue QRL app, and I'm clicking Sign transaction now signing 10% 50% 70 and 100%. And that is because the private keys are held on the ledger and you can't do any transactions without from the wallet without the ledger. Okay, and now I sent. Alright, so this isn't a pending status that's been submitted to nodes on the network. As soon as the next proof of work node finds a block, they should have that transaction transaction in their mempool. And we should see it Oh, okay. That didn't take very long. Alright. Ryan, when I'm going to stop sharing, why don't you switch over to your screen?

**Ryan:** Awesome. We're in my wallet now strike. It looks like your transaction came through. Let's see it right here. Real quick. 50 quanta? Perfect. I am going to grab striker is your address. Does it end in ATF?

**Michael:** Yep. Okay, so 25 Back

**Ryan:** 25. Okay, I'm feeling a little less generous than you. But

**Michael:** I'm feeling more generous I sent you 50

**Ryan:** I mean, I'm feeling less generous. And I'm not going to send this to you. We're just confirming that the really small fee there. I hit Confirm here. We're going to be sending you back. Recipients here with the send transaction details below. Take a moment it's pending.

**Michael:**  All right, and I'm watching my wallet. Perfect. Go shortly. Alright, checking the balance here. All right. Yep, I got your 25 Quanta. That was pretty quick, minute or two. And easy.

**Ryan:** Yes, super easy back and forth that can exchange it really flawlessly and a strike I appreciate you kind of walking through some of these it was good to kind of show people a variety of ways for wallet creation. In an upcoming video, what we're going to be doing is we're going to be creating a video walkthrough tutorial on multi SIG as well, we're going to be having a few special guests coming up on our next couple episodes. And if you're watching this, and you feel like you're a little overwhelmed with different steps, or you know what a tree is, or you know, the hash or things of that nature. Just start out with an easy web wallets, in your browser, then maybe you can move over to a hardware but really whatever works best for you. And if you have any questions, make sure that you either put your questions in the comments below. Don't be shy ask us. And if you liked this video, make sure that you hit that subscribe button. We're gonna keep coming out each week with new content related to our project, which is the QRL and the industry as a whole strike. I appreciate you coming on today's call and we will all see you in next week's episode.

**Michael:** Always my pleasure. Thank you.

**Ryan:** Thanks bye bye.

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)