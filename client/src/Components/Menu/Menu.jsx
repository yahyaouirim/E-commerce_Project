import React, { useContext, useRef, useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo11_bg.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Menu = (props) => {

  let [menu,setMenu] = useState("womens");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='nav'>
      <Link to='/' onClick={()=>{setMenu("home")}} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu me-auto">
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{ textDecoration: 'none', color:"white" }} className={menu==="womens"?"active":<></>}>{props.womens}</Link></li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none', color:"white" }} className={menu==="mens"?"active":<></>}>{props.men}</Link></li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none' , color:"white"}} className={menu==="kids"?"active":<></>}>{props.kids}</Link></li>
        <li onClick={()=>{setMenu("adminpanel")}}><Link to='/adminpanel/*' style={{ textDecoration: 'none' , color:"white"}} className={menu==="adminpanel"?"active":<></>}>{props.adminpanel}</Link></li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Menu