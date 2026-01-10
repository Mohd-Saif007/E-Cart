import React from "react";
import { useLocation } from "react-router-dom";
import ShoesData from "../json/ShoesJson";

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
                <div className="col-sm-6 mb-4" key={users.id}>
                  <div className="card p-4 shadow-sm">
                    <div className="row align-items-center g-4">
                      <div className="col-md-5 text-center">
                        <img
                          src={users.image}
                          className="img-fluid rounded"
                          style={{ maxHeight: "300px", objectFit: "contain" }}
                          alt=""
                        />
                      </div>

                      <div className="col-md-7">
                        <div className="card-body ps-md-3">
                          <h6 className="text-muted">ID: {users.id}</h6>
                          <h4 className="fw-bold">{users.tittle}</h4>

                          <h4 className="fw-bold text-success">
                            ₹ {users.price}
                          </h4>

                          <p>
                            <b>Stock:</b>
                            {users.quantity > 0 ? (
                              <span className="text-success">
                                {users.quantity} available
                              </span>
                            ) : (
                              <span className="text-danger">Out of stock</span>
                            )}
                          </p>

                          <p className="mt-2">{users.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
