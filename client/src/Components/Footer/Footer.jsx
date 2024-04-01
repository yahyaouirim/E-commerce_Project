import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo11_bg.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='bg-dark text-white p-3'>
      <div className='row'>
        <div className="col-md-4">
          <div> <img style={{ width: "120px" }} src={footer_logo} alt="" /></div>
          <div className='d-flex gap-4'>
            <div className="bg-white rounded-5 p-3">
              <img src={instagram_icon} alt="" />
            </div>
            <div className="bg-white rounded-5 p-3">
              <img src={pintrest_icon} alt="" />
            </div>
            <div className="bg-white rounded-5 p-3">
              <img src={whatsapp_icon} alt="" />
            </div>
          </div>
        </div>
        <div className='col-md-4 align-item-center justify-content-center'>
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-md-4 justify-content-center align-item-center">
          <ul>
            <li>New Collections</li>
            <li>Womens Collections</li>
            <li>Kids Collections</li>
            <li>Men Collections</li>
            <li>Best Offers</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
