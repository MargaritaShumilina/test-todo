import React, { useState } from 'react';

import '../ToDoForm/ToDoForm.css'

const ToDoForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !dueDate) {
            alert('Обязательное поле!');
            return;
        }
        const newTask = {
            id: Date.now(),
            title,
            description,
            dueDate,
            completed: false
        };
        addTask(newTask);
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                type="text"
                placeholder="Заголовк задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='todo-form__input'
                required
            />
            <textarea
                placeholder="Описание задачи"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='todo-form__input'
            ></textarea>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className='todo-form__input'
                required
            />
            <button type="submit" className='todo-form__btn'>Добавить</button>
        </form>
    );
};

export default ToDoForm;