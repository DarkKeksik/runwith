import React from 'react'
import cn from "classnames";

import { Map } from "@Components";
import styles from './styles.modules.scss'


const MapForForm = (): JSX.Element => {
    return (
        <div
            className={cn(styles.mapWrap, styles.mapWrap_bgWhite)}
            id='formMap'
        >
            <div className={styles.map}>
                <Map />
            </div>
        </div>
    )
}

export default MapForForm