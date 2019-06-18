import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
     super(props);

     this.state = {
       counter: 0
     };
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }

    render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Счётчик сейчас равен {this.state.counter}
        </p>
        <button type="button" onClick={this.handleClick.bind(this)}>Увеличить Счётчик</button>
      </header>
    </div>
  );
}
}

export default App;
