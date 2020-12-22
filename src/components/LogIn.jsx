import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";
import loading from "../Hoc/loading";
import {FaUserPlus } from "react-icons/fa"

const LogIn = ({ loading }) => {
  const value = useContext(ProductContext);

  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <h1>Loading........</h1>
        </div>
      ) : (
        <div className="contain">
          <div className="container">
            <span
              style={{
                color: "var(--lightRed)",
              }}
            >
              {value.message}
            </span>
            <h1>Log In Form<FaUserPlus/></h1>
            <form onSubmit={value.handleLogIn}>
              <label htmlFor="UserName">
                <span>UserName:</span>
                <input
                  onChange={value.handleUserName}
                  type="text"
                  name="username"
                  data-testid="username"
                  autoComplete="current-password"
                  placeholder="Enter Your user name"
                />
              </label>
              <br />
              <label htmlFor="Password">
                <span>Password: </span>
                <input
                  onChange={value.handlePassword}
                  type="password"
                  name="password"
                  data-testid="password"
                  autoComplete="current-password"
                  placeholder="Enter Your user password"
                />
              </label>
              <br />
              <input
                type="submit"
                data-testid="submit-btn"
                value="Log In"
                title="log in"
              />
            </form>
            <Link to="/createaccount" title="we don't save your data">
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

export default loading(LogIn);
