import { NextPage } from "next";
import Header from "../../components/header/header";
import Component from "../components/component";

const Inputs: NextPage = () => {
    return <div style={{width:"80%",margin: "20px auto"}}>
        <Component>
            <Component.Title>Header</Component.Title>
            <Component.View>
                <Header page={
                    {
                        "Work":"/"
                        ,"About":"/"
                        ,"Workflow":"/"
                        ,"Contact":"/"
                    }
                } />
            </Component.View>
        </Component>
    </div>
}
export default Inputs