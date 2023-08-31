import React from "react";
import '../css/services.css'
import logo1 from "../assets/service1.jpg";
import logo2 from "../assets/service2.jpg";
import logo3 from "../assets/service3.jpg";
import logo4 from "../assets/service4.jpg";

const Services = () => {
  return (
    <>
      <div className="servicesDiv">
        <div className="services">
          <p className="mainPara">Freshly Packed & Delivered</p>
          <p className="subPara">
            Happiness is a simple process in Life. Follow it !!!
          </p>
        </div>
        <div className="container">
          <div className="serviceList">
            <img src={logo1} alt="" />
            <p className="serviceHeading">Choose Meat</p>
          </div>
          <div className="serviceList">
            <img src={logo2} alt="" />
            <p className="serviceHeading">Get At Home</p>
          </div>
          <div className="serviceList">
            <img src={logo3} alt="" />
            <p className="serviceHeading">Receipe To Cook</p>
          </div>
          <div className="serviceList">
            <img src={logo4} alt="" />
            <p className="serviceHeading">Eat With love</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
