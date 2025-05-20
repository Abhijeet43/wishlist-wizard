import { useNavigate } from "react-router";
import ItemList from "../components/wishlist-items/wishlist-items";
import { useWishList } from "../contexts/wishlist-context";
import { getCategories } from "../components/utils/get-categories";

function ItemsPage() {
  const { wishlistItems, clearWishList, updateFilter } = useWishList();
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateFilter(e.target.value);
  };

  const addNewItem = () => {
    navigate("/create-wishlist");
  };

  const emptyWishList = () => {
    clearWishList();
  };

  const categories = getCategories(wishlistItems);

  return (
    <section className="m-3">
      <h2 className="my-5 font-bold text-3xl text-center">Wishlist Items </h2>
      <div className="flex justify-end items-center gap-4 my-3">
        <div className="flex">
          <label className="mr-2 label" htmlFor="categories">
            Select Category:
          </label>
          <select id="categories" className="select" onChange={handleChange}>
            <option value={""}>Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="btn btn-primary" onClick={addNewItem}>
            Add New Item
          </button>
          <button
            className="ml-3 text-white btn btn-error"
            onClick={emptyWishList}
          >
            Empty Wish list
          </button>
        </div>
      </div>
      <ItemList items={wishlistItems} />
    </section>
  );
}

export default ItemsPage;
