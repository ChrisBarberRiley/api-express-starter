const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});