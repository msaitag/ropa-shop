import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pinterest_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
import heart_icon from '../Assests/heart-icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>ROPA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Created with&nbsp;&nbsp;<img src={heart_icon} alt=""/>&nbsp;&nbsp;by MSAG</p>
      </div>
    </div>
  )
}

export default Footer
