const { createUser } = require("./users");
const { createCar } = require("./cars");
const { createPurchase } = require("./purchases");
const client = require("./client");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
        DROP TABLE IF EXISTS purchases;
        DROP TABLE IF EXISTS cars;
        DROP TABLE IF EXISTS users;

        `);
    console.log("finished Dropping tables...");
  } catch (err) {
    console.log("Error while dropping the tables");
  }
};

const createTables = async () => {
  console.log("Starting to create tables...");
  try {
    await client.query(
      `
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                "firstName" VARCHAR(255) NOT NULL,
                "lastName" VARCHAR(255) NOT NULL
               
            );

            CREATE TABLE cars (
                id SERIAL PRIMARY KEY,
                make VARCHAR(30) NOT NULL,
                model VARCHAR(55) NOT NULL,
                price INTEGER NOT NULL,
                year INTEGER NOT NULL,
                color VARCHAR(20) NOT NULL,
                mileage INTEGER NOT NULL
            );

            CREATE TABLE purchases (
                id SERIAL PRIMARY KEY,
                "userId" INTEGER REFERENCES users(id),
                cost INTEGER,
                "itemId" INTEGER REFERENCES cars(id)
            );
        `
    );

    console.log("Finished creating tables...");
  } catch (err) {
    console.log(err);
  }
};

const createInitialUsers = async () => {
  try {
    console.log("Starting to create users...");
    const usersToCreate = [
      {
        username: "albert",
        password: "bertie99",
        firstName: "Albert",
        lastName: "Smith",
      },
      {
        username: "sandra",
        password: "sandra123",
        firstName: "Sandra",
        lastName: "Scott",
      },
      {
        username: "glamgal",
        password: "glamgal123",
        firstName: "Glamorous",
        lastName: "Chic",
      },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log("Users created:");
    console.log(users);
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
};

const createInitialPosts = async () => {
  console.log("Starting to create posts...");
  try {
    const postsToCreate = [
      {
        make: "Honda",
        model: "Civic",
        year: 2020,
        price: 1000,
        color: "blue",
        mileage: 25000,
      },
      {
        make: "Toyota",
        model: "4Runner",
        price: 1000,
        year: 2015,
        color: "green",
        mileage: 40000,
      },
      {
        make: "Ford",
        model: "F-150",
        price: 1000,
        year: 2022,
        color: "black",
        mileage: 15000,
      },
    ];
    const cars = await Promise.all(postsToCreate.map(createCar));

    console.log("Posts created:");
    console.log(cars);

    console.log("Finished creating posts!");
  } catch (err) {
    console.log(err);
  }
};

const createInitialPurchases = async () => {
  console.log("Starting to create purchases...");
  try {
    const purchasesMade = [
      {
        userId: 1,
        cost: 20000,
        itemId: 2,
      },
      {
        userId: 2,
        cost: 15000,
        itemId: 3,
      },
      {
        userId: 3,
        cost: 30000,
        itemId: 1,
      },
    ];
    const purchases = await Promise.all(purchasesMade.map(createPurchase));
    console.log("Purchases created...");
    console.log(purchases);
    console.log("Finished creating purchases!");
  } catch (err) {
    console.log(err);
  }
};

const rebuildDB = async () => {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialPosts();
    await createInitialPurchases();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
};

module.exports = {
  rebuildDB,
  dropTables,
  createTables,
};
