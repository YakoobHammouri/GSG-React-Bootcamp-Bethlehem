import React from 'react';
const Task = (props) => {
  const { task, doneFun, deleteFun } = props;

  const handleDone = (id) => {
    doneFun(id);
  };

  const handleDelete = (id) => {
    deleteFun(id);
  };

  const spanClass = task.isDone && task.isDelete ? 'delete' : task.isDone ? 'done' : task.isDelete ? 'delete' : '';
  return (
    <li id={task.id}>
      <div className="todo-item">
        <span className={spanClass}>{task.text}</span>
        <button className="btn-done" onClick={(event) => handleDone(task.id)}>
          Done
        </button>
        <button className="btn-delete" onClick={(event) => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
