import React, { useState } from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from "../pages/Home/Index";
import About from "../pages/About/Index";
import Contact from "../pages/Contact/Index";
import Service from "../pages/Service/Index";
import Navbar from "../components/Navbar/Index";
import Tshirt from "../pages/Tshirt/Index";
import Jeans from "../pages/Jeans/Index";
import Shoes from "../pages/Shoes/Index";
import Details from "../pages/Details/Index";
import Cart from "../pages/Cart/Index";
import Buy from "../pages/Buy/Index";

export default function Index() {
  const [cartData, setCart] = useState([]);

  function addtoCart(data) {
    var available = false;

    cartData.forEach((cartProducts) => {
      if (cartProducts.tittle == data.tittle) {
        available = true;
      }
    }); 

    if (available) {
      alert("Product already in cart.");
      return;
    }

    setCart([...cartData, data]);
    alert("Data added in cart");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar len={cartData.length} />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "details", element: <Details /> },
        { path: "about", element: <About /> },
        { path: "Tshirt", element: <Tshirt addtocart={addtoCart} /> },
        { path: "Shoes", element: <Shoes addtocart={addtoCart} /> },
        { path: "Jeans", element: <Jeans addtocart={addtoCart} /> },
        { path: "contact", element: <Contact /> },
        { path: "service", element: <Service /> },
        { path: "buy", element: <Buy setCart={setCart} cartData={cartData} /> },
        {
          path: "cart",
          element: <Cart cartData={cartData} setCart={setCart} />,
        },
      ],
    },
  ]);

  return( <RouterProvider router={router} />)
}
