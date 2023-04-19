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
        `)
    } catch (err) {
      console.log(err);
    }
}