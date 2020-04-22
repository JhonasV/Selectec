import React, { useState, useEffect, useMemo } from "react";
import AuthService from "../services/AuthService";

const UserContext = React.createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setLoadingUser] = useState(true);
  const [isLoadingLogin, setLoadingLogin] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [isLoadingSignIn, setLoadingSignIn] = useState(false);
  const [signInValidations, setSignInValidations] = useState({
    message: "",
    type: "",
  });
  useEffect(() => {
    async function getUser() {
      if (!AuthService.getToken()) {
        setLoadingUser(false);
        return;
      }

      try {
        let response = await AuthService.get();
        setUser(response.data.user);
        setLoadingUser(false);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  function logOut() {
    AuthService.logOut();
    setUser(null);
  }

  async function login(credentials) {
    setAlert({ type: "", message: "" });
    setLoadingLogin(true);
    try {
      const response = await AuthService.login(credentials);
      if (response.status === 200) {
        setUser(response.data.user);
        AuthService.saveToken(response.data.token);
        setLoadingLogin(false);
        return true;
      }
    } catch (error) {
      if (error.response.status) {
        if (error.response.status === 401) {
          setAlert({ type: "danger", message: error.response.data.message });
        }
      } else {
        setAlert({ type: "danger", message: error.toString() });
      }
    }
    setLoadingLogin(false);
    return false;
  }

  async function signin(values) {
    setSignInValidations({ message: "", type: "" });
    setLoadingSignIn(true);
    try {
      const response = await AuthService.signin(values);
      if (response.status === 200) {
        setUser(response.data.user);
        AuthService.saveToken(response.data.token);
        setLoadingSignIn(false);
        return true;
      }
    } catch (error) {
      if (error.response.status === 422) {
        let message = "";

        for (const key in error.response.data.error) {
          message = message + `<li>${error.response.data.error[key]}</li>`;
        }
        setSignInValidations({ message: message, type: "danger" });
      }

      if (error.response.status === 401) {
        setSignInValidations({
          message: error.response.data.message,
          type: "danger",
        });
      }
    }
    setLoadingSignIn(false);
    return false;
  }

  const value = useMemo(() => {
    return {
      user,
      isLoadingUser,
      login,
      alert,
      isLoadingLogin,
      logOut,
      signin,
      isLoadingSignIn,
      signInValidations,
    };
  }, [
    user,
    isLoadingUser,
    isLoadingLogin,
    alert,
    isLoadingSignIn,
    signInValidations,
  ]);

  return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be inside the UserContext provider");
  }
  return context;
}
