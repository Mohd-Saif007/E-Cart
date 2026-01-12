import React from "react";
import { useLocation } from "react-router-dom";
import ShoesData from "../json/ShoesJson";
import ProductImage from "../components/RenderImg";


export default function ShoesDetail() {
  const loc = useLocation();
  const get = loc.state?.mydata;

  return (
    <>
      <div style={{ marginLeft: "35%" }}>
        <div className="container">
          <div className="row">
            {ShoesData.map((users) =>
              users.tittle == get ? (
                <ProductImage src={users.image} alt={users.tittle} id={users.id}tittle={users.tittle}price={users.price}quantity={users.quantity} description ={users.description}/>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
