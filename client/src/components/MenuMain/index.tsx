import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import styles from "./styles.module.scss";

const MenuMain = (): JSX.Element => {
    return (
        <nav className={ styles.MainMenu }>
            <NavLink
                className={styles.MainMenu__item}
                to="/"
                activeClassName={styles.MainMenu__item_active}
                exact
            > Главная </NavLink>

            <NavLink
                className={styles.MainMenu__item}
                to="/search-rooms"
                activeClassName={styles.MainMenu__item_active}
            >Сейчас в поиске</NavLink>

            <NavLink
                className={styles.MainMenu__item}
                to="/meetings"
                activeClassName={styles.MainMenu__item_active}
            >Мероприятия</NavLink>

            <NavLink
                className={styles.MainMenu__item}
                to="/about"
                activeClassName={styles.MainMenu__item_active}
            >О проекте</NavLink>

            <NavLink
                className={styles.MainMenu__item}
                to="/news"
                activeClassName={styles.MainMenu__item_active}
            >Чего нового</NavLink>
        </nav>
    )
}

export default MenuMain;