# UsePopcorn - React Movie Rating App

UsePopcorn is a React.js application designed for movie enthusiasts to search, view, and rate movies. The application demonstrates various key concepts in React, including state management, custom hooks, and component composition. It's an excellent showcase of building reusable and interactive UI components that can be customized to fit different use cases.

## Features

- **Movie Search and Details**: Users can search for movies, view detailed information, and rate them.
- **Star Rating Component**: A flexible and reusable star rating system allows users to rate movies. The component is customizable with props such as maximum stars, color, size, and rating messages.
- **Persistent State with Local Storage**: Watched movies and their ratings are stored in the browser's local storage, allowing users to retain their data across sessions.
- **Keyboard Shortcuts**: The app supports keyboard interactions, such as focusing the search input with the "Enter" key or closing the movie details view with the "Escape" key.

## Code Overview

### `App.js`

The `App.js` file is the central component of the application. It manages the state of the movie search query, the selected movie, and the list of watched movies. It also integrates various components and hooks to create the overall user experience.

- **State Management**: The component uses `useState` to manage the movie search query, the selected movie ID, and the list of watched movies.
- **Custom Hooks**: The app utilizes custom hooks such as `useMovies` for fetching movies from the OMDB API, `useLocalStorageState` for persisting the watched movies list, and `useKey` for handling keyboard shortcuts.
- **Conditional Rendering**: The app conditionally renders components like the movie list, loader, error messages, movie details, and the watched movies list based on the current state.

### `StarRating.js`

The `StarRating.js` file defines a reusable star rating component that can be customized with various props.

- **Props**:
  - `maxRating`: Number of stars to display (default is 5).
  - `color`: Color of the stars (default is `#fcc419`).
  - `size`: Size of each star (default is `48px`).
  - `messages`: Array of messages corresponding to each rating level.
  - `defaultRating`: Initial rating value.
  - `onSetRating`: Callback function that gets called when a rating is set.
- **State Management**: It maintains two pieces of state—`rating` for the current rating and `tempRating` for the temporary rating while hovering over stars.
- **Reusable Components**: Each star is a separate `Star` component, which handles user interaction and displays the appropriate SVG icon based on whether it's filled or empty.

### `useMovies.js`

This custom hook handles the logic for fetching movies from the OMDB API based on a search query. It manages the loading state, the list of movies, and any errors that occur during the fetch process.

- **AbortController**: Utilizes `AbortController` to cancel fetch requests when a new search query is entered before the previous request completes.

### `useLocalStorageState.js`

A custom hook that manages state with persistence in local storage. It initializes the state from local storage (if available) and updates the local storage whenever the state changes.

### `useKey.js`

This custom hook allows components to respond to specific key presses, like "Enter" or "Escape". It abstracts the logic of adding and removing event listeners and makes it easy to add keyboard shortcuts to any component.

## How to Run the App

1. **Clone the repository**:

   ```bash
   git clone https://github.com/derril-tech/07.use-popcorn-project.git

   ```

2. Navigate to the project directory:
   ```bash
   cd 07.use-popcorn-project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to see the app in action.

   ```

   ```

   The app should now be running at `http://localhost:3000`.

## Usage

Once the app is running:

- Experiment with the star rating component by clicking on the stars to set a rating.
- Modify the properties like `maxRating`, `color`, `size`, and `messages` to see how the component’s appearance and behavior change.

## Customization

The `StarRating` component is highly customizable and can be reused across different parts of your React application. You can tweak the props to fit the specific needs of your UI, making it a versatile component for any project involving user ratings.

## Learning Outcomes

- Understanding how to create reusable React components.
- Managing component state and handling user interaction.
- Using prop types for better validation and debugging.

## Further Reading

- [React Documentation - Components and Props](https://reactjs.org/docs/components-and-props.html)
- [React Documentation - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [PropTypes Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
