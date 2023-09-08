import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

const Cardproduct = ({ img, title }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="Card Image 1" />
        <h2 className="card-title">{title}</h2>
        <Link to='/shop' style={{"textDecoration":"none"}}>
          <button className="card-button">Order Now</button>
        </Link>
      </div>
    </>
  );
};

export default Cardproduct;
