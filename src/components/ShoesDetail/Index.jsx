import React from "react";
import { useLocation } from "react-router-dom";
import ShoesData from "../../json/ShoesJson/Index";
import ProductImage from "../ProductImg/Index";


export default function Index() {
  const loc = useLocation();
  const get = loc.state?.mydata;

  return (
    <>
      <div style={{ marginLeft: "35%" }}>
        <div className="container">
          <div className="row">
            {ShoesData.map((users) =>
              users.tittle == get ? (
                <ProductImage src={users.image} alt={users.tittle} id={users.id}tittle={users.tittle}price={users.price}quantity={users.quantity} description ={users.description}
                style={{ maxHeight: "300px", objectFit: "contain" }} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
