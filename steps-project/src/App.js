import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>👩‍🦰</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😍</p>
      </StepMessage>
    </div>
  );
}
//? The useState function returns an array with two elements: the current state and a function to update that current state. The array indexes are 0 and 1 respectively. When destructured with [],the first element is the current state and the second element is the function to update that current state. Hooks can only be called at the top level of a component/function.

function Steps() {
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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="black"
                onClick={() => alert(`learn hot to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

/*THE RE-USABLE STEP MESSAGE: */
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step{step}</h3>
      {children}
    </div>
  );
}

/*THE RE-USABLE BUTTON: here we want to instead accepts props for bg color, onclick, text color and emoji instead of the values to make them re-usable*/
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
