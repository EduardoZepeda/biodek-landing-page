import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesBtn from '../../styles/Buttons.module.css'
import stylesSubscribe from '../../styles/Subscribe.module.css'
import Link from 'next/link'

const Subscribe = () => {
    return (
        <div className={`${stylesSubscribe.subscribe} ${styles.section}`}>
            <h2 className={styles.title}>subscribe</h2>
            <Link href="/subscribe"><button className={`${stylesBtn.subscribe} ${stylesBtn.btn}`}>Subscribe</button></Link>
        </div>
    )
}

export default Subscribe