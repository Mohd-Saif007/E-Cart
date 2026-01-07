import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import dress2 from "../src/image/dress2.jpg";
import dress3 from "../src/image/dress3.jpg";
import dress4 from "../src/image/dress.jpg";
import kashmir from "../src/image/kashmir.jpg";
import delhi from "../src/image/delhi.jpg";
import jodhpur from "../src/image/jodhpur.jpg";
import j1 from "../src/imagej/j1.jpg";
import t1 from "../src/imaget/t1.jpg";
import s1 from "../src/imageso/s1.jpg";

export default function Home() {
  const [val, setVal] = useState(0);
  const dressData = [dress2, dress3, dress4];

  function next() {
    if (val === dressData.length - 1) setVal(0);
    else setVal(val + 1);
  }

  function pre() {
    if (val > 0) setVal(val - 1);
    else setVal(dressData.length - 1);
  }

  return (
    <>
      {/* Slider */}
      <div className="main">
        <div className="left">
          <FaAngleDoubleLeft className="icon" onClick={pre} />
        </div>
        <div className="center">
          <img src={dressData[val]} alt="" className="img-fluid" />
        </div>
        <div className="right">
          <FaAngleDoubleRight className="icon" onClick={next} />
        </div>
      </div>

      {/* Products */}
      <h1 className="heading text-center my-5">Top Selling Products</h1>

      <div className="container">
        <div className="row text-center g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="product-card">
              <img src={t1} className="img-fluid" alt="Tshirt" />
              <Link to="/Tshirt" className="btn btn-danger mt-2">
                T-Shirt
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="product-card">
              <img src={j1} className="img-fluid" alt="Jeans" />
              <Link to="/jeans" className="btn btn-danger mt-2">
                Jeans
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="product-card">
              <img src={s1} className="img-fluid" alt="Shoes" />
              <Link to="/shoes" className="btn btn-danger mt-2">
                Shoes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <h1 className="heading2 text-center my-5">Services</h1>

      <div className="container">
        <div className="row text-center g-4">
          <div className="col-lg-4 col-md-6 col-12">
          <img src={kashmir} className="img-fluid services-img" alt="kashmir" />

            <h4 className="mt-2">Kashmir</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
          <img src={delhi} className="img-fluid services-img" alt="delhi" />
            <h4 className="mt-2">Delhi</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
<img src={jodhpur} className="img-fluid services-img" alt="jodhpur" />
            <h4 className="mt-2">Jodhpur</h4>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="container mt-5">
        <div className="text-center text-danger mb-4">
          <h1>Reviews</h1>
          <p>What our customers say</p>
        </div>

        <div className="row text-center g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <h4>Yoyo</h4>
            <p>Very good quality products 👌</p>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <h4>Sam</h4>
            <p>Fast delivery and nice support 👍</p>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <h4>Roni</h4>
            <p>Highly recommended 💯</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-12 mb-3">
              <h3>MyShop</h3>
              <p>Best quality products & travel services.</p>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h4>Quick Links</h4>
              <p>Home</p>
              <p>Products</p>
              <p>Services</p>
              <p>Contact</p>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h4>Services</h4>
              <p>Kashmir Tour</p>
              <p>Delhi Guide</p>
              <p>Jodhpur Trip</p>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h4>Contact</h4>
              <p>myshop@gmail.com</p>
              <p>+91 0000000000</p>
            </div>
          </div>

          <div className="text-center mt-3">
            © 2025 MyShop. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}