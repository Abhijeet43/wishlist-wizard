import React from "react";
import WishListItem from "../wishlist-item/wishlist-item";
import { useWishList } from "../../contexts/wishlist-context";
import { useNavigate } from "react-router";

function WishListItems({ items = [] }) {
  const { filterType } = useWishList();
  const navigate = useNavigate();

  const filteredItems = items.filter((item) => item.category === filterType);

  const filteredItemsToDisplay =
    filteredItems.length > 0 ? filteredItems : items;

  const handleAddNewItem = () => {
    navigate("/create-wishlist");
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-10 mt-8 p-8 text-center">
        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-2xl">
            Your wishlist is empty
          </h3>
          <p className="text-gray-600">
            Add some items to your wishlist to get started!
          </p>
        </div>
        <button onClick={handleAddNewItem} className="btn btn-primary">
          Add New Item
        </button>
      </div>
    );
  }

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {filteredItemsToDisplay.map(({ name, category, id }, index) => (
        <WishListItem key={index} id={id} name={name} category={category} />
      ))}
    </div>
  );
}

export default WishListItems;
