---
layout: blog-post
slug: 150k-in-100-days
date: 2018-10-11
author: "Jack Matier"
title: "150k in 100 days"
subtitle: "A small look at our blockchain"
featured_image: 1xizQknbpT9ImcT3dRmBZxA.png
images:
  - 1xizQknbpT9ImcT3dRmBZxA.png
---

### A small look at our blockchain

150,027 blocks in 103.62 days, specifically.

Before I get into it, I would like to take a moment to thank Kaushal (Discord username cyyber), without which this would not have happened. I have attempted to select out some fun, interesting and telling statistics from our first 150,000 blocks to help educate our community.

## Transfers

There's been 142,156 transfers (not including coinbase), which represents just under 1 transfer a block on average. However, digging deeper, there's 114,087 "empty" blocks (blocks with just coinbase), meaning those 142k transfers were done in 35,940 blocks — or an average of \~4 transfers per block when excluding blocks with just the coinbase transaction. 

The total Quanta transferred has been 31,847,174.275453055 (including migration). With the Delta between block 0 and block 150,027 being 8,952,602 seconds (or 103.62 Days), we can derive some other averages.

- Average tx/day: 1,371.92
- Average tx/hour: 22.87

- Average blocks per day: 1447.85755646
- Average blocktime: 59.6743786118 seconds
- *Target* blocktime 60 seconds

- Average Quanta/day transferred: 307,351.52
- Average Quanta/hour transferred: 5,122.53
- Average Quanta/minute transferred: 85.37
- Estimated upper Quanta mined/day\*: 9,405

\* Estimated as QRL follows an [exponential decay emission model](https://github.com/theQRL/QRL/blob/2a14a9fa52dc09591736f4512906bf67ff99c464/tools/EmissionModel.ipynb)

The total fees collected have been 673.763576565 Quanta, or 0.00473960702 Quanta per transaction on average. It should be noted that the default fee is 0.001 Quanta for typical transfers, and 0.25 for messages. Also, it should be noted that it’s possible to pay no fees for either transaction type.

It comes to no surprise that the maximum amount of Quanta transferred in a single transfer was from Genesis at 9,728,705.129449940 Quanta for tx hash [2dee23409b273f21c200763b04119d63648f553c75f44964ec3c96765e642b3c](https://explorer.theqrl.org/tx/2dee23409b273f21c200763b04119d63648f553c75f44964ec3c96765e642b3c)

## Blocks

The largest block was block [146717](https://explorer.theqrl.org/block/146717) with a size of 306.29 KB and also sets the record at 114 tx’s (\~2 tx/s without a sweat).

Average block size was 2.95516 KB

## Messages

There’s been 46 messages sent on the QRL blockchain with a total fee of 2.364300021 Quanta (0.051397827 Quanta average). The maximum fee paid for a message was 0.25 (which is also the default), indicating that people prefer to send their messages for less than the default fee! The minimum, as you can imagine, would be 0 — indicating some people simply will not pay if they don’t need to.

## Tokens

203 tokens have been minted for a total combined network fee of 8.404321110 Quanta (0.041400597 Quanta average). The maximum fee paid was [5 Quanta](https://explorer.theqrl.org/tx/2ccd5368cd4d3818a699fb90e0aa19183cf5b5ff2d371ac9a5ae0dcb9a840c6f), which we can only imagine either was a mistake or generosity to the network gods.

There are fewer token transfers than tokens created with a mere 80 token transfers paying a total of 1.156410020 network fees for an average of 0.014455125 Quanta (the lowest average of the bunch by a factor of 4 until you encounter Slave transactions). Maximum fee was [1 Quanta](https://explorer.theqrl.org/tx/8a5a7cac1205b13841138327164110909eb48fd709ce9e62612f702697496445) for the token ETC (etheriumclas).

## Slaves

For those unaware, a slave transaction can include maximum 100 public keys. These addresses are allowed to act as slave and can move funds from the master address by signing themselves which is without using the signature of master address. This *effectively* allows for unlimited signature capacity from an address.

There have been 55 slave transactions, with a total fee of 0.079000000 Quanta, the majority of which was from a slave that paid a network fee of [0.050000000 Quanta](https://explorer.theqrl.org/tx/49e6c5ff8280d5b90ec692e2b4d75f4f1d0421c36201d020e4622c3e0778cbe3). With everything considered, the average fee was 0.001436364 Quanta (and even less if you exclude the outlier)

## Addresses

Total Number of Addresses(including Slaves) : 6,213
Total Number of Addresses(excluding Slaves) : 3,280
Total Number of Addresses holding Quantas : 3,220

## Richlist

While this is a blockchain with a public ledger, we have opted to only include the top 5 addresses to achieve some semblance of privacy.

```
1. 38,953,556.583351
Q0109003493192e08affe87d57e254df3e15be3b8709a40f07e0fc550de60696c2d0333f7070e1d

2. 8,449,999.9978652
Q010600648cb22a04edbff712a3fa6d04530453d9a6117fba2ca38a51a3a5b0da742350db0ce225

3. 2,589,079.35757634
Q010500e74e97637db33374745538c90f58f0666bc058292bcaa8ca427c03f87479a66329ebe67d

4. 2,505,542.065134
Q010500e587fd07bb1c5ace98956d9aa6c347e7114ccb4ec7183baa54804cc8b974e91cc3b5617e

5. 2,362,675.358
Q0106004d84fe4e7b65ca11725eda53152dd57a8e922829ca339fe104db9b423390e05cbad6983e
```


## Conclusion

As we hope this blog has illustrated, the QRL network is functioning, and functioning well. With a growing number of nodes, transactions and wallets as it continues to mature, the QRL network has accomplished much in its first 100 days / 150,000 blocks.

Networks are often most vulnerable in their first 100 days, as security oversights are exploited and/or flaws in the code are manipulated by bad actors (there have been attempts, but no successes!). As happy as we are with the activity on the network, we are most proud of the general stability and security of the network.

As we often try to underline, absent baseline of dependability/security, much of the more exciting and complex things we hope to accomplish with the network (such as smart contracts, developed messaging, among other features) would not be possible or as practical an undertaking.

Thank you all again for taking this journey with us, you can expect more blogs like this around significant milestones in the network’s life (like the 1 year anniversary of its launch, etc).