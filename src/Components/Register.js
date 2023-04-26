import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { AccountCircle, Lock, Person } from "@material-ui/icons";
import "./Register.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { registerUser } from "../api";

function Register({ setToken, navigate }) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    const results = await registerUser(username, password, firstName, lastName);
    console.log(results);
    if (results.data.token) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      swal("Congratulation!! account has been created");
      navigate("/posts");
    } else {
      swal("User already exists!", "Please login instead.");
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
          setFirstName("");
          setLastName("");
          setPassword("");
          setConfirmPassword("");
        }}
      >
        <h3>Sign Up Please!</h3>
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
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="given-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          InputProps={{
            startAdornment: <Person />,
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          InputProps={{
            startAdornment: <Person />,
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
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          InputProps={{
            startAdornment: <Lock />,
          }}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
        <div className="signup">
          <div>Already have an account? </div>
          <Link to="/login" className="signUpLink">
            Please Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
