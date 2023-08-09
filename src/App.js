import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from "./components/pages/blog/Blogs";
import About from "./components/pages/about/About";

import BlogDetail from "./components/pages/blogDetail/BlogDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
  },
  {
    path: "/About/:url",
    element: <About />,
  },
  {
    path: "/BlogDetail/:thumbnailUrl/:id",
    element: <BlogDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}