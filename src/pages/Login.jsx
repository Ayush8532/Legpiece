import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const Login = () => {

  const[logdata,setData]=useState(
    {
      email:"",
      password:""
    });

    const adddata=(e)=>{
      const{name,value}=e.target;
      console.log(logdata)
      setData(()=>{
        return {
          ...logdata,
          [name]:value
        }
      })
    }
  return (
    <>
      <div className="login-form">  
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" name="email" onChange={adddata} value={logdata.value} className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  onChange={adddata}
                  value={logdata.password}
                  name="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link to="/register" className="link signup-link">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
