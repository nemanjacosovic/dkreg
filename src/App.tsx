import React from 'react';
import { useForm } from 'react-hook-form';

import InputConstants, {LanguageConstant} from "./constants/CommonConstants";

import Logo from "./assets/Logo";
import Input from "./components/Input/Input";

import './App.scss';

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

    return (
        <div className="dkreg">
            <main className="flex items-center min-h-screen p-4 lg:justify-center">
                <div className="flex flex-col overflow-hidden rounded-3xl shadow-xl max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-5 bg-white md:flex-1">
                        <h1 className="text-2xl font-semibold pb-5">Tilmelde</h1>
                        <form className="dkreg-form" onSubmit={handleSubmit(onFormSubmit)}>
                            {/* First and Last and Middle */}
                            <fieldset className="dkreg-form__group dkreg-form__group--first-last">
                                {/*<legend>Basic info:</legend>*/}
                                <Input
                                    className='input-name-first'
                                    labelText={LanguageConstant.NAME_FIRST}
                                    inputId='nameFirst'
                                    inputType={InputConstants.TEXT}
                                    inputName='nameFirst'
                                    placeholderText={LanguageConstant.NAME_FIRST_PLACEHOLDER}
                                    inputRef={register(formRefAttributes.nameFirst)}
                                />
                                <Input
                                    className='input-name-last'
                                    labelText={LanguageConstant.NAME_LAST}
                                    inputId='nameLast'
                                    inputType={InputConstants.TEXT}
                                    inputName='nameLast'
                                    placeholderText={LanguageConstant.NAME_LAST_PLACEHOLDER}
                                    inputRef={register(formRefAttributes.nameLast)}
                                />
                            </fieldset>
                            {/* Email */}
                            <fieldset className="dkreg-form__group dkreg-form__group--email">
                                {/*<legend>Email:</legend>*/}
                                <Input
                                    className='input-email'
                                    labelText={LanguageConstant.NAME_LAST}
                                    inputId='email'
                                    inputType={InputConstants.EMAIL}
                                    inputName='email'
                                    inputHint={LanguageConstant.EMAIL_HINT}
                                    placeholderText={LanguageConstant.EMAIL_PLACEHOLDER}
                                    inputRef={register(formRefAttributes.email)}
                                />
                            </fieldset>
                            {/* Password */}
                            <fieldset className="dkreg-form__group dkreg-form__group--password">
                                <Input
                                    className='input-password'
                                    labelText={LanguageConstant.PASSWORD}
                                    inputId='password'
                                    inputType={InputConstants.PASSWORD}
                                    inputName='password'
                                    inputHint={LanguageConstant.PASSWORD_HINT}
                                    placeholderText={LanguageConstant.PASSWORD_PLACEHOLDER}
                                    inputRef={register(formRefAttributes.password)}
                                />
                            </fieldset>
                            <div className="dkreg-form__group dkreg-form__group--controls">
                                <button type="reset" className="dkreg-form__submit-button dkreg-form__submit-button--reset rounded-md">{LanguageConstant.FORM_RESET}</button>
                                <button type="submit" className="dkreg-form__submit-button rounded-md shadow-lg">{LanguageConstant.FORM_SUBMIT}</button>
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
