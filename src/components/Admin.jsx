import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";

const Admin = () => {
  const value = useContext(ProductContext);
  return (
    <>
      {!value.adminAuth ? (
        <>
        <h1>Log As Admin</h1>
        </>
      ) : (
        <>
          <span
            style={{
              color: "#00f",
            }}
          >
            {value.message}
          </span>
          {value.products.map((product) => (
            <div className="contain" key={product.id}>
              <div className="cart-image">
                <img src={product.img} alt={product.name} />
              </div>
              <span style={{ padding: "0.75rem" }}>{product.name}</span>
              <span style={{ padding: "0.75rem" }}>{product.price}</span>
              <button
                className="btn"
                onClick={() => value.handleEdit(product.id)}
              >
                edit
              </button>
              {value.edit.id === product.id && value.edit.edit ? (
                <div className={value.edit ? "change" : "hide"}>
                  <label htmlFor="price">
                    ${" "}
                    <input
                      type="number"
                      onChange={(e) => value.handleEditPrice(product.id, e)}
                    />
                  </label>
                  <button
                    className="btn"
                    onClick={() => value.handleSavePrice(product.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Admin;
