import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
  const token = localStorage.getItem("auth-token");
  const navigate = useNavigate();
  const {products} = props;
  const {addToCart} = useContext(ShopContext);
  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={products.image} alt="img" />
          <img src={products.image} alt="img" />
          <img src={products.image} alt="img" />
          <img src={products.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={products.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{products.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${products.old_price}</div>
          <div className="productdisplay-right-price-new">${products.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
         {products.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        {/* {token ? <button onClick={()=>{addToCart(products.id)}}>ADD TO CART</button>
 : (
        <div className='d-flex p-5'>
          <button  className='btn btn-primary' onClick={handleLogin}>ADD TO CART</button>
        </div>
      )} */}
         <button onClick={()=>{addToCart(products.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> {products.category}</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
