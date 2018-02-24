---
title: Linux Full Node
categories: mining
tags: mining
---

Any modern PC with Ubuntu (16.04) or Linux/Unix based systems should work 
running a full QRL node. There are a few requirements that you should take into consideration.

### Minimum Requirements

* Linux / Unix / mac based systems should work *YMMV*
* Any x86 or x64 based processor
* Support for AES-NI is required for full nodes
 * You can pool mine with non-AES-NI processors, See the list of [pools](/Pool-List.md) FIX-ME with correct link
* Windows users using the built in FIX-ME with correct info
* HDD large enough to store the BlockChain at current size, plus future growth                


You should have a basic understanding of the CLI before attempting to set this up, it isn't really all that tough.
 If you have issues please drop into the Discord chat: [discord.gg/RcR9WzX ](discord.gg/RcR9WzX )
 Lots of friendly people over there ready to help.
              
**Plan for the future!**

Make sure the computer you are using has enough power to handle the load of the 
mining operation. You will also need enough storage to keep the chain as it grows 
in the future. Recommend a few hundred gig HDD/SSD to sync the chain on 
long term to be safe.

I do not expect to make any profit running this server mining coins and I am simply using it for testing. You really want to run this on a multi-processor setup with a good amount of ram. Add a few GPU's and you will be making a decent return.

* * *

### Install QRL

It's best to start with a fresh, brand new install of Ubuntu 16.04. If you have dependency issues with other software you will need to work through it then come back. You can always boot into a Linux live persistent USB or similar and run the mining node on the computer without modifying the PC (other than the CPU cycles used)


#### Update 

```bash
# Issue the following command to update software
sudo apt update && sudo apt upgrade -y
```

#### Dependencies

```bash
## Install the required packages for QRL

sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential 
sudo apt-get -y cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev
```

#### Install

```bash
# Install the QRL Package.

pip3 install -U qrl
```
#### pip3

If your having issues runnning the above command there are a few things to do that will help diagnose the issue. The `pip3` function comes with a logging capibility to see where the issues are happening.  

Run the command above again with  

```bash
pip3 install -U qrl --log ~/pip3-Qrl.log
```

It will print details of the install to your home directory with the file name pip3-qrl.log. Read it!
The error should be inside.

#### Git

If you want to run from the repo you can clone it to the local file system with:  
```bash 
cd ~/  
git clone https://github.com/theQRL/QRL.git
```


This allows us to run from a local directory and gives some freedom to change some of the defaults.  
Also later if we want to update to get the latest changes from the developers it's a simple `git pull` from inside the QRL directory

* * *

### Setup Wallet

Before we start there are a few things to know about.

*   The default location for the wallet and the chain is `~/.qrl` unless you specify it on the command line. Make sure this location has some room for the chain to grow.
*   If you installed with `pip3 install -U qrl` you will use the `qrl` command.
*   If you installed from source via GitHub you will be invoking the `~/QRL/start_qrl.py` and the `~/QRL/qrl/cli.py` commands.

#### Create New Wallet

Create a new wallet with:  

**Python Install**

```bash
qrl wallet_gen
```
**From Source**

```bash
~/QRL/qrl/cli.py wallet_gen
```

This creates a wallet file in your 
`~/.qrl/` folder called `wallet.qrl`

* * *

#### Get Mnemonic and hexseed

To find your hexseed and recovery information for your wallet you will need to run:

```bash
qrl wallet_secret
```  
Or if installed from source 

```bash
~/QRL/qrl/cli.py wallet_secret
```

It will respond with a question `Wallet idx [0]:` **Enter** will select the default wallet shown, if you have more tahn one select the index that reflects the wallet you are using.

*   This will show you the address and secret mnemonic for the wallet you created, stored in `~/.qrl/`
*   Save it somewhere safe! Anyone with this information can recover your wallet and steal your coins.

> **Fix Me** - Add command to get `hexseed` from wallet 

* * *

#### Recover Your Wallet

If you loose your wallet, the mining rig catches fire, or worse, you still have the ability to recover your Quanta as long as you've saved the hexseed or mnemonic phrase.  
```bash
qrl wallet_recover` 
```
Or  
```
~/QRL/qrl/cli.py wallet_recover
```
Without any other flags this will look for the hexseed you generated before.  

We can add the flag `--seed-type [hexseed|mnemonic]` to change the type of recovery method we want to use.

```bash
# Built with pip3
qrl --seed-type mnemonic
qrl --seed-type hexseed

# Built from source
~/QRL/qrl/cli.py --seed-type mnemonic
~/QRL/qrl/cli.py --seed-type hexseed
```
This will prompt up to enter the key or phrase. This should recover the wallet and ask if we want to save it. Enter `y` when prompted.

* * *

#### Generate New `slaves.json` File

Using the wallet we just created lets create some files we can use to mine with.  

```bash
qrl -r --host 104.251.219.215 slave_tx_generate` 
```
this will prompt you for some answers.

```bash
Src []:                 # the wallet you generated identified by #ID
Addr from               # (Leave blank in case same as source) []:`
Number of slaves [0]:   # How many wallet files do we want to slave?
Access type [0]:        # Do we want to mine or transfer coins?
# 0 <-- gives all permissions from the master wallet to slave wallet, 
    # Slave wallet can perform all transactions for master wallet
# 1 <-- Only mining permissions to slave wallet. 
    # Slave wallet can sign blocks while mining 
    # Will credit the mining reward to the master address only. 
    # This setting allows incoming only transfers.
Fee [0.0]: 0            # how much fee are we paying
```

This will generate a `slaves.json` file for you and put into the directory you are in. We need to move it to the `.qrl` folder of whatever computer we plan to mine with. 

This will allow you to securely make a wallet file and generate a `slaves.json` file on a secure PC that wont let coin transfers happen. You can then move it to a public mining rig and not worry about people stealing your keys.  

Save the Mmneonic to a cold wallet file and when you need to move coins, restore the wallet, generate a new `slaves.json` with the correct privileges and transfer the coins out of the wallet.

##### From Local Directory

If you are running from `git clone`  

```bash
./qrl/cli.py -r --host 104.251.219.215 --wallet_dir /home/qrl/QRL/.qrl/ slave_tx_generate
```
It will ask the same questions as above.


* * *


### Start the Node

We need to move the `slaves.json` file we created above to our mining pc, and then start the node.

**Run**

```bash
#Installed with pip3
qrl

# Running from source
~/QRL/start_qrl.py
```
If you are running from source

If you placed the `slaves.json` file into the correct 
directory the node should start up and begin mining. 
It may take a little while for the slave to become active. 

**Be patient!**

* * *

### Node Commands

Some Handy Commands to query against your node. 

``` bash
screen -d -m ~/QRL/start_qrl # This will start QRL in a screen session.
    screen -r                # To reattach the screen
    ctl+a d                  # Exit the screen without quitting the program
tail -f ~/.qrl/qrl.log       # Show activity in qrl.log

# Print found blocks. If empty your node has not found anything yet.
grep Solution Found ~/.qrl/qrl.log
# Prints how many blocks you have found (count of won blocks)
grep Solution Found ~/.qrl/qrl.log |wc -l   
```

* * *

### Install From Source

If you grabbed the source files from [GitHub](https://github.com/theQRL) the commands will differ a bit. Instead of the `qrl` command we will invoke

```bash
~/QRL/start_qrl.py # This will start the node up and by default begin mining for us

# You can see your options by running 
./start_qrl.py --help # This will give the following output.

# usage: start_qrl.py [-h] [--quiet] [--datadir DATA_DIR] [--no-colors] [-l {DEBUG,INFO,WARNING,ERROR,CRITICAL}] [--randomizeSlaveXMSS]

# optional arguments:
-h, --help                                      # show this help message and exit
--quiet, -q                                     # Avoid writing data to the console
--datadir DATA_DIR, -d DATA_DIR                 # Retrieve data from a different path
--no-colors                                     # Disables color output
-l {DEBUG,INFO,WARNING,ERROR,CRITICAL}          # Set the logging level
--loglevel {DEBUG,INFO,WARNING,ERROR,CRITICAL}  # Set the logging level
--randomizeSlaveXMSS                            # Generates random slaves.json file (Warning: For Integration Test only)
```

```bash
~/QRL/qrl/cli.py                                # gives us some of the other functions like generating a wallet and such.
#Running the command 
./qrl/cli.py --help # will give you the available options

# Usage: cli.py [OPTIONS] COMMAND [ARGS]...
# QRL Command Line Interface
# Options:
    -r, --remote                                # connect to remote node
    --host TEXT                                 # remote host address [127.0.0.1]
    --port_pub INTEGER                          # remote port number (public api) [9009]
    --port_adm INTEGER                          # remote port number (admin api) [9009]* will change
    --wallet_dir TEXT                           # local wallet dir
    --help                                      # Show this message and exit.
# Commands:
    slave_tx_generate                           # Generates Slave Transaction for the wallet
    token_list                                  # Create Token Transaction, that results into...
    tx_inspect                                  # Inspected a transaction blob
    tx_prepare                                  # Request a tx blob (unsigned) to transfer from...
    tx_prepare                                  # Request a tx blob (unsigned) to transfer from...
    tx_prepare                                  # Request a tx blob (unsigned) to transfer from...
    tx_push
    tx_sign                                     # Sign a tx blob
    tx_token                                    # Create Token Transaction, that results into...
    tx_transfer                                 # Transfer coins from src to dst
    tx_transfertoken                            # Create Token Transaction, that results into...
    wallet_add                                  # Adds an address or generates a new wallet...
    wallet_gen                                  # Generates a new wallet with one address
    wallet_ls                                   # Lists available wallets
    wallet_recover                              # Recovers a wallet from a hexseed or mnemonic...
    wallet_secret                               # Provides the mnemonic/hexseed of the given...

```
* * *

### Config File

The default settings for the code are burried inside of the core directory. Instead of changing the settings there where an update would overwrite the changes create your own, add a file to your `~/.qrl` folder titled `config.yml`

#### Download config.yml

You can grab a copy of this file directly from here with:  
`wget https://qrl.co.in/public/config.yml`  
Move it to your ~/.qrl folder  
`mv config.yml ~/.qrl`  
You can download a copy of this file here as well [config.yml](https://qrl.co.in/public/config.yml)  

#### Edit the config.yml

If you want to you can of course just create the file.  
`nano ~/.qrl/config.yml`  
Add the following to this file. All settings are default, however this file will override the default settings. Uncomment the lines you want to change. Beware that you can break things if you are not careful.

```bash
## Default QRL Configuration
#
## Format must meet the following "{VARIABLE} : {SETTING}, boolean must be Caps"
#  
## Mining Setup  
## Enable mining with True | Disable with False  
mining_enabled : True  
#  
## 0 to auto detect thread count based on CPU/GPU number of processors  
mining_thread_count : 0 # set to desired processor count  
#  
## Ephemeral Configuration  
accept_ephemeral : True  
outgoing_message_expiry : 90 # Outgoing message expires after 90 seconds  
p2p_q_size : 1000  
#  
## Cache Size  
lru_state_cache_size : 10  
max_state_limit : 10  
#  
## PEER Configuration  
## Allows to discover new peers from the connected peers  
enable_peer_discovery : True  
#  
## Allows to ban a peer's IP who is breaking protocol  
ban_minutes : 20  
#  
## Number of allowed peers  
max_peers_limit : 100  
#  
chain_state_timeout : 180  
chain_state_broadcast_period : 30 # must be less than ping_timeout  
#  
## Default Locations  
## Only change these if you must!  
## You HAVE to use full path to location.  
## This is where the program will look for files  
## Change the {USER} to your local username to work  
#  
## The users ~/.qrl/ directory  
#qrl_dir : /home/{USER}/.qrl  
#  
## The users ~/.qrl/data/ directory  
#data_dir : /home/{USER}/.qrl/data  
#  
## QRL Loging location ~/.qrl/qrl.log  
#log_path : /home/{USER}/.qrl/qrl.log  
#  
## The users ~/.qrl/wallet/ directory  
#wallet_staking_dir : /home/{USER}/.qrl/wallet  
#  
# ======================================  
# MINING WALLET CONFIGURATION  
# ======================================  
#slaves_filename : '/home/{USER}/.qrl/slaves.json'  
#wallet_dir : /home/{USER}/.qrl/wallet  
#
```

* * *










