import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import ThankYou from "./ThankYou";

cleanup();
describe("9ii", () => {
    test("should ", () => {
      const { getByText, debug } = render(
        <Router>
          <ProductProvider>
            <ThankYou />
          </ProductProvider>
        </Router>
      );
      expect(getByText(/^Thank/).textContent).toBe("Thank You for visiting!Log out");
      // debug();
    });
  });
  