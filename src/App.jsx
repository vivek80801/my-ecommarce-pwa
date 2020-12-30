import React, { useContext } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductContext } from "./context/Context";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import UsersProfile from "./users/UsersProfile";
import AdminLogIn from "./Admin/AdminLogIn";
import Admin from "./Admin/Admin";
import About from "./components/About";

const App = () => {
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
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/usersprofile" component={UsersProfile} />
        <Route exact path="/adminlogin">
          {value.adminAuth ? <Redirect to="/admin" /> : <AdminLogIn />}
        </Route>
        <Route exact path="/about" component={About} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
