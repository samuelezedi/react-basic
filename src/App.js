
import './App.css';
// import { User } from './User';
// import { Planet } from './Planet';
import { useState } from 'react';

function App() {
 const [age, setAge] = useState(0);
 const increaseAge = () => {
  setAge(age + 1);
  console.log(age);
 }
  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}> Increase Age </button>
    </div>
  );
}





export default App;
