import React from "react";
import Posts from "./Posts";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <h1>Dream Cars</h1>
      <button className="btn btn-primary">Hello</button>
    </div>
  );
};

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
