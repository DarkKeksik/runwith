import React from 'react'
import styles from './styles.module.scss'

type TProps = { text: String }

const FormTitle = ({text}: TProps):JSX.Element => {
    return <h3 className={styles.title}>{ text }</h3>
}

export default FormTitle