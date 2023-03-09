
import './App.css';
// import { User } from './User';
// import { Planet } from './Planet';
import { useState } from 'react';

function App() {
 const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText(!showText);
  }
  return (
    <div className="App">
      <button onClick={handleShowText}>Show/Hide</button>
      {showText===true && <h1> MY NAME IS SAMUEL</h1>}
    </div>
  );
}





export default App;
