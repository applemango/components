import Header from "../../components/header/header"
import Header2 from "../../components/header/header2"

import styles from '../styles/components.module.scss'
const Headers = () => {
    return (
        <div className={styles.headers} >
            <div className={styles.header}>
                <Header page={
                    {
                        "Work":"/header"
                        ,"About":"/header/about"
                        ,"Workflow":"/header/workflow"
                        ,"Contact":"/header/contact"
                    }
                } />
            </div>
            <div className={styles.header}>
                <Header2 page={
                    {
                        "Work":"/header"
                        ,"About":"/header/about"
                        ,"Workflow":"/header/workflow"
                        ,"Contact":"/header/contact"
                    }
                } />
            </div>
        </div>
    )
}
export default Headers