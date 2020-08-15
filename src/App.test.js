import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
} from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/Context";

cleanup()

it("log in text", () => {
  const { getByText, debug } = render(
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  );
  getByText("Log In Form");
  debug();
});

describe("Log into App", () => {
  it("fill the form and click on submit button", () => {
    const { getByTestId, getByText, debug } = render(
      <Router>
        <ProductProvider>
          <App />
        </ProductProvider>
      </Router>
    );
    fireEvent.change(getByTestId("username"), { target: { value: "vivek" } });
    fireEvent.change(getByTestId("password"), { target: { value: "vivek" } });
    fireEvent.click(getByTestId("submit-btn"));
    waitForDomChange();
    fireEvent.click(getByText("Pasta1"));
    fireEvent.click(getByText("Add to Cart"));

    fireEvent.click(getByText("Pay"));
    fireEvent.click(getByText("Log out"));
    debug();
  });
});
