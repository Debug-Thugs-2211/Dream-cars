const client = require("./client");

const createUser = async ({ username, password, firstName, lastName }) => {
  console.log("DB USERS: ");
  try {
    const {
      rows: [user],
    } = await client.query(
      `
            INSERT INTO users(username, password, "firstName", "lastName")
            VALUES ($1, $2, $3, $4)
            RETURNING username, "firstName", "lastName"
            `,
      [username, password, firstName, lastName]
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username=$1
      `,
      [username]
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (userId) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE id=$1
      `,
      [userId]
    );
    delete user.password;
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, getUserByUsername, getUserById };
