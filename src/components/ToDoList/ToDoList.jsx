import React from 'react';

import ToDoItem from '../ToDoItem/ToDoItem';
import '../ToDoList/ToDoList.css'

const ToDoList = ({ tasks, deleteTask, updateTask }) => {
    return (
        <div className='todo-list'>
            {tasks.map(task => (
                <ToDoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
            ))}
        </div>
    );
};

export default ToDoList;