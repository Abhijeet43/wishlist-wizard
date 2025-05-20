import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { WishListForm } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true },
      { path: "create-wishlist", Component: WishListForm },
    ],
  },
]);

export default router;
