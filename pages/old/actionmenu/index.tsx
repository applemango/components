import type { NextPage } from 'next'

import { useState } from 'react'

import ActionMenu from "../../../components/actionmenu/actionmenu"
import ActionMenu2 from "../../../components/actionmenu/actionmenu2"

const Menu: NextPage = () => {
    const [now, setNow] = useState(0)
    return (
        <div>
            <p>click</p>
            <ActionMenu
                title={"languages"}
                data={["Japanese","English","France"]}
                set={setNow}
            />
            <p>hover</p>
            <ActionMenu2
                data={["Japanese","English","France"]}
                set={setNow}
                now={now}
            />
        </div>
    )
}

export default Menu
