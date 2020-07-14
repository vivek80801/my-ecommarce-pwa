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
        <nav className="desktop">
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
              <li>
                <Link to="/adminlogin">
                  <h1>Admin</h1>
                </Link>
              </li>
            ) : (
              ""
            )}
            {value.auth ? (
              <li>
                <Link to="/usersprofile">
                  <h1>Edit Profile</h1>
                </Link>
              </li>
            ) : (
              ""
            )}
            {value.auth ? (
              <li onClick={value.handleLogout}>
                <Link to="/">
                  <h1 title="are you sure?">Log Out</h1>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
        <nav
          className={value.isRotated ? "rotate-mobile" : "mobile"}
          onClick={value.handleRotate}
        >
          <div className={value.isRotated ? "line-one-move" : "line-one"}></div>
          <div className={value.isRotated ? "line-two-move" : "line-two"}></div>
          <div
            className={value.isRotated ? "line-three-move" : "line-three"}
          ></div>
        </nav>
      </header>
      <div className={value.isRotated ? "drop-down active" : "drop-down"}>
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
            <li>
              <Link to="/adminlogin">
                <h1>Admin</h1>
              </Link>
            </li>
          ) : (
            ""
          )}
          {value.auth ? (
            <li onClick={value.handleLogout}>
              <Link to="/">
                <h1 title="are you sure to logout?">Log Out</h1>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
