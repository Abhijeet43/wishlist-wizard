import React from "react";

function WishListItem({ name, category }) {
  return (
    <div className="bg-white shadow px-2 py-4 rounded-2xl text-center">
      <h2 className="font-semibold text-gray-800 text-xl">{name}</h2>
      <p className="text-gray-500">{category}</p>
    </div>
  );
}

export default WishListItem;
