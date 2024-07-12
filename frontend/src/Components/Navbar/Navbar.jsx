import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = () => {
      menuRef.current.classList.toggle('nav-menu-visible');
      document.getElementById('nav-dropdown').classList.toggle('open');
    }
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ROPA</p>
      </div>
      <img id='nav-dropdown' className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop");dropdown_toggle()}}><Link style={{textDecoration: 'none'}} to='/'>Shop </Link>{menu === "shop" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens");dropdown_toggle()}}><Link style={{textDecoration: 'none'}} to='/mens'>Men </Link>{menu === "mens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens");dropdown_toggle()}}><Link style={{textDecoration: 'none'}} to='/womens'>Women </Link>{menu === "womens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids");dropdown_toggle()}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids </Link>{menu === "kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar
