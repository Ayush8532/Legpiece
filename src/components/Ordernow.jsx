import React from "react";
import "../css/ordernow.css";
import { Link } from "react-router-dom";
const Ordernow = () => {
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-card"></div>
        </div>
        <div className="a-right">
          <p className="a-sub">
            Order Now
          </p>
          <p className="a-contact">
          98970-99921
          </p>
          <p className="a-desc">
          You are most welcome to place order with us with 100% confidence. We assure you the BEST & SAFEST meat delivery in Town. Our motto is High Quality & Freshness
          </p>
          <Link to='/shop'>
          <button className="a-download">
              Buy Now
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ordernow;
