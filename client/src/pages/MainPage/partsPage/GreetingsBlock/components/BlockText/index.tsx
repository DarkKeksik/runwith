import React from 'react'
import styles from './styles.modules.scss'

const BlockText = (
    { text }: {text: string}
): JSX.Element => (
    <span
        className={styles.text}
        dangerouslySetInnerHTML={{__html: text}}
    />
)

export default BlockText