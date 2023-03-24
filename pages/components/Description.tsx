import React from 'react'
import styles from '../../styles/Home.module.css'
import stylesIntro from '../../styles/Intro.module.css'
import stylesAni from '../../styles/Animations.module.css'
import { useInView } from 'react-intersection-observer'

const Description = () => {
    const options = { triggerOnce: true }
    // watch the intersection observer and add class translate while on viewport
    const [ref1, inView1] = useInView(options)
    const [ref2, inView2] = useInView(options)
    const [ref3, inView3] = useInView(options)

    return (
        <div className={`${styles.description} ${styles.section}`}>
            <div ref={ref1} className={`${stylesIntro.descriptionText} ${stylesAni.translateRight} ${inView1 ? stylesAni.translateLeft : ''}`}>
                <h2>Molecular biology Genetics Biotechnology Bioinformatics</h2>
            </div>
            <div ref={ref2} className={`${styles.secondaryText} ${styles.descriptionInfo} ${stylesAni.translateRight} ${inView2 ? stylesAni.translateLeft : ''}`}>Don't miss it!</div>
            <div ref={ref3} className={`${stylesIntro.title} ${styles.descriptionInfo} ${stylesAni.translateRight} ${inView3 ? stylesAni.translateLeft : ''}`}>Biodek</div>
        </div >
    )
}

export default Description