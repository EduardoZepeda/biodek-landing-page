import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesEvents from '../../styles/Events.module.css'

const Events = () => {
    return (
        <div className={`${stylesEvents.events} ${styles.section}`}>
            <h2>Events</h2>
            <div className={styles.secondaryText}>bla bla bla bla bla</div>
        </div>
    )
}

export default Events