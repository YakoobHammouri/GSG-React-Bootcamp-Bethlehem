const taskItems = [];
//Step 1
const addTask = () => {
  {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = {
        id: Math.floor(Math.random() * 100),
        text: taskText,
        isDone: false,
        isDelete: false,
      };

      taskItems.push(task);
      taskInput.classList.remove('input-error');
      taskInput.value = '';
      BuildTasks();
    } else {
      taskInput.classList.add('input-error');
    }
  }
};

//Step 2
const BuildTasks = () => {
  const taskList = document.getElementById('task-list');
  const tasks = taskItems.map((task) => {
    const spanClass = task.isDone && task.isDelete ? 'delete' : task.isDone ? 'done' : task.isDelete ? 'delete' : '';
    return `<li id=${task.id}>
                <div class="todo-item">
                  <span class="${spanClass}">
                  ${task.text}</span>
                  <button class="btn-done" onclick="doneBtn(${task.id})">Done</button>
                  <button class="btn-delete" onclick="deleteBtn(${task.id})">Delete</button>
                </div>
            </li>`;
  });

  taskList.innerHTML = null;
  taskList.innerHTML = tasks.join(' ');
};

//Step 3
const doneBtn = (id) => {
  taskItems.forEach((item) => {
    if (item.id == id) {
      item.isDone = true;
    }
  });
  BuildTasks();
};

//Step 4
const deleteBtn = (id) => {
  taskItems.map((item) => {
    if (item.id == id) {
      item.isDelete = true;
    }
  });
  BuildTasks();
};
