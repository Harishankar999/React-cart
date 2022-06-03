import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Contex/AuthContex";
import styles from "../Styles/styles.module.css";
function Login() {
  const { login } = useContext(AuthContext);
  const [loginCreds, setLoginCreds] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <form className={styles.loginBox} onSubmit={handleSubmit}>
      <input
        name="email"
        type="text"
        placeholder="Enter Your Username..."
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Enter Your Password..."
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
