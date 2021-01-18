import React from 'react';
import { shallow } from 'enzyme';

import InputConstants, { LanguageConstant } from "../../constants/CommonConstants";

import Input from './Input';

const testProps = {
    className: 'input-name-first',
    inputId: 'nameFirst',
    inputName: 'nameFirst',
    inputError: {
        message: LanguageConstant.NAME_FIRST_ERROR
    },
    inputType: InputConstants.TEXT,
    labelText: LanguageConstant.NAME_FIRST,
    placeholderText: LanguageConstant.NAME_FIRST_PLACEHOLDER
}

describe('<Input/> component', () => {
    let component = shallow(<Input {...testProps}/>);
    expect(component).toMatchSnapshot();

    it('<Input/> should exist', () => {
        expect(component.instance()).toBeDefined();
        expect(component).toHaveLength(1);
    });

    it('<Input/> should have default css classes', () => {
        expect(component.find('div').length).toBe(2);
        expect(component.find('input').length).toBe(1);
        expect(component.find('.dkreg-form-block').length).toBe(1);
        expect(component.find('.dkreg-form-block__input-wrapper').length).toBe(1);
    });

    it('<Input/> should render hint or error', () => {
        expect(component.find('.dkreg-form-block__helper').length).toBe(1);
        expect(component.find('.dkreg-form-block__helper--error').length).toBe(1);
        expect(component.find('.dkreg-form-block__helper--hint').length).toBe(0);
    });


    describe('rendering <Input/> as password', () => {
        beforeEach(() => {
            const testPropsNew = { ...testProps, inputType: InputConstants.PASSWORD, labelText: LanguageConstant.PASSWORD };
            component = shallow(<Input {...testPropsNew}/>);
        });

        it('<Input/> should exist', () => {
            expect(component.instance()).toBeDefined();
            expect(component).toHaveLength(1);
        });

        it('<Input/> should have css classes', () => {
            expect(component.find('IconEyeClosed').length).toBe(1);
            expect(component.find('IconExclamationCircle').length).toBe(1);
            expect(component.find('span').length).toBe(3);
            expect(component.find('.dkreg-form-block__icon').length).toBe(1);
        });

        it('<Input/> should have correct values', () => {
            expect(component.find('.dkreg-form-block__label').text()).toEqual(LanguageConstant.PASSWORD);
            expect(component.find('.dkreg-form-block__input').text()).toEqual('');
            expect(component.find('.dkreg-form-block__helper--error').text()).toEqual(`<IconExclamationCircle />${LanguageConstant.NAME_FIRST_ERROR}`);
        });
    });
})
