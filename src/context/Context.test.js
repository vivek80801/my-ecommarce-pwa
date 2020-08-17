import React from "react";
import  { ProductContext, ProductProvider } from "./Context";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test initioal states", () => {
  test("should be auth false", () => {
    const { debug, getByText } = render(
      <ProductProvider>
        <ProductContext.Consumer>
          {(value) => <span>auth:{JSON.stringify(value.auth, null, 2)}</span>}
        </ProductContext.Consumer>
      </ProductProvider>
    );
    expect(getByText(/^auth/).textContent).toBe("auth:false")
    // debug();
  });
});
