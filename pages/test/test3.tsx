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
            //console.log(main(Number(router.query.a),Number(router.query.b),Number(router.query.c)))
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
            let top_M = top < 0
            let top2_M = top2 < 0
            let top_ROF = ROF(Math.abs(top),bottom)
            let top2_ROF = ROF(Math.abs(top2),bottom)
            if(top_ROF[0] == top2_ROF[0] && top_ROF[1] == top2_ROF[1]) {
                return <BlockMath math={`x= ${top_ROF[0]} \\over ${top_ROF[1]}`}/>
            } else {
                let a = `{${top_ROF[0]} \\over ${top_ROF[1]}}`
                let b = `{${top2_ROF[0]} \\over ${top2_ROF[1]}}`
                return <div>
                    <BlockMath math={`
                        x= ${top_M ? "-" : ""} ${top_ROF[1] == 1 ? top_ROF[0] : a}
                        ,${top2_M ? "-" : ""} ${top2_ROF[1] == 1 ? top2_ROF[0] : b}`}
                    />
                </div>
                //x= ${top_M ? "-" : ""} {${top_ROF[0]} \\over ${top_ROF[1]}}
                //,${top2_M ? "-" : ""} {${top2_ROF[0]} \\over ${top2_ROF[1]}}
            }
            return <BlockMath math={`x=0`} />
            return [
                `${top}/${bottom}`
                ,`${top2}/${bottom}`
            ]
        } else {
            let two_SROF = SROF(two[0])
            if(two_SROF.length == 1) {
                two_SROF = [1,two[0]]
            }
            let all_ROF = ROF3(one[0],two_SROF[0],three[0])
            one[0] = all_ROF[0]
            two_SROF[0] = all_ROF[1]
            three[0] = all_ROF[2]
            //console.log(`x=${one[0]}±root_${two_SROF[0]}_${two_SROF[1]}/${three[0]}`)
            //three[0] = ROF()
            //console.log(SROF(20))
            //console.log(two_SROF)
            return <BlockMath math={`x= {${one[0]}\\pm ${two_SROF[0] == 1 ? "" : two_SROF[1]}\\sqrt{${two_SROF[1]}} \\over ${three[0]}}`} />
        }
    }
    return (
        <div className={styles.main}>
            {main(a,b,c)}
        </div>
    )
}

export default TEST
