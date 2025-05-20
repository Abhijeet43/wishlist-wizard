import { createContext, use, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { existingItem } from "../utils/items";

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishlistItems, setWishlistItems, clearStoredWishlist] =
    useLocalStorage("wishlistItems", []);

  const [filterType, setFilterType] = useState("");

  const updateFilter = (type) => {
    setFilterType(type);
  };

  const addToWishList = (newItem) => {
    const itemExists = existingItem(wishlistItems, newItem);
    if (itemExists) {
      alert("Item already exists");
      return;
    }
    setWishlistItems((prevItems) => [newItem, ...prevItems]);
  };

  const removeFromWishList = (itemId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const clearWishList = () => {
    clearStoredWishlist();
  };

  return (
    <WishListContext.Provider
      value={{
        wishlistItems,
        addToWishList,
        removeFromWishList,
        clearWishList,
        filterType,
        updateFilter,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export const useWishList = () => {
  const context = use(WishListContext);

  if (context === undefined) {
    throw new Error("useWishList must be used within a WishListProvider");
  }

  return context;
};
