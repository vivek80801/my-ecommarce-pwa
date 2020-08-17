import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import CheckOut from "./CheckOut";

cleanup();
describe("fttytytyyyg", () => {
  test("should ", () => {
    const { getByText, debug } = render(
      <Router>
        <ProductProvider>
          <CheckOut />
        </ProductProvider>
      </Router>
    );
    expect(getByText(/^Phone/).textContent).toBe("Phone number: ");
  });
});
