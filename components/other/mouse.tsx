import { createRef, useState } from "react"
import {useEffect, useRef} from 'react';
import { useRouter } from "next/router"
import Link from "next/link"

import isUseMouse from "../../lib/isUseMouse"

import styles from "./styles/mouse.module.scss"

type Props = {
    children: React.ReactNode
}
const Mouse = ({ children }:Props) => {
    const [mousePositionX, setMousePositionX] = useState(0)
    const [mousePositionY, setMousePositionY] = useState(0)
    const [show, setShow] = useState(true)
    const [target, setTarget] = useState(undefined)
    const [mobile, setMobile] = useState(false)
    const isSpecialHover = () => {
        return target == "A"
    }
    useEffect(() => {
        setMobile(isUseMouse)
    })
    return (
        <div>
            { mobile ? (
                <div onMouseMove={() => {
                    setMobile(isUseMouse)
                }}>{children}</div>
            ): (
            <div className={styles.main}>
                <div
                    className={styles.main}
                    onMouseMove={(e: any) => {
                        setShow(false)
                        if(!(window.innerWidth <= e.clientX + 50)) {
                            setMousePositionX(e.clientX)
                        }
                        if(!(window.innerHeight <= e.clientY + 50)) {
                            setMousePositionY(e.clientY)
                        }
                        if(!(window.innerWidth <= e.clientX + 50) && !(window.innerHeight <= e.clientY + 50)) {
                            setShow(true)
                        }
                        setTarget(e.target.nodeName)
                    }}
                    onMouseLeave={() => setShow(false)}
                >{children}</div>
                { show && (
                    <div className={`${styles.cursor} ${isSpecialHover() ? styles.active : ""}`} style={{
                        transform: `translateX(${mousePositionX}px) translateY(${mousePositionY}px)`
                    }} />
                )}
            </div>
            )}
        </div>
    )
}
export default Mouse