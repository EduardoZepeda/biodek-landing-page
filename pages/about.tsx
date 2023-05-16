import Head from 'next/head'
import stylesAbout from '../styles/About.module.css'

function About() {
    return (
        <>
            <Head>
                <title>About Biodek</title>
                <meta name="login" content="About or magical project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={stylesAbout.about}>
                <div className={stylesAbout.intro}>
                    <h2>About us</h2>
                    <p>Welcome to Biodek, a company that specializes in organizing biochemistry conferences for professionals and researchers in the field. We strive to bring together experts from academia, industry, and government to discuss the latest advancements in biochemistry and related fields. Our conferences provide a platform for attendees to share their research, exchange ideas, and build collaborations that lead to groundbreaking discoveries. With a team of experienced organizers and a commitment to excellence, we ensure that our events are informative, engaging, and memorable. Join us at our next conference and be a part of the exciting world of biochemistry.</p>
                </div>
                <div className={stylesAbout.pictureContainer}>
                    <img loading="lazy" className={stylesAbout.imgBg} src={'about/main.jpg'} alt="" />
                </div>
            </div>

        </>
    )
}

export default About
