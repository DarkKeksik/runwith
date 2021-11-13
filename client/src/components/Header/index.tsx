import React from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="logo" />
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/about">О проекте</Link>
            </nav>
        </header>
    )
}

export default Header;