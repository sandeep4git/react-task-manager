import React from 'react';
import Task from './Task';

import { findByTestAtrr } from '../Utils';
import { shallow, mount } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { TaskListContext } from '../context/TaskListContext'

describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should renders without errors', () => {
        const removeTask = () => { };
        const findItem = () => { };
        const props = { title: 'Read the book', id: 1 };
        const wrapper = mount(
            <TaskListContext.Provider value={{ removeTask, findItem }}>
                <Task {...props} />
            </TaskListContext.Provider >
        );
        // expect(wrapper.exists()).toBe(true);
        const component = findByTestAtrr(wrapper, 'TaskComponent')
        expect(component.length).toBe(1);
    });
})

// test('render without error', () => {

// })