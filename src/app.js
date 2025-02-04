const express = require("express"); // Import express

const app = express(); // Create an express app

// Define a route
app.get("/", (req, res) => {
    res.send("My Metaverse");
});

module.exports = app; // Export the express app
