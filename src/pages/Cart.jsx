import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cartData, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  },[cartData]);

  function updateTotal() {
    let tot = 0;
    cartData.map((mydata) => (tot += mydata.price * mydata.quantity));
    setTotal(tot);
  }

  function QuantityChange(data, x) {
    var ind;
    cartData.forEach((products, index) => {
      if (products.tittle == data.tittle) {
        ind = index;
      }
    });

    cartData[ind].quantity += x;

    if (cartData[ind].quantity == 0) {
      cartData[ind].quantity = 1;
    }
    setCart([...cartData]);
  }

  function del(re) {
    let newCart = cartData.filter((item, i) => i !== re);
    setCart(newCart);
  }

  return (
    <div className="container my-5 mt-5 pt-5">


      {cartData.length == 0 ? (
        <h1 className="text-center">Cart is empty</h1>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="table-responsive d-none d-md-block">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {cartData.map((products, index) => (
                  <tr key={index}>
                    <td>
                      <img src={products.image} className="cartimg" alt="" />
                    </td>
                    <td>{products.tittle}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => QuantityChange(products, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{products.quantity}</span>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => QuantityChange(products, +1)}
                      >
                        +
                      </button>
                    </td>
                    <td>${products.price * products.quantity}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => del(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="d-md-none">
            {cartData.map((products, index) => (
              <div className="card mb-3 shadow" key={index}>
                <div className="row g-0 align-items-center">
                  <div className="col-4 text-center">
                    <img
                      src={products.image}
                      className="img-fluid p-2"
                      style={{ height: "80px", objectFit: "contain" }}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body p-2">
                      <h6>{products.tittle}</h6>
                      <p className="mb-1">
                        ${products.price * products.quantity}
                      </p>

                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => QuantityChange(products, -1)}
                        >
                          -
                        </button>
                        <span className="mx-2">{products.quantity}</span>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => QuantityChange(products, +1)}
                        >
                          +
                        </button>

                        <button
                          className="btn btn-danger btn-sm ms-auto"
                          onClick={() => del(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="row mt-4">
            <div className="col-md-8"></div>
            <div className="col-md-4 text-end">
              <h4>Total : {total}</h4>
              <Link to="/contact" className="btn btn-success w-100">
                Buy
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
