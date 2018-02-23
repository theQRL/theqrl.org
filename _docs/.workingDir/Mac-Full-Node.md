---
title: MAC Full Node
permalink: /docs/mining/mac
categories: mining
tags: mining
---

![logo](/assets/logo.png)


![QRL Logo](assets/QRLnotextPink.png)

# Mac Full Node Guide

* [Home](#node-setup-instructions)
* [Install QRL](#install-qrl)
* [Wallet](#setup-wallet)
 * [Create New Wallet](#create-new-wallet)
 * [Get Mnemonic](#mem)
 * [Recover Wallet](#Recwal)
* [Generate Slaves.json](#slave)
* [Start Node](#node)
* [Handy Commands](#commands)
* [Install From Source](#source)
* [User config.yml File](#config)

## Node Setup Instructions

Any modern PC with the latest OS updates should work running a full QRL node.

**Minimum Requirements to Run QRL**

* Linux / Unix / mac based systems should work *YMMV*
* Any x86 or x64 based processor
* Support for AES-NI is required for full nodes
 * You can pool mine with non-AES-NI processors, See the list of [pools](/Pool-List.md) FIX-ME with correct link
* Windows users using the built in FIX-ME with correct info
* HDD large enough to store the BlockChain at current size, plus future growth                

You should have a basic understanding of the CLI before attempting to set this up, it isn't really all that tough. If you have issues please drop into the Discord chat:

[discord.gg/RcR9WzX](https://cnhv.co/1mfxv)
Lots of friendly people over there ready to help.
              

### Install brew

If you dont have brew, install it with this command:  

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
```

This will prompt you through a few questions while it installs.  

You can also follow the instructions found at the [brew main page](https://brew.sh/)

#### Update

Now that you have brew installed, update your package lists:  
```bash
brew update
```

#### Dependencies

Install the required dependencies:  
brew install cmake python3 swig boost hwloc

* * *

### Install QRL

We have some options for installing the QRL package. We can either use the package management system for python3 `pip3` **or** we can install from sources getting the files from GitHub.

**Python Packages**

Install the QRL Package with:

```bash  
pip3 install -U qrl
```
**From Git Sources**

If you want to run from the repo you can clone it to the local file system with:  

```bash
cd ~/  
git clone https://github.com/theQRL/QRL.git
cd QRL/
git checkout master
git pull
```
This will clone the QRL repo to the ~/QRL directory found in the users /home/ folder.

Also later if we want to update to get the latest changes from the developers it's a simple `git pull` from inside the QRL directory.

* * *

### Create New Wallet

Before we create our new wallet there are a few things to know about.

*   The default location for the wallet and the chain is ~/.qrl unless you specify it on the command line. Make sure this location has some room for the chain to grow.
*   If you installed with pip3 install -U qrl you will use the qrl command.
*   If you installed from source via GitHub you will be invoking the ~/QRL/start_qrl.py and the ~/QRL/qrl/cli.py commands.

### Create New Wallet

Create a new wallet with:  

#### Python Install

qrl wallet_gen

#### From Source

~/QRL/qrl/cli.py wallet_gen

This creates a wallet file in your ~/.qrl/ folder called wallet.qrl

* * *

### Get the Mnemonic and hexseed

To find your hexseed and recovery information for your wallet you will need to run:  
qrl wallet_secret  
Or  
~/QRL/qrl/cli.py wallet_secret

It will respond with a question Wallet idx [0]: Enter selects the default wallet shown, if you have more select the index that reflects the wallet.

*   This will show you the address and secret mnemonic for the wallet you created, stored in ~/.qrl/
*   Save it somewhere safe! Anyone with this information can recover your wallet and steal your coins.

* * *

### Recover Your Wallet

If you loose your wallet, the mining rig catches fire, or worse, you still have the ability to recover your Quanta as long as you've saved the hexseed or mnemonic phrase.  
qrl wallet_recover  
Or  
~/QRL/qrl/cli.py wallet_recover  
Without any other flags this will look for the hexseed you generated before.  
We can add the flag --seed-type [hexseed|mnemonic] to change the type of recovery method we want to use.

qrl --seed-type mnemonic
qrl --seed-type hexseed

~/QRL/qrl/cli.py --seed-type mnemonic
~/QRL/qrl/cli.py --seed-type hexseed

This will prompt up to enter the key or phrase. This should recover the wallet and ask if we want to save it. Enter y when prompted.

* * *

### Generate New slaves.json File

Using the wallet we just created lets create some files we can use to mine with.  
qrl -r --host 104.251.219.215 slave_tx_generate  
this will prompt you for some answers.

Src []: 0 the wallet you generated identified by #ID
Addr from (Leave blank in case same as source) []:
Number of slaves [0]: 4 How many wallet files do we want to slave?
Access type [0]: 1 Do we want to mine or transfer coins?
    0 <-- This gives all permissions from the master wallet to the slave wallet, this means the slave wallet can perform all transactions, on behalf of the master wallet, including sending coins.
    1 <-- This gives only mining permissions to the slave wallet. This means the slave wallet can sign blocks while mining, and credit the mining reward to the master address only, no other transactions out can occur. This setting allows incoming only transfers.
Fee [0.0]: 0

This will generate a slaves.json file for you and put into the directory you are in. We need to move it to the .qrl folder of whatever computer we plan to mine with.  
This will allow you to securely make a wallet file and generate a slaves.json file on a secure PC that wont let coin transfers happen. You can then move it to a public mining rig and not worry about people stealing your keys.  
Save the Mmneonic to a cold wallet file and when you need to move coins, restore the wallet, generate a new slaves.json with the correct privileges and transfer the coins out of the wallet.

#### From Local Directory

If you are running from git clone  
./qrl/cli.py -r --host 104.251.219.215 --wallet_dir /home/qrl/QRL/.qrl/ slave_tx_generate It will ask the same questions as above.

* * *

### Start the node

We need to move the slaves.json file we created above to our mining pc, and then start the node.

#### Run

qrl

if you installed with pip3

#### Or

~/QRL/start_qrl.py

if you are running from source

If you placed the slaves.json file into the correct directory the node should start up and begin mining. It may take a little while for the slave to become active. Be patient!.


* * *

### Node Commands

Some Handy Commands to query against your node.  

screen -d -m ~/QRL/start_qrl This will start QRL in a screen session.
    *   To attach the screen enter screen -r
    *   To exit the screen without quitting the program ctl + a then d this will detach the current screen session
tail -f ~/.qrl/qrl.log This will show the activity on your node if you run in --quiet | -q mode or in a screen session.
grep 'Solution Found' ~/.qrl/qrl.log Will print all of your found blocks. If this list is empty your node has not found anything yet.
grep 'Solution Found' ~/.qrl/qrl.log |wc -l Prints how many blocks you have found (count of won blocks)

* * *

### Install From Source

If you grabbed the source files from [https://github.com/theQRL](https://cnhv.co/1lce3)[GitHub](https://github.com/theQRL) the commands will differ a bit. Instead of the qrl command we will invoke

~/QRL/start_qrl.py Will start the node up and mine for us
*   You can see your options by running ./start_qrl.py --help This will give the following output.
    usage: start_qrl.py [-h] [--quiet] [--datadir DATA_DIR] [--no-colors] [-l {DEBUG,INFO,WARNING,ERROR,CRITICAL}] [--randomizeSlaveXMSS]
    optional arguments:
        -h, --help | show this help message and exit
        --quiet, -q | Avoid writing data to the console
        --datadir DATA_DIR, -d DATA_DIR | Retrieve data from a different path
        --no-colors | Disables color output
        -l {DEBUG,INFO,WARNING,ERROR,CRITICAL}, --loglevel {DEBUG,INFO,WARNING,ERROR,CRITICAL} Set the logging level
        --randomizeSlaveXMSS | Generates random slaves.json file (Warning: For Integration Test only)
~/QRL/qrl/cli.py gives us some of the other functions like generating a wallet and such.
    *   Running the command ./qrl/cli.py --help will give you the available options
    Usage: cli.py [OPTIONS] COMMAND [ARGS]...
    QRL Command Line Interface
    Options:
        -r, --remote connect to remote node
        --host TEXT remote host address [127.0.0.1]
        --port_pub INTEGER remote port number (public api) [9009]
        --port_adm INTEGER remote port number (admin api) [9009]* will change
        --wallet_dir TEXT local wallet dir
        --help Show this message and exit.
    Commands:
        slave_tx_generate Generates Slave Transaction for the wallet
        token_list Create Token Transaction, that results into...
        tx_inspect Inspected a transaction blob
        tx_prepare Request a tx blob (unsigned) to transfer from...
        tx_prepare Request a tx blob (unsigned) to transfer from...
        tx_prepare Request a tx blob (unsigned) to transfer from...
        tx_push
        tx_sign Sign a tx blob
        tx_token Create Token Transaction, that results into...
        tx_transfer Transfer coins from src to dst
        tx_transfertoken Create Token Transaction, that results into...
        wallet_add Adds an address or generates a new wallet...
        wallet_gen Generates a new wallet with one address
        wallet_ls Lists available wallets
        wallet_recover Recovers a wallet from a hexseed or mnemonic...
        wallet_secret Provides the mnemonic/hexseed of the given...

* * *

### Config File

The default settings for the code are burried inside of the core directory. Instead of changing the settings there where an update would overwrite the changes create your own, add a file to your ~/.qrl folder titled config.yml

#### Download config.yml

You can grab a copy of this file directly from here with:  
wget https://qrl.co.in/public/config.yml  
Move it to your ~/.qrl folder  
mv config.yml ~/.qrl  
You can download a copy of this file here as well [config.yml](https://qrl.co.in/public/config.yml)  

#### Edit the config.yml

If you want to you can of course just create the file.  
nano ~/.qrl/config.yml  
Add the following to this file. All settings are default, however this file will override the default settings. Uncomment the lines you want to change. Beware that you can break things if you are not careful.

bash
## Default Linux QRL Full Node Configuration 
## Code located at https://github.com/theQRL/qrl 
# For Help Join the Discord Chat @ https://discord.gg/RcR9WzX
#
## This File Created by - Fr1t2
#
## Mining Setup 
## Enable mining with 'True' | Disable with 'False' 
mining_enabled : True 
# 
## Mining Thread Count
## 0 to auto detect thread count based on CPU/GPU number of processors 
## You should have 2MB of L3 Cache for each core.
mining_thread_count : 0 # set to desired processor count 
# 
## Ephemeral Configuration 
## FIX-ME add comments for Ephemeral settings
accept_ephemeral : True 
outgoing_message_expiry : 90 # Outgoing message expires after 90 seconds 
p2p_q_size : 1000 
# 
## Cache Size 
## Leave as default if you dont know what you ar doing.
## FIX-ME add detail in comments
lru_state_cache_size : 10 
max_state_limit : 10 
# 
## PEER Configuration 
## Allows discovery of new peers from the connected peers 
enable_peer_discovery : True 
# 
## Allows banning a peer's IP who is breaking protocol 
ban_minutes : 20 
# 
## Number of allowed peers 
max_peers_limit : 100 
# 
## FIX-ME add comments
chain_state_timeout : 180 
chain_state_broadcast_period : 30 # must be less than ping_timeout 
# 
## Default Locations 
#
## Only change these if you must! 
## You HAVE to use full path to location. 
## This is where the program will look for files 
## Change the {USER} to your local username to work 
# 
## qrl directory, stores wallet and chain by default
#qrl_dir : /home/{USER}/.qrl # The users ~/.qrl/ directory 
# 
## The qrl /data/ directory - The Blockchain 
#data_dir : /home/{USER}/.qrl/data 
# 
## The Log location for qrl.log - 
# FIX-ME - this log should be rolled before it gets out of control on size
#log_path : /home/{USER}/.qrl/qrl.log 
# 
## The users wallet directory 
#wallet_staking_dir : /home/{USER}/.qrl/wallet 
# 
# ====================================== 
# MINING WALLET CONFIGURATION 
# ====================================== 
#
## Change to your mining wallet location. Defaults are shown
#
## slaves.json location
#slaves_filename : '/home/{USER}/.qrl/slaves.json' 
#wallet_dir : /home/{USER}/.qrl/wallet 
#



All credit goes to the official project team: [The QRL - https://theqrl.org](https://cnhv.co/1lcc8)  
I have no affiliation with the project. I am **NOT** responsible for your actions.

All credit goes to the official project team. [https://TheQRL.org](https://theqrl.org)  
I have no affiliation with the project. I am **NOT** responsible for your actions.
