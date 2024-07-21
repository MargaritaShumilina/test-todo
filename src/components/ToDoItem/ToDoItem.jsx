import React, { useState } from 'react';

import './ToDoItem.css'

const ToDoItem = ({ task, deleteTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [completed, setCompleted] = useState(task.completed);

    const handleUpdate = () => {
        updateTask({ ...task, title, description, dueDate, completed });
        setIsEditing(false);
    };

    const handleToggleComplete = () => {
        setCompleted(!completed);
        updateTask({ ...task, completed: !completed });
    };

    return (
        <div className={`task-item ${completed ? 'completed' : ''}`}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='input task-item__input'
                    />
                    <textarea
                        value={description}
                        className='input task-item__input'
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <input
                        type="date"
                        value={dueDate}
                        className='input task-item__input'
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <button onClick={handleUpdate} className='btn task-item__btn'>Сохранить</button>
                </>
            ) : (
                <div className='todo-item'>
                    <div className='todo-item__content'>
                        <h3 className='todo-item__heading'>{task.title}</h3>
                        <time dateTime={task.dueDate} className='todo-item__date'>{task.dueDate}</time>
                        <p className='todo-item__description'>{task.description}</p>
                        {completed && <span className='todo-item__label-completed'>Ура! Вы молодец!</span>}
                    </div>
                    <div className='todo-item__btn-box'>
                        <button className='btn todo-item__btn-edit' onClick={() => setIsEditing(true)}>Редактировать</button>
                        <button className='btn todo-item__btn-delete' onClick={() => deleteTask(task.id)}>Удалить</button>
                        <button className='btn todo-item__btn-complete' onClick={handleToggleComplete}>
                            {completed ? 'Отметить как незавершенное' : 'Отметить как завершенное'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ToDoItem;