const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware NEEDED for POST and PUT requests
// extended: false only parses incoming Request objects if they are strings or arrays
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});