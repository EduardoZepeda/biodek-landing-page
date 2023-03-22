import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesIntro from '../../styles/Intro.module.css'

const Intro = () => {
    return (
        <div className={`${stylesIntro.intro} ${styles.section}`}>
            <h1 className={stylesIntro.title}>Flow</h1>
            <h2 className={styles.secondaryText}>Font small</h2>
        </div>
    )
}

export default Intro