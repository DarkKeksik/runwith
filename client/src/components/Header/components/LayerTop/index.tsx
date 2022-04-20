import React from "react";
import styles from "./styles.module.scss";
import { Wrap1200, SocialNetworks } from "@Components";

const LayerTop = ():JSX.Element => {
    return (
        <div className={styles.layerTop}>
            <Wrap1200>
                <SocialNetworks />
            </Wrap1200>
        </div>
    )
}

export default LayerTop;