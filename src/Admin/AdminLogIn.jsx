import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import UpdatedComponent from "../Hoc/loading";

const AdminLogIn = ({loading}) => {
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
            <h1>Admin Log In </h1>
            <form onSubmit={value.handleAdmin}>
              <span>{value.adminAuth}</span>
              <label htmlFor="UserName">
                <span>AdminName:</span>
                <input
                  type="text"
                  name="username"
                  data-testid="adminname"
                  placeholder="Enter Your admin name"
                  onChange={value.handleAuthName}
                />
              </label>
              <br />
              <label htmlFor="Password">
                <span>Password: </span>
                <input
                  type="password"
                  name="password"
                  data-testid="adminpassword"
                  autoComplete="current-password"
                  placeholder="Enter Your password"
                  onChange={value.handleAuthPassword}
                />
              </label>
              <br />
              <input type="submit" data-testid="adminlogin" value="Admin Log In" title="admin log in" />
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default UpdatedComponent(AdminLogIn);
