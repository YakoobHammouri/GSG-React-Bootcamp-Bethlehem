# Todo List Rect App
in the simple ToDo app built using React. It consists of two components: ***TodoList*** and ***Task***.

The ***TodoList*** component is the main component that renders the entire ToDo list. It starts by initializing two states: taskText and taskList. The taskText state holds the input value for adding a new task, while the taskList state holds an array of all the tasks.

To load and store data from LocalStorage, two ***useEffect*** hooks are used. The first one is used to load the data from LocalStorage and set it in the taskList state. It runs only once on the initial render of the component. The second one is used to save any changes in the taskList state to LocalStorage every time the state changes.

The ***handleTaskInput*** function is used to update the taskText state whenever the input value changes. The ***handleAddTask*** function is used to add a new task to the taskList state. It creates a new task object with a unique id and sets the isDone and isDelete properties to false. The new task is added to the taskList state by using the spread operator.

The ***doneFun*** and ***deleteFun*** functions are used to mark a task as done or delete a task from the list, respectively. They take the id of the task as an argument and update the isDone or isDelete properties of the corresponding task in the taskList state using the map function.

The ***Task*** component is used to render each individual task item. It takes in the task, doneFun, and deleteFun ***props as arguments***. It uses these props to render the task text, Done and Delete buttons. The spanClass variable is used to set the class name of the task text based on its isDone and isDelete properties.

Overall, this code provides a simple example of how to use useState, useEffect, and props in a ToDo app. It also demonstrates how to store and retrieve data from LocalStorage.