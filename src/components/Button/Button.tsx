import React, { forwardRef } from 'react';
import { ButtonStyle } from "../../constants/CommonConstants";

// Link, Loader

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
        label,
        onClick,
        type,
        btnStyle
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
        <button type={type} className={`dkreg-form-button${parseButtonStyle()}`} onClick={_onClick}>
            <span>{label}</span>
        </button>
    );
});

export default Button;

