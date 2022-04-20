import React, {useReducer} from "react";
import styles from "./styles.module.scss";
import {Wrap1024, Map} from "@Components";
import { FormTitle, FormInput } from "@Components/FormElements";

const TeamSearchForm = ():JSX.Element => {
    // @TODO разнести по компонентам и файлам
    type TFormStepInitial = 'info' | 'map'
    type TFormStepAction = { type: TFormStepInitial }
    type TFormStepReducer = TFormStepInitial | never

    const formStepInitial: TFormStepInitial = 'info'
    const formReducer = (state: TFormStepInitial, action: TFormStepAction): TFormStepReducer => {
        switch (action.type) {
            case 'info':
                return action.type
            case 'map':
                return action.type
            default:
                throw new Error('Impossible shape step, look to type TFormStepInitial');
        }
    }
    const [formStep, formStepDispatch] = useReducer(formReducer, formStepInitial)

    return (
        <section className={styles.section}>
            <form className={styles.form}>
                <div className={styles.form__bg}>
                    <Wrap1024>
                        <div className={styles.form__contentWrap}>
                            <div className={styles.form__animation} />
                                <div className={styles.form__controls}>
                                    <div className={styles.form__controlsItem}>
                                        <h4 className={styles.form__controlsTitle}>О себе</h4>
                                        <p className={styles.form__controlsDescription}>
                                            Немного информации о том, как вас представить
                                        </p>
                                        <p
                                            className={styles.form__controlsButton}
                                        >Начать поиск</p>
                                        <p
                                            className={styles.form__controlsButton}
                                            onClick={() => formStepDispatch({type: 'info'})}
                                        >Назад</p>
                                    </div>
                                    <div className={styles.form__controlsItem}>
                                        <h4 className={styles.form__controlsTitle}>Карта</h4>
                                        <p className={styles.form__controlsDescription}>
                                            Как только вы заполните форму,
                                            нажмите на кнопку ниже,
                                            чтобы выбрать удобный для вас район для пробежки.
                                        </p>
                                        <p
                                            onClick={() => formStepDispatch({type: 'map'})}
                                            className={styles.form__controlsButton}
                                        >Дальше</p>
                                    </div>
                                </div>
                                <div
                                    className={`
                                        ${styles.form__floatingBlock}
                                        ${formStep === 'map' ? styles.form__floatingBlock_right : ''}
                                    `}
                                >
                                <div className={`
                                    ${styles.form__contentMain}                                
                                    ${styles.form__contentMain_hidden}                                
                                `}>
                                    <div className={`
                                        ${styles.form__contentFloating}
                                        ${formStep === 'map' ? styles.form__contentFloating_right : ''}
                                    `}>
                                        <div
                                            id='formMainContent'
                                            className={styles.form__contentItem}>
                                            <FormTitle text={'Расскажите о себе'} />
                                            <FormInput
                                                name={'name'}
                                                placeholder={'Ваше имя'}
                                                isRequired={true}
                                            />
                                            <FormInput
                                                name={'comment'}
                                                placeholder={'Комментарий для партнера'}
                                            />
                                        </div>
                                        <div
                                            id='formMap'
                                            className={`
                                                ${styles.form__contentItem}
                                                ${styles.form__contentItem_withoutPaddings}
                                            `}>
                                            <div className={styles.form__map}>
                                                <Map />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrap1024>
                </div>

                <div className={`
                    ${styles.section__item}
                    ${styles.section__item_map}
                `}>
                    <Map />
                </div>
            </form>
        </section>
    )
}

export default TeamSearchForm;