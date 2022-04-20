import React from "react";
import styles from "./styles.module.scss";

interface PropsInterface { title: string }

const TitleSmall = ({ title }:PropsInterface):JSX.Element => (
    <h3 className={styles.titleSmall}>{ title }</h3>
);

export default TitleSmall;