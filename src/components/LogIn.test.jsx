import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import LogIn from "./LogIn";

cleanup();
describe("LogIn tests", () => {
  test("should be render", () => {
    const { getByText } = render(
      <Router>
        <ProductProvider>
          <LogIn />
        </ProductProvider>
      </Router>
    );
    expect(getByText(/^UserName/).textContent).toBe("UserName:");
    // debug();
  });
});
