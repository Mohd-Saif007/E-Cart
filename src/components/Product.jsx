import React from 'react'
import j1 from "../../public/image/Jeans/j1.jpg";
import t1 from "../../public/image/Tshirt/t1.jpg";
import s1 from "../../public/image/Shoes/s1.jpg";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <>
    
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

    
    
    </>
  )
}
