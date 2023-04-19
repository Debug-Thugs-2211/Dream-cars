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
                year INT NOT NULL,
                color VARCHAR(20) NOT NULL,
                mileage INT NOT NULL
            );
        `)
    } catch (err) {
      console.log(err);
    }
}