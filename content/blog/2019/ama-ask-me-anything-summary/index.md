---
layout: blog-post
slug: ama-ask-me-anything-summary
date: 2018-07-08
author: "Jack Matier"
title: "The QRL Core Contributor Ask Me Anything (AMA) Summary"
summary: "As we noted in our most recent “Last Week in QRL” blog, we had not yet received a statement from this month’s award recipient, so we held off on announcing them in our usual manner. Now, without further ado…"
featured_image: 1_X_NmmcQjNxOdbp0gJe329A.png
categories:
  - community
toc: true
---

As part of our mainnet anniversary, we held a QRL Core Contributor AMA which took place in Discord on Monday, July 1st, 2019 for 1 hour.
From that, the QRL core contributors answered 29 base questions, or roughly 1 question every 2 minutes. This is the summary of that. The full AMA log can be found in Discord here (note: you may need to open discord first for the link to work properly).

## Q: Why the use of broken crypto SHA1 for notarization?

Legacy hashing mechanisms are included to maximise use cases: we want it to be easy for any existing proprietary notarisation systems to plug in to using the QRL. These systems are only available to those using the API and not via the web wallet to ensure hashing mechanisms considered unfit for future use are not available to the average user.

## Q: Will we get to see the financial statement of the QRL foundation, and when?

Foundation statutory reporting is in compliance with the jurisdiction (Switzerland) and the organisational structure (Stiftung). Reports will be published in due course.
Peter Waterland: Basically; we have to. It isn’t for debate.

## Q: What is your stance on NDA in regards to advisors?

As an open source software project, we would prefer all conversations regarding QRL to be open and transparent to all contributors, including advisors. However, we recognise that some partners and potential partners may have legitimate business requirements in keeping discussions confidential. These requests are considered on a case-by-case basis and where as individuals or as an organisation we are subject to an NDA then we will not able to comment on that subject further at this time.

Peter Waterland: NDA’s are a necessary evil and pretty much every interaction we have as a project (and individuals) starts with one..this is pretty commonplace in most of the Western world nowadays.

JP Lomas: and Eastern world

Peter Waterland: Just adding to the NDA point — it’s massively frustrating to us that we are legally unable to discuss many things we would like to..it goes against the open source transparent nature of the project but it is the real world.

## Q: Are there any pending legal matters in regards to QRL presale, and ECR20 token distribution?

No

## Q: How many users are there on the QRL discord server?

4929

## Q: Can we get web statistics for theQRL.org homepage, block explorer,web wallet, and QRL wallet downloads?

Users: 27,728
New Users: 27,585
Sessions: 41,329
Pageviews: 68,024

Stats for github are a little more involved as it requires going the the API, but they are there. Some sites make an easy interface to access them: https://www.somsubhra.com/github-release-stats/?username=theQRL&repository=qrl-wallet

## Q: How far off is the hard fork?

The code changes for the planned hard fork are in the main completed or near completion and undergoing testing on our devnet. A potential fork includes important governance changes such as on-chain ledger-wide voting and hard coded multisignature wallet capability. We have a developers IRL meetup next month where we will discuss a proposed hard fork schedule for the qrl-node and finalise our POS strategy and rollout. So a significant announcement on this next month (dev meeting is first week of August).

Peter Waterland: So we are having a physical meetup in UK, sunny Birmingham next month. So a big ANN then.

## Q: Any idea when the probation period of the foundation will be over?

The Foundation’s supervision by the GS-EDI is important in the maintenance of the not-for-profit organisational structure. This ongoing dialogue should have minimal effect on ongoing development.

JP Lomas: slow to deal with, but terribly diligent — we are fortunate to have good representation at that end

## Q: Estimate of the start of the goqrl audit?

As an open source project we have worked with OSTIF and pride ourselves on previous major audits completed prior to major milestone releases such as mainnet. This does inevitability add an element of delay to the roadmap but is good practice and therefore currently we are planning an audit prior to POS release, especially as the primary supported programming language will be golang.

Peter Waterland: Basically we weren’t planning an audit for the go-qrl node per se, as the next release will be hugely different and will require another full code-audit.

JP Lomas: OSTIF partner with x41 amongst others, and provide a valuable contribution to the open source community.

## Q: Will the PoS be a completely new algo from scratch or will you be able to build from the “old” PoS version you coded prior to the mainnet with PoW?

As a team we created a new novel hash-based pq-secure POS algorithm in 2017 (whitepaper on github for the interested) which due to concerns in overly delaying mainnet was temporarily put on hold to allow successful launch with POW instead. It has always been our position to return to this once the network reached maturity.
Our first iteration of POS was fairly CPU hungry and is now fairly simplistic given there are several new validated sophisticated algorithms from other major crypto assets planned or in production already. We are meeting next month in the UK to finalise our proposed algorithm (updated whitepaper to be published) and revive the POS devnet effort.

Peter Waterland: So, again ANN regarding POS roadmap/timeline first week of August. Personally really excited about this..

## Q: Was the asian exchange which will be listing qrl “as soon as its practical” in contact with qrl for some time, or was the connection established because of the geofencing?

Both. We are not able to discuss exchange listings further at this time.

## Q: Are there any plans for more in depth stats on the explorer ? If so what is planned?

Yes. The existing explorer queries nodes directly. V2 of the explorer is an indexer, which allows for richer querying of the chain data. Examples of stats available are richlist, transactions and address demographics. Requests for statistics are welcomed via Github — either as a QIP (ideally) or via Issue on the block-explorer repo. Version two of the explorer is a scalable very powerful sequel to the existing explorer which will allow a much richer experience for the end user and further enable private enterprise usage.

Peter Waterland: So JP can come in here, but V2 is in basically a different league to the existing explorer both in terms of functionality and, dare I say it, visibly (ducks for cover)
JP Lomas: Ledger integration slowed us down with this but hopefully headed back on track for now
JP Lomas: So please see above and dump ideas somewhere useful — QIP or Github.

## Q: Are there any other known network explorers being developed?

The Foundation has supported the development of V2 explorer previously mentioned. It is worth mentioning this has a completely new clean look and is (obviously) far more performant than the existing site.

## Q: Are there any known QRT’s planned for private/public usage?

We view PQ-secure digital asset storage as a major commercial boon for the crypo-asset space over the medium and longer term. We are not able to discuss potential private QRT applications further at this time.

## Q: If consensus is changed to POS how will foundation staking be governed?

This is a complex and important question as clearly the foundation address is one of the largest addresses on-chain (#2). My personal view is that the foundation funds should stake as for any other large holder, but that how foundation QRL are disbursed is to be decided through on-chain ledger-wide voting in a completely decentralised manner. This is one of the things I think are so exciting about decentralised value transfer networks when there is no one person or organisation in control. Ultimately it should be the users and ledger stake holders who decide what benefits the project moving forwards and therefore control should be voted upon.

## Q: How many single points of failure exist in QRL? Many of us saw US blocking exchange as one, how about technology transfer? Let say a dev were to disappear tomorrow, are others able to continue their unfinished job?

Risk. Again this is a huge topic of discussion. We held extensive talks and created several action plans to mitigate risks identified prior to launch of mainnet. Liquidity provision is clearly a major factor at present but we are following a plan to overcome this — as suggested previously we are not able to discuss the specifics further at this time (but you can guess).

Regarding other project risks such as the development team (in part or whole) disappearing — that is certainly a risk to any project. But the network is live, with mining nodes determining the QRL ledger for the last year and into the future. Developers may come and go but as the QRL is licensed open source then other individuals or teams may step in — that is the beauty of cryptocurrency. If you look at github there are actually many contributors who have submitted code in the various iterations of the project and it is likely the team will morph over time as it matures post-POS release and codebase updates become more refined.

## Q: Will ephemeral messaging be available as soon as go-qrl is live?

The stub functionality to allow ephemeral messaging is already in our devnet codebase. The next major release (which must be a hard fork) will include that capability out of the box. go-qrl is already live and running (experimentally!) on the network.
Peter Waterland: Regarding EMS, we have had the stub code in place since launch actually, just without the lattice transaction :/ and to update = hard fork.

## Q: Are there some collaboration with other blockchain /coins in the pipeline?

There are no collaborative plans with other chains in the pipeline, although the dev team have extensively discussed and debated the idea of a PQ Bitcoin mirror in the event of a black swan ‘Y2Q’ event.

Peter Waterland: So this is an interesting one. As a fully PQ-secure ledger we can ‘import’ other chains onto the QRL..
Peter Waterland: So it is complicated but can be done..we should probably blog it
Peter Waterland: But bitcoiners will scream
JP Lomas: (louder)

## Q: Will there be some sort of ceo or strong leadership?

The QRL is a decentralised public cryptocurrency with an open source codebase for anyone to contribute to. Just like in other projects there is no CEO of the QRL. The foundation will support the development roadmap until such time as this process may be governed on-chain.

## Q: Is there already a collaboration between qrl and korona? (I guess it’s cyyber who is a member of both foundations as far as the swiss commercial register states)

There is no collaboration between QRL and Korona, which incidentally neither we have never heard of!

Adam Koltun: On a personal note, I checked out korona’s .io site. Don’t go there, it’s been hacked or sold.

## Q: Thoughts about quantum supremacy possibly being achieved this year?

The QRL is the first fully post-quantum secure blockchain project in the world. As a technical achievement it has been cited multiple times in the academic literature by cryptographers and blockchain experts. But to paraphrase an old saying, there is no difference between being early and being wrong. At present the progress seen in commercial quantum computer hardware has been largely ignored by the crypto asset space which puts pressure on the value proposition of a public post-quantum secure blockchain ecosystem like the QRL. But the commercial world is already spending huge sums moving to post-quantum secure technology and I would predict soon quantum supremacy will usher in a new and sustained focus on post-quantum security within the crypto-asset space. Soon is of course impossible to define at this stage, so we will build out a completely PQ-secure ecosystem in the interim.

It is worth noting that exciting progress in public commercial quantum computer development ignores what may be already possible for state-level actors with unlimited resources. (The first QC built to break existing cryptography will be unlike any other computing breakthrough — think of a machine which gives an incorrect answer to a question posed millions, trillions of times before a correct solution appears just for a moment. If a QC can run (supported by classical hardware) for weeks, even months before succeeding in breaking existing cryptographic systems then that is still giant, vast leap forwards.)

Peter Waterland: Short version from me, quantum supremacy is coming. Crypto is ignoring it as high volume chains won’t work with large PQ-secure signatures and its a lot more complicated than just swap out the old signature scheme.

## Q: Is Peter Waterland ever going to have a video interview with crypto celebs to promote QRL? Come on Peter we want to hear that sexy voice again. Btw is he still involved in the surgeon business? If so, why can’t he just fork out 1 hour of his time to do a simple video interview?

Peter Waterland: Glad to hear my voice was sexy! As the team can attest I actually devote a huge amount of time to the QRL. I’m not particularly comfortable in the media spotlight, it is much more than just me at this point in time, with a vibrant community and dedicated team working hard. But i’m not averse to the occasional interview if the community request it!
Peter Waterland: I think moving some of our voluminous team communications [to discord] might be useful, too.
## Q: So when quantum computers become powerful enough to break most crypto, that also means they can break any SSL, including logins to servers running nodes, not to mention most of anything that used to be considered secure on the Internet. In the wake of this eventuality, how can QRL protect its own nodes and network? Will there be some period of time when QRL along with every other crypto will simply be unusable just because it relies on infrastructure that is not “quantum resistant”?

This depends largely on the speed of transition: a black swan event occurring earlier than anticipated will have differing global impact on networks to a later transition. Certainly the infrastructure around our Ledger will change (as NGOs, academics, companies: NIST, Isara, CQC) when QCs are sufficiently powerful to disrupt on a massive scale, but the core blockchain will remain secure and it this which has intrinsic value.

Peter Waterland: I think personally it is more likely that commercial QC’s bring forward changes to every part of the internet in terms of cryptographic security and that will help us immensely. A public crypto theft is still quite unlikely atm.

JP Lomas: And the emerging industry around that will give us airtime by proxy.

## Q: Out of 10, where does the team rate the current development of QRL blockchain? Was the team expecting to have done more or less by now?

All team members will have different opinions. As a group we’re passionate and perfectionist so there will always be things we could do and perhaps should have done better. Hindsight is wonderful, but we are confident that we have made the best development decisions for the right reasons going forward. The quality of the technical product is and has always been the overall team priority. There has been a lot of events in the space that have been completely outside our control but we have achieved more with a fraction of the resources than most of the projects in the space.

Peter Waterland: I think our roadmap is a process and we are moving along it. Not launching with POS was a setback but we got past that and now have a decent ecosystem including Ledger and mobile support. Lots more coming, too.

## Q: Based on the above, how confident is the team to deliver on time the current roadmap expectations?

As always, we try and predict timescales and deliver to them. Though we too get frustrated by slipped deadlines, we will always consider what we think it in the best interests of the project over anything else.

Peter Waterland: We will get to the end of the roadmap. Eventually! :-). On that note we are looking to expand the dev team.

## Q: Can you comment on what you see as the most helpful things the community can do to push this project forward?

Spread the word and bring smart people our way. We don’t have the massive financial lure the larger (over-the-top) well-funded projects have, but we do have solid technology, an interesting and varied roadmap and some of the nicest team members in open source to work with.
The community contributions have massively accelerated our capabilities to get word out. In a world of ‘fake news’ and an industry of fraud and exit scams, our strength lies in solid participation of polite, well-informed and helpful community members.

Peter Waterland: There are only a few completely new codebases backing crypto projects in the space and none with crypto quite as odd as ours.

## Q: What efforts are being done to attract more devs to the project? And can the devs help try to reach out to others in the dev community to build on QRL?

There are several projects underway to attract more developers. Updating APIs to make it easier to interact with (and therefore build on) the chain are key in this: watch out for our new API bridge, codenamed “Brooklyn” and a new “getting going developing with the QRL” tutorial for starters. Again, word of mouth here is key, so if you know smart people send them our way!

Peter Waterland: It’s tough to find new people. Really tough.

## Q: How many team members are working “full time” on QRL?

It varies depending on the needs of the project and what the definition of “full time” is. Team members are all contracted to provide services to the project as required to hit milestones. At peak development, we had 11 people contributing the equivalent of full time work in the run up to main-net. Keeping this number of “full time” individuals 12 months a year would not be a sensible use of resources or good for the long-term of the project.

## Q: When will the Nano X app will be integrated into the QRL web wallet?

JP Lomas: Now! Nano X and Web Wallet works fine if you have a WebUSB browser.