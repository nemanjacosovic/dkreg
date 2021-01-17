import {ChangeEvent, FocusEvent} from "react";

export interface IInputProps<T extends HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    error?: any;
    inputClassName?: string;
    inputConfig?: any;
    inputError?: string;
    inputHint?: string;
    inputId?: string;
    inputName?: string;
    inputRef?: any;
    inputType: string;
    labelText?: string;
    max?: number;
    maxLength?: number;
    min?: number;
    noLabel?: boolean;
    placeholderText?: string;
    required?: boolean;
    value?: string;
    onBlur?(event: FocusEvent<T>): void;
    onChange?(event: ChangeEvent<T>): void;
}
