import type { NextPage } from 'next'

import Scroll from "../../../components/other/scroll"
import Mouse from '../../../components/other/mouse'

import P from "../page/p"

const Other: NextPage = () => {
    return (
        <Mouse color="#fff">
            <Scroll>
                <div style={{height:"100%",overflow:"auto",backgroundColor: "#141414"}}>
                    <P/>
                </div>
            </Scroll>
        </Mouse>
    )
}

export default Other