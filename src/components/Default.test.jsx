import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import Default from "./Default";

cleanup();
describe("9ii", () => {
  test("should ", () => {
    const { getByText } = render(
      <Router>
        <ProductProvider>
          <Default />
        </ProductProvider>
      </Router>
    );
    expect(getByText(/^Page/).textContent).toBe("Page not found");
    // debug();
  });
});
