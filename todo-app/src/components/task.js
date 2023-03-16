import React from 'react';

const Task = (props) => {
  console.log('props', props);
  const { task, doneFun } = props;

  const spanCalss = task.isDone ? 'done' : '';
  return (
    <li>
      <div className="todo-item">
        <span className={spanCalss}>{task.text}</span>
        <button className="btn-done" onClick={(e) => doneFun(task.id)}>
          Done
        </button>
        <button className="btn-delete">Delete</button>
      </div>
    </li>
  );
};

export default Task;
