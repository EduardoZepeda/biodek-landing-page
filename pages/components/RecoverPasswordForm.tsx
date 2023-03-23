import React, { useEffect, useState } from 'react'
import stylesForm from '../../styles/LoginForm.module.css'
import stylesButton from '../../styles/Buttons.module.css'

const RecoverPasswordForm = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // YAGNI, for now this is enough
        setError('')
        setEmail(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setEmail('')
        setError('We will send password recovery instructions if that email exists')
    }

    useEffect(() => {

    }, [email])

    return (
        <div className={stylesForm.formContainer}>
            <h2>Recover Password</h2>
            <form onSubmit={handleSubmit} className={stylesForm.formContainer} action=''>
                <label htmlFor="email">Write down the mail you used to register and we'll help you recover your password</label>
                <input onChange={handleChange} className={stylesForm.formInput} id="email" type="email" minLength={4} required />
                <button type='submit' className={`${stylesButton.btn} ${stylesButton.loginLogout}`}>Recover password</button>
                <p className={stylesForm.formSuccess}>{error}</p>
            </form>
        </div >
    )
}

export default RecoverPasswordForm