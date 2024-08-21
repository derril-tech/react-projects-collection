import { useEffect } from "react";

// Custom hook to handle keyboard events
// `key` - the key to listen for (e.g., "Enter", "Escape")
// `action` - the function to execute when the key is pressed
export function useKey(key, action) {
  useEffect(
    function () {
      // Callback function to handle the keydown event
      function callback(e) {
        // Check if the pressed key matches the specified key
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action(); // Execute the action if the key matches
        }
      }

      // Add event listener for keydown events
      document.addEventListener("keydown", callback);

      // Cleanup function to remove the event listener when the component unmounts or key/action changes
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key] // Re-run the effect only if `key` or `action` changes
  );
}
