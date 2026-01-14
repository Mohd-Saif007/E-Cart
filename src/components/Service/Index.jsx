import React from 'react'
import kashmir from "../../../public/images/Service/kashmir.jpg";
import delhi from "../../../public/images/Service/delhi.jpg";
import jodhpur from "../../../public/images/Service/jodhpur.jpg";
import RenderImg from "../RenderImg/Index"
export default function Index() {
  return (
    <>
    
    <h1 className="heading2 text-center my-5">Services</h1>

<div className="container">
  <div className="row text-center g-4">
    <div className="col-lg-4 col-md-6 col-12">
    <RenderImg src={kashmir}  alt={"Kashmir"}className={"img-fluid services-img"}/>

      <h4 className="mt-2">Kashmir</h4>
    </div>

    <div className="col-lg-4 col-md-6 col-12">
    <RenderImg src={delhi} alt={"Delhi"} className={"img-fluid services-img"}/>
      <h4 className="mt-2">Delhi</h4>
    </div>

    <div className="col-lg-4 col-md-6 col-12">
    <RenderImg src={jodhpur} alt={"jodhpur"} className={"img-fluid services-img"}/>
      <h4 className="mt-2">Jodhpur</h4>
    </div>
  </div>
</div>
    
    </>
  )
}
