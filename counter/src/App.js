import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  const countHandler = (newVal) => {
    if (count > 0) {
      setCount(count + newVal);
    }
  };

  //(e) => countHandler(1)
  const eventHandler = (e) => {
    return countHandler(1);
  };

  //(e) => countHandler(1)
  function eventHandler2(e) {
    return countHandler(1);
  }

  return (
    <div className="App">
      <button onClick={(e) => countHandler(1)}>+</button>
      <span>{count}</span>
      {/* <button onClick={(e) => setCount(count - 1)}>-</button> */}
      <button onClick={(e) => countHandler(-1)}>-</button>
    </div>
  );
}

export default App;
