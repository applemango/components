import { createRef, useState } from "react"
import {useEffect, useRef} from 'react';
import { useRouter } from "next/router"

import Link from "next/link"

import styles from "./styles/header2.module.scss"

type Props = {
    page: any
}
const Header = ({ page }:Props) => {
    const router = useRouter()
    return (
        <div className={styles.main}>
            { Object.keys(page).length && 
                Object.keys(page).map((p:any, index:number) => (
                    <div className={styles.link} key={index}>
                        <Link href={page[p]}><a className={ router.pathname == page[p] ? styles.active : "" }>{p}</a></Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Header