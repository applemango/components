import styles from "./styles/input_text.module.scss"
const Input_text = ({ value, change, submit=()=>false, label = "Input Text...", icon = true}:{
    value: any
    change: Function
    label?: string
    submit?: Function
    icon?: boolean | React.ReactElement
}) => {
    return <div className={styles.searchBox}>
        <input style={{paddingLeft: 53 - (Number(!icon) * 36)}} className={styles.searchInput} type="text" onChange={(e) => {
            change(e.target.value)
        }} value={value} onKeyPress={(e) => {
            if(e.key == "Enter") {
                e.preventDefault()
                change(value)
                submit(value)
            }
        }}  />
        <div className={styles.info}>
            { icon &&
                <button onClick={() => {
                    change(value)
                    submit(value)
                }}>
                    {
                        typeof icon === "boolean" ? (
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#2d2d2d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </div>
                        ) : <div className={styles.icon}>
                            {icon}
                        </div>
                    }
                </button>
            }
            <div className={`${styles.label_} ${value ? styles.active : ""}`}>
                <span className={styles.label}>{label}</span>
            </div>
        </div>
    </div>
}
export default Input_text