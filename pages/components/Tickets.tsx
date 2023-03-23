import React, { useId } from 'react'
import styles from '../../styles/Home.module.css'
import stylesColors from '../../styles/Colors.module.css'
import stylesTickets from '../../styles/Tickets.module.css'
import Plan from './Plan'

const plans = [
    {
        price: "$45",
        intro: "Your basic access, for newcomers",
        benefits: ["✓ Access to the event all days", "✓ Welcoming kit"],
        style: stylesColors.pink
    },
    {
        price: "$120",
        intro: "For experienced scientists",
        benefits: ["✓ Exclusive conferences", "✓ Lifetime access to videos", "✓ No lines", "✓ Food discount"],
        style: stylesColors.green
    }
]

const Tickets = () => {
    const id = useId()
    return (
        <div className={`${stylesTickets.tickets} ${styles.section}`}>
            <h2>Our plans</h2>
            <div className={stylesTickets.plans}>
                {plans.map((plan, index) => <Plan key={`${id}-${index}`} {...plan} />)}
            </div>
        </div>
    )
}

export default Tickets