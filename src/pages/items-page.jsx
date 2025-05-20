import { useNavigate } from "react-router";
import ItemList from "../components/wishlist-items/wishlist-items";
import { useWishList } from "../contexts/wishlist-context";

function ItemsPage() {
  const { wishlistItems, clearWishList } = useWishList();
  const navigate = useNavigate();
  const addNewItem = () => {
    navigate("/create-wishlist");
  };
  const emptyWishList = () => {
    clearWishList();
  };
  return (
    <section className="m-3">
      <h2 className="my-5 font-bold text-3xl text-center">Wishlist Items </h2>
      <div className="flex justify-end items-center gap-4 my-3">
        <div>
          <input className="input" placeholder="Search Categories.." />
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
