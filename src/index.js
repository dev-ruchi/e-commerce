import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProductList from "./products/ProductList";
import ProductView from "./products/ProductView";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ProductCreate from "./admin/products/ProductCreate";

const router = createBrowserRouter([
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
    element: <ProductCreate />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);