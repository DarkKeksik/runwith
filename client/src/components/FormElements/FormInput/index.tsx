import React from 'react'
import styles from './styles.module.scss'

type TProps = {
    placeholder?: string
    isRequired?: boolean
    name: string
}

const FormInput = ({placeholder, isRequired, name}: TProps):JSX.Element => {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            type="text"
            required={isRequired}
            name={name}
        />
    )
}

FormInput.defaultProps = {
    placeholder: "Default placeholder",
    isRequired: false
}

export default FormInput