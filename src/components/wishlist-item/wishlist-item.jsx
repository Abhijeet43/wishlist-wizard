import React from "react";
import { useWishList } from "../../contexts/wishlist-context";

function WishListItem({ name, category, id }) {
  const { removeFromWishList } = useWishList();

  const removeItem = (itemId) => () => {
    if (confirm("Are you sure you want to delete this item?")) {
      removeFromWishList(itemId);
    }
    return;
  };

  return (
    <div className="flex justify-between items-center bg-white shadow px-2 py-4 rounded-2xl text-center">
      <div>
        <h2 className="font-semibold text-gray-800 text-xl">{name}</h2>
        <p className="text-gray-500">{category}</p>
      </div>
      <div>
        <button onClick={removeItem(id)} className="btn btn-error">
          Delete
        </button>
      </div>
    </div>
  );
}

export default WishListItem;
