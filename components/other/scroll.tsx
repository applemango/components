import { useState, useEffect, useRef } from "react"
import isUseMouse from "../../lib/isUseMouse"

type Props = {
    children: React.ReactNode
}
const Scroll = ({ children }:Props) => {
    const eRef:any = useRef(null)
    const [scrollY, setScrollY] = useState(0)
    const [maxScrollY, setMaxScrollY] = useState(Infinity)
    const [mobile, setMobile] = useState(false)
    const scrollPage = (oldValue:number, changeValue:number) => {
        const newValue = oldValue - changeValue
        if(newValue > 0) {
            return 0
        }
        if(Math.abs(newValue) > maxScrollY) {
            return -maxScrollY
        }
        return newValue
    }
    useEffect(() => {
        setMobile(isUseMouse)
        if(!eRef.current) {
            return
        }
        if(eRef.current.clientHeight < window.innerHeight) {
            setMaxScrollY(0)
            return
        }
        setMaxScrollY(eRef.current ? eRef.current.clientHeight - window.innerHeight : maxScrollY)
    })
    return (
        <div>
            { mobile ? (
                <div onMouseMove={() => {
                    setMobile(isUseMouse)
                }}>{children}</div>
            ):(
                <div
                    style={{ 
                        overflow: "hidden"
                        ,position:"relative"
                        ,height: "100vh"
                    }}
                    onWheel={(e:any) => {
                        setScrollY((value) => scrollPage(value, e.deltaY))
                    }}
                    onMouseLeave={() => setMobile(isUseMouse)}
                >
                    <div
                        ref={eRef}
                        style={{
                            position:"relative"
                            ,transform: `translateY(${scrollY}px)`
                            ,transition: "transform 1s ease"
                            ,willChange: "transform"
                        }}
                        onWheel={(e:any) => {
                            setScrollY((value) => scrollPage(value, e.deltaY))
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Scroll