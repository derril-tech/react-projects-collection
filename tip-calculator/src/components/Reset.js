import React from "react";

export default function Reset({ handleReset }) {
  return (
    <button onClick={handleReset}>
      {/* Reset button to clear all inputs */}
      Reset
    </button>
  );
}
