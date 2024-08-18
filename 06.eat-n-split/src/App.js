import { useState } from "react";

// Initial list of friends with their respective details
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7, // Indicates the amount you owe the friend (negative means you owe, positive means they owe you)
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20, // Positive balance means the friend owes you this amount
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0, // Zero balance means you and the friend are even
  },
];

//-------- RE-USABLE COMPONENTS SECTION -------
// Reusable Button component that receives text and an onClick handler as props
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
//-------- END RE-USABLE COMPONENTS SECTION -------

export default function App() {
  // State to manage the list of friends
  const [friends, setFriends] = useState(initialFriends);
  // State to control whether the 'Add Friend' form is shown or hidden
  const [showAddFriend, setShowAddFriend] = useState(false);
  // State to track the currently selected friend
  const [selectedFriend, setSelectedFriend] = useState(null);

  //------------- START event handler functions---------------
  // Toggles the visibility of the 'Add Friend' form
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  // Adds a new friend to the list of friends and closes the 'Add Friend' form
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // Handles selecting and deselecting a friend from the list
  function handleSelection(friend) {
    // If a friend is already selected, deselect them; otherwise, select the friend
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // Handles splitting the bill with the selected friend
  function handleSplitBill(value) {
    // Update the balance for the selected friend based on who is paying
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    // Reset the selected friend after splitting the bill
    setSelectedFriend(null);
  }
  //-------------- END event handler functions---------------------------

  return (
    <div className="app">
      {/* Sidebar containing the friends list and the 'Add Friend' button/form */}
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {/* Conditionally render the 'Add Friend' form based on state */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        {/* Button to toggle the visibility of the 'Add Friend' form */}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {/* Render the form to split the bill if a friend is selected */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

// Component to render the list of friends
function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {/* Map over the list of friends and render each one using the Friend component */}
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

// Component to render a single friend item
function Friend({ friend, onSelection, selectedFriend }) {
  // Determine if the current friend is selected
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      {/* Display the friend's image and name */}
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/* Display the balance status with the friend */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}{" "}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {/* Button to select/deselect the friend */}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

// Form component to add a new friend
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // Handle form submission to add a new friend
  function handleSubmit(event) {
    event.preventDefault();

    // If name or image is empty, do not proceed
    if (!name || !image) return;

    // Generate a unique ID for the new friend
    const id = crypto.randomUUID();
    // Create a new friend object
    const newFriend = { id, name, image: `${image}?u=${id}`, balance: 0 };
    // Add the new friend to the list
    onAddFriend(newFriend);

    // Reset the form fields
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* Input field for friend's name */}
      <label>👫Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Input field for friend's image URL */}
      <label>👨🏽Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Submit button to add the friend */}
      <Button>Add</Button>
    </form>
  );
}

// Form component to handle splitting the bill with a selected friend
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(""); // State to store the total bill amount
  const [myExpense, setMyExpense] = useState(""); // State to store the user's expense
  const expenseFriend = bill ? bill - myExpense : ""; // Calculate friend's expense
  const [whoIsPaying, setWhoIsPaying] = useState("user"); // State to track who is paying

  // Handle form submission to split the bill
  function handleSubmit(event) {
    event.preventDefault();
    // Ensure the bill and expense values are provided before proceeding
    if (!bill || !myExpense) return;
    // Calculate the balance change based on who is paying
    onSplitBill(whoIsPaying === "user" ? expenseFriend : -myExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      {/* Input field for the total bill value */}
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      {/* Input field for user's expense */}
      <label>🧑🏻My expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
      />

      {/* Disabled input field showing the friend's expense */}
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={expenseFriend} />

      {/* Dropdown to select who is paying the bill */}
      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      {/* Submit button to split the bill */}
      <Button>Split bill</Button>
    </form>
  );
}
