import React from "react";
import "../css/subfooter.css";

const Subfooter = () => {
  return (
    <>
      <footer className="subfooter">
        <div className="social-icons">
          <div className="firstMedia">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="firstMedia">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="firstMedia">

          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          </div>
        </div>
        <p className="copyright">Copyright 2022 © KFC India <span style={{"color":"#ed4f4f"}}>(Legpiece India |Meat Shop E-com)</span></p>
        Designed By Brand Bhasha
      </footer>
    </>
  );
};

export default Subfooter;
