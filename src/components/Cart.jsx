import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FaRupeeSign } from "react-icons/fa";
import { ProductContext } from "../context/Context";
import ThankYou from "./ThankYou";

const Cart = () => {
  const value = useContext(ProductContext);

  const ids1 = [...value.ids];
  let output = 0;
  value.ids.forEach((id) =>
    value.products.forEach((product) =>
      product.id === id ? (output += product.total * product.count) : null
    )
  );

  if (!value.auth) {
    return (
      <>
        <h1>
          You are not logged in.
          <Link to="/">
            <button className="btn">Log In</button>
          </Link>
        </h1>
      </>
    );
  } else if (value.ids.size <= 0) {
    return (
      <React.Fragment>
        <h1>Nothing is in Your Cart.</h1>
      </React.Fragment>
    );
  } else if (value.ids.size >= 1) {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "var(--mainWhite)",
            position: "sticky",
            zIndex: 3,
            top: "5rem",
          }}
        >
          <Link to="/products">
            <button className="btn btn-fixed">Back</button>
          </Link>
        </div>
        <ThankYou />
        <div
          className="cart-details"
          style={
            value.modelUserInfo ? { display: "none" } : { display: "block" }
          }
        >
          <h1
            style={{
              position: "sticky",
              top: "8rem",
              backgroundColor: " var(--mainWhite)",
            }}
          >
            Your Cart
          </h1>
          <div className="cart-heading">
            <h2>Item</h2>
            <h2>Price</h2>
            <h2>Number of Items</h2>
            <h2>Add </h2>
            <h2>Subtract</h2>
            <h2>Delete</h2>
            <h2>Amount</h2>
          </div>
          {value.products.map((product) => (
            <React.Fragment key={uuidv4()}>
              {ids1.map((id) =>
                id === product.id ? (
                  <React.Fragment key={uuidv4()}>
                    <div key={uuidv4()} className="cart-image">
                      <img src={product.img} alt={product.name} />
                      <span>
                        <FaRupeeSign />
                        {product.price}
                      </span>
                      <span>{product.count}</span>
                      <button
                        className="btn"
                        onClick={() => value.handleAddCount(product.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn"
                        onClick={() => value.handleRemoveCount(product.id)}
                      >
                        -
                      </button>
                      <button
                        className="btn"
                        onClick={() => value.handleDelete(product.id)}
                        title="do you want to delete?"
                      >
                        Delete
                      </button>
                      <span>
                        <FaRupeeSign />
                        {Math.floor(product.count * product.price * 100) / 100}
                      </span>
                    </div>
                    <div className="cart-image-mobile">
                      <img src={product.img} alt={product.name} />
                      <span className="center-spans">
                        Price: <FaRupeeSign />
                        {product.price}
                      </span>
                      <span className="center-spans">
                        Number of items: {product.count}
                      </span>
                      <button
                        className="btn"
                        onClick={() => value.handleAddCount(product.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn"
                        onClick={() => value.handleRemoveCount(product.id)}
                      >
                        -
                      </button>
                      <button
                        className="btn"
                        onClick={() => value.handleDelete(product.id)}
                        title="are you sure to delete?"
                      >
                        Delete
                      </button>
                      <span className="center-spans">
                        Total cost of {product.name}: <FaRupeeSign />
                        {Math.floor(product.count * product.price * 100) / 100}
                      </span>
                      <hr />
                    </div>
                  </React.Fragment>
                ) : null
              )}
            </React.Fragment>
          ))}
          <div className="total">
            <h1>Total:</h1>
            <button
              className="btn"
              onClick={value.handlePay}
              title="dummy payment"
            >
              Pay
            </button>
            <h2>
              <FaRupeeSign /> {Math.floor(output * 100) / 100}
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Nothing is in Your Cart.</h1>
      </React.Fragment>
    );
  }
};

export default Cart;
