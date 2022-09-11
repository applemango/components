import type { NextPage } from 'next'
import react,{ useState, useEffect, useRef } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/test1.module.scss'

import useClickAway from '../../lib/useClickAway'

import { gzip, unzip } from '../../lib/gzip'

const TEST: NextPage = () => {
    const [text, setText] = useState("")
    const [size, setSize]:any = useState("min(24vw,128px)")
    const [isInput, setIsInput] = useState(false)
    const router = useRouter()
    const ref = useRef(null)
    useEffect(() => {
        if(router.query.text && typeof(router.query.text) == "string") {
            setText(unzip(router.query.text))
            setIsInput(false)
        }
        if(router.query.size && typeof(router.query.size) == "string") {
            setSize(Number(router.query.size))
        }
    },[router.query])
    useClickAway(ref, () => {
        setIsInput(false)
        router.replace(`${location.origin}${location.pathname}?text=${gzip(text)}${size != "min(24vw,128px)" ? "&size="+size : ""}`)
    })
    return (
        <div className={styles.main} onClick={() => {
            if(text.length < 1) {
                setIsInput(true)
            }
        }}>
            { isInput ? (
                <textarea className={styles.input} style={{fontSize:size}} ref={ref} value={text} onChange={(event) => {
                    setText(event.target.value)
                }}/>
            ):(
                <div>
                    { text.split("\n").map((line, index) => (
                        <h1 key={index} onClick={() => {
                            setIsInput(true)
                        }} className={styles.title} style={{fontSize:size}}>{line}</h1>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TEST
