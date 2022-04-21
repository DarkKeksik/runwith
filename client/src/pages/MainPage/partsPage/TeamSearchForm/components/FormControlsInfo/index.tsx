import React from 'react'
import styles from './styles.modules.scss'

type TProps = {
    title: string,
    description?: string
}

const FormControlsInfo = ({title, description}: TProps): JSX.Element => {
    return (
        <>
            <h4 className={styles.title}>{title}</h4>
            {description && <p className={styles.description}>{description}</p>}
        </>
    )
}

export default FormControlsInfo