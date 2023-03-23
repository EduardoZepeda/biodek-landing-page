import Head from 'next/head'
import Tickets from './components/Tickets'

function Subscribe() {
    return (
        <>
            <Head>
                <title>Subscribe now</title>
                <meta name="description" content="Meet our plants specially designed for you" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Tickets />
        </>
    )
}

export default Subscribe
