const express = require("express");
const { getAllCars, createCar } = require("../db/cars");
const { requireUser } = require("./Utils");
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

router.post("/createPost", requireUser, async (req, res, next) => {
  const { make, model, price, year, color, mileage, imageUrl, condition } =
    req.body;
  try {
    const newPost = await createCar({
      make,
      model,
      price,
      year,
      color,
      mileage,
      imageUrl,
      condition,
    });

    res.send(newPost);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
