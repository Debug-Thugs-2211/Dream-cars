require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const apiRouter = require("./api/index");
const client = require("./db/client");

// Setup your Middleware and API Router here
client.connect();
const path = require('path');
app.use("/dist", express.static(path.join(__dirname, "dist")));
 app.get("/", (req,res) => {
     res.sendFile(path.join(__dirname, "index.html"))
 });
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);

module.exports = app;
