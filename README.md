 PumpFun Advanced Comment Bot

A fully automated, advanced comment bot for Pump.fun with integrated license validation, admin dashboard, and metrics tracking.

**JOIN @CRYPTOSWEEPERS ON TG FOR PURCHASING AND SUPPORT. WE ALSO OFFER SCRIPT DEPLOYMENT SERVICES @SWEEPERCEO ON TG.**

---

## **Features (Free Version)**

### Automated Commenting
- Dynamically fetches trending tokens from Pump.fun.
- Posts random comments to threads of selected tokens.

### License System
- Validate user licenses with a server-side system.
- Supports free trials, paid licenses, and unlimited device licenses.

### Admin Dashboard
- Manage licenses and track bot usage metrics.
- Monitor IP addresses, geo-location, and OS information of users.

### Metrics Collection
- Tracks script usage details, including:
  - IP addresses.
  - Geo-location.
  - Operating system details.
  - Timestamp of actions.

---

## **Full Version Features**

The **paid full version** includes:
1. **Server-Sided HMAC License Verification**
   2. All licenses are validated securely on a server using HMAC verification.
   3. Prevents unauthorized usage or license tampering.

2. **Rate Limiting**
   2. Optimize API usage and prevent detection with built-in rate-limiting features.

3. **Enhanced Encryption**
   2. Communication with Pump.fun APIs is encrypted to ensure data security.

4. **Free API Access**
   2. Includes free API tiers for fetching trending tokens and other platform interactions.

5. **Advanced Metrics and Logging**
   2. Tracks every session, including:
	 - License key usage.
	 - IP and geo-location details.
	 - Operating system data.
	 - API usage metrics.

6. **Lifetime Upgrades**
   2. Full version users receive lifetime updates and access to all new features.

7. **24/7 Support**
   2. Dedicated customer support team available around the clock.

---

## **Reseller Licensing**

The **PumpFun Advanced Comment Bot** offers a **reseller license program** for those who wish to resell the bot.

### **Reseller License Details**
- **Initial Price**: $500 - $1,000 (one-time fee).
- **Monthly Costs**:
  - API costs: Includes usage fees for the Pump.fun API and other integrated services.
  - Server costs: Covers hosting the license verification server.
- **Benefits**:
  - Full permission to resell the bot to your customers.
  - Access to the license management system to generate and manage licenses.
  - 24/7 support for resellers and their clients.
  - Lifetime upgrades for both the bot and the reseller tools.

To inquire about the reseller license, contact us via **@CRYPTOSWEEPERS** or **@SWEEPERCEO** on Telegram.

---

## **Installation**

### Clone the Repository
```bash
git clone https://github.com/your-repo/pumpfun-advanced-comment-bot.git
cd pumpfun-advanced-comment-bot
```

### Install Dependencies
```bash
npm install
```

### Set Up the License Server
Start the license server to handle user licenses and metrics.
```bash
node licenseServer.js
```

### Configure Files

#### `proxies.txt`
Add your proxy list (one per line):
```
http://username:password@proxy1.example.com:8080
socks5://username:password@proxy2.example.com:1080
```

#### `comments.txt`
Add a list of comments for the bot to use (one per line):
```
Amazing project!
Great innovation!
Excited to see this grow!
```

#### `.env`
Create a `.env` file for configuration:
```
PUMPFUN_API_URL=https://pumpfun.com/api
LICENSE_SERVER_URL=http://localhost:3000
PROXY_ROTATION_ENABLED=true
```

---

## **Database Setup for Licensing**

The licensing system uses a SQLite database (`licenses.db`) to store license and metrics information.

### **Tables Overview**

1. **`licenses` Table**:
   2. Stores details of each license, such as:
	 - Unique license keys (e.g., `CS12345ABCDEF`).
	 - License type (`free_trial`, `paid`, or `unlimited`).
	 - Expiry dates and usage limits.

2. **`metrics` Table**:
   2. Tracks:
	 - License key usage.
	 - IP addresses and geo-location data.
	 - Operating system information.
	 - Timestamped bot activities.

---

## **Usage**

### Run the Bot
```bash
node pumpfunBot.js
```

### Modes
1. **Comment on Trending Tokens**: Automatically fetches trending tokens and posts comments.
2. **Thread Mode**: Specify a thread ID manually to post comments.
3. **Exit**: Quit the bot.

---

## **Admin Dashboard**

### Features
- **License Management**: Create and manage licenses via an intuitive interface.
- **Usage Metrics**: Real-time visualization of bot usage and performance.

### Access the Dashboard
Open the `dashboard.html` file in your browser to manage licenses and monitor metrics.

---

## **Requirements**

- **Node.js** v16+
- **SQLite** (for license server)
- **npm packages**:
  - `axios`
  - `chalk`
  - `body-parser`
  - `express`
  - `geoip-lite`
  - `sqlite3`

---

## **Example Workflow**

1. Start the license server:
```bash
node licenseServer.js
```

2. Create a license using the admin dashboard.

3. Run the bot:
```bash
node pumpfunBot.js
```

4. Monitor usage metrics in the admin dashboard.

---

## **Disclaimer**

This bot is for educational purposes only. Ensure compliance with all applicable laws and the Pump.fun platform's terms of service.

