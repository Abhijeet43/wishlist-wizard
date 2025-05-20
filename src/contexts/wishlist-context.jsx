import { createContext, use } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishlistItems, setWishlistItems, clearStoredWishlist] =
    useLocalStorage("wishlistItems", []);

  const addToWishList = (newItem) => {
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
