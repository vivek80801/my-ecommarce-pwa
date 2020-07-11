import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";

const ThankYou = () => {
  const value = useContext(ProductContext);
  return (
    <div
      className="model-pay"
      style={value.modelUserInfo ? { display: "block" } : { display: "none" }}
    >
      <button className="btn closebtn" onClick={value.handleModelUserInfo}>
        &times;
      </button>
      <h1>Share this website if you like it</h1>
      <div className="model-pay-data">
        Thank You for visiting!
        <br />
        <Link to="/">
          <button className="btn" onClick={value.handleLogout}>
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
