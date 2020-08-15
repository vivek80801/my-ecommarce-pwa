import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";
import loading from "../Hoc/loading";

const ProductList = ({ loading }) => {
  const value = useContext(ProductContext);

  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <h1>Loading........</h1>
        </div>
      ) : (
        <React.Fragment>
          {value.products.map((i) => (
            <div className="product" key={i.id}>
              <Link to={`/details/${i.slug}`} title="buy">
                <img src={i.img} alt="product" />
                <div className="product-style">
                  <h1>{i.name}</h1>
                  <span>Price: ${i.price} </span>
                </div>
              </Link>
            </div>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default loading(ProductList);
