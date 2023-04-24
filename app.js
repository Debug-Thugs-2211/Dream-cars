require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const apiRouter = require("./api/index");
const client = require("./db/client");

// Setup your Middleware and API Router here
client.connect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

const carsRouter = require('./cars');
apiRouter.use('/cars', carsRouter);

const purchasesRouter = require('./purchases');
apiRouter.use('/purchases', purchasesRouter);

module.exports = app, usersRouter, carsRouter, purchasesRouter;
