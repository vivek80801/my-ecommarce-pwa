import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import { Link } from "react-router-dom";

const UsersProfile = () => {
  const value = useContext(ProductContext);
  return (
    <>
      {value.auth ? (
        <>
          
        </>
      ) : (
        <>
          {" "}
          <h1>
            You are not logged in.
            <Link to="/">
              <button className="btn">Log In</button>
            </Link>
          </h1>
        </>
      )}
    </>
  );
};

export default UsersProfile;
