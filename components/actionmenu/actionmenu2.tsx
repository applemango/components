import { createRef, useState } from "react"
import {useEffect, useRef} from 'react';
import { useRouter } from "next/router"
import Link from "next/link"

import useClickAway from "../../lib/useClickAway"

import styles from "./styles/actionmenu2.module.scss"

type Props = {
    title?: string
    data?: Array<string>
    set?: Function;
    now?: number
}
const ActionMenu = ({ title, data=["English"], set = () => 0, now = -1 }:Props) => {
    const isSpecial = () => {
        return !title && (now+1) && set
    }
    const getTitle = () => {
        return isSpecial() ? data[now] : title
    }
    const getArray = () => {
        if(!isSpecial()) return data
        let new_ = []
        for(let i = 0; i < data.length; i++) {
            if(i != now) {
                new_.push(data[i])
            }
        }
        return new_
    }
    const getTitleIndex = () => {
        return isSpecial() ? now : 0
    }
    return (
        <div className={styles.main}>
            <div className={styles.button} onClick={() => (set(getTitleIndex()))}>
                <p>{getTitle()}</p>
            </div>
            <div className={styles.content}>
                <div className={styles.content_}>
                    { getArray().map((d:any, index:number) => (
                        <div key={index} onClick={() => set(isSpecial() ? data.indexOf(d) : index + 1)}>
                            <p>{d}</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}
export default ActionMenu