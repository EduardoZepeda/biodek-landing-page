import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesBtn from '../../styles/Buttons.module.css'
import stylesNav from '../../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={`${stylesNav.nav} ${styles.section}`}>
            <div className={stylesNav.navBrand}><Link href="/">Flow party</Link></div>
            <div>
                <ul className={stylesNav.navMenu}>
                    <li><Link href="/about">About</Link></li>
                    <li><Link className={`${stylesBtn.btn} ${stylesBtn.register}`} href="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav