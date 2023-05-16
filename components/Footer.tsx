import React from 'react'
import stylesFooter from '@styles/Footer.module.css'
import styles from '@styles/Home.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={`${styles.section} ${stylesFooter.footer}`}>
            <div className={stylesFooter.credits}>Site coded by <Link href="https://eduardozepeda.dev">Eduardo Zepeda</Link></div>
            <div className={stylesFooter.credits}></div>
        </footer>
    )
}

export default Footer