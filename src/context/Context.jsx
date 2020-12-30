import React, { useState, createContext } from "react";
import { Redirect } from "react-router-dom";
import { productItems } from "../data";
import { persons } from "../dummyLogIn";
import { admins } from "../Admin";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(productItems);
  const [ids, setIds] = useState(new Set());
  const [auth, setAuth] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [modelUserInfo, setModeUserInfo] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [newUserName, setNewUserName] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newEmail, setNewEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [isRotated, SetIsrotated] = useState(false);
  const [change, setChange] = useState(0);
  const [changeDes, setChangeDes] = useState(null);
  const [edit, setEdit] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [authName, setAuthName] = useState(null);
  const [authPassword, setAuthPassword] = useState(null);

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
    } else {
      handleDelete(id);
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
    setMessage(null);
    persons.map((person) =>
      userName !== null && password !== null
        ? person.name.toLocaleLowerCase() === userName.toLocaleLowerCase() &&
          person.password.toLocaleLowerCase() === password.toLocaleLowerCase()
          ? setAuth(true)
          : setMessage("You have enter wrong email password")
        : setMessage("Please fill th form.")
    );
    newUserName !== null && newPassword !== null
      ? newUserName === userName && newPassword === password
        ? setAuth(true)
        : setMessage("You have enter wrong email or password")
      : setMessage("Please fill the form");
    persons.map((person) =>
      person.name === userName ? setEmail(person.email) : null
    );
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    setMessage(null);
    admins.map((admin) =>
      authName !== null && authPassword !== null
        ? admin.name.toLocaleLowerCase() === authName.toLocaleLowerCase() &&
          admin.password.toLocaleLowerCase() ===
            authPassword.toLocaleLowerCase()
          ? setAdminAuth(true)
          : setMessage("You are not an admin")
        : setMessage("Please fill the form.")
    );
    setTimeout(() => {
      setMessage(null);
    }, 500);
  };

  const handleAuthName = (e) => {
    setAuthName(e.target.value);
  };

  const handleAuthPassword = (e) => {
    setAuthPassword(e.target.value);
  };

  const handleEditPrice = (id, e) => {
    setChange({
      id,
      price: parseFloat(e.target.value),
    });
  };

  const handleEditDes = (id, e) => {
    setChangeDes({
      id,
      des: e.target.value,
    });
  };

  const handleSavePrice = (id) => {
    if (id === change.id || id === changeDes.id) {
      products.forEach((product) => {
        if (id === product.id) {
          if (!isNaN(change.price)) {
            product.price = change.price;
            product.total = change.price;
            if (changeDes !== null) {
              product.des = changeDes.des;
            }
          }
        }
      });
    }
    setEdit({
      id,
      edit: false,
    });
  };

  const handleEdit = (id) => {
    setEdit({
      id,
      edit: true,
    });
  };

  const handleCreateAccount = (e) => {
    const person = {
      name: newUserName,
      password: newPassword,
      email: newEmail,
    };
    e.preventDefault();
    setMessage();
    person.name === null || person.email === null || person.password === null
      ? setMessage("Please fill the form")
      : person.name.length <= 3
      ? setMessage("username must be of 4 charecters")
      : person.name.length >= 20
      ? setMessage("username can not exeeds 20 charecters")
      : person.password.length <= 8
      ? setMessage("Password must be of 8 charecters")
      : person.password.length >= 15
      ? setMessage("Password can not exeeds 15 charecters")
      : setRedirect(true);
    setTimeout(() => {
      setMessage(null);
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
    setUserName(null);
    setPassword(null);
    setAdminAuth(false);
    setIds([]);
    setAuth(!auth);
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  };

  const handleRedirect = () => {
    setRedirect(false);
  };

  const handleModelUserInfo = () => {
    setModeUserInfo(false);
  };

  const handlePay = () => {
    setModeUserInfo(true);
  };

  const handleRotate = () => {
    SetIsrotated(!isRotated);
  };
  const handleUserEmail = (e) => {
    if (e.target.value !== null) {
      setEmail(e.target.value);
    }
  };
  const handleSaveUser = () => {
    setEdit(false);
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
        isRotated: isRotated,
        change: change,
        edit: edit,
        adminAuth: adminAuth,
        authName: authName,
        authPassword: authPassword,
        changeDes: changeDes,
        email: email,
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
        handleRotate: handleRotate,
        handleEditPrice: handleEditPrice,
        handleSavePrice: handleSavePrice,
        handleEdit: handleEdit,
        handleAdmin: handleAdmin,
        handleAuthName: handleAuthName,
        handleAuthPassword: handleAuthPassword,
        handleEditDes: handleEditDes,
        handleUserEmail: handleUserEmail,
        handleSaveUser: handleSaveUser,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
