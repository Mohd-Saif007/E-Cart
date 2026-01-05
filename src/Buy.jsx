import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Buy({setCart}) {

  const [payment, setPayment] = useState("upi")
    const nav=useNavigate()
  function placeOrder() {
    alert("Payment Method: " + payment + "\nOrder Placed Successfully!");
    nav("/contact");
    setCart([]);
  }

  return (
    <div className="container my-5 pt-5" >
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Select Payment Method</h4>

        <div className="form-check mb-2">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "upi"}
            onChange={() => setPayment("upi")}
          />
          <label className="form-check-label">UPI (Google Pay / PhonePe)</label>
        </div>

        <div className="form-check mb-2">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "card"}
            onChange={() => setPayment("card")}
          />
          <label className="form-check-label">Debit / Credit Card</label>
        </div>

        <div className="form-check mb-2">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "cod"}
            onChange={() => setPayment("cod")}
          />
          <label className="form-check-label">Cash On Delivery</label>
        </div>

        <div className="form-check mb-3">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            checked={payment === "net"}
            onChange={() => setPayment("net")}
          />
          <label className="form-check-label">Net Banking</label>
        </div>

        <button className="btn btn-success w-100" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  )
}
