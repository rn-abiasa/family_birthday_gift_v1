import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource/pacifico";
import "@fontsource-variable/inter";
import "@fontsource/oooh-baby";
import "./index.css";
import Cover from "./pages/cover.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
