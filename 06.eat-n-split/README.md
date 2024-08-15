# Eat-n-Split

## Overview

**Eat-n-Split** is a React.js application designed to help you split bills with friends after a meal. The app allows you to add friends, select a friend, and split the bill between you and the selected friend. The app keeps track of who owes whom and how much, helping to manage expenses in a clear and straightforward manner.

## Features

- **Add Friends**: Add new friends with a unique avatar generated from the [Pravatar](https://i.pravatar.cc/) service.
- **Manage Balances**: Keep track of how much you owe your friends or how much they owe you.
- **Split Bills**: Calculate the expense split between you and a friend, specifying who paid the bill.
- **Responsive UI**: A simple and responsive user interface designed with CSS and React components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/derril-tech/06.eat-n-split.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 06.eat-n-split
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

## Project Structure

- **App Component**: The root component that manages the state and contains the main structure of the application.
- **FriendsList Component**: Displays the list of friends and allows selecting/deselecting a friend.
- **Friend Component**: Represents a single friend with their image, name, balance, and selection button.
- **FormAddFriend Component**: A form to add new friends with their name and image URL.
- **FormSplitBill Component**: A form to input bill details, calculate the split, and update the balances accordingly.

## How It Works

1. **Add a Friend**: Click the "Add friend" button, fill in the name and image URL, and submit the form. The new friend will appear in the list.
2. **Select a Friend**: Click the "Select" button next to a friend's name to select them for bill splitting.
3. **Split a Bill**: Once a friend is selected, enter the total bill amount, your expense, and specify who paid the bill. Click "Split bill" to update the balances.
4. **View Balances**: The balance status (you owe or are owed) is displayed next to each friend in the list.

## Dependencies

- **React.js**: The JavaScript library for building the user interface.
- **CSS**: Custom styles for the UI.
- **Pravatar.cc**: A service to generate random avatars based on a unique ID.

## Future Enhancements

- **Persistent Storage**: Add functionality to persist the friend list and balances in local storage or a database.
- **Advanced Splitting**: Allow splitting bills among multiple friends or using different ratios.
- **Currency Support**: Add support for different currencies with exchange rates.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thanks to [Pravatar](https://i.pravatar.cc/) for providing a simple and effective avatar service.
