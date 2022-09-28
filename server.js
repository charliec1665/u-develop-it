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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// DELETE a candidate
// Here DELETE statement has a ? that denotes a placeholder, making this a *prepared statement*
    // a prepared statement can execute the same SQL statements repeatedly using different values in place of the ?
    // the additional param argument following the prepared statement (here it is 1) provides values to use in place of the ?
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//     VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Fairbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});