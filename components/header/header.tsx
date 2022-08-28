import { createRef, useState } from "react"
import {useEffect, useRef} from 'react';
import { useRouter } from "next/router"

import Link from "next/link"

import useWindowSize from "../../lib/useWindowSize";

import styles from "./styles/header.module.scss"

type Props = {
    page: any
}
const Header = ({ page }:Props) => {
    const [width, height] = useWindowSize()// for useEffect : Ln 33, Col 5
    const [position, setPosition] = useState(0)
    const [P,setP] = useState(0)
    const [P2,setP2] = useState(0)
    const [hover,setHover] = useState(false)
    const router = useRouter()
    const eRef:any = useRef(Object.keys(page).map(() => createRef()));
    const getRefPosition = (index:number) => {
        return !eRef.current[index].current ? position : eRef.current[index].current.offsetLeft
    }
    const getNowRouterPosition = () => {
        if(Object.values(page).includes(router.pathname)) {
            return Object.values(page).indexOf(router.pathname)
        }
        return 0
    }
    useEffect(() => {
        setPosition(eRef.current[getNowRouterPosition()].current.offsetLeft)
    },[])
    useEffect(() => {
        setP(getRefPosition(getNowRouterPosition()))
        setP2(position - getRefPosition(getNowRouterPosition()))
    })
    return (
        <div className={styles.main}>
            <div className={styles.main_}>
                { Object.keys(page).length && 
                    Object.keys(page).map((p:any, index:number) => (
                        <div
                            className={styles.links}
                            key={index}
                            ref={eRef.current[index]}
                            onMouseEnter={(e:any) => {
                                setPosition(e.target.offsetLeft)
                                setHover(true)
                            }}
                            onMouseLeave={() => setHover(false)}
                        >
                            {/*<Link href={page[p]}><a>{p}</a></Link> */}
                            <a style={{cursor: 'pointer'}}>{p}</a>
                        </div>
                    ))
                }
            </div>
            <div className={styles.underline} style={{
                left: `${P}px`
                ,transform: `translateX(${hover ? P2 : 0}px)`
            }} />
        </div>
    )
}
export default Header