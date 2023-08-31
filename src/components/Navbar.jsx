import React from 'react'
import '../css/navbar.css'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {  
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
  <div className="container-fluid">
    <img class="img-fluid logo-image ml-5 m-" width="20%" height="10%" src={Logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/aboutus' className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to='/shop' className="nav-link">Shop</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/checkout' className="dropdown-item">Checkout</Link></li>
            <li><Link to='/cart' className="dropdown-item">Cart</Link></li>
            <li><a className="dropdown-item" href="#">My Account</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-shopping-bag"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Register
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar