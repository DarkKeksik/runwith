import React from "react";
import styles from "./styles.module.scss";
import {Title, Wrap1024, Map} from "@Components";

const TeamSearch = ():JSX.Element => {
    return (
        <section className={styles.teamSearch}>
            <Wrap1024>
                <header>
                    <Title text={"Начать поиск"} />
                </header>
                <form className={styles.teamSearch__wrap}>
                    <div className={styles.teamSearch__map}>
                        {/*<Map />*/}
                    </div>
                    <div className={styles.teamSearch__form} />
                </form>
            </Wrap1024>
        </section>
    )
}

export default TeamSearch;