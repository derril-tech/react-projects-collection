import { useState } from "react"; // Importing the `useState` hook for state management
import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating"; // Importing the StarRating component

// Example component that utilizes StarRating and tracks the movie rating in state
function Test() {
  const [movieRating, setMovieRating] = useState(0); // State to store the rating

  return (
    <div>
      {/* StarRating component with customized properties */}
      <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />;
      <p>This movie was rated {movieRating} stars</p>{" "}
      {/* Displaying the rating */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); // Getting the root element in the DOM to render React
root.render(
  <React.StrictMode>
    {/* Render StarRating components with different configurations */}
    <StarRating
      maxRating={5} // Maximum of 5 stars
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} // Custom messages for each rating
    />
    <StarRating size={28} color="blue" className="test" defaultRating={3} />{" "}
    {/* Pre-set rating and custom style */}
    <Test />{" "}
    {/* Renders the Test component that demonstrates state management */}
  </React.StrictMode>
);
