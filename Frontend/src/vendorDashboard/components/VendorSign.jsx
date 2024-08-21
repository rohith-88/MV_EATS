import React, { useState } from "react";
import VendorRegister from "./forms/VendorRegister";
import VendorLogin from "./forms/VendorLogin";
import NavBar from "./NavBar";

const VendorSign = ({ loginStateHandler }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLogin ? "login" : "signup"}`}>
            {isLogin ? "Vendor Login" : "Vendor Register"}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked={isLogin} />
            <input type="radio" name="slide" id="signup" checked={!isLogin} />
            <label
              for="login"
              className="slide login"
              onClick={() => setIsLogin(true)}
            >
              Login
            </label>
            <label
              for="signup"
              className="slide signup"
              onClick={() => setIsLogin(false)}
            >
              Register
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {isLogin ? (
              <VendorLogin loginStateHandler={loginStateHandler} />
            ) : (
              <VendorRegister />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default VendorSign;
