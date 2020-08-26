const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const logger = require("./middleware/logger");
const api = require("./api");

require("dotenv").config();

if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
    app.use(logger);
}
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use("/api/v1", api);

module.exports = app;
