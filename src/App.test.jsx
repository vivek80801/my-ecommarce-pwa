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
import { createMemoryHistory } from "history";
cleanup();

describe("<App/>", () => {
  test("should render wuithout crashing", () => {
    const { getByText } = render(
      <Router>
        <ProductProvider>
          <App />
        </ProductProvider>
      </Router>
    );
    getByText("Log In Form");
    // debug();
  });

  test("fill the form and click on submit button", () => {
    const { getByTestId, getByText, } = render(
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
    // const adminNodes = getAllByText("Admin");
    // const adminElements = [...adminNodes];
    // fireEvent.click(adminElements[1]);
    // fireEvent.change(getByTestId("adminname"), { target: { value: "vivek" } });
    // fireEvent.change(getByTestId("adminpassword"), {
    //   target: { value: "vivek" },
    // });
    // fireEvent.click(getByTestId("adminlogin"));
    // waitForDomChange()
    fireEvent.click(getByText("Pasta1"));
    fireEvent.click(getByText("Add to Cart"));
    fireEvent.click(getByText("Pay"));
    fireEvent.click(getByText("Log out"));
    // debug();
  });

  test("should router work", () => {
    const history = createMemoryHistory();
    const { container,  getAllByText,} = render(
      <Router history={history}>
        <ProductProvider>
          <App />
        </ProductProvider>
      </Router>
    );
    const home = getAllByText(/^Home/gi)[0];
    expect(container.innerHTML).toMatch("Home");
    fireEvent.click(home);
    // debug();
  });
});
