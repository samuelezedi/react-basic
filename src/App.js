
import './App.css';
// import { User } from './User';
// import { Planet } from './Planet';
import { useState } from 'react';

function App() {
 let [count, setCount] = useState(0);
  const decrease = () => {
    setCount(count-1);
  }
  const increase = () => {
    setCount(count+1);
  }
  const zero = () => {
    setCount(0);
  }
  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={zero}>Set to zero</button>

      {count}
    </div>
  );
}





export default App;
