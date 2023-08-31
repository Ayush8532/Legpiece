import React from "react";
import "../css/blog.css";
import Meat1 from "../assets/meat8.jpg";
import Meat2 from "../assets/meat9.jpg";
import Meat3 from "../assets/meat10.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blogHeading">
          <h1>Exotic Food Blogs !</h1>
          <p>Learn Amazing Recipes & Food Tips !</p>
        </div>
        <div className="blogCart">
          <div class="food-card">
            <img src={Meat1} alt="Chicken Biryani" />
            <h3>Oct 27,2016</h3>
            <p>Make Delicious Chicken Biryani!!</p>
            <button>Read More</button>
          </div>
          <div class="food-card">
            <img src={Meat2} alt="Achari Mutton Curry" />
            <h3>Oct 27,2016</h3>
            <p>Achari Mutton Receipe- Easy & Tasty</p>
            <button>Read More</button>
          </div>
          <div class="food-card">
            <img src={Meat3} alt="Chicken Handi" />
            <h3>Oct 27,2016</h3>
            <p>Chicken Handi Recipe -For Chicken lovers</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
