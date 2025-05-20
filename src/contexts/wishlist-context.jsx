import { createContext, use, useState } from "react";

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishList = (newItem) => {
    setWishlistItems((prevItems) => [newItem, ...prevItems]);
  };

  const removeFromWishList = (itemId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const clearWishList = () => {
    setWishlistItems([]);
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
