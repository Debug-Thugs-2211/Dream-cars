const client = require("./client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const createUser = async ({ username, password, firstName, lastName }) => {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
            INSERT INTO users(username, password, "firstName", "lastName")
            VALUES ($1, $2, $3, $4)
            ON CONFLICT(username) DO NOTHING
            RETURNING id, username, "firstName", "lastName"
            `,
      [username, hashedPassword, firstName, lastName]
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (error) {
    console.error(error);
  }
}

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
        SELECT id, username
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

module.exports = { createUser, getUserByUsername, getUserById, getUser };
