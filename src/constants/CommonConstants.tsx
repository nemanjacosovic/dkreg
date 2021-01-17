const InputConstants = {
    PASSWORD: 'password',
    TEXT: 'text',
    EMAIL: 'email',
    ICON_SIZE: 22,
    ERROR_TEXT: 'Error text'
}

export const LanguageConstant = {
    NAME_FIRST: 'Fornavn',
    NAME_FIRST_HINT: '',
    NAME_FIRST_ERROR: InputConstants.ERROR_TEXT,
    NAME_FIRST_PLACEHOLDER: 'Harald',

    NAME_LAST: 'Efternavn',
    NAME_LAST_HINT: '',
    NAME_LAST_ERROR: InputConstants.ERROR_TEXT,
    NAME_LAST_PLACEHOLDER: 'Holm',

    EMAIL: 'E-mail',
    EMAIL_HINT: 'Du kan bruge bogstaver, tal og punktum',
    EMAIL_ERROR: InputConstants.ERROR_TEXT,
    EMAIL_PLACEHOLDER: 'henry.holm@email.dk',

    PASSWORD: 'Kodeord',
    PASSWORD_HINT: 'Brug %s eller flere tegn med en blanding af bogstaver, tal og symboler',
    PASSWORD_ERROR: InputConstants.ERROR_TEXT,
    PASSWORD_PLACEHOLDER: 'Vær unik',

    PASSWORD_REPEAT: 'Gentag kodeord',

    DATE_OF_BIRTH: 'Fødselsdato',

    FORM_RESET: 'Nulstil',
    FORM_SUBMIT: 'Opret profil',
}

export default InputConstants;
