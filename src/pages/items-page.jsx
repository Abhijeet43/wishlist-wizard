import ItemList from "../components/wishlist-items/wishlist-items";
import { useWishList } from "../contexts/wishlist-context";

function ItemsPage() {
  const { wishlistItems } = useWishList();
  return (
    <>
      <h2 className="my-5 font-bold text-2xl text-center">Wishlist Items </h2>
      <ItemList items={wishlistItems} />
    </>
  );
}

export default ItemsPage;
