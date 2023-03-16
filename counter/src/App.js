import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  const [total, setTotal] = useState(0);

  useEffect(() => {}, []);

  // 1- every time,
  useEffect(() => {
    // console.log(`use Effect in every time ${count}`);
  });

  //2- in component mounting
  useEffect(() => {
    console.log('use Effect in Component mounting');
    setTimeout(() => {
      setCount(5);
    }, 3 * 1000);
  }, []);

  // 3- in update
  useEffect(() => {
    if (count > 20) {
      console.log('use Effect in update count');
      setTotal(count * 2);
      //alert(`The Count is ${count} `);
    }
  }, [count]);

  useEffect(() => {
    if (total > 50) {
      alert(`The Total is ${total}`);
    }
  }, [total]);

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
      <div>
        The Total :<h1>{total}</h1>
      </div>
      <button onClick={(e) => countHandler(1)}>+</button>
      <span>{count}</span>
      {/* <button onClick={(e) => setCount(count - 1)}>-</button> */}
      <button onClick={(e) => countHandler(-1)}>-</button>
    </div>
  );
}

export default App;
