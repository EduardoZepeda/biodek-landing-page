import Head from 'next/head'
import RecoverPasswordForm from './components/RecoverPasswordForm'

function RecoverPassword() {
    return (
        <>
            <Head>
                <title>Recover your password</title>
                <meta name="password recovery" content="Recover your password" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RecoverPasswordForm />
        </>
    )
}

export default RecoverPassword
