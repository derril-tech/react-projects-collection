import { useState } from "react"; // Import the useState hook from React

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null); // State to track which item is open

  // Function to toggle the open/close state of an item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index} // Checking if the current item is open
          onToggle={() => handleToggle(index)} // Toggling the item on click
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <div className="number">{String(index + 1).padStart(2, "0")}</div>{" "}
      {/* Display item number */}
      <div className="title">{item.title}</div> {/* Display item title */}
      <div className="icon">{isOpen ? "-" : "+"}</div>{" "}
      {/* Display + or - based on open state */}
      {isOpen && <div className="content-box">{item.text}</div>}{" "}
      {/* Display item text if open */}
    </div>
  );
}

export default Accordion;
