import React from "react";

export default function SelectPercentage({ label, percentage, setPercentage }) {
  return (
    <div>
      <label>
        {label}
        {/* Dropdown for selecting the percentage */}
        <select
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </label>
    </div>
  );
}
