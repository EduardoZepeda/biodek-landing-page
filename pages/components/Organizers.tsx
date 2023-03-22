import React, { useId } from 'react'
import styles from '../../styles/Home.module.css'
import stylesOrg from '../../styles/Organizers.module.css'
import OrganizerCard from './OrganizerCard'

const organizersInfo = [
    {
        name: "name",
        job: "job",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        job: "job",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        job: "job",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    },
    {
        name: "name",
        job: "job",
        imgSrc: "/profiles/humano1.jpg",
        alt: "alt"
    }
]


const Organizers = () => {
    const id = useId()

    return (
        <div className={`${stylesOrg.organizers} ${styles.section}`}>
            <h2>Hola</h2>
            <div className={stylesOrg.organizersCards}>
                {organizersInfo.map((organizer, index) => <OrganizerCard key={`${id}-${index}`} {...organizer} />)}
            </div>
            <div className={stylesOrg.organizersInfo}>More info</div>
        </div>
    )
}

export default Organizers