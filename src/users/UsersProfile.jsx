import React, { useContext } from "react";
import { persons } from "../dummyLogIn";
import { ProductContext } from "../Context/Context";
import { Link } from "react-router-dom";

const UsersProfile = () => {
  const value = useContext(ProductContext);
  return (
    <>
      {value.auth ? (
        <>
          <h1>My Profile</h1>
          <div>
            <span> Name: {value.userName}</span>
            <span> Password: {value.password}</span>
            <span>
              Email:{" "}
              {persons.map((person) =>
                person.name === value.userName ? person.email : ""
              )}
            </span>
          </div>
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
