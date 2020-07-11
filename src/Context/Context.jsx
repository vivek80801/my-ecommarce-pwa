import React, { useState, createContext } from "react";
import { Redirect } from "react-router-dom";
import { productItems } from "../data";
import { persons } from "../dummyLogIn";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(productItems);
  const [ids, setIds] = useState(new Set());
  const [auth, setAuth] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [modelUserInfo, setModeUserInfo] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleAddToCart = (slug) => {
    products.forEach((i) => {
      if (slug === i.slug) {
        setProducts([...products]);
        setIds(new Set([...ids, i.id]));
      }
    });
  };
  const handleAddCount = (id) => {
    const find = products.filter((product) => product.id === id);
    find[0].count += 1;
    setProducts([...products]);
  };
  const handleRemoveCount = (id) => {
    const find = products.filter((product) => product.id === id);
    if (find[0].count > 1) {
      find[0].count -= 1;
    }
    setProducts([...products]);
  };
  const handleDelete = (id) => {
    const ids1 = [...ids];
    const find = ids1.filter((i) => i !== id);
    setIds(new Set([...find]));
  }; 

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleNewUserName = (e) => {
    setNewUserName(e.target.value);
  };
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    setMessage("");
    persons.map((person) =>
      person.name === userName && person.password === password
        ? setAuth(true)
        : setMessage("You have enter wrong email password")
    );
    if (newUserName !== "" && newPassword !== "") {
      newUserName === userName && newPassword === password
        ? setAuth(true)
        : setMessage("You have enter wrong email or password");
    }
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };
  const handleCreateAccount = (e) => {
    e.preventDefault();
    setMessage("");
    const person = {
      name: newUserName,
      password: newPassword,
      email: newEmail,
    };
    if (person.name === "" || person.email === "" || person.password === "") {
      setMessage("Please fill the form");
    } else if (person.name.length <= 3) {
      setMessage("UserNme must be of 4 charecters");
    } else if (person.name.length >= 20) {
      setMessage("UserName can not exeeds 20 charecters");
    } else if (person.password.length <= 8) {
      setMessage("Password must be of 8 charecters");
    } else if (person.password.length >= 15) {
      setMessage("Password can not exeeds 15 charecters");
    } else {
      setRedirect(true);
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/createaccount" />;
    }
  };

  const handleLogout = () => {
    setMessage("You are logged out");
    setUserName("");
    setPassword("");
    setIds([]);
    setAuth(!auth);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleRedirect = () => {
    setRedirect(false);
  };

  const handleModelUserInfo = (params) => {
    setModeUserInfo(false);
  };

  const handlePay = () => {
    setModeUserInfo(true);
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        ids: ids,
        auth: auth,
        userName: userName,
        password: password,
        message: message,
        newUserName: newUserName,
        newEmail: newEmail,
        newPassword: newPassword,
        redirect: redirect,
        modelUserInfo: modelUserInfo,
        handleRedirect: handleRedirect,
        renderRedirect: renderRedirect,
        handleAddToCart: handleAddToCart,
        handleAddCount: handleAddCount,
        handleRemoveCount: handleRemoveCount,
        handleDelete: handleDelete,
        handleUserName: handleUserName,
        handlePassword: handlePassword,
        handleNewUserName: handleNewUserName,
        handleNewEmail: handleNewEmail,
        handleNewPassword: handleNewPassword,
        handleLogIn: handleLogIn,
        handleCreateAccount: handleCreateAccount,
        handleLogout: handleLogout,
        handleModelUserInfo: handleModelUserInfo,
        handlePay: handlePay,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
