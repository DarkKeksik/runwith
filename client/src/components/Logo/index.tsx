import React from "react";
// @ts-ignore
import styles from "./styles.module.scss";

interface PropsInterface {
    text?: string
}

const Logo = ({text}: PropsInterface):JSX.Element => (
    <span className={styles.logo__text}>{ text }</span>
);

export default Logo;