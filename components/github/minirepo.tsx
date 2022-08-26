import React from 'react'
import { RepoIcon } from '@primer/octicons-react'

import { getColor } from "./languagesColor"

import styles from "./styles/minirepo.module.scss"

type Props = {
    title: string;
    description: string
    language: string
    className?: any
    style?: any
    username?: string
}
const MiniRepo = ({ title, description, language, className, style, username = "applemango" }:Props) => {
    return (
        <div className={` ${styles.main} ${className} `} style={style}>
            <div className={ styles.title }>
                <RepoIcon size={16} />
                <a href={`https://github.com/${username}/${title}`} className={ styles.title_ }>{title}</a>
                <div className={ styles.public }>
                    <p>public</p>
                </div>
            </div>
            <div className={ styles.description }>
                <p>{description}</p>
            </div>
            <div className={ styles.lang }>
                <div className={ styles.color } style={{
                    backgroundColor: getColor(language)
                }} />
                <p>{language}</p>
            </div>
        </div>
    )
}
export default MiniRepo