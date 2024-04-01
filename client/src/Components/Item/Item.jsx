import React, { useContext } from "react";
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const {addToCart} = useContext(ShopContext);

  return (
<div class="card shadow" style={{width:"17rem"}}>
<Link to={`/product/${props.id}`}><img class="card-img-top" onClick={window.scrollTo(0, 0)} src={props.image} alt="products"/></Link>
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">{props.name}</h5>
    <div className="d-flex justify-content-around align-item-center">
      <p class="card-text text-danger fw-bold">${props.new_price}</p>
      <p class="card-text text-decoration-line-through">${props.old_price}</p>
    </div>
    <button className="btn btn-danger" onClick={()=>{addToCart(props.id)}}>ADD TO CART</button>
  </div>
</div>
  )
}

export default Item
  // <div className='item'>
      {/* <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img class="card-img-top" onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link> */}
      // <p>{props.name}</p>
      // <div className="item-prices">
        {/* <div className="item-price-new">${props.new_price}</div> */}
        {/* <div className="item-price-old">${props.old_price}</div> */}
      {/* </div> */}
    // </div>
