import React from "react";
import "../css/card.css"
import Cardproduct from './Cardproduct.jsx'
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const Card = () => {
  return (
    <>
<div className="card-container">
  <Cardproduct img={product1} title="SUPER PREMIUM QUALITY BABY GOAT MEAT"/>  
  <Cardproduct img={product2} title="SUPER PREMIUM QUALITY FARM CHICKEN"/>  
  <Cardproduct img={product3} title="SUPER PREMIUM QUALITY BREAST BONELESS"/>  
  <Cardproduct img={product4} title="SUPER PREMIUM QUALITY THIGH BONELESS"/>  
</div>
    </>
  );
};

export default Card;