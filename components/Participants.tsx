import React, { useId } from 'react'
import styles from '@styles/Home.module.css'
import stylesPtr from '@styles/Participants.module.css'
import Line from './Line'

const LinesOfParticipants: string[][] = [["Craig Venter", "Jennifer Doudna", "Antonio Lazcano"], ["Marcus Feldman", "Emmanuelle Charpentier", "Monica Bettencourt-Dias"], ["José Sarukhán", "Rodolfo Dirzo", "Adrian Fernández"]]

const Participants = () => {
    const id = useId()

    return (
        <div className={`${stylesPtr.participants} ${styles.section}`}>
            <h2>Learn from the best</h2>
            <div className={stylesPtr.lines}>
                {LinesOfParticipants.map((line, index) => <Line key={`${id}-${index}`} LineOfParticipants={line} />)}
            </div>
            <div>And a lot more of top scientists</div>
        </div>
    )
}

export default Participants