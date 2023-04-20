const client = require('./client');

const createCar = async ({ make, model, year, color, mileage }) => {
    try {
        const { rows: [cars]} = await client.query(
        `
        INSERT INTO cars(make, model, year, color, mileage)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (make, model, year, color, mileage) DO NOTHING
        RETURNING *;
        `,
        [make, model, year, color, mileage]
        )
    } catch (err) {
      console.log(err);
    }
}