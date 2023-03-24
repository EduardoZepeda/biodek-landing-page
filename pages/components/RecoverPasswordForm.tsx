import React, { useEffect, useState } from 'react'
import stylesForm from '../../styles/LoginForm.module.css'
import stylesButton from '../../styles/Buttons.module.css'

const RecoverPasswordForm = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // YAGNI, for now this is enough
        setError('')
        setMessage('')
        setEmail(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        // easier with react query but let's keep it simple
        event.preventDefault()
        setEmail('')
        const response = await fetch('/api/password-recovery', {
            method: 'POST',
            body: JSON.stringify({ email }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            // If email is valid this view always returns a 200 status
            if (res.status === 200) {
                setMessage('We will send password recovery instructions if that email exists')
            }
            return res.json()
        }).catch(error => setError(error))
    }

    useEffect(() => {

    }, [email])

    return (
        <div className={stylesForm.formContainer}>
            <h2>Recover Password</h2>
            <form onSubmit={handleSubmit} className={stylesForm.formContainer} action=''>
                <label htmlFor="email">Write down the mail you used to register and we'll help you recover your password</label>
                <input onChange={handleChange} className={stylesForm.formInput} id="email" type="email" minLength={4} value={email} placeholder={'your-email@email.com'} required />
                <button type='submit' className={`${stylesButton.btn} ${stylesButton.loginLogout}`}>Recover password</button>
                {message !== '' ? <p className={stylesForm.formSuccess}>{message}</p> : null}
                {error !== '' ? <p className={stylesForm.formError}>{error}</p> : null}
            </form>
        </div >
    )
}

export default RecoverPasswordForm