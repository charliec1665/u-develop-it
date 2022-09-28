const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware NEEDED for POST and PUT requests
// extended: false only parses incoming Request objects if they are strings or arrays
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});