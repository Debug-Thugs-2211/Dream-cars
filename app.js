require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const apiRouter = require("./api/index");
const client = require("./db/client");
const path = require("path");

// Setup your Middleware and API Router here
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
client.connect();
module.exports = app;
