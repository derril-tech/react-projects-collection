/*This tip calculator example demonstrates the use of state lifting and the children prop in React to build a reusable, maintainable, and scalable application. The components are designed to be simple and modular, allowing for easy modification and extension.  */

import React, { useState } from "react";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";
import Reset from "./components/Reset";
import "./styles.css";

export default function App() {
  // State to hold the bill amount
  const [bill, setBill] = useState("");

  // State to hold the service satisfaction percentage for person 1
  const [percentage1, setPercentage1] = useState(0);

  // State to hold the service satisfaction percentage for person 2
  const [percentage2, setPercentage2] = useState(0);

  // Calculate the tip based on the average of the two percentages
  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  // Calculate the total amount (bill + tip)
  const total = bill ? parseFloat(bill) + tip : 0;

  // Function to reset all states to their initial values
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="app">
      {/* Component for bill input */}
      <BillInput bill={bill} setBill={setBill} />

      {/* Component for selecting service percentage for person 1 */}
      <SelectPercentage
        label="How did you like the service?"
        percentage={percentage1}
        setPercentage={setPercentage1}
      />

      {/* Component for selecting service percentage for person 2 */}
      <SelectPercentage
        label="How did your friend like the service?"
        percentage={percentage2}
        setPercentage={setPercentage2}
      />

      {/* Display the output and reset button only if bill is entered */}
      {bill && (
        <>
          {/* Component for displaying the calculated output */}
          <Output bill={bill} tip={tip} total={total} />

          {/* Component for reset button */}
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
