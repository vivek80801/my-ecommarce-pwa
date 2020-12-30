import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About";

cleanup();
describe("LogIn tests", () => {
  test("should be render", () => {
    const { getByText } = render(
      <Router>
        <ProductProvider>
          <About />
        </ProductProvider>
      </Router>
    );
    expect(getByText(/^about/).textContent).toBe("about me");
    // debug();
  });
});
