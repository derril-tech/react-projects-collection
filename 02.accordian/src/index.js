import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"; // Import the App component

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App /> {/*Render the component inside strict mode */}
  </StrictMode>
);
