import React from "react";
import Jeansdata from "../json/JeansJson";
import ProductImage from "../components/RenderImg";

import { useLocation } from "react-router-dom";

export default function JeansDetail() {
  const loc = useLocation();
  const get = loc.state?.mydata;
  return (
    <>
      <div style={{ marginLeft: "35%" }}>
        <div className="container">
          <div className="row">
            {Jeansdata.map((users) =>
              users.tittle == get ? 
                <ProductImage src={users.image} alt={users.tittle} id={users.id}tittle={users.tittle}price={users.price}quantity={users.quantity} description ={users.description}/>
                : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
