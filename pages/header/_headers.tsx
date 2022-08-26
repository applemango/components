import Header from "../../components/header/header"

import styles from '../styles/components.module.scss'
const Headers = () => {
    return (
        <div className={styles.main}>
            <Header page={
                {
                    "Work":"/header"
                    ,"About":"/header/about"
                    ,"Workflow":"/header/workflow"
                    ,"Contact":"/header/contact"
                }
            } />
        </div>
    )
}
export default Headers