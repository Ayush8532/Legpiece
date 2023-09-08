import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(udata);
  const addddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="login-form">
        <div className="form login">
          <div className="form-content">
            <header>SIGNUP</header>
            <form>
              <div className="field input-field">
                <input
                  type="Name"
                  placeholder="Name"
                  onChange={addddata}
                  value={udata.name}
                  name="name"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={addddata}
                  value={udata.email}
                  name="email"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Phone Number"
                  onChange={addddata}
                  value={udata.mobile}
                  name="mobile"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  onChange={addddata}
                  value={udata.password}
                  name="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="password"
                  onChange={addddata}
                  value={udata.cpassword}
                  name="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button type="submit">Sign Up</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Already have a Account?
                <Link to="/login" className="link signup-link">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
