import React, { useId, useEffect } from 'react'
import stylesCards from '../../styles/Card.module.css'
import Card from './Card'



const cardsInfo = [
    {
        name: "Aoi Kusanagi",
        title: "Cytochrome P450",
        date: "",
        category: "Molecular biology",
        imgSrc: "profiles/humano1.jpg",
        alt: "Molecular biology conference"
    },
    {
        name: "Richard Guzman",
        title: "CRISPR applic.",
        date: "",
        category: "Molecular biology",
        imgSrc: "profiles/humano2.jpg",
        alt: "alt"
    },
    {
        name: "Emma Smith",
        title: "New nano materials",
        date: "",
        category: "nano technology",
        imgSrc: "profiles/humano3.jpg",
        alt: "alt"
    },
    {
        name: "Erika Hathaway",
        title: "E. magallonella spp",
        date: "",
        category: "Microbiology",
        imgSrc: "profiles/humano4.jpg",
        alt: "alt"
    },
    {
        name: "David Azanza",
        title: "DNA methylation",
        date: "",
        category: "Molecular biology",
        imgSrc: "profiles/humano5.jpg",
        alt: "alt"
    }
]


const Cards = () => {
    const id = useId()
    // Trying to prevent a very elusive bug that only happens in vercel production
    // caused by a difference between date in server and client
    let newDate = new Date()

    useEffect(() => {
        newDate = new Date()
        newDate.setDate(newDate.getDate() + 1)
    })

    return (
        <div className={stylesCards.cards}>
            {cardsInfo.map((card, index) => {
                // update date dynamically for example purposes
                card.date = newDate.toLocaleDateString()
                return < Card key={`${id}-${index}`
                } {...card} />
            })}
        </div>
    )
}

export default Cards