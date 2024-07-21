import React, { useState, useEffect } from 'react';

import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sort === 'date') return new Date(a.dueDate) - new Date(b.dueDate);
    return a.title.localeCompare(b.title);
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
      <div className="App">
        <h1>Интерактивный To-Do List</h1>
        <div className='todo-select'>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Все</option>
            <option value="completed">Завершенные</option>
            <option value="uncompleted">Незавершенные</option>
          </select>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="date">По дате</option>
            <option value="title">По заголовку</option>
          </select>
        </div>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={sortedTasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
  );
};

export default App;
