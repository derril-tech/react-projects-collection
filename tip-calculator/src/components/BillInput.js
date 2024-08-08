import React from "react";

export default function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>
        How much was the bill?
        {/* Input field for entering the bill amount */}
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="Enter bill amount"
        />
      </label>
    </div>
  );
}
