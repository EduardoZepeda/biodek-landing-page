import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>)
}
