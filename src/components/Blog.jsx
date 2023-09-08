import React from "react";
import "../css/blog.css";
import Meat1 from "../assets/meat8.jpg";
import Meat2 from "../assets/meat9.jpg";
import Meat3 from "../assets/meat10.jpg";
import { blogdata } from "./blogdata";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blogHeading">
          <h1>Exotic Food Blogs !</h1>
          <p>Learn Amazing Recipes & Food Tips !</p>
        </div>
        <div className="blogList">

        {blogdata.map((item)=>(
          <div className="blogCart"  key={item.id}>
          <div className="food-card">
            <img src={item.img} alt="Chicken Biryani" />
            <h3>{item.date}</h3>
            <p>{item.name}</p>
            <Link to={`/blog/${item.id}`}> 
            <button>Read More</button>
            </Link>
          </div>
        </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
