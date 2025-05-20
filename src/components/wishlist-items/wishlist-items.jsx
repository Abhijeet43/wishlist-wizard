import React from "react";
import WishListItem from "../wishlist-item/wishlist-item";

function WishListItems({ items = [] }) {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {items.map(({ name, category }, index) => (
        <WishListItem key={index} name={name} category={category} />
      ))}
    </div>
  );
}

export default WishListItems;
