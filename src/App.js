
import './App.css';

function App() {
  const users = [
    { name: "Samuel", age:30 },
    { name: "Debby", age: 28 },
    { name: "Josh", age: 27 },
  ];

  return (
    <div className="App">
      
        {users.map((user,key) => {
          return  <User name={user.name} age={user.age} />
        })}
      
    </div>
  );
}

const User = (props) => {
  return <div>{props.name} {props.age}</div>;
}



export default App;
