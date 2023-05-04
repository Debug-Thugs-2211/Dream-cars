import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import "./Register.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { loginUser } from "../api";

function Login({ setToken, navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    window.localStorage.setItem("token", results.token);

    if (results.token) {
      setToken(results.token);
      navigate("/posts");
    } else {
      swal(
        "Invalid login credentials!",
        "Please try again or create an account."
      );
    }
  };

  return (
    <div className="div-form">
      <form
        className="register-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
          setUsername("");
          setPassword("");
        }}
      >
        <h3>Login Please</h3>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          InputProps={{
            startAdornment: <AccountCircle />,
          }}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            startAdornment: <Lock />,
          }}
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
        <div className="signup">
          <div>Don't have an account? </div>
          <Link to="/register" className="signUpLink">
            SIGN UP HERE
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
