import React from "react";
import TshirtData from "../../json/TshirtJson/Index";
import { useLocation } from "react-router-dom";
import ProductImage from "../ProductImg/Index";

export default function Index() {
  const loc = useLocation();
  const get = loc.state?.mydata;

  return (
    <>
      <div style={{ marginLeft: "35%", marginTop: "0.5%" }}>
        <div className="container">
          <div className="row">
            {TshirtData.map((users) =>
              users.tittle == get ? 
                <ProductImage src={users.image} alt={users.tittle} id={users.id}tittle={users.tittle}price={users.price}quantity={users.quantity} description ={users.description} style={{ maxHeight: "300px", objectFit: "contain" }}/>
               : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
