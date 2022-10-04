import { NextPage } from "next";
import Histories from "../../components/github/history";
import Languages from "../../components/github/languages";
import MiniRepo from "../../components/github/minirepo";
import Component from "../components/component";

const Github: NextPage = () => {
    return <div style={{width:"80%",margin: "20px auto"}}>
        <Component>
            <Component.Title>Languages progress bar</Component.Title>
            <Component.View>
                <Languages
                    title={"Most Used Languages"}
                    username={"applemango"}
                    className
                    link={true}
                    style={{
                        width: '80%'
                        ,maxWidth: 300
                        ,margin: 10
                        ,padding: 10
                    }}
                    data={
                        {
                            "TypeScript":25
                            ,"Python":20
                            ,"JavaScript":15
                            ,"SCSS":15
                            ,"CSS":5
                            ,"Other":20
                        }
                    }
                />
            </Component.View>
        </Component>
        <Component>
            <Component.Title>Mini repository</Component.Title>
            <Component.View>
                <MiniRepo
                    title={"Hello, world!"}
                    description={"Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! "}
                    language={"TypeScript"}
                    className
                    style={{
                        width: '80%'
                        ,maxWidth: 300
                        ,margin: 10
                        ,padding: 10
                    }}
                />
            </Component.View>
        </Component>
        <Component>
            <Component.Title>Timeline</Component.Title>
            <Component.View>
                <div style={{width: '100%',maxWidth:600}}>
                    <Histories>
                        <Histories.History name={"Scratch"} date={"October 2021 - June 2022"}>
                            <Histories.MiniInfo name={"Created scratch accounts"} date={"23 oct 2021"}/>
                            <Histories.Repo url={"https://turbowarp.org/694611718"} name={"_applemango_ / python v0"} lang={"Scratch"} date={"22 May 2022"} />
                            <Histories.Repo url={"https://turbowarp.org/707785303"} name={"_applemango_ / chess v0"} lang={"Scratch"} date={"21 Jun 2022"} />
                        </Histories.History>
                        <Histories.History name={"Web development"} date={"July 2022 - now"}>
                            <Histories.Repo url={"https://github.com/applemango/social"} name={"applemango / social"} lang={"TypeScript"} date={"3 Aug 2022"} />
                            <Histories.Repo url={"https://github.com/applemango/place"} name={"applemango / place"} lang={"TypeScript"} date={"20 Aug 2022"} />
                            <Histories.Repo url={"https://github.com/applemango/images_library"} name={"applemango / images_library"} lang={"TypeScript"} date={"17 Sep 2022"} />
                        </Histories.History>
                    </Histories>
                </div>
            </Component.View>
        </Component>
    </div>
}
export default Github