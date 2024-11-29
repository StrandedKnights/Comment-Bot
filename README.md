
# PumpFun Advanced Comment Bot

A fully automated, advanced comment bot for Pump.fun with integrated license validation, admin dashboard, and metrics tracking.

JOIN @CRYPTOSWEEPERS ON TG FOR PURCHASING AND SUPPORT, WE ALSO OFFER DEPLOYMENTS FOR SCRIPTS @sweeperceo ON TG 

## Features

### Automated Commenting
- Dynamically fetches trending tokens from Pump.fun.
- Posts random comments to threads of selected tokens.

### License System
- Validate user licenses with a server-side system.
- Supports free trials, paid licenses, and unlimited device licenses.

### Admin Dashboard
- Manage licenses and track bot usage metrics.
- Monitor IP addresses, geo-location, and OS info of users.

### Metrics Collection
- Tracks script usage details including:
  - IP addresses.
  - Geo-location.
  - Operating system details.
  - Timestamp of actions.

## Installation

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

## Database Setup for Licensing

The licensing system uses a database (`licenses.db`) to store license and metrics information.

### Tables Overview

1. **`licenses` Table**:
   2. Stores details of each license, such as license key, type, expiry date, and usage limits.

2. **`metrics` Table**:
   2. Tracks bot usage, including IP address, geo-location, and system information.

### SQL Table Definitions

#### Create `licenses` Table
```sql
CREATE TABLE IF NOT EXISTS licenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    license_key TEXT UNIQUE,
    license_type TEXT,
    expiry_date TEXT,
    usage_limit INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Create `metrics` Table
```sql
CREATE TABLE IF NOT EXISTS metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    license_key TEXT,
    ip_address TEXT,
    geo_location TEXT,
    os_info TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### How the Database Works

1. **`licenses` Table**:
   2. Each license has:
	 - A **unique license key** (e.g., `CS12345ABCDEF`).
	 - A **license type** (`free_trial`, `paid`, or `unlimited`).
	 - An **expiry date** for time-bound licenses.
	 - A **usage limit**, which can restrict the number of devices or times the bot is used.

2. **`metrics` Table**:
   2. Tracks:
	 - The **license key** used during bot execution.
	 - The **IP address** and **geo-location** (determined using the `geoip-lite` package).
	 - The **operating system** information.
	 - The **timestamp** of the action.

## Usage

### Run the Bot
```bash
node pumpfunBot.js
```

### Modes
1. **Comment on Trending Tokens**: Automatically fetches trending tokens and posts comments.
2. **Thread Mode**: Specify a thread ID manually to post comments.
3. **Exit**: Quit the bot.

## Admin Dashboard

### Features
- **License Management**: Create and manage licenses.
- **Usage Metrics**: View bot usage statistics in real-time.

### Access the Dashboard
Open the `dashboard.html` file in your browser to manage licenses and monitor metrics.

## Requirements

- **Node.js** v16+
- **SQLite** (for license server)
- **npm packages**:
  - `axios`
  - `chalk`
  - `body-parser`
  - `express`
  - `geoip-lite`
  - `sqlite3`

## Example Workflow

1. Start the license server:
```bash
node licenseServer.js
```

2. Create a license using the dashboard.

3. Run the bot:
```bash
node pumpfunBot.js
```

4. Monitor usage metrics in the admin dashboard.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Disclaimer

This project is for educational purposes only. Ensure that you comply with all applicable laws and the Pump.fun platform's terms of service.
