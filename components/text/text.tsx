import { NextPage } from "next";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss"

const Text = () => {
    return <div className={styles._}>
        <div>
            <T1 text={"hoverme plz"} />
            <T2 text={"hoverme plz"} />
            <T3 text={"hoverme plz"} />
            <T4 text={"hello, world!"} />
        </div>
    </div>
}
const T1 = ({text}:{text: string}) => {
    const colors = ["#FFA000","#2196F3","#3949AB","#D81B60"/*,"#fff"*/]
    return <div className={styles.main}>
        <p className={styles.text}>
            { text.split("").map((char: string, i:number) => (
                <span key={i} style={{color: colors[Math.floor(Math.random() * colors.length)]}} className={styles.char}>{char}</span>
            )) }
        </p>
    </div>
}
const T2 = ({text}:{text: string}) => {
    const T2Helper = ({char, i}:{char: string, i:number}) => {
        const colors = ["#FFA000","#2196F3","#3949AB","#D81B60"/*,"#fff"*/]
        const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]
        const [color, setColor] = useState("#eee")
        return <span
            key={i}
            className={styles.char2}
            style={{color: color}}
            onMouseEnter={() => setColor(getRandomColor())}
        >{char}</span>
    }
    return <div className={styles.main}>
        <p className={styles.text}>
            { text.split("").map((char: string, i:number) => (
                <T2Helper char={char} i={i} />
            )) }
        </p>
    </div>
}
const T3 = ({text}:{text: string}) => {
    const colors = ["#FFA000","#2196F3","#3949AB","#D81B60"]
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]
    const resetColors = (length: number, color: string): Array<string> => {
        let array = new Array(length)
        for (let i = 0; i < length; i++) {
            array[i] = color
        }
        return array
    }
    const [nextColor, setNextColor] = useState(getRandomColor())
    const [nowColors, setNowColors] = useState(resetColors(text.length, nextColor))
    const [resetNumber, setResetNumber] = useState(0)
    const changeColor = (array: Array<string>,nextColor: string,i: number): void => {
        let all = true
        array.map((color: string, i:number) => {
            if (color != nextColor)
                all = false
            return color
        })
        if(all) {
            if(resetNumber > 3) {
                setNextColor(getRandomColor())
                setResetNumber(0)
                return
            }
            setResetNumber((value:number) => value += 1)
            return
        }
        setNowColors((array) => 
            array.map((color: string, now:number) => i == now ? nextColor : color)
        )
    }
    const T3Helper = ({char, i, nowColors}:{char: string, i:number, nowColors: Array<string>, changeColor: Function}) => {
        return <span
            key={i}
            className={styles.char3}
            style={{color: nowColors[i]}}
            onMouseEnter={() => changeColor(nowColors, nextColor,i)}
        >{char}</span>
    }
    return <div className={styles.main}>
        <p className={styles.text}>
            { text.split("").map((char: string, i:number) => (
                <T3Helper changeColor={changeColor} nowColors={nowColors} char={char} i={i} />
            )) }
        </p>
    </div>
}
const T4 = ({text}:{text: string}) => {
    const color = "#eee"
    const specialColor = "#D81B60"
    const getRandomNumber = (max: number) => Math.floor(Math.random() * max)
    const [special, setSpecial] = useState(getRandomNumber(text.length))
    useEffect(() => {
        const times = setInterval(() => {
            setSpecial(getRandomNumber(text.length))
        }, 800)
        return () => clearInterval(times)
    },[])
    return <div className={styles.main}>
        <p className={styles.text}>
            { text.split("").map((char: string, i:number) => (
                <span key={i} style={{color: special == i ? specialColor : color}} className={styles.char4}>{char}</span>
            )) }
        </p>
    </div>
}
export default Text;