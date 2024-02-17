import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBlogs from "./pages/AddBlogs.jsx";
import DeleteBlogs from "./pages/DeleteBlogs.jsx";
import UpdateBlogs from "./pages/UpdateBlogs.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create_blog",
    element: <AddBlogs />,
  },
  {
    path: "/delete_blog",
    element: <DeleteBlogs />,
  },
  {
    path: "/update/:id",
    element: <UpdateBlogs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
