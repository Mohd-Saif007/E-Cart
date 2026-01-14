import React from "react";
import aboutImg from "../../../public/images/Slider/dress.jpg";

export default function Index() {
  return (
    <div className="container py-5 mt-5 pt-4">
      <div className="row align-items-center">

        {/* Left Text */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h2 className="fw-bold mb-3">About Our Company</h2>
          <p className="text-muted">
            We are a fast-growing e-commerce and travel service company providing
            high quality products and premium tour services across India.
          </p>
          <p className="text-muted">
            Our mission is to give customers the best shopping and travelling
            experience with affordable prices and trusted service.
          </p>
          <button className="btn btn-danger mt-3">Read More</button>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <RenderImg
            src={aboutImg}
            alt="about"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
  );
}
  