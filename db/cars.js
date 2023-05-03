const client = require("./client");

const createCar = async ({
  make,
  model,
  price,
  year,
  color,
  mileage,
  imageUrl,
  condition,
}) => {
  try {
    const {
      rows: [cars],
    } = await client.query(
      `
        INSERT INTO cars(make, model, price, year, color, mileage, "imageUrl", condition)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
        `,
      [make, model, price, year, color, mileage, imageUrl, condition]
    );
    return cars;
  } catch (err) {
    console.log(err);
  }
};

const getAllCars = async () => {
  try {
    const { rows } = await client.query(
      `
      SELECT * 
      FROM cars;
      `
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const getCarByMake = async (make) => {
  try {
    const {
      rows: [cars],
    } = await client.query(
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
};

const getCarById = async (id) => {
  try {
    const {
      rows: [cars],
    } = await client.query(
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
};

const updateCar = async (id, ...fields) => {
  const setString = Object.keys(fields.updateFields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(",");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [car],
    } = await client.query(
      `
      UPDATE cars
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
      `,
      Object.values(fields.updateFields)
    );
    return car;
  } catch (err) {
    console.log(err);
  }
};

const deleteCar = async (id) => {
  try {
    const { rows } = await client.query(
      `
      DELETE
      FROM cars
      WHERE id=${id};
      `
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarByMake,
  getCarById,
  updateCar,
  deleteCar,
};
