import type { NextPage } from 'next'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styles from './styles/test1.module.scss'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ROF, ROF3, SROF } from "./math/1"
//npm install --save --legacy-peer-deps react-katex

const TEST: NextPage = () => {
    const router = useRouter()
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)
    const [type, setType] = useState(false)
    useEffect(() => {
        if(router.query.a && router.query.b && router.query.c) {
            setA(Number(router.query.a))
            setB(Number(router.query.b))
            setC(Number(router.query.c))
            console.log(main(Number(router.query.a),Number(router.query.b),Number(router.query.c)))
        }
        if(router.query.type) {
            setType(true)
        }
    },[router.query])
    function main(a: number, b: number, c: number) {
        const a2 = ROF3(a,b,c)[0]
        const b2 = ROF3(a,b,c)[1]
        const c2 = ROF3(a,b,c)[2]
        let one:[number, string | boolean] = [b2*-1,false]
        let two:[number, string | boolean] = [( b2 ** 2 ) - ( 4 * a2 * c2 ),"sqrt"]
        let three:[number, string | boolean] = [2 * a2,false]
        if(Math.sqrt(two[0])%1 == 0) {//rootが外れた場合
            two = [Math.sqrt(two[0]),false]
            let top = one[0]+two[0]
            let top2 = one[0]-two[0]
            let bottom = three[0]
            console.log("A")
            return [
                `${top}/${bottom}`
                ,`${top2}/${bottom}`
            ]
        } else {
            return 
        }
    }
    return (
        <div className={styles.main}>
        </div>
    )
}

export default TEST
