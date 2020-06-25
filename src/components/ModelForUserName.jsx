import React, { useContext } from "react";
import { persons } from "../dummyLogIn";
import { ProductContext } from "./Context";

const ModelForUserName = () => {
  const value = useContext(ProductContext);
  return (
    <div
      className="model-users-info"
      style={value.modelUserInfo ? { display: "block" } : { display: "none" }}
    >
      <button className="btn closebtn" onClick={value.handleModelUserInfo}>
        &times;
      </button>
      <h1>Here is user information. You may need it to log in</h1>
      {persons.map((i) => (
        <div className="model-users-info-data" key={i.id}>
          UserName : {i.name}. <br />
          Password : {i.password}
        </div>
      ))}
      <button className="btn" onClick={value.handleModelUserInfo}>
        Close
      </button>
    </div>
  );
};

export default ModelForUserName;
