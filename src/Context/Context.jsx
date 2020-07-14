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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isRotated, SetIsrotated] = useState(false);
  const [change, setChange] = useState(0);
  const [changeDes, setChangeDes] = useState("");
  const [edit, setEdit] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [authName, setAuthName] = useState("");
  const [authPassword, setAuthPassword] = useState("");

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
  const handleAdmin = (e) => {
    e.preventDefault();
    setMessage("");
    admins.map((admin) =>
      admin.name === authName && admin.password === authPassword
        ? setAdminAuth(true)
        : setMessage("You are not an admin")
    );
    setTimeout(() => {
      setMessage("");
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
          if (!isNaN(change.price) && changeDes !== "") {
            product.price = change.price;
            product.total = change.price;
            product.des = changeDes.des;
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
    setAdminAuth(false);
    setIds([]);
    setAuth(!auth);
    setTimeout(() => {
      setMessage("");
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
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
