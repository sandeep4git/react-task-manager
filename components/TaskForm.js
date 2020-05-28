import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id)
        }
    }
    const handleClear = () => {
        setTitle('');
        clearList();
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('');
        }
    }, [editItem])

    return (
        <div>
            <form className='form'>
                <input
                    required
                    onChange={handleChange}
                    value={title}
                    type='text'
                    className='task-input'
                    placeholder='Add Task'
                />
                <div className='buttons'>
                    <button
                        type="button"
                        className='btn add-task-btn'
                        onClick={handleSubmit}>
                        {editItem ? 'Edit Task' : 'Add Task'}
                    </button>
                    <button
                        type='button'
                        className='btn clear-btn'
                        onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}
export default TaskForm;