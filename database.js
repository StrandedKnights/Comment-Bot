
const sqlite3 = require("sqlite3").verbose();

// Initialize Database
const db = new sqlite3.Database("./licenses.db");

db.serialize(() => {
    // Create 'licenses' table
    db.run(`CREATE TABLE IF NOT EXISTS licenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        license_key TEXT UNIQUE,
        license_type TEXT,
        expiry_date TEXT,
        usage_limit INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create 'metrics' table
    db.run(`CREATE TABLE IF NOT EXISTS metrics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        license_key TEXT,
        ip_address TEXT,
        geo_location TEXT,
        os_info TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    console.log("Database initialized successfully!");
});

db.close();
