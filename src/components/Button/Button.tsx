import React, { forwardRef } from 'react';

import { ButtonStyle } from "../../constants/CommonConstants";

import Loader from "../Loader/Loader";

import './Button.scss';

interface ButtonProps {
    className?: string;
    btnStyle: ButtonStyle;
    url?: string;
    onClick?: React.MouseEventHandler;
    disabled?: boolean;
    toggleContent?: boolean;
    type?: 'button' | 'submit' | 'reset';
    label: string;
    loading?: boolean;
}

type Props = ButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const {
        btnStyle,
        onClick,
        type,
        label,
        loading
    } = props;

    const _onClick = (event: React.MouseEvent) => {
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    const parseButtonStyle = () => {
        switch (btnStyle) {
            case ButtonStyle.PRIMARY:
                return ` dkreg-form-button__${ButtonStyle.PRIMARY}`
            case ButtonStyle.SECONDARY:
                return ` dkreg-form-button__${ButtonStyle.SECONDARY}`
            case ButtonStyle.OUTLINE:
                return ` dkreg-form-button__${ButtonStyle.OUTLINE}`
            default:
                return null;
        }
    };

    return (
        <button type={type} className={`dkreg-form-button${parseButtonStyle()}${loading ? ' loading' : ''}`} onClick={_onClick}>
            {loading ? <Loader/> : label}
        </button>
    );
});

export default Button;

