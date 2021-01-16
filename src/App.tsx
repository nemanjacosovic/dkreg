import React from 'react';
import { useForm } from 'react-hook-form';

import Logo from "./assets/Logo";

import './App.css';

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
        password: {},
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
        <div className="App">
            <div className="dkreg-wrapper">
                <header>
                    <div>
                        <h1>
                            <a href="/" title="Hjemmeside">
                                <Logo title="DKreg Hjemmeside" description="DKreg logo" aria-label="Logo" className="dkreg-logo"/>
                                <span>DK reg</span>
                            </a>
                        </h1>
                    </div>
                </header>
                <main>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        {/* First and Last */}
                        <fieldset>
                            <div className="dkreg-button-kit">
                                <label htmlFor="TODO_SET_NAME" className="dkreg-button-kit__label">TEXT_HERE</label>
                                <input type="text" placeholder="Email" name="email" ref={register(formRefAttributes.email)} id="TODO_SET_NAME" className="dkreg-button-kit__input"/>
                                <span className="dkreg-button-kit__error">{errors.email && 'Look! There might be an issue here.'}</span>
                            </div>
                            <div className="dkreg-button-kit">
                                <label htmlFor="TODO_SET_NAME" className="dkreg-button-kit__label">TEXT_HERE</label>
                                <input type="text" placeholder="Email" name="email" ref={register(formRefAttributes.email)} id="TODO_SET_NAME" className="dkreg-button-kit__input"/>
                                <span className="dkreg-button-kit__error">{errors.email && 'Look! There might be an issue here.'}</span>
                            </div>
                        </fieldset>
                        {/* Account Type */}
                        <div className="dkreg-button-kit">
                            <label htmlFor="TODO_SET_NAME" className="dkreg-button-kit__label">TEXT_HERE</label>
                            <input type="text" placeholder="Email" name="email" ref={register(formRefAttributes.email)} id="TODO_SET_NAME" className="dkreg-button-kit__input"/>
                            <span className="dkreg-button-kit__error">{errors.email && 'Look! There might be an issue here.'}</span>
                        </div>

                        <button type="submit">Opret profil</button>
                    </form>
                </main>
                <footer>
                    <div></div>
                </footer>
            </div>
        </div>
    );
}

export default App;
