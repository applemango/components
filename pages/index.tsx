import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <Head><title>Hello, world!</title></Head>
            <div>
                <p>Components</p>
                <div>
                    <Link href="/header"><a className={`${styles.underline} ${styles.simple}`}>Header</a></Link><br/>
                    <Link href="/actionmenu"><a className={`${styles.underline} ${styles.simple}`}>ActionMenu</a></Link><br/>
                    <Link href="/github"><a className={`${styles.underline} ${styles.simple}`}>Github</a></Link><br/>
                </div>
            </div>
        </div>
    )
}

export default Home
