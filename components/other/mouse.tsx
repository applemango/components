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
    const [target, setTarget]:any = useState()
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
                        if(!(window.innerWidth <= e.clientX + 50)) {
                            setMousePositionX(e.clientX)
                        }
                        if(!(window.innerHeight <= e.clientY + 50)) {
                            setMousePositionY(e.clientY)
                        }
                        setTarget(e.target.nodeName)
                    }}
                >{children}</div>
                <div className={`${styles.cursor} ${isSpecialHover() ? styles.active : ""}`} style={{
                    transform: `translateX(${mousePositionX}px) translateY(${mousePositionY}px)`
                }} />
            </div>
            )}
        </div>
    )
}
export default Mouse