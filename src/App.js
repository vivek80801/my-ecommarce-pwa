import React, { useContext } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import { ProductContext } from "./Context/Context";

function App() {
  const value = useContext(ProductContext);
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {value.auth ? <Redirect to="/products" /> : <LogIn />}
        </Route>
        <Route exact path="/createaccount" component={CreateAccount} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details/:slug" component={Details} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
