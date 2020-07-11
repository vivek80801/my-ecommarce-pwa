import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";
import ModelForUserName from "./ModelForUserName";
import Pwa from "./Pwa";

const LogIn = () => {
  const value = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <h1>Loading........</h1>
        </div>
      ) : (
        <div className="contain">
          <div className="container">
            <ModelForUserName />
            <Pwa />
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
      )}
    </React.Fragment>
  );
};

export default LogIn;
