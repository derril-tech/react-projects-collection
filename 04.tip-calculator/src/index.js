import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css"; // Ensure you import the CSS file to apply styles globally

// Render the App component into the root element in the HTML file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
