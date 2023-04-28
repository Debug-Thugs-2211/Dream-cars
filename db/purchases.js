const client = require('./client');

const createPurchase = async ({ userId, cost, itemId }) => {
    try {
        const { rows: [purchases] } = await client.query(
            `
            INSERT INTO purchases("userId", cost, "itemId")
            VALUES ($1, $2, $3)
            RETURNING *;
            
            `,
            [ userId, cost, itemId]
        );
        return purchases;
    } catch (err) {
      console.log(err);
    }
}



module.exports = { createPurchase };