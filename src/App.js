
import './App.css';

function App() {

  return (
  <div className="App">
      <User name="Samuel" age={30} email="samuelezedi@gmail.com" />
      <User name="Ify" age={50} email="m@mail.com" />
      <User name="Ki" age={21} email="g@mail.com" />
    </div>);
}

const User = (props) => {
  return (<div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
    </div>);
}

export default App;
