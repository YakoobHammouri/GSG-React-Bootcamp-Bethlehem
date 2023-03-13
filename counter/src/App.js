import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // run on every render of the component
  useEffect(() => {
    console.log('use Effect 1 run in every render ');
  });

  // effect will only run once, when the component mounts,
  // and will not run again for subsequent renders.
  useEffect(() => {
    console.log('use Effect 2 run just in component mounts');
  }, []);

  // the effect will run when any of the dependencies in the list change.
  useEffect(() => {
    console.log('run when the counter changed');
    if (counter > 20) {
      alert(`good the counter is ${counter} `);
    }
  }, [counter]);

  const updateCounter = (newCounter) => {
    setCounter(counter + newCounter);
  };

  return (
    <div className="App">
      <div className="counter-div">
        <button onClick={(e) => updateCounter(-1)}>-</button>
        <span>{counter}</span>
        <button onClick={(e) => updateCounter(1)}>+</button>
      </div>
    </div>
  );
};

export default App;
