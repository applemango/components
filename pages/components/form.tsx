import styles from "./component.module.scss"
const Form = ({children}:{
    children: any
}) => {
    return <div className={styles.form}>
        {children}
    </div>
}
export default Form