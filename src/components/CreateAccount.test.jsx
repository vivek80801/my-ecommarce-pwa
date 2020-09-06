import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import CreateAccount from "./CreateAccount";

cleanup();

describe("yghg", () => {
  test("should ", () => {
    const { getByText, debug } = render(
      <Router>
        <ProductProvider>
          <CreateAccount />
        </ProductProvider>
      </Router>
    );
    expect(getByText(/^UserName:/).textContent).toBe("UserName: ");
    // debug();
  });
});
