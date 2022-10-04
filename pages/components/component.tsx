import useWindowSize from "../../lib/hook/useWindowSize"
import styles from "./component.module.scss"
const Component = ({children}:{
    children: any
}) => {
    return <div className={styles.main}>
        {children}
    </div>
}

const View = ({children}:{
    children: any
}) => {
    return <div>
        <div className={styles.view_settings}>
        </div>
        <div className={styles.view}>
            {children}
        </div>
    </div>
}

const Title = ({children}:{
    children: string
}) => {
    return <div className={styles.title}>
        <p className={styles.title_text}>{children}</p>
    </div>
}

Component.Title = Title
Component.View = View
export default Component