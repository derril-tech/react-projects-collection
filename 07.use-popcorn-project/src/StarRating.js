import { useState } from "react"; // Importing the `useState` hook to manage state within the component
import PropTypes from "prop-types"; // Importing PropTypes for type checking of props

// Styles for the container and star container
const containerStyle = {
  display: "flex", // Aligns children in a horizontal row
  alignItems: "center", // Vertically centers the children
  gap: "16px", // Spaces out the children by 16px
};

const starContainerStyle = {
  display: "flex", // Aligns stars in a horizontal row
};

// The main StarRating component definition
export default function StarRating({
  maxRating = 5, // Default maximum number of stars if not provided
  color = "#fcc419", // Default color for stars
  size = 48, // Default size of stars
  className = "", // Allows for custom CSS class to be added
  messages = [], // Array of messages corresponding to each rating level
  defaultRating = 0, // Initial rating when the component loads
  onSetRating, // Function to handle rating changes, passed from parent component
}) {
  const [rating, setRating] = useState(defaultRating); // State to store the current rating
  const [tempRating, setTempRating] = useState(0); // State to store temporary rating while hovering

  // Function to handle setting the rating when a star is clicked
  function handleRating(newRating) {
    setRating(newRating); // Update the rating state
    onSetRating(newRating); // Call the function passed via props to notify parent of the change
  }

  // Style for the text message displayed next to the stars
  const textStyle = {
    lineHeight: "1", // Single line height
    margin: "0", // No margin around the text
    color: color, // Text color matches the star color
    fontSize: `${size / 1.5}px`, // Adjusts text size relative to star size
  };

  // Prop types validation
  StarRating.propTypes = {
    maxRating: PropTypes.number, // Maximum number of stars
    defaultRating: PropTypes.number, // Initial rating value
    color: PropTypes.string, // Color of the stars
    size: PropTypes.number, // Size of each star
    className: PropTypes.string, // Custom class name for styling
    messages: PropTypes.arrayOf(PropTypes.string), // Array of strings for messages corresponding to ratings
    onSetRating: PropTypes.func, // Function to handle rating change
  };

  return (
    <div style={containerStyle} className={className}>
      {/* Renders the stars */}
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i} // Unique key for each star
            onRate={() => handleRating(i + 1)} // Sets rating when star is clicked
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1} // Determines if the star is full or empty
            onHoverIn={() => setTempRating(i + 1)} // Sets tempRating on hover
            onHoverOut={() => setTempRating(0)} // Resets tempRating when not hovering
            color={color} // Passes the color prop to the Star component
            size={size} // Passes the size prop to the Star component
          />
        ))}
      </div>
      {/* Displays a message corresponding to the current rating */}
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1] // Displays the appropriate message based on tempRating or rating
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

// Star component definition for individual stars
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`, // Star width
    height: `${size}px`, // Star height
    display: "block", // Display as block for proper sizing
    cursor: "pointer", // Cursor turns to pointer on hover
  };

  return (
    <span
      role="button" // Indicates that this span is clickable
      style={starStyle}
      onClick={onRate} // Handles star click to set the rating
      onMouseEnter={onHoverIn} // Handles mouse entering to set tempRating
      onMouseLeave={onHoverOut} // Handles mouse leaving to reset tempRating
    >
      {/* SVG icons for full and empty stars */}
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
