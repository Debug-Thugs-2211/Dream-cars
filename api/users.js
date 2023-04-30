const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { getUserByUsername, getUser } = require("../db/users");
const { JWT_SECRET } = process.env;
const { PasswordTooShortError, UserTakenError } = require("../errors");

usersRouter.post("/register", async (req, res, next) => {
  const { username, id, password, firstName, lastName } = req.body;
  try {
    const _user = await getUserByUsername(username);
    if (_user) {
      res.send({
        name: "ErrorUserExists",
        message: UserTakenError(username),
        error: "error",
      });
    }

    if (password.length < 8) {
      res.send({
        name: "PasswordLengthError",
        message: PasswordTooShortError(),
        error: "error",
      });
    }

    const user = await createUser({
      username,
      password,
      firstName,
      lastName,
    });

    const token = jwt.sign(
      {
        id: id,
        username,
      },
      JWT_SECRET,
      { expiresIn: "1w" }
    );

    res.send({
      message: "Thank you for registering",
      token,
      user,
    });
  } catch ({ name, message, error }) {
    next({ name, message, error });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUser({ username, password });

    if (!user) {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    } else {
      // create token & return to user
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET
      );
      res.send({ message: "you're logged in!", user, token });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = usersRouter;
