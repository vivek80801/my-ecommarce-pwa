import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./context/Context";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

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

serviceWorker.register();
