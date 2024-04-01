import React from 'react'
import  arrow_icon from '../Assets/arrow.png';
import  hero_image from '../Assets/new_collection_bg.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left" >
        <div>
            <h1>Weekend Party</h1>
          <p>OFFERS -60%</p>
        </div>
        <div className="banner-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="banner-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  )
}

export default Banner