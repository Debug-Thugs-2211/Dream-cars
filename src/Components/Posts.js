import React, { useState, useEffect } from "react";
import "./Posts.css";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [cars, setCars] = useState([]);
  const [carInfo, setCarInfo] = useState(true);
  const [singleCard, setSingleCard] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch("http://localhost:4000/api/cars");
      const data = await res.json();
      setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <>
      {carInfo ? (
        <div className="container mt-4">
          <div className="row">
            {cars.map((car) => (
              <div key={car.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={car.imageUrl}
                    alt={car.make}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {car.make} - {car.model}
                    </h5>
                    <p className="card-text">
                      Year: {car.year} <br />
                      price: ${car.price}
                    </p>
                    {/* <p className="card-text">Price: ${car.price}</p> */}
                    <button
                      className="btn btn-primary mr-2"
                      data-id={car.id}
                      onClick={() => {
                        setCarInfo(false);
                        setSingleCard(car);
                      }}
                    >
                      See Detail
                    </button>
                    <button className="btn add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <SinglePost singleCard={singleCard} setCarInfo={setCarInfo} />
      )}
    </>
  );
};

export default Posts;
