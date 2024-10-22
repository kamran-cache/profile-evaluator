import React, { useState, useEffect } from 'react';
import './todo.css';

const ToDoList = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage on state change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask(''); // Clear input field
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen">
    <div className="todo-container">
      <h1 className='mb-2 font-semibold'>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ToDoList;
