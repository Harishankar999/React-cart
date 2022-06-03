import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [jewelery, setJewelery] = useState([]);
  // console.log(jewelery)
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => res.json())
    .then((data) => setJewelery(data));
  },[])
  

  return (
    <AuthContext.Provider value={{jewelery}}>{children}</AuthContext.Provider>
  );
};
