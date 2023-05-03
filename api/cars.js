const express = require("express");
const { getAllCars } = require("../db/cars");
const router = express.Router();

// Get All Cars Posts:

router.get("/", async (req, res, next) => {
  try {
    const cars = await getAllCars();
    res.send(cars);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
