import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./Cart";

cleanup();

describe("<Cart/>", () => {
  test("should ", () => {
    const { getByText } = render(
      <Router>
        <ProductProvider>
          <Cart />
        </ProductProvider>
      </Router>
    );
    expect(getByText(/^You/).textContent).toBe("You are not logged in.Log In");
    // debug();
  });
});
