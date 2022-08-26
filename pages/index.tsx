import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <Head>
                <title>Hello, world!</title>
            </Head>
            <h1 className={`${styles.underline} ${styles.simple}`}>
                <a href="https://git.abc.osaka">Hello, world!</a>
            </h1>
        </div>
    )
}

export default Home
