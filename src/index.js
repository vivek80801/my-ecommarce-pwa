import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./Context/Context";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
