import React, { useState, useEffect } from 'react'
import stylesForm from '../../styles/LoginForm.module.css'
import stylesButton from '../../styles/Buttons.module.css'
import Link from 'next/link'




const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // YAGNI, for now this is enough
        setError('')
        if (event.target.name == 'email') { setEmail(event.target.value) }
        if (event.target.name == 'password') { setPassword(event.target.value) }
    }

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault()
        setEmail('')
        setPassword('')
        setError('An account with that password and email doesn\'t exist')
    }

    useEffect(() => {

    }, [email, password])

    return (
        <div className={stylesForm.formContainer}>
            <h2>Login</h2>
            <form className={stylesForm.formContainer} onSubmit={handleSubmit} action=''>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} className={stylesForm.formInput} name="email" id="email" type="email" value={email} required />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} className={stylesForm.formInput} name="password" id="password" type="password" value={password} required />
                <Link href="/password-recover">Forgot your password?</Link>
                <button type='submit' className={`${stylesButton.btn} ${stylesButton.loginLogout}`}>Login</button>
                <p className={stylesForm.formError}>{error}</p>
            </form>
        </div >
    )
}

export default LoginForm