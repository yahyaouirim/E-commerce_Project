import React from 'react';
// import './OffersBanner.css';
// import exclusive_image from "../Assets/women_bg.png";
import exclusive_image from "../Assets/logo-happy.png";


const OffersBanner = () => {
  return (
    <div className="mb-5 row d-flex justify-content-between align-item-start">
   
    <div className=" col-md-6 col-sm-12">
      <img  style={{width:"500px", height:"350px", marginLeft:"50px"}} src={exclusive_image} alt="" />
    </div>
    <div className=" col-md-6  col-sm-12 d-flex flex-column gap-3 align-item-center">
      <h1 style={{color:"#16216A", fontSize:"150px"}}>-50%</h1>
      <h1>Offers For You</h1>
      <p style={{color:"#16216A", fontSize:"30px"}}>ONLY ON BEST SELLERS PRODUCTS</p>
      <button className='btn  border rounded-pill w-50 fw-bold fs-3 bg-warning'>Check Now</button>
    </div>
  </div>  )
}

export default OffersBanner