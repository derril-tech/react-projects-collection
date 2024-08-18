import { useState } from "react"; // Importing the `useState` hook for state management
import React from "react";
import ReactDOM from "react-dom/client";
//import StarRating from "./StarRating"; // Importing the StarRating component
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Getting the root element in the DOM to render React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
