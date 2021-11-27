import React from "react";
import { Header, Footer, MenuMain, Wrap1024 } from "@Components";
import styles from "./styles.module.scss";

interface PropsInterface {
    children?: React.ReactNode
}

const LayoutDefault = ({children}: PropsInterface):JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.menuWrap}>
                <Wrap1024>
                    <MenuMain/>
                </Wrap1024>
            </div>
            { children }
            <Footer />
        </>
    )
}

export default LayoutDefault;