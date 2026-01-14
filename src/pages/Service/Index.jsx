import React from "react";
import kashmir from "../../../public/images/Service/kashmir.jpg";
import delhi from "../../../public/images/Service/delhi.jpg";
import jodhpur from "../../../public/images/Service/jodhpur.jpg";
import RenderImg from "../../components/RenderImg/Index"
export default function Index() {
  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center fw-bold mb-5">Our Premium Services</h2>

      <div className="row">
        {/* Kashmir */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow h-100">
            <RenderImg src={kashmir} className="card-img-top" alt="kashmir" />
            <div className="card-body text-center">
              <h5 className="card-title">Kashmir Tour</h5>
              <p className="card-text">
                Enjoy beautiful mountains, snow & unforgettable experience.
              </p>
              <button className="btn btn-danger">Explore</button>
            </div>
          </div>
        </div>

        {/* Delhi */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow h-100">
            <RenderImg src={delhi} className="card-img-top" alt="delhi" />
            <div className="card-body text-center">
              <h5 className="card-title">Delhi Guide</h5>
              <p className="card-text">
                Explore historical places with our professional guides.
              </p>
              <button className="btn btn-danger">Explore</button>
            </div>
          </div>
        </div>

        {/* Jodhpur */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow h-100">
            <RenderImg src={jodhpur} className="card-img-top" alt="jodhpur" />
            <div className="card-body text-center">
              <h5 className="card-title">Jodhpur Trip</h5>
              <p className="card-text">
                Experience royal heritage and amazing desert safari.
              </p>
              <button className="btn btn-danger">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
