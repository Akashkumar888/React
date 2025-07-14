import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import from npm packages ok
// 🔸 1. Curly braces {} → Named Import
// You use curly braces when you're importing a named export.

import App from "./routes/App.jsx"; // normal import from folder or files
import CreatePost from "./component/CreatePost.jsx";
import PostList, { postLoader } from "./component/PostList.jsx";

import { CreatePostAction } from "./component/CreatePost.jsx";
// Always use relative paths (./ or ../) for your own components, and direct names (like 'react', 'axios') for npm packages.
// 🔸 2. No Curly Braces → Default Import
// You omit curly braces when importing a default export.

const router = createBrowserRouter([
  { path: "/", element: <App /> ,children:[
  { path: "/", element: <PostList/>,loader:postLoader },
  { path: "/create-post", element: <CreatePost />,action: CreatePostAction },
  ] },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


