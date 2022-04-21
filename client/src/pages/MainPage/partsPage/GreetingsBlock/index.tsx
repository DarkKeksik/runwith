import React from "react";
import styles from "./styles.module.scss";
import BlockText from "./components/BlockText";

const GreetingsBlock = ():JSX.Element => {
    const textsForBlocks: Array<string> = [
        `Наш сервис поможет вам найди партнеров для бега,
        которые сейчас так&nbsp;же как и вы находятся на&nbsp;этом сервисе`,

        `Вам достаточно заполнить небольшую форму ниже,
        немного подождать и&nbsp;договориться о&nbsp;пробежке
        в открывшемся чате.`,

        `Если у вас есть предложения по улучшению сервиса, пожалуйста напишите мне в телеграм
        контакты вы сможете найти внизу сайта!`,
    ]

    return (
        <section className={styles.section}>
            <div className={styles.section__image} />
            <div className={styles.section__description}>
                <h1 className={styles.section__title}>
                    Найдем тебе партнера для бега!
                </h1>
                <p className={styles.section__text}>
                    {textsForBlocks.map(contentText => <BlockText text={contentText} /> )}
                </p>
                <a href="#" className={styles.section__button}>Перейти к форме</a>
            </div>
        </section>
    )
}

export default GreetingsBlock;