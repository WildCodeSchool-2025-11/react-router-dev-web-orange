import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import App from "./App";
// page components
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
}
