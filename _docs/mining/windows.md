---
title: Windows Full Node
categories: mining
tags: mining
---


Proof Of Work Setup Instructions Windows
Make sure the computer you are using has enough power to handle the load of the mining operation. You will also need enough storage to keep the chain as it grows in the future. You can attach storage in the cloud to your VPS and that's exactly what I did. I would recommend a couple hundred gig HDD/SSD to sync the chain on long term to be safe.

I do not expect to make any profit running this server mining coins and I am simply using it for testing. You really want to run this on a multi-processor setup with a good amount of ram. Add a few GPU's and you will be making a decent return.

Install
Get your computer ready. The best situation is a fresh, brand new install of Ubuntu 16.04. If you have dependency issues with other software you will need to work through it then come back. You can always boot into a Linux live persistent USB or similar and run the mining node on the computer without modifying the PC (other than the CPU cycles used)

Update software

```
sudo apt update && sudo apt upgrade -y
```

Add Dependencies
Install the required packages for QRL.
sudo apt-get -y install swig3.0 python3-dev python3-pip build-essential cmake pkg-config libssl-dev libffi-dev libhwloc-dev libboost-dev


Install QRL
Python Packages
Install the QRL Package.
pip3 install -U qrl

Trouble with pip3
If your having issues runnning the above command there are a few things to do that will help diagnose the issue.
the pip3 function comes with a logging capibility to see where the issues are happening.
Run the command again with 
pip3 install -U qrl --log ~/pip3-Qrl.log 
This will print the output of the install to your home directory with the file name pip3-qrl.log. Read it!


Git Sources
If you want to run from the repo you can clone it to the local file system with:
cd ~/
git clone https://github.com/theQRL/QRL.git

This allows us to run from a local directory and gives some freedom to change some of the defaults.
Also later if we want to update to get the latest changes from the developers it's a simple git pull from inside the QRL directory
