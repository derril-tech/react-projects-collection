# Text Expander Component in React

## Overview

This project showcases a reusable `TextExpander` component built with React. The component allows a portion of text to be expanded and collapsed, with customizable button text, colors, and initial states. It's an example of clean, maintainable, and reusable component design, suitable for inclusion in a larger application.

## Features

- **Expandable and Collapsible Text:** Displays a portion of text initially, with the option to reveal the full text by clicking a button.
- **Customizable Props:** The component supports various props for customization:
  - `collapsedNumWords`: Number of words to show when the text is collapsed.
  - `expandButtonText`: Text displayed on the button when the text is collapsed.
  - `collapseButtonText`: Text displayed on the button when the text is expanded.
  - `buttonColor`: Background color of the expand/collapse button.
  - `expanded`: Boolean flag to set the initial state of the text (expanded or collapsed).
  - `className`: Custom CSS class for additional styling.
- **Modern and Responsive Design:** The component is styled with CSS to ensure a modern and responsive look, including hover effects and transitions.

## Code Explanation

### `TextExpander` Component

The `TextExpander` component is the core of this project. It uses React's `useState` hook to manage its state (expanded or collapsed). Here's a breakdown of the key parts of the component:

1. **State Management:**

   - `isExpanded` is a boolean state managed by `useState` to track whether the text is currently expanded or collapsed.
   - The initial value of `isExpanded` is determined by the `expanded` prop.

2. **Text Splitting and Display:**

   - The `children` prop contains the text to be displayed.
   - The text is split into words, and a portion is shown based on the `collapsedNumWords` prop when the text is collapsed.

3. **Toggle Functionality:**

   - The `toggleExpanded` function switches the state between expanded and collapsed when the button is clicked.

4. **Button Customization:**
   - The button text and color are fully customizable using the `expandButtonText`, `collapseButtonText`, and `buttonColor` props.

### Styling

The project includes a `styles.css` file that defines the styles for the `TextExpander` component. Key features of the styling include:

- **Modern Aesthetics:** The component is styled with a clean and modern look, using shadows, rounded corners, and smooth transitions.
- **Hover Effects:** The component's background color changes slightly when hovered, providing a subtle visual cue.
- **Responsive Design:** The component is responsive and adapts to various screen sizes.

### How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/derril-tech/08.text-expander.git
   cd 08.text-expander
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000` to see the app in action.

### Potential Improvements

- **Animations:** Add animations to the text expansion and collapse for a smoother user experience.
- **Accessibility:** Enhance the component to be fully accessible, ensuring it can be used with screen readers and keyboard navigation.
- **Unit Tests:** Implement unit tests using Jest and React Testing Library to ensure the component works as expected under various conditions.

## Conclusion

This project demonstrates a reusable and customizable `TextExpander` component, suitable for real-world applications. The code is clean, well-documented, and easy to understand, making it a great example of your skills in React component development. Feel free to use this project as part of your portfolio or to inspire similar component designs in your future projects.
