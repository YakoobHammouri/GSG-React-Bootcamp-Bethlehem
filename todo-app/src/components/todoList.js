import React, { useState } from 'react';
import Task from './task';
const TodoList = () => {
  const [taskText, setTaskText] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const taskInputHandler = (e) => {
    setTaskText(e.target.value);
  };

  const addTaskHandler = (e) => {
    const task = {
      id: Math.random() * 100,
      text: taskText,
      isDone: false,
      isDelete: false,
    };

    const newTaskItems = [...taskItems, task];
    setTaskItems(newTaskItems);
  };

  const doneFun = (id) => {
    console.log('id in ete', id.target);
    const newTaskItems = taskItems.map((task) => {
      if (task.id === id) {
        task.isDone = true;
      }
      return task;
    });

    setTaskItems(newTaskItems);
  };

  return (
    <div id="app">
      <h1>Todo App</h1>
      <div className="add-task">
        <input type="text" id="task" placeholder="Add a new task" onChange={taskInputHandler} />
        <button id="add-task" onClick={addTaskHandler}>
          Add
        </button>
      </div>
      <ul id="task-list">
        {taskItems.map((task) => {
          return <Task key={task.id} task={task} doneFun={doneFun} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
