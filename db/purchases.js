const client = require('./client');

const createPurchase = async (id, firstName, lastName, cost, itemId) => {
    try {
        const { rows: [purchases] } = await client.query(
            `
            INSERT INTO purchases(id, "firstName", "lastName", cost, "itemId")
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            
            `,
            [id, firstName, lastName, cost, itemId]
        );
        return purchases;
    } catch (err) {
      console.log(err);
    }
}

module.exports = { createPurchase };