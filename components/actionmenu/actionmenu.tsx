import { createRef, useState } from "react"
import {useEffect, useRef} from 'react';
import { useRouter } from "next/router"
import Link from "next/link"

import useClickAway from "../../lib/useClickAway"

import styles from "./styles/actionmenu.module.scss"

type Props = {
    title: string
    data: Array<string>
    set: Function
}
const ActionMenu = ({ data=["English"], title, set }:Props) => {
    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)
    const ref = useRef(null)
    useClickAway(ref, () => {
        if(hover) return
        setShow(false)
    })
    return (
        <div className={styles.main}>
            <button
                className={styles.button}
                onClick={() => {
                    if(show) {
                        setShow(false)
                        return
                    }
                    setShow(true)
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >{title}</button>
            {show && (
                <div ref={ref} className={styles.content}>
                    <div className={styles.content_}>
                        { data.map((d:any, index:number) => (
                            <div key={index} onClick={() => set(index)} className={styles.selector}>
                                <p>{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default ActionMenu