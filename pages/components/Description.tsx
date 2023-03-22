import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesIntro from '../../styles/Intro.module.css'

const Description = () => {
    return (
        <div className={`${styles.description} ${styles.section}`}>
            <div className={stylesIntro.descriptionText}><h2>Description Description Description Description</h2></div>
            <div className={`${styles.secondaryText} ${styles.descriptionInfo}`}>bla bla bla bla</div>
            <div className={`${stylesIntro.title} ${styles.descriptionInfo}`}>Follow</div>
        </div >
    )
}

export default Description