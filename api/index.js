const express = require("express");
const router = express.Router();
const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");

router.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("authorization");
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const user = jwt.verify(token, JWT_SECRET);

      if (user.id) {
        req.user = await getUserById(user.id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

router.get("/health", async (req, res, next) => {
  try {
    res.send("API Healthy");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
