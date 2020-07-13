import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";

const Details = (props) => {
  const value = useContext(ProductContext);

  return (
    <React.Fragment>
      {value.products.map((i) =>
        props.match.params.slug === i.slug ? (
          <React.Fragment key={i.id}>
            <div className="hero-image">
              <img src={i.img} alt="hero" />
              <p title="this is dummy data">{i.des}</p>
            </div>
            <div className="contain">
              <Link to="/cart">
                <button
                  className="btn"
                  onClick={() => value.handleAddToCart(props.match.params.slug)}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </React.Fragment>
        ) : (
          ""
        )
      )}
    </React.Fragment>
  );
};

export default Details;
