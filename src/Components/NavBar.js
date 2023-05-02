import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ logout, token }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="../asset/Dream-Cars-2.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/checkout">Cart</Link>
        {token ? (
          <Link to="/" onClick={() => logout()}>
            Log Out
          </Link>
        ) : (
          <>
            <Link to="/Login">Log in</Link>
            <Link to="/Register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
