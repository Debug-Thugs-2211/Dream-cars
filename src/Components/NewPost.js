import React, { useState } from "react";


//so far im getting 'token' from localStorage if another methood is appropriate from backend setup of token ill use that

//get BASE_URL from backend once its set up


const NewPost = () => {
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [color, setColor] = useState("")
  const [mileage, setMileage] = useState("")
  const [price, setPrice] = useState("")


  const makePost = async (event) => {
    event.preventDefault()
    const TOKEN = localStorage.getItem('token')
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          post: {
            make: make,
            model: model,
            year: year,
            color: color,
            mileage: mileage,
            price: price
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (event) => {
    if (event.target.placeholder === "make") {
      setMake(event.target.value)
    }
    if (event.target.placeholder === "model") {
      setModel(event.target.value)
    }
    if (event.target.placeholder === "year") {
      setYear(event.target.value)
    }
    if (event.target.placeholder === "color") {
      setColor(event.target.value)
    }
    if (event.target.placeholder === "mileage") {
      setMileage(event.target.value)
    }
    if (event.target.placeholder === "price") {
      setPrice(event.target.value)
    }
  }

  return (
    <>
      <h1>Create a listing</h1>
      <form>
        <label>
          <input type='text' value={make} placeholder='make' onChange={handleChange}></input>
        </label>
        <label><input type='text' value={model} placeholder='model' onChange={handleChange}></input></label>
        <label>
          <input type='text' value={year} placeholder='year' onChange={handleChange}></input>
        </label>
        <label>
          <input type='text' value={color} placeholder='color' onChange={handleChange}></input>
        </label>
        <label>
          <input type='text' value={mileage} placeholder='mileage' onChange={handleChange}></input>
        </label>
        <label>
          <input type='text' value={price} placeholder='price' onChange={handleChange}></input>
        </label>
        <button id="submit" onClick={makePost}>Submit</button>
      </form>
    </>
  );
};

export default NewPost;
