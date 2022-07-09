import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HelloApp from "./Hello";
import Counter from "./Counter";
import ArrayStates from "./ArrayStates"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArrayStates />
  </React.StrictMode>
);
