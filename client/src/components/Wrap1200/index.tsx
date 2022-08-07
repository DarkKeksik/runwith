import React from "react";
import styles from "./styles.module.scss"

const Wrap1200:React.FC = ({children}) => {
    return (
        <div className={ styles.wrap1200 }>
            { children }
        </div>
    )
}

export default Wrap1200;