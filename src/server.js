const express = require("express");
const app = express();

const api = require("./api");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use("/api/v1", api);
