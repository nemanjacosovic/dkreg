import React from 'react';
import { useForm } from 'react-hook-form';

import Logo from "./assets/Logo";

import './App.scss';
import IconEye from "./assets/Icons/IconEye";
import IconEyeClosed from "./assets/Icons/IconEyeClosed";

interface IDOB {
    day: number;
    month: number;
    year: number;
}

interface IRegForm {
    accountType: string;
    nameFirst: string;
    nameLast?: string;
    nameMiddle?: string;
    email: string;
    password: string;
    passwordRepeat: string;
    dateOfBirth?: IDOB;
    postCode?: string;
    streetName?: string;
    termsOfService?: boolean;
    gdprConsent?: boolean;
    newsletter?: boolean;
}

function App() {
    const {register, handleSubmit, errors} = useForm();

    const onFormSubmit = (data: IRegForm) => {
        console.log(data);
    };

    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    const currentYear = new Date().getFullYear();
    const passMinLength = 10;

    const formRefAttributes = {
        accountType: {},
        nameFirst: {
            required: true,
            pattern: regexName
        },
        nameLast: {
            required: true,
            pattern: regexName
        },
        nameMiddle: {
            required: true,
            pattern: regexName
        },
        email: {
            required: true,
            pattern: /^\S+@\S+\.\S+$/
        },
        password: {
            required: true,
            minLength: passMinLength
        },
        passwordRepeat: {},
        dateOfBirth: {
            day: { min: 1, max: 31 }, // new Date(2020, 0, 0).getDate()
            month: { min: 1, max: 12 },
            year: { min: currentYear - 99 , max: currentYear - 16 }
        },
        postCode: {},
        streetName: {},
        termsOfService: {},
        gdprConsent: {},
        newsletter: {}
    }

    const LanguageConstant = {
        NAME_FIRST: 'Fornavn',
        NAME_FIRST_PLACEHOLDER: 'Harald',
        NAME_LAST: 'Efternavn',
        NAME_LAST_PLACEHOLDER: 'Holm',
        EMAIL: 'E-mail',
        EMAIL_PLACEHOLDER: 'henry.holm@email.dk',
        PASSWORD: 'Kodeord',
        PASSWORD_REPEAT: 'Gentag kodeord',
        DATE_OF_BIRTH: 'Fødselsdato',
        CREATE_ACCOUNT: 'Opret profil',
    }

    return (
        <div className="dkreg">
            <main className="flex items-center min-h-screen p-4 lg:justify-center">
                <div className="flex flex-col overflow-hidden rounded-3xl shadow-xl max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-5 bg-white md:flex-1">
                        <h1 className="text-2xl font-semibold pb-5">Tilmelde</h1>
                        <form className="dkreg-form">
                            {/* First and Last and Middle */}
                            <fieldset className="dkreg-form__group dkreg-form__group--first-last">
                                {/*<legend>Basic info:</legend>*/}
                                <div className="dkreg-form-block">
                                    <label htmlFor="nameFirst" className="dkreg-form-block__label">{LanguageConstant.NAME_FIRST}</label>
                                    <input type="text" placeholder={LanguageConstant.NAME_FIRST_PLACEHOLDER} name="nameFirst" ref={register(formRefAttributes.nameFirst)} id="nameFirst" className="dkreg-form-block__input"/>
                                    <span className="dkreg-form-block__error">{errors.nameFirst && 'Look! There might be an issue here.'}</span>
                                </div>
                                <div className="dkreg-form-block">
                                    <label htmlFor="nameLast" className="dkreg-form-block__label">{LanguageConstant.NAME_LAST}</label>
                                    <input type="text" placeholder={LanguageConstant.NAME_LAST_PLACEHOLDER} name="nameLast" ref={register(formRefAttributes.email)} id="nameLast" className="dkreg-form-block__input"/>
                                    <span className="dkreg-form-block__error">{errors.email && 'Look! There might be an issue here.'}</span>
                                </div>
                            </fieldset>
                            {/* Email */}
                            <fieldset className="dkreg-form__group dkreg-form__group--email">
                                {/*<legend>Email:</legend>*/}
                                <div className="dkreg-form-block">
                                    <label htmlFor="TODO_SET_NAME" className="dkreg-form-block__label">{LanguageConstant.EMAIL}</label>
                                    <input type="text" placeholder={LanguageConstant.EMAIL_PLACEHOLDER} name="email" ref={register(formRefAttributes.email)} id="TODO_SET_NAME" className="dkreg-form-block__input"/>
                                    <span className="dkreg-form-block__error">{errors.email && 'Look! There might be an issue here.'}</span>
                                </div>
                            </fieldset>
                            {/* Password */}
                            <fieldset className="dkreg-form__group dkreg-form__group--password">
                                <div className="dkreg-form-block">
                                    <label htmlFor="TODO_SET_NAME" className="dkreg-form-block__label">{LanguageConstant.PASSWORD}</label>
                                    <span className="dkreg-form-block__with-icon">
                                        <input type="text" placeholder={LanguageConstant.PASSWORD} name="password" ref={register(formRefAttributes.email)} id="TODO_SET_NAME" className="dkreg-form-block__input"/>
                                        <span className="dkreg-form-block__with-icon--wrapper"><IconEyeClosed svgWidth="auto" svgHeight="22"/></span>
                                    </span>
                                    <span className="dkreg-form-block__error">{errors.email && 'Look! There might be an issue here.'}</span>
                                </div>
                                <p className="dkreg-form-block-description">Brug <strong>{passMinLength}</strong> eller flere tegn med en blanding af bogstaver, tal og symboler.</p>
                            </fieldset>
                            <div className="dkreg-form__group dkreg-form__group--controls">
                                <button type="reset" className="dkreg-form__submit-button dkreg-form__submit-button--reset rounded-md">Nulstil</button>
                                <button type="submit" className="dkreg-form__submit-button rounded-md shadow-lg">Opret profil</button>
                            </div>
                        </form>
                    </div>
                    <div className="p-4 py-6 text-white bg-white bg-opacity-70 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly" style={{backdropFilter: 'blur(6px)'}}>
                        <Logo title="DKreg Hjemmeside" description="DKreg logo" aria-label="Logo" svgWidth="auto" svgHeight="150"/>
                    </div>
                </div>
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default App;
