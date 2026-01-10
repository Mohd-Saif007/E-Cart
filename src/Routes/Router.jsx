import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Navbar from "../component/Navbar";
import Tshirt from "../pages/Tshirt";
import Jeans from "../pages/Jeans";
import Shoes from "../pages/Shoes";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import Buy from "../pages/Buy";
export default function Router() {
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar len={cartData.length} />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/Tshirt" element={<Tshirt addtocart={addtoCart} />} />
            <Route path="/Shoes" element={<Shoes addtocart={addtoCart} />} />
            <Route path="/Jeans" element={<Jeans addtocart={addtoCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/buy" element={<Buy setCart={setCart} cartData={cartData} />} /><Route
              path="/cart"
              element={<Cart cartData={cartData} setCart={setCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
