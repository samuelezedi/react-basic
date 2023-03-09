
import './App.css';
// import { User } from './User';
// import { Planet } from './Planet';
import { useState } from 'react';

function App() {
 const [textColor, setTextColor] = useState("black");
  const handleTextColor = () => {
    setTextColor(textColor === "black"?"red":"black");
  }
  return (
    <div className="App">
      <button onClick={handleTextColor}>Change Color</button>
      <h1 style={{color:textColor}}>MY NAME IS SAMUEL</h1>
    </div>
  );
}





export default App;
