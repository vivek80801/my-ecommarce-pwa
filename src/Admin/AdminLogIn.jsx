import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/Context";

const AdminLogIn = () => {
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
                  autoComplete="current-password"
                  placeholder="Enter Your admin name"
                  onChange={value.handleAuthName}
                />{" "}
              </label>{" "}
              <br />
              <label htmlFor="Password">
                <span>Password: </span>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter Your password"
                  onChange={value.handleAuthPassword}
                />{" "}
              </label>{" "}
              <br />
              <input type="submit" value="Admin Log In" title="admin log in" />
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AdminLogIn;
