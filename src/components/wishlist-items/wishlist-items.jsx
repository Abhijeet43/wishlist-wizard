import React from "react";
import WishListItem from "../wishlist-item/wishlist-item";
import { useWishList } from "../../contexts/wishlist-context";

function WishListItems({ items = [] }) {
  const { filterType } = useWishList();

  const filteredItems = items.filter((item) => item.category === filterType);

  const filteredItemsToDisplay =
    filteredItems.length > 0 ? filteredItems : items;

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {filteredItemsToDisplay.map(({ name, category, id }, index) => (
        <WishListItem key={index} id={id} name={name} category={category} />
      ))}
    </div>
  );
}

export default WishListItems;
