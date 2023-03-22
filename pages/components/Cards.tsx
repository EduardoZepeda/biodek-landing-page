import React, { useId } from 'react'
import styles from '../../styles/Card.module.css'
import Card from './Card'

const cardsInfo = [
    {
        name: "name",
        title: "title",
        date: "date",
        category: "category",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        title: "title",
        date: "date",
        category: "category",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        title: "title",
        date: "date",
        category: "category",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        title: "title",
        date: "date",
        category: "category",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        title: "title",
        date: "date",
        category: "category",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    }
]


const Cards = () => {
    const id = useId()

    return (
        <div className={`${styles.cards} ${styles.section}`}>
            {cardsInfo.map((card, index) => <Card key={`${id}-${index}`} {...card} />)}
        </div>
    )
}

export default Cards