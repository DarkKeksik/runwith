import React from "react";
import { Logo } from "@Components";
// @ts-ignore
import styles from "./styles.module.scss";

const LayerMiddle = () => {
    return (
        <div className={styles.LayerMiddle}>
            <Logo text="runwith" />
        </div>
    )
}

export default LayerMiddle;