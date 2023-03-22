import React, { useId } from 'react'
import stylesLines from '../../styles/Lines.module.css'
import styles from '../../styles/Home.module.css'

type LineProps = {
    LineOfParticipants: string[]
}

const Line = ({ LineOfParticipants }: LineProps) => {
    const id = useId()

    return (
        <div className={styles.section}>
            <ul>
                {LineOfParticipants.map((subject, index) => <li key={`${id}-${index}`} className={stylesLines.line}>{subject}</li>)}
            </ul>
        </div>
    )
}

export default Line