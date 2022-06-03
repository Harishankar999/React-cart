import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from '../Styles/styles.module.css'

const Navbar = () => {
  const nevigate = useNavigate();
  const handleLoginClick = () => {
    nevigate('/login')
  }
  return (
    <div className={style.navbar}>
      <Link className={style.link} to="">Home</Link>
      <Link className={style.link} to="/mens">Mens</Link>
      <Link className={style.link} to="/womens">Womens</Link>
      <Link className={style.link} to="/jewelery">Jewelery</Link>
      <button className={style.button} onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Navbar;
