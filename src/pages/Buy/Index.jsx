import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index({ setCart, cartData }) {
  const [payment, setPayment] = useState("upi");

  function handleChange(method) {
    setPayment(method);
  }
  const Navigator = useNavigate();
  function placeOrder() {
    if (cartData.length === 0) {
      alert("❌ Your cart is empty. Please add items before placing order.");
      return;
    }

    alert("Payment Method: " + payment + "\nOrder Placed Successfully!");
    Navigator("/home");
    setCart([]);
  }

  return (
    <div className="container my-5 pt-5">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Select Payment Method</h4>

        <div className="form-check mb-2">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "upi"}
            onChange={() => handleChange("upi")}
          />
          <label className="form-check-label">UPI (Google Pay / PhonePe)</label>
        </div>

        <div className="form-check mb-2">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "card"}
            onChange={() => handleChange("card")}
          />
          <label className="form-check-label">Debit / Credit Card</label>
        </div>

        <div className="form-check mb-2">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "cod"}
            onChange={() => handleChange("cod")}
          />
          <label className="form-check-label">Cash On Delivery</label>
        </div>

        <div className="form-check mb-3">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "net"}
            onChange={() => handleChange("net")}
          />
          <label className="form-check-label">Net Banking</label>
        </div>

        <button className="btn btn-success w-100" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
