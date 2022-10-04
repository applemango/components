import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/index.module.scss'

import Mouse from '../components/other/mouse'

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>UI Components</h1>
                <p>Components Collection</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Link href="/c/input">
                        <a>input</a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/c/github"><a>github</a></Link>
                </div>
                <div className={styles.card}>
                    <Link href="/c/header"><a>header</a></Link>
                </div>
            </div>
            
            <div className={styles.title} style={{marginTop:150}}>
                <p>page Collection</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Link href="/old/pages/p"><a>test page 1</a></Link>
                </div>
                <div className={styles.card}>
                    <Link href="/old/test/test3?a=0&b=0&c=0"><a>test page 2 (quadratic equation</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
