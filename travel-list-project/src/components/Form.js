import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  //const [items, setItems] = useState([]); ---> moved to the closest parent component which is App in order to have access to the packing list component

  //Handle the adding of items to the items array --> moved to the closest parent comp which is App
  /*function handleAddItems(item) {
      setItems((items) => [...items, item]);
    }*/

  function handleSubmit(event) {
    event.preventDefault(); //Prevent the whole page from reloading when submit

    if (!description) return; //if no description then avoid form submission

    //Creating a new item object-- here we create a new input item
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    console.log(newItem);

    onAddItems(newItem);

    //Set the form back to its initial state
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {/*now we create an array for the dropdown of 20 and then map it in the second arg (-,i )which gets the current value as the first arg & the index as the 2nd and then maps it*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
