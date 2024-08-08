import React from "react";

export default function Output({ bill, tip, total }) {
  return (
    <div>
      {/* Display the calculated total amount and tip */}
      <h3>
        You pay ${total.toFixed(2)} (${bill} + ${tip.toFixed(2)} tip)
      </h3>
    </div>
  );
}
