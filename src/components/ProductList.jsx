import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";

const ProductList = () => {
  const value = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [loading]);

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

export default ProductList;
