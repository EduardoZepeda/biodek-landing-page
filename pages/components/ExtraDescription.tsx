import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesExtraDescription from '../../styles/ExtraDescription.module.css'
import stylesAni from '../../styles/Animations.module.css'
import { useInView } from 'react-intersection-observer'

const ExtraDescription = () => {
    const options = { triggerOnce: true }
    // watch the intersection observer and add class translate while on viewport
    const [ref1, inView1] = useInView(options)
    const [ref2, inView2] = useInView(options)

    return (
        <div className={`${stylesExtraDescription.extraDescription} ${styles.section}`}>
            <div ref={ref1} className={`${styles.secondaryText} ${stylesAni.translateDown} ${inView1 ? stylesAni.translateUp : ''}`}>Who are we?</div>
            <div ref={ref2} className={`${stylesExtraDescription.title} ${stylesAni.translateDown} ${inView2 ? stylesAni.translateUp : ''}`}><h2>We're a vibrant community willing to take science to the next level.</h2></div>
        </div >
    )
}

export default ExtraDescription