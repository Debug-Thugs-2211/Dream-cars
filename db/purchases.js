const client = require('./client');

const createPurchase = async (id, userId, cost, itemId) => {
    try {
        const { rows: [purchases] } = await client.query(
            `
            INSERT INTO purchases(id, "userId", cost, "itemId")
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            
            `,
            [id, userId, cost, itemId]
        );
        return purchases;
    } catch (err) {
      console.log(err);
    }
}



module.exports = { createPurchase };