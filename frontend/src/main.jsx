import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import AddBlogs from "./pages/AddBlogs.jsx";
import DeleteBlogs from "./pages/DeleteBlogs.jsx";
import UpdateBlogs from "./pages/UpdateBlogs.jsx";
import Blogs from "./pages/Blogs.jsx";
// import Login from "./Authentication/login.jsx";
// import Signup from "./Authentication/signup.jsx";
// Auth pages

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
  {
    path: "/blogs/:id",
    element: <Blogs />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
