import { useState, useEffect } from "react";

// Custom hook to manage state with persistence in local storage
// `initialState` - the initial value for the state
// `key` - the key used to store the value in local storage
export function useLocalStorageState(initialState, key) {
  // Initialize the state by checking if a value already exists in local storage
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // Effect to update local storage whenever the state value changes
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value)); // Store the updated value in local storage
    },
    [value, key] // Re-run the effect only if `value` or `key` changes
  );

  // Return the state value and the function to update it
  return [value, setValue];
}
