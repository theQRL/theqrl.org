---
title: Mining on Linux
permalink: /docs/mining/linux
categories: mining
tags: mining
---

**Not Linux?** You should check out our mining on [Windows](/docs/mining/windows) or [Mac](/docs/mining/mac) guides

Make sure the computer you are using has enough power to handle the load of the mining operation. You will also need enough storage to keep the chain as it grows in the future. You can attach storage in the cloud to your VPS and that's exactly what I did. I would recommend a couple hundred gig HDD/SSD to sync the chain on long term to be safe.

## System Requirements



## Install

Get your computer ready. The best situation is a fresh, brand new install of `Ubuntu 16.04`. If you have dependency issues with other software you will need to work through it then come back. You can always boot into a Linux live persistent USB or similar and run the mining node on the computer without modifying the PC (other than the CPU cycles used)

## Update software

```
sudo apt update && sudo apt upgrade -y
```

## Add Dependencies
Install the required packages for QRL.

```
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev
```

## Install QRL

Python Packages

Install the QRL Package.

```
pip3 install -U qrl
```

## Trouble with pip3
If your having issues runnning the above command there are a few things to do that will help diagnose the issue.
the pip3 function comes with a logging capibility to see where the issues are happening.
Run the command again with 
pip3 install -U qrl --log ~/pip3-Qrl.log 
This will print the output of the install to your home directory with the file name pip3-qrl.log. Read it!


## Git Sources
If you want to run from the repo you can clone it to the local file system with:
```
cd ~/
git clone https://github.com/theQRL/QRL.git
```
This allows us to run from a local directory and gives some freedom to change some of the defaults.
Also later if we want to update to get the latest changes from the developers it's a simple git pull from inside the QRL directory


Setup Wallet
Before we start there are a few things to know about.

The default location for the wallet and the chain is ~/.qrl unless you specify it on the command line. Make sure this location has some room for the chain to grow.
If you installed with pip3 install -U qrl you will use the qrl command.
If you installed from source via GitHub you will be invoking the ~/QRL/start_qrl.py and the ~/QRL/qrl/cli.py commands.
Create New Wallet
Create a new wallet with: 
Python Install
qrl wallet_gen
From Source
~/QRL/qrl/cli.py wallet_gen

This creates a wallet file in your ~/.qrl/ folder called wallet.qrl

Get the Mnemonic and hexseed
To find your hexseed and recovery information for your wallet you will need to run: 
qrl wallet_secret
Or 
~/QRL/qrl/cli.py wallet_secret

It will respond with a question Wallet idx [0]: Enter selects the default wallet shown, if you have more select the index that reflects the wallet.

This will show you the address and secret mnemonic for the wallet you created, stored in ~/.qrl/
Save it somewhere safe! Anyone with this information can recover your wallet and steal your coins.

Recover Your Wallet
If you loose your wallet, the mining rig catches fire, or worse, you still have the ability to recover your Quanta as long as you've saved the hexseed or mnemonic phrase.
qrl wallet_recover 
Or 
~/QRL/qrl/cli.py wallet_recover
Without any other flags this will look for the hexseed you generated before. 
We can add the flag --seed-type [hexseed|mnemonic] to change the type of recovery method we want to use.

qrl --seed-type mnemonic
qrl --seed-type hexseed
Or
~/QRL/qrl/cli.py --seed-type mnemonic
~/QRL/qrl/cli.py --seed-type hexseed
This will prompt up to enter the key or phrase. This should recover the wallet and ask if we want to save it. Enter y when prompted.

Generate New slaves.json File
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
From Local Directory
If you are running from git clone
./qrl/cli.py -r --host 104.251.219.215 --wallet_dir /home/qrl/QRL/.qrl/ slave_tx_generate It will ask the same questions as above.


Start the node
We need to move the slaves.json file we created above to our mining pc, and then start the node.

Run
qrl
if you installed with pip3

Or
~/QRL/start_qrl.py
if you are running from source

If you placed the slaves.json file into the correct directory the node should start up and begin mining. It may take a little while for the slave to become active. Be patient!.

Node Commands
Some Handy Commands to query against your node. 
screen -d -m ~/QRL/start_qrl This will start QRL in a screen session.
To attach the screen enter screen -r
To exit the screen without quitting the program ctl + a then d this will detach the current screen session
tail -f ~/.qrl/qrl.log This will show the activity on your node if you run in --quiet | -q mode or in a screen session.
grep 'Solution Found' ~/.qrl/qrl.log Will print all of your found blocks. If this list is empty your node has not found anything yet.
grep 'Solution Found' ~/.qrl/qrl.log |wc -l Prints how many blocks you have found (count of won blocks)


Install From Source
If you grabbed the source files from GitHub the commands will differ a bit. Instead of the qrl command we will invoke

~/QRL/start_qrl.py Will start the node up and mine for us
You can see your options by running ./start_qrl.py --help This will give the following output.
usage: start_qrl.py [-h] [--quiet] [--datadir DATA_DIR] [--no-colors] [-l {DEBUG,INFO,WARNING,ERROR,CRITICAL}] [--randomizeSlaveXMSS]
optional arguments:
-h, --help | show this help message and exit
--quiet, -q | Avoid writing data to the console
--datadir DATA_DIR, -d DATA_DIR | Retrieve data from a different path
--no-colors | Disables color output
-l {DEBUG,INFO,WARNING,ERROR,CRITICAL}, --loglevel {DEBUG,INFO,WARNING,ERROR,CRITICAL} Set the logging level
--randomizeSlaveXMSS | Generates random slaves.json file (Warning: For Integration Test only)
~/QRL/qrl/cli.py gives us some of the other functions like generating a wallet and such.
Running the command ./qrl/cli.py --help will give you the available options
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
Config File
The default settings for the code are burried inside of the core directory. Instead of changing the settings there where an update would overwrite the changes create your own, add a file to your ~/.qrl folder titled config.yml

Download config.yml
You can grab a copy of this file directly from here with: 
wget https://qrl.co.in/public/config.yml 
Move it to your ~/.qrl folder 
mv config.yml ~/.qrl 
You can download a copy of this file here as well config.yml 

Edit the config.yml
If you want to you can of course just create the file.
nano ~/.qrl/config.yml 
Add the following to this file. All settings are default, however this file will override the default settings. Uncomment the lines you want to change. Beware that you can break things if you are not careful.

## Default QRL Configuration 
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



Create An Offline Wallet
In order to fully secure our QRL we should follow best practice and generate our private keys offline. It is not really enough to just turn the wifi off on your laptop and be good. There are too many shady programs out there looking for your keys that will persist through a reboot on your dusty PC.

Skip this if you want, just know that you are taking the risk with your coins. It is a hassle to set this all up, but in the long run it is totally worth it. Plus you can generate cold wallets for all of your other coins that you want to hold in cold wallets.

I will show how to use the Tails operating system to install on a Live USB drive and generate an offline wallet. We will also use the "anonymity" features that come packaged to go and grab the wallet files and check their validity.

Get Tails and Install onto a USB
Head over to https://tails.boum.org/install/index.en.html to get started. You will need a USB drive to burn the OS to. Everything will be wiped from the drive so make sure you backup. I have used a 16G USB drive for Tails, anything above 8G will do. A bigger drive gives you more space to save things to on the persistent volume that we will create.

Follow the guide over at tails to get setup depending on your current OS.

Install from windows
Install from macOS
Install from Linux
You want to setup an encrypted persistent volume on the USB to hold the wallet file generators and any other documents you may want to keep safe. I will still advise you to write the hexseed and mnemonic on a nice sheet of paper and place it somewhere safe from fire, water or other acts of nature. You can store a copy on the encrypted drive, but it is not as safe.

Once you have booted into Tails you can create a persistent volume. A persistent volume is an encrypted partition protected by a passphrase on the USB. Once the persistent volume is created, you can choose to activate it or not each time you start Tails. Once you have setup the USB with their guide you will boot into the secure OS and setup the persistent drive.

Boot Into Tails
You need to have access to the computers BIOS system. This can be accomplished by hitting one of the f1 - f12 keys at initial boot. Search for your computer model, laptop or motherboard for instructions on how to access your BIOS. No one is the same.

Once you have the bios pulled up look for the boot options and allow the PC to boot from a USB drive. You may need to toggle the security features. You can change back any settings that may have broken other OS's. Windows can be picky about letting another OS boot.

Boot into the USB and you should be greeted with a tails screen with 2 selections. Choose the default settings and boot.
At the next screen you will see a bunch of options. Leave everything as a default for now and continue. Welcome to Tails!

Persistent Data
Now start the persistent volume assistant at Applications ▸ Tails ▸ Configure persistent volume. You need to select at minimum:

Personal Data
I recommend selecting a few others as well
GnuPG
GNOME Keyring
Network Connections
Bitcoin Client
Printers
For our use I don't recommend loading email or chat clients or installing any other software than what you need. The great people over at tails are doing the best to keep your digital life safe, no need to make it harder.
Follow along and add the remaining drive space to the encrypted volume. You must remember the password you setup here, and make it tough. This can not be recovered. I squish the words from my favorite song together and add some random punctuation. You will have to restart for the persistent changes to take effect.

Get the Wallet Files
There are a few ways you can do this. If your ultra paranoid you can leave the persistent drive locked when you boot, connect to github through the TOR network and download to an external USB. Then reboot and unlock the persistent drive and copy the files over.

I am not that paranoid and I simply grab the offline generators from github or the official source and verify the hash matches what I downloaded. Then I simply copy this over to my unlocked persistent drive and generate the wallet offline.

I never boot with a decrypted drive and connect to the internet. One or the other. If you leave it locked there is little to no chance for someone to install nasty things there.

Links to QRL wallet files:

Github Wallet File
My-Ether-Wallet
Once the team has the official release out I will finish this how to.
Create the Wallet offline
Making sure the computer is not connected to the internet, open the file with your offline wallet generator in it. You will need to place them in the tor browser allowed folder in order for the browser to run the files.

Generate an address like you would normally and write the details down in a notebook. This will never be seen by another computer until you are ready to move your coins. Make sure you get everything right here, CasE mattErs!

We can look up the public address to check the balance and see if transfers are going into the wallet at QRL Block Explorer. Until mainnet releases and the token burn happens you can use the ETH block explorer to check your balance.

