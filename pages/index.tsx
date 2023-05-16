import Head from 'next/head'
import Intro from '@components/Intro'
import Events from '@components/Events'
import Cards from '@components/Cards'
import Description from '@components/Description'
import ExtraDescription from '@components/ExtraDescription'
import Participants from '@components/Participants'
import Organizers from '@components/Organizers'
import Tickets from '@components/Tickets'
import Subscribe from '@components/Subscribe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Biodek</title>
        <meta name="description" content="Eduardo Zepeda's portfolio site " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Events />
      <Cards />
      <Description />
      <ExtraDescription />
      <Participants />
      <Organizers />
      <Tickets />
      <Subscribe />
    </>
  )
}
