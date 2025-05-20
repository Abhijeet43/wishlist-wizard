# Wishlist Wizard 🧙‍♂️

## Project Overview

Wishlist Wizard is a modern React application that helps users create and manage their wishlists. The application allows users to add items to their wishlist, categorize them, filter by category, and manage their collection with ease.

## 📋 Features

- Add new items to your wishlist
- Categorize items for better organization
- Filter items by category
- Remove individual items
- Clear entire wishlist
- Persistent storage using local storage

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Routing**: React Router 7
- **Styling**: TailwindCSS 4 with DaisyUI
- **Build Tool**: Vite 6
- **State Management**: React Context API
- **Storage**: Local Storage

## 📦 Installation

```bash
# Clone the repository
git clone [GITHUB_REPO_URL]

# Navigate to the project directory
cd wishlist-wizard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📸 Screenshots

### Home Page

[SCREENSHOT_HOME_PAGE]

### Add New Item

[SCREENSHOT_ADD_ITEM_PAGE]

### Wishlist Items

[SCREENSHOT_ITEMS_PAGE]

## 🏗️ Project Structure

```
wishlist-wizard/
├── public/
├── src/
│   ├── components/
│   │   └── wishlist-items/
│   ├── contexts/
│   │   └── wishlist-context.jsx
│   ├── hooks/
│   │   └── useLocalStorage.jsx
│   ├── layouts/
│   ├── pages/
│   │   └── items-page.jsx
│   ├── routes/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Usage

1. **Adding Items**: Click on the "Add New Item" button to navigate to the item creation page
2. **Filtering Items**: Use the category dropdown to filter items by their category
3. **Removing Items**: Click the remove button on any item card to remove it from your wishlist
4. **Clearing Wishlist**: Use the "Empty Wish list" button to clear all items

## 🧩 Key Components

### WishList Context

The application uses React's Context API to manage the wishlist state globally:

- `addToWishList`: Adds a new item to the wishlist
- `removeFromWishList`: Removes an item from the wishlist
- `clearWishList`: Clears the entire wishlist
- `updateFilter`: Updates the category filter

### Local Storage Hook

The application uses a custom hook to persist wishlist data in the browser's local storage, ensuring that users don't lose their data when they close the browser.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [GitHub Repository][GITHUB_REPO_URL]
- [Live Demo][LIVE_DEMO_URL]

---

Made with ❤️ by [YOUR_NAME]
