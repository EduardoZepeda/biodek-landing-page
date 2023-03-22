import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginForm from './components/LoginForm'

function Home() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="login" content="Login to your account" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LoginForm />
        </>
    )
}

export default Home
