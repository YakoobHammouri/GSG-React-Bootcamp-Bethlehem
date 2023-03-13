import React, { useEffect, useState } from 'react';
import Task from './task';

const TodoList = () => {
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([]);
  // load data from LocalStorage
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('taskList'));
    if (temp) {
      setTaskList(temp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const handleTaskInput = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    const task = {
      id: Math.floor(Math.random() * 100),
      text: taskText,
      isDone: false,
      isDelete: false,
    };
    setTaskList([...taskList, task]);
    setTaskText('');
  };

  const doneFun = (id) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.isDone = true;
      }
      return task;
    });

    setTaskList(newTaskList);
  };

  const deleteFun = (id) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.isDelete = true;
      }
      return task;
    });

    setTaskList(newTaskList);
  };

  return (
    <div id="app">
      <h1>Todo App</h1>
      <div className="add-task">
        <input type="text" id="task" value={taskText} placeholder="Add a new task" onChange={handleTaskInput} />
        <button id="add-task" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul id="task-list">
        {taskList?.map((item) => {
          return <Task task={item} doneFun={doneFun} deleteFun={deleteFun} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
