import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesEvents from '../../styles/Events.module.css'

const Events = () => {
    return (
        <div className={`${stylesEvents.events} ${styles.section}`}>
            <h2>Events</h2>
            <div className={styles.secondaryText}>Every conference will be streamed on our platform, we will love to meet you here but if distance is an issue, let's meet up online</div>
        </div>
    )
}

export default Events