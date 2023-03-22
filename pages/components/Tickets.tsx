import React, { useId } from 'react'
import styles from '../../styles/Home.module.css'
import stylesBtn from '../../styles/Buttons.module.css'
import stylesTickets from '../../styles/Tickets.module.css'
import Plan from './Plan'

const plans = [
    {
        price: "$12",
        intro: "intro",
        benefits: ["uno", "dos", "tres"]
    },
    {
        price: "$12",
        intro: "intro",
        benefits: ["uno", "dos", "tres"]
    }
]

const Tickets = () => {
    const id = useId()
    return (
        <div className={`${stylesTickets.tickets} ${styles.section}`}>
            <h2>Nuestros planes</h2>
            <div className={stylesTickets.plans}>
                {plans.map((plan, index) => <Plan key={`${id}-${index}`} {...plan} />)}
            </div>
        </div>
    )
}

export default Tickets