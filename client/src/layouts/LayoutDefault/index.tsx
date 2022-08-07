import React from "react";
import { Header, Footer, MenuMain, Wrap1200 } from "@Components";
import styles from "./styles.module.scss";

const LayoutDefault:React.FC = ({children}) => {
    return (
        <>
            <Header />
            <div className={styles.menuWrap}>
                <Wrap1200>
                    <MenuMain/>
                </Wrap1200>
            </div>
            { children }
            <Footer />
        </>
    )
}

export default LayoutDefault;