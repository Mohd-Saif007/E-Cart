import React from 'react'
import  { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import dress2 from "../../../public/images/Slider/dress2.jpg";
import dress3 from "../../../public/images/Slider/dress3.jpg";
import dress4 from "../../../public/images/Slider/dress.jpg";
import RenderImg from '../RenderImg/Index'

export default function Index() {
    const [val, setVal] = useState(0);
    const dressData = [dress2, dress3, dress4];
  
    function next() {
      if (val === dressData.length - 1) setVal(0);
      else setVal(val + 1);
    }
  
    function pre() {
      if (val > 0) setVal(val - 1);
      else setVal(dressData.length - 1);
    }   
  return (
    <>
     <div className="main">
        <div className="left">
          <FaAngleDoubleLeft className="icon" onClick={pre} />
        </div>
        <div className="center">
          <RenderImg src={dressData[val]} alt="" className="img-fluid" />
        </div>
        <div className="right">
          <FaAngleDoubleRight className="icon" onClick={next} />
        </div>
      </div>
    </>
  )
}
