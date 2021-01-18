import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import {ButtonStyle, ButtonType, LanguageConstant} from "../../constants/CommonConstants";

const testProps = {
    btnStyle: ButtonStyle.PRIMARY,
    type: ButtonType.SUBMIT,
    label: LanguageConstant.FORM_SUBMIT
}

describe('<Button/> component', () => {
    let component = shallow(<Button {...testProps}/>);
    expect(component).toMatchSnapshot();

    it('<Button/> should exist', () => {
        expect(component.instance()).toBeDefined();
        expect(component).toHaveLength(1);
    });

    it('<Button/> should have css classes', () => {
        expect(component.find('button').length).toBe(1);
        expect(component.find('span').length).toBe(1);
        expect(component.find('.dkreg-form-button').length).toBe(1);
        expect(component.find('.dkreg-form-button__primary').length).toBe(1);
    });

    describe('rendering <Button/> as secondary', () => {
        beforeEach(() => {
            const testPropsNew = { ...testProps, btnStyle: ButtonStyle.SECONDARY };
            component = shallow(<Button {...testPropsNew}/>);
        });

        it('<Button/> should exist', () => {
            expect(component.instance()).toBeDefined();
            expect(component).toHaveLength(1);
        });

        it('<Button/> should have css classes', () => {
            expect(component.find('button').length).toBe(1);
            expect(component.find('span').length).toBe(1);
            expect(component.find('.dkreg-form-button').length).toBe(1);
            expect(component.find('.dkreg-form-button__secondary').length).toBe(1);
        });

        it('<Button/> should have correct value', () => {
            expect(component.find('span').text()).toEqual(LanguageConstant.FORM_SUBMIT);
        });
    });

    describe('rendering <Button/> as outline', () => {
        beforeEach(() => {
            const testPropsOut = { ...testProps, btnStyle: ButtonStyle.OUTLINE, label: LanguageConstant.FORM_RESET };
            component = shallow(<Button {...testPropsOut}/>);
        });

        it('<Button/> should exist', () => {
            expect(component.instance()).toBeDefined();
            expect(component).not.toHaveLength(0);
        });

        it('<Button/> should have correct value', () => {
            expect(component.find('span').text()).toEqual(LanguageConstant.FORM_RESET);
        });

        it('<Button/> should have css classes', () => {
            expect(component.find('button').length).toBe(1);
            expect(component.find('span').length).toBe(1);
            expect(component.find('.dkreg-form-button').length).toBe(1);
            expect(component.find('.dkreg-form-button__outline').length).toBe(1);
        });
    });
})
