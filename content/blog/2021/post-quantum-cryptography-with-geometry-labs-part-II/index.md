---
layout: blog-post
slug: post-quantum-cryptography-with-geometry-labs-part-II
date: 2021-07-29
author: "Ryan Malinowski"
title: "Post Quantum Cryptography with Geometry Labs- Part II + AMA"
summary: "In this QRL Show LIVE, Geometry Labs joined us to continue our discussion on the Future of Post Quantum Cryptography. We'll cover everything from Atomic Swaps and Lattice based signatures to the questions we unroll in the AMA."
featured_image: maxresdefault.jpg
youtube: IWqIgk2Vv5A
categories:
  - technical
features:
  - qrl-wallet
toc: true
---



## Episode Overview

## What is Geometry Labs & what’s the working relationship with QRL?

**Ryan:** Hey everyone, welcome back to another episode of the quantum resistant ledger channel, the place where you come for the crypto and stay for the quantum. And today's episode, we have the team from gadgetry labs back with us to discuss the future of post quantum cryptography to do a little bit of a part two episode of where we left off at our last conversation. And then we're also going to be diving into an AMA. And we're just really excited to have a team joining me is our Director of Outreach at the QRL, Michael Strike. And the team for geometry labs. We have Adam Corbo. We have Mitchell Kravitz Thayer. And Brandon Goodell. With us, guys, it's great to have you guys back here with me. And where I'd kind of like to start out for today's episode is I want to get some people up to speed based on the last episode that we had a few weeks back where we discuss all things post quantum cryptography, lattice based cryptography, and we dove into 10 Different areas there. What I'd like to ask is, if one of you could dive into probably Mitchell, this would probably be the best question for you. Could you first for a few minutes for those that are viewing now or if they're viewing it later? Can you cover? What is geometry labs? And what's the working relationship with QRL?

**Mitchell (Geometry Labs):** Yes, so geometry Labs is a decentralized finance and cryptography Research and Development Lab, where a team of engineers, scientists and mathematicians developing like the next generation of you know, open source tools and all kinds of cool stuff for the ecosystems. Our team members have contributed a bunch across a whole bunch of ecosystems, obviously, quantum resistant ledger, Z cash, polka dot Mineiro iKON nervos, we were working with a lot of different communities. Our specializations kind of vary from defi products and tooling to blockchain infrastructure to analytics and network observatories. And then like, the thing that we're excited to talk about today is developing novel cryptographic mechanisms. So that's our post Krypton, post quantum cryptography research team, the folks on this call, we've been working kind of as an embedded research team within Q RL. So we have kind of a research agenda to build out a bunch of lattice based cryptography, which has improvements for scaling and functionality. I'm excited to talk about that later in this call. And yeah, so we kind of do our work, we prepare papers, we prepare code prototypes, early benchmarking, meet bi weekly with the CQRS engineering team to learn you know, how things fit in. We've really enjoyed the relationship. It's been it's been some of our most exciting work.

**Ryan:** Know that thanks for covering that. That kind of gives people that are viewing this a bit of context and I think now would be a good time to jump into where we left off in the part one of this conversation where we were going to start diving into atomic swaps. Straight If you want to ask the question here on atomic swaps, I think this would be a good leading point for the rest of our conversation. And then we can kind of go from here.

**Michael:** Yeah, so this was a question from our community. In fact, the next, Ryan are going to alternate a little bit between questions that we received ahead of time. So this is one of them kind of atomic swaps work with the current implementation? Or is this part of the proof of stake upgrade?


## Can atomic swaps work with the current implementation or is this part of the PoS upgrade?

**Brandon:** I'll take this one, since it's a cryptography question. So the question about atomic swaps currently with XMSS, that is not something we've looked into at all. The stuff that we've developed with atomic swaps is what's going to be possible with the upgrade that it's going to, hopefully aggregate signatures? And I'm not sure if I want to talk too much about it yet, because I'm sure that there's gonna be more questions about that. But the idea is not just to upgrade the stake signatures, but actually all signatures, and then make them so that they can support things like atomic swaps and Lightning Network. And so the idea is not to use the current implementation of XMSS signatures and QRL. But to upgrade to a lattice based answer.

**Mitchell:** And actually, I have kind of clarifying questions. So whether or not we can do these lattice based atomic swaps has to do really, with how keys are handled, not whether it's proof of stake or proof of work, right, like the consensus mechanisms kind of orthogonal to what types of keys we use.

**Brandon:** Absolutely. The fact that this is going to be coming with a steak upgrade is actually just sort of coincidental, it's actually coming with the signatures that we're using in the stake upgrade.

**Ryan:** Gotcha. And that kind of probably jumps in this next one a little bit or kind of overlaps with another question that came in was how do atomic swaps work? And do they require smart contracts? So maybe, obviously, we don't know the person who's asking this there are a standing of it, technically. But is there anything? Is there anything else there to add on atomic swaps?

## How do atomic swaps work? Do they require smart contracts?

**Brandon:** So the way that an atomic swap works is the phrase atomic doesn't come from the fact that you're swapping around like atomic units of a currency, it comes from the free from the idea that either the protocol completes entirely, and both parties get what they want, or the part the protocol does not complete at all. And neither party gets anything and or loses anything. Right? So it's either it's one and done, right? Or actually, I shouldn't say that, because it oftentimes requires interaction. But the way that atomic swaps generally work is you would send you and I would agree upon like a to have to multiple multi signature address and you would send money to this on one chain, like the Bitcoin chain. And then you would set that signature, or that address up so that if you were to reveal a secret, then I would be if I was able to reveal a secret, then I can claim the money. The question is, then how do you transmit that secret to me, right. And that's where the sort of the magic of atomic swaps work. Using adapter signatures, it's actually a really neat trick adapter signatures are designed to sort of verifiably encrypt a secret, so that you can pack a secret into a signature, and a pre signature. So first, I hand you a pre signature on the side. And then on the main chain, somebody publishes a full signature. And then you use the signature that you received on the side and you download the blockchain data to download the signature and you extract the secret. And then you can then go use that secrets on this other chain in order to claim your funds. So there's actually a bunch of different ways to do atomic swaps, but the way that we're doing it with adapter signatures seems to be one of the simpler ways. The question whether or not they require smart contracts is actually sort of a theoretical brain teaser. There's this claim or refund functionality. That's sort of primitive to things like atomic swaps and smart contracts that you sort of require, right? So the reason that the atomic swap can work, so that it's atomic is that you set up these refund times so that if the time exceeds the refund time, you can always get your money back. So you require this claim or refund functionality in the underlying transaction. structure. But if you have that, then you enable things like smart contracts and atomic swaps. Now, we haven't looked directly into smart contracts yet. But the fact that we're using adapter signatures and compact secrets into them, and we know that we can we already know that we can do a Lightning Network style thing with that. That means that we're going to be able to, at the very least do atomic swaps and Lightning Network. If somebody came along and came up with ways to construct smart contracts based on these things, After signatures, that would be a great contribution to URL, in my opinion. But that's not what we're looking at directly. So I don't really have a have a specific answer to that question. Although I know that there's a lot of stuff that can be done using this extra secret that's packed in there. There's a lot of arguments of knowledge, not proofs of knowledge, but arguments of knowledge that can go through in the lattice setting, with these secrets that you can use for smart contracting. The problem is, is that an argument of knowledge is classically secure, and a proof of knowledge is quantum secure? Right? So um, even though there's some functionality that's available here, we're not exactly sure what the security level of these different structures are, or what these, the security level of the different applications might be. Right? So even though we're hoping for something that's secure across the board, so it can be used for Lightning Network and atomic swaps, and transactions and proof of stake signatures, and random beacons for validator election, stuff like that, right? We want to cram all these properties in there, if we can finally get smart contracts in there also, along with all of these things. I mean, that'd be great. And it honestly wouldn't surprise me too much.


**Mitchell:** Can I ask a leading question?

**Mitchell:** Yeah. So you were talking about how core to the atomic swaps is, in the end, you reveal a secret to claim your claim your funds? Does this have to be a lattice secret? Or can we have compatibility between say lattice and elliptic curve change?

**Brandon:** Right, so if I wanted to send you so let's say we had a magic version of QRL that already implemented these adapter signatures, I could send you a lattice based pre signature, and then eventually transmit a lattice based signature on the QRL network. You can extract from that a witness, which acts as a hash preimage on the Bitcoin network. So yeah, so in a certain sense, you're going to be able to use these like the preimage functionality of Bitcoin in order to do a cross chain thing. So that the secret that's revealed from the signatures can, can genuinely be used. So when I say atomic swaps, I don't mean atomic swaps just between lattice lattice coins, I mean, between lattice and discrete logarithm coins. I honestly haven't thought about hash based stuff yet for it. So I don't know where that could go. But um, yeah, there's at least a little bit of flexibility and how we can do that across different cryptographic settings.

**MitchellL:** Like, oh, it's it's like this is basically leading into a framework for like, QRL-BTC swaps, QRL-Etheruem, that kind of thing, assuming that the framework is developed.

**Brandon:** At the very least. Yeah, I'd be shocked if we can't do QRL with Etherium. I'd be shocked. Bitcoin, like, you know, I'm still like working out the details for the Bitcoin stuff. And Monero stuff, but like, I'd be shocked if we couldn't do it with Ethereum. Because Aetherium is just designed for stuff like that. 

**Michael:** So it sounds like in the in the case of atomic swaps, both parties get what they want, or both, or they get nothing.

**Brandon:** Yeah, and not only do they get nothing, but they lose nothing, right? 

**Michael:** Sounds like a divorce. 

**Brandon:** Well, in a divorce, you might lose something ever, right? So this is more like, you come across a random person on the street, you can engage in atomic swap with them without having to worry that they might jack your money. That's what that's where the atomic comes from. Either both parties get the the defined swap conditions from the beginning. Satisfied, or neither party gets anything and loses anything. So it's trustless.

**Mitchell:** So there's no like griefing or someone gets slashed. It just rolls back?

**Brandon:** Yeah, yeah. It's a trustless atomic swap. Cool. Yeah. And I wouldn't even say it rolls back. Because with all this, all of the all of the atomic swap mainly takes place via communication on side channels. Right. So like, by rollback, we might mean, the time lapse exceeds, or the time limit is exceeded. And so the refund triggers and the person who started the swap gets to reclaim their money.

**Mitchell:** That's the more precise way to say it. Yeah.

**Michael:**  You, you mentioned integration with Bitcoin, I think a few minutes ago. Is that part of were you referring to post taproot and smart contract availability, or is that what you meant by that?

**Brandon:** Um, well, honestly, I just meant for I think we can figure out how to hand over a discrete logarithm based secret or a hash preimage based secret to an exchange for lattice base secret. So when I say Bitcoin, I mean rather generally discrete logarithm based currencies, right? So I'm misusing the term Bitcoin and the Monaro guys are going to be pissed off at me, you know, but that's fine.

**Michael:** Well, if you're not making waves, you're not trying hard enough. I got another question from the community here. Someone writes, are you going to miss elliptical curve cryptography slash ECDSA when it's gone? 

## Are you going to miss ECC/ECDSA when it's gone?

**Adam:** No

**Michael:** It's not like saying goodbye to an old friend?

**Brandon:** I was gonna hope Adam was gonna say something, um, know that, at least from a mathematicians perspective, elliptic curves are, the reason that they're hard is because they're hard. I mean, like, I didn't know that's like a really like vacuous statement. But elliptic curve cryptography is annoying. And lattice based cryptography is this beautiful blend of linear algebra and convex geometry and functional analysis, and I add category theory, it's cool. It's just cool. Whereas like the elliptic curve stuff on, it just does not light my fire. And, you know, I admit that this is a bias on my part. And probably there's gonna be a whole group of mathematicians who are mad at me, but I just can't...

**Michael:** We'll find out when we check the comments

**Ryan:** What's the saying, if everybody loves you, you're not doing something? Right. So that leads into the next question. Speaking of lattice cryptography, and this is another question that came from the community early on that we aggregated. So what are we looking at for signing and verification for lattice based systems? And how about aggregate signatures? So I just wanted you guys want to jump into this one? Based on the question they're asking.

## What are we looking at 4 signing & verification for lattice based systems? How about aggregate signatures?

**Brandon:** Mitchell, you did all the benchmarking, I'll let you talk.

**Mitchell:** Yeah, I can jump into that. So right now, for, actually, let me pull up the benchmarks. Um, so things are looking very good. The most important thing I would say in terms of both space and time is verification. Because when someone's generating a signature, for example, that only happens once on one person's device. Whereas when it comes to a verification that needs to happen to literally every person who ever joins the blockchain at any time in the future, we've gotten this down to with 128 bits of security, being able to aggregate 127 signatures into about two megabytes. And the whole thing verifies in two seconds under two seconds on my machine, meaning we're looking at about 15 milliseconds of verification time per signer, which is pretty exciting.

**Brandon:** I didn't mean interrupt. I apologize to be perfectly clear here. I think that these numbers are too good to be true. So we're waiting on some more results, but 50 milliseconds per signature is pretty awesome.

**Mitchell:** Yeah, I ran, we ran this on a bunch of machines, and it ranged from 12 milliseconds to 17 milliseconds, depending on, you know, the resources on the device. 

**Michael:** And that's single threaded? 

**Mitchell:** Yeah, so we haven't really done any optimizations and actually

**Michael:** Sorry, I mean, you might be wondering if there's a way you could mess with the node, you could multi thread, you know, use a CPU for each. Yeah. Then we're talking about being able to scale based on the number of cores and or logical cores.

**Brandon:** Yeah, verification is highly parallelizable. Because like I said, lattice based cryptography is like this beautiful blend of linear algebra and other stuff. And linear algebra happens to be what computers do.

**Michael:** I'm starting to see it, I'm starting to.

**Mitchell:** Yeah, there's there's a couple kind of exciting optimizations, there's like a small one I had been playing with, which is just a little bit of code architecting, how many function calls and overhead and stuff like that? And then I think there's essentially three potentially paradigmatic optimizations. So the first one is using compiling and see, so like, right now, everything is running Python, but there's some ways you can add decorators from like number in GIT, that will do some just in time compiling and run some of your functions in C instead of Python. So that might be some low hanging fruit for optimization. I started playing with a little bit, it's not trivial. But um, so that's one route. And this is kind of a fundamental, faster way to process it. The second one is, what's the second going to be? Oh, yeah, so what we were just talking about, everything in, in this library basically boils down to adding lists of integers. Multiplying lists of integers, modding lists of integers are likely stuff lists. And all of these are done element wise. So it's like first element plus first element second, plus second, third, plus third, fourth plus fourth. And so this is like the perfect thing to parallelize, right? You have like 1000 elements, you have four cores, you send 250 off to each, and then boom, they bring it back together. So the fact that, for almost all of the calculations, what's happening on one set of elements doesn't impact what's happening on the other set of elements is like, perfect for this. Um, and so I think the between the compiling and parallelization, there's probably some massive speed ups there that like a low level engineer could dive in, and it probably be low hanging fruit. And then the third one is using a fixed number of nonzero entries. Brandon, do you want to talk about that was your like, brilliant idea?

**Brandon:** Oh, it's not really my brilliant idea. It's just it's a trick that using crystals that lithium to generate keys. Generally, for lattice base keys, if you do a naive definition of keys, you get a huge number of keys, like so many more keys than what is considered cryptographically, secure, right? Like we're talking like, two to the 1000, or something like that, or more two to the 10,000, you know, like ridiculous numbers of keys. So what you can do is, instead of rolling keys like normal, you can set a whole bunch of entries to the verifier, to the secret key to zero, and then just pick a few of the entries to be nonzero. And that way, you just need to store that indices of the nonzero entries. And that way, you store a lot less of the key, right, and you still end up with a cryptographically, large number of keys and the cryptography problems are still just as hard to solve. Right? So we come up with little implementations like that. But you know what the real mind blower for this is, I'm not sure if I've even I haven't told Mitchell about this, I haven't told Adam about this, you guys are gonna like this. So the reason that we we can manage to do this element wise arithmetic that Michel was just talking about is the magic of something called the number theoretic transform. The number theoretic transform is sort of a version of the Fourier transform if anybody's ever taken an electrical engineering class, or a calculus class or something like that. And here's what's interesting about the Fourier transform. It's also what your brain does, to the incoming information from your eye, between your eye in the v1 area of your brain, your brain does a wavelet decomposition on the input data, and the both time hits the V one area of your brain. It's, it's just decomposed already. So they can opt in. So your brain can optimally compute all of that information. And your ear does the same thing to your ear does 48 decomposition, it just splits the data up into the most optimal representation before it even hits the a one area of your brain, the audio one area of your brain. And what we're doing for this cryptography or for to make this cryptography go faster, is we're basically using the same trick that evolution landed on from nature in order to just split everything first, and then do the computation on that raw data. I mean, if that's not beautiful, you don't have a heart.

**Michael:** If I'm if I'm not mistaken for your transforms, also, what gets applied to qubits?

**Mitchell:** Well, actually, it's one reason why like Shor's algorithm and stuff can be run. Yeah, I think that's part of the processing

**Michael:** Called the quantum for your for your transform. Exactly. Alright, yeah. Thank you for that answer.

**Ryan:** Yeah, I think right now, we should do strike. to interject, we should do probably, just for everyone that's watching this, we're gonna do maybe we'll do one or two more questions that we pulled ahead of time we are we pulled in. And for everyone watching, if you want to ask a question, as we trail on and part of our ama here, throw it into the chat here. So we can go through and pull a few more of those. But I know, Michael, you had another one in here related to atomic swaps that we wanted to pull in. 

**Michael:** Yeah, it might have been covered already.

**Ryan:** You can go to the last one if not, yeah.

**Micahel:** Yeah, you guys can tell me if it's covered. If it was covered fully. How will atomic swaps and lattice cigs contribute to the network? I think you touched on that quite a bit in one of the previous question. Yeah. Yeah. Alright, we'll just do the last question, then here that we have.

**Ryan:** Have you have you evaluated, prove the history style POS for QRL? Could that be made QR quantum resistant? Benefits for high performance L1? Okay, so that's just a question pulled in. Either we can touch on that or if other people have questions. It's up to you guys on this one.

## Have you evaluated PoH style PoS for QRL? Could that be made QR? Benefits of a high performance L1 would be great.

**Mitchell:** What was PoH?

**Michael:** I had to look up PoH.

**Brandon:** This is this is it. So really, no. This is one of those interesting questions, but not because the question is interesting, even though the question is sort of interesting. It's because somebody in the audience wanted to bring up proof of history. And so they were like Hey, let's mention this.

**Michael:** Wonder what projects have Proof-of-History?

**Brandon:** Yeah

**Mitchell:** It's a VDF thing right, like a verififiable delay function thing, right or no?

**Michael:** It's sounds like a consensus mechanism.

**Brandon:** Yeah, I have no idea. Sorry to be so anticlimactic with that one.

**Mitchell:** I think what this boils down to is are there? And this isn't an exact answer, but I think it hits the key point. Is there a way to do post quantum secure verifiable delay functions?

**Michael:** Now, that's a good question.

**Mitchell:** Which is not something I've thought about until literally right now. I think I think supersingular isogeny methods can be, but I don't know

**Brandon:** think I'm going to probably make an incorrect statement here. Go for it. No, I'm not going to do that. Ah, sorry. No, I have no idea. I'd say yes. But VDF?

**Mitchell:** I think it could be done.

**Michael:** Yeah. Okay. Right, you're going to take us into the mentee the AMA and see what committees come

**Ryan:** Yeah, I'm gonna I'm gonna just give me one second, guys. I'm just going to pull up and see if we have any other ones coming through here. 

**Brandon:** I think I do have an answer for the Qt FD. I'm going to go out on a limb and just guess, I think that. So if you take a group of unknown order, and you're trying to and you hand me a random group element, and you ask me what the order is, the only way I can really figure that out is progressively multiplying by itself. And that's a linear process that I don't think can be exploited on the quantum level, like, I don't think you can take a fuzzed version of a group element and keep computing its powers. So but when you query like an Oracle, like a random oracle, like a hash function, you get a little bit with, with a quant with a non collapsed state, right? You get a whole bunch of answers back related to all of the inputs. So unlike that problem, I don't think that this one can be exploited on a quantum level. So I don't think that the rent finding a random group element in a group of unknown orders. Yeah, I don't think that problem, I think that might be a key VDF. But this is just an intuition. And I don't have any proof of that statement. And somebody is going to be very upset at me for saying that. I hope it's Andrew pollster. I hope he emails me and he's like, You are full?

**Michael:** Well, if you're way off, I'm sure Ryan and I will take the abuse in the forum. So

**Ryan:** I'll pop up one more for the AMA. Let's see what else we got here. And I'll just read it out just because it's coming on in real time. So quantum computers represent an exponential increase in processing capacity, and eventually in money hash, how to guarantee the security of a network from attacks 51% until the implementation of proof of stake. If anybody wants to take that one. I'm just pulling this one in real time. Otherwise, it would pop it up on here.

## How to guarantee the security of the network from attacks 51% until the implementation of PoS?

**Michael:** I think I got like half of it, honestly. Yeah. Yeah. For me. Yeah. Yeah. Probably I want to admit that I hear the whole thing.

**Ryan:** Quantum Computers represent an exponential increase in processing capacity. And eventually in mining hash. How do you guarantee the security of the network from 51% attacks until the implementation of proof of stake happens? They kind of had a spelling error to in there, so I'm just going to read it. That's probably over. But yeah,

**Brandon:** So the good news is, is that the mining power is not vulnerable to quantum, right? If you look at like even Bitcoin, they're using Sha 256 Is their hash function. Quantum computers are not necessary. They get a quadratic, excuse me. Yeah, they, yeah, they get a quadratic speed up from Grover's, which would represent a quadratic speed up in like, there are other Quadra quadratic increase in their relative hash power. Right? But at the same time, if somebody came out with a huge ASICs, tomorrow, the practical speed improvement. Look, yeah, the network is not going to be vulnerable to quantum computers due to for on the hash level, it's going to be vulnerable to quantum computers on the forgery level. Right, and the people are gonna be able to steal your money and then it'll be confirmed fairly.

**Ryan:** Yeah, I got it. I got another one here that just came in in real time, too. I'll pop pop it up on here. Whoever wants to take it. The sound like great improvements to lattice based systems. Will there be further peer to peer review? Everyone's Take this one. We'll see maybe we got one more after this one, to wrap up the AMA.

## These sound like great improvements to lattice based systems. Will there be further peer review?

**Brandon:** Actually, I have a question about this personally, because I don't know exactly what the terms are for the QRL thing, because we are writing a paper, we can, we are going to release it as a white paper. And we're also encouraging QRL to undergo an audit of what we're doing independently, so that there is a review by peers. But unless we submit that paper for a journal, it won't technically be a peer reviewed paper. And I'm not sure if, if that is what we plan, and maybe Mitchell has a better answer to that question.

**Mitchell:** Yeah, yeah. So actually, that is a great question. There is some semi internal semi external peer review happening right now. Actually, we're working with a cryptanalysis. Expert. She's really digging into the parameter selection. So that will be some incredibly valuable feedback. Um, and then yeah, I think it would be great honestly, to get this through a peer review cycle, the, because when we think about like, Okay, what if something is broken in the scheme, it could be broken in like two ways, right, the math or the code. And so peer reviewed papers is basically the best way to get all the eyes on the map. Um, so I think that would be I think that'd be a great step.

**Ryan:** Thanks for covering that. I think. I think that kind of wraps up, we probably covered a number of questions that came in earlier for the first part of the AMA, a couple here at the end. And myself and Michael, we appreciate you guys jumping on and continuing our conversation for our first part, one episode, and just just chatting, all things, post quantum cryptography, cryptography, because it's one of those areas where a lot of there's just a lot going on, obviously, it's some people will see it now and kind of might scoff at some areas of it. But as we move further and further along, it's, it's definitely a lot of those things are gonna roll out. So it's always interesting, and fun to have conversations with you guys about it, because you guys are on the leading edge of that part. But I appreciate you guys coming on to chat with myself and Michael today. And is there any other closing thoughts? You guys got on your end? One last geometry?

**Michael:** One last question. When prediction, when will 256 bit ECDSA? Break?

## Fun Prediction Question (range): When will 256-bit ECDSA break? 

**Mitchell:** No comment.

**Brandon:** 256 bit?

**Adam:** You should ask all the troll papers snores putting out lately. 

**Brandon:** Yeah, I know right?

**Michael:** If you want to be completely safe. You can even 2025 to 2040

**Brandon:** Let's stick with 128 bit prediction, I think that 128 bits is going to be commercially practical to break a key in reasonable period of time, like less than a month, maybe? Probably by 2026. That's I mean, like that's, I would say that that's probably a conservative guess whether or not and when I say commercially, I don't necessarily mean that. Everybody will know that this technology exists. But right now, you can you can rent IBM Quantum computers, right? And they're not great, right? They're, they're the beginning of the technology. But technically, quantum computers are already commercially commercially available. But the commercial viability is a different question. And whether or not I can blow half a million dollars to break one of Satoshis keys in 2026 by renting an IBM Quantum Computer, I would put that probably at 5050. But, um, I think Satoshi was 256 bit and I want to know avoid making a prediction about 256.

**Michael:** I noticed you're qualified with commercial because we don't I just before the call. I just emailed the NSA and see if they could just give me an update. I'm still waiting to hear back. I'm still waiting to hear back.

**Brandon:** Yeah. So like I would guess that it's going to be the beginning of the end, sometime in the next three or four years. Like at the latest and the the real problem is is that when it becomes commercially available, that's not when the apocalypse happens. Right? The Apocalypse happens. Before that it happens right now. It's happening right now because a bunch of people aren't migrating their code from pre quantum to post quantum

**Michael:** Can you imagine a scenario in which you're running a blockchain project and you have to expedite a quantum secure shoe shoe horn. It's essentially a pot I mean, it's right. It would be such a huge undertaking it it would Is it possible if not impossible for a large project.

**Brandon:** If it takes two to three years to migrate, right, like, it'll take a minimum of six months of r&d time to figure out what you're migrating to, it will take a minimum of a year for development and testing to be done. So there's production level, right? Like you add up all the different, like, periods of time, that's gonna take Oh, and by the way, your decentralized projects, so good luck come to a decision. Right? Like, even at Amazon, it's gonna take years and years for them to migrate over to post quantum stuff, right? They have literally all the resources on the planet. I shouldn't say literally, really close to literally though.

**Michael:** I think one of the advantages of the projects that probably stand the best chance of the of the list of blockchains that need to quickly adapt are going to be the ones that have distributed on chain governance and voting. to your, to your point, either. I mean, good luck trying to, but yeah, get everyone to agree. But if you can do it on chain, you can do it on chain, at least then you'll be able to have the question start getting getting finalized, answers to questions on how to move forward. But either way, even with that, even with all the advantages of of that, and an expedited timeline and resources, yep. You, yeah, no matter how fast you put it in, you still have to wait for everyone to migrate at some point, because those addresses are still going to be susceptible.

**Brandon:** And the worst part about especially for these state based coins, is that proof of stake, unlike proof of work, is not forward secure in the following sense. Once somebody breaks stake, they own that chain, they can ensure that they never lose their stake, that their their 51% stake, right. And they can move money around so that it looks like from an outside observers perspective, that the money is being distributed fairly as if as if steak has not been concentrated in a single person's hands. And once that happens, you're you're just sunk, you're done as far as transaction verification goes on a stake chain. Whereas with work, if somebody takes over the stake chain, well, okay, three or four years from now, if they haven't been continually investing into the hardware, then they're going to lose their place, and then somebody else is going to be in charge. And that's what I mean, by forward secure the stake chain, once it's broken. It's just you can't trust it ever again. But it proof of work. If somebody temporarily takes over a work based chain, there's always a chance that it becomes fair again. And so in the quantum world, when we're talking about forging signatures on a classically secure stake based chain, and you're, let's say you're using the 25519 curve, G, what coins use that this is the elliptic curve that Monero uses. And let's say that your your security proofs are all based on the forking algorithm. Okay, so the keys for the 25519 curve are 128 bits classically secure before the forking algorithm. But because of the forking algorithm in the security proof of ring signatures, they're really only 64 bit secure the signatures. So for 64 bits of security, somebody could right now today for forge the signature. And just so you guys know, 2 to the 64, I mean, 64 Bits of security is a lot and it would take an enormous number of resources. We're not talking about like a single nation state, being able to forge a single an monero signature and being able to like brag about it, like this is a waste of money at this point to do that. But 64 bits of classical security today. Yeah, if we're not migrating over, like starting now, then it's like staring at the asteroid as it's heading towards us.

**Michael:** You would have to, you would have to cut the chain, go to distributed governance do on chain vote, stop it. Right. Roll agree on what rollback it which this is in this obviously goes. The problem is this goes against the tenants the values of distributed governance anyway, the immutability, this is permanent. If I owned something if I have something in my hand, I own this. And this is, you know, there's no question as to that. And the part that I worry that one of the one of the additional things that I worry about is the compromise that because that's an ideological compromise. And it's a bit late, it's a bit of setting a precursor. So I worry about that a little bit.

**Mitchell:** Yeah, I so I'm not personally like a code is law person, but a lot of people are, but that philosophy is kind of predicated upon assuming that the code impacts everyone the same right? If you now have a quantum leap heater that can run the same code do very different things in a classical computer, then the like that philosophy becomes very tangled up and becomes like much less clear. I think we're definitely, we're definitely in what I like to call the quantum grace period, right? There was like 1000s of years where we didn't know about quantum computers and everything was like happy, right? Ignorance is bliss. And then it's, we've we've crossed that point where we can see what's coming on the horizon, and that we enter the grace period. And that grace period is eventually going to end when, you know, commercially available or non commercially available, quantum computers get up to scale. And so one of those things is like knowing that there's like the ignorance era, the grace era, and then the like, apocalypse era. It's like, okay, we're in the grace period. What do we want to do with this? And when do we want to start working on it?  And my answer tends to be, yesterday.

## Want to learn more?


Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](https://www.reddit.com/r/qrl), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)