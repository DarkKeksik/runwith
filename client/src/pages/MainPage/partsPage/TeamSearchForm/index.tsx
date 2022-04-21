import React, {useReducer} from "react"
import cn from 'classnames'

import {
    TFormStepInitial,
    TFormStepReducer,
    TFormStepAction
} from "./types/Types"
import styles from "./styles.module.scss"
import { Wrap1200 } from "@Components"
import { FormTitle, FormInput } from "@Components/FormElements"
import { FormControlsInfo, MapForForm } from './components'


const TeamSearchForm = ():JSX.Element => {
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

    // @TODO Нужно разнести по компонентам еще больше
    return (
        <section className={styles.section}>
            <form className={styles.form}>
                <div className={styles.form__bg}>
                    <Wrap1200>
                        <div className={styles.form__contentWrap}>
                            <div className={
                                cn(
                                    styles.form__floatingSquares,
                                    {[styles.form__floatingSquares_activated]: formStep === 'map'}
                                )
                            }/>
                                <div className={styles.form__controls}>
                                    <div className={cn(styles.form__controlsItem, styles.form__controlsItem_gap)}>
                                        <FormControlsInfo
                                            title='Начинаем поиск'
                                            description={`Выберите удобный для вас район на карте справа,
                                            нажмите начать поиск и
                                            договоритесь с найденным человеком о пробежке!!!`}
                                        />

                                        <div className={cn(styles.form__controlsButtons, styles.form__controlsButtons_gap)}>
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
                                        <FormControlsInfo
                                            title='Карта'
                                            description={`Как только вы заполните форму,
                                            нажмите на кнопку ниже,
                                            чтобы выбрать удобный для вас район для пробежки.`}
                                        />
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
                                <div className={cn(
                                        styles.form__floatingBlock,
                                        {[styles.form__floatingBlock_right]: formStep === 'map'}
                                    )}
                                >
                                <div className={cn(styles.form__contentMain, styles.form__contentMain_hidden)}>
                                    <div className={cn(
                                            styles.form__contentFloating,
                                            {[styles.form__contentFloating_right]: formStep === 'map' }
                                        )}
                                    >
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
                                        <MapForForm />
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