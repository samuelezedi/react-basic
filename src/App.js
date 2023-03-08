
import './App.css';

function App() {
  const names = ["Pedro", "Jake", "Karen", "Manuel", "Mike",  "Jessica"];

  return (
    <div className="App">
      
        {names.map((name,key) => {
          return <h1 key={key}>{name}</h1>;
        })}
      
    </div>
  );
}



export default App;
