import React from 'react'
import styles from '../Styles/styles.module.css'
function Login() {
  return (
    <form className={styles.loginBox}>
        <input type="text" placeholder='Enter Your Username...'/>
        <br />
        <input type='password' placeholder='Enter Your Password...'/>
        <br />
        <br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login