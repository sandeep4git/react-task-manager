import React from 'react';
import TaskList from './TaskList';

import { findByTestAtrr } from '../Utils';
import { shallow, mount } from 'enzyme';

import { TaskListContext } from '../context/TaskListContext';

describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {

    });
    it('Should renders without errors', () => {
        const tasks = [
            { title: 'Read the book', id: 1 },
            { title: 'Wash the Car', id: 2 },
            { title: 'Build a React App', id: 3 }]
        const wrapper = mount(
            < TaskListContext.Provider value={{ tasks }
            }>
                <TaskList />
            </TaskListContext.Provider >
        );
        const component = findByTestAtrr(wrapper, 'TaskItemComponent')
        expect(component.length).toBe(1);
    });
})

// test('render without error', () => {

// })