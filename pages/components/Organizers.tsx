import React, { useId } from 'react'
import styles from '../../styles/Home.module.css'
import stylesOrg from '../../styles/Organizers.module.css'
import OrganizerCard from './OrganizerCard'

type organizer = {
    name: string
    job: string
    imgSrc: string
    alt: string
}

type organizers = organizer[]

const organizersInfo: organizers = [
    {
        name: "Brian Miller",
        job: "Biologist",
        imgSrc: "profiles/humano6.jpg",
        alt: "alt"
    },
    {
        name: "Arnold Williams",
        job: "Researcher",
        imgSrc: "profiles/humano7.jpg",
        alt: "alt"
    },
    {
        name: "John Brown",
        job: "Researcher",
        imgSrc: "profiles/humano8.jpg",
        alt: "alt"
    },
    {
        name: "Eduardo Magallanes",
        job: "Pharmacist",
        imgSrc: "profiles/humano9.jpg",
        alt: "alt"
    }
]


const Organizers = () => {
    const id = useId()

    return (
        <div className={`${stylesOrg.organizers} ${styles.section}`}>
            <h2>Organizers</h2>
            <div className={stylesOrg.organizersCards}>
                {organizersInfo.map((organizer, index) => <OrganizerCard key={`${id}-${index}`} {...organizer} />)}
            </div>
            <div className={stylesOrg.organizersInfo}>More info</div>
        </div>
    )
}

export default Organizers