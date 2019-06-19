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
         text: "Помыть посуду"
       },
       {
        text: "Помыть посуду"
      },
      {
        text: "Помыть посуду"
      },
      {
        text: "Помыть посуду"
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
