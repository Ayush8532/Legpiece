import React from "react";
import Counter from "./Counter";
import "../css/counter.css";
const Counterbox = () => {
  return (
    <div>
      <div className="appCounter">
        <div className="singleCounter">
          <Counter targetNumber={999} duration={1000} />
          <p style={{"color":"red","fontWeight":"700","fontSize":"22px"}}>Customer's</p>
        </div>
        <div className="singleCounter">
          <Counter targetNumber={86} duration={1000} />
          <p style={{"color":"green","fontWeight":"700","fontSize":"22px"}}>Today Orders</p>
        </div>
        <div className="singleCounter">
          <Counter targetNumber={65} duration={1000} />
          <p style={{"color":"skyblue","fontWeight":"700","fontSize":"22px"}}>Product Mix</p>
        </div>
        <div className="singleCounter">
          <Counter targetNumber={1786} duration={1000} />
          <p style={{"color":"yellow","fontWeight":"700","fontSize":"22px"}}>Location Served</p>
        </div>
      </div>
    </div>
  );
};

export default Counterbox;
