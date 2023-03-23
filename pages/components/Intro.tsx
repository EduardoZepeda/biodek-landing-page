import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesIntro from '../../styles/Intro.module.css'

const Intro = () => {
    return (
        <div className={`${stylesIntro.intro} ${styles.section}`}>
            <h1 className={stylesIntro.title}>Biodek</h1>
            <h2 className={styles.secondaryText}>Biodek conference is the biggest biochemistry and biotechnology conference hosted in India</h2>
        </div>
    )
}

export default Intro