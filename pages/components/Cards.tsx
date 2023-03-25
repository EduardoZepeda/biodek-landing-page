import React, { useId } from 'react'
import stylesCards from '../../styles/Card.module.css'
import Card from './Card'

// update date dynamically for example purposes
let date = new Date()
date.setDate(date.getDate() + 1)

const cardsInfo = [
    {
        name: "Aoi Kusanagi",
        title: "Cytochrome P450",
        date: date.toLocaleDateString(),
        category: "Molecular biology",
        imgSrc: "profiles/humano1.jpg",
        alt: "Molecular biology conference"
    },
    {
        name: "Richard Guzman",
        title: "CRISPR applic.",
        date: date.toLocaleDateString(),
        category: "Molecular biology",
        imgSrc: "profiles/humano2.jpg",
        alt: "alt"
    },
    {
        name: "Emma Smith",
        title: "New nano materials",
        date: date.toLocaleDateString(),
        category: "nano technology",
        imgSrc: "profiles/humano3.jpg",
        alt: "alt"
    },
    {
        name: "Erika Hathaway",
        title: "E. magallonella spp",
        date: date.toLocaleDateString(),
        category: "Microbiology",
        imgSrc: "profiles/humano4.jpg",
        alt: "alt"
    },
    {
        name: "David Azanza",
        title: "DNA methylation",
        date: date.toLocaleDateString(),
        category: "Molecular biology",
        imgSrc: "profiles/humano5.jpg",
        alt: "alt"
    }
]


const Cards = () => {
    const id = useId()

    return (
        <div className={stylesCards.cards}>
            {cardsInfo.map((card, index) => <Card key={`${id}-${index}`} {...card} />)}
        </div>
    )
}

export default Cards