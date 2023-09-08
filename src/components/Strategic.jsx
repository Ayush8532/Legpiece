import React from 'react'
import '../css/strategic.css'
import aboutImg from '../assets/about.jpg'
import { Link } from 'react-router-dom'

const Strategic = () => {
  return (
    <>
        <div className="about-us-container">
      <div className="about-details">
        <h2>Strategic Team</h2>
        <h4>We are committed to provide Pure, Fresh & Hygienic Quality ever.</h4>
        <p>
        We are a team of Team of seasoned Professional with solid experince of providing best services with Brands like Adani Wilmar, Zydus, Reliance, and ICICI. We know that quality is the Top most priority in any Customer Centric business. We endeavor to provide great products at best prices to our Customers. We value our Customer's Choice at First Place.
        </p>
        <Link to='/aboutus'>
        <button>Read More</button>
        </Link>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="About Us" />
      </div>
    </div>
    </>
  )
}

export default Strategic