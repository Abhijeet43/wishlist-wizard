import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { WishListForm } from "../components";
import ItemsPage from "../pages/items-page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: ItemsPage },
      { path: "create-wishlist", Component: WishListForm },
    ],
  },
]);

export default router;
