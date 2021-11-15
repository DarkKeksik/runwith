import React from "react";
// @ts-ignore
import styles from "./styles.module.scss";

interface PropsInterface {
    text?: string
}

const Logo = ({text}: PropsInterface):JSX.Element => (
    <p className={styles.logo__text}>
        <span>{ text }</span>
        <span className={styles.logo__text_extra}>СПБ Beta</span>
    </p>
);

export default Logo;