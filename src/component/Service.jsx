import React from 'react'
import kashmir from "../../public/image/Service/kashmir.jpg";
import delhi from "../../public/image/Service/delhi.jpg";
import jodhpur from "../../public/image/Service/jodhpur.jpg";
export default function Service() {
  return (
    <>
    
    <h1 className="heading2 text-center my-5">Services</h1>

<div className="container">
  <div className="row text-center g-4">
    <div className="col-lg-4 col-md-6 col-12">
    <img src={kashmir} className="img-fluid services-img" alt="kashmir" />

      <h4 className="mt-2">Kashmir</h4>
    </div>

    <div className="col-lg-4 col-md-6 col-12">
    <img src={delhi} className="img-fluid services-img" alt="delhi" />
      <h4 className="mt-2">Delhi</h4>
    </div>

    <div className="col-lg-4 col-md-6 col-12">
<img src={jodhpur} className="img-fluid services-img" alt="jodhpur" />
      <h4 className="mt-2">Jodhpur</h4>
    </div>
  </div>
</div>
    
    </>
  )
}
