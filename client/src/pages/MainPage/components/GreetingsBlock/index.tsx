import React from "react";
import styles from "./styles.module.scss";

const GreetingsBlock = ():JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.section__image} />
            <div className={styles.section__description}>
                <h1 className={styles.section__title}>
                    Найди себе партнера по бегу!
                </h1>
                <p className={styles.section__text}>
                    <span className={styles.section__textBlock}>
                        Движение это жизнь, а&nbsp;еще жизнь это общение и&nbsp;яркие эмоции.
                        Мы&nbsp;как и&nbsp;вы&nbsp;ценим её и&nbsp;поэтому помогаем находить единомышленников!
                    </span>
                    <span className={styles.section__textBlock}>
                        Наш сервис поможет вам найди партнеров для бега,
                        которые сейчас так&nbsp;же находится на&nbsp;нашем сайте.
                        Вам достаточно начать поиск, выбрать нужные поля в форме,
                        немного подождать и&nbsp;договориться о&nbsp;пробежке.
                    </span>
                </p>
                <a href="#" className={styles.section__button}>Перейти к форме</a>
            </div>
        </section>
    )
}

export default GreetingsBlock;