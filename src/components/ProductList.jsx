import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";

const ProductList = () => {
  const value = useContext(ProductContext);
  return (
    <React.Fragment>
      {value.products.map((i) => (
        <div className="product" key={i.id}>
          <Link to={`/details/${i.slug}`}>
            <img src={i.img} alt="product" />
            <div className="product-style">
              <h1>{i.name}</h1>
              <span>Price: ${i.price} </span>
            </div>
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ProductList;
