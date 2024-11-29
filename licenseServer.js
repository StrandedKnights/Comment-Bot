
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const crypto = require("crypto");
const os = require("os");
const geoip = require("geoip-lite");

const app = express();
const db = new sqlite3.Database("./licenses.db");

app.use(bodyParser.json());

// Initialize Database
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS licenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        license_key TEXT UNIQUE,
        license_type TEXT,
        expiry_date TEXT,
        usage_limit INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS metrics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        license_key TEXT,
        ip_address TEXT,
        geo_location TEXT,
        os_info TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
});

// Generate License
app.post("/create-license", (req, res) => {
    const { licenseType, expiryDate, usageLimit } = req.body;
    const licenseKey = `CS${crypto.randomBytes(12).toString("hex")}`;
    db.run(
        `INSERT INTO licenses (license_key, license_type, expiry_date, usage_limit) VALUES (?, ?, ?, ?)`,
        [licenseKey, licenseType, expiryDate, usageLimit],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ licenseKey });
        }
    );
});

// Validate License
app.post("/validate-license", (req, res) => {
    const { licenseKey, ipAddress } = req.body;
    const geo = geoip.lookup(ipAddress);
    const osInfo = `${os.type()} ${os.release()} ${os.arch()}`;

    db.get(
        `SELECT * FROM licenses WHERE license_key = ?`,
        [licenseKey],
        (err, row) => {
            if (err) return res.status(500).json({ error: err.message });

            if (!row) return res.status(400).json({ valid: false, message: "Invalid license key" });

            if (new Date(row.expiry_date) < new Date())
                return res.status(400).json({ valid: false, message: "License expired" });

            db.run(
                `INSERT INTO metrics (license_key, ip_address, geo_location, os_info) VALUES (?, ?, ?, ?)`,
                [licenseKey, ipAddress, JSON.stringify(geo), osInfo]
            );

            res.json({ valid: true, message: "License valid", licenseType: row.license_type });
        }
    );
});

// Get Metrics
app.get("/metrics", (req, res) => {
    db.all(`SELECT * FROM metrics`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`License server running on port ${PORT}`));
