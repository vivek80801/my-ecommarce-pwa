import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import { ProductContext } from "../context/Context";

const Product = () => {
  const value = useContext(ProductContext);
  return (
    <React.Fragment>
      {value.auth ? (
        <React.Fragment>
          <h1 style={{ textTransform: "capitalize" }}>
            welcome {value.userName.toLocaleLowerCase()}.
          </h1>
          <h2>
            Our <strong>Products</strong>
          </h2>
          <div className="products">
            <ProductList />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>
            You are not logged in.
            <Link to="/">
              <button className="btn">Log In</button>
            </Link>
          </h1>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Product;
