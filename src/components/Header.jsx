import React from "react";
import Meat1 from "../assets/Meat1.png";
import Meat2 from "../assets/meat2.jpg";
import Meat3 from "../assets/meat3.jpg";
import Meat4 from "../assets/meat4.jpg";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="parentClass">
          <div className="subClass">
            <div className="heading">
              <p className="first">Fresh Chicken Mutton & Fish</p>
              <Link to='/shop'>
              <button className="header-button">Shop Now {">"}</button>
              </Link>
              <p className="second">Home Delivery</p>
              <p className="second2">Across Dehradun</p>
              <p className="third">First order <span className="thirdSpan">get Rs.50/- off</span></p>
              <p className="fourth">use code</p>
              <p className="fifth"> Welcome</p>
            </div>
            <div className="imageHeading">
              <img className="d-block img-fluid" src={Meat1} alt="" />
            </div>
          </div>
        </div>
        <div className="subChildclass ">
          <div className="subChildclasses">
            <div className="imageArea">
              <img src={Meat2} alt="" />
            </div>
            <div className="headingArea">
              <h1 className="heading">Order Time 9:00am-6:30pm</h1>
              <p className="subHeading">
                Tuesday open till 2:00pm only. Minimum Order Value 300/-
              </p>
            </div>
          </div>
          <div className="subChildclasses">
            <div className="imageArea">
              <img src={Meat3} alt="" />
            </div>
            <div className="headingArea">
              <h1 className="heading">
                Professional Cut Size by Master Jhatka Butchers
              </h1>
              <p className="subHeading">Clean & Clear Cuts</p>
            </div>
          </div>
          <div className="subChildclasses">
            <div className="imageArea">
              <img src={Meat4} alt="" />
            </div>
            <div className="headingArea">
              <h1 className="heading">
                Free Delivery upto 3kms From Clock Tower
              </h1>
              <p className="subHeading">
                {" "}
                We Guarantee Delivery time within 3kms only. For other
                locations, as per Load and slot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
