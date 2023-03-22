import React, { useId } from 'react'
import stylesTickets from '../../styles/Tickets.module.css'

type planProps = {
    price: string
    intro: string
    benefits: string[]
}

const Plan = ({ price, intro, benefits }: planProps) => {
    const id = useId()

    return (
        <div className={stylesTickets.plan}>
            <div className={stylesTickets.planPrice}><span>{price}</span></div>
            <div className={stylesTickets.planIntro}>{intro}<hr /></div>
            <div className={stylesTickets.planBenefits}>
                <ul>
                    {benefits.map((benefit, index) => <li key={`${id}-${index}`}>{benefit}</li>)}
                </ul>
            </div>
        </div >
    )
}

export default Plan