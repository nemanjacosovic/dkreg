import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

import InputConstants, {ButtonStyle, ButtonType, LanguageConstant} from "./constants/CommonConstants";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import Cake from "./assets/cake-original.jpg";
import Logo from "./assets/Logo";

import './App.scss';

interface IDOB {
    day: number;
    month: number;
    year: number;
}

interface IRegForm extends FormValues {
    accountType?: string;
    passwordRepeat?: string;
    dateOfBirth?: IDOB;
    streetName?: string;
    streetNumber?: string;
    termsOfService?: boolean;
    gdprConsent?: boolean;
    newsletter?: boolean;
}

interface FormValues {
    nameFirst: string;
    nameLast: string;
    city: string;
    postalCode: number;
    email: string;
    password: string;
}

const defaultValues = {
    nameFirst: '',
    nameLast: '',
    city: '',
    postalCode: 0,
    email: '',
    password: ''
};

function App() {
    const [isFormParsed, setIsFormParsed] = useState(false);
    const [formData, setFormData] = useState<FormValues>(defaultValues);
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);
    const [dataPostalCode, setDataPostalCode] = useState<any>(null);
    const [isCityValid, setIsCityValid] = useState(false);
    const [dataCity, setDataCity] = useState<any>(null);

    const {register, handleSubmit, reset, errors} = useForm<FormValues>();

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
        city: {
            required: LanguageConstant.CITY_ERROR_REQUIRED,
            minLength: {
                value: 4,
                message: LanguageConstant.CITY_ERROR_LENGTH
            }
        },
        postalCode: {
            required: LanguageConstant.POSTAL_CODE_ERROR_REQUIRED,
            minLength: {
                value: 4,
                message: LanguageConstant.POSTAL_CODE_ERROR_LENGTH
            },
            pattern: /^(?:[1-24-9]\d{3}|3[0-8]\d{2})$/
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

    useEffect(() => {
        if (isPostalCodeValid && isCityValid) {

            if(dataPostalCode?.navn === dataCity?.navn) {
                console.log('BINGO');
            }
            // Timeout just to see the animation
            setTimeout(() => {
                setIsFormCompleted(true);
                setIsFormParsed(false);
            }, 2000);
        }
    }, [isPostalCodeValid, isCityValid, dataPostalCode?.navn, dataCity?.navn]);
    
    // API's https://dawa.aws.dk/dok/api/
    const _checkPostalCode = async (postalCode: number) => {
        const apiUrlPostCode = 'https://dawa.aws.dk/postnumre';
        const response = await fetch(`${apiUrlPostCode}?nr=${postalCode}`);

        if (response.status !== 200) {
            setIsPostalCodeValid(false);
            console.error('API error with postal code.');
            return null;
        }

        const dataPostCode = await response.json();

        setDataPostalCode(dataPostCode[0]);
        setIsPostalCodeValid(true);
    };

    const _checkCityName = async (city: string) => {
        const apiUrlCity = 'https://dawa.aws.dk/supplerendebynavne2';
        const response = await fetch(`${apiUrlCity}?navn=${city}`); // medtagnedlagte param ??

        if (response.status !== 200) {
            setIsCityValid(false);
            console.error('API error with city name.');
            return null;
        }

        const dataCityInfo = await response.json();

        setDataCity(dataCityInfo[0]);
        setIsCityValid(true);
    };

    const onFormSubmit = (data: IRegForm) => {
        setIsFormParsed(true);
        setFormData(data);

        _checkPostalCode(data.postalCode);
        _checkCityName(data.city);
    };

    const _resetForm = () => reset(defaultValues);

    const _renderForm = () => {
        if (isFormCompleted) {
            return null
        }

        return (
            <>
                <h1 className="text-2xl font-semibold">{LanguageConstant.SIGN_UP}</h1>
                <h3 className="text-xs pb-5">{LanguageConstant.FILL_IN_THE_DETAILS}</h3>
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
                    <fieldset className="dkreg-form__group dkreg-form__group--city-code">
                        <Input
                            className='input-postal-code'
                            inputError={errors.postalCode}
                            inputId='postalCode'
                            inputName='postalCode'
                            inputRef={register(formRefAttributes.postalCode)}
                            inputType={InputConstants.TEXT}
                            labelText={LanguageConstant.POSTAL_CODE}
                            placeholderText={LanguageConstant.POSTAL_CODE_PLACEHOLDER}
                        />
                        <Input
                            className='input-city'
                            inputError={errors.city}
                            inputId='city'
                            inputName='city'
                            inputRef={register(formRefAttributes.city)}
                            inputType={InputConstants.TEXT}
                            labelText={LanguageConstant.CITY}
                            placeholderText={LanguageConstant.CITY_PLACEHOLDER}
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
                            loading={isFormParsed}
                        />
                    </div>
                </form>
            </>
        )
    };

    const _successRender = () => {
        if (!isFormCompleted) {
            return null
        }

        return (
            <div className="dkreg-success">
                <img src={Cake} alt={LanguageConstant.SIGN_UP} title={LanguageConstant.SIGN_UP}/>
                <h2>{LanguageConstant.GREAT_WORK} {formData?.nameFirst} {LanguageConstant.FROM} {dataCity?.navn}!</h2>
                <p>{LanguageConstant.CHECK_YOUR_INBOX}<span>; )</span></p>
            </div>
        )
    };

    return (
        <div className="dkreg">
            <main className="flex items-center min-h-screen p-4 lg:justify-center">
                <div className="flex flex-col overflow-hidden rounded-3xl shadow-xl max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-5 bg-white order-last md:order-first md:flex-1">
                        {_renderForm()}
                        {_successRender()}
                    </div>
                    <div className="p-4 py-6 order-first md:order-last text-white bg-white bg-opacity-70 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly" style={{backdropFilter: 'blur(6px)'}}>
                        <Logo className="dkreg-logo" title="DKreg Hjemmeside" description="DKreg logo" aria-label="Logo"/>
                    </div>
                </div>
            </main>
            <footer>Copyright &copy; 2021 DKreg by Auxburgo</footer>
        </div>
    );
}

export default App;
