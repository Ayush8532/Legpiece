import React from "react";
import "./cart.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <>
      <div className="cartHeader">
        <h1>Cart</h1>
        <p>Home {">>"}Cart</p>
      </div>
      <div className="buynow_section">
        <div className="buynow_container">
          <div className="left_buy">
            <h1>butnoe</h1>
            <span className="leftbuyprice">Price</span>
            <div className="item_containert">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOgmg1_iqS2jNpgF3Q2Wdo13a7ZUDOsgCh6NibgeZ&sx" alt="" />
              <div className="item_details">
                <h3>Chicken leg piece</h3>
                <h3>category</h3>
                <h3 className="diffrentprice">₹400</h3>
                <Option/>
              </div>
              <h3 className="item_price">₹400</h3>
            </div>
            <Subtotal/>
          </div>
        </div>

      </div>
      <Footer/>
      </>
  );
};

export default Cart;
