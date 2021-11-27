import React from "react";
import LayoutDefault from "@Layouts/LayoutDefault";
import styles from "./styles.module.scss";

const NotFound = () => {
    return (
        <LayoutDefault>
            <div className={ styles.notFoundWrap }>
                <span>404 | You will not pass</span>
            </div>
        </LayoutDefault>
    )
}

export default NotFound;