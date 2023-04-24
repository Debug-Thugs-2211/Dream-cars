import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import "./App.css";
import { Login } from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/checkout";
import Home from "./components/Home";

const App = () => {
  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
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
