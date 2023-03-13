import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // run on every render of the component
  useEffect(() => {});

  // effect will only run once, when the component mounts,
  // and will not run again for subsequent renders.
  useEffect(() => {
    setTimeout(() => {
      setCounter(5);
    }, 2 * 1000);
  }, []);

  // the effect will run when any of the dependencies in the list change.
  useEffect(() => {
    if (counter > 20) {
      alert(`good the counter is ${counter} `);
    }
    console.log('counter :>> ', counter);
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
