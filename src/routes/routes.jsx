
import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Main from "../components/main";
import Products from "../components/products";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/contact",
      element: <Contact />,

    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/products",
      element: <Products/>,
    }
  ]);

export default router;