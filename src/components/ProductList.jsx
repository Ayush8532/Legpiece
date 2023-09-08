import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../css/productlist.css";

function ProductList({ title, products }) {
  const starStyle = {
    fontSize: "1rem",
    color: "yellow",
    marginLeft: "5px",
  };
  return (
    <div className="proList">
      {products.map((item) => {
        return (
          <NavLink to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
            <div className="productBox" key={item.id}>
              <img src={item.img} alt={item.name} />
              <p className="productName">{item.name}</p>
              <div className="star-container">
                <FontAwesomeIcon icon={faStar} style={starStyle} />
                <FontAwesomeIcon icon={faStar} style={starStyle} />
                <FontAwesomeIcon icon={faStar} style={starStyle} />
                <FontAwesomeIcon icon={faStar} style={starStyle} />
                <FontAwesomeIcon icon={faStar} style={starStyle} />
              </div>
              {item.price.half && (
                <p className="price">
                  ₹{item.price.half}-₹{item.price.full}
                </p>
              )}
              {!item.price.half && <p className="price">₹{item.price.full}</p>}
              <button>Add to Cart</button>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default ProductList;
