import { Link, useNavigate } from "react-router";
import { useWishList } from "../../contexts/wishlist-context";

function Navbar() {
  const { wishlistItems } = useWishList();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-base-100 shadow-sm navbar">
      <div className="flex-1">
        <Link className="text-xl btn btn-ghost">WishList Wizard</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            onClick={handleClick}
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              {wishlistItems.length > 0 && (
                <span className="bg-red-400 text-white badge badge-xs indicator-item">
                  {wishlistItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
