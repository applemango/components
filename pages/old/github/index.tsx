import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/components.module.scss'

import Languages from "../../../components/github/languages"
import MiniRepo from '../../../components/github/minirepo'

const Github: NextPage = () => {
    return (
        <div className={styles.main}>
            <Languages
                title={"Most Used Languages"}
                className
                link={true}
                style={{
                    width: '80%'
                    ,maxWidth: 300
                    ,margin: 10
                    ,padding: 10
                }}
                data={
                    {
                        "TypeScript":25
                        ,"Python":20
                        ,"JavaScript":15
                        ,"SCSS":15
                        ,"CSS":5
                        ,"Other":20
                    }
                }
            />
            <Languages
                title={"Most Used Framework"}
                link={false}
                className={styles.lang}
                style={{
                    width: '80%'
                    ,maxWidth: 300
                    ,margin: 10
                    ,padding: 10
                }}
                data={
                    {
                        "Next.js":[70,"#2c3e50"]
                        ,"Flask":[15,"#3572A5"]
                        ,"React":[5,"#3178c6"]
                        ,"Other":10
                    }
                }
            />
            <MiniRepo
                title={"Hello, world!"}
                description={"Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! "}
                language={"TypeScript"}
                className
                style={{
                    width: '80%'
                    ,maxWidth: 300
                    ,margin: 10
                    ,padding: 10
                }}
            />
        </div>
    )
}

export default Github
