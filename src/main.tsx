import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import BalanceList from "./views/BalanceList/BalanceList.tsx";
import Home from "./views/Home/Home.tsx";
import "./index.css";
import Balance from "./views/Balance/Balance.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/balance",
    element: <BalanceList />,
  },
  {
    path: "/balance/:year/:month",
    element: <Balance />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
