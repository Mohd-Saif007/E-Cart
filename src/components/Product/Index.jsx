import React from 'react'
import j1 from "../../../public/images/Jeans/j1.jpg";
import t1 from "../../../public/images/Tshirt/t1.jpg";
import s1 from "../../../public/images/Shoes/s1.jpg";
import RenderImg from '../RenderImg/Index'
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <>
    
    <h1 className="heading text-center my-5">Top Selling Products</h1>

      <div className="container">
        <div className="row text-center g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="product-card">
            <RenderImg src={t1} alt={"jeans"} className={"img-fluid"}/>
              <Link to="/Tshirt" className="btn btn-danger mt-2">
                T-Shirt
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="product-card">
              <RenderImg src={j1} alt={"jeans"} className={"img-fluid"}/>
              <Link to="/jeans" className="btn btn-danger mt-2">
                Jeans
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="product-card">
            <RenderImg src={s1} alt={"jeans"} className={"img-fluid"}/>
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
