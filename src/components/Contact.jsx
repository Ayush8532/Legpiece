import React from "react";
import Contactimg from "../assets/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <p>
            <i className="fas fa-map-marker-alt"></i>Legpiece India LLP, No1 Meat
            Based Start-up
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 70 Rajpur Road Near Madhuban,
            Dehradun
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>+91 98970-99921
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>mylegpiece@gmail.com
          </p>
        </div>
        <div className="contact-form">
          <h2>Send Your Request</h2>
          <p>we are committed to total transparency about our products.</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact Number" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
