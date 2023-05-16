import React from 'react'
import stylesOrg from '@styles/Organizers.module.css'

type OrganizerCardProps = {
    name: string
    job: string
    imgSrc: string
    alt: string
}


const OrganizerCard = ({ name, job, imgSrc, alt }: OrganizerCardProps) => {
    return (
        <div className={stylesOrg.organizerCard}>
            <div>
                <img loading="lazy" className={stylesOrg.organizerImg} src={imgSrc} alt={alt} />
            </div>
            <div className={stylesOrg.data}>
                <p className={stylesOrg.organizerName}>{name}</p>
                <p>{job}</p>
            </div>
        </div>
    )
}

export default OrganizerCard