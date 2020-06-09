import React from 'react';
import Header from './Header';

import { findByTestAtrr } from '../Utils';
import { shallow } from 'enzyme';


describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    it('Should renders without errors', () => {
        const component = findByTestAtrr(wrapper, 'HeaderComponent')
        expect(component.length).toBe(1);
    });
})