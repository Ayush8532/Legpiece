import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/productdesc.css";
import { products } from "../data";
import Footer from "./Footer";

function Productdesc() {
  const { id } = useParams("");
  // console.log(id);
  const [inddata, setInddata] = useState([]);
  console.log(inddata);

  const getinddata = async () => {
    const res = await fetch(`/item/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    // console.log(data)
    if (res.status !== 201) {
      console.log("no data");
    } else {
      console.log("getData");
      setInddata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
  };
  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="shopHeader">
        <h1>Product Detail</h1>
        {inddata.name && (
          <p>
            Home {">>"}
            {inddata.category}
            {">>"}
            {inddata.name}
          </p>
        )}
      </div>
      <div className="productcard-wrapper">
        <div className="procard">
          {inddata && <img src={inddata.img} alt="" />}
        </div>
        <div className="product-content">
          {getinddata && (
            <p style={{ fontSize: "2rem", fontWeight: "400" }}>
              {inddata.name}
            </p>
          )}
          {inddata && inddata.price && (
            <p
              className="price"
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "grey",
                marginTop: "0",
              }}
            >
              ₹{inddata.price.half ? `${inddata.price.half}-` : ""}₹
              {inddata.price.full}
            </p>
          )}
          {inddata && (
            <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              {inddata.subHead}
            </p>
          )}
          {inddata && (
            <p style={{ fontSize: "1rem", fontWeight: "400", color: "grey" }}>
              Fresh and clean Chicken, Mutton, Fish, and ready-to-cook snacks by
              legpiece.in online store. Buy mutton online in Dehradun | Best
              Meat online store. Fresh Raw Juicy and tender Meat in Dehradun
              with free home delivery.
            </p>
          )}
          {inddata && (
            <p style={{ fontSize: "1rem", fontWeight: "400", color: "grey" }}>
              Category:{" "}
              <span style={{ color: "black" }}>{inddata.category}</span>
            </p>
          )}
          <div className="purchase-info">
            <button
              onClick={removeItem}
              style={{
                border: "1px solid grey",
                padding: "4px",
                width: "30px",
              }}
            >
              -
            </button>
            <div>{count}</div>
            <button
              onClick={addItem}
              style={{
                border: "1px solid grey",
                padding: "4px",
                width: "30px",
              }}
            >
              +
            </button>
            <button type="button" className="productbtn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
          </div>

          <div className="social-links">
            <p>Share At:</p>
            <a className="productIcon" href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="productIcon" href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="productIcon" href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="productIcon" href="/">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productdesc;
