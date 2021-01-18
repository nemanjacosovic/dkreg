export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset'
}

export enum ButtonStyle {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline'
}

const InputConstants = {
    PASSWORD: 'password',
    TEXT: 'text',
    EMAIL: 'email',
    ICON_SIZE: 22,
    ERROR_TEXT: 'Forkert værdi',
    ERROR_TEXT_REQUIRED: 'Påkrævet område',
    ERROR_TEXT_LENGTH: 'Kontroller længden'
}

export const LanguageConstant = {
    NAME_FIRST: 'Fornavn',
    NAME_FIRST_HINT: '',
    NAME_FIRST_ERROR: InputConstants.ERROR_TEXT,
    NAME_FIRST_ERROR_REQUIRED: InputConstants.ERROR_TEXT_REQUIRED,
    NAME_FIRST_ERROR_LENGTH: InputConstants.ERROR_TEXT_LENGTH,
    NAME_FIRST_PLACEHOLDER: 'Harald',

    NAME_LAST: 'Efternavn',
    NAME_LAST_HINT: '',
    NAME_LAST_ERROR: InputConstants.ERROR_TEXT,
    NAME_LAST_ERROR_REQUIRED: InputConstants.ERROR_TEXT_REQUIRED,
    NAME_LAST_ERROR_LENGTH: InputConstants.ERROR_TEXT_LENGTH,
    NAME_LAST_PLACEHOLDER: 'Holm',

    CITY: 'By',
    CITY_HINT: '2200',
    CITY_ERROR: InputConstants.ERROR_TEXT,
    CITY_ERROR_REQUIRED: InputConstants.ERROR_TEXT_REQUIRED,
    CITY_ERROR_LENGTH: InputConstants.ERROR_TEXT_LENGTH,
    CITY_PLACEHOLDER: 'København',

    POSTAL_CODE: 'Postnummer',
    POSTAL_CODE_HINT: '',
    POSTAL_CODE_ERROR: 'Postnummer',
    POSTAL_CODE_ERROR_REQUIRED: 'Postnummer',
    POSTAL_CODE_ERROR_LENGTH: 'Postnummer',
    POSTAL_CODE_PLACEHOLDER: 'Postnummer',

    EMAIL: 'E-mail',
    EMAIL_HINT: 'Du kan bruge bogstaver, tal og punktum',
    EMAIL_ERROR: InputConstants.ERROR_TEXT,
    EMAIL_ERROR_REQUIRED: InputConstants.ERROR_TEXT_REQUIRED,
    EMAIL_ERROR_LENGTH: InputConstants.ERROR_TEXT_LENGTH,
    EMAIL_PLACEHOLDER: 'henry.holm@email.dk',

    PASSWORD: 'Kodeord',
    PASSWORD_HINT: 'Brug 10 eller flere tegn med en blanding af bogstaver, tal og symboler',
    PASSWORD_ERROR: InputConstants.ERROR_TEXT,
    PASSWORD_ERROR_REQUIRED: InputConstants.ERROR_TEXT_REQUIRED,
    PASSWORD_ERROR_LENGTH: InputConstants.ERROR_TEXT_LENGTH,
    PASSWORD_PLACEHOLDER: 'Vær unik',

    PASSWORD_REPEAT: 'Gentag kodeord',

    DATE_OF_BIRTH: 'Fødselsdato',

    SIGN_UP: 'Tilmelde',

    FORM_RESET: 'Nulstil',
    FORM_SUBMIT: 'Opret profil',

    GREAT_WORK: 'Fantastisk arbejde',
    CHECK_YOUR_INBOX: 'se din indbakke'
}

export default InputConstants;
