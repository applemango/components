import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <Head><title>Hello, world!</title></Head>
            <div>
                <p>components</p>
                <div>
                <Link href="/header"><a className={`${styles.underline} ${styles.simple}`}>header</a></Link><br/>
                    <Link href="/github"><a className={`${styles.underline} ${styles.simple}`}>github</a></Link><br/>
                </div>
            </div>
        </div>
    )
}

export default Home
