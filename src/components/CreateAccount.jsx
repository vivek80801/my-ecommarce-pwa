import React, { useContext } from "react";
import { ProductContext } from "../context/Context";

const CreateAccount = () => {
  const value = useContext(ProductContext);

  return (
    <React.Fragment>
      <div className="contain">
        <div className="container">
          <h1>Create Account</h1>
          <form onSubmit={value.handleCreateAccount}>
            <label htmlFor="UserName">
              UserName:
              <input
                onChange={value.handleNewUserName}
                type="text"
                name="username"
                autoComplete="current-password"
                placeholder="Enter Your user name"
              />{" "}
            </label>{" "}
            <br />
            <label htmlFor="Email">
              Email:
              <input
                onChange={value.handleNewEmail}
                type="email"
                name="username"
                autoComplete="current-password"
                placeholder="Enter Your email address"
              />{" "}
            </label>{" "}
            <br />
            <label htmlFor="Password">
              Password:{" "}
              <input
                onChange={value.handleNewPassword}
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter Your user password"
              />{" "}
            </label>{" "}
            <br />
            {value.renderRedirect()}
            <input type="submit" value="Sign Up" />
          </form>
          <span
            style={{
              color: "var(--lightRed)",
            }}
          >
            {value.message}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CreateAccount;
