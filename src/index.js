import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HelloApp from "./Hello";
import Counter from "./Counter";
import ArrayStates from "./ArrayStates"
import Unicafe from "./Unicafe"
import Anecdotes from "./Anecdotes"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Anecdotes />
  </React.StrictMode>
);
