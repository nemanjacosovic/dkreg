import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App/> component', () => {
  let component = shallow(<App/>);
  expect(component).toMatchSnapshot();

  it('<App/> should exist', () => {
    expect(component.instance()).toBeDefined();
    expect(component).toHaveLength(1);
  });

  it('<App/> should have default css classes', () => {
    expect(component.find('main').length).toBe(1);
    expect(component.find('h1').length).toBe(1);
    expect(component.find('.dkreg').length).toBe(1);
  });

  it('<App/> should have title and form', () => {
    expect(component.find('fieldset').length).toBe(3);
    expect(component.find('.dkreg-form').length).toBe(1);
    expect(component.find('.dkreg-form-controls').length).toBe(1);
  });

  it('<App/> should have footer', () => {
    expect(component.find('footer').length).toBe(1);
  });
});
