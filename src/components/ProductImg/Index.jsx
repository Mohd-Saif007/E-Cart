import React from "react";
import RenderImg from '../RenderImg/Index'
export default function Index({ style, id,tittle,price,quantity ,description ,src,alt}) {
  return (
    <div className="col-sm-6 mb-4" >
      <div className="card p-4 shadow-sm">
        <div className="row align-items-center g-4">
          <div className="col-md-5 text-center">
            <RenderImg style={style} alt={alt} src={src} />
          </div>

          <div className="col-md-7">
            <div className="card-body ps-md-3">
              <h6 className="text-muted">ID: {id}</h6>
              <h4 className="fw-bold">{tittle}</h4>

              <h4 className="fw-bold text-success">₹ {price}</h4>

              <p>
                <b>Stock:</b>{" "}
                {quantity > 0 ? (
                  <span className="text-success">
                    {quantity} available
                  </span>
                ) : (
                  <span className="text-danger">Out of stock</span>
                )}
              </p>

              <p className="mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
