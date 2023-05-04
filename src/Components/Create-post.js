import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./CreatePost.css";
import swal from "sweetalert";
import { createPost } from "../api";

const CreatePost = ({ cars, setCars, token }) => {
  //   console.log("test3: ", cars);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [condition, setCondition] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    const results = await createPost(
      token,
      make,
      model,
      price,
      year,
      color,
      mileage,
      imageUrl,
      condition
    );
    // console.log("test1:", cars);
    console.log("test2: ", results);
    if (token) {
      //   setCars([...cars, results]);
      navigate("/posts");
    } else {
      swal("Please register or login to create a post!");
    }
  };

  return (
    <div className="create-post-form-container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          handleCreate();
        }}
      >
        <div className="create-post-form">
          <h1>Create Post</h1>
          <TextField
            style={{ width: "30rem" }}
            required
            label="Make"
            className="create-post-input"
            onChange={(event) => setMake(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            required
            label="Model"
            className="create-post-input"
            onChange={(event) => setModel(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            required
            type="number"
            label="Price"
            className="create-post-input"
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            type="number"
            required
            label="Year"
            className="create-post-input"
            onChange={(event) => setYear(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            required
            label="Color"
            className="create-post-input"
            onChange={(event) => setColor(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            type="number"
            required
            label="Mileage"
            className="create-post-input"
            onChange={(event) => setMileage(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            required
            label="ImageUrl"
            className="create-post-input"
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <TextField
            style={{ width: "30rem" }}
            required
            label="Condition"
            className="create-post-input"
            onChange={(event) => setCondition(event.target.value)}
          />

          <Button
            type="submit"
            variant="outlined"
            style={{ width: "30rem" }}
            className="create-post-input"
          >
            Create
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default CreatePost;

// import React from "react";

// const CreatePost = () => {
//   return <h1>Create Post</h1>;
// };

// export default CreatePost;
