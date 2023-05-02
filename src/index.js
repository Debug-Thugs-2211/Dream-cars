import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/checkout";
import Home from "./components/Home";

const App = () => {
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    window.reload();
  }

  const getMe = async () => {
    const storedToken = window.localStorage.getItem("token");
    if (!token) {
      if (storedToken) {
        setToken(storedToken);
      }
      return;
    }
  };

  useEffect(() => {
    getMe();
  }, [token]);

  return (
    <div id="app">
      <NavBar logout={logout} token={token} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route
          path="Login"
          element={<Login setToken={setToken} navigate={navigate} />}
        />
        <Route
          path="Register"
          element={<Register setToken={setToken} navigate={navigate} />}
        />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
