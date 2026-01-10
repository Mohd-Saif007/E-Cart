import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    message: ""
  });

  const Navigator = useNavigate();

  function handleUserDetails(fieldName, value) {
    setUserDetails({
      ...userDetails,
      [fieldName]: value
    });
  }

  function next() {
    const { name, email, message } = userDetails;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("⚠️ Please fill all input boxes before sending the message!");
    } else {
      alert("✅ Order Confirmed!");
      Navigator("/buy");
    }

    
    setUserDetails({
      name: "",
      email: "",
      address: "",
      message: ""
    });
  }

  return (
    <div className="container py-5 mt-5 pt-4">
      <h2 className="text-center fw-bold mb-2">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We are always ready to help you
      </p>

      <div className="row justify-content-center">

        {/* Left Info */}
        <div className="col-lg-5 col-md-6 mb-4">
          <div className="card shadow p-4 h-100">
            <h4 className="mb-3">Get in Touch</h4>
            <p>📍 Jodhpur, Rajasthan</p>
            <p>📧 myshop@gmail.com</p>
            <p>📞 +91 0000000000</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-lg-7 col-md-6">
          <div className="card shadow p-4">

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={userDetails.name}
                onChange={(e) => handleUserDetails("name", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={userDetails.email}
                onChange={(e) => handleUserDetails("email", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Address"
                value={userDetails.address}
                onChange={(e) => handleUserDetails("address", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                value={userDetails.message}
                onChange={(e) => handleUserDetails("message", e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-danger w-100" onClick={next}>
              Send Message
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
