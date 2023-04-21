const client = require('./client');

const createCar = async ({ make, model, year, color, mileage }) => {
    try {
        const { rows: [cars ]} = await client.query(
        `
        INSERT INTO cars(make, model, year, color, mileage)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `,
        [make, model, year, color, mileage]
        )
        return cars;
    } catch (err) {
      console.log(err);
    }
}

const getAllCars = async () => {
  try {
    const {rows: [cars]} = await client.query(
      `
      SELECT * 
      FROM cars;
      `
    );
    return cars;
  } catch (err) {
    console.log(err);
  }
}

const getCarByMake = async (make) => {
  try {
    const { rows: [cars] } = await client.query(
    `
    SELECT *
    FROM cars
    WHERE make = $1;
    `,
      [make]
    );
    return cars;
  } catch (err) {
    console.log(err);
  }
}

const getCarById = async (id) => {
  try {
    const { rows: [cars] } = await client.query(
      `
      SELECT *
      FROM cars
      WHERE id =$1;
      `,
      [id]
    );
    return cars;
  } catch (err) {
    console.log(err);
  }
}




module.exports = { createCar, getAllCars, getCarByMake, getCarById }