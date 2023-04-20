const client = require('./client');

const createUser = async ({ username, password, firstName, lastName }) => {
    try {
        const {
            rows: [user]
        } = await client.query(
            `
            INSERT INTO users(username, password, "firstName", "lastName")
            VALUES ($1, $2, $3, $4)
            ON CONFLICT ("firstName", "lastName") DO NOTHING
            RETURNING username, firstName, lastName
            `,
            [username, password, firstName, lastName]
        );
        return user;
        
    } catch (err) {
      console.log(err);
    }
}