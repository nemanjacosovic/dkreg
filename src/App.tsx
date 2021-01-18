import React from 'react';
import {useForm} from 'react-hook-form';

import InputConstants, {ButtonStyle, ButtonType, LanguageConstant} from "./constants/CommonConstants";

import Logo from "./assets/Logo";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

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

interface FormValues {
    nameFirst: string;
    nameLast: string;
    email: string;
    password: string;
}

const defaultValues = {
    nameFirst: undefined,
    nameLast: undefined,
    email: undefined,
    password: undefined
};

function App() {
    const {register, handleSubmit, reset, errors} = useForm<FormValues>({defaultValues});
    const onFormSubmit = (data: IRegForm) => {
        console.log(data);
    };
    const _resetForm = () => reset(defaultValues);

    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    const formRefAttributes = {
        nameFirst: {
            required: LanguageConstant.NAME_FIRST_ERROR_REQUIRED,
            pattern: regexName,
            minLength: {
                value: 2,
                message: LanguageConstant.NAME_FIRST_ERROR_LENGTH
            }
        },
        nameLast: {
            required: LanguageConstant.NAME_LAST_ERROR_REQUIRED,
            pattern: regexName,
            minLength: {
                value: 2,
                message: LanguageConstant.NAME_LAST_ERROR_LENGTH
            }
        },
        email: {
            required: LanguageConstant.EMAIL_ERROR_REQUIRED,
            pattern: /^\S+@\S+\.\S+$/
        },
        password: {
            required: LanguageConstant.PASSWORD_ERROR_REQUIRED,
            minLength: {
                value: 10,
                message: LanguageConstant.PASSWORD_ERROR_LENGTH
            }
        }
    }

    return (
        <div className="dkreg">
            <main className="flex items-center min-h-screen p-4 lg:justify-center">
                <div className="flex flex-col overflow-hidden rounded-3xl shadow-xl max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-5 bg-white md:flex-1">
                        <h1 className="text-2xl font-semibold pb-5">Tilmelde</h1>
                        <form className="dkreg-form" onSubmit={handleSubmit(onFormSubmit)}>
                            <fieldset className="dkreg-form__group dkreg-form__group--first-last">
                                <Input
                                    className='input-name-first'
                                    inputError={errors.nameFirst}
                                    inputId='nameFirst'
                                    inputName='nameFirst'
                                    inputRef={register(formRefAttributes.nameFirst)}
                                    inputType={InputConstants.TEXT}
                                    labelText={LanguageConstant.NAME_FIRST}
                                    placeholderText={LanguageConstant.NAME_FIRST_PLACEHOLDER}
                                />
                                <Input
                                    className='input-name-last'
                                    inputError={errors.nameLast}
                                    inputId='nameLast'
                                    inputName='nameLast'
                                    inputRef={register(formRefAttributes.nameLast)}
                                    inputType={InputConstants.TEXT}
                                    labelText={LanguageConstant.NAME_LAST}
                                    placeholderText={LanguageConstant.NAME_LAST_PLACEHOLDER}
                                />
                            </fieldset>
                            <fieldset className="dkreg-form__group dkreg-form__group--email">
                                <Input
                                    className='input-email'
                                    inputError={errors.email}
                                    inputHint={LanguageConstant.EMAIL_HINT}
                                    inputId='email'
                                    inputName='email'
                                    inputRef={register(formRefAttributes.email)}
                                    inputType={InputConstants.EMAIL}
                                    labelText={LanguageConstant.NAME_LAST}
                                    placeholderText={LanguageConstant.EMAIL_PLACEHOLDER}
                                />
                            </fieldset>
                            <fieldset className="dkreg-form__group dkreg-form__group--password">
                                <Input
                                    className='input-password'
                                    inputError={errors.password}
                                    inputHint={LanguageConstant.PASSWORD_HINT}
                                    inputId='password'
                                    inputName='password'
                                    inputRef={register(formRefAttributes.password)}
                                    inputType={InputConstants.PASSWORD}
                                    labelText={LanguageConstant.PASSWORD}
                                    placeholderText={LanguageConstant.PASSWORD_PLACEHOLDER}
                                />
                            </fieldset>
                            <div className="dkreg-form-controls">
                                <Button
                                    btnStyle={ButtonStyle.OUTLINE}
                                    type={ButtonType.RESET}
                                    label={LanguageConstant.FORM_RESET}
                                    onClick={() => _resetForm()}
                                />
                                <Button
                                    btnStyle={ButtonStyle.PRIMARY}
                                    type={ButtonType.SUBMIT}
                                    label={LanguageConstant.FORM_SUBMIT}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="p-4 py-6 text-white bg-white bg-opacity-70 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly" style={{backdropFilter: 'blur(6px)'}}>
                        <Logo title="DKreg Hjemmeside" description="DKreg logo" aria-label="Logo" svgWidth="auto" svgHeight="150"/>
                    </div>
                </div>
            </main>
            <footer>Copyright &copy; 2021 DKreg by Auxburgo</footer>
        </div>
    );
}

export default App;
