import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import { Link } from "react-router-dom";

const UsersProfile = () => {
  const value = useContext(ProductContext);
  return (
    <>
      {value.auth ? (
        <>
          <h1>My Profile</h1>
          <div className="user-profile">
            <span> Name: {value.userName}</span>
            <span>Email: {value.email}</span>
            <span> Password: {value.password}</span>
            <div>
              <button
                className={!value.edit.edit ? "btn" : "hide"}
                onClick={value.handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
          <div className={value.edit.edit ? "edit-user" : "hide"}>
            <label htmlFor="name">
              Name: <input type="text" onChange={value.handleUserName} />
            </label>
            <label htmlFor="email">
              Email: <input type="email" onChange={value.handleUserEmail} />
            </label>
            <label htmlFor="password">
              Password:{" "}
              <input type="password" onChange={value.handlePassword} />
            </label>
            <button className="btn" onClick={value.handleSaveUser}>
              Save
            </button>
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
