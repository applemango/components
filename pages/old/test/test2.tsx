import type { NextPage } from 'next'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styles from './styles/test1.module.scss'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ROF, ROF3, SROF } from "../../../lib/math/1"
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
        }
        if(router.query.type) {
            setType(true)
        }
    },[router.query])
    return (
        <div className={styles.main}>
            <div className={styles.tex}>
                { type &&
                    <div>
                        <BlockMath math={`${a == 1 ? "" : a}x^2 + ${b == 1 ? "" : b}x + ${c} = 0`} />
                        <BlockMath math={`x= {-b\\pm \\sqrt{b^2 - 4ac} \\over 2a}`} />
                        <BlockMath math={`x= {${b*-1}\\pm \\sqrt{${b}^2 -4*${a}*${c}} \\over 2*${a}}`} />
                        <BlockMath math={`x= {${b*-1}\\pm \\sqrt{${b*b} - ${4*a*c}} \\over ${2*a}}`} />
                    </div>
                }
                { Math.sqrt((b*b)-(4*a*c))%1 == 0 ? (
                    <div>
                        { true ?  (
                            <div>
                                { ((b*-1) + Math.sqrt((b*b)-(4*a*c)))/(2*a)%1 == 0 ? (
                                    <BlockMath math={`x= {${((b*-1) + Math.sqrt((b*b)-(4*a*c))) / (2*a)}}`} />
                                ): (
                                    <BlockMath math={`x= {${ROF((b*-1) + Math.sqrt((b*b)-(4*a*c)),2*a)[0]} \\over ${ROF((b*-1) + Math.sqrt((b*b)-(4*a*c)),2*a)[1]}}`} />
                                )}
                                { ((b*-1) - Math.sqrt((b*b)-(4*a*c)))/(2*a)%1 == 0 ? (
                                    <BlockMath math={`x= {${((b*-1) - Math.sqrt((b*b)-(4*a*c))) / (2*a)}}`} />
                                ): (
                                    <BlockMath math={`x= {${ROF((b*-1) - Math.sqrt((b*b)-(4*a*c)),2*a)[0]} \\over ${ROF((b*-1) - Math.sqrt((b*b)-(4*a*c)),2*a)[1]}}`} />
                                )}
                            </div>
                        ): (
                            <BlockMath math={`x= {${b*-1}\\pm ${Math.sqrt((b*b)-(4*a*c))} \\over ${2*a}}`} />
                        )}
                    </div>
                ): (
                    <div>
                        { (SROF((b*b)-(4*a*c)).length != 1 && SROF((b*b)-(4*a*c))[0] != 1) ? (
                            <BlockMath math={`x= {${ROF3(b*-1,SROF((b*b)-(4*a*c))[0],2*a)[0]}\\pm ${ROF3(b*-1,SROF((b*b)-(4*a*c))[0],2*a)[1] != 1 ? ROF3(b*-1,SROF((b*b)-(4*a*c))[0],2*a)[1] : ""}\\sqrt{${SROF((b*b)-(4*a*c))[1]}} \\over ${ROF3(b*-1,SROF((b*b)-(4*a*c))[0],2*a)[2]}}`} />//<BlockMath math={`x= {${b*-1}\\pm ${SROF((b*b)-(4*a*c))[0]}\\sqrt{${SROF((b*b)-(4*a*c))[1]}} \\over ${2*a}}`} />
                        ):(
                            <BlockMath math={`x= {${b*-1}\\pm \\sqrt{${(b*b)-(4*a*c)}} \\over ${2*a}}`} />
                        )}
                    </div>
                )}
                <div style={{
                    position: 'absolute'
                    ,top: 0
                    ,left: 0
                    ,marginLeft: "0"
                    ,transform: "scale(0.8)"
                }}>
                    <BlockMath math={`a=${a},b=${b},c=${c}`} />
                </div>
            </div>
        </div>
    )
}

export default TEST
