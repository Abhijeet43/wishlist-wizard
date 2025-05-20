import { useRef, useState, useCallback } from "react";
import { useWishList } from "../../contexts/wishlist-context";
import { useNavigate } from "react-router";

function WishListForm() {
  const itemNameRef = useRef(null);
  const itemCategoryRef = useRef(null);

  const { addToWishList } = useWishList();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);

      const itemName = itemNameRef.current.value.trim();
      const itemCategory = itemCategoryRef.current.value.trim();

      if (!itemName && !itemCategory) {
        setIsSubmitting(false);
        return;
      }

      const newItem = {
        id: Date.now(),
        name: itemName || "Unnamed Item",
        category: itemCategory || "Uncategorized",
        dateAdded: new Date().toISOString(),
      };

      addToWishList(newItem);

      itemNameRef.current.value = "";
      itemCategoryRef.current.value = "";
      navigate("/");

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    },
    [isSubmitting, addToWishList]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <form
        className="card bg-base-100 shadow-xl max-w-md mx-auto"
        onSubmit={handleSubmit}
        aria-labelledby="form-title"
      >
        <div className="card-body">
          <h2
            id="form-title"
            className="card-title text-2xl font-bold text-center justify-center mb-6"
          >
            Create WishList
          </h2>

          <div className="form-control w-full">
            <label className="label" htmlFor="itemName">
              <span className="label-text font-medium">Item Name</span>
              <span className="label-text-alt text-red-400">*</span>
            </label>
            <input
              type="text"
              id="itemName"
              className="input input-bordered w-full"
              placeholder="Enter Item Name..."
              ref={itemNameRef}
              aria-describedby="item-name-desc"
            />
            <div id="item-name-desc" className="label">
              <span className="label-text-alt">
                What would you like to add to your wishlist?
              </span>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label" htmlFor="itemCategory">
              <span className="label-text font-medium">Item Category</span>
              <span className="label-text-alt text-red-400">*</span>
            </label>
            <input
              type="text"
              id="itemCategory"
              className="input input-bordered w-full"
              placeholder="Enter Item Category..."
              ref={itemCategoryRef}
              aria-describedby="item-category-desc"
            />
            <div id="item-category-desc" className="label">
              <span className="label-text-alt">
                E.g., Electronics, Books, Clothing
              </span>
            </div>
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              className={`btn btn-primary ${
                isSubmitting ? "btn-disabled loading" : ""
              }`}
              aria-label="Add item to wishlist"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add To Wishlist"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WishListForm;
