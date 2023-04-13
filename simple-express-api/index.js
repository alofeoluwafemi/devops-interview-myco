const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("myco DevOps Interview!");
});

app.get("/candidate/1", (req, res) => {
    res.json({
        name: "Abdul Hafeez's",
    });
});

app.listen(8090, () => {
    console.log("Server running on port 8090");
});
