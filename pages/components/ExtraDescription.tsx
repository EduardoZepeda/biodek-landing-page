import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesExtraDescription from '../../styles/ExtraDescription.module.css'

const ExtraDescription = () => {
    return (
        <div className={`${stylesExtraDescription.extraDescription} ${styles.section}`}>
            <div className={styles.secondaryText}>bla bla bla bla</div>
            <div className={stylesExtraDescription.title}><h2>Una descripcion</h2></div>
        </div >
    )
}

export default ExtraDescription