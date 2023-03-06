// Todo app in javascript
const taskItems = [];

// get the Text from input and create new Object
// then add the object to task Items
// and call buildTaskList Function to create the List
const getTaskTextHandler = () => {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value;
  console.log(taskText);
  if (taskText) {
    const task = {
      id: Math.random() * 100,
      text: taskText,
      isDone: false,
      isDelete: false,
    };

    taskItems.push(task);
    // old
    // taskItems.push(taskText);

    buildTaskList();
  } else {
    alert('Enter the Task');
  }
};

const buildTaskList = () => {
  const taskList = document.getElementById('task-list');
  const domTask = taskItems.map((task) => {
    console.log('task in map ', task);

    const spanClass = task.isDelete ? 'delete' 
    : task.isDelete && task.isDone ?
     'delete' : task.isDone ? 'done' : '';

     
    //     let spanClass2 = '';
    //     if (task.isDelete) {
    //       spanClass2 = 'delete';
    //     } else if (task.isDelete && task.isDone) {
    //       spanClass2 = 'delete';
    //     } else if (task.isDone) {
    //       spanClass2 = 'done';
    //     }

    return `<li id=${task.id}>
                <div class="todo-item">
                        <span class="${spanClass}"> ${task.text}</span>
                        <button class="btn-done" onclick="doneHandler(${task.id})">Done</button>
                        <button class="btn-delete" onclick="deleteHandler(${task.id})">Delete</button>
                </div>
           </li>`;
  });

  console.log('dom list', domTask);
  taskList.innerHTML = domTask.join(' ');
};

const doneHandler = (id) => {
  taskItems.forEach((task) => {
    if (task.id === id) {
      task.isDone = true;
    }
  });

  buildTaskList();
};

const deleteHandler = (id) => {
  taskItems.forEach((task) => {
    if (task.id === id) {
      task.isDelete = true;
    }
  });

  buildTaskList();
};
