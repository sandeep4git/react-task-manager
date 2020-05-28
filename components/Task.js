import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTrash, faEdit, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import '../lib/fontawesome';

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext);
    return (
        <div>
            <li className='list-item'>
                <span>{task.title}</span>
                <span>
                    <span className='btn-delete'>
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => removeTask(task.id)}
                        />
                    </span>
                    <span className='btn-edit'><FontAwesomeIcon
                        icon={faPenAlt}
                        onClick={() => findItem(task.id)}
                    />
                    </span>
                </span>
            </li>
            <hr />
        </div>
    );
}

export default Task;