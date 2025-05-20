import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { WishListForm } from "../components";
import ItemsPage from "../pages/items-page";
import NotFoundPage from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: ItemsPage },
      { path: "create-wishlist", Component: WishListForm },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;
