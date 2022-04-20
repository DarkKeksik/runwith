import React, {useReducer} from "react";
import cn from 'classnames'

import styles from "./styles.module.scss";
import {Wrap1200, Map} from "@Components";
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
                    <Wrap1200>
                        <div className={styles.form__contentWrap}>
                            <div className={styles.form__animation} />
                                <div className={styles.form__controls}>
                                    <div className={cn(styles.form__controlsItem, styles.form__controlsItem_gap)}>
                                        <h4 className={styles.form__controlsTitle}>Начинаем поиск</h4>
                                        <p className={styles.form__controlsDescription}>
                                            Выберите удобный для вас район на карте справа,
                                            нажмите начать поиск и
                                            договоритесь с найденным человеком о пробежке!
                                        </p>
                                        <div className={
                                            cn(styles.form__controlsButtons, styles.form__controlsButtons_gap)
                                        }>
                                            <p className={
                                                cn(
                                                    styles.form__controlsButton,
                                                    styles.form__controlsButton_fill
                                                )
                                            }>Начать поиск</p>

                                            <p
                                                className={styles.form__controlsButton}
                                                onClick={() => formStepDispatch({type: 'info'})}
                                            >Назад</p>
                                        </div>
                                    </div>
                                    <div className={
                                        cn(styles.form__controlsItem, styles.form__controlsItem_gap)
                                    }>
                                        <h4 className={styles.form__controlsTitle}>Карта</h4>
                                        <p className={styles.form__controlsDescription}>
                                            Как только вы заполните форму,
                                            нажмите на кнопку ниже,
                                            чтобы выбрать удобный для вас район для пробежки.
                                        </p>
                                        <div className={
                                            cn(styles.form__controlsButtons, styles.form__controlsButtons_gap)
                                        }>
                                            <p
                                                onClick={() => formStepDispatch({type: 'map'})}
                                                className={
                                                    cn(styles.form__controlsButton, styles.form__controlsButton_fill)
                                                }
                                            >Дальше</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={cn(
                                        styles.form__floatingBlock,
                                        {[styles.form__floatingBlock_right]: formStep === 'map'}
                                    )}
                                >
                                <div className={cn(styles.form__contentMain, styles.form__contentMain_hidden)}>
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
                                            className={
                                                cn(styles.form__contentItem, styles.form__contentItem_withoutPaddings)
                                            }
                                        >
                                            <div className={styles.form__map}>
                                                <Map />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrap1200>
                </div>
            </form>
        </section>
    )
}

export default TeamSearchForm;