import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleCommandLineInput(e) {
    e.preventDefault();
    console.log('here', this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ConsoleUI</h2>
        </div>
        <div>
          <form className="commandLine" onSubmit={(e) => this.handleCommandLineInput(e)}>
              <input type="text" onChange={(e) => this.handleChange(e)}></input>
              <button type="submit">Submit</button>
          </form>
        </div>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
