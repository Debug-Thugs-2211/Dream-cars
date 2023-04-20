const express = require("express");
const router = express.Router();

router.get("/health", async (req, res, next) => {
  try {
    res.send("API Healthy");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
