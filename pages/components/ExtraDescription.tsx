import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesExtraDescription from '../../styles/ExtraDescription.module.css'

const ExtraDescription = () => {
    return (
        <div className={`${stylesExtraDescription.extraDescription} ${styles.section}`}>
            <div className={styles.secondaryText}>Who are we?</div>
            <div className={stylesExtraDescription.title}><h2>We're a vibrant community willing to take science to the next level.</h2></div>
        </div >
    )
}

export default ExtraDescription