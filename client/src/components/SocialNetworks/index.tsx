import React from "react";
import styles from "./styles.module.scss";

const SocialNetworks = ():JSX.Element => {
    return (
        <div className={styles.socialNetworks}>
            <a className={styles.socialNetworks__icon} href="#">Vk</a>
            <a className={styles.socialNetworks__icon} href="#">Instagram</a>
            <a className={styles.socialNetworks__icon} href="#">Tiktok</a>
        </div>
    )
}

export default SocialNetworks;