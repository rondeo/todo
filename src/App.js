import React from 'react';
import './App.css';
import { Todos  } from "./Todos"

class App extends React.Component {
    constructor(props) {
     super(props);
    }

    render() {
      const tasks = [
       {
         id:1,
         text: "1"
       },
       {
        id:2,
        text: "2"
      },
      {
        id:3,
        text: "3"
      },
      {
        id:4,
        text: "4"
      },
      ]
  return (
    <div className="App">
      <Todos tasks={tasks}></Todos>
    </div>
  );
}
}

export default App;
