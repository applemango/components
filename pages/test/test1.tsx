import type { NextPage } from 'next'
import react,{ useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/test1.module.scss'

const TEST: NextPage = () => {
    const [text, setText] = useState("Hello, world!")
    const [size, setSize]:any = useState("min(24vw,128px)")
    const router = useRouter()
    useEffect(() => {
        if(router.query.text && typeof(router.query.text) == "string") {
            setText(router.query.text)
        }
        if(router.query.size && typeof(router.query.size) == "string") {
            setSize(Number(router.query.size))
        }
    },[router.query])
    return (
        <div className={styles.main}>
            <h1 className={styles.title} style={{fontSize:size}}>{text}</h1>
        </div>
    )
}

export default TEST
