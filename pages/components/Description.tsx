import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesIntro from '../../styles/Intro.module.css'

const Description = () => {
    return (
        <div className={`${styles.description} ${styles.section}`}>
            <div className={stylesIntro.descriptionText}><h2>Molecular biology nanotechnology genetics biophysics</h2></div>
            <div className={`${styles.secondaryText} ${styles.descriptionInfo}`}>Don't miss it!</div>
            <div className={`${stylesIntro.title} ${styles.descriptionInfo}`}>Biodek</div>
        </div >
    )
}

export default Description