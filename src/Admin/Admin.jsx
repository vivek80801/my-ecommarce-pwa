import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ProductContext } from "../context/Context";

const Admin = () => {
  const value = useContext(ProductContext);
  return ReactDOM.createPortal(
    <>
      {!value.adminAuth ? (
        <>
          <h1>Log As Admin</h1>
        </>
      ) : (
        <>
          <h1 style={{ textTransform: "capitalize" }}>
            Welcome {value.authName}, to admin area
          </h1>
          <h2>You can edit description and price</h2>
          {value.products.map((product) => (
            <div className="edit-admin" key={product.id}>
              <img src={product.img} alt={product.name} />
              <span style={{ padding: "0.75rem" }}>Name: {product.name}</span>
              <span style={{ padding: "0.75rem" }}>
                Price: ${product.price}
              </span>
              <span style={{ padding: "0.75rem" }}>
                Description: {product.des}
              </span>
              <div>
                <button
                  className={!value.edit.edit ? "btn" : "hide"}
                  onClick={() => value.handleEdit(product.id)}
                >
                  edit
                </button>
              </div>
              {value.edit.id === product.id && value.edit.edit ? (
                <div className={value.edit ? "change" : "hide"}>
                  <label htmlFor="price">
                    price: $
                    <input
                      type="number"
                      onChange={(e) => value.handleEditPrice(product.id, e)}
                    />
                  </label>
                  <label htmlFor="des">
                    description:
                    <textarea
                      name="descirption"
                      cols="30"
                      rows="10"
                      onChange={(e) => value.handleEditDes(product.id, e)}
                    ></textarea>
                  </label>
                  <button
                    className="btn"
                    onClick={() => value.handleSavePrice(product.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                null
              )}
              <hr />
            </div>
          ))}
        </>
      )}
    </>,
    document.getElementById("admin-area")
  );
};

export default Admin;
