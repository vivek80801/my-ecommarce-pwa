import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";

const Navbar = () => {
  const value = useContext(ProductContext);
  return (
    <React.Fragment>
      <header>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul>
            {!value.auth ? (
              <li>
                <Link to="/">
                  <h1>Home</h1>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/">
                  <h1>Products</h1>
                </Link>
              </li>
            )}
            {value.auth ? (
              <li>
                <Link to="/cart">
                  <h1>Cart</h1>
                </Link>
              </li>
            ) : (
              ""
            )}
            {value.auth ? (
              <li onClick={value.handleLogout}>
                <Link to="/">
                  <h1>Log Out</h1>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
