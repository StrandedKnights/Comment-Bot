PumpFun Advanced Comment Bot

A fully automated, advanced comment bot for Pump.fun with integrated license validation, admin dashboard, and metrics tracking. Made for reselling or personal use

Features

Automated Commenting: Fetches trending tokens from Pump.fun and posts random comments.
License System: Supports free trials, paid licenses, and unlimited device licenses.
Admin Dashboard: Manage licenses and view usage statistics.
Metrics Collection: Tracks IP addresses, geo-location, operating system details, and timestamps.
Installation

Clone the repository:

bash

git clone https://github.com/your-repo/pumpfun-advanced-comment-bot.git
cd pumpfun-advanced-comment-bot



Install dependencies:

npm install
Start the license server:

node licenseServer.js

Configure files:

proxies.txt: Add proxies, one per line.
comments.txt: Add random comments, one per line.
.env: Add configurations like API URLs and proxy rotation.
Usage

Run the bot:


node pumpfunBot.js

Mode options:

Comment on Trending Tokens: Automatically fetches tokens and posts comments.
Thread Mode: Manually enter a thread ID to post comments.
Exit: Quit the bot.
Admin Dashboard

Open dashboard.html in your browser to manage licenses and monitor metrics.

If you want to purchase this script join @cryptosweepers on telegram
We can also help to start deploying this on a VPS 

Requirements

Node.js v16+
SQLite
NPM packages: axios, chalk, body-parser, express, geoip-lite, sqlite3.
