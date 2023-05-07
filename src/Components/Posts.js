import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePost from "./Create-post";
import "./Posts.css";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [cars, setCars] = useState([]);
  const [carInfo, setCarInfo] = useState(true);
  const [singleCard, setSingleCard] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // const handleCard = (event) => {
  //   console.log(event.type);
  //   if (event.type === "mousedown") {

  //     return;
  //   }
  // };
  const fetchCars = async () => {
    const res = await fetch("http://localhost:4000/api/cars");
    const data = await res.json();
    setCars(data);
  };
  // console.log("test from post:", cars);

  const postMatches = (cars, string) => {
    const { make, model } = cars;
    if (
      make.toLowerCase().includes(string.toLowerCase()) ||
      model.toLowerCase().includes(string.toLowerCase())
    ) {
      return cars;
    }
  };

  const postsToDisplay = cars.filter((car) => postMatches(car, searchTerm));

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      {carInfo && cars ? (
        <div className="container mt-4">
          <div className="post-header">
            <Link
              to="/posts/createPost"
              element={<CreatePost cars={cars} setCars={setCars} />}
            >
              <button className="btn btn-primary mr-2 create-post">
                Create Post
              </button>
            </Link>

            <div className="search-bar">
              <label>🧐 </label>
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            {postsToDisplay.map((car) => (
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
