import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Layout from "./ui/Layout";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProductView from "./products/ProductView";
import ProductList from "./products/ProductList";
import ProductCreate from "./admin/products/ProductCreate";
import Cart from "./products/Cart";
import Profile from "admin/users/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/products/:slug",
        element: <ProductView />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin/products/create",
        element: <ProductCreate />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
