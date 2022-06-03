import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contex/AuthContex";
import style from "../Styles/styles.module.css";

const Navbar = () => {
  const nevigate = useNavigate();

  const { isAuth, logout } = useContext(AuthContext);

  const handleLoginClick = () => {
    if (isAuth) {
      logout();
      nevigate("/");
    } else {
      nevigate("/login");
    }
  };
  return (
    <div className={style.navbar}>
      <Link className={style.link} to="">
        Home
      </Link>
      <Link className={style.link} to="/mens">
        Mens
      </Link>
      <Link className={style.link} to="/womens">
        Womens
      </Link>
      <Link className={style.link} to="/jewelery">
        Jewelery
      </Link>
      <button className={style.button} onClick={handleLoginClick}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
