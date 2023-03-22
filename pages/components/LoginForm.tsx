import React from 'react'
import stylesForm from '../../styles/LoginForm.module.css'
import stylesButton from '../../styles/Buttons.module.css'

const LoginForm = () => {
    return (
        <div className={stylesForm.formContainer}>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input className={stylesForm.formInput} id="email" type="text" />
            <label htmlFor="password">Password</label>
            <input className={stylesForm.formInput} id="password" type="password" />
            <button className={`${stylesButton.btn} ${stylesButton.loginLogout}`}>Login</button>
        </div >
    )
}

export default LoginForm