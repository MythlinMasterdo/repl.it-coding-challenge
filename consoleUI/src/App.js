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

  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ConsoleUI</h2>
        </div>
        <div>
          <form>
              <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </form>
        </div>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
