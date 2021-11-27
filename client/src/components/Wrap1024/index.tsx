import React from "react";
import styles from "./styles.module.scss"

interface PropsInterface {
    children?: React.ReactNode;
}

const Wrap1024 = ({children}: PropsInterface):JSX.Element => {
    return (
        <div className={ styles.wrap1024 }>
            { children }
        </div>
    )
}

export default Wrap1024;