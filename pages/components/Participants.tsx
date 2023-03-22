import React, { useId } from 'react'
import styles from '../../styles/Home.module.css'
import stylesPtr from '../../styles/Participants.module.css'
import Line from './Line'

const LinesOfParticipants: string[][] = [["name", "name2", "name3"], ["name", "name2", "name3"], ["name", "name2", "name3"]]

const Participants = () => {
    const id = useId()

    return (
        <div className={`${stylesPtr.participants} ${styles.section}`}>
            <h2>Learn from the best</h2>
            <div className={stylesPtr.lines}>
                {LinesOfParticipants.map((line, index) => <Line key={`${id}-${index}`} LineOfParticipants={line} />)}
            </div>
            <div>Otro mensaje</div>
        </div>
    )
}

export default Participants