import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import App from "./App.jsx";
import router from "./routes/index.js";
import "./index.css";
import { WishListProvider } from "./contexts/wishlist-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishListProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </WishListProvider>
  </StrictMode>
);
