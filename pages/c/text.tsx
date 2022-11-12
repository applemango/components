import { NextPage } from "next";
import { useState } from "react";
import Text from "../../components/text/text";
import Component from "../components/component";

const Inputs: NextPage = () => {
    const [value, setValue] = useState("")
    return <div style={{width:"80%",margin: "20px auto"}}>
        <Component>
            <Component.Title>text</Component.Title>
            <Component.View>
                <Text/>
            </Component.View>
        </Component>
    </div>
}
export default Inputs