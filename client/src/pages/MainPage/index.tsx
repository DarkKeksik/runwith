import React from "react";
// @ts-ignore
import styles from "./styles.module.scss";
import LayoutDefault from "../../layouts/LayoutDefault";
import SectionFirst from "./components/SectionFirst";

const Main = () => {
    return (
        <LayoutDefault>
            <SectionFirst />
        </LayoutDefault>
    )
}

export default Main;