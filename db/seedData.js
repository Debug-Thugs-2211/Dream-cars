const { createUser } = require('./users');
const { createCar } = require('./cars');
const client = require('./client');

const dropTables = async () => {
    console.log("Dropping tables...");
    try {
        await client.query(`
        DROP TABLE IF EXISTS purchases;
        DROP TABLE IF EXISTS cars;
        DROP TABLE IF EXISTS users;

        `)

    } catch (err) {
      console.log(err);
    }
}

const createTables = async () => {
    console.log("Starting to build tables...");
    try {
        await client.query(
            `
            CREATE TABLE users(
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                "firstName" VARCHAR(255) NOT NULL,
                "lastName" VARCHAR(255) NOT NULL
            );

            CREATE TABLE cars(
                id SERIAL PRIMARY KEY,
                make VARCHAR(30) NOT NULL,
                model VARCHAR(55) NOT NULL,
                year INTEGER NOT NULL,
                color VARCHAR(20) NOT NULL,
                mileage INTEGER NOT NULL
            );

            CREATE TABLE purchases (
                id SERIAL PRIMARY KEY,
                "userID" INTEGER REFERENCES users(id),
                cost INTEGER,
                item VARCHAR(55) REFERENCES cars(id),
            );
        `)
    } catch (err) {
      console.log(err);
    }
}

const createInitialUsers = async () => {
    console.log("Starting to create users...");
    try {
        const usersToCreate = [
        { username: "albert", password: "bertie99", firstName: "Albert", lastName: "Smith" },
        { username: "sandra", password: "sandra123", firstName: "Sandra", lastName: "Scott" },
        { username: "glamgal", password: "glamgal123", firstName: "Glamorous", lastName: "Chic" },
        ];
        const users = await Promise.all(usersToCreate.map(createUser));

        console.log("Users created:");
        console.log(users);
        console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

const createInitialPosts = async () => {
    try {
        const postsToCreate = [
            {
                make: "Honda",
                model: "Civic",
                year: 2020,
                color: "blue",
                mileage: 25000
            },
            {
                make: "Toyota",
                model: "4Runner",
                year: 2015,
                color: "green",
                mileage: 40000
            },
            {
                make: "Ford",
                model: "F-150",
                year: "2022",
                color: "black",
                mileage: 15000
            }
        ]
        const cars = await Promise.all(
            postsToCreate.map(createCar)
          );
      
          console.log("Posts created:");
          console.log(cars);
      
          console.log("Finished creating posts!");
    } catch (err) {
      console.log(err);
    }
    
}

const rebuildDB = async () => {
    try {
        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialPosts();
    } catch (error) {
        console.log("Error during rebuildDB");
        throw error;
    }
}

module.exports = { 
    rebuildDB, dropTables, createTables 
}