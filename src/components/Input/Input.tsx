import React, { PureComponent } from 'react';
import InputConstants from '../../constants/CommonConstants';
import {IInputProps} from "../../interfaces/InputInterfaces";
import IconExclamationCircle from "../../assets/Icons/IconExclamationCircle";
import IconEye from "../../assets/Icons/IconEye";
import IconEyeClosed from "../../assets/Icons/IconEyeClosed";

import './Input.scss';

interface State {
    value: string;
    isShowPassword: boolean;
}

class Input extends PureComponent<IInputProps<HTMLInputElement>, State> {
    constructor(props: IInputProps<HTMLInputElement>) {
        super(props);

        this.state = {
            value: '',
            isShowPassword: false
        };
    };

    public onShowPassword = () => this.setState({isShowPassword: !this.state.isShowPassword});

    _renderLabel = () => {
        const {inputId, labelText} = this.props;

        if (!labelText) {
            return null;
        }

        return (
            <label htmlFor={inputId} className="dkreg-form-block__label">{labelText}</label>
        );
    };

    _renderInput = () => {
        const {isShowPassword} = this.state;
        const {inputType, placeholderText, inputName, inputRef, inputId, inputClassName} = this.props;

        const parseClassName = `dkreg-form-block__input${inputClassName ? ' ' + inputClassName : ''}`;

        return (
            <input
                type={isShowPassword ? InputConstants.TEXT : inputType}
                placeholder={placeholderText}
                name={inputName}
                ref={inputRef}
                id={inputId}
                className={parseClassName}
            />
        );
    };

    _renderViewEye = () => {
        const {isShowPassword} = this.state;

        if (!isShowPassword) {
            return <IconEyeClosed svgHeight={InputConstants.ICON_SIZE}/>
        }

        return <IconEye svgHeight={InputConstants.ICON_SIZE}/>
    };

    _renderInputComponent = () => {
        const {inputType, labelText} = this.props;

        const parseClassName = `dkreg-form-block__input-wrapper${!labelText ? ' no-label' : ''}`;

        if (inputType === InputConstants.PASSWORD) {
            return (
                <span className={parseClassName}>
                    {this._renderInput()}
                    <span className="dkreg-form-block__icon" onClick={this.onShowPassword}>
                        {this._renderViewEye()}
                    </span>
                </span>
            );
        }

        return (
            <span className={parseClassName}>{this._renderInput()}</span>
        );
    };

    _renderInputHint = () => {
        const { inputHint } = this.props;
        console.log('inputHint', inputHint);

        if (!inputHint) {
            return null;
        }
        return (
            <span className="dkreg-form-block__helper--hint">Du kan bruge bogstaver, tal og punktum.</span>
        )
    };

    _renderInputError = () => {
        const { inputError } = this.props;

        if (!inputError) {
            return null;
        }

        return (
            <span className="dkreg-form-block__helper--error">
                <IconExclamationCircle svgHeight="18"/>
                {inputError}
            </span>
        );
    };

    _renderHintOrError = () => {
        const isError = false;
        return (
            <div className="dkreg-form-block__helper">
                {isError ? this._renderInputError() : this._renderInputHint()}
            </div>
        );
    };

    render() {
        const {className} = this.props;

        return (
            <div className={`dkreg-form-block${className ? ' dkreg-form-block--' + className : ''}`}>
                {this._renderLabel()}
                {this._renderInputComponent()}
                {this._renderHintOrError()}
            </div>
        );
    }
}

export default Input;
