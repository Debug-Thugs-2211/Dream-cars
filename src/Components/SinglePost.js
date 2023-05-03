import React, { useState } from "react";
import "./Posts.css";

const SinglePost = ({ singleCard, setCarInfo }) => {
  return (
    <>
      <div className="singleCard">
        <img
          src={singleCard.imageUrl}
          alt={singleCard.make}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {singleCard.make} - {singleCard.model}
          </h5>
          <p className="card-text">
            Year: {singleCard.year} <br />
            price: ${singleCard.price} <br />
            Color: {singleCard.color} <br />
            Mileage: {singleCard.mileage} <br />
            Condition: {singleCard.condition}
          </p>
          <button
            className="btn btn-primary mr-2"
            onClick={() => {
              setCarInfo(true);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
