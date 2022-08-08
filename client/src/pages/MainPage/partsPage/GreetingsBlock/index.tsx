import React from "react";
import styles from "./styles.module.scss";
import BlockText from "./components/BlockText";

const GreetingsBlock = ({serviceInformation}: any) => (
    <section className={styles.section}>
        <div className={styles.section__image} />
        <div className={styles.section__description}>
            <h1 className={styles.section__title}>
                {/*{ greetingTitle }*/}
            </h1>
            <p className={styles.section__text}>
                {/*{Object.keys(serviceInformation?.[0]).map((id) => (*/}
                {/*    <BlockText key={id} text={serviceInformation[id]} />)*/}
                {/*)}*/}
            </p>
            <a href="#" className={styles.section__button}>Перейти к форме</a>
        </div>
    </section>
)

export default GreetingsBlock;