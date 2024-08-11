import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
//? The useState function returns an array with two elements: the current state and a function to update that current state. The array indexes are 0 and 1 respectively. When destructured with [],the first element is the current state and the second element is the function to update that current state. Hooks can only be called at the top level of a component/function.

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); //isOpen = true

  function handlePrevious() {
    if (step > 1) setStep((st) => st - 1); //st can be any descr. name for step
  }

  function handleNext() {
    if (step < 3) {
      setStep((st) => st + 1);
      //setStep((st) => st + 1);
    }
  }

  return (
    <>
      {/*Updating the page state from open to closed (!isOpen) button  */}
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {/*if isOpen, then render the div comp with the app */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step{step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
