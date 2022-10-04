import { NextPage } from "next";
import { useState } from "react";
import Input_text from "../../components/form/input_text";
import Component from "../components/component";

const Inputs: NextPage = () => {
    const [value, setValue] = useState("")
    return <div style={{width:"80%",margin: "20px auto"}}>
        <Component>
            <Component.Title>Input</Component.Title>
            <Component.View>
                <Input_text value={value} change={setValue} icon={true} />
            </Component.View>
        </Component>
    </div>
}
export default Inputs