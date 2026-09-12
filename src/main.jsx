import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource/pacifico";
import "@fontsource-variable/inter";
import "@fontsource/oooh-baby";
import "./index.css";

import Cover from "./pages/cover.jsx";
import Memories from "./pages/memories.jsx";
import SpecialMessage from "./pages/special-message.jsx";
import Reasons from "./pages/reasons.jsx";
import OurSongs from "./pages/our-songs.jsx";
import BirthdayWish from "./pages/birthday-wish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
  },
  {
    path: "/memories",
    element: <Memories />,
  },
  {
    path: "/special-message",
    element: <SpecialMessage />,
  },
  {
    path: "/reasons",
    element: <Reasons />,
  },
  {
    path: "/our-songs",
    element: <OurSongs />,
  },
  {
    path: "/birthday-wish",
    element: <BirthdayWish />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
