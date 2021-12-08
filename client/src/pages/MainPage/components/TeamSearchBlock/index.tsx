import React from "react";
import styles from "./styles.module.scss";
import {Title, Wrap1024, Map} from "@Components";

const TeamSearchBlock = ():JSX.Element => {
    return (
        <section className={styles.section}>
            <Wrap1024>
                <header>
                    <Title text={"Начать поиск"} />
                </header>
                <form className={styles.section__wrap}>
                    <div className={styles.section__map}>
                        <h3 className={styles.section__mapTitle}>
                            #1 Выберите район для бега
                        </h3>
                        <Map />
                    </div>
                    <div className={styles.section__form} />
                </form>
            </Wrap1024>
        </section>
    )
}

export default TeamSearchBlock;