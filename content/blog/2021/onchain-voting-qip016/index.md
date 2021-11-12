---
layout: blog-post
slug: guide-to-voting-on-qip-016
date: 2021-10-29
author: "Jack Matier"
title: "Guide to voting on QRL Improvement Proposal #016"
summary: "It's important you read this to vote!"
featured_image: voteheader.png
categories:
  - technical
toc: true
---

## Quick 1-minute how-to

The snapshot block-height has been set to `1,772,100`, roughly **7pm UTC on November 2nd, 2021**.

0. **Before** the snapshot blockheight, if your funds are on an exchange. Move them from an exchange to [one of our wallets](/downloads).

**After the snapshot happens on the snapshot date**

1. Open your wallet with [one of our wallets](/downloads) and go to "Tools → Message Transaction"
2. Visit https://vote.theqrl.org after the snapshot blockheight in another window.
3. Scroll to the section "Voting options"
4. Copy the message transaction that you want to vote for (Starts with 0f0f0)
5. Paste the message transaction to the message field.

## Extended guide

### Step 0: Make sure your funds are in the appropriate spot

If your funds are on an exchange, you'll need to remove them before November 2nd, 2021 or they wont get counted in the voting snapshot!

You'll need to [create your own wallet](/downloads). Once you do that, *verify* you can open your wallet by closing it and opening it again.

After that, send the funds from an exchange to your wallet.

### Step 1: Be familiar with the neutral, positive, and negative considerations

Head over to our [pre-vote synopsis](/blog/qip016-reduce-emission-rate-of-the-network-prevote-synopsis/) and read it for an overview.

Lots may have been discussed since then, so it's recommended to join the conversation happening in our [Discord](/discord) community.

### Step 2: Head over to vote.theqrl.org

On [vote.theqrl.org](https://vote.theqrl.org), you'll be presented by a page that outlines the voting parameters, voting options, progress, and a way to check the status of your vote.

### Step 3: Send the message transaction

{{< image "./images/vote.sendmessage.gif" >}}

With the hash outlined in the vote options on [vote.theqrl.org](https://vote.theqrl.org), open up your wallet at [wallet.theqrl.org](https://wallet.theqrl.org) and go to tools -> message transaction.

### Step 4: Verify that your vote was successful

Head back to [vote.theqrl.org](https://vote.theqrl.org) and go to the address check portion of the page. There you'll find a place to copy in your address to check to see whether your vote was counted.

Please note, that it can take up to 24 hours for the vote index to catch up and register. If your vote isn't registered, be sure to return the next day. If you're vote still isn't registered by then, you can reach out to support@theqrl.org and we'll be able to help.

### Step 5: Celebrate

Your vote has successfully been tallied into the fabric of time. It's possible people will look back on this day and see this as a historic moment in history that you were part of!

## Instructions to vote for Ledger Nano S/X

A fix has been issued for the Ledger Nano S/X to allow for message transactions used for voting.

Without getting into details, you'll want to update, if you haven't done so already:

1. The Ledger firmware to >= v2.0.0.
2. The QRL App on the Ledger Nano S/X device to >= v1.1.4, and
3. The QRL Desktop app to v1.7.3 (released Nov 10th, 2021)

Then you'll want to create a message transaction following the [extended guide](#extended-guide). If you're using the *Ledger Nano S*, it's still possible to temporarily lock your device, so you'll want to pay attention to **step 7** of [voting on the Ledger Nano S](#voting-on-the-ledger-nano-s) below.

### Steps to update for both the ledger nano S/X

1. Download the latest QRL Desktop Wallet (https://www.theqrl.org/downloads/)
2. Update Ledger Live to the latest (v2.34.4)
3. Open Ledger Live
4. Connect Ledger and make sure it's running the latest firmware (2.0.0), and QRL Wallet (1.1.4)
5. **If you needed to update to the latest Ledger Firmware or Ledger QRL App:**
   * Close ledger Live
   * Select the QRL Application from you on your Ledger Nano S/X Device. 
   * If you need to, initialize your tree
   * **If you initialized your tree**, open the QRL Desktop Wallet (>= 1.7.3) and go to Tools -> "Set XMSS Index"

### Voting on the Ledger Nano X

1. Go to https://vote.theqrl.org/, and copy the vote transaction hash you'd like to vote for.
2. Open your **Ledger Nano X** device and go to the QRL App installed and select the wallet you'd like to vote with.
3. With the latest **QRL Wallet Desktop application** (>= 1.7.3), open your wallet.  
4. From the **QRL Wallet Desktop application**, go to 'Tools -> Message Transaction'.
5. In the `message` field, paste the vote transaction hash that you'd like to vote for.
6. Click on the button `CREATE MESSAGE`, then after verifying the message details `SIGN WITH LEDGER`.
7. From your **Ledger Nano X** device, press **BOTH BUTTONS** to enter into the transaction menu.
8. From the transaction menu, navigate down to "Sign transaction" by pressing the **RIGHT BUTTON**
9. With "sign transaction" selected, press **BOTH BUTTONS** to sign the transaction, you should see a percentage indicator go to 100%.
10. From the **QRL Wallet Desktop application**, click `SEND TRANSACTION`.
11. Congratulations, you're done!

### Voting on the Ledger Nano S

1. Go to https://vote.theqrl.org/, and copy the vote transaction hash you'd like to vote for.
2. Open your **Ledger Nano S** device and go to the QRL App installed and select the wallet you'd like to vote with.
3. With the latest **QRL Wallet Desktop application** (>= 1.7.3), open your wallet.  
4. From the **QRL Wallet Desktop application**, go to 'Tools -> Message Transaction'.
5. In the `message` field, paste the vote transaction hash that you'd like to vote for.
6. Click on the button `CREATE MESSAGE`, then after verifying the message details `SIGN WITH LEDGER`.
7. From your **Ledger Nano S** device, press **BOTH BUTTONS** to enter into the transaction menu. **DO NOT** browse through view transaction as the ledger device will get stuck.
8. From the transaction menu, navigate down to "Sign transaction" by pressing the **RIGHT BUTTON**
9. With "sign transaction" selected, press **BOTH BUTTONS** to sign the transaction, you should see a percentage indicator go to 100%.
10. From the **QRL Wallet Desktop application**, click `SEND TRANSACTION`.
11. Congratulations, you're done!

For creating a transaction, we've also created a visual guide:

{{< image "./images/ledger_instructions.png" >}}


### Troubleshooting Ledger Issues

#### My Ledger Nano S/X is stuck

1. From the **QRL Wallet Desktop application**, cancel the transaction.
2. Unplug the ledger device and plug it back in.

#### My Ledger Nano S/X is stuck at 20-30% with signing the transaction

1. From the **QRL Wallet Desktop application**, cancel the transaction.
2. Unplug the ledger device and plug it back in.
3. Make sure you're updated to the *latest* **QRL Wallet Desktop application** (>= v1.7.3) found on our [downloads page](/downloads). You can view the version number by looking at the bottom footer of the wallet interface.

#### This still doesn't work.

There's lots of willing community members that's willing to help in any of our community channels, but you can also email support@theqrl.org and we'll be able to take it from there.

## Frequently asked questions

### I have my funds on an exchange, can I vote?

You will need to take your funds **off** of an exchange before the snapshot blockheight.

### I have my funds on my mobile wallet, can I vote?

Yes, though you'll need to export your private key to vote.

### I have my funds on my ledger, can I vote?

Open your ledger from the desktop wallet like you normally would, and make a message transaction from the information found at https://vote.theqrl.org.

### What happens after the vote?

As per our QIP process, we'll be evaluating the outcome and make a public determination based on the votes and other considerations.

### How many votes are required for the Proposal to pass?

QIP voting parameters are evaluated on a case by case basis. As this is dealing with the core economics of the QRL blockchain, greater than 50% of the eligible votes (where 1 QRL = 1 vote) are required to pass ([Qualified majority voting](https://uk.practicallaw.thomsonreuters.com/9-503-0498)).

For QIP 016, eligible votes are `circulating_population - exchanges - foundation`, or about `55.71m` QRL. Half of that would be roughly `27.85m` to pass. Of course, the final values are determined based on the blockheight the snapshot is made.

## Want to learn more?

Give our website [theqrl.org](https://theqrl.org/) a browse or join us for a chat in one of our many communities on [Telegram](https://t.me/QRLedgerOfficial), [Discord](/discord), [Reddit](/reddit), [Facebook](https://www.facebook.com/theqrl/), or [KakaoTalk](https://open.kakao.com/o/gffKNhWb). 

Want to stay up to date? Follow us on [Youtube](https://www.youtube.com/c/QRLedger), [Twitter](https://twitter.com/qrledger) or our [Telegram](https://t.me/TheQRLedger) news channel.

Want to dig into our audited, MIT open-source, enterprise-grade codebase? Check out our github at: [https://github.com/theQRL/QRL/](https://github.com/theQRL/QRL/)
