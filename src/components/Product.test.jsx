import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import ThankYou from "./ThankYou";

cleanup();
describe("9ii", () => {
    test("should ", () => {
      const { getByText } = render(
        <Router>
          <ProductProvider>
            <ThankYou />
          </ProductProvider>
        </Router>
      );
      expect(getByText(/^Thank/).textContent).toBe("Thank You for visiting!Give Star On GithubLog out");
      // debug();
    });
  });
  