import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";

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
        <a href="https://github.com/vivek80801/my-ecommarce-pwa.git/">
          {" "}
          Give Star On Github{" "}
        </a>
        <Link to="/">
          <button
            className="btn"
            onClick={value.handleLogout}
            title="are you sure"
          >
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
