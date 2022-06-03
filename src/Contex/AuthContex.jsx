import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const state = useLocation();
  // console.log(state);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    setIsAuth(true);
    if (state.from) {
      navigate(state.pathname, { replace: true });
    } else {
      navigate("/");
    }
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
