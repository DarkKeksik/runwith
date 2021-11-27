import React from "react";
import styles from "./styles.module.scss";
import { Wrap1024, SocialNetworks } from "@Components";

const LayerTop = ():JSX.Element => {
    return (
        <div className={styles.layerTop}>
            <Wrap1024>
                <SocialNetworks />
            </Wrap1024>
        </div>
    )
}

export default LayerTop;