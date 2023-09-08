import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../css/about.css";
import aboutlogo1 from "../assets/Aboutlogo1.webp";
import aboutlogo2 from "../assets/aboutlogo2.webp";
import aboutlogo3 from "../assets/aboutlogo3.webp";
import aboutlogo4 from "../assets/Aboutlogo4.webp";
import aboutCard1 from "../assets/aboutCard.png";
import aboutCard2 from "../assets/aboutCard2.webp";
import aboutCard3 from "../assets/aboutCard3.webp";
import about from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="aboutHeader">
        <h1>About Us</h1>
        <p>Home {">>"} About Us</p>
      </div>
      <div className="aboutItems">
        <div className="aboutImg">
          <img src={about} alt="" />
        </div>
        <div className="aboutDetails">
          <h1>About MeatVeat (By Legpiece India)</h1>
          <p className="about-mainPara">
            We are committed team of seasoned Industry Professional who
            endeavour to bring Pure & Fresh Meat with Ultra Hygiene & Safety
            Standards. We assure our customers that we shall never compromise on
            Quality.
          </p>
          <div className="underline"></div>
          <p className="about-subPara">
            We have curated very selective vendors who procure naturally reared
            Live Stock and used approved mechanism & process to deliver highest
            quality meat at your door-step.
          </p>
          <div className="aboutIcons">
            <div className="individualIcon">
              <img src={aboutlogo1} alt="" />
              <div className="individualIconDesc">
                <p style={{"fontSize":"1.5rem","fontWeight":"700"}}>Hygienic and Healthy</p>
                <p style={{"fontSize":"1rem","fontWeight":"200","color":"grey"}}>Pure & Fresh with Super Hygiene standards</p>
              </div>
            </div>
            <div className="individualIcon">
              <img src={aboutlogo2} alt="" />
              <div className="individualIconDesc">
                <p style={{"fontSize":"1.5rem","fontWeight":"700"}}>Easy to Cook</p>
                <p style={{"fontSize":"1rem","fontWeight":"200","color":"grey"}}>Young live stock gives meat that's easy to cook</p>
              </div>
            </div>
            <div className="individualIcon">
              <img src={aboutlogo3} alt="" />
              <div className="individualIconDesc">
                <p style={{"fontSize":"1.5rem","fontWeight":"700"}}>Farm Fresh Meats</p>
                <p style={{"fontSize":"1rem","fontWeight":"200","color":"grey"}}>Hygience & Freshness is Top Priority</p>
              </div>
            </div>
            <div className="individualIcon">
              <img src={aboutlogo4} alt="" />
              <div className="individualIconDesc">
                <p style={{"fontSize":"1.5rem","fontWeight":"700"}}>Mechanised Cut</p>
                <p style={{"fontSize":"1rem","fontWeight":"200","color":"grey"}}>Not restricted to any rituals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutcardContainer">
        <div className="about-Card">
        <img src={aboutCard1} alt="" />
            <h2>Our Mission</h2>
            <p>To serve people with Pure, Fresh, Hygienic Meat products and thus bring Health & longevity in long run to our customers.</p>
        </div>
        <div className="about-Card">
        <img src={aboutCard2} alt="" />
            <h2>Our History</h2>
            <p>Our Core Team which has a huge success legacy across domains like Grocery, Vegetables, Fruits, Organic, Natural, Finance, IT & Pharmaceuticals</p>
        </div>
        <div className="about-Card">
        <img src={aboutCard3} alt="" />
            <h2>What we do</h2>
            <p>We serve our Customer with Passion in our work & Happiness in our Mind. We strive to achive excellence in all our endeavors.</p>
        </div>
        </div>
      <Contact />
      <Footer />
    </>
  );
};

export default AboutPage;
