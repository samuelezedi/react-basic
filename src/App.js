
import './App.css';

function App() {

  return (
  // <div className="App">
  //     <User name="Samuel" age={30} email="samuelezedi@gmail.com" />
  //     <User name="Ify" age={50} email="m@mail.com" />
  //     <User name="Ki" age={21} email="g@mail.com" />
  //   </div>);
  <div className="App">
    <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
  </div>
  );
}

// const User = (props) => {
//   return (<div>
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//     <h1>{props.email}</h1>
//     </div>);
// }

const Job = (props) => {
  return (
    <div>
    <h1>{props.salary}</h1>
    <h2>{props.position}</h2>
    <h2>{props.company}</h2>
    </div>
  );
}

export default App;
