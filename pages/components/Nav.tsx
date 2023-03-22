import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesBtn from '../../styles/Buttons.module.css'
import stylesNav from '../../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={`${stylesNav.nav} ${styles.section}`}>
            <div className={stylesNav.navBrand}>Flow party</div>
            <div className={stylesNav.navMenu}>
                <button className={`${stylesBtn.btn} ${stylesBtn.register}`}>Register</button>
            </div>
        </div>
    )
}

export default Nav