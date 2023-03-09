
import './App.css';
// import { User } from './User';
// import { Planet } from './Planet';
import { useState } from 'react';

function App() {
 const [inputValue, setInputValue] = useState("");
 const handleInputChange = (event) => {
  setInputValue(event.target.value);
  console.log(event.target.value);
 }
  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}





export default App;
