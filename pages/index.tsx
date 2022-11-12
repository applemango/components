import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/index.module.scss'

import Mouse from '../components/other/mouse'

const Main = ({children}:{children: any}) => {return <div className={styles.main}>{children}</div>}
const Links = ({children}:{children: any}) => {return <div className={styles.cards}>{children}</div>}
const A = ({href, children}:{href: string, children: string}) => {return <Link href={href}><a><div className={styles.card}><p>{children}</p></div></a></Link>}
const H1 = ({children}:{children: string}) => {return <div className={styles.title} style={{marginTop:75}}><p>{children}</p></div>}
const Title = () => {return <div className={styles.title}><h1>UI Components</h1><p>Components Collection</p></div>}
Main.Links = Links
Main.A = A
Main.H1 = H1
Main.Title = Title

const Home: NextPage = () => {
    return <Main>
        <Main.Title />
        <Main.Links>
            <Main.A href="/c/input">input</Main.A>
            <Main.A href="/c/github">github</Main.A>
            <Main.A href="/c/header">header</Main.A>
        </Main.Links>
        <Main.H1>page Collection</Main.H1>
        <Main.Links>
            <Main.A href="/old/pages/p">test page 1</Main.A>
            <Main.A href="/old/test/test3?a=0&b=0&c=0">test page 2 (quadratic equation</Main.A>
        </Main.Links>
    </Main>
}

export default Home
