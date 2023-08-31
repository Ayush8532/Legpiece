import React from "react";
import "../css/card.css"

const Cardproduct = ({img,title}) => {
  return (
    <>
      <div class="card">
        <img src={img} alt="Card Image 1" />
        <h2 class="card-title">{title}</h2>
        <button class="card-button">Order Now</button>
      </div>
    </>
  );
};

export default Cardproduct;
