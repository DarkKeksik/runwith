import React from "react";
import styles from "./styles.module.scss";

interface PropsInterface {
    text: string;
}

const Title = ({text}: PropsInterface) => {
    return <h2 className={styles.title}>{ text }</h2>
}

export default Title;