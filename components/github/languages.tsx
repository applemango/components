import { getColor } from "./languagesColor"

import ProgressBar from "./progressbar"

import styles from "./styles/languages.module.scss"

type Props = {
    data: any
    ,title?: string
    ,link?: boolean
    ,className?: any
    ,style?: any
    ,username?: string
}
const Languages = ({ data, title, link = true, className, style, username = "applemango" }:Props) => {
    return (
        <div className={` ${styles.main} ${className} `} style={style}>
            <div className={` ${styles.main_} `}>
                { title && (
                    <h2 className={styles.title}>{ title }</h2>
                )}
                <ProgressBar data={data}/>
                <div className={` ${styles.langs} `}>
                    { data &&
                        Object.keys(data).map((l:string, index:number) => (
                            <div
                                key={index}
                                className={ styles.lang }
                            >
                                <div className={ styles.color }>
                                    <div
                                        className={ styles.lang_color }
                                        style={{
                                            backgroundColor: Array.isArray(data[l]) ? data[l][1] : getColor(l)
                                        }}
                                    />
                                </div>
                                { link ? (
                                    <a href={`https://github.com/${username}?tab=repositories&q=&type=&language=${l}&sort=`} className={` ${ styles.lang_name}`}>{l}</a>
                                ):(
                                    <p className={` ${ styles.lang_name } `}>{l}</p>
                                )}
                                <p className={ styles.lang_number }>{`${Array.isArray(data[l]) ? data[l][0] : data[l]}%`}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Languages