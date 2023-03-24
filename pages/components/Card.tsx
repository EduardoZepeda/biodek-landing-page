import React from 'react'
import styles from '../../styles/Card.module.css'
import stylesBtn from '../../styles/Buttons.module.css'

type CardProps = {
    name: string
    category: string
    title: string
    date: string
    imgSrc: string
    alt: string
}

const Card = ({ name, category, title, date, imgSrc, alt }: CardProps) => {

    return (
        <div className={styles.card}>
            <img loading="lazy" className={styles.cardImage} src={imgSrc} alt={alt} />
            <div className={styles.topCard}>
                <div className={styles.cardNameAndDate}>
                    <div className={styles.cardName}>{name}</div>
                    <div className={styles.cardDate}>{date}</div>
                </div>
                <div className={styles.cardCategory}>
                    <button className={`${stylesBtn.btn} ${stylesBtn.cardBtn}`}>{category}</button>
                </div>
            </div>
            <div className={styles.bottomCard}>
                <div className={styles.cardTitle}>
                    {title}
                </div>
            </div>
        </div >
    )
}

export default Card