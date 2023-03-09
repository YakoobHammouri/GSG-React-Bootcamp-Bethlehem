import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="app">
        <h1>Todo App</h1>
        <div className="add-task">
          <input type="text" id="task" placeholder="Add a new task" />
          <button id="add-task">Add</button>
        </div>
        <ul id="task-list">
          <li>
            <div className="todo-item">
              <span className=""> Test HTML Task</span>
              <button className="btn-done">Done</button>
              <button className="btn-delete">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
