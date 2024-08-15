# UsePopcorn - React Movie Rating App

UsePopcorn is a simple React.js app that allows users to search for movies and rate them using a star rating system. This project demonstrates key concepts in React, such as component creation, state management, and prop handling. It’s an excellent example of building reusable and customizable UI components.

## Features

- **Star Rating Component**: Users can rate movies with a star rating system that is customizable in terms of the number of stars, color, size, and rating messages.
- **Dynamic UI**: The star rating dynamically updates based on user interaction, providing instant feedback.
- **Reusable Components**: The StarRating component is designed to be reusable across different parts of the application, with configurable props.

## Code Overview

### `StarRating.js`

The `StarRating` component is the heart of the app. It’s a flexible and reusable component that renders a series of star icons, allowing users to rate items on a scale.

- **Props**: The component accepts several props to customize its behavior:
  - `maxRating`: The maximum number of stars (default is 5).
  - `color`: The color of the stars (default is `#fcc419`).
  - `size`: The size of each star (default is `48px`).
  - `messages`: An array of strings for messages corresponding to each rating level.
  - `defaultRating`: The initial rating value when the component is first rendered.
  - `onSetRating`: A callback function triggered when the rating is set by the user.
- **State Management**: The component uses two pieces of state:

  - `rating`: Holds the current rating set by the user.
  - `tempRating`: Temporarily holds the rating while the user hovers over the stars.

- **Star Component**: Each star is rendered using the `Star` sub-component, which handles user interaction like clicking and hovering.

### `index.js`

This file sets up the application and demonstrates how to use the `StarRating` component in different configurations.

- **Test Component**: The `Test` component shows how to use the `StarRating` component and manage its state to display a dynamic message based on the user’s rating.

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
