const mysql = require('mysql2');

// Connect to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Faemoon89',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;