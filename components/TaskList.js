import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    console.log('TaskList');
    return (
        <div data-test='TaskItemComponent'>
            {tasks.length > 0 ? (
                <ul className='list'>
                    {tasks.map((task) => <Task task={task} key={task.id} />)}
                </ul>
            ) :
                (
                    <div className='no-tasks'>
                        No Tasks!
                    </div>
                )}
        </div >
    );
}

export default TaskList;