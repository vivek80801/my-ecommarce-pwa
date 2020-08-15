import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductContext } from "../context/Context";

const CheckOut = () => {
  const value = useContext(ProductContext);

  const ids1 = [...value.ids];
  return (
    <React.Fragment>
      <form>
        <label htmlFor="name">
          Name: <input type="text" />
        </label>{" "}
        <br />
        <label htmlFor="phone-number">
          Phone number: <input type="number" />
        </label>{" "}
        <br />
        <label htmlFor="address">

        Address: 
        <textarea name="add"></textarea>
        </label>
        <button className="btn">click here</button>
      </form>
      <div className="cart-heading">
        <h2>Item</h2>
        <h2>Price</h2>
        <h2>Number of Items</h2>
      </div>
      {value.products.map((product) => (
        <React.Fragment key={uuidv4()}>
          {ids1.map(
            (id) =>
              id === product.id && (
                <div key={uuidv4()} className="cart-image">
                  <img src={product.img} alt={product.name} />
                  <span>${product.price} </span>
                  <span>{product.count}</span>
                </div>
              )
          )}
        </React.Fragment>
      ))}
      {value.products.map((product) => (
        <React.Fragment key={uuidv4()}>
          {ids1.map(
            (id) =>
              id === product.id && (
                <div key={uuidv4()} className="cart-image-mobile">
                  <img src={product.img} alt={product.name} />
                  <span>${product.price} </span>
                  <span>{product.count}</span>
                </div>
              )
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default CheckOut;
