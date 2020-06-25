import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./Context";
import ModelForUserName from "./ModelForUserName";

const LogIn = () => {
  const value = useContext(ProductContext);

  return (
    <React.Fragment>
      <div className="contain">
        <div className="container">
          <ModelForUserName />
          <span
            style={{
              color: "var(--lightRed)",
            }}
          >
            {value.message}
          </span>
          <h1>Log In Form</h1>
          <form onSubmit={value.handleLogIn}>
            <label htmlFor="UserName">
              <span>UserName:</span>
              <input
                onChange={value.handleUserName}
                type="text"
                name="username"
                autoComplete="current-password"
                placeholder="Enter Your user name"
              />{" "}
            </label>{" "}
            <br />
            <label htmlFor="Password">
              <span>Password: </span>
              <input
                onChange={value.handlePassword}
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter Your user password"
              />{" "}
            </label>{" "}
            <br />
            <input type="submit" value="Log In" />
          </form>
          <Link to="/createaccount">
            <button className="btn" onClick={value.handleRedirect}>
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogIn;
