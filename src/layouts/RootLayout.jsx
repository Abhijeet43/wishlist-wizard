import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "../components";

function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default RootLayout;
