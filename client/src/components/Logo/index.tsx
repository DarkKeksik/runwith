import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface PropsInterface {
    text?: string
}

const Logo = ({text}: PropsInterface):JSX.Element => (
    <NavLink
        to="/"
        className={styles.logo__text}
    >
        <p>
            <span>{ text }</span>
            <span className={styles.logo__text_extra}>СПБ Beta</span>
        </p>
    </NavLink>
);

export default Logo;