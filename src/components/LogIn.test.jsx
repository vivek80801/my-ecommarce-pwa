import React from "react";
import { render, cleanup,  } from "@testing-library/react";
import { ProductProvider } from "../context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import LogIn from "./LogIn";

cleanup();
describe("9ii", () => {
    test("should ", () => {
      const { getByText,  } = render(
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