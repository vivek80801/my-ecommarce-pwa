import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "../context/Context";
import UserProfile from "./UsersProfile";

cleanup();

describe("Edit profile", () => {
  test("should login", () => {
    const { getByText, debug } = render(
      <Router>
        <ProductProvider>
          <UserProfile />
        </ProductProvider>
      </Router>
    );

    getByText("Log In");
    debug();
  });
});
