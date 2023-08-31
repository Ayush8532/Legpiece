import React from 'react'
import '../css/footer.css'
import footerimg1 from '../assets/meat8.jpg'
import footerimg2 from '../assets/meat9.jpg'
import footerimg3 from '../assets/meat10.jpg'
import footerimg4 from '../assets/meat11.jpg'
import Subfooter from './Subfooter'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer class="footer">
  <div class="footer-section">
    <p>Call Now</p>
    <h2>+91 9897099921</h2>
    <h6>Get Special Email Offers</h6>   
    <div className='underline'></div>
    <input type="text"placeholder='Your email' /><button>Join Us</button>
  </div>
  <div class="footer-section">
    <h3>Our Services</h3>
    <div className="underline"></div>
    <ul>
     <Link to='/'>
     <li to='/' li>My Account</li>
     </Link>  
     
      <li>Cart</li>
      <li>Shop</li>
      <li>Wishlist</li>
    </ul>
  </div>
  <div class="footer-section">
    <h3>Our Story</h3>
    <div className="underline"></div>
    <ul>
      <li>Blog</li>
      <li>About Us</li>
      <li>Tearms and Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
  <div class="footer-section">
    <h3>Our Images</h3>
    <div className="underline"></div>
    <img src={footerimg1} alt="Image 1"/>
    <img src={footerimg2} alt="Image 2"/>
    <img src={footerimg3} alt="Image 3"/>
    <img src={footerimg4} alt="Image 4"/>
    <img src={footerimg1} alt="Image 5"/>
    <img src={footerimg2} alt="Image 6"/>
  </div>
</footer>
<Subfooter/>
    </>
  )
}

export default Footer