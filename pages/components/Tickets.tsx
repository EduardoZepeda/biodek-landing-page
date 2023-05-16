import React, { useId } from 'react'
import styles from '../../styles/Home.module.css'
import stylesColors from '../../styles/Colors.module.css'
import stylesTickets from '../../styles/Tickets.module.css'
import Plan from './Plan'

type plan = {
    price: string
    intro: string
    benefits: string[]
    icon: string
    style: string
}

type plansType = plan[]

const plans: plansType = [
    {
        price: "90",
        intro: "Your basic access, for newcomers",
        benefits: ["✓ Access to the event all days", "✓ Welcoming kit"],
        icon: "/icons/star.svg",
        style: stylesColors.pink
    },
    {
        price: "120",
        intro: "For experienced scientists",
        benefits: ["✓ Exclusive conferences", "✓ Lifetime access to videos", "✓ No lines", "✓ Food discount"],
        icon: "/icons/molecule.svg",
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