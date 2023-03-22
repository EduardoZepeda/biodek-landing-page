import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import Nav from './components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Nav />
      <Component {...pageProps} />
    </div>)
}
