import React from "react";
import { LayerTop, LayerMiddle } from "@Components/Header/components";
import styles from './styles.modules.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <LayerTop />
            <LayerMiddle />
        </header>
    )
}

export default Header;