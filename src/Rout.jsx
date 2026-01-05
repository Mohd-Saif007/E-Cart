import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import About from "../src/About";
import Contact from "../src/Contact";
import Service from "../src/Service";
import Navbar from "../src/Navbar";
import Tshirt from "../src/Tshirt";
import Jeans from "../src/Jeans";
import Shoes from "../src/Shoes";
import Details from "./Details";
import Cart from "./Cart";
import Buy from "./Buy";
export default function Rout() {
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
    // console.log(data);
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
            <Route path="/buy" element={<Buy setCart={setCart} /> } />
            <Route
              path="/cart"
              element={<Cart cartData={cartData} setCart={setCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
