import React from "react";
import styles from "./styles.module.scss"

interface PropsInterface {
    children?: React.ReactNode;
}

const Wrap1200 = ({children}: PropsInterface):JSX.Element => {
    return (
        <div className={ styles.wrap1200 }>
            { children }
        </div>
    )
}

export default Wrap1200;